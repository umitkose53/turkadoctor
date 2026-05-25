import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { blogPosts, findBlogPost } from "@/data/blog-posts";
import { findProcedure } from "@/data/procedures";
import { findSpecialty } from "@/data/specialties";

import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/blog/Callout";

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";
import { extractToc, estimateReadingMinutes } from "@/lib/blog/toc";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt.slice(0, 156),
    path: `/blog/${slug}`,
  });
}

function slugifyHeading(s: string): string {
  return s
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ç/g, "c").replace(/ö/g, "o").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();

  const relatedProcedures = (post.relatedProcedureSlugs ?? [])
    .map((s) => findProcedure(s))
    .filter((x) => x !== undefined);
  const relatedSpecialties = (post.relatedSpecialtySlugs ?? [])
    .map((s) => findSpecialty(s))
    .filter((x) => x !== undefined);

  // Diğer blog yazılarından — aynı tedavi/branş'la kesişen en fazla 3
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const procOverlap = (p.relatedProcedureSlugs ?? []).filter((s) =>
        (post.relatedProcedureSlugs ?? []).includes(s),
      ).length;
      const specOverlap = (p.relatedSpecialtySlugs ?? []).filter((s) =>
        (post.relatedSpecialtySlugs ?? []).includes(s),
      ).length;
      return { post: p, score: procOverlap * 2 + specOverlap };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.post);

  // Önceki / sonraki yazı (publishedAt'a göre)
  const sortedByDate = [...blogPosts].sort((a, b) =>
    a.publishedAt.localeCompare(b.publishedAt),
  );
  const idx = sortedByDate.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? sortedByDate[idx - 1] : null;
  const next = idx < sortedByDate.length - 1 ? sortedByDate[idx + 1] : null;

  const toc = extractToc(post.bodyMd);
  const readingMinutes = estimateReadingMinutes(post.bodyMd);

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${slug}`,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: post.authorName ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: post.publishedAt,
    dateModified: post.lastReviewedAt ?? post.publishedAt,
    reviewedBy: post.medicalReviewerName
      ? { "@type": "Person", name: post.medicalReviewerName }
      : undefined,
    lastReviewed: post.lastReviewedAt,
    wordCount: post.bodyMd.split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${readingMinutes}M`,
  };

  return (
    <div className="bg-zinc-50">
      {/* Hero — blog olduğu hemen belli */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
          <nav aria-label="Site içi konum" className="text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-zinc-700">Anasayfa</Link></li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/blog" className="inline-flex items-center gap-1 hover:text-zinc-700">
                  <span aria-hidden>📝</span> Blog
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-zinc-900 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          {/* Kategori chip'leri */}
          {relatedSpecialties.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {relatedSpecialties.slice(0, 2).map((s) => (
                <Link
                  key={s.slug}
                  href={`/branslar/${s.slug}`}
                  className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 hover:bg-sky-200"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          ) : null}

          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl md:leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-700 md:text-xl">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <div aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600">
                TD
              </div>
              <span className="font-medium text-zinc-900">{post.authorName ?? "TurkaDoctor"}</span>
            </div>
            {post.medicalReviewerName ? (
              <>
                <span aria-hidden className="text-zinc-300">·</span>
                <Badge variant="verified" title={`Tıbbi inceleyici: ${post.medicalReviewerName}`}>
                  ✓ Tıbbi inceleyici onaylı
                </Badge>
              </>
            ) : null}
            <span aria-hidden className="text-zinc-300">·</span>
            <span title={`Yayın: ${formatTrDate(post.publishedAt)}`}>
              {formatTrDate(post.publishedAt)}
            </span>
            <span aria-hidden className="text-zinc-300">·</span>
            <span aria-label={`Tahmini okuma süresi ${readingMinutes} dakika`}>
              ⏱ {readingMinutes} dk okuma
            </span>
          </div>
        </div>
      </header>

      {/* Üst disclaimer — okuma akışını kesmeyecek şekilde sade */}
      <div className="mx-auto max-w-4xl px-4 pt-6">
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
          <span className="mr-1.5 font-semibold">ℹ️</span>
          Bu yazı bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez. Bireysel
          tedavi kararları için <strong>hekiminize danışın</strong>.
        </div>
      </div>

      {/* İçerik + TOC sidebar */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 md:py-14 lg:grid-cols-[1fr_240px]">
        <article className="min-w-0">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdScript(articleLd) }}
          />

          <div className="blog-prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children, ...props }) => {
                  const text = String(children);
                  const id = slugifyHeading(text);
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3: ({ children, ...props }) => {
                  const text = String(children);
                  const id = slugifyHeading(text);
                  return <h3 id={id} {...props}>{children}</h3>;
                },
                blockquote: ({ children }) => <Callout>{children}</Callout>,
                a: ({ href, children }) => {
                  const isInternal = href?.startsWith("/") || href?.startsWith("#");
                  if (isInternal) {
                    return (
                      <Link href={href!} className="font-medium">
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a href={href} target="_blank" rel="noopener noreferrer nofollow">
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.bodyMd}
            </ReactMarkdown>
          </div>

          {/* Body altı — özet disclaimer + paylaş */}
          <div className="mt-12 space-y-4 border-t border-zinc-200 pt-8">
            <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
            <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
          </div>

          {/* İlgili tedaviler — kart grid */}
          {relatedProcedures.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-zinc-900">
                İlgili tedavi rehberleri
              </h2>
              <p className="mt-1 text-sm text-zinc-600">
                Bu yazıyla ilgili daha detaylı tedavi içerikleri:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {relatedProcedures.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/tedaviler/${p.slug}`}
                    className="group block rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-sky-300 hover:bg-sky-50/50"
                  >
                    <h3 className="font-semibold text-zinc-900 group-hover:text-sky-700">
                      {p.name}
                    </h3>
                    {p.description ? (
                      <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
                        {p.description}
                      </p>
                    ) : null}
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-sky-700">
                      Tedaviyi incele →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* Diğer blog yazıları */}
          {relatedPosts.length > 0 ? (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-zinc-900">
                Bu konuyla ilgili diğer yazılar
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:shadow-sm"
                  >
                    <h3 className="font-semibold text-zinc-900 group-hover:text-sky-700">
                      {p.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
                      {p.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* Kaynaklar — kart şeklinde */}
          {post.sources && post.sources.length > 0 ? (
            <section className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
              <h2 className="text-base font-semibold text-zinc-900">
                📚 Kaynaklar
              </h2>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-zinc-700">
                {post.sources.map((s, i) => (
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
                    )}
                    {" — "}
                    <span className="text-zinc-500">{s.publisher}</span>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {/* Author + reviewer alt kart */}
          <section className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-100 text-base font-semibold text-sky-700">
                TD
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-zinc-900">
                  {post.authorName ?? "TurkaDoctor Editör Ekibi"}
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  TurkaDoctor editör ekibi; tüm tıbbi içerikler{" "}
                  <Link href="/tibbi-danisma-kurulu" className="text-sky-700 hover:underline">
                    Tıbbi Danışma Kurulu
                  </Link>{" "}
                  tarafından gözden geçirilir.
                </p>
                {post.medicalReviewerName ? (
                  <p className="mt-2 text-xs text-zinc-500">
                    <Badge variant="verified">✓ Tıbbi inceleyici</Badge>{" "}
                    {post.medicalReviewerName}
                    {post.lastReviewedAt ? ` · Son inceleme: ${formatTrDate(post.lastReviewedAt)}` : ""}
                    {post.nextReviewDueAt ? ` · Sonraki: ${formatTrDate(post.nextReviewDueAt)}` : ""}
                  </p>
                ) : null}
              </div>
            </div>
          </section>

          {/* Önceki/sonraki yazı */}
          <nav
            aria-label="Yazı navigasyonu"
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300"
              >
                <span className="block text-xs text-zinc-500">← Önceki yazı</span>
                <span className="mt-1 block font-semibold text-zinc-900">{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="rounded-xl border border-zinc-200 bg-white p-4 text-right transition-colors hover:border-zinc-300"
              >
                <span className="block text-xs text-zinc-500">Sonraki yazı →</span>
                <span className="mt-1 block font-semibold text-zinc-900">{next.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </article>

        {/* TOC sidebar — sticky */}
        {toc.length > 1 ? (
          <aside className="order-first lg:order-last">
            <div className="lg:sticky lg:top-6">
              <details className="rounded-xl border border-zinc-200 bg-white p-4 lg:open:bg-white" open>
                <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wide text-zinc-500 lg:cursor-default">
                  İçindekiler
                </summary>
                <ol className="mt-3 space-y-1.5 text-sm">
                  {toc.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex gap-2 text-zinc-700 hover:text-sky-700"
                      >
                        <span aria-hidden className="text-xs tabular-nums text-zinc-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
