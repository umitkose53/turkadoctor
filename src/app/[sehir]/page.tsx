import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  cities,
  specialties,
  findCity,
  findSpecialty,
  doctorsByCity,
  clinicsByCity,
  sortAlphabetical,
} from "@/data";
import { dtDoctorsByCity } from "@/data/dt-doctors";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  cityHeading,
  cityTitle,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  collectionPageLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

type RouteParams = { sehir: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return cities.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { sehir } = await params;
  const city = findCity(sehir);
  if (!city) return {};

  const total =
    doctorsByCity(city.slug).length +
    dtDoctorsByCity(city.slug).length +
    clinicsByCity(city.slug).length;

  return buildMetadata({
    title: cityTitle(city.name),
    description:
      city.intro?.slice(0, 156) ??
      `${city.name} il sınırları içindeki doktor ve klinikleri alfabetik dizini. ${total} listing.`,
    path: `/${sehir}`,
    noindex: total < 1,
  });
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { sehir } = await params;
  const city = findCity(sehir);
  if (!city) notFound();

  const curatedDoctors = doctorsByCity(city.slug);
  const dtDoctors = dtDoctorsByCity(city.slug);
  const seenSlugs = new Set(curatedDoctors.map((d) => d.slug));
  const dtUniq = dtDoctors.filter((d) => !seenSlugs.has(d.slug));
  const cityDoctors = [...curatedDoctors, ...dtUniq];
  const cityClinics = clinicsByCity(city.slug);

  const branchBreakdown = specialties
    .map((sp) => ({
      slug: sp.slug,
      name: sp.name,
      count:
        cityDoctors.filter((d) => d.specialtySlugs.includes(sp.slug)).length +
        cityClinics.filter((c) => c.specialties.includes(sp.slug)).length,
    }))
    .filter((b) => b.count > 0)
    .sort((a, b) => b.count - a.count);

  const popularSpecialties = (city.popularSpecialtySlugs ?? [])
    .map((s) => findSpecialty(s))
    .filter((s) => s !== undefined);

  const featuredDoctors = sortAlphabetical(cityDoctors).slice(0, 8);
  const featuredClinics = sortAlphabetical(cityClinics).slice(0, 8);

  const path = `/${sehir}`;

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: city.name, url: path },
  ]);

  const collection = collectionPageLd({
    name: cityHeading(city.name),
    description: city.intro ?? `${city.name} doktor ve sağlık kuruluşları dizini.`,
    url: path,
    about: { name: city.name, type: "City" },
  });

  const itemList = alphabeticalItemList({
    name: cityHeading(city.name),
    items: branchBreakdown.map((b) => ({
      name: `${b.name} (${b.count})`,
      url: `/${sehir}/${b.slug}`,
    })),
  });

  const articleLd = city.lastReviewedAt
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        headline: `${city.name} Doktor ve Klinik Dizini`,
        description: city.intro,
        url: `${SITE_URL}${path}`,
        inLanguage: "tr-TR",
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        reviewedBy: city.medicalReviewerName
          ? { "@type": "Person", name: city.medicalReviewerName }
          : undefined,
        dateModified: city.lastReviewedAt,
        about: { "@type": "City", name: city.name },
      }
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(collection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(itemList) }}
      />
      {articleLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(articleLd) }}
        />
      ) : null}

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-zinc-700">
              Anasayfa
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{city.name}</li>
        </ol>
      </nav>

      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {cityHeading(city.name)}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          {cityDoctors.length} doktor · {cityClinics.length} klinik · alfabetik dizin
        </p>

        {city.medicalReviewerName ? (
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
            <Badge variant="verified">
              ✓ Tıbbi inceleyici: {city.medicalReviewerName}
            </Badge>
            {city.lastReviewedAt ? (
              <span>Son güncelleme: {formatTrDate(city.lastReviewedAt)}</span>
            ) : null}
          </div>
        ) : null}

        {city.intro ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            {city.intro}
          </p>
        ) : null}
      </header>

      <div className="mt-6">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {/* Uzun-form içerik */}
      {city.fullContent ? (
        <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            {city.name}&apos;da sağlık sektörü
          </h2>
          <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-800">
            {city.fullContent.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Medical tourism notu */}
      {city.medicalTourismNote ? (
        <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-base font-semibold text-sky-900">
            Medical Tourism Notu
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-sky-900">
            {city.medicalTourismNote}
          </p>
        </section>
      ) : null}

      {/* Popüler branşlar */}
      {popularSpecialties.length > 0 ? (
        <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            {city.name}&apos;da öne çıkan branşlar
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {popularSpecialties.map((sp) => (
              <Link
                key={sp.slug}
                href={`/${sehir}/${sp.slug}`}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
              >
                {sp.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Branş kırılımı tam liste */}
      {branchBreakdown.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-900">
            {city.name}&apos;da tüm branşlar ({branchBreakdown.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {branchBreakdown.map((b) => (
              <Link
                key={b.slug}
                href={`/${sehir}/${b.slug}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span className="font-medium text-zinc-800">{b.name}</span>
                <span className="text-xs text-zinc-500">{b.count}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Öne çıkan doktorlar */}
      {featuredDoctors.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900">
            Öne çıkan doktorlar
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Alfabetik ilk 8 hekim. Tüm hekimleri branş sayfalarından
            görebilirsiniz.
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {featuredDoctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Öne çıkan klinikler */}
      {featuredClinics.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900">
            Öne çıkan klinikler ve hastaneler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Alfabetik ilk 8 kurum.
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {featuredClinics.map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
