import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone build — Docker image içine self-contained node server export eder.
  // .next/standalone klasörü + .next/static + public copy ile production çalışır.
  output: "standalone",
  async rewrites() {
    return [
      // SEO standart endpoint `/sitemap.xml` → sitemap index handler.
      // (app/sitemap.ts metadata route'u shard'ları /sitemap/<id>.xml'de
      // serve eder; index'i ayrı route ile sağlıyoruz.)
      {
        source: "/sitemap.xml",
        destination: "/sitemap-index",
      },
    ];
  },
  async redirects() {
    return [
      // Dr. Ali Çetinkaya — düzeltme: saç ekimi değil, plastik cerrahi
      {
        source: "/doktor/dr-ali-cetinkaya-sac-ekimi",
        destination: "/doktor/op-dr-ali-cetinkaya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
