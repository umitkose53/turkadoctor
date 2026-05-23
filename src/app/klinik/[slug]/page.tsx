import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

import {
  clinics,
  findClinic,
  findCity,
  findSpecialty,
  findProcedure,
  doctors,
  sortAlphabetical,
} from "@/data";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { ReviewSignalRow } from "@/components/listing/ReviewSignalRow";
import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";

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
  gunubirlik_cerrahi: "Günübirlik Cerrahi Merkezi",
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
    description: `${clinic.name} · ${TYPE_LABELS[clinic.type]} · ${city}. Sağlık Bakanlığı ruhsatlı, doğrulanmış bilgilendirme profili. Sunulan tedaviler ve hekimler.`,
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
  const clinicProcedures = clinic.procedures
    .map((p) => findProcedure(p))
    .filter((p) => p !== undefined);
  const clinicDoctors = sortAlphabetical(
    doctors.filter((d) => d.clinicSlugs.includes(clinic.slug)),
  );
  const visibleSignals = clinic.signals.filter((s) => s.visible);
  const isHospital =
    clinic.type === "ozel_hastane" ||
    clinic.type === "devlet_hastanesi" ||
    clinic.type === "universite_hastanesi";

  // Aynı şehirdeki benzer klinikler
  const similar = sortAlphabetical(
    clinics.filter(
      (c) =>
        c.slug !== clinic.slug &&
        c.citySlug === clinic.citySlug &&
        c.specialties.some((sp) => clinic.specialties.includes(sp)),
    ),
  ).slice(0, 4);

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
    specialties: clinicSpecialties.map((s) => s.name),
    procedures: clinicProcedures.map((p) => p.name),
    isHospital,
    awards: [
      ...(clinic.jciCert ? ["JCI Accredited"] : []),
      ...(clinic.temosCert ? ["Temos International Accredited"] : []),
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

      {/* Header */}
      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <div className="grid grid-cols-[80px_1fr] gap-5">
          <div
            aria-hidden
            className="flex h-20 w-20 items-center justify-center rounded-lg bg-zinc-100 text-2xl font-semibold text-zinc-500"
          >
            {clinic.name.slice(0, 2).toLocaleUpperCase("tr-TR")}
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              {clinic.name}
            </h1>
            <p className="mt-1 text-sm text-zinc-700">
              {TYPE_LABELS[clinic.type]}
              {city ? ` · ${city.name}` : ""}
              {clinic.districtSlug ? ` · ${clinic.districtSlug}` : ""}
            </p>
            {clinic.address ? (
              <p className="mt-1 text-sm text-zinc-600">📍 {clinic.address}</p>
            ) : null}
            <div className="mt-3 flex flex-wrap gap-2">
              {clinic.jciCert ? (
                <Badge variant="verified" title="Joint Commission International akreditasyonu">
                  ✓ JCI
                </Badge>
              ) : null}
              {clinic.temosCert ? (
                <Badge variant="verified" title="Temos International akreditasyonu">
                  ✓ Temos
                </Badge>
              ) : null}
              {clinic.isoCerts?.map((c) => (
                <Badge key={c} variant="outline">
                  {c}
                </Badge>
              ))}
              {clinic.sbRuhsatNo && clinic.ruhsatVerifiedAt ? (
                <Badge variant="muted" title="Sağlık Bakanlığı ruhsatı doğrulandı">
                  SB Ruhsat {clinic.sbRuhsatNo} · {formatTrDate(clinic.ruhsatVerifiedAt)}
                </Badge>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* TOC */}
      <nav
        aria-label="İçindekiler"
        className="mt-6 rounded-xl border border-zinc-200 bg-white p-5"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
          İçindekiler
        </h2>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-700">
          <li><a href="#kurum" className="hover:underline">Kurum profili</a></li>
          {clinicSpecialties.length > 0 ? <li><a href="#branslar" className="hover:underline">Branşlar</a></li> : null}
          {clinicProcedures.length > 0 ? <li><a href="#tedaviler" className="hover:underline">Sunulan tedaviler</a></li> : null}
          {clinicDoctors.length > 0 ? <li><a href="#hekimler" className="hover:underline">Hekimler</a></li> : null}
          {visibleSignals.length > 0 ? <li><a href="#degerlendirmeler" className="hover:underline">Değerlendirmeler</a></li> : null}
          {clinic.address ? <li><a href="#konum" className="hover:underline">Konum</a></li> : null}
          {similar.length > 0 ? <li><a href="#benzer" className="hover:underline">Aynı şehirdeki benzer klinikler</a></li> : null}
        </ul>
      </nav>

      {/* Kurum profili */}
      <section
        id="kurum"
        className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
      >
        <h2 className="text-xl font-semibold text-zinc-900">Kurum profili</h2>
        <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">
              Kurum türü
            </dt>
            <dd className="mt-1 text-zinc-900">{TYPE_LABELS[clinic.type]}</dd>
          </div>
          {clinic.phone ? (
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                Telefon
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                  className="text-sky-700 hover:underline"
                >
                  {clinic.phone}
                </a>
              </dd>
            </div>
          ) : null}
          {clinic.website ? (
            <div>
              <dt className="text-xs uppercase tracking-wide text-zinc-500">
                Web sitesi
              </dt>
              <dd className="mt-1">
                <a
                  href={clinic.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sky-700 hover:underline"
                >
                  {new URL(clinic.website).hostname.replace(/^www\./, "")}
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="text-xs uppercase tracking-wide text-zinc-500">
              Çalışan hekim sayısı (dizinde)
            </dt>
            <dd className="mt-1 text-zinc-900">{clinicDoctors.length}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Akreditasyonlar ve sertifikalar
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {clinic.jciCert ? (
              <Badge variant="verified">JCI Accredited</Badge>
            ) : null}
            {clinic.temosCert ? (
              <Badge variant="verified">Temos International</Badge>
            ) : null}
            {clinic.isoCerts?.map((c) => (
              <Badge key={c} variant="outline">
                {c}
              </Badge>
            ))}
            {!clinic.jciCert && !clinic.temosCert && !clinic.isoCerts?.length ? (
              <p className="text-xs text-zinc-500">
                Bu kurum için kayıtlı uluslararası akreditasyon bilgisi henüz bulunmuyor.
                Doğrulanmış akreditasyon eklemek için{" "}
                <Link href="/profili-duzelt" className="text-sky-700 hover:underline">
                  profili düzelt
                </Link>{" "}
                akışı kullanılabilir.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Branşlar */}
      {clinicSpecialties.length > 0 ? (
        <section
          id="branslar"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            Hizmet verilen branşlar ({clinicSpecialties.length})
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {clinicSpecialties.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${clinic.citySlug}/${s.slug}`}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-800 hover:border-zinc-300"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Sunulan tedaviler */}
      {clinicProcedures.length > 0 ? (
        <section
          id="tedaviler"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            Sunulan tedaviler ({clinicProcedures.length})
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Detaylı tedavi rehberlerini görmek için tedavi adına tıklayın.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {clinicProcedures.map((p) => (
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

      {/* Hekimler */}
      {clinicDoctors.length > 0 ? (
        <section id="hekimler" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            Bu kurumdaki hekimler ({clinicDoctors.length})
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
        <section
          id="degerlendirmeler"
          className="mt-10 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
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

      {/* Konum */}
      {clinic.address ? (
        <section
          id="konum"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">Konum</h2>
          <p className="mt-2 text-sm text-zinc-700">📍 {clinic.address}</p>
          {clinic.phone ? (
            <p className="mt-1 text-sm text-zinc-600">
              📞{" "}
              <a
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                className="text-sky-700 hover:underline"
              >
                {clinic.phone}
              </a>
            </p>
          ) : null}
        </section>
      ) : null}

      {/* Aynı şehirdeki benzer klinikler */}
      {similar.length > 0 ? (
        <section id="benzer" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            {city?.name}&apos;da benzer klinikler
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {similar.map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Disclaimers */}
      <div className="mt-10 space-y-3">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      {/* Düzeltme akışı */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6 text-sm">
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
