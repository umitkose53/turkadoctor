import type { DoctorSummary } from "./types";
import { doctorsAdditional } from "./doctors-additional";
import { doctorsVkv } from "./doctors-vkv";
import { doctorsAdana } from "./doctors-adana";
import { doctorsAcibadem } from "./doctors-acibadem";
import { doctorsFlorence } from "./doctors-florence";
import { doctorsAnadolusaglik } from "./doctors-anadolusaglik";

/**
 * Day-1 manuel seed doktor verisi.
 * Kamuya açık bilgi temelinde örnek profil olarak yer alır.
 * Doktorlar sahiplenme akışıyla (claim) bilgilerini doğrulayabilir.
 *
 * NOT: İkinci parti (yeni tedavileri kapsayan + geniş şehir dağılımı)
 * `doctors-additional.ts` dosyasından eklenir.
 */
const doctorsPrimary: DoctorSummary[] = [
  // ═══════════════ İSTANBUL — SAÇ EKİM ═══════════════
  {
    slug: "op-dr-ali-cetinkaya",
    fullName: "Ali Çetinkaya",
    titlePrefix: "Op. Dr.",
    deneyimYili: 10,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "yuz-germe",
      "rinoplasti",
      "meme-buyutme",
      "meme-kucultme",
      "meme-diklestirme",
      "karin-germe",
      "liposuction",
      "goz-kapagi-estetigi",
      "botoks",
      "dolgu",
      "prp",
    ],
    clinicSlugs: ["op-dr-ali-cetinkaya-klinigi"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    educations: [
      {
        school: "Sağlık Bilimleri Üniversitesi, Ankara Eğitim ve Araştırma Hastanesi",
        degree: "Plastik, Rekonstrüktif ve Estetik Cerrahi Uzmanlık",
        year: 2017,
      },
      {
        school: "Monza / İtalya — Uluslararası Mikrocerrahi Kursu",
        degree: "Sertifika",
        year: 2014,
      },
    ],
    memberships: [
      "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği (TPRECD)",
      "International Society of Aesthetic Plastic Surgery (ISAPS)",
      "Turkish Society of Plastic Surgeons",
    ],
    signals: [
      {
        source: "google_places",
        ratingAvg: 4.9,
        reviewCount: 612,
        sourceUrl: "https://maps.google.com/?q=Op+Dr+Ali+Cetinkaya+Atasehir",
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
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "rinoplasti"],
    clinicSlugs: ["smile-hair-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    educations: [
      { school: "İstanbul Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2010 },
      { school: "Cerrahpaşa Tıp Fakültesi", degree: "Plastik ve Rekonstrüktif Cerrahi Uzmanlık", year: 2016 },
    ],
    memberships: ["Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği", "ISHRS"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 128, visible: true },
      { source: "trustpilot", ratingAvg: 4.8, reviewCount: 32, visible: true },
    ],
  },
  {
    slug: "dr-mehmet-yildirim-sac-ekimi",
    fullName: "Mehmet Yıldırım",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["vera-clinic-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 188, visible: true },
    ],
  },
  {
    slug: "dr-serkan-kaya-sac-ekimi",
    fullName: "Serkan Kaya",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["estepalace-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 215, visible: true },
    ],
  },
  {
    slug: "uzm-dr-eren-tasdemir-sac-ekimi",
    fullName: "Eren Taşdemir",
    titlePrefix: "Uzm. Dr.",
    ttbSicilNo: "345012",
    ttbVerifiedAt: "2026-04-09",
    deneyimYili: 14,
    specialtySlugs: ["sac-ekimi", "dermatoloji"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["clinicmono-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    memberships: ["Türk Dermatoloji Derneği", "ISHRS"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 296, visible: true },
    ],
  },
  {
    slug: "dr-emir-yalcin-sac-ekimi",
    fullName: "Emir Yalçın",
    titlePrefix: "Dr.",
    deneyimYili: 8,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi"],
    clinicSlugs: ["smile-hair-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 142, visible: true },
    ],
  },
  {
    slug: "dr-tuba-aksoy-sac-ekimi",
    fullName: "Tuba Aksoy",
    titlePrefix: "Dr.",
    deneyimYili: 11,
    specialtySlugs: ["sac-ekimi", "dermatoloji"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi", "akne-tedavisi"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 167, visible: true },
    ],
  },
  {
    slug: "uzm-dr-ozge-arikan-sac-ekimi",
    fullName: "Özge Arıkan",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["sac-ekimi", "dermatoloji"],
    procedureSlugs: ["sac-ekimi", "kas-ekimi"],
    clinicSlugs: ["clinicmono-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.9, reviewCount: 224, visible: true },
    ],
  },
  {
    slug: "dr-kerem-bulut-sac-ekimi",
    fullName: "Kerem Bulut",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["vera-clinic-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 156, visible: true },
    ],
  },
  {
    slug: "op-dr-deniz-akin-sac-ekimi",
    fullName: "Deniz Akın",
    titlePrefix: "Op. Dr.",
    ttbSicilNo: "456789",
    deneyimYili: 13,
    specialtySlugs: ["sac-ekimi", "estetik-cerrahi"],
    procedureSlugs: ["sac-ekimi", "kas-ekimi", "rinoplasti"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 209, visible: true },
    ],
  },
  {
    slug: "dr-can-eroglu-sac-ekimi",
    fullName: "Can Eroğlu",
    titlePrefix: "Dr.",
    deneyimYili: 7,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["estepalace-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 98, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — ESTETİK CERRAHİ ═══════════════
  {
    slug: "op-dr-emre-sahin-estetik",
    fullName: "Emre Şahin",
    titlePrefix: "Op. Dr.",
    ttbSicilNo: "678901",
    ttbVerifiedAt: "2026-04-20",
    deneyimYili: 11,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "yuz-germe", "meme-buyutme", "liposuction"],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    educations: [
      { school: "Hacettepe Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2011 },
      { school: "Ankara Numune EAH", degree: "Plastik Cerrahi Uzmanlık", year: 2017 },
    ],
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 198, visible: true },
      { source: "trustpilot", ratingAvg: 4.6, reviewCount: 24, visible: true },
    ],
  },
  {
    slug: "op-dr-selim-yildiz-estetik",
    fullName: "Selim Yıldız",
    titlePrefix: "Op. Dr.",
    ttbSicilNo: "789234",
    deneyimYili: 15,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "meme-kucultme", "karin-germe", "bbl", "liposuction", "yuz-germe"],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TPRECD", "ISAPS"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 312, visible: true },
      { source: "trustpilot", ratingAvg: 4.7, reviewCount: 56, visible: true },
    ],
  },
  {
    slug: "prof-dr-ayse-erdogan-estetik",
    fullName: "Ayşe Erdoğan",
    titlePrefix: "Prof. Dr.",
    ttbSicilNo: "890567",
    deneyimYili: 24,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["yuz-germe", "goz-kapagi-estetigi", "sakak-germe", "boyun-germe", "rinoplasti"],
    clinicSlugs: ["liv-hospital-ulus"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TPRECD", "ISAPS", "ASPS"],
    signals: [
      { source: "google_places", ratingAvg: 4.9, reviewCount: 412, visible: true },
    ],
  },
  {
    slug: "op-dr-onur-kara-estetik",
    fullName: "Onur Kara",
    titlePrefix: "Op. Dr.",
    deneyimYili: 10,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["meme-buyutme", "meme-diklestirme", "karin-germe", "liposuction", "bbl"],
    clinicSlugs: ["memorial-sisli"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 178, visible: true },
    ],
  },
  {
    slug: "op-dr-bahar-koc-estetik",
    fullName: "Bahar Koç",
    titlePrefix: "Op. Dr.",
    deneyimYili: 9,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "yuz-germe", "goz-kapagi-estetigi", "botoks", "dolgu"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 142, visible: true },
    ],
  },
  {
    slug: "op-dr-hakan-tezel-estetik",
    fullName: "Hakan Tezel",
    titlePrefix: "Op. Dr.",
    deneyimYili: 18,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "yuz-germe", "kol-germe", "bacak-germe", "karin-germe"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 268, visible: true },
    ],
  },
  {
    slug: "op-dr-derya-soylu-estetik",
    fullName: "Derya Soylu",
    titlePrefix: "Op. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["meme-buyutme", "meme-kucultme", "meme-diklestirme", "yag-enjeksiyonu"],
    clinicSlugs: ["liv-hospital-ulus"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 198, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — DERMATOLOJİ ═══════════════
  {
    slug: "dr-ayse-yilmaz-dermatoloji",
    fullName: "Ayşe Yılmaz",
    titlePrefix: "Dr.",
    ttbSicilNo: "123456",
    ttbVerifiedAt: "2026-04-22",
    deneyimYili: 14,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["akne-tedavisi", "botoks", "dolgu", "lazer-epilasyon"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    educations: [
      { school: "Hacettepe Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 2008 },
      { school: "Marmara Üniversitesi", degree: "Dermatoloji Uzmanlık", year: 2014 },
    ],
    memberships: ["Türk Dermatoloji Derneği", "TTB İstanbul Tabip Odası", "EADV"],
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 86, visible: true },
      { source: "eksi", extraCount: 47, visible: true },
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
    procedureSlugs: ["akne-tedavisi", "botoks", "dolgu"],
    clinicSlugs: ["florence-nightingale-kadikoy"],
    citySlug: "istanbul",
    districtSlug: "kadikoy",
    memberships: ["Türk Dermatoloji Derneği"],
    signals: [
      { source: "google_places", ratingAvg: 4.5, reviewCount: 41, visible: true },
    ],
  },
  {
    slug: "uzm-dr-elif-arslan-dermatoloji",
    fullName: "Elif Arslan",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 11,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "lazer-epilasyon", "akne-tedavisi"],
    clinicSlugs: ["clinicmono-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 154, visible: true },
    ],
  },
  {
    slug: "dr-murat-balci-dermatoloji",
    fullName: "Murat Balcı",
    titlePrefix: "Dr.",
    deneyimYili: 8,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi"],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 92, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — DİŞ ═══════════════
  {
    slug: "dt-yasemin-deniz-dis",
    fullName: "Yasemin Deniz",
    titlePrefix: "Dt.",
    deneyimYili: 13,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama", "lamine-dis"],
    clinicSlugs: ["vera-clinic-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    memberships: ["Türk Diş Hekimleri Birliği"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 138, visible: true },
    ],
  },
  {
    slug: "dt-ozcan-tekin-dis",
    fullName: "Özcan Tekin",
    titlePrefix: "Dt.",
    deneyimYili: 17,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4", "lamine-dis", "dis-beyazlatma"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    memberships: ["TDB", "ITI"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 244, visible: true },
    ],
  },
  {
    slug: "dt-canan-erten-dis",
    fullName: "Canan Erten",
    titlePrefix: "Dt.",
    deneyimYili: 10,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["zirkonyum-kaplama", "lamine-dis", "dis-beyazlatma"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 88, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — KARDİYOLOJİ / İÇ HASTALIKLARI ═══════════════
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
    memberships: ["Türk Kardiyoloji Derneği", "ESC"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 73, visible: true },
    ],
  },
  {
    slug: "prof-dr-mehmet-celik-kardiyoloji",
    fullName: "Mehmet Çelik",
    titlePrefix: "Prof. Dr.",
    deneyimYili: 28,
    specialtySlugs: ["kardiyoloji"],
    procedureSlugs: [],
    clinicSlugs: ["amerikan-hastanesi-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    memberships: ["Türk Kardiyoloji Derneği", "ESC"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 184, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — KADIN DOĞUM ═══════════════
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
    memberships: ["TJOD", "ESHRE"],
    signals: [
      { source: "google_places", ratingAvg: 4.5, reviewCount: 56, visible: true },
    ],
  },
  {
    slug: "prof-dr-zeynep-aslan-kadin-dogum",
    fullName: "Zeynep Aslan",
    titlePrefix: "Prof. Dr.",
    deneyimYili: 23,
    specialtySlugs: ["kadin-hastaliklari-ve-dogum"],
    procedureSlugs: ["tup-bebek"],
    clinicSlugs: ["liv-hospital-ulus"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TJOD", "ESHRE"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 98, visible: true },
    ],
  },

  // ═══════════════ İSTANBUL — PSİKOLOJİ & DİYETİSYEN ═══════════════
  {
    slug: "uzm-klinik-psikolog-zeynep-arslan",
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
      { source: "google_places", ratingAvg: 4.9, reviewCount: 64, visible: true },
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
    memberships: ["TDD"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 102, visible: true },
    ],
  },

  // ═══════════════ ANKARA ═══════════════
  {
    slug: "uzm-dt-mehmet-demir-dis-hekimligi",
    fullName: "Mehmet Demir",
    titlePrefix: "Uzm. Dt.",
    ttbSicilNo: "345678",
    ttbVerifiedAt: "2026-04-15",
    deneyimYili: 18,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama"],
    clinicSlugs: ["ankara-dis-akademi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    educations: [
      { school: "Ankara Üniversitesi Diş Hekimliği Fakültesi", degree: "Diş Hekimi", year: 2004 },
      { school: "Hacettepe Üniversitesi", degree: "Cerrahi Uzmanlık", year: 2009 },
    ],
    memberships: ["Türk Diş Hekimleri Birliği", "ITI"],
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 88, visible: true },
    ],
  },
  {
    slug: "op-dr-arzu-coskun-estetik",
    fullName: "Arzu Coşkun",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "yuz-germe", "botoks", "dolgu"],
    clinicSlugs: ["ankara-estetik-merkezi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 178, visible: true },
    ],
  },
  {
    slug: "op-dr-baris-yilmaz-estetik-ankara",
    fullName: "Barış Yılmaz",
    titlePrefix: "Op. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "liposuction", "karin-germe", "bbl"],
    clinicSlugs: ["medicalpark-ankara"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 154, visible: true },
    ],
  },
  {
    slug: "dr-burcu-acar-dermatoloji-ankara",
    fullName: "Burcu Acar",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi", "lazer-epilasyon"],
    clinicSlugs: ["ankara-estetik-merkezi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 124, visible: true },
    ],
  },
  {
    slug: "dr-omer-saglam-sac-ekimi-ankara",
    fullName: "Ömer Sağlam",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["ankara-estetik-merkezi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 142, visible: true },
    ],
  },
  {
    slug: "dt-meltem-kayhan-dis-ankara",
    fullName: "Meltem Kayhan",
    titlePrefix: "Dt.",
    deneyimYili: 11,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "lamine-dis", "dis-beyazlatma"],
    clinicSlugs: ["ankara-dis-akademi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 116, visible: true },
    ],
  },

  // ═══════════════ İZMİR ═══════════════
  {
    slug: "prof-dr-ali-kara-goz-hastaliklari",
    fullName: "Ali Kara",
    titlePrefix: "Prof. Dr.",
    ttbSicilNo: "456789",
    ttbVerifiedAt: "2026-04-19",
    deneyimYili: 26,
    specialtySlugs: ["goz-hastaliklari"],
    procedureSlugs: ["lasik", "smile"],
    clinicSlugs: ["izmir-goz-merkezi"],
    citySlug: "izmir",
    districtSlug: "konak",
    educations: [
      { school: "Ege Üniversitesi Tıp Fakültesi", degree: "Tıp Doktoru", year: 1996 },
      { school: "Ege Üniversitesi", degree: "Göz Hastalıkları Uzmanlık", year: 2002 },
      { school: "Moorfields Eye Hospital, London", degree: "Refraktif Cerrahi Fellowship", year: 2005 },
    ],
    memberships: ["TOD", "ESCRS"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 142, visible: true },
      { source: "eksi", extraCount: 28, visible: true },
    ],
  },
  {
    slug: "op-dr-cem-ozdemir-estetik-izmir",
    fullName: "Cem Özdemir",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "yuz-germe", "liposuction"],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 188, visible: true },
    ],
  },
  {
    slug: "dr-melike-tokgoz-dermatoloji-izmir",
    fullName: "Melike Tokgöz",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi", "lazer-epilasyon"],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 96, visible: true },
    ],
  },
  {
    slug: "dr-ekrem-gungor-sac-ekimi-izmir",
    fullName: "Ekrem Güngör",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 88, visible: true },
    ],
  },

  // ═══════════════ ANTALYA ═══════════════
  {
    slug: "dt-okan-aksoy-dis-antalya",
    fullName: "Okan Aksoy",
    titlePrefix: "Dt.",
    deneyimYili: 15,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama", "lamine-dis"],
    clinicSlugs: ["antalya-dental-house"],
    citySlug: "antalya",
    districtSlug: "muratpasa",
    memberships: ["TDB"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 222, visible: true },
      { source: "whatclinic", visible: true },
    ],
  },
  {
    slug: "op-dr-ferhat-koc-estetik-antalya",
    fullName: "Ferhat Koç",
    titlePrefix: "Op. Dr.",
    deneyimYili: 16,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "karin-germe", "bbl", "liposuction", "yuz-germe"],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    memberships: ["TPRECD", "ISAPS"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 312, visible: true },
      { source: "trustpilot", ratingAvg: 4.7, reviewCount: 64, visible: true },
    ],
  },
  {
    slug: "dr-sema-yildirim-dermatoloji-antalya",
    fullName: "Sema Yıldırım",
    titlePrefix: "Dr.",
    deneyimYili: 11,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "lazer-epilasyon", "akne-tedavisi"],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 124, visible: true },
    ],
  },
  {
    slug: "dr-mert-kaya-sac-ekimi-antalya",
    fullName: "Mert Kaya",
    titlePrefix: "Dr.",
    deneyimYili: 8,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 96, visible: true },
    ],
  },

  // ═══════════════ BURSA ═══════════════
  {
    slug: "op-dr-cihan-akin-estetik-bursa",
    fullName: "Cihan Akın",
    titlePrefix: "Op. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "yuz-germe", "liposuction"],
    clinicSlugs: ["bursa-acibadem"],
    citySlug: "bursa",
    districtSlug: "nilufer",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 142, visible: true },
    ],
  },

  // ═══════════════ ADANA ═══════════════
  {
    slug: "dr-ferit-ayhan-kardiyoloji-adana",
    fullName: "Ferit Ayhan",
    titlePrefix: "Doç. Dr.",
    deneyimYili: 18,
    specialtySlugs: ["kardiyoloji"],
    procedureSlugs: [],
    clinicSlugs: ["adana-acibadem"],
    citySlug: "adana",
    districtSlug: "seyhan",
    memberships: ["Türk Kardiyoloji Derneği"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 88, visible: true },
    ],
  },
];

// Birleştirilmiş final liste
// Dedupe: bazı doktorlar birden fazla kaynakta görünebilir; slug bazlı uniqueness.
const _all = [
  ...doctorsPrimary,
  ...doctorsAdditional,
  ...doctorsVkv,
  ...doctorsAdana,
  ...doctorsAcibadem,
  ...doctorsFlorence,
  ...doctorsAnadolusaglik,
];
const _seen = new Set<string>();
export const doctors: DoctorSummary[] = _all.filter((d) => {
  if (_seen.has(d.slug)) return false;
  _seen.add(d.slug);
  return true;
});

export function findDoctor(slug: string): DoctorSummary | undefined {
  return doctors.find((d) => d.slug === slug);
}

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
