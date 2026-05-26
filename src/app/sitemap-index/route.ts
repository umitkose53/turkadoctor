/**
 * Sitemap index — `/sitemap.xml` üzerinden serve edilir (next.config rewrite).
 *
 * Next.js'in `app/sitemap.ts` + `generateSitemaps` API'si shard'ları
 * `/sitemap/<id>.xml`'de yayınlar, ama Google'ın auto-discovery için baktığı
 * `/sitemap.xml`'e bir sitemap index XML dönmemiz gerek. Bunu sağlar.
 */

import { allDtDoctorSlugs } from "@/data/dt-doctors";
import { SITE_URL } from "@/lib/seo/title";

const DT_SHARD_SIZE = 40_000;

export const revalidate = 86400; // 1 gün

export async function GET() {
  const dtCount = allDtDoctorSlugs().length;
  const dtShards = Math.ceil(dtCount / DT_SHARD_SIZE);
  const totalShards = 1 + dtShards; // shard 0 = curated, 1..N = DT

  const now = new Date().toISOString();

  const sitemaps = Array.from({ length: totalShards }, (_, i) =>
    `  <sitemap>\n    <loc>${SITE_URL}/sitemap/${i}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`,
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
