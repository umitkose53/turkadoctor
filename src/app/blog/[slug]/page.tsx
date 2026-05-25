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

import { buildMetadata } from "@/lib/seo/metadata";
import {
  ALPHABETICAL_DISCLAIMER,
  MEDICAL_INFO_DISCLAIMER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

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
    image: post.heroImageUrl,
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
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleLd) }}
      />

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-zinc-700">Anasayfa</Link></li>
          <li aria-hidden>›</li>
          <li><Link href="/blog" className="hover:text-zinc-700">Blog</Link></li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">{post.title}</li>
        </ol>
      </nav>

      <header>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-base text-zinc-700">{post.excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
          {post.authorName ? <span>Yazar: {post.authorName}</span> : null}
          {post.medicalReviewerName ? (
            <Badge variant="verified">
              ✓ Tıbbi inceleyici: {post.medicalReviewerName}
            </Badge>
          ) : null}
          <span>Yayın: {formatTrDate(post.publishedAt)}</span>
          {post.lastReviewedAt ? (
            <span>Son inceleme: {formatTrDate(post.lastReviewedAt)}</span>
          ) : null}
          {post.nextReviewDueAt ? (
            <span>Sonraki: {formatTrDate(post.nextReviewDueAt)}</span>
          ) : null}
        </div>
      </header>

      <div className="mt-6 space-y-3">
        <Disclaimer variant="info">{MEDICAL_INFO_DISCLAIMER}</Disclaimer>
      </div>

      {/* Body — Markdown */}
      <article className="prose prose-zinc mt-8 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.bodyMd}</ReactMarkdown>
      </article>

      {/* İlgili tedaviler */}
      {relatedProcedures.length > 0 ? (
        <section className="mt-10 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            İlgili tedavi rehberleri
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedProcedures.map((p) => (
              <Link
                key={p.slug}
                href={`/tedaviler/${p.slug}`}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* İlgili branşlar */}
      {relatedSpecialties.length > 0 ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">
            İlgili branşlar
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedSpecialties.map((s) => (
              <Link
                key={s.slug}
                href={`/branslar/${s.slug}`}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-800 hover:border-zinc-300"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* Kaynaklar */}
      {post.sources && post.sources.length > 0 ? (
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-zinc-900">Kaynaklar</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-800">
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
                )}{" "}
                — <span className="text-zinc-600">{s.publisher}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* Alt disclaimer */}
      <div className="mt-10">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>
    </div>
  );
}
