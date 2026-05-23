import Link from "next/link";
import type { Metadata } from "next";

import { cities, FEATURED_CITY_SLUGS } from "@/data/cities";
import { specialties } from "@/data/specialties";
import { procedures } from "@/data/procedures";
import { doctors, doctorsByCity, doctorsBySpecialty } from "@/data/doctors";
import { clinics } from "@/data/clinics";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatBar } from "@/components/site/StatBar";

import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER, SITE_NAME, SITE_URL } from "@/lib/seo/title";
import { jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Estetik, Saç Ekimi, Diş ve Tüm Branşlarda Doktor & Klinik Dizini",
    description:
      "Türkiye'de estetik cerrahi, saç ekimi, diş ve tüm branşlarda doğrulanmış doktor ve klinik dizini. Alfabetik listeleme, TTB sicil ve sertifika doğrulamalı bilgilendirme platformu.",
    path: "/",
  }),
  title: {
    absolute: `${SITE_NAME} — Türkiye Doktor ve Klinik Dizini`,
  },
};

const POPULAR_SPECIALTIES = [
  "estetik-cerrahi",
  "sac-ekimi",
  "dis-hekimligi",
  "dermatoloji",
  "goz-hastaliklari",
  "kadin-hastaliklari-ve-dogum",
  "diyetisyen",
  "psikoloji",
];

const AESTHETIC_PROCEDURES = [
  "yuz-germe",
  "sakak-germe",
  "kas-germe",
  "goz-kapagi-estetigi",
  "boyun-germe",
  "rinoplasti",
  "meme-buyutme",
  "meme-kucultme",
  "meme-diklestirme",
  "karin-germe",
  "bbl",
  "liposuction",
  "yag-enjeksiyonu",
  "kol-germe",
  "bacak-germe",
];

const NON_SURGICAL = [
  "botoks",
  "dolgu",
  "lazer-epilasyon",
  "akne-tedavisi",
];

const HAIR_PROCEDURES = ["sac-ekimi", "sakal-ekimi", "kas-ekimi"];

const OTHER_PROCEDURES = [
  "dis-implanti",
  "all-on-4",
  "zirkonyum-kaplama",
  "lamine-dis",
  "dis-beyazlatma",
  "lasik",
  "smile",
  "tup-bebek",
];

