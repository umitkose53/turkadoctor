import type { ClinicSummary } from "./types";

/**
 * Day-1 manuel seed klinik verisi. Gerçek listing değil — örnek/test verisi.
 * Production'da Sağlık Bakanlığı + claim akışıyla beslenecek.
 */
export const clinics: ClinicSummary[] = [
  {
    slug: "acibadem-maslak",
    name: "Acıbadem Maslak Hastanesi",
    type: "ozel_hastane",
    citySlug: "istanbul",
    districtSlug: "sariyer",
    address: "Büyükdere Cad. No:40, Maslak, Sarıyer/İstanbul",
    phone: "0212 304 44 44",
    jciCert: true,
    isoCerts: ["ISO 9001:2015"],
    sbRuhsatNo: "34-1234",
    ruhsatVerifiedAt: "2026-04-15",
    specialties: [
      "dermatoloji",
      "estetik-cerrahi",
      "dis-hekimligi",
      "goz-hastaliklari",
      "kardiyoloji",
      "ic-hastaliklari",
      "kbb",
    ],
    procedures: ["sac-ekimi", "dis-implanti", "lasik", "rinoplasti", "botoks"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.4,
        reviewCount: 3402,
        sourceUrl: "https://maps.google.com/?cid=acibadem-maslak",
        visible: true,
      },
      {
        source: "eksi",
        extraCount: 142,
        sourceUrl:
          "https://eksisozluk.com/acibadem-maslak-hastanesi--3502711",
        visible: true,
      },
    ],
  },
  {
    slug: "florence-nightingale-kadikoy",
    name: "Özel Florence Nightingale Hastanesi (Kadıköy)",
    type: "ozel_hastane",
    citySlug: "istanbul",
    districtSlug: "kadikoy",
    address: "Eğitim Mah., Kadıköy/İstanbul",
    phone: "0216 660 66 66",
    jciCert: true,
    sbRuhsatNo: "34-2456",
    ruhsatVerifiedAt: "2026-04-12",
    specialties: [
      "kardiyoloji",
      "noroloji",
      "ic-hastaliklari",
      "genel-cerrahi",
      "ortopedi-ve-travmatoloji",
    ],
    procedures: ["rinoplasti", "lasik"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.5,
        reviewCount: 1560,
        sourceUrl: "https://maps.google.com/?cid=florence-kadikoy",
        visible: true,
      },
    ],
  },
  {
    slug: "memorial-sisli",
    name: "Memorial Şişli Hastanesi",
    type: "ozel_hastane",
    citySlug: "istanbul",
    districtSlug: "sisli",
    address: "Piyalepaşa Bulvarı, Şişli/İstanbul",
    phone: "0212 314 66 66",
    jciCert: true,
    isoCerts: ["ISO 9001:2015"],
    sbRuhsatNo: "34-1078",
    ruhsatVerifiedAt: "2026-03-30",
    specialties: [
      "kardiyoloji",
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi",
      "uroloji",
      "ortopedi-ve-travmatoloji",
    ],
    procedures: ["tup-bebek", "dis-implanti"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.5,
        reviewCount: 4880,
        sourceUrl: "https://maps.google.com/?cid=memorial-sisli",
        visible: true,
      },
      {
        source: "trustpilot",
        ratingAvg: 4.7,
        reviewCount: 86,
        sourceUrl: "https://www.trustpilot.com/review/memorial.com.tr",
        visible: true,
      },
    ],
  },
  {
    slug: "estepera-sac-ekim-merkezi-istanbul",
    name: "EsteperaTR Saç Ekim Merkezi",
    type: "tip_merkezi",
    citySlug: "istanbul",
    districtSlug: "sisli",
    address: "Şişli, İstanbul",
    phone: "0212 555 11 22",
    sbRuhsatNo: "34-9921",
    ruhsatVerifiedAt: "2026-04-01",
    specialties: ["sac-ekimi", "dermatoloji"],
    procedures: ["sac-ekimi"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.8,
        reviewCount: 612,
        sourceUrl: "https://maps.google.com/?cid=estepera",
        visible: true,
      },
      {
        source: "whatclinic",
        sourceUrl: "https://www.whatclinic.com/cosmetic-plastic-surgery/turkey/istanbul/estepera",
        visible: true,
      },
    ],
  },
  {
    slug: "ankara-dis-akademi",
    name: "Ankara Diş Akademi Polikliniği",
    type: "agdc",
    citySlug: "ankara",
    districtSlug: "cankaya",
    address: "Tunalı Hilmi Cad., Çankaya/Ankara",
    phone: "0312 555 88 99",
    sbRuhsatNo: "06-3344",
    ruhsatVerifiedAt: "2026-04-08",
    specialties: ["dis-hekimligi"],
    procedures: ["dis-implanti", "all-on-4"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.6,
        reviewCount: 248,
        sourceUrl: "https://maps.google.com/?cid=ankara-dis-akademi",
        visible: true,
      },
    ],
  },
  {
    slug: "izmir-goz-merkezi",
    name: "İzmir Göz Merkezi",
    type: "tip_merkezi",
    citySlug: "izmir",
    districtSlug: "konak",
    address: "Alsancak, Konak/İzmir",
    phone: "0232 444 55 66",
    sbRuhsatNo: "35-1122",
    ruhsatVerifiedAt: "2026-04-10",
    specialties: ["goz-hastaliklari"],
    procedures: ["lasik"],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.7,
        reviewCount: 320,
        sourceUrl: "https://maps.google.com/?cid=izmir-goz-merkezi",
        visible: true,
      },
    ],
  },
];

export function findClinic(slug: string): ClinicSummary | undefined {
  return clinics.find((c) => c.slug === slug);
}
