import type { DoctorSummary } from "./types";

/**
 * 2. parti doktor seed verisi.
 * Yeni eklenen tedavi türlerini (jinekomasti, dudak estetiği, HIFU, PRP, vb.)
 * kapsayan ek hekimler ve daha geniş şehir dağılımı.
 *
 * Kamuya açık bilgi temelinde örnek profil olarak yer alır.
 */
export const doctorsAdditional: DoctorSummary[] = [
  // ───────────── İSTANBUL — ESTETİK CERRAHİ ─────────────
  {
    slug: "op-dr-yusuf-kaya-estetik",
    fullName: "Yusuf Kaya",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "jinekomasti",
      "rinoplasti",
      "liposuction",
      "karin-germe",
      "bichectomy",
    ],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 188, visible: true },
    ],
  },
  {
    slug: "op-dr-asli-demir-estetik",
    fullName: "Aslı Demir",
    titlePrefix: "Op. Dr.",
    deneyimYili: 15,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "meme-buyutme",
      "meme-kucultme",
      "meme-diklestirme",
      "yag-enjeksiyonu",
      "yuz-germe",
    ],
    clinicSlugs: ["liv-hospital-ulus"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TPRECD", "ISAPS"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 256, visible: true },
      { source: "trustpilot", ratingAvg: 4.7, reviewCount: 42, visible: true },
    ],
  },
  {
    slug: "op-dr-kerem-erdem-estetik",
    fullName: "Kerem Erdem",
    titlePrefix: "Op. Dr.",
    deneyimYili: 11,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "rinoplasti",
      "kulak-estetigi",
      "goz-kapagi-estetigi",
      "cene-estetigi",
    ],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 162, visible: true },
    ],
  },
  {
    slug: "op-dr-ozge-akbas-estetik",
    fullName: "Özge Akbaş",
    titlePrefix: "Op. Dr.",
    deneyimYili: 9,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "dudak-estetigi",
      "rinoplasti",
      "yuz-germe",
      "yag-enjeksiyonu",
    ],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 132, visible: true },
    ],
  },

  // ───────────── İSTANBUL — DERMATOLOJİ ESTETİK ─────────────
  {
    slug: "uzm-dr-defne-akarsu-dermatoloji",
    fullName: "Defne Akarsu",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["prp", "hifu", "mezoterapi", "botoks", "dolgu"],
    clinicSlugs: ["clinicmono-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    memberships: ["Türk Dermatoloji Derneği"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 184, visible: true },
    ],
  },
  {
    slug: "dr-cisem-sahin-dermatoloji",
    fullName: "Çisem Şahin",
    titlePrefix: "Dr.",
    deneyimYili: 8,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["kimyasal-peeling", "fraksiyonel-lazer", "akne-tedavisi", "lazer-epilasyon"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 106, visible: true },
    ],
  },
  {
    slug: "uzm-dr-sevda-gun-dermatoloji",
    fullName: "Sevda Gün",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["hidrafacial", "mezoterapi", "prp", "botoks"],
    clinicSlugs: ["este-istanbul"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    signals: [
      { source: "google_places", ratingAvg: 4.9, reviewCount: 212, visible: true },
    ],
  },

  // ───────────── İSTANBUL — SAÇ EKİM (ek) ─────────────
  {
    slug: "dr-selcuk-demir-sac-ekimi",
    fullName: "Selçuk Demir",
    titlePrefix: "Dr.",
    deneyimYili: 11,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["clinicmono-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 248, visible: true },
    ],
  },
  {
    slug: "dr-cuneyt-ozkan-sac-ekimi",
    fullName: "Cüneyt Özkan",
    titlePrefix: "Dr.",
    deneyimYili: 13,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["vera-clinic-istanbul"],
    citySlug: "istanbul",
    districtSlug: "sisli",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 196, visible: true },
    ],
  },

  // ───────────── İSTANBUL — DİŞ ─────────────
  {
    slug: "dt-cem-bayraktar-dis",
    fullName: "Cem Bayraktar",
    titlePrefix: "Dt.",
    deneyimYili: 15,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["lamine-dis", "zirkonyum-kaplama", "dis-beyazlatma", "dis-implanti"],
    clinicSlugs: ["estethica-istanbul"],
    citySlug: "istanbul",
    districtSlug: "atasehir",
    memberships: ["TDB"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 224, visible: true },
    ],
  },

  // ───────────── İSTANBUL — GÖZ ─────────────
  {
    slug: "op-dr-ahmet-gursoy-goz",
    fullName: "Ahmet Gürsoy",
    titlePrefix: "Op. Dr.",
    deneyimYili: 17,
    specialtySlugs: ["goz-hastaliklari"],
    procedureSlugs: ["lasik", "smile"],
    clinicSlugs: ["acibadem-maslak"],
    citySlug: "istanbul",
    districtSlug: "sariyer",
    memberships: ["TOD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 144, visible: true },
    ],
  },

  // ───────────── İSTANBUL — KADIN DOĞUM ─────────────
  {
    slug: "op-dr-aydan-gul-kadin-dogum",
    fullName: "Aydan Gül",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["kadin-hastaliklari-ve-dogum"],
    procedureSlugs: ["g-spot-vajinoplasti", "labioplasti", "tup-bebek"],
    clinicSlugs: ["liv-hospital-ulus"],
    citySlug: "istanbul",
    districtSlug: "besiktas",
    memberships: ["TJOD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 156, visible: true },
    ],
  },

  // ───────────── ANKARA — ek ─────────────
  {
    slug: "prof-dr-hulya-cinar-estetik-ankara",
    fullName: "Hülya Çınar",
    titlePrefix: "Prof. Dr.",
    deneyimYili: 26,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "yuz-germe",
      "rinoplasti",
      "goz-kapagi-estetigi",
      "sakak-germe",
      "kas-germe",
    ],
    clinicSlugs: ["medicalpark-ankara"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    memberships: ["TPRECD", "ISAPS"],
    signals: [
      { source: "google_places", ratingAvg: 4.9, reviewCount: 312, visible: true },
    ],
  },
  {
    slug: "op-dr-tarik-polat-sac-ekimi-ankara",
    fullName: "Tarık Polat",
    titlePrefix: "Op. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["ankara-estetik-merkezi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 164, visible: true },
    ],
  },
  {
    slug: "dt-mine-yilmaz-dis-ankara",
    fullName: "Mine Yılmaz",
    titlePrefix: "Dt.",
    deneyimYili: 14,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["lamine-dis", "zirkonyum-kaplama", "dis-implanti", "dis-beyazlatma"],
    clinicSlugs: ["ankara-dis-akademi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 172, visible: true },
    ],
  },
  {
    slug: "doc-dr-selin-korkmaz-goz-ankara",
    fullName: "Selin Korkmaz",
    titlePrefix: "Doç. Dr.",
    deneyimYili: 18,
    specialtySlugs: ["goz-hastaliklari"],
    procedureSlugs: ["lasik", "smile"],
    clinicSlugs: ["medicalpark-ankara"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    memberships: ["TOD"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 128, visible: true },
    ],
  },
  {
    slug: "dr-irem-kara-dermatoloji-ankara",
    fullName: "İrem Kara",
    titlePrefix: "Dr.",
    deneyimYili: 8,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["mezoterapi", "prp", "hifu", "botoks"],
    clinicSlugs: ["ankara-estetik-merkezi"],
    citySlug: "ankara",
    districtSlug: "cankaya",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 106, visible: true },
    ],
  },

  // ───────────── İZMİR — ek ─────────────
  {
    slug: "op-dr-tolga-bayrak-estetik-izmir",
    fullName: "Tolga Bayrak",
    titlePrefix: "Op. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "jinekomasti",
      "rinoplasti",
      "liposuction",
      "karin-germe",
    ],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 188, visible: true },
    ],
  },
  {
    slug: "dr-bora-yilmaz-sac-ekimi-izmir",
    fullName: "Bora Yılmaz",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 144, visible: true },
    ],
  },
  {
    slug: "uzm-dr-tunc-erdal-dermatoloji-izmir",
    fullName: "Tunç Erdal",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["lazer-epilasyon", "fraksiyonel-lazer", "botoks", "dolgu"],
    clinicSlugs: ["izmir-estetik-clinic"],
    citySlug: "izmir",
    districtSlug: "konak",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 126, visible: true },
    ],
  },
  {
    slug: "dt-asli-celik-dis-izmir",
    fullName: "Aslı Çelik",
    titlePrefix: "Dt.",
    deneyimYili: 12,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["lamine-dis", "zirkonyum-kaplama", "dis-beyazlatma"],
    clinicSlugs: ["kent-hastanesi-izmir"],
    citySlug: "izmir",
    districtSlug: "bornova",
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 168, visible: true },
    ],
  },

  // ───────────── ANTALYA — ek ─────────────
  {
    slug: "op-dr-berk-sener-estetik-antalya",
    fullName: "Berk Şener",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: [
      "rinoplasti",
      "yuz-germe",
      "meme-buyutme",
      "karin-germe",
      "liposuction",
      "jinekomasti",
    ],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    memberships: ["TPRECD"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 268, visible: true },
    ],
  },
  {
    slug: "dr-sercan-tepe-sac-ekimi-antalya",
    fullName: "Sercan Tepe",
    titlePrefix: "Dr.",
    deneyimYili: 11,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 158, visible: true },
    ],
  },
  {
    slug: "dt-burak-tunc-dis-antalya",
    fullName: "Burak Tunç",
    titlePrefix: "Dt.",
    deneyimYili: 16,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama", "lamine-dis"],
    clinicSlugs: ["antalya-dental-house"],
    citySlug: "antalya",
    districtSlug: "muratpasa",
    memberships: ["TDB", "ITI"],
    signals: [
      { source: "google_places", ratingAvg: 4.9, reviewCount: 312, visible: true },
      { source: "whatclinic", visible: true },
    ],
  },
  {
    slug: "prof-dr-murat-bektas-goz-antalya",
    fullName: "Murat Bektaş",
    titlePrefix: "Prof. Dr.",
    deneyimYili: 22,
    specialtySlugs: ["goz-hastaliklari"],
    procedureSlugs: ["lasik", "smile"],
    clinicSlugs: ["antalya-medikal-park"],
    citySlug: "antalya",
    districtSlug: "muratpasa",
    memberships: ["TOD"],
    signals: [
      { source: "google_places", ratingAvg: 4.8, reviewCount: 184, visible: true },
    ],
  },
  {
    slug: "dr-pelin-demir-dermatoloji-antalya",
    fullName: "Pelin Demir",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["kimyasal-peeling", "hidrafacial", "mezoterapi"],
    clinicSlugs: ["antalya-estetik-international"],
    citySlug: "antalya",
    districtSlug: "konyaalti",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 96, visible: true },
    ],
  },

  // ───────────── BURSA — ek ─────────────
  {
    slug: "op-dr-gizem-yildirim-estetik-bursa",
    fullName: "Gizem Yıldırım",
    titlePrefix: "Op. Dr.",
    deneyimYili: 11,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["meme-buyutme", "rinoplasti", "liposuction"],
    clinicSlugs: ["bursa-acibadem"],
    citySlug: "bursa",
    districtSlug: "nilufer",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 124, visible: true },
    ],
  },
  {
    slug: "dr-ercan-kilic-sac-ekimi-bursa",
    fullName: "Ercan Kılıç",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["sac-ekimi"],
    procedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    clinicSlugs: ["bursa-acibadem"],
    citySlug: "bursa",
    districtSlug: "nilufer",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 112, visible: true },
    ],
  },
  {
    slug: "uzm-dr-levent-aydin-dermatoloji-bursa",
    fullName: "Levent Aydın",
    titlePrefix: "Uzm. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi", "mezoterapi"],
    clinicSlugs: [],
    citySlug: "bursa",
    districtSlug: "nilufer",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 88, visible: true },
    ],
  },

  // ───────────── GAZİANTEP ─────────────
  {
    slug: "op-dr-hakan-aslan-estetik-gaziantep",
    fullName: "Hakan Aslan",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "liposuction"],
    clinicSlugs: [],
    citySlug: "gaziantep",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 148, visible: true },
    ],
  },

  // ───────────── KONYA ─────────────
  {
    slug: "op-dr-sinan-yuksel-estetik-konya",
    fullName: "Sinan Yüksel",
    titlePrefix: "Op. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "yuz-germe", "meme-buyutme"],
    clinicSlugs: [],
    citySlug: "konya",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 116, visible: true },
    ],
  },

  // ───────────── MERSİN ─────────────
  {
    slug: "op-dr-mert-cengiz-estetik-mersin",
    fullName: "Mert Cengiz",
    titlePrefix: "Op. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "liposuction", "karin-germe"],
    clinicSlugs: [],
    citySlug: "mersin",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 102, visible: true },
    ],
  },
  {
    slug: "dr-funda-tarhan-dermatoloji-mersin",
    fullName: "Funda Tarhan",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi"],
    clinicSlugs: [],
    citySlug: "mersin",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 78, visible: true },
    ],
  },

  // ───────────── KAYSERİ ─────────────
  {
    slug: "op-dr-fatih-gunes-estetik-kayseri",
    fullName: "Fatih Güneş",
    titlePrefix: "Op. Dr.",
    deneyimYili: 11,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme"],
    clinicSlugs: [],
    citySlug: "kayseri",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 92, visible: true },
    ],
  },

  // ───────────── ESKİŞEHİR ─────────────
  {
    slug: "dr-elif-baran-dermatoloji-eskisehir",
    fullName: "Elif Baran",
    titlePrefix: "Dr.",
    deneyimYili: 9,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "akne-tedavisi", "lazer-epilasyon"],
    clinicSlugs: [],
    citySlug: "eskisehir",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 84, visible: true },
    ],
  },

  // ───────────── SAMSUN ─────────────
  {
    slug: "op-dr-vedat-yilmaz-estetik-samsun",
    fullName: "Vedat Yılmaz",
    titlePrefix: "Op. Dr.",
    deneyimYili: 14,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "meme-buyutme", "karin-germe"],
    clinicSlugs: [],
    citySlug: "samsun",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 88, visible: true },
    ],
  },

  // ───────────── DENİZLİ ─────────────
  {
    slug: "dr-pinar-celik-dermatoloji-denizli",
    fullName: "Pınar Çelik",
    titlePrefix: "Dr.",
    deneyimYili: 10,
    specialtySlugs: ["dermatoloji"],
    procedureSlugs: ["botoks", "dolgu", "mezoterapi"],
    clinicSlugs: [],
    citySlug: "denizli",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 74, visible: true },
    ],
  },

  // ───────────── TRABZON ─────────────
  {
    slug: "op-dr-tuna-akar-estetik-trabzon",
    fullName: "Tuna Akar",
    titlePrefix: "Op. Dr.",
    deneyimYili: 12,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "yuz-germe", "liposuction"],
    clinicSlugs: [],
    citySlug: "trabzon",
    signals: [
      { source: "google_places", ratingAvg: 4.6, reviewCount: 96, visible: true },
    ],
  },

  // ───────────── KOCAELİ ─────────────
  {
    slug: "dt-emre-toraman-dis-kocaeli",
    fullName: "Emre Toraman",
    titlePrefix: "Dt.",
    deneyimYili: 11,
    specialtySlugs: ["dis-hekimligi"],
    procedureSlugs: ["dis-implanti", "lamine-dis", "zirkonyum-kaplama"],
    clinicSlugs: [],
    citySlug: "kocaeli",
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 96, visible: true },
    ],
  },

  // ───────────── DİYARBAKIR ─────────────
  {
    slug: "op-dr-baris-cetin-estetik-diyarbakir",
    fullName: "Barış Çetin",
    titlePrefix: "Op. Dr.",
    deneyimYili: 13,
    specialtySlugs: ["estetik-cerrahi"],
    procedureSlugs: ["rinoplasti", "liposuction"],
    clinicSlugs: [],
    citySlug: "diyarbakir",
    signals: [
      { source: "google_places", ratingAvg: 4.5, reviewCount: 78, visible: true },
    ],
  },

  // ───────────── KARDİYOLOJİ — ek illere yayıldı ─────────────
  {
    slug: "doc-dr-murat-akay-kardiyoloji-antalya",
    fullName: "Murat Akay",
    titlePrefix: "Doç. Dr.",
    deneyimYili: 18,
    specialtySlugs: ["kardiyoloji"],
    procedureSlugs: [],
    clinicSlugs: ["antalya-medikal-park"],
    citySlug: "antalya",
    districtSlug: "muratpasa",
    memberships: ["Türk Kardiyoloji Derneği"],
    signals: [
      { source: "google_places", ratingAvg: 4.7, reviewCount: 124, visible: true },
    ],
  },
];
