import type { MetadataRoute } from "next";

import {
  cities,
  specialties,
  procedures,
  doctors,
  clinics,
} from "@/data";
import { SITE_URL } from "@/lib/seo/title";

/**
 * Dinamik sitemap üretimi. Şu anda manuel seed verisinden besleniyor;
 * DB geldiğinde aynı yapı Drizzle sorgusuyla beslenecek.
 *
 * Doorway koruma: liste sayfasında <5 listing varsa robots `noindex` koyduğumuz
 * için sitemap'te de göstermiyoruz.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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

  // şehir × branş kombinasyonları
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
      // Doorway koruma — listing yoksa sitemap'te gösterme
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
