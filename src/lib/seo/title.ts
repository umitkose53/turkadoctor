/**
 * SEO başlık üretimi — Google SERP kuralı: <title> ≤ 60 karakter ideali, ≤ 70 max.
 *
 * Tasarım:
 * - Title helper'ları SITE_NAME EKLEMEZ. Root layout'taki
 *   `title.template: "%s | TurkaDoctor"` otomatik ekler (≈14 karakter).
 *   Bu yüzden helper sonucu ≤ 45-50 karakterde tutulur.
 * - `<h1>` ve görünür içerik mevzuat dilinde (nötr), title SEO dilinde.
 * - SEO_AGGRESSIVE_TITLES=false ile tek satır ENV ile nötr şablona dönülebilir.
 *
 * Parantez ad temizleme: "Yüz Germe (Facelift)" → "Yüz Germe" (title için).
 */

export const SEO_AGGRESSIVE =
  process.env.NEXT_PUBLIC_SEO_AGGRESSIVE_TITLES !== "false";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "TurkaDoctor";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://turkadoctor.com";

const CURRENT_YEAR = new Date().getFullYear();

function stripParen(s: string): string {
  return s.replace(/\s*\([^)]*\)\s*/g, "").trim();
}

type CityBranchArgs = {
  city: string;
  branch: string;
  count?: number;
};

/** Şehir × branş listeleme. */
export function cityBranchTitle({ city, branch }: CityBranchArgs): string {
  const b = stripParen(branch);
  if (SEO_AGGRESSIVE) {
    return `En İyi ${city} ${b} Doktorları ${CURRENT_YEAR}`;
  }
  return `${city} ${b} Doktorları ve Klinikleri`;
}

export function cityBranchHeading({ city, branch }: CityBranchArgs): string {
  return `${city}'da ${branch} Yapan Doktor ve Klinikler`;
}

export function cityBranchDescription({
  city,
  branch,
  count,
}: CityBranchArgs): string {
  const ct = count ? `${count} listing.` : "";
  return `${city} genelinde ${stripParen(branch)} yapan hekim ve kliniklerin alfabetik dizini. ${ct} TTB sicil ve sertifika doğrulamalı, bilgilendirme amaçlıdır.`.trim();
}

/** Branş hub (tüm Türkiye). */
export function branchTitle(branch: string): string {
  const b = stripParen(branch);
  if (SEO_AGGRESSIVE) {
    return `En İyi Türkiye ${b} Doktorları ${CURRENT_YEAR}`;
  }
  return `Türkiye'de ${b} Doktorları ve Klinikleri`;
}

export function branchHeading(branch: string): string {
  return `Türkiye'de ${branch} Yapan Doktor ve Klinikler`;
}

/** Şehir hub. */
export function cityTitle(city: string): string {
  if (SEO_AGGRESSIVE) {
    return `${city} Doktorları ve Klinikleri ${CURRENT_YEAR}`;
  }
  return `${city} Doktor ve Sağlık Kuruluşları`;
}

export function cityHeading(city: string): string {
  return `${city} Doktor ve Sağlık Kuruluşları Dizini`;
}

/** Tedavi sayfası — kısa ve net. */
export function procedureTitle(procedure: string): string {
  const p = stripParen(procedure);
  if (SEO_AGGRESSIVE) {
    return `${p} ${CURRENT_YEAR}: Yöntemler, Süreç ve Klinikler`;
  }
  return `${p}: Yöntemler ve Süreç`;
}

/** Doktor profili — meta description için kullanılabilir, title kısa. */
export function doctorTitle(args: {
  fullName: string;
  titlePrefix?: string | null;
  specialty: string;
  city: string;
}): string {
  const prefix = args.titlePrefix ?? "Dr.";
  const sp = stripParen(args.specialty);
  return `${prefix} ${args.fullName} · ${sp}, ${args.city}`;
}

/** Klinik profili. */
export function clinicTitle(args: { name: string; city: string }): string {
  return `${args.name} · ${args.city}`;
}

/**
 * Liste sayfalarında üstte gösterilen mevzuat disclaimer'ı.
 */
export const ALPHABETICAL_DISCLAIMER =
  "Bu sayfa, kamuya açık verilere dayalı olarak bilgilendirme amaçlı hazırlanmıştır. " +
  "TurkaDoctor sıralama veya tıbbi reklam yapmaz. Tüm listeler alfabetik sıradadır.";

export const MEDICAL_INFO_DISCLAIMER =
  "Bu sayfadaki bilgiler tıbbi tavsiye niteliği taşımaz. Tedavi kararları için hekiminize danışın.";
