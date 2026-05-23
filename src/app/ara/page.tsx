import Link from "next/link";
import type { Metadata } from "next";

import {
  doctors,
  clinics,
  specialties,
  procedures,
  cities,
  sortAlphabetical,
} from "@/data";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER } from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Arama Sonuçları",
  description:
    "TurkaDoctor doktor, klinik, tedavi ve şehir arama sonuçları. Alfabetik sıralı dizin.",
  path: "/ara",
  noindex: true, // arama sayfası SEO'ya değer katmaz
});

type SP = { q?: string };

function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u");
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").trim();
  const nq = normalize(q);
  const hasQuery = q.length > 0;

  const matchedDoctors = hasQuery
    ? sortAlphabetical(
        doctors.filter((d) =>
          [d.fullName, d.specialtySlugs.join(" "), d.procedureSlugs.join(" ")]
            .map(normalize)
            .some((field) => field.includes(nq)),
        ),
      )
    : [];

  const matchedClinics = hasQuery
    ? sortAlphabetical(
        clinics.filter((c) =>
          [c.name, c.specialties.join(" "), c.procedures.join(" ")]
            .map(normalize)
            .some((field) => field.includes(nq)),
        ),
      )
    : [];

  const matchedSpecialties = hasQuery
    ? specialties.filter((s) => normalize(s.name).includes(nq))
    : [];

  const matchedProcedures = hasQuery
    ? procedures.filter(
        (p) =>
          normalize(p.name).includes(nq) ||
          normalize(p.description ?? "").includes(nq),
      )
    : [];

  const matchedCities = hasQuery
    ? cities.filter((c) => normalize(c.name).includes(nq))
    : [];

  const totalMatches =
    matchedDoctors.length +
    matchedClinics.length +
    matchedSpecialties.length +
    matchedProcedures.length +
    matchedCities.length;

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: hasQuery ? `"${q}" arama sonuçları` : "Arama", url: "/ara" },
  ]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-zinc-700">
              Anasayfa
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">Arama</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
        {hasQuery ? (
          <>
            <span className="text-zinc-600">Arama:</span> {q}
          </>
        ) : (
          "Arama"
        )}
      </h1>

      <form
        action="/ara"
        method="get"
        className="mt-4 flex max-w-2xl items-center gap-2 rounded-full border border-zinc-300 bg-white px-2 py-2 shadow-sm focus-within:border-zinc-400"
      >
        <span aria-hidden className="pl-2 text-zinc-400">
          🔍
        </span>
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Doktor, klinik, tedavi veya şehir ara…"
          className="flex-1 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-zinc-400"
          aria-label="Doktor, klinik, tedavi veya şehir ara"
        />
        <button
          type="submit"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
        >
          Ara
        </button>
      </form>

      {hasQuery ? (
        <p className="mt-3 text-sm text-zinc-600">
          {totalMatches} sonuç bulundu.
        </p>
      ) : (
        <p className="mt-3 text-sm text-zinc-600">
          Bir doktor, klinik, tedavi veya şehir adı yazarak arama yapın.
        </p>
      )}

      <div className="mt-6">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {/* Sonuçlar */}
      {hasQuery && totalMatches === 0 ? (
        <section className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-base font-semibold text-amber-900">
            Hiç sonuç bulunamadı
          </h2>
          <p className="mt-2 text-sm text-amber-900">
            &quot;{q}&quot; için eşleşme yok. Daha kısa bir kelime veya farklı
            yazım deneyebilirsiniz. Önerilen başlangıç noktaları:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-900">
            <li>
              <Link href="/branslar" className="text-sky-700 hover:underline">
                Tüm branşlar
              </Link>
            </li>
            <li>
              <Link href="/tedaviler" className="text-sky-700 hover:underline">
                Tedavi rehberleri
              </Link>
            </li>
            <li>
              <Link href="/sehirler" className="text-sky-700 hover:underline">
                Şehirler
              </Link>
            </li>
          </ul>
        </section>
      ) : null}

      {matchedSpecialties.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">Branşlar</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {matchedSpecialties.map((s) => (
              <Link
                key={s.slug}
                href={`/branslar/${s.slug}`}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {matchedProcedures.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">Tedaviler</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {matchedProcedures.map((p) => (
              <Link
                key={p.slug}
                href={`/tedaviler/${p.slug}`}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {matchedCities.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">Şehirler</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {matchedCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {matchedDoctors.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Doktorlar ({matchedDoctors.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {matchedDoctors.slice(0, 20).map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {matchedClinics.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">
            Klinikler ({matchedClinics.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {matchedClinics.slice(0, 20).map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
