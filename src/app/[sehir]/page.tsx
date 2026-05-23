import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  cities,
  specialties,
  findCity,
  doctorsByCity,
  clinicsByCity,
  sortAlphabetical,
} from "@/data";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  cityHeading,
  cityTitle,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  collectionPageLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";

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

  const total = doctorsByCity(city.slug).length + clinicsByCity(city.slug).length;

  return buildMetadata({
    title: cityTitle(city.name),
    description: `${city.name} il sınırları içindeki doktor ve klinikleri alfabetik sıralı dizini. ${total} listing.`,
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

  const cityDoctors = doctorsByCity(city.slug);
  const cityClinics = clinicsByCity(city.slug);

  // Şehir hub'ında popüler branşlar için breakdown
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

  const featuredDoctors = sortAlphabetical(cityDoctors).slice(0, 6);
  const featuredClinics = sortAlphabetical(cityClinics).slice(0, 6);

  const path = `/${sehir}`;

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: city.name, url: path },
  ]);

  const collection = collectionPageLd({
    name: cityHeading(city.name),
    description: `${city.name} doktor ve sağlık kuruluşları dizini.`,
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

      <nav
        aria-label="Site içi konum"
        className="mb-3 text-sm text-zinc-500"
      >
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

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        {cityHeading(city.name)}
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {cityDoctors.length} doktor · {cityClinics.length} klinik · alfabetik
        dizin
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {/* Branş kırılımı */}
      {branchBreakdown.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            {city.name}&apos;da branşlar
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
          <div className="flex items-end justify-between">
            <h2 className="text-lg font-semibold text-zinc-900">
              Öne çıkan doktorlar
            </h2>
          </div>
          <p className="mt-1 text-xs text-zinc-500">
            Alfabetik ilk 6 hekim
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
          <h2 className="text-lg font-semibold text-zinc-900">
            Öne çıkan klinikler ve hastaneler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Alfabetik ilk 6 kurum
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
