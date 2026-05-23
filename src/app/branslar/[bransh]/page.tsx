import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  specialties,
  findSpecialty,
  doctorsBySpecialty,
  clinicsBySpecialty,
  cities,
  sortAlphabetical,
} from "@/data";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  branchHeading,
  branchTitle,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  collectionPageLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";

type RouteParams = { bransh: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return specialties.map((s) => ({ bransh: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { bransh } = await params;
  const sp = findSpecialty(bransh);
  if (!sp) return {};
  const total =
    doctorsBySpecialty(sp.slug).length + clinicsBySpecialty(sp.slug).length;
  return buildMetadata({
    title: branchTitle(sp.name),
    description: `Türkiye genelinde ${sp.name} hizmeti veren hekim ve kliniklerin alfabetik dizini.`,
    path: `/branslar/${bransh}`,
    noindex: total < 1,
  });
}

export default async function BranchHubPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { bransh } = await params;
  const sp = findSpecialty(bransh);
  if (!sp) notFound();

  const doctors = sortAlphabetical(doctorsBySpecialty(sp.slug));
  const clinics = sortAlphabetical(clinicsBySpecialty(sp.slug));
  const total = doctors.length + clinics.length;

  const cityBreakdown = cities
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count:
        doctorsBySpecialty(sp.slug).filter((d) => d.citySlug === c.slug)
          .length +
        clinicsBySpecialty(sp.slug).filter((cl) => cl.citySlug === c.slug)
          .length,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  const path = `/branslar/${bransh}`;
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Branşlar", url: "/branslar" },
    { name: sp.name, url: path },
  ]);

  const collection = collectionPageLd({
    name: branchHeading(sp.name),
    description: `Türkiye genelinde ${sp.name} dizini.`,
    url: path,
    about: { name: sp.name, type: "MedicalSpecialty" },
  });

  const itemList = alphabeticalItemList({
    name: branchHeading(sp.name),
    items: [
      ...doctors.map((d) => ({
        name: `${d.titlePrefix ?? "Dr."} ${d.fullName}`,
        url: `/doktor/${d.slug}`,
      })),
      ...clinics.map((c) => ({ name: c.name, url: `/klinik/${c.slug}` })),
    ],
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

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-zinc-700">
              Anasayfa
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li>
            <Link href="/branslar" className="hover:text-zinc-700">
              Branşlar
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{sp.name}</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        {branchHeading(sp.name)}
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {total} listing · alfabetik sırada
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {cityBreakdown.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Şehre göre dağılım
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {cityBreakdown.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/${sp.slug}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span className="font-medium text-zinc-800">{c.name}</span>
                <span className="text-xs text-zinc-500">{c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {doctors.length > 0 ? (
        <section className="mt-10">
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
          Bu branş için henüz doğrulanmış listing yok.
        </Disclaimer>
      ) : null}
    </div>
  );
}
