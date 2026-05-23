import Link from "next/link";
import type { Metadata } from "next";

import { cities } from "@/data/cities";
import { specialties } from "@/data/specialties";
import { procedures } from "@/data/procedures";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: "TurkaDoctor — Türkiye'nin Doğrulanmış Doktor ve Klinik Dizini",
  description:
    "TTB sicil ve sertifika doğrulamalı Türkiye doktor ve klinik dizini. Alfabetik listeleme, kamuya açık veriler.",
  path: "/",
});

const POPULAR_SPECIALTIES = [
  "sac-ekimi",
  "dis-hekimligi",
  "estetik-cerrahi",
  "dermatoloji",
  "diyetisyen",
  "psikoloji",
  "goz-hastaliklari",
  "kadin-hastaliklari-ve-dogum",
];

const POPULAR_PROCEDURES = [
  "sac-ekimi",
  "dis-implanti",
  "lasik",
  "rinoplasti",
];

export default function Home() {
  const popularSpecialties = POPULAR_SPECIALTIES.map((slug) =>
    specialties.find((s) => s.slug === slug),
  ).filter((s) => s !== undefined);

  const popularProcedures = POPULAR_PROCEDURES.map((slug) =>
    procedures.find((p) => p.slug === slug),
  ).filter((p) => p !== undefined);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-white px-6 py-12 text-center md:px-12 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          Türkiye&apos;nin doğrulanmış doktor ve klinik dizini
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-zinc-600">
          TTB sicil doğrulamalı, sertifika takipli, bilgilendirme amaçlı.
          Sıralama yapmayız; listeler alfabetiktir.
        </p>

        <form
          action="/ara"
          method="get"
          className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-zinc-300 bg-white px-2 py-2 shadow-sm focus-within:border-zinc-400"
        >
          <span aria-hidden className="pl-2 text-zinc-400">
            🔍
          </span>
          <input
            type="text"
            name="q"
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
      </section>

      {/* Popüler branşlar */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">
            Popüler branşlar
          </h2>
          <Link
            href="/branslar"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Tüm branşlar →
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {popularSpecialties.map((s) => (
            <Link
              key={s.slug}
              href={`/branslar/${s.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Şehirler */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">Şehirler</h2>
          <Link
            href="/sehirler"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Tüm iller →
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Tedavi rehberleri */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">
            Tedavi rehberleri
          </h2>
          <Link
            href="/tedaviler"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Tüm tedaviler →
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularProcedures.map((p) => (
            <Card key={p.slug} as="article">
              <h3 className="text-base font-semibold text-zinc-900">
                <Link
                  href={`/tedaviler/${p.slug}`}
                  className="hover:underline"
                >
                  {p.name}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-zinc-600">
                {p.description}
              </p>
              <p className="mt-3 text-xs text-zinc-500">
                Tıbbi incelemeli rehber
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Neden TurkaDoctor */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-zinc-900">
          Neden TurkaDoctor?
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2">
          <li>✓ TTB sicil no doğrulama</li>
          <li>✓ Sağlık Bakanlığı ruhsat ve sertifika (JCI / ISO / Temos) takibi</li>
          <li>✓ Tıbbi danışma kurulu onaylı bilgilendirme içeriği</li>
          <li>✓ Çoklu kaynak değerlendirme sinyalleri (Google, Ekşi, Trustpilot)</li>
        </ul>
      </section>

      <div className="mt-10">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>
    </div>
  );
}