export default function Home() {
  const popularSpecialties = POPULAR_SPECIALTIES.map((slug) =>
    specialties.find((s) => s.slug === slug),
  ).filter((s) => s !== undefined);

  const aestheticProcedures = AESTHETIC_PROCEDURES.map((slug) =>
    procedures.find((p) => p.slug === slug),
  ).filter((p) => p !== undefined);

  const nonSurgical = NON_SURGICAL.map((slug) =>
    procedures.find((p) => p.slug === slug),
  ).filter((p) => p !== undefined);

  const hairProcedures = HAIR_PROCEDURES.map((slug) =>
    procedures.find((p) => p.slug === slug),
  ).filter((p) => p !== undefined);

  const otherProcedures = OTHER_PROCEDURES.map((slug) =>
    procedures.find((p) => p.slug === slug),
  ).filter((p) => p !== undefined);

  const featuredCities = FEATURED_CITY_SLUGS.map((slug) =>
    cities.find((c) => c.slug === slug),
  ).filter((c) => c !== undefined);

  // Veri görselleri için istatistik
  const cityStats = featuredCities
    .map((c) => ({
      label: c.name,
      count:
        doctorsByCity(c.slug).length +
        clinics.filter((cl) => cl.citySlug === c.slug).length,
      href: `/${c.slug}`,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const branchStats = popularSpecialties
    .map((s) => ({
      label: s.name.replace(/ \(.+\)$/, "").slice(0, 22),
      count:
        doctorsBySpecialty(s.slug).length +
        clinics.filter((c) => c.specialties.includes(s.slug)).length,
      href: `/branslar/${s.slug}`,
    }))
    .filter((s) => s.count > 0)
    .sort((a, b) => b.count - a.count);

  const totalDoctors = doctors.length;
  const totalClinics = clinics.length;
  const totalProcedures = procedures.length;
  const totalCities = cities.length;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description:
      "Türkiye'nin doğrulanmış doktor ve klinik dizini. Estetik cerrahi, saç ekimi, diş, göz ve tüm tıbbi branşlarda bilgilendirme amaçlı listeleme.",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/ara?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "tr-TR",
    mainEntity: [
      {
        "@type": "Question",
        name: "TurkaDoctor nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TurkaDoctor; Türkiye genelindeki doktor ve klinikleri kamuya açık verilere dayalı olarak listeleyen, bilgilendirme amaçlı bir dizin platformudur. Sağlık Bakanlığı ruhsatı, TTB sicil numarası ve uluslararası akreditasyonlar (JCI, ISO, Temos) doğrulamasına dayalıdır.",
        },
      },
      {
        "@type": "Question",
        name: "TurkaDoctor sıralama yapar mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hayır. TurkaDoctor karşılaştırmalı sıralama, 'en iyi/lider' gibi nitelikleyici ifade ile içerik veya tıbbi reklam yayını yapmaz. Tüm listeler alfabetik sıradadır.",
        },
      },
      {
        "@type": "Question",
        name: "Yorum kaynakları nelerdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TurkaDoctor; Google Maps, Ekşi Sözlük, Trustpilot ve WhatClinic gibi kamuya açık kaynaklara, kaynak gösterimi yaparak yönlendirme bağlantıları sunar. Bu puanlar TurkaDoctor'un kendi değerlendirmesine dahil edilmez.",
        },
      },
      {
        "@type": "Question",
        name: "Profilim hatalıysa nasıl düzeltirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bir doktor veya klinik profilindeki hatalı bilgileri 'Profili Düzelt' akışı ile bildirebilirsiniz. Başvurular 24 saat içinde editör ekibimiz tarafından değerlendirilir.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }}
      />

      {/* Hero */}
      <section className="rounded-2xl border border-zinc-200 bg-white px-6 py-12 text-center md:px-12 md:py-16">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl lg:text-5xl">
          Türkiye&apos;nin doğrulanmış estetik ve sağlık dizini
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-zinc-600 md:text-lg">
          Estetik cerrahi, saç ekimi, diş, göz ve tüm tıbbi branşlarda doktor ve
          klinik dizini. TTB sicil + Sağlık Bakanlığı ruhsat + uluslararası
          akreditasyon (JCI, ISO, Temos) doğrulamalı.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-xs text-zinc-500">
          TurkaDoctor sıralama veya tıbbi reklam yapmaz; listeler alfabetiktir.
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

        {/* Dizin istatistikleri */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Doktor" value={totalDoctors} />
          <Stat label="Klinik" value={totalClinics} />
          <Stat label="Tedavi rehberi" value={totalProcedures} />
          <Stat label="Şehir" value={totalCities} />
        </div>
      </section>

      {/* Estetik tedavi rehberleri */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Estetik tedavi rehberleri
          </h2>
          <Link
            href="/tedaviler"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Tüm tedaviler →
          </Link>
        </div>
        <p className="mt-1 text-sm text-zinc-600">
          Tıbbi inceleyici onaylı, kaynaklı bilgilendirme. Yöntemler, hazırlık,
          iyileşme, riskler ve klinik seçim kriterleri.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {aestheticProcedures.map((p) => (
            <Link
              key={p.slug}
              href={`/tedaviler/${p.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {p.name.replace(/ \(.+\)$/, "")}
            </Link>
          ))}
        </div>
      </section>

      {/* Cerrahi olmayan estetik */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">
          Cerrahi olmayan estetik uygulamalar
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {nonSurgical.map((p) => (
            <Link
              key={p.slug}
              href={`/tedaviler/${p.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {p.name.replace(/ \(.+\)$/, "")}
            </Link>
          ))}
        </div>
      </section>

      {/* Saç ekimi */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">Saç ekimi</h2>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {hairProcedures.map((p) => (
            <Link
              key={p.slug}
              href={`/tedaviler/${p.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Diş, göz, diğer */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-zinc-900">
          Diş, göz ve diğer popüler tedaviler
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {otherProcedures.map((p) => (
            <Link
              key={p.slug}
              href={`/tedaviler/${p.slug}`}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {p.name.replace(/ \(.+\)$/, "")}
            </Link>
          ))}
        </div>
      </section>

      {/* Branş dağılımı + Şehir dağılımı veri görselleri */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Branşlara göre kayıt dağılımı
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Dizine kayıtlı doktor + klinik sayısına göre. Alfabetik değil; veri
            görselidir, sıralama değil.
          </p>
          <div className="mt-4">
            <StatBar rows={branchStats} />
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            Şehirlere göre kayıt dağılımı
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Öne çıkan şehirler. Veri görselidir, sıralama değil.
          </p>
          <div className="mt-4">
            <StatBar rows={cityStats} />
          </div>
        </div>
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

      {/* Şehirler — öne çıkan ve tümü */}
      <section className="mt-12">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">Şehirler</h2>
          <Link
            href="/sehirler"
            className="text-sm font-medium text-sky-700 hover:underline"
          >
            Tüm 81 il →
          </Link>
        </div>
        <p className="mt-1 text-sm text-zinc-600">
          Öne çıkan 16 şehir. Tüm illeri{" "}
          <Link href="/sehirler" className="text-sky-700 hover:underline">
            şehirler sayfasından
          </Link>{" "}
          görebilirsiniz.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {featuredCities.map((c) => (
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

      {/* Öne çıkan tedavi rehberi kartları */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-zinc-900">
          Öne çıkan tedavi rehberleri
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Detaylı içerik: yöntemler, hazırlık, iyileşme, riskler ve hekim seçim
          kriterleri.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "yuz-germe",
            "meme-buyutme",
            "rinoplasti",
            "sac-ekimi",
            "dis-implanti",
            "lasik",
            "botoks",
            "tup-bebek",
            "karin-germe",
          ]
            .map((slug) => procedures.find((p) => p.slug === slug))
            .filter((p) => p !== undefined)
            .map((p) => (
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
                  {p.intro ?? p.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
                  {p.medicalReviewerName ? (
                    <Badge variant="verified">✓ İnceleyici</Badge>
                  ) : null}
                  <span>Detaylı rehber →</span>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Neden TurkaDoctor — rakip farkındalık */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Neden TurkaDoctor?
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Türkiye&apos;deki sağlık dizinleri arasında farklılaştığımız noktalar.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Feature
            title="TTB sicil doğrulama rozeti"
            description="Her doktor profili, Türk Tabipleri Birliği sicil numarası ile doğrulanır. Mevcut dizinlerin çoğunda yalnız ad ve uzmanlık vardır; sicil doğrulaması yoktur."
          />
          <Feature
            title="SB ruhsat ve sertifika takibi"
            description="Her klinik için Sağlık Bakanlığı ruhsat numarası, JCI, ISO 9001, Temos akreditasyonları profile yansıtılır."
          />
          <Feature
            title="Çoklu kaynak değerlendirme sinyalleri"
            description="Google Maps, Ekşi Sözlük, Trustpilot ve WhatClinic gibi kamuya açık kaynaklar profilde kaynak gösterimi ile sunulur. Tek kaynak yerine çoklu sinyal."
          />
          <Feature
            title="Tıbbi inceleyici onaylı içerik"
            description="Her tedavi rehberi tıbbi danışma kurulu tarafından gözden geçirilir; yayın ve sonraki inceleme tarihi açıkça görünür."
          />
          <Feature
            title="Mevzuata tam uyum"
            description="Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği ile uyumlu: sıralama yok, kampanya yok, öncesi-sonrası fotoğraf yok, fiyat reklamı yok."
          />
          <Feature
            title="Risk ve komplikasyon şeffaflığı"
            description="Her tedavi sayfasında risk ve komplikasyonlar açıkça yer alır. 'Garanti sonuç' veya '%X başarı' gibi ifadeler kullanılmaz."
          />
        </div>
      </section>

      {/* Mini SSS */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 md:p-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Sık sorulan sorular
        </h2>
        <div className="mt-4 space-y-3">
          {faqLd.mainEntity.map((q, i) => (
            <details
              key={i}
              className="group rounded-lg border border-zinc-200 bg-zinc-50 p-4 open:bg-white"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900 group-open:text-sky-700">
                <span aria-hidden className="mr-2">›</span>
                {q.name}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                {q.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
      <p className="text-2xl font-semibold tabular-nums text-zinc-900">
        {value}
      </p>
      <p className="text-xs text-zinc-500">{label}</p>
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
      <h3 className="flex items-start gap-2 text-sm font-semibold text-zinc-900">
        <span className="text-emerald-600">✓</span>
        <span>{title}</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-700">
        {description}
      </p>
    </div>
  );
}
