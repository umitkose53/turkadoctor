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
  findProcedure,
} from "@/data";

import { DoctorCard } from "@/components/listing/DoctorCard";
import { ClinicCard } from "@/components/listing/ClinicCard";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  branchHeading,
  branchTitle,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo/title";
import {
  alphabeticalItemList,
  breadcrumb,
  collectionPageLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

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
    description:
      sp.intro?.slice(0, 156) ??
      sp.description ??
      `Türkiye genelinde ${sp.name} hizmeti veren hekim ve kliniklerin alfabetik dizini.`,
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

  const docs = sortAlphabetical(doctorsBySpecialty(sp.slug));
  const cls = sortAlphabetical(clinicsBySpecialty(sp.slug));
  const total = docs.length + cls.length;

  const popularProcedures = (sp.popularProcedureSlugs ?? [])
    .map((s) => findProcedure(s))
    .filter((p) => p !== undefined);

  const cityBreakdown = cities
    .map((c) => ({
      slug: c.slug,
      name: c.name,
      count:
        doctorsBySpecialty(sp.slug).filter((d) => d.citySlug === c.slug).length +
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
    description: sp.intro ?? `Türkiye genelinde ${sp.name} dizini.`,
    url: path,
    about: { name: sp.name, type: "MedicalSpecialty" },
  });

  const itemList = alphabeticalItemList({
    name: branchHeading(sp.name),
    items: [
      ...docs.map((d) => ({
        name: `${d.titlePrefix ?? "Dr."} ${d.fullName}`,
        url: `/doktor/${d.slug}`,
      })),
      ...cls.map((c) => ({ name: c.name, url: `/klinik/${c.slug}` })),
    ],
  });

  const faqLd =
    sp.faq && sp.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "tr-TR",
          mainEntity: sp.faq.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: { "@type": "Answer", text: q.answer },
          })),
        }
      : null;

  const articleLd = sp.lastReviewedAt
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        headline: `${sp.name} — Türkiye Doktor ve Klinik Dizini`,
        description: sp.intro ?? sp.description,
        url: `${SITE_URL}${path}`,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        reviewedBy: sp.medicalReviewerName
          ? { "@type": "Person", name: sp.medicalReviewerName }
          : undefined,
        dateModified: sp.lastReviewedAt,
        lastReviewed: sp.lastReviewedAt,
        about: { "@type": "MedicalSpecialty", name: sp.name },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }
    : null;

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

      <header className="rounded-xl border border-zinc-200 bg-white p-6">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {branchHeading(sp.name)}
        </h1>
        <p className="mt-1 text-sm text-zinc-600">
          {total} listing · alfabetik sırada
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
          {sp.medicalReviewerName ? (
            <Badge variant="verified">
              ✓ Tıbbi inceleyici: {sp.medicalReviewerName}
            </Badge>
          ) : null}
          {sp.lastReviewedAt ? (
            <span>Son güncelleme: {formatTrDate(sp.lastReviewedAt)}</span>
          ) : null}
        </div>

        {sp.intro ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            {sp.intro}
          </p>
        ) : sp.description ? (
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            {sp.description}
          </p>
        ) : null}
      </header>

      {/* TOC */}
      {(sp.fullContent ||
        popularProcedures.length ||
        cityBreakdown.length ||
        sp.faq?.length ||
        sp.sources?.length) && (
        <nav
          aria-label="İçindekiler"
          className="mt-6 rounded-xl border border-zinc-200 bg-white p-5"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            İçindekiler
          </h2>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-sky-700">
            {sp.fullContent ? <li><a href="#hakkinda" className="hover:underline">Branş hakkında</a></li> : null}
            {popularProcedures.length > 0 ? <li><a href="#tedaviler" className="hover:underline">Popüler tedaviler</a></li> : null}
            {cityBreakdown.length > 0 ? <li><a href="#sehirler" className="hover:underline">Şehre göre dağılım</a></li> : null}
            <li><a href="#doktorlar" className="hover:underline">Doktorlar</a></li>
            <li><a href="#klinikler" className="hover:underline">Klinikler</a></li>
            {sp.faq?.length ? <li><a href="#sss" className="hover:underline">Sık sorulan sorular</a></li> : null}
            {sp.sources?.length ? <li><a href="#kaynaklar" className="hover:underline">Kaynaklar</a></li> : null}
          </ul>
        </nav>
      )}

      <div className="mt-6 space-y-3">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      {/* Branş hakkında */}
      {sp.fullContent ? (
        <section
          id="hakkinda"
          className="mt-8 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            {sp.name} hakkında
          </h2>
          <div className="mt-3 space-y-3 text-base leading-relaxed text-zinc-800">
            {sp.fullContent.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      ) : null}

      {/* Popüler tedaviler */}
      {popularProcedures.length > 0 ? (
        <section
          id="tedaviler"
          className="mt-8 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            {sp.name} altında popüler tedaviler
          </h2>
          <p className="mt-1 text-xs text-zinc-500">
            Detaylı tedavi rehberleri için tıklayın.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {popularProcedures.map((p) => (
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

      {/* Şehir kırılımı */}
      {cityBreakdown.length > 0 ? (
        <section id="sehirler" className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-900">
            Şehre göre dağılım
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Toplam {cityBreakdown.length} şehirde {sp.name} hizmeti.
          </p>
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

      {/* Doktorlar */}
      {docs.length > 0 ? (
        <section id="doktorlar" className="mt-10">
          <h2 className="text-xl font-semibold text-zinc-900">
            Doktorlar ({docs.length})
          </h2>
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
            Klinikler ({cls.length})
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
            {cls.map((c) => (
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

      {/* SSS */}
      {sp.faq?.length ? (
        <section
          id="sss"
          className="mt-10 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">
            Sık sorulan sorular
          </h2>
          <div className="mt-4 space-y-3">
            {sp.faq.map((q, i) => (
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

      {/* Kaynaklar */}
      {sp.sources?.length ? (
        <section
          id="kaynaklar"
          className="mt-10 rounded-xl border border-zinc-200 bg-white p-6"
        >
          <h2 className="text-xl font-semibold text-zinc-900">Kaynaklar</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-800">
            {sp.sources.map((s, i) => (
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
    </div>
  );
}
