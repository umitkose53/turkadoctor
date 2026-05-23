/**
 * SEO başlık ve meta üretimi.
 *
 * Tıbbi reklam mevzuatı için kritik:
 * - SEO_AGGRESSIVE_TITLES=true iken `<title>` "en iyi ..." kalıbı kullanır.
 * - SEO_AGGRESSIVE_TITLES=false yapıldığında tüm sayfalar nötr şablona döner
 *   (Bakanlık tebliği geldiğinde tek satır ENV değişikliği ile kapatılabilir).
 * - `<h1>` ve sayfa içeriği HER ZAMAN nötr — sadece title SEO için "en iyi".
 */

export const SEO_AGGRESSIVE = process.env.NEXT_PUBLIC_SEO_AGGRESSIVE_TITLES !== "false";

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "TurkaDoctor";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://turkadoctor.com";

const CURRENT_YEAR = new Date().getFullYear();

type CityBranchArgs = {
  city: string;
  branch: string; // "Saç Ekimi", "Dermatoloji"
  count?: number;
};

/**
 * Şehir × branş / tedavi sayfası title.
 * AGGRESSIVE: "En İyi İstanbul Saç Ekim Doktorları 2026 — TurkaDoctor"
 * NEUTRAL:    "İstanbul Saç Ekim Doktorları ve Klinikleri — TurkaDoctor"
 */
export function cityBranchTitle({ city, branch }: CityBranchArgs): string {
  if (SEO_AGGRESSIVE) {
    return `En İyi ${city} ${branch} Doktorları ${CURRENT_YEAR} — ${SITE_NAME}`;
  }
  return `${city} ${branch} Doktorları ve Klinikleri — ${SITE_NAME}`;
}

export function cityBranchHeading({ city, branch }: CityBranchArgs): string {
  // H1 her zaman nötr.
  return `${city}'da ${branch} Yapan Doktor ve Klinikler`;
}

export function cityBranchDescription({
  city,
  branch,
  count,
}: CityBranchArgs): string {
  const ct = count ? `${count} listing` : "";
  return `${city} genelinde ${branch} hizmeti veren hekim ve kliniklerin alfabetik dizini. ${ct} TTB sicil ve sertifika doğrulamalı, bilgilendirme amaçlıdır.`.trim();
}

/** Branş hub (tüm Türkiye) */
export function branchTitle(branch: string): string {
  if (SEO_AGGRESSIVE) {
    return `En İyi Türkiye ${branch} Doktorları ${CURRENT_YEAR} — ${SITE_NAME}`;
  }
  return `Türkiye'de ${branch} Doktorları ve Klinikleri — ${SITE_NAME}`;
}

export function branchHeading(branch: string): string {
  return `Türkiye'de ${branch} Yapan Doktor ve Klinikler`;
}

/** Şehir hub */
export function cityTitle(city: string): string {
  if (SEO_AGGRESSIVE) {
    return `${city} Doktorları, Klinikler ve Hastaneler ${CURRENT_YEAR} — ${SITE_NAME}`;
  }
  return `${city} Doktorları ve Sağlık Kuruluşları — ${SITE_NAME}`;
}

export function cityHeading(city: string): string {
  return `${city} Doktor ve Sağlık Kuruluşları Dizini`;
}

/** Tedavi sayfası */
export function procedureTitle(procedure: string): string {
  if (SEO_AGGRESSIVE) {
    return `${procedure}: Yöntemler, Süreç ve En İyi Klinikler ${CURRENT_YEAR} — ${SITE_NAME}`;
  }
  return `${procedure}: Yöntemler ve Süreç — ${SITE_NAME}`;
}

/** Doktor profili */
export function doctorTitle(args: {
  fullName: string;
  titlePrefix?: string | null;
  specialty: string;
  city: string;
}): string {
  const prefix = args.titlePrefix ?? "Dr.";
  return `${prefix} ${args.fullName} — ${args.specialty} Uzmanı, ${args.city} | ${SITE_NAME}`;
}

/** Klinik profili */
export function clinicTitle(args: { name: string; city: string }): string {
  return `${args.name} — ${args.city} | ${SITE_NAME}`;
}

/**
 * Tüm liste sayfalarında üstte gösterilen mevzuat disclaimer'ı.
 * SEO için sayfa içeriğine girer, yapay zekâ algoritmalarına bağlam verir.
 */
export const ALPHABETICAL_DISCLAIMER =
  "Bu sayfa, kamuya açık verilere dayalı olarak bilgilendirme amaçlı hazırlanmıştır. " +
  "TurkaDoctor sıralama veya tıbbi reklam yapmaz. Tüm listeler alfabetik sıradadır.";

export const MEDICAL_INFO_DISCLAIMER =
  "Bu sayfadaki bilgiler tıbbi tavsiye niteliği taşımaz. Tedavi kararları için hekiminize danışın.";
