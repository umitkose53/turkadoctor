import type { DoctorSummary } from "./types";

/**
 * Day-1 manuel seed doktor verisi. Test verisi.
 * Production'da TTB + Bakanlık + claim akışıyla beslenecek.
 */
export const doctors: DoctorSummary[] = [
  {
    slug: "dr-ayse-yilmaz-dermatoloji",
    fullName: "Ayşe Yılmaz",
    titlePrefix: "Dr.",
    ttbSicilNo: "123456",
    ttbVerifiedAt: "2026-04-22",
    deneyimYili: 14,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["akne-tedavisi", "botoks"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    educations: [
      { school: "Hacettepe Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2008 },
      { school: "Marmara Üniversitesi", degree: "Dermatoloji Uzmanlık", year: 2014 },
    ],
    memberships: [
      "Türk Dermatoloji Derneği",
      "TTB İstanbul Tabip Odası",
      "European Academy of Dermatology and Venereology (EADV)",
    ],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.6,
        reviewCount: 86,
        sourceUrl: "https://maps.google.com/?cid=dr-ayse-yilmaz",
        visible: true,
      },
      {
        source: "eksi",
        extraCount: 47,
        sourceUrl: "https://eksisozluk.com/dr-ayse-yilmaz",
        visible: true,
      },
    ],
  },
  {
    slug: "op-dr-burak-aydin-sac-ekimi",
    fullName: "Burak Aydın",
    titlePrefix: "Op. Dr.",
    ttbSicilNo: "234567",
    ttbVerifiedAt: "2026-04-18",
    deneyimYili: 12,
    specialtySlugs: ["sac-ekimi", "estetik-cerrahi"],
    procedureSlugs: ["sac-ekimi", "rinoplasti"],
    clinicSlugs: ["estepera-sac-ekim-merkezi-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    educations: [
      { school: "İstanbul Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2010 },
      { school: "Cerrahpaşa Tıp Fakültesi", degree: "Plastik ve Rekonstrüktif Cerrahi Uzmanlık", year: 2016 },
    ],
    memberships: ["Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.7,
        reviewCount: 128,
        sourceUrl: "https://maps.google.com/?cid=op-dr-burak-aydin",
        visible: true,
      },
      {
        source: "trustpilot",
        ratingAvg: 4.8,
        reviewCount: 32,
        sourceUrl: "https://www.trustpilot.com/review/burak-aydin",
        visible: true,
      },
    ],
  },
  {
    slug: "uzm-dr-mehmet-demir-dis-hekimligi",
    fullName: "Mehmet Demir",
    titlePrefix: "Uzm. Dr.",
    ttbSicilNo: "345678",
    ttbVerifiedAt: "2026-04-15",
    deneyimYili: 18,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4"],
    clinicSlugs: ["ankara-dis-akademi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    educations: [
      { school: "Ankara Üniversitesi Diş Hekimliği Fakültesi", degree: "Diş Hekimi", year: 2004 },
      { school: "Hacettepe Üniversitesi", degree: "Cerrahi Uzmanlık", year: 2009 },
    ],
    memberships: ["Türk Diş Hekimleri Birliği", "ITI Uluslararası Implantoloji Takımı"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.6,
        reviewCount: 88,
        sourceUrl: "https://maps.google.com/?cid=mehmet-demir-dis",
        visible: true,
      },
    ],
  },
  {
    slug: "prof-dr-ali-kara-goz-hastaliklari",
    fullName: "Ali Kara",
    titlePrefix: "Prof. Dr.",
    ttbSicilNo: "456789",
    ttbVerifiedAt: "2026-04-19",
    deneyimYili: 26,
    specialtySlugs: ["goz-hastaliklari"],
    procedureSlugs: ["lasik"],
    clinicSlugs: ["izmir-goz-merkezi"],
    citySlug: "izmir",
    districtSlug: "konak",
    educations: [
      { school: "Ege Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 1996 },
      { school: "Ege Üniversitesi", degree: "Göz Hastalıkları Uzmanlık", year: 2002 },
      { school: "Moorfields Eye Hospital, London", degree: "Refraktif Cerrahi Fellowship", year: 2005 },
    ],
    memberships: ["TOD (Türk Oftalmoloji Derneği)", "ESCRS"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.8,
        reviewCount: 142,
        sourceUrl: "https://maps.google.com/?cid=prof-ali-kara",
        visible: true,
      },
      {
        source: "eksi",
        extraCount: 28,
        sourceUrl: "https://eksisozluk.com/prof-ali-kara",
        visible: true,
      },
    ],
  },
  {
    slug: "dr-fatma-celik-kadin-dogum",
    fullName: "Fatma Çelik",
    titlePrefix: "Dr.",
    ttbSicilNo: "567890",
    ttbVerifiedAt: "2026-04-12",
    deneyimYili: 16,
    specialtySlugs: ["kadin-hastaliklari-ve-dogum"],
    procedureSlugs: ["tup-bebek"],
    clinicSlugs: ["memorial-sisli"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    educations: [
      { school: "Çukurova Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2006 },
      { school: "Marmara Üniversitesi", degree: "Kadın Hastalıkları ve Doğum Uzmanlık", year: 2012 },
    ],
    memberships: ["TJOD", "ESHRE"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.5,
        reviewCount: 56,
        sourceUrl: "https://maps.google.com/?cid=dr-fatma-celik",
        visible: true,
      },
    ],
  },
  {
    slug: "dr-zeynep-arslan-psikoloji",
    fullName: "Zeynep Arslan",
    titlePrefix: "Uzm. Klinik Psikolog",
    deneyimYili: 9,
    specialtySlugs: ["psikoloji"],
    procedureSlugs: ["psikolojik-destek"],
    clinicSlugs: [],
    citySlug: "istanbul",
    districtSlug: "kadikoy",
    educations: [
      { school: "Boğaziçi Üniversitesi", degree: "Psikoloji Lisans", year: 2013 },
      { school: "İstanbul Bilgi Üniversitesi", degree: "Klinik Psikoloji Yüksek Lisans", year: 2016 },
    ],
    memberships: ["Türk Psikologlar Derneği"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.9,
        reviewCount: 64,
        sourceUrl: "https://maps.google.com/?cid=dr-zeynep-arslan",
        visible: true,
      },
    ],
  },
  {
    slug: "dyt-canan-ozkan-beslenme",
    fullName: "Canan Özkan",
    titlePrefix: "Dyt.",
    deneyimYili: 7,
    specialtySlugs: ["diyetisyen"],
    procedureSlugs: ["beslenme-danismanligi"],
    clinicSlugs: [],
    citySlug: "ankara",
    districtSlug: "cankaya",
    educations: [
      { school: "Hacettepe Üniversitesi Beslenme ve Diyetetik", degree: "Lisans", year: 2015 },
    ],
    memberships: ["TDD (Türkiye Diyetisyenler Derneği)"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.8,
        reviewCount: 102,
        sourceUrl: "https://maps.google.com/?cid=dyt-canan-ozkan",
        visible: true,
      },
    ],
  },
  {
    slug: "op-dr-emre-sahin-estetik",
    fullName: "Emre Şahin",
    titlePrefix: "Op. Dr.",
    ttbSicilNo: "678901",
    ttbVerifiedAt: "2026-04-20",
    deneyimYili: 11,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "sac-ekimi"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    educations: [
      { school: "Hacettepe Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2011 },
      { school: "Ankara Numune EAH", degree: "Plastik Cerrahi Uzmanlık", year: 2017 },
    ],
    memberships: ["TPRECD (Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği)"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.7,
        reviewCount: 198,
        sourceUrl: "https://maps.google.com/?cid=op-dr-emre-sahin",
        visible: true,
      },
      {
        source: "trustpilot",
        ratingAvg: 4.6,
        reviewCount: 24,
        sourceUrl: "https://www.trustpilot.com/review/emre-sahin",
        visible: true,
      },
    ],
  },
  {
    slug: "dr-selin-kaya-dermatoloji",
    fullName: "Selin Kaya",
    titlePrefix: "Dr.",
    ttbSicilNo: "789012",
    ttbVerifiedAt: "2026-04-14",
    deneyimYili: 9,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["akne-tedavisi", "botoks"],
    clinicSlugs: ["florence-nightingale-kadikoy"],
    citySlug: "istanbul",
    districtSlug: "kadikoy",
    educations: [
      { school: "İstanbul Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2013 },
      { school: "Şişli Etfal EAH", degree: "Dermatoloji Uzmanlık", year: 2019 },
    ],
    memberships: ["Türk Dermatoloji Derneği"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.5,
        reviewCount: 41,
        sourceUrl: "https://maps.google.com/?cid=dr-selin-kaya",
        visible: true,
      },
    ],
  },
  {
    slug: "dr-can-yurdakul-kardiyoloji",
    fullName: "Can Yurdakul",
    titlePrefix: "Doç. Dr.",
    ttbSicilNo: "890123",
    ttbVerifiedAt: "2026-04-09",
    deneyimYili: 19,
    specialtySlugs: ["kardiyoloji"],
    procedureSlugs: [],
    clinicSlugs: ["memorial-sisli"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    educations: [
      { school: "İstanbul Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2003 },
      { school: "Kartal Koşuyolu YEAH", degree: "Kardiyoloji Uzmanlık", year: 2009 },
    ],
    memberships: ["Türk Kardiyoloji Derneği", "European Society of Cardiology"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.7,
        reviewCount: 73,
        sourceUrl: "https://maps.google.com/?cid=dr-can-yurdakul",
        visible: true,
      },
    ],
  },
];

