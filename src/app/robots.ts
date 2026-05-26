import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/title";

export default function robots(): MetadataRoute.Robots {
  // Tek standart endpoint: /sitemap.xml (sitemap index).
  // Bu index içinde /sitemap/<id>.xml shard URL'leri var.
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/profili-duzelt", "/yorum-itiraz"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
