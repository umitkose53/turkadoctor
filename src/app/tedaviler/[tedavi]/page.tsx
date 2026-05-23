import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  procedures,
  findProcedure,
  doctorsByProcedure,
  cities,
  sortAlphabetical,
  findSpecialty,
} from "@/data";
import { clinicsByProcedure } from "@/data";

import { Disclaimer } from "@/components/ui/disclaimer";
import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  procedureTitle,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  jsonLdScript,
  medicalProcedureLd,
} from "@/lib/seo/jsonld";

type RouteParams = { tedavi: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return procedures.map((p) => ({ tedavi: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { tedavi } = await params;
  const p = findProcedure(tedavi);
  if (!p) return {};
  return buildMetadata({
    title: procedureTitle(p.name),
    description:
      p.description ??
      `${p.name} hakkında tıbbi inceleyici onaylı bilgilendirme rehberi ve klinik dizini.`,
    path: `/tedaviler/${tedavi}`,
  });
}

export default async function ProcedurePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { tedavi } = await params;
  const p = findProcedure(tedavi);
  if (!p) notFound();

  const spec = findSpecialty(p.specialtySlug);
  const docs = sortAlphabetical(doctorsByProcedure(p.slug));
  const cls = sortAlphabetical(clinicsByProcedure(p.slug));

  const cityBreakdown = cities
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count:
        doctorsByProcedure(p.slug).filter((d) => d.citySlug === c.slug)
          .length +
        clinicsByProcedure(p.slug).filter((cl) => cl.citySlug === c.slug)
          .length,
    }))
    .filter((c) => c.count > 0);

  const path = `/tedaviler/${tedavi}`;
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Tedaviler", url: "/tedaviler" },
    { name: p.name, url: path },
  ]);

  const ld = medicalProcedureLd({
    name: p.name,
    description: p.description,
    slug: p.slug,
  });

  const itemList = alphabeticalItemList({
    name: `${p.name} yapan doktor ve klinikler`,
    items: [
      ...docs.map((d) => ({
        name: `${d.titlePrefix ?? "Dr."} ${d.fullName}`,
        url: `/doktor/${d.slug}`,
      })),
      ...cls.map((c) => ({ name: c.name, url: `/klinik/${c.slug}` })),
    ],
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(ld) }}
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
            <Link href="/tedaviler" className="hover:text-zinc-700">
              Tedaviler
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{p.name}</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        {p.name}
      </h1>
      {spec ? (
        <p className="mt-1 text-sm text-zinc-600">
          Branş:{" "}
          <Link
            href={`/branslar/${spec.slug}`}
            className="text-sky-700 hover:underline"
          >
            {spec.name}
          </Link>
        </p>
      ) : null}

      {p.description ? (
        <p className="mt-4 text-base leading-relaxed text-zinc-800">
          {p.description}
        </p>
      ) : null}

      <p className="mt-2 text-xs text-zinc-500">
        Tıbbi inceleyici: TurkaDoctor Tıbbi Danışma Kurulu
      </p>

      <div className="mt-6 space-y-3">
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {cityBreakdown.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Şehre göre {p.name} yapan kurumlar
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {cityBreakdown.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}/${p.specialtySlug}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span className="font-medium text-zinc-800">{c.name}</span>
                <span className="text-xs text-zinc-500">{c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {docs.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Bu tedaviyi yapan doktorlar ({docs.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {docs.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {cls.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-zinc-900">
            Bu tedaviyi sunan klinikler ({cls.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {cls.map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