export function findDoctor(slug: string): DoctorSummary | undefined {
  return doctors.find((d) => d.slug === slug);
}

/**
 * Liste sayfaları için filtre/seçim yardımcıları.
 * MVP'de DB yok; in-memory filter. DB geldiğinde aynı imza Drizzle query'sine eşlenir.
 */
export function doctorsByCity(citySlug: string): DoctorSummary[] {
  return doctors.filter((d) => d.citySlug === citySlug);
}

export function doctorsBySpecialty(specialtySlug: string): DoctorSummary[] {
  return doctors.filter((d) => d.specialtySlugs.includes(specialtySlug));
}

export function doctorsByCityAndSpecialty(
  citySlug: string,
  specialtySlug: string,
): DoctorSummary[] {
  return doctors.filter(
    (d) =>
      d.citySlug === citySlug && d.specialtySlugs.includes(specialtySlug),
  );
}

export function doctorsByCityAndProcedure(
  citySlug: string,
  procedureSlug: string,
): DoctorSummary[] {
  return doctors.filter(
    (d) =>
      d.citySlug === citySlug && d.procedureSlugs.includes(procedureSlug),
  );
}

export function doctorsByProcedure(procedureSlug: string): DoctorSummary[] {
  return doctors.filter((d) => d.procedureSlugs.includes(procedureSlug));
}

export function sortAlphabetical<T extends { fullName?: string; name?: string }>(
  list: T[],
): T[] {
  return [...list].sort((a, b) => {
    const na = (a.fullName ?? a.name ?? "").toLocaleLowerCase("tr-TR");
    const nb = (b.fullName ?? b.name ?? "").toLocaleLowerCase("tr-TR");
    return na.localeCompare(nb, "tr-TR");
  });
}
