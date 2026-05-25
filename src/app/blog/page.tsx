import Link from "next/link";
import type { Metadata } from "next";

import { blogPosts } from "@/data/blog-posts";
import { Card } from "@/components/ui/card";
import { Disclaimer } from "@/components/ui/disclaimer";
import { Badge } from "@/components/ui/badge";

import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER, SITE_URL, SITE_NAME } from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";
import { formatTrDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Tıbbi İnceleyici Onaylı Sağlık Yazıları",
  description:
    "Saç ekimi, estetik cerrahi, diş, göz ve daha fazlası — TurkaDoctor Tıbbi Danışma Kurulu onaylı bilgilendirme yazıları.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TurkaDoctor Blog Yazıları",
    inLanguage: "tr-TR",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(itemListLd) }}
      />

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-zinc-700">Anasayfa</Link></li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">Blog</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
        TurkaDoctor Blog
      </h1>
      <p className="mt-2 text-base text-zinc-700">
        Saç ekimi, estetik cerrahi, diş, göz ve diğer sağlık alanlarında
        tıbbi inceleyici onaylı bilgilendirme yazıları. Bilgilendirme amaçlıdır,
        tıbbi tavsiye yerine geçmez.
      </p>

      <div className="mt-6">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      {sorted.length === 0 ? (
        <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-8 text-center">
          <p className="text-zinc-700">
            Blog yazıları yakında yayımlanacak. Bu sayfa, {SITE_NAME} Tıbbi
            Danışma Kurulu&apos;nun onayladığı yazılarla doldurulacak.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Bu arada{" "}
            <Link href="/tedaviler" className="text-sky-700 hover:underline">
              tedavi rehberlerimizi
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {sorted.map((p) => (
            <Card key={p.slug} as="article">
              <h2 className="text-base font-semibold text-zinc-900">
                <Link href={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-zinc-600">
                {p.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                {p.medicalReviewerName ? (
                  <Badge variant="verified">✓ Tıbbi inceleyici</Badge>
                ) : null}
                <span>{formatTrDate(p.publishedAt)}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
