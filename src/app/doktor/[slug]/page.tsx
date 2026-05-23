import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  doctors,
  findDoctor,
  findSpecialty,
  findClinic,
  findCity,
  findProcedure,
} from "@/data";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { ReviewSignalRow } from "@/components/listing/ReviewSignalRow";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  doctorTitle,
} from "@/lib/seo/title";
import {
  breadcrumb,
  jsonLdScript,
  physicianLd,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = findDoctor(slug);
  if (!doctor) return {};

  const sp = findSpecialty(doctor.specialtySlugs[0])?.name ?? "Hekim";
  const city = findCity(doctor.citySlug)?.name ?? "Türkiye";

  return buildMetadata({
    title: doctorTitle({
      fullName: doctor.fullName,
      titlePrefix: doctor.titlePrefix,
      specialty: sp,
      city,
    }),
    description: `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName} · ${sp} · ${city}. TTB sicil doğrulamalı bilgilendirme amaçlı profil.`,
    path: `/doktor/${slug}`,
  });
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const doctor = findDoctor(slug);
  if (!doctor) notFound();

  const primarySpecialty = findSpecialty(doctor.specialtySlugs[0]);
  const otherSpecialties = doctor.specialtySlugs
    .slice(1)
    .map((s) => findSpecialty(s))
    .filter((s) => s !== undefined);
  const city = findCity(doctor.citySlug);
  const primaryClinic = doctor.clinicSlugs[0]
    ? findClinic(doctor.clinicSlugs[0])
    : undefined;
  const visibleSignals = doctor.signals.filter((s) => s.visible);

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    ...(city ? [{ name: city.name, url: `/${city.slug}` }] : []),
    ...(city && primarySpecialty
      ? [
          {
            name: primarySpecialty.name,
            url: `/${city.slug}/${primarySpecialty.slug}`,
          },
        ]
      : []),
    {
      name: `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName}`,
      url: `/doktor/${slug}`,
    },
  ]);

  const ld = physicianLd({
    fullName: doctor.fullName,
    titlePrefix: doctor.titlePrefix,
    slug: doctor.slug,
    photoUrl: doctor.photoUrl,
    specialty: primarySpecialty?.name ?? "Hekim",
    address: primaryClinic
      ? {
          streetAddress: primaryClinic.address,
          addressLocality: city?.name,
          addressRegion: city?.name,
        }
      : {
          addressLocality: city?.name,
          addressRegion: city?.name,
        },
    hospitalAffiliations: primaryClinic
      ? [
          {
            name: primaryClinic.name,
            url: `/klinik/${primaryClinic.slug}`,
          },
        ]
      : undefined,
    alumniOf: doctor.educations?.map((e) => ({ name: e.school })),
    memberships: doctor.memberships,
    ttbSicilNo: doctor.ttbSicilNo,
    procedureNames: doctor.procedureSlugs
      .map((p) => findProcedure(p)?.name)
      .filter((n): n is string => Boolean(n)),
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

      {/* Breadcrumb */}
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
          {city && primarySpecialty ? (
            <>
              <li aria-hidden>›</li>
              <li>
                <Link
                  href={`/${city.slug}/${primarySpecialty.slug}`}
                  className="hover:text-zinc-700"
                >
                  {primarySpecialty.name}
                </Link>
              </li>
            </>
          ) : null}
          <li aria-hidden>›</li>
          <li className="text-zinc-900">
            {doctor.titlePrefix ?? "Dr."} {doctor.fullName}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="grid grid-cols-[96px_1fr] gap-5">
          <div
            aria-hidden
            className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-2xl font-semibold text-zinc-500"
          >
            {doctor.fullName
              .split(" ")
              .map((p) => p[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
              {doctor.titlePrefix ?? "Dr."} {doctor.fullName}
            </h1>
            <p className="mt-1 text-sm text-zinc-700">
              {primarySpecialty?.name}
              {doctor.deneyimYili ? ` · ${doctor.deneyimYili} yıl deneyim` : ""}
            </p>
            {primaryClinic ? (
              <p className="mt-1 text-sm text-zinc-600">
                📍{" "}
                <Link
                  href={`/klinik/${primaryClinic.slug}`}
                  className="hover:underline"
                >
                  {primaryClinic.name}
                </Link>
                {city ? ` · ${city.name}` : ""}
              </p>
            ) : (
              <p className="mt-1 text-sm text-zinc-600">📍 {city?.name}</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {doctor.ttbSicilNo && doctor.ttbVerifiedAt ? (
                <Badge variant="verified">
                  ✓ TTB Sicil {doctor.ttbSicilNo} · doğrulandı{" "}
                  {formatTrDate(doctor.ttbVerifiedAt)}
                </Badge>
              ) : null}
              {otherSpecialties.map((s) => (
                <Badge key={s!.slug} variant="muted">
                  {s!.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Eğitim ve üyelikler */}
      {doctor.educations?.length || doctor.memberships?.length ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">Hakkında</h2>

          {doctor.educations?.length ? (
            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Eğitim
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                {doctor.educations.map((e, i) => (
                  <li key={i}>
                    {e.degree} — {e.school}
                    {e.year ? ` (${e.year})` : ""}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {doctor.memberships?.length ? (
            <div className="mt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Üyelikler
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 text-sm">
                {doctor.memberships.map((m, i) => (
                  <li key={i}>
                    <Badge variant="outline">{m}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* Yorum sinyalleri */}
      {visibleSignals.length > 0 ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Diğer kaynaklarda değerlendirmeler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Aşağıdaki kaynaklar TurkaDoctor puanına dahil değildir; ilgili
            platformlarda yayınlandığı şekliyle yönlendirme amaçlıdır.
          </p>
          <div className="mt-3 space-y-2">
            {visibleSignals.map((s) => (
              <ReviewSignalRow key={s.source} signal={s} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Disclaimerlar */}
      <div className="mt-8 space-y-3">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      {/* Düzeltme akışı */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6 text-sm">
        <Link
          href={`/profili-talep-et?type=doctor&slug=${doctor.slug}`}
          className="text-sky-700 hover:underline"
        >
          Bu profili sahiplen
        </Link>
        <span aria-hidden className="text-zinc-300">·</span>
        <Link
          href={`/profili-duzelt?type=doctor&slug=${doctor.slug}`}
          className="text-sky-700 hover:underline"
        >
          Profili düzelt
        </Link>
        <span aria-hidden className="text-zinc-300">·</span>
        <Link
          href={`/yorum-itiraz?type=doctor&slug=${doctor.slug}`}
          className="text-sky-700 hover:underline"
        >
          Yorum itirazı
        </Link>
      </div>
    </div>
  );
}
