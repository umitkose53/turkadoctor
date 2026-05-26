import type { MetadataRoute } from "next";
import { allDtDoctorSlugs } from "@/data/dt-doctors";
import { SITE_URL } from "@/lib/seo/title";

const DT_SHARD_SIZE = 40_000;

export default function robots(): MetadataRoute.Robots {
  // Sitemap shard'ları — Next.js generateSitemaps her shard'ı /sitemap/<id>.xml
  // olarak yayınlar. Google'ın hepsini auto-discovery yapması için robots.txt'te
  // tek tek listele.
  const dtCount = allDtDoctorSlugs().length;
  const dtShards = Math.ceil(dtCount / DT_SHARD_SIZE);
  const totalShards = 1 + dtShards;
  const sitemapUrls = Array.from(
    { length: totalShards },
    (_, i) => `${SITE_URL}/sitemap/${i}.xml`,
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/profili-duzelt", "/yorum-itiraz"],
      },
    ],
    sitemap: sitemapUrls,
    host: SITE_URL,
  };
}
