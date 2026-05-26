import type { MetadataRoute } from "next";

import {
  cities,
  specialties,
  procedures,
  doctors,
  clinics,
} from "@/data";
import { allDtDoctorSlugs } from "@/data/dt-doctors";
import { SITE_URL } from "@/lib/seo/title";

/**
 * Sharded sitemap (Google 50.000 URL / dosya limiti). Shard 0 = curated içerik
 * (statik sayfalar, şehir, branş, klinik, kombinasyon, curated doktorlar).
 * Shard 1..N = Doctortakvimi havuzundaki ~160K hekim, slug bazlı bölünmüş.
 *
 * Next.js her shard'ı `/sitemap/<id>.xml` olarak üretir; `/sitemap.xml` ise
 * sitemapindex.
 */

const DT_SHARD_SIZE = 40_000;

export async function generateSitemaps(): Promise<{ id: number }[]> {
  const dtSlugCount = allDtDoctorSlugs().length;
  const dtShards = Math.ceil(dtSlugCount / DT_SHARD_SIZE);
  // 0 = curated, 1..dtShards = DT
  return Array.from({ length: 1 + dtShards }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: Promise<number>;
}): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  // Next.js 16: `id` Promise olarak geliyor (params API uyumluluğu).
  const resolvedId = await id;
  const numId =
    typeof resolvedId === "string" ? parseInt(resolvedId, 10) : resolvedId;

  if (numId === 0) return curatedSitemap(now);

  const dtSlugs = allDtDoctorSlugs();
  const start = (numId - 1) * DT_SHARD_SIZE;
  const slice = dtSlugs.slice(start, start + DT_SHARD_SIZE);
  return slice.map((slug) => ({
    url: `${SITE_URL}/doktor/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));
}

function curatedSitemap(now: Date): MetadataRoute.Sitemap {
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/branslar`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sehirler`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tedaviler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/tibbi-danisma-kurulu`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/editoryel-politika`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/kvkk`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/aydinlatma-metni`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const cityPaths: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const branchPaths: MetadataRoute.Sitemap = specialties.map((s) => ({
    url: `${SITE_URL}/branslar/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const cityBranchPaths: MetadataRoute.Sitemap = [];
  for (const c of cities) {
    for (const s of specialties) {
      const hasContent =
        doctors.some(
          (d) =>
            d.citySlug === c.slug && d.specialtySlugs.includes(s.slug),
        ) ||
        clinics.some(
          (cl) =>
            cl.citySlug === c.slug && cl.specialties.includes(s.slug),
        );
      if (!hasContent) continue;
      cityBranchPaths.push({
        url: `${SITE_URL}/${c.slug}/${s.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  const procedurePaths: MetadataRoute.Sitemap = procedures.map((p) => ({
    url: `${SITE_URL}/tedaviler/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const doctorPaths: MetadataRoute.Sitemap = doctors.map((d) => ({
    url: `${SITE_URL}/doktor/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const clinicPaths: MetadataRoute.Sitemap = clinics.map((c) => ({
    url: `${SITE_URL}/klinik/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticPaths,
    ...cityPaths,
    ...branchPaths,
    ...cityBranchPaths,
    ...procedurePaths,
    ...doctorPaths,
    ...clinicPaths,
  ];
}
