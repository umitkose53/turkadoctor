/**
 * Doktor profili için benzersiz meta description ve title varyantları.
 *
 * Sorun: ~167K doktor için aynı kalıp ("X uzmanı · Y · TTB doğrulamalı...") kullanırsak
 * Google bunu duplicate/spam içerik olarak algılar ve indexlemez.
 *
 * Çözüm: 10 farklı description + 4 farklı title kalıbı + her doktor için slug'dan
 * deterministic seçim. Sertifika, deneyim, klinik, ilçe gibi mevcut veri parçacıkları
 * varyantı zenginleştirir.
 */

import type { DoctorSummary } from "@/data/types";

/** Stabil 32-bit hash — slug'dan deterministic varyant seçimi için. */
function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

type DescArgs = {
  doctor: DoctorSummary;
  specialtyName: string;
  cityName: string;
  districtName?: string;
  clinicName?: string;
  procedureNames?: string[];
};

const TITLE_PATTERNS: Array<(a: DescArgs) => string> = [
  ({ doctor, specialtyName, cityName }) =>
    `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName} · ${specialtyName}, ${cityName}`,
  ({ doctor, specialtyName, cityName }) =>
    `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName} – ${cityName} ${specialtyName} Uzmanı`,
  ({ doctor, specialtyName, cityName, clinicName }) =>
    clinicName
      ? `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName} | ${specialtyName}, ${clinicName}`
      : `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName} | ${specialtyName} Hekimi, ${cityName}`,
  ({ doctor, specialtyName, cityName }) =>
    `${doctor.titlePrefix ?? "Dr."} ${doctor.fullName}: ${cityName} ${specialtyName} Doktoru`,
];

/**
 * Açıklama kalıpları. `a` içinden doğal Türkçe cümle kur; 150-200 karakter aralığını hedefle.
 * Her kalıp 8-10 farklı seçenekten birini döndürür.
 */
const DESC_PATTERNS: Array<(a: DescArgs) => string> = [
  // 0 — Klinik + branş + ilçe odaklı
  ({ doctor, specialtyName, cityName, districtName, clinicName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const loc = districtName ? `${cityName}/${districtName}` : cityName;
    const at = clinicName ? `${clinicName} bünyesinde` : "muayenehanesinde";
    return `${prefix} ${doctor.fullName}, ${loc} bölgesinde ${at} ${specialtyName} hizmeti vermektedir. Bilgilendirme amaçlı hekim profili.`;
  },

  // 1 — Branş tanım odaklı
  ({ doctor, specialtyName, cityName, clinicName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const at = clinicName ? ` ${clinicName}'de` : "";
    return `${cityName}'da ${specialtyName} alanında çalışan${at} ${prefix} ${doctor.fullName}. Tıbbi reklam yapılmayan, kamuya açık verilere dayalı hekim sayfası.`;
  },

  // 2 — Deneyim + klinik
  ({ doctor, specialtyName, cityName, clinicName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const exp = doctor.deneyimYili
      ? `${doctor.deneyimYili}+ yıl klinik deneyimi olan `
      : "";
    const at = clinicName ? `, ${clinicName}` : "";
    return `${exp}${prefix} ${doctor.fullName} ${cityName}'da ${specialtyName} hekimi olarak görev yapmaktadır${at}. Profil yalnızca bilgilendirme amaçlıdır.`;
  },

  // 3 — Sertifika/üyelik vurgulu
  ({ doctor, specialtyName, cityName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const memb = (doctor.memberships && doctor.memberships.length > 0)
      ? `, ${doctor.memberships[0]} üyesi`
      : "";
    return `${prefix} ${doctor.fullName} – ${cityName} ${specialtyName} uzmanı${memb}. TurkaDoctor sıralama yapmaz; bilgi yalnızca alfabetik dizin amaçlıdır.`;
  },

  // 4 — Tedavi listeli (varsa)
  ({ doctor, specialtyName, cityName, procedureNames }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const tedaviler = (procedureNames && procedureNames.length > 0)
      ? ` İlgi alanları: ${procedureNames.slice(0, 3).join(", ")}.`
      : "";
    return `${cityName} merkezli ${specialtyName} hekimi ${prefix} ${doctor.fullName}.${tedaviler} Kaynak doğrulamalı, bilgilendirme amaçlı profil.`;
  },

  // 5 — Eğitim vurgulu
  ({ doctor, specialtyName, cityName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const edu = (doctor.educations && doctor.educations.length > 0)
      ? `${doctor.educations[0].school} mezunu `
      : "";
    return `${edu}${prefix} ${doctor.fullName}, ${cityName} ilinde ${specialtyName} branşında hekimlik yapmaktadır. Profil bilgilendirme amaçlıdır.`;
  },

  // 6 — Klinik anchored
  ({ doctor, specialtyName, cityName, clinicName, districtName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    if (clinicName) {
      const loc = districtName ? `${cityName}, ${districtName}` : cityName;
      return `${clinicName} ${specialtyName} bölümü hekimi ${prefix} ${doctor.fullName}. ${loc} bölgesinde hizmet vermektedir.`;
    }
    return `${prefix} ${doctor.fullName} – ${cityName}'da serbest çalışan ${specialtyName} uzmanı. Bilgilendirme amaçlı hekim sayfası.`;
  },

  // 7 — Soru kalıbı (search intent)
  ({ doctor, specialtyName, cityName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    return `${cityName}'da ${specialtyName.toLocaleLowerCase("tr-TR")} arıyorsanız: ${prefix} ${doctor.fullName} profilinde kurum, eğitim ve iletişim bilgileri. Bilgilendirme amaçlıdır.`;
  },

  // 8 — TTB doğrulama vurgulu
  ({ doctor, specialtyName, cityName, clinicName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const verified = doctor.ttbSicilNo && doctor.ttbVerifiedAt
      ? "TTB sicil doğrulamalı "
      : "";
    const at = clinicName ? ` · ${clinicName}` : "";
    return `${verified}${prefix} ${doctor.fullName}, ${specialtyName} hekimi · ${cityName}${at}. TurkaDoctor hekim ve klinik dizini.`;
  },

  // 9 — Lokal odaklı (ilçe varsa)
  ({ doctor, specialtyName, cityName, districtName, clinicName }) => {
    const prefix = doctor.titlePrefix ?? "Dr.";
    const loc = districtName
      ? `${districtName} (${cityName})`
      : cityName;
    const at = clinicName ? ` – ${clinicName}` : "";
    return `${loc} bölgesinde ${specialtyName} hekimi ${prefix} ${doctor.fullName}${at}. Sıralama veya reklam yapılmayan bilgi dizini.`;
  },
];

export function doctorTitleVariant(args: DescArgs): string {
  const i = hash(args.doctor.slug) % TITLE_PATTERNS.length;
  return TITLE_PATTERNS[i](args);
}

export function doctorDescriptionVariant(args: DescArgs): string {
  const i = hash(args.doctor.slug) % DESC_PATTERNS.length;
  const out = DESC_PATTERNS[i](args);
  // 200 char hard cap (Google ~155-160 ideali, 200 max görünür)
  return out.length > 200 ? out.slice(0, 197) + "..." : out;
}
