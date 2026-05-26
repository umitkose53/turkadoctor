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
  doctorsBySpecialty,
  sortAlphabetical,
} from "@/data";
import { findDtDoctor, dtDoctorsByCityAndSpecialty } from "@/data/dt-doctors";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { DoctorCard } from "@/components/listing/DoctorCard";
import { DoctorMap } from "@/components/listing/DoctorMap";
import { ReviewsCard } from "@/components/listing/ReviewsCard";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
} from "@/lib/seo/title";
import {
  doctorTitleVariant,
  doctorDescriptionVariant,
} from "@/lib/seo/doctor-description";
import {
  breadcrumb,
  jsonLdScript,
  physicianLd,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

type RouteParams = { slug: string };

/**
 * Sadece curated doktorları statik üret. DT havuzundaki ~160K doktor için
 * Next.js'in dynamicParams (default: true) özelliği on-demand SSG yapacak —
 * ilk ziyarette üretilip cache'lenir.
 */
export async function generateStaticParams(): Promise<RouteParams[]> {
  return doctors.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = findDoctor(slug) ?? findDtDoctor(slug);
  if (!doctor) return {};

  const sp = findSpecialty(doctor.specialtySlugs[0])?.name ?? "Hekim";
  const cityName = findCity(doctor.citySlug)?.name ?? "Türkiye";
  const clinicName = doctor.clinicSlugs[0]
    ? findClinic(doctor.clinicSlugs[0])?.name
    : undefined;
  const procedureNames = doctor.procedureSlugs
    .map((s) => findProcedure(s)?.name)
    .filter((n): n is string => Boolean(n));
  const districtName = doctor.districtSlug
    ? doctor.districtSlug.charAt(0).toLocaleUpperCase("tr-TR") +
      doctor.districtSlug.slice(1).replace(/-/g, " ")
    : undefined;

  const args = { doctor, specialtyName: sp, cityName, districtName, clinicName, procedureNames };
  return buildMetadata({
    title: doctorTitleVariant(args),
    description: doctorDescriptionVariant(args),
    path: `/doktor/${slug}`,
  });
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const curated = findDoctor(slug);
  const doctor = curated ?? findDtDoctor(slug);
  if (!doctor) notFound();
  const isDtSource = !curated;

  const primarySpecialty = findSpecialty(doctor.specialtySlugs[0]);
  const otherSpecialties = doctor.specialtySlugs
    .slice(1)
    .map((s) => findSpecialty(s))
    .filter((s) => s !== undefined);
  const city = findCity(doctor.citySlug);
  const primaryClinic = doctor.clinicSlugs[0]
    ? findClinic(doctor.clinicSlugs[0])
    : undefined;
  const allClinics = doctor.clinicSlugs
    .map((s) => findClinic(s))
    .filter((c) => c !== undefined);
  const doctorProcedures = doctor.procedureSlugs
    .map((s) => findProcedure(s))
    .filter((p) => p !== undefined);
  const visibleSignals = doctor.signals.filter((s) => s.visible);

  // Harita için adres ve fallback sorgu
  const mapAddress = primaryClinic?.address;
  const mapFallbackQuery = [
    `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName}`,
    primaryClinic?.name,
    city?.name,
  ]
    .filter(Boolean)
    .join(" ");
  const mapQuery = mapAddress ?? mapFallbackQuery;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapQuery,
  )}`;

  // Aynı klinikteki diğer hekimler (max 6) — sadece curated
  const sameClinic = primaryClinic
    ? sortAlphabetical(
        doctors.filter(
          (d) =>
            d.slug !== doctor.slug &&
            d.clinicSlugs.includes(primaryClinic.slug),
        ),
      ).slice(0, 6)
    : [];

  // Benzer hekimler (aynı branş + aynı şehir) — curated + DT havuzu birleşik
  const similar = primarySpecialty
    ? (() => {
        const curatedSimilar = doctorsBySpecialty(primarySpecialty.slug).filter(
          (d) =>
            d.slug !== doctor.slug &&
            d.citySlug === doctor.citySlug &&
            !sameClinic.some((s) => s.slug === d.slug),
        );
        const dtSimilar = dtDoctorsByCityAndSpecialty(
          doctor.citySlug,
          primarySpecialty.slug,
        ).filter((d) => d.slug !== doctor.slug);
        const merged = [...curatedSimilar];
        const seen = new Set(merged.map((d) => d.slug));
        for (const d of dtSimilar) {
          if (seen.has(d.slug)) continue;
          merged.push(d);
          if (merged.length >= 12) break;
        }
        return sortAlphabetical(merged).slice(0, 6);
      })()
    : [];

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
    hospitalAffiliations: allClinics.map((c) => ({
      name: c.name,
      url: `/klinik/${c.slug}`,
    })),
    alumniOf: doctor.educations?.map((e) => ({ name: e.school })),
    memberships: doctor.memberships,
    ttbSicilNo: doctor.ttbSicilNo,
    procedureNames: doctorProcedures.map((p) => p.name),
    telephone: primaryClinic?.phone ?? null,
    hasMap: mapsSearchUrl,
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
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
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
                <Badge key={s.slug} variant="muted">
                  {s.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>

      {isDtSource ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">ℹ️ Bu profil sınırlı bilgiyle listeleniyor</p>
          <p className="mt-1 leading-relaxed">
            {doctor.titlePrefix ?? "Dr."} {doctor.fullName} kayıtlı uzman olarak{" "}
            <strong>{primarySpecialty?.name ?? "—"}</strong> branşında
            {city ? ` ${city.name} bölgesinde` : ""} hizmet vermektedir. Detaylı
            CV, eğitim ve klinik bilgisi henüz doğrulanmamıştır. Hekim veya yetkilisi
            iseniz profili tamamlamak için{" "}
            <Link
              href="/profili-duzelt"
              className="font-medium underline underline-offset-2"
            >
              profili düzelt
            </Link>
            {" "}sayfasından bize ulaşabilirsiniz.
          </p>
        </div>
      ) : null}

      {/* İçindekiler */}
      <nav
        aria-label="İçindekiler"
        className="mt-6 rounded-xl border border-zinc-200 bg-white p-5"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          İçindekiler
        </h2>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-700">
          <li><a href="#hakkinda" className="hover:underline">Hakkında</a></li>
          {doctorProcedures.length > 0 ? <li><a href="#tedaviler" className="hover:underline">Yaptığı tedaviler</a></li> : null}
          {visibleSignals.length > 0 ? <li><a href="#yorumlar" className="hover:underline">Yorumlar</a></li> : null}
          <li><a href="#harita" className="hover:underline">Harita</a></li>
          {primaryClinic ? <li><a href="#konum" className="hover:underline">Konum</a></li> : null}
          {sameClinic.length > 0 ? <li><a href="#ayniklinik" className="hover:underline">Aynı klinikteki hekimler</a></li> : null}
          {similar.length > 0 ? <li><a href="#benzer" className="hover:underline">Benzer hekimler</a></li> : null}
        </ul>
      </nav>

      {/* Hakkında */}
      <section
        id="hakkinda"
        className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
      >
        <h2 className="text-xl font-semibold text-zinc-900">Hakkında</h2>

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

        {allClinics.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Çalıştığı Kurumlar
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {allClinics.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/klinik/${c.slug}`}
                    className="text-sky-700 hover:underline"
                  >
                    {c.name}
                  </Link>
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

        {doctor.specialtySlugs.length > 0 ? (
          <div className="mt-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Uzmanlık Alanları
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm">
              {doctor.specialtySlugs.map((s) => {
                const sp = findSpecialty(s);
                if (!sp) return null;
                return (
                  <li key={sp.slug}>
                    <Link
                      href={`/branslar/${sp.slug}`}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-zinc-800 hover:border-zinc-300"
                    >
                      {sp.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </section>

      {/* Yaptığı tedaviler */}
      {doctorProcedures.length > 0 ? (
        <section
          id="tedaviler"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            {doctor.titlePrefix ?? "Dr."} {doctor.fullName.split(" ")[0]}{" "}
            tarafından yapılan tedaviler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Tedaviler bilgilendirme amaçlıdır; tıbbi tavsiye yerine geçmez.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {doctorProcedures.map((p) => (
              <Link
                key={p.slug}
                href={`/tedaviler/${p.slug}`}
                className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Yorumlar — Google + Trustpilot vb. kart grid */}
      {visibleSignals.length > 0 ? (
        <section id="yorumlar" className="mt-6">
          <ReviewsCard signals={visibleSignals} />
        </section>
      ) : null}

      {/* Harita */}
      <section id="harita" className="mt-6">
        <DoctorMap
          address={mapAddress}
          fallbackQuery={mapFallbackQuery}
          clinicName={primaryClinic?.name}
          phone={primaryClinic?.phone}
        />
      </section>

      {/* Konum */}
      {primaryClinic ? (
        <section
          id="konum"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">Konum</h2>
          <p className="mt-2 text-sm text-zinc-700">
            <Link
              href={`/klinik/${primaryClinic.slug}`}
              className="font-medium text-sky-700 hover:underline"
            >
              {primaryClinic.name}
            </Link>
          </p>
          {primaryClinic.address ? (
            <p className="mt-1 text-sm text-zinc-600">
              📍 {primaryClinic.address}
            </p>
          ) : null}
          {primaryClinic.phone ? (
            <p className="mt-1 text-sm text-zinc-600">
              📞{" "}
              <a
                href={`tel:${primaryClinic.phone.replace(/\s/g, "")}`}
                className="hover:underline"
              >
                {primaryClinic.phone}
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      {/* Aynı klinikteki hekimler */}
      {sameClinic.length > 0 ? (
        <section id="ayniklinik" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            {primaryClinic?.name} bünyesindeki diğer hekimler
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {sameClinic.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Benzer hekimler */}
      {similar.length > 0 ? (
        <section id="benzer" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            {city?.name}&apos;da {primarySpecialty?.name} alanında diğer hekimler
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {similar.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Disclaimerlar */}
      <div className="mt-10 space-y-3">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      {/* Düzeltme akışı */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6 text-sm">
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
