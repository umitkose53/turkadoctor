import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  clinics,
  findClinic,
  findCity,
  findSpecialty,
  doctors,
} from "@/data";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { ReviewSignalRow } from "@/components/listing/ReviewSignalRow";
import { DoctorCard } from "@/components/listing/DoctorCard";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  clinicTitle,
} from "@/lib/seo/title";
import {
  breadcrumb,
  jsonLdScript,
  medicalClinicLd,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

const TYPE_LABELS = {
  muayenehane: "Muayenehane",
  poliklinik: "Poliklinik",
  ozel_hastane: "Özel Hastane",
  devlet_hastanesi: "Devlet Hastanesi",
  universite_hastanesi: "Üniversite Hastanesi",
  tip_merkezi: "Tıp Merkezi",
  agdc: "Ağız ve Diş Sağlığı Merkezi",
} as const;

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return clinics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const clinic = findClinic(slug);
  if (!clinic) return {};

  const city = findCity(clinic.citySlug)?.name ?? "Türkiye";
  return buildMetadata({
    title: clinicTitle({ name: clinic.name, city }),
    description: `${clinic.name} · ${TYPE_LABELS[clinic.type]} · ${city}. Sağlık Bakanlığı ruhsatlı, doğrulanmış bilgilendirme profili.`,
    path: `/klinik/${slug}`,
  });
}

export default async function ClinicPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const clinic = findClinic(slug);
  if (!clinic) notFound();

  const city = findCity(clinic.citySlug);
  const clinicSpecialties = clinic.specialties
    .map((s) => findSpecialty(s))
    .filter((s) => s !== undefined);
  const clinicDoctors = doctors.filter((d) =>
    d.clinicSlugs.includes(clinic.slug),
  );
  const visibleSignals = clinic.signals.filter((s) => s.visible);
  const isHospital =
    clinic.type === "ozel_hastane" ||
    clinic.type === "devlet_hastanesi" ||
    clinic.type === "universite_hastanesi";

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    ...(city ? [{ name: city.name, url: `/${city.slug}` }] : []),
    { name: clinic.name, url: `/klinik/${slug}` },
  ]);

  const ld = medicalClinicLd({
    name: clinic.name,
    slug: clinic.slug,
    description: `${TYPE_LABELS[clinic.type]} · ${city?.name ?? "Türkiye"}`,
    logoUrl: clinic.logoUrl,
    address: {
      streetAddress: clinic.address,
      addressLocality: city?.name,
      addressRegion: city?.name,
    },
    specialties: clinicSpecialties.map((s) => s!.name),
    isHospital,
    awards: [
      ...(clinic.jciCert ? ["JCI Accredited"] : []),
      ...(clinic.isoCerts ?? []),
    ],
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(ld) }}
      />

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-zinc-700">
              Anasayfa
            </Link>
          </li>
          {city ? (
            <>
              <li aria-hidden>›</li>
              <li>
                <Link href={`/${city.slug}`} className="hover:text-zinc-700">
                  {city.name}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{clinic.name}</li>
        </ol>
      </nav>

      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
          {clinic.name}
        </h1>
        <p className="mt-1 text-sm text-zinc-700">
          {TYPE_LABELS[clinic.type]}
          {city ? ` · ${city.name}` : ""}
        </p>
        {clinic.address ? (
          <p className="mt-1 text-sm text-zinc-600">📍 {clinic.address}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-2">
          {clinic.jciCert ? <Badge variant="verified">✓ JCI</Badge> : null}
          {clinic.isoCerts?.map((c) => (
            <Badge key={c} variant="outline">
              {c}
            </Badge>
          ))}
          {clinic.sbRuhsatNo && clinic.ruhsatVerifiedAt ? (
            <Badge variant="muted">
              SB Ruhsat {clinic.sbRuhsatNo} · doğrulandı{" "}
              {formatTrDate(clinic.ruhsatVerifiedAt)}
            </Badge>
          ) : null}
        </div>
      </header>

      {/* Branşlar */}
      {clinicSpecialties.length > 0 ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Bulunan branşlar
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {clinicSpecialties.map((s) => (
              <li key={s!.slug}>
                <Link
                  href={`/${clinic.citySlug}/${s!.slug}`}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-800 hover:border-zinc-300"
                >
                  {s!.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Çalışan hekimler */}
      {clinicDoctors.length > 0 ? (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Hekimler ({clinicDoctors.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {clinicDoctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Yorum sinyalleri */}
      {visibleSignals.length > 0 ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Diğer kaynaklarda değerlendirmeler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Bu kaynaklar TurkaDoctor puanına dahil değildir.
          </p>
          <div className="mt-3 space-y-2">
            {visibleSignals.map((s) => (
              <ReviewSignalRow key={s.source} signal={s} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-8 space-y-3">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6 text-sm">
        <Link
          href={`/profili-talep-et?type=clinic&slug=${clinic.slug}`}
          className="text-sky-700 hover:underline"
        >
          Bu profili sahiplen
        </Link>
        <span aria-hidden className="text-zinc-300">·</span>
        <Link
          href={`/profili-duzelt?type=clinic&slug=${clinic.slug}`}
          className="text-sky-700 hover:underline"
        >
          Profili düzelt
        </Link>
      </div>
    </div>
  );
}
