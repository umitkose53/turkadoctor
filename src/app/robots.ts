import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/title";

export default function robots(): MetadataRoute.Robots {
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
