import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  cities,
  specialties,
  findCity,
  findSpecialty,
  doctorsByCityAndSpecialty,
  clinicsByCityAndSpecialty,
  sortAlphabetical,
} from "@/data";
import { dtDoctorsByCityAndSpecialty } from "@/data/dt-doctors";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  cityBranchDescription,
  cityBranchHeading,
  cityBranchTitle,
  SITE_URL,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  collectionPageLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";

type RouteParams = { sehir: string; bransh: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  const out: RouteParams[] = [];
  for (const city of cities) {
    for (const sp of specialties) {
      out.push({ sehir: city.slug, bransh: sp.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { sehir, bransh } = await params;
  const city = findCity(sehir);
  const sp = findSpecialty(bransh);
  if (!city || !sp) return {};

  const doctorCount =
    doctorsByCityAndSpecialty(city.slug, sp.slug).length +
    dtDoctorsByCityAndSpecialty(city.slug, sp.slug).length;
  const clinicCount = clinicsByCityAndSpecialty(city.slug, sp.slug).length;
  const total = doctorCount + clinicCount;

  // Doorway koruma: <5 listing → noindex
  return buildMetadata({
    title: cityBranchTitle({ city: city.name, branch: sp.name }),
    description: cityBranchDescription({
      city: city.name,
      branch: sp.name,
      count: total,
    }),
    path: `/${sehir}/${bransh}`,
    noindex: total < 5,
  });
}

export default async function CityBranchPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { sehir, bransh } = await params;
  const city = findCity(sehir);
  const sp = findSpecialty(bransh);
  if (!city || !sp) notFound();

  // Curated + DT havuzu — curated başa, dedupe slug bazlı
  const curatedDoctors = doctorsByCityAndSpecialty(city.slug, sp.slug);
  const dtDoctors = dtDoctorsByCityAndSpecialty(city.slug, sp.slug);
  const seenSlugs = new Set(curatedDoctors.map((d) => d.slug));
  const dtUniq = dtDoctors.filter((d) => !seenSlugs.has(d.slug));
  const doctors = sortAlphabetical([...curatedDoctors, ...dtUniq]);
  const clinics = sortAlphabetical(
    clinicsByCityAndSpecialty(city.slug, sp.slug),
  );
  const total = doctors.length + clinics.length;

  const heading = cityBranchHeading({ city: city.name, branch: sp.name });
  const path = `/${sehir}/${bransh}`;

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: city.name, url: `/${city.slug}` },
    { name: sp.name, url: path },
  ]);

  const itemList = alphabeticalItemList({
    name: heading,
    items: [
      ...doctors.map((d) => ({
        name: `${d.titlePrefix ?? "Dr."} ${d.fullName}`,
        url: `/doktor/${d.slug}`,
      })),
      ...clinics.map((c) => ({
        name: c.name,
        url: `/klinik/${c.slug}`,
      })),
    ],
  });

  const collection = collectionPageLd({
    name: heading,
    description: cityBranchDescription({
      city: city.name,
      branch: sp.name,
      count: total,
    }),
    url: path,
    about: { name: city.name, type: "City" },
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

      {/* Breadcrumb */}
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
          <li>
            <Link href={`/${city.slug}`} className="hover:text-zinc-700">
              {city.name}
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{sp.name}</li>
        </ol>
      </nav>

      {/* H1 (her zaman nötr — mevzuat) */}
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        {heading}
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {total} listing · alfabetik sırada
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {/* Doktorlar */}
      {doctors.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Doktorlar ({doctors.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {doctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Klinikler */}
      {clinics.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Klinikler ({clinics.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {clinics.map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}

      {total === 0 ? (
        <Disclaimer variant="warning" className="mt-8">
          Bu kombinasyon için henüz doğrulanmış listing yok. Yakın branş veya
          şehir için aşağıdaki linkleri deneyebilirsiniz.
        </Disclaimer>
      ) : null}

      {/* Hub içeriği — E-E-A-T sinyali (placeholder) */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          {city.name}&apos;da {sp.name} hakkında
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-700">
          {sp.description ??
            `${city.name} ilinde ${sp.name} alanında hizmet veren hekim ve kliniklerin doğrulanmış dizinidir.`}{" "}
          Listede yer alan profiller TTB sicil no doğrulaması, Sağlık Bakanlığı
          ruhsatı ve uluslararası sertifika (JCI, ISO, Temos) doğrulamasından
          geçer. İçerik bilgilendirme amaçlıdır; tedavi kararı için hekiminize
          danışın.
        </p>
        <p className="mt-3 text-xs text-zinc-500">
          Tıbbi inceleyici: TurkaDoctor Tıbbi Danışma Kurulu
        </p>
      </section>
    </div>
  );
}
