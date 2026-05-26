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
  doctorsBySpecialty,
  clinicsBySpecialty,
} from "@/data";
import { clinicsByProcedure } from "@/data";
import {
  dtDoctorsBySpecialty,
  dtDoctorsByCityAndSpecialty,
} from "@/data/dt-doctors";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  procedureTitle,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  jsonLdScript,
  medicalProcedureLd,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

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
  const desc =
    p.intro ??
    p.description ??
    `${p.name} hakkında tıbbi inceleyici onaylı bilgilendirme ve klinik dizini.`;
  return buildMetadata({
    title: procedureTitle(p.name),
    description: desc.slice(0, 156),
    path: `/tedaviler/${tedavi}`,
  });
}

/**
 * Detaylı tedavi sayfası. Procedure verisindeki opsiyonel alanlar varsa
 * bölüm olarak render edilir. Yoksa sayfa kısa sürümde kalır.
 */
export default async function ProcedurePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { tedavi } = await params;
  const p = findProcedure(tedavi);
  if (!p) notFound();

  const spec = findSpecialty(p.specialtySlug);

  // Bu prosedürü yapan doktorları topla — curated procedure match
  let docs = sortAlphabetical(doctorsByProcedure(p.slug));

  // 10'dan az ise branş dolduran genel listesinden destekle (curated + DT havuzu)
  if (docs.length < 10) {
    const branchDocs = doctorsBySpecialty(p.specialtySlug);
    const dtBranchDocs = dtDoctorsBySpecialty(p.specialtySlug);
    const all = sortAlphabetical([...branchDocs, ...dtBranchDocs]);
    const seen = new Set(docs.map((d) => d.slug));
    for (const d of all) {
      if (docs.length >= 16) break;
      if (!seen.has(d.slug)) {
        docs.push(d);
        seen.add(d.slug);
      }
    }
  }
  // Yine de minimum sınırı garanti et — branş bazlı arama yapamayanlar için olduğu kadar göster

  let cls = sortAlphabetical(clinicsByProcedure(p.slug));
  if (cls.length < 6) {
    const branchClinics = sortAlphabetical(clinicsBySpecialty(p.specialtySlug));
    const seen = new Set(cls.map((c) => c.slug));
    for (const c of branchClinics) {
      if (cls.length >= 10) break;
      if (!seen.has(c.slug)) cls.push(c);
    }
  }

  // Şehir bazlı sayım: prosedür match + DT havuzunda branş match
  // (DT doktorları procedureSlugs içermez, branş üzerinden eşleştir)
  const cityBreakdown = cities
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count:
        doctorsByProcedure(p.slug).filter((d) => d.citySlug === c.slug).length +
        dtDoctorsByCityAndSpecialty(c.slug, p.specialtySlug).length +
        clinicsByProcedure(p.slug).filter((cl) => cl.citySlug === c.slug)
          .length,
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  const path = `/tedaviler/${tedavi}`;
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Tedaviler", url: "/tedaviler" },
    { name: p.name, url: path },
  ]);

  const ld = medicalProcedureLd({
    name: p.name,
    description: p.intro ?? p.description,
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

  // FAQPage JSON-LD
  const faqLd =
    p.faq && p.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "tr-TR",
          mainEntity: p.faq.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        }
      : null;

  // Article schema (E-E-A-T sinyali)
  const articleLd = p.lastReviewedAt
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        headline: `${p.name}: Yöntemler, Süreç, Riskler ve Klinikler`,
        description: p.intro ?? p.description,
        url: `${SITE_URL}${path}`,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        reviewedBy: p.medicalReviewerName
          ? {
              "@type": "Person",
              name: p.medicalReviewerName,
            }
          : undefined,
        dateModified: p.lastReviewedAt,
        lastReviewed: p.lastReviewedAt,
        about: {
          "@type": "MedicalProcedure",
          name: p.name,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }
    : null;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(itemList) }}
      />
      {articleLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(articleLd) }}
        />
      ) : null}
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }}
        />
      ) : null}

      {/* Breadcrumb */}
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

      {/* Başlık + E-E-A-T sinyalleri */}
      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
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

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
          {p.medicalReviewerName ? (
            <Badge variant="verified">
              ✓ Tıbbi inceleyici: {p.medicalReviewerName}
            </Badge>
          ) : null}
          {p.lastReviewedAt ? (
            <span>Son güncelleme: {formatTrDate(p.lastReviewedAt)}</span>
          ) : null}
          {p.nextReviewDueAt ? (
            <span>
              Sonraki gözden geçirme: {formatTrDate(p.nextReviewDueAt)}
            </span>
          ) : null}
        </div>

        {p.intro ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            {p.intro}
          </p>
        ) : p.description ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            {p.description}
          </p>
        ) : null}
      </header>

      {/* İçindekiler — TOC */}
      {(p.whatIs ||
        p.methods?.length ||
        p.candidates?.length ||
        p.preparation?.length ||
        p.process?.length ||
        p.recovery?.length ||
        p.risks?.length ||
        p.faq?.length) && (
        <nav
          aria-label="İçindekiler"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-5"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            İçindekiler
          </h2>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-700">
            {p.whatIs ? <li><a href="#nedir" className="hover:underline">{p.name} nedir?</a></li> : null}
            {p.methods?.length ? <li><a href="#yontemler" className="hover:underline">Yöntemler</a></li> : null}
            {p.candidates?.length ? <li><a href="#kimler" className="hover:underline">Kimler uygundur?</a></li> : null}
            {p.preparation?.length ? <li><a href="#hazirlik" className="hover:underline">Hazırlık</a></li> : null}
            {p.process?.length ? <li><a href="#sureс" className="hover:underline">Operasyon süreci</a></li> : null}
            {p.recovery?.length ? <li><a href="#iyilesme" className="hover:underline">İyileşme</a></li> : null}
            {p.risks?.length ? <li><a href="#riskler" className="hover:underline">Risk ve komplikasyonlar</a></li> : null}
            {p.selectionCriteria?.length ? <li><a href="#secim" className="hover:underline">Klinik seçim kriterleri</a></li> : null}
            {p.faq?.length ? <li><a href="#sss" className="hover:underline">Sık sorulan sorular</a></li> : null}
            <li><a href="#doktorlar" className="hover:underline">Yapan doktorlar</a></li>
            <li><a href="#klinikler" className="hover:underline">Yapan klinikler</a></li>
            {p.sources?.length ? <li><a href="#kaynaklar" className="hover:underline">Kaynaklar</a></li> : null}
          </ul>
        </nav>
      )}

      {/* Disclaimer */}
      <div className="mt-6 space-y-3">
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {/* Nedir? */}
      {p.whatIs ? (
        <section id="nedir" className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            {p.name} nedir?
          </h2>
          <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-800">
            {p.whatIs.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Yöntemler */}
      {p.methods?.length ? (
        <section id="yontemler" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Yöntemler</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {p.methods.map((m, i) => (
              <div key={i} className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <h3 className="text-base font-semibold text-zinc-900">{m.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{m.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Kimler uygundur */}
      {(p.candidates?.length || p.notCandidates?.length) && (
        <section id="kimler" className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {p.candidates?.length ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <h2 className="text-lg font-semibold text-emerald-900">
                Kimler aday olabilir?
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-emerald-900">
                {p.candidates.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {p.notCandidates?.length ? (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-lg font-semibold text-amber-900">
                Kimler için uygun değildir?
              </h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-900">
                {p.notCandidates.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      )}

      {/* Hazırlık */}
      {p.preparation?.length ? (
        <section id="hazirlik" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Operasyon öncesi hazırlık</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-800">
            {p.preparation.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Süreç */}
      {p.process?.length ? (
        <section id="sureс" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Operasyon süreci</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-800">
            {p.process.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* İyileşme — zaman çizelgesi */}
      {p.recovery?.length ? (
        <section id="iyilesme" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">İyileşme süreci</h2>
          <ol className="mt-4 space-y-3">
            {p.recovery.map((r, i) => (
              <li
                key={i}
                className="grid grid-cols-[140px_1fr] gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-4"
              >
                <span className="text-sm font-semibold text-zinc-900">{r.period}</span>
                <span className="text-sm text-zinc-700">{r.description}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Risk ve komplikasyonlar — mevzuat için ŞART */}
      {p.risks?.length ? (
        <section id="riskler" className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-xl font-semibold text-rose-900">
            Risk ve komplikasyonlar
          </h2>
          <p className="mt-2 text-sm text-rose-800">
            Her cerrahi veya tıbbi işlem belirli risk ve komplikasyonlar
            taşıyabilir. Aşağıdaki liste sık görülen veya bilinmesi gereken
            durumları içerir; tam ve kişiye özel risk değerlendirmesi yalnız
            hekim muayenesinde verilebilir.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-rose-900">
            {p.risks.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Klinik / hekim seçim kriterleri */}
      {p.selectionCriteria?.length ? (
        <section id="secim" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            Hekim ve klinik seçerken nelere dikkat edilir?
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-800">
            {p.selectionCriteria.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Sık sorulan sorular */}
      {p.faq?.length ? (
        <section id="sss" className="mt-8 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            Sık sorulan sorular
          </h2>
          <div className="mt-4 space-y-3">
            {p.faq.map((q, i) => (
              <details
                key={i}
                className="group rounded-lg border border-zinc-200 bg-zinc-50 p-4 open:bg-white"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900 group-open:text-sky-700">
                  <span aria-hidden className="mr-2">›</span>
                  {q.question}
                </summary>
                <div className="mt-2 text-sm leading-relaxed text-zinc-700">
                  {q.answer.split("\n\n").map((para, j) => (
                    <p key={j} className={j > 0 ? "mt-2" : undefined}>
                      {para}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* Şehir kırılımı */}
      {cityBreakdown.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            Şehre göre {p.name}
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Alfabetik sıralı şehir bağlantıları
          </p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
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

      {/* Doktorlar — minimum 10 (mümkünse) */}
      {docs.length > 0 ? (
        <section id="doktorlar" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            {p.name} yapan doktorlar ({docs.length})
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Alfabetik sıralı dizin. TurkaDoctor sıralama veya tıbbi reklam
            yapmaz.
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {docs.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Klinikler */}
      {cls.length > 0 ? (
        <section id="klinikler" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            {p.name} sunan klinikler ({cls.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {cls.map((c) => (
              <ClinicCard key={c.slug} clinic={c} />
            ))}
          </div>
        </section>
      ) : null}

      {/* İlgili tedaviler */}
      {p.relatedProcedureSlugs?.length ? (
        <section className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            İlgili tedaviler
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.relatedProcedureSlugs
              .map((s) => findProcedure(s))
              .filter((x) => x !== undefined)
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/tedaviler/${r.slug}`}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
                >
                  {r.name}
                </Link>
              ))}
          </div>
        </section>
      ) : null}

      {/* Kaynaklar */}
      {p.sources?.length ? (
        <section id="kaynaklar" className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Kaynaklar</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Bu içerik, aşağıdaki uluslararası ve yerel kaynaklara dayanılarak
            hazırlanmıştır.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-800">
            {p.sources.map((s, i) => (
              <li key={i}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sky-700 hover:underline"
                  >
                    {s.title}
                  </a>
                ) : (
                  <span>{s.title}</span>
                )}{" "}
                — <span className="text-zinc-600">{s.publisher}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Alt nota */}
      <div className="mt-10 text-xs text-zinc-500">
        <p>
          Tıbbi inceleyici: {p.medicalReviewerName ?? "TurkaDoctor Tıbbi Danışma Kurulu"}.
          {p.lastReviewedAt
            ? ` Son güncelleme: ${formatTrDate(p.lastReviewedAt)}.`
            : ""}
          {p.nextReviewDueAt
            ? ` Bir sonraki gözden geçirme: ${formatTrDate(p.nextReviewDueAt)}.`
            : ""}
        </p>
        <p className="mt-2">
          Bu sayfa bilgilendirme amaçlıdır; tıbbi reklam değildir, tedavi tavsiyesi
          vermez. Tedavi kararları için hekiminize danışın.
        </p>
      </div>
    </div>
  );
}
