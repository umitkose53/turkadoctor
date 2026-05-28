import type { DoctorSummary } from "./types";

/**
 * Ankara Yıldırım Beyazıt Üniversitesi (AYBÜ) Tıp Fakültesi akademik kadrosu.
 * Kaynak: AVES (avesis.aybu.edu.tr) — kurum tarafından alenileştirilmiş akademik kadro.
 *   Tam ad + unvan her hekim için AVES profil sayfasından (kişisel akademik profil)
 *   doğrulanarak alınmıştır. KVKK m.5/2-d + m.28/1-ç istisnası kapsamında yeniden indeksleme.
 *
 * NOT: AYBÜ Tıp Fakültesi, Ankara Şehir Hastanesi ile afiliyedir; klinik eğitim
 * büyük ölçüde Ankara Şehir Hastanesi (Çankaya/Ankara) kampüsünde yürütülür.
 * Temel tıp bilimleri (anatomi, fizyoloji, biyokimya, mikrobiyoloji vb.) ve klinik
 * karşılığı taksonomide bulunmayan dallar (halk sağlığı, adli tıp, nükleer tıp) bu
 * klinik hekim dizinine dahil edilmemiştir.
 */
export const doctorsYildirimBeyazit: DoctorSummary[] = [
  {
    "slug": "abbas-ali-tam-aybu",
    "fullName": "Abbas Ali Tam",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Abbas%20Ali%20Tam%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "abdulkadir-but-aybu",
    "fullName": "Abdulkadir But",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Abdulkadir%20But%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "abdullah-kurt-aybu",
    "fullName": "Abdullah Kurt",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Abdullah%20Kurt%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "abdussamed-yalcin-aybu",
    "fullName": "Abdussamed Yalçın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Abdussamed%20Yal%C3%A7%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-dirikoc-aybu",
    "fullName": "Ahmet Dirikoç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Diriko%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-erturk-aybu",
    "fullName": "Ahmet Ertürk",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ahmet%20Ert%C3%BCrk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-gurhan-gurcay-aybu",
    "fullName": "Ahmet Gürhan Gürçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20G%C3%BCrhan%20G%C3%BCr%C3%A7ay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-kagan-ozdemir-aybu",
    "fullName": "Ahmet Kağan Özdemir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ahmet%20Ka%C4%9Fan%20%C3%96zdemir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-keskin-aybu",
    "fullName": "Ahmet Keskin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Keskin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-kessaf-aslar-aybu",
    "fullName": "Ahmet Keşşaf Aşlar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Ke%C5%9F%C5%9Faf%20A%C5%9Flar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-sefa-akis-aybu",
    "fullName": "Ahmet Sefa Akis",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmet%20Sefa%20Akis%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-sertcelik-aybu",
    "fullName": "Ahmet Sertçelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ahmet%20Sert%C3%A7elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-yasin-kus-aybu",
    "fullName": "Ahmet Yasin Kuş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmet%20Yasin%20Ku%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-yagmur-bas-aybu",
    "fullName": "Ahmet Yağmur Baş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Ya%C4%9Fmur%20Ba%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ahmet-zulfikar-akelma-aybu",
    "fullName": "Ahmet Zülfikar Akelma",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Z%C3%BClfikar%20Akelma%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "akin-aktas-aybu",
    "fullName": "Akın Aktaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ak%C4%B1n%20Akta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ali-ates-aybu",
    "fullName": "Ali Ateş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ali%20Ate%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ali-coskun-aybu",
    "fullName": "Ali Coşkun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ali%20Co%C5%9Fkun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ali-sami-bercin-aybu",
    "fullName": "Ali Sami Berçin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ali%20Sami%20Ber%C3%A7in%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ali-caykoylu-aybu",
    "fullName": "Ali Çayköylü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ali%20%C3%87ayk%C3%B6yl%C3%BC%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "alp-sener-aybu",
    "fullName": "Alp Şener",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Alp%20%C5%9Eener%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "alparslan-ertenlice-aybu",
    "fullName": "Alparslan Ertenlice",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Alparslan%20Ertenlice%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "arda-arif-izgi-aybu",
    "fullName": "Arda Arif İzgi",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Arda%20Arif%20%C4%B0zgi%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "arslan-ardicoglu-aybu",
    "fullName": "Arslan Ardıçoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Arslan%20Ard%C4%B1%C3%A7o%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "asli-can-aybu",
    "fullName": "Aslı Can",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Asl%C4%B1%20Can%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "asli-kevser-aydilek-aybu",
    "fullName": "Aslı Kevser Aydilek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Asl%C4%B1%20Kevser%20Aydilek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "asli-nur-ozkaya-parlakay-aybu",
    "fullName": "Aslı Nur Özkaya Parlakay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Asl%C4%B1%20Nur%20%C3%96zkaya%20Parlakay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "asim-ozayar-aybu",
    "fullName": "Asım Özayar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20As%C4%B1m%20%C3%96zayar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "atilla-kazanci-aybu",
    "fullName": "Atilla Kazancı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Atilla%20Kazanc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ayhan-ozhasenekler-aybu",
    "fullName": "Ayhan Özhasenekler",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ayhan%20%C3%96zhasenekler%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ayse-filiz-yavuz-aybu",
    "fullName": "Ayşe Filiz Yavuz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ay%C5%9Fe%20Filiz%20Yavuz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ayse-kaya-kalem-aybu",
    "fullName": "Ayşe Kaya Kalem",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ay%C5%9Fe%20Kaya%20Kalem%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ayse-miray-guneser-aybu",
    "fullName": "Ayşe Miray Güneşer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ay%C5%9Fe%20Miray%20G%C3%BCne%C5%9Fer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "aysegul-karalezli-aybu",
    "fullName": "Ayşegül Karalezli",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ay%C5%9Feg%C3%BCl%20Karalezli%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "aysegul-nese-citak-kurt-aybu",
    "fullName": "Ayşegül Neşe Çıtak Kurt",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ay%C5%9Feg%C3%BCl%20Ne%C5%9Fe%20%C3%87%C4%B1tak%20Kurt%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bahar-gurlek-demirci-aybu",
    "fullName": "Bahar Gürlek Demirci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Bahar%20G%C3%BCrlek%20Demirci%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bahattin-ozgur-akin-aybu",
    "fullName": "Bahattin Özgür Akın",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Bahattin%20%C3%96zg%C3%BCr%20Ak%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "banu-mendi-aybu",
    "fullName": "Banu Mendi",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Banu%20Mendi%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "begum-gorgulu-akin-aybu",
    "fullName": "Begüm Görgülü Akın",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Beg%C3%BCm%20G%C3%B6rg%C3%BCl%C3%BC%20Ak%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bekir-demirbas-aybu",
    "fullName": "Bekir Demirbaş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Bekir%20Demirba%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bekir-cakir-aybu",
    "fullName": "Bekir Çakır",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Bekir%20%C3%87ak%C4%B1r%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "belma-yaman-aybu",
    "fullName": "Belma Yaman",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Belma%20Yaman%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "berat-meryem-alkan-aybu",
    "fullName": "Berat Meryem Alkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Berat%20Meryem%20Alkan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "berna-evranos-ogmen-aybu",
    "fullName": "Berna Evranos Öğmen",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Berna%20Evranos%20%C3%96%C4%9Fmen%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "berrak-bilginer-gurbuz-aybu",
    "fullName": "Berrak Bilginer Gürbüz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Berrak%20Bilginer%20G%C3%BCrb%C3%BCz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "betul-akbuga-ozel-aybu",
    "fullName": "Betül Akbuğa Özel",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Bet%C3%BCl%20Akbu%C4%9Fa%20%C3%96zel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "beyza-nur-atay-aybu",
    "fullName": "Beyza Nur Atay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beyza%20Nur%20Atay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bilal-katipoglu-aybu",
    "fullName": "Bilal Katipoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Bilal%20Katipo%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bircan-kayaaslan-aybu",
    "fullName": "Bircan Kayaaslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Bircan%20Kayaaslan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "burak-bilgin-aybu",
    "fullName": "Burak Bilgin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Burak%20Bilgin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "burak-civelek-aybu",
    "fullName": "Burak Civelek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Burak%20Civelek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "burak-nalbant-aybu",
    "fullName": "Burak Nalbant",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Burak%20Nalbant%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "burak-celik-aybu",
    "fullName": "Burak Çelik",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Burak%20%C3%87elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bokebatur-ahmet-rasit-mendi-aybu",
    "fullName": "Bökebatur Ahmet Raşit Mendi",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20B%C3%B6kebatur%20Ahmet%20Ra%C5%9Fit%20Mendi%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "bulent-yalcin-aybu",
    "fullName": "Bülent Yalçın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20B%C3%BClent%20Yal%C3%A7%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "busra-eldem-aybu",
    "fullName": "Büşra Eldem",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20B%C3%BC%C5%9Fra%20Eldem%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "busra-elif-sahin-golge-aybu",
    "fullName": "Büşra Elif Şahin Gölge",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20B%C3%BC%C5%9Fra%20Elif%20%C5%9Eahin%20G%C3%B6lge%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "busra-sumeyye-arica-polat-aybu",
    "fullName": "Büşra Sümeyye Arıca Polat",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20B%C3%BC%C5%9Fra%20S%C3%BCmeyye%20Ar%C4%B1ca%20Polat%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "can-demir-karacan-aybu",
    "fullName": "Can Demir Karacan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Can%20Demir%20Karacan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "can-ihsan-oztorun-aybu",
    "fullName": "Can İhsan Öztorun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Can%20%C4%B0hsan%20%C3%96ztorun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "cevdet-aydin-aybu",
    "fullName": "Cevdet Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Cevdet%20Ayd%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ceyhun-caglar-aybu",
    "fullName": "Ceyhun Çağlar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ceyhun%20%C3%87a%C4%9Flar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "davut-kamaci-aybu",
    "fullName": "Davut Kamacı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Davut%20Kamac%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "demet-tas-aybu",
    "fullName": "Demet Taş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Demet%20Ta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "demirhan-devecioglu-aybu",
    "fullName": "Demirhan Devecioğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Demirhan%20Devecio%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "deniz-bulduk-guler-aybu",
    "fullName": "Deniz Bulduk Güler",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Deniz%20Bulduk%20G%C3%BCler%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "derya-irgat-aybu",
    "fullName": "Derya Irgat",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Derya%20Irgat%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "didem-ardicli-aybu",
    "fullName": "Didem Ardıçlı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Didem%20Ard%C4%B1%C3%A7l%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "didem-ozdemir-aybu",
    "fullName": "Didem Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Didem%20%C3%96zdemir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "didem-sener-dede-aybu",
    "fullName": "Didem Şener Dede",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Didem%20%C5%9Eener%20Dede%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "dilber-ademhan-tural-aybu",
    "fullName": "Dilber Ademhan Tural",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Dilber%20Ademhan%20Tural%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "durmus-ali-ocguder-aybu",
    "fullName": "Durmuş Ali Öçgüder",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Durmu%C5%9F%20Ali%20%C3%96%C3%A7g%C3%BCder%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "duygu-kayar-calili-aybu",
    "fullName": "Duygu Kayar Çalılı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Duygu%20Kayar%20%C3%87al%C4%B1l%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ebru-ugras-aybu",
    "fullName": "Ebru Uğraş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ebru%20U%C4%9Fra%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ebru-unsal-aybu",
    "fullName": "Ebru Ünsal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ebru%20%C3%9Cnsal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ege-varli-arugaslan-aybu",
    "fullName": "Ege Varlı Aruğaslan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ege%20Varl%C4%B1%20Aru%C4%9Faslan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "elif-eken-aybu",
    "fullName": "Elif Eken",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elif%20Eken%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "elif-nur-cetin-aybu",
    "fullName": "Elif Nur Çetin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elif%20Nur%20%C3%87etin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "elif-uzun-ata-aybu",
    "fullName": "Elif Uzun Ata",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Elif%20Uzun%20Ata%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "elif-ozkan-aybu",
    "fullName": "Elif Özkan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elif%20%C3%96zkan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "elcin-islek-secen-aybu",
    "fullName": "Elçin İşlek Seçen",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20El%C3%A7in%20%C4%B0%C5%9Flek%20Se%C3%A7en%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emine-akcay-aybu",
    "fullName": "Emine Akçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emine%20Ak%C3%A7ay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emine-alp-mese-aybu",
    "fullName": "Emine Alp Meşe",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emine%20Alp%20Me%C5%9Fe%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emine-arguder-aybu",
    "fullName": "Emine Argüder",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emine%20Arg%C3%BCder%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emrah-okulu-aybu",
    "fullName": "Emrah Okulu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emrah%20Okulu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emrah-uguz-aybu",
    "fullName": "Emrah Uğuz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emrah%20U%C4%9Fuz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emrah-senel-aybu",
    "fullName": "Emrah Şenel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emrah%20%C5%9Eenel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "emre-erdem-tas-aybu",
    "fullName": "Emre Erdem Taş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emre%20Erdem%20Ta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "enejd-veizi-aybu",
    "fullName": "Enejd Veizi",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Enejd%20Veizi%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "enes-sari-aybu",
    "fullName": "Enes Sarı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Enes%20Sar%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "enes-uluyardimci-aybu",
    "fullName": "Enes Uluyardımcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Enes%20Uluyard%C4%B1mc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ercan-bal-aybu",
    "fullName": "Ercan Bal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ercan%20Bal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "erdem-koc-aybu",
    "fullName": "Erdem Koç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Erdem%20Ko%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "erhan-simsek-aybu",
    "fullName": "Erhan Şimşek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Erhan%20%C5%9Eim%C5%9Fek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "erol-sener-aybu",
    "fullName": "Erol Şener",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Erol%20%C5%9Eener%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esen-yilmaz-aybu",
    "fullName": "Esen Yılmaz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esen%20Y%C4%B1lmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esma-sarikaya-aybu",
    "fullName": "Esma Sarıkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Esma%20Sar%C4%B1kaya%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esra-demir-unal-aybu",
    "fullName": "Esra Demir Ünal",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Esra%20Demir%20%C3%9Cnal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esra-kabadayi-sahin-aybu",
    "fullName": "Esra Kabadayı Şahin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Esra%20Kabaday%C4%B1%20%C5%9Eahin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esra-kiratli-nalbant-aybu",
    "fullName": "Esra Kıratlı Nalbant",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Esra%20K%C4%B1ratl%C4%B1%20Nalbant%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "esra-ozyurek-aybu",
    "fullName": "Esra Özyürek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esra%20%C3%96zy%C3%BCrek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "eyup-horasanli-aybu",
    "fullName": "Eyüp Horasanlı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ey%C3%BCp%20Horasanl%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "eyup-yalcinkaya-aybu",
    "fullName": "Eyüp Yalçınkaya",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ey%C3%BCp%20Yal%C3%A7%C4%B1nkaya%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ezgi-aydin-ozaslan-aybu",
    "fullName": "Ezgi Aydın Özaslan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ezgi%20Ayd%C4%B1n%20%C3%96zaslan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ezgisu-kilic-aybu",
    "fullName": "Ezgisu Kılıç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ezgisu%20K%C4%B1l%C4%B1%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatih-akdemir-aybu",
    "fullName": "Fatih Akdemir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Fatih%20Akdemir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatih-gurbuz-aybu",
    "fullName": "Fatih Gürbüz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fatih%20G%C3%BCrb%C3%BCz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-burcin-kurtipek-aybu",
    "fullName": "Fatma Burçin Kurtipek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Fatma%20Bur%C3%A7in%20Kurtipek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-ebru-akin-aybu",
    "fullName": "Fatma Ebru Akın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fatma%20Ebru%20Ak%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-eser-aybu",
    "fullName": "Fatma Eser",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Fatma%20Eser%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-fidan-aybu",
    "fullName": "Fatma Fidan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fatma%20Fidan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-kavak-akelma-aybu",
    "fullName": "Fatma Kavak Akelma",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fatma%20Kavak%20Akelma%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-neslihan-cuhaci-seyrek-aybu",
    "fullName": "Fatma Neslihan Çuhacı Seyrek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fatma%20Neslihan%20%C3%87uhac%C4%B1%20Seyrek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-nur-ergin-akis-aybu",
    "fullName": "Fatma Nur Ergin Akis",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Fatma%20Nur%20Ergin%20Akis%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fatma-nur-yavuz-aybu",
    "fullName": "Fatma Nur Yavuz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Fatma%20Nur%20Yavuz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "fevzi-altuntas-aybu",
    "fullName": "Fevzi Altuntaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fevzi%20Altunta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gamze-hayran-turmus-aybu",
    "fullName": "Gamze Hayran Turmuş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Gamze%20Hayran%20Turmu%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gonca-altinisik-inan-aybu",
    "fullName": "Gonca Altınışık İnan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Gonca%20Alt%C4%B1n%C4%B1%C5%9F%C4%B1k%20%C4%B0nan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gonca-oztas-aybu",
    "fullName": "Gonca Öztaş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Gonca%20%C3%96zta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "goknur-kalkan-aybu",
    "fullName": "Göknur Kalkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%B6knur%20Kalkan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gokcen-ilcioglu-ekici-aybu",
    "fullName": "Gökçen İlçioğlu Ekici",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20G%C3%B6k%C3%A7en%20%C4%B0l%C3%A7io%C4%9Flu%20Ekici%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gonul-buyukyilmaz-aybu",
    "fullName": "Gönül Büyükyılmaz",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20G%C3%B6n%C3%BCl%20B%C3%BCy%C3%BCky%C4%B1lmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gonul-vural-aybu",
    "fullName": "Gönül Vural",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%B6n%C3%BCl%20Vural%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gorkem-karakas-ugurlu-aybu",
    "fullName": "Görkem Karakaş Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%B6rkem%20Karaka%C5%9F%20U%C4%9Furlu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gul-pamukcu-gunaydin-aybu",
    "fullName": "Gül Pamukçu Günaydın",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20G%C3%BCl%20Pamuk%C3%A7u%20G%C3%BCnayd%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulhan-kurtoglu-celik-aybu",
    "fullName": "Gülhan Kurtoğlu Çelik",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BClhan%20Kurto%C4%9Flu%20%C3%87elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulsum-iclal-bayhan-aybu",
    "fullName": "Gülsüm İclal Bayhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCls%C3%BCm%20%C4%B0clal%20Bayhan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulsum-kubra-bahadir-aybu",
    "fullName": "Gülsüm Kübra Bahadır",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20G%C3%BCls%C3%BCm%20K%C3%BCbra%20Bahad%C4%B1r%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulsum-ozet-aybu",
    "fullName": "Gülsüm Özet",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCls%C3%BCm%20%C3%96zet%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulten-kiyak-aybu",
    "fullName": "Gülten Kıyak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BClten%20K%C4%B1yak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulcin-cetin-aybu",
    "fullName": "Gülçin Çetin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20G%C3%BCl%C3%A7in%20%C3%87etin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gulumser-aydin-aybu",
    "fullName": "Gülümser Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCl%C3%BCmser%20Ayd%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "gurel-nessar-aybu",
    "fullName": "Gürel Neşşar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCrel%20Ne%C5%9F%C5%9Far%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "guzin-cinel-aybu",
    "fullName": "Güzin Cinel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCzin%20Cinel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "giyas-ayberk-aybu",
    "fullName": "Gıyas Ayberk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C4%B1yas%20Ayberk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "haci-ahmet-kasapkara-aybu",
    "fullName": "Hacı Ahmet Kasapkara",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hac%C4%B1%20Ahmet%20Kasapkara%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "haci-huseyin-dere-aybu",
    "fullName": "Hacı Hüseyin Dere",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hac%C4%B1%20H%C3%BCseyin%20Dere%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "halil-arslan-aybu",
    "fullName": "Halil Arslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Halil%20Arslan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "halil-kul-aybu",
    "fullName": "Halil Kul",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Halil%20Kul%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "halise-akca-aybu",
    "fullName": "Halise Akça",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Halise%20Ak%C3%A7a%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hamza-kilinc-aybu",
    "fullName": "Hamza Kılınç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hamza%20K%C4%B1l%C4%B1n%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "handan-gulec-aybu",
    "fullName": "Handan Güleç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Handan%20G%C3%BCle%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hande-selvi-oztorun-aybu",
    "fullName": "Hande Selvi Öztorun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Hande%20Selvi%20%C3%96ztorun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hanife-tuba-akcam-aybu",
    "fullName": "Hanife Tuba Akçam",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Hanife%20Tuba%20Ak%C3%A7am%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "harun-demirci-aybu",
    "fullName": "Harun Demirci",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Harun%20Demirci%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hasan-ceylan-aybu",
    "fullName": "Hasan Ceylan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hasan%20Ceylan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hasan-demez-aybu",
    "fullName": "Hasan Demez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hasan%20Demez%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hasan-firtinaoglu-aybu",
    "fullName": "Hasan Fırtınaoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hasan%20F%C4%B1rt%C4%B1nao%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hasanali-durmaz-aybu",
    "fullName": "Hasanali Durmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Hasanali%20Durmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hatice-bodur-aybu",
    "fullName": "Hatice Bodur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hatice%20Bodur%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hatice-kilic-aybu",
    "fullName": "Hatice Kılıç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hatice%20K%C4%B1l%C4%B1%C3%A7%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hatice-rahmet-guner-aybu",
    "fullName": "Hatice Rahmet Güner",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hatice%20Rahmet%20G%C3%BCner%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "havva-beyaz-aybu",
    "fullName": "Havva Beyaz",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Havva%20Beyaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "havva-sahin-kavakli-aybu",
    "fullName": "Havva Şahin Kavaklı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Havva%20%C5%9Eahin%20Kavakl%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hayriye-ozlem-dursun-aybu",
    "fullName": "Hayriye Özlem Dursun",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hayriye%20%C3%96zlem%20Dursun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hazal-karaca-aybu",
    "fullName": "Hazal Karaca",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hazal%20Karaca%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hesna-bektas-aybu",
    "fullName": "Hesna Bektaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hesna%20Bekta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hikmet-naz-civelek-aybu",
    "fullName": "Hikmet Naz Civelek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hikmet%20Naz%20Civelek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hilal-vurgan-aybu",
    "fullName": "Hilal Vurgan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hilal%20Vurgan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hilmi-ugur-aybu",
    "fullName": "Hilmi Uğur",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hilmi%20U%C4%9Fur%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "hulya-seker-yikmaz-aybu",
    "fullName": "Hülya Şeker Yıkmaz",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20H%C3%BClya%20%C5%9Eeker%20Y%C4%B1kmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "huseyin-aytop-aybu",
    "fullName": "Hüseyin Aytop",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20H%C3%BCseyin%20Aytop%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "huseyin-furkan-ozturk-aybu",
    "fullName": "Hüseyin Furkan Öztürk",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20H%C3%BCseyin%20Furkan%20%C3%96zt%C3%BCrk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "huseyin-kahraman-aybu",
    "fullName": "Hüseyin Kahraman",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20H%C3%BCseyin%20Kahraman%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "huseyin-cetin-aybu",
    "fullName": "Hüseyin Çetin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20H%C3%BCseyin%20%C3%87etin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "husniye-baser-aybu",
    "fullName": "Hüsniye Başer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BCsniye%20Ba%C5%9Fer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "isil-demir-aybu",
    "fullName": "Işıl Demir",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20I%C5%9F%C4%B1l%20Demir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ibrahim-ilker-cetin-aybu",
    "fullName": "İbrahim İlker Çetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0brahim%20%C4%B0lker%20%C3%87etin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ilhami-yuksel-aybu",
    "fullName": "İlhami Yüksel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0lhami%20Y%C3%BCksel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ilknur-aytekin-celik-aybu",
    "fullName": "İlknur Aytekin Çelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0lknur%20Aytekin%20%C3%87elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "imdat-dilek-aybu",
    "fullName": "İmdat Dilek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0mdat%20Dilek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "imge-su-kucuk-aybu",
    "fullName": "İmge Su Küçük",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0mge%20Su%20K%C3%BC%C3%A7%C3%BCk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "imran-hasanoglu-aybu",
    "fullName": "İmran Hasanoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0mran%20Hasano%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ipek-pinar-aral-aybu",
    "fullName": "İpek Pınar Aral",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C4%B0pek%20P%C4%B1nar%20Aral%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "irem-oktem-aybu",
    "fullName": "İrem Öktem",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0rem%20%C3%96ktem%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "irfan-yildiz-aybu",
    "fullName": "İrfan Yıldız",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0rfan%20Y%C4%B1ld%C4%B1z%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "isa-civelek-aybu",
    "fullName": "İsa Civelek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C4%B0sa%20Civelek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ismail-dogan-aybu",
    "fullName": "İsmail Doğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0smail%20Do%C4%9Fan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "izzet-bingol-aybu",
    "fullName": "İzzet Bingöl",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0zzet%20Bing%C3%B6l%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kadir-sinasi-bulut-aybu",
    "fullName": "Kadir Şinasi Bulut",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Kadir%20%C5%9Einasi%20Bulut%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kadriye-yuceturk-tan-aybu",
    "fullName": "Kadriye Yücetürk Tan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Kadriye%20Y%C3%BCcet%C3%BCrk%20Tan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kamile-silay-aybu",
    "fullName": "Kamile Sılay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kamile%20S%C4%B1lay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kamuran-kalkan-aybu",
    "fullName": "Kamuran Kalkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kamuran%20Kalkan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kardelen-akbal-bagci-aybu",
    "fullName": "Kardelen Akbal Bağcı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Kardelen%20Akbal%20Ba%C4%9Fc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kazim-bozdemir-aybu",
    "fullName": "Kazım Bozdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kaz%C4%B1m%20Bozdemir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kemal-ener-aybu",
    "fullName": "Kemal Ener",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kemal%20Ener%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kemal-esref-erdogan-aybu",
    "fullName": "Kemal Eşref Erdoğan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Kemal%20E%C5%9Fref%20Erdo%C4%9Fan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kevser-orhan-aybu",
    "fullName": "Kevser Orhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Kevser%20Orhan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "kubilay-inan-aybu",
    "fullName": "Kubilay İnan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Kubilay%20%C4%B0nan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "leman-gunbey-karabekmez-aybu",
    "fullName": "Leman Günbey Karabekmez",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Leman%20G%C3%BCnbey%20Karabekmez%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "levent-ozturk-aybu",
    "fullName": "Levent Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Levent%20%C3%96zt%C3%BCrk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mahmut-kupeli-aybu",
    "fullName": "Mahmut Küpeli",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mahmut%20K%C3%BCpeli%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mahmut-ugurlu-aybu",
    "fullName": "Mahmut Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mahmut%20U%C4%9Furlu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mediha-elifnaz-oztekin-aybu",
    "fullName": "Mediha Elifnaz Öztekin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mediha%20Elifnaz%20%C3%96ztekin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ali-babademez-aybu",
    "fullName": "Mehmet Ali Babademez",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Ali%20Babademez%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ali-nahit-sendur-aybu",
    "fullName": "Mehmet Ali Nahit Şendur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Ali%20Nahit%20%C5%9Eendur%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-boyraz-aybu",
    "fullName": "Mehmet Boyraz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Boyraz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-erdogan-aybu",
    "fullName": "Mehmet Erdoğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Erdo%C4%9Fan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ergin-aybu",
    "fullName": "Mehmet Ergin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Ergin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-fatih-ceylan-aybu",
    "fullName": "Mehmet Fatih Ceylan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Fatih%20Ceylan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-gumus-aybu",
    "fullName": "Mehmet Gümüş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20G%C3%BCm%C3%BC%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ilker-yon-aybu",
    "fullName": "Mehmet İlker Yön",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20%C4%B0lker%20Y%C3%B6n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ismail-safa-kapicioglu-aybu",
    "fullName": "Mehmet İsmail Safa Kapıcıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20%C4%B0smail%20Safa%20Kap%C4%B1c%C4%B1o%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-murat-yigitbasi-aybu",
    "fullName": "Mehmet Murat Yiğitbaşı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20Murat%20Yi%C4%9Fitba%C5%9F%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-said-gozel-aybu",
    "fullName": "Mehmet Said Gözel",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mehmet%20Said%20G%C3%B6zel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-sonmez-aybu",
    "fullName": "Mehmet Sönmez",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20S%C3%B6nmez%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ziya-tavuskerli-aybu",
    "fullName": "Mehmet Ziya Tavuskerli",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mehmet%20Ziya%20Tavuskerli%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-ozgur-ozates-aybu",
    "fullName": "Mehmet Özgür Özateş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20%C3%96zg%C3%BCr%20%C3%96zate%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehmet-sahap-aybu",
    "fullName": "Mehmet Şahap",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20%C5%9Eahap%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mehtap-balaban-aybu",
    "fullName": "Mehtap Balaban",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehtap%20Balaban%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "melih-camci-aybu",
    "fullName": "Melih Çamcı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Melih%20%C3%87amc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "meliha-ceren-erkul-naghizade-aybu",
    "fullName": "Meliha Ceren Erkul Naghızade",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Meliha%20Ceren%20Erkul%20Nagh%C4%B1zade%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "merve-bozer-aybu",
    "fullName": "Merve Bozer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Merve%20Bozer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "merve-ceyda-kaymak-aybu",
    "fullName": "Merve Ceyda Kaymak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Merve%20Ceyda%20Kaymak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "merve-eroglu-aybu",
    "fullName": "Merve Eroğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Merve%20Ero%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "merve-cicek-aybu",
    "fullName": "Merve Çiçek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Merve%20%C3%87i%C3%A7ek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "merve-ozturk-agaoglu-aybu",
    "fullName": "Merve Öztürk Ağaoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Merve%20%C3%96zt%C3%BCrk%20A%C4%9Fao%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "meryem-cosgun-aybu",
    "fullName": "Meryem Coşgun",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Meryem%20Co%C5%9Fgun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "meryem-erat-nergiz-aybu",
    "fullName": "Meryem Erat Nergiz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Meryem%20Erat%20Nergiz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mesut-kocak-aybu",
    "fullName": "Mesut Koçak",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mesut%20Ko%C3%A7ak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mete-hidiroglu-aybu",
    "fullName": "Mete Hıdıroğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mete%20H%C4%B1d%C4%B1ro%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "metin-aydin-aybu",
    "fullName": "Metin Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Metin%20Ayd%C4%B1n%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "metin-dogan-aybu",
    "fullName": "Metin Doğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Metin%20Do%C4%9Fan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "metin-yigit-aybu",
    "fullName": "Metin Yiğit",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Metin%20Yi%C4%9Fit%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mihriban-inozu-aybu",
    "fullName": "Mihriban İnözü",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mihriban%20%C4%B0n%C3%B6z%C3%BC%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mine-sebnem-karakan-aybu",
    "fullName": "Mine Şebnem Karakan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mine%20%C5%9Eebnem%20Karakan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "muhammed-bulent-akinci-aybu",
    "fullName": "Muhammed Bülent Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Muhammed%20B%C3%BClent%20Ak%C4%B1nc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "muhammet-fethi-saglam-aybu",
    "fullName": "Muhammet Fethi Sağlam",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Muhammet%20Fethi%20Sa%C4%9Flam%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "murat-akcay-aybu",
    "fullName": "Murat Akçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Murat%20Ak%C3%A7ay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "murat-canyigit-aybu",
    "fullName": "Murat Canyiğit",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Murat%20Canyi%C4%9Fit%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "murat-ersoz-aybu",
    "fullName": "Murat Ersöz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Murat%20Ers%C3%B6z%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "murat-yanik-aybu",
    "fullName": "Murat Yanık",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Murat%20Yan%C4%B1k%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "musab-ali-kutluhan-aybu",
    "fullName": "Musab Ali Kutluhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Musab%20Ali%20Kutluhan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mustafa-donmez-aybu",
    "fullName": "Mustafa Dönmez",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mustafa%20D%C3%B6nmez%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mustafa-hamidullah-turkkani-aybu",
    "fullName": "Mustafa Hamidullah Türkkanı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mustafa%20Hamidullah%20T%C3%BCrkkan%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mustafa-metehan-demirel-aybu",
    "fullName": "Mustafa Metehan Demirel",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mustafa%20Metehan%20Demirel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mustafa-tahtaci-aybu",
    "fullName": "Mustafa Tahtacı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20Tahtac%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mustafa-ugurlu-aybu",
    "fullName": "Mustafa Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20U%C4%9Furlu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mucella-arikan-yorgun-aybu",
    "fullName": "Mücella Arıkan Yorgun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCcella%20Ar%C4%B1kan%20Yorgun%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "muge-ayhan-aybu",
    "fullName": "Müge Ayhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20M%C3%BCge%20Ayhan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "muge-yuksel-guner-aybu",
    "fullName": "Müge Yüksel Güner",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20M%C3%BCge%20Y%C3%BCksel%20G%C3%BCner%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "mujdem-nur-azili-aybu",
    "fullName": "Müjdem Nur Azılı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCjdem%20Nur%20Az%C4%B1l%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "munevver-yildiz-aybu",
    "fullName": "Münevver Yıldız",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20M%C3%BCnevver%20Y%C4%B1ld%C4%B1z%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "munir-demirci-aybu",
    "fullName": "Münir Demirci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCnir%20Demirci%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "muyesser-aras-aybu",
    "fullName": "Müyesser Aras",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCyesser%20Aras%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "naciye-semnur-buyukasik-aybu",
    "fullName": "Naciye Şemnur Büyükaşık",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Naciye%20%C5%9Eemnur%20B%C3%BCy%C3%BCka%C5%9F%C4%B1k%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nagihan-ugurlu-aybu",
    "fullName": "Nagihan Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nagihan%20U%C4%9Furlu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nebahat-sezer-aybu",
    "fullName": "Nebahat Sezer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nebahat%20Sezer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nejat-brohi-aybu",
    "fullName": "Nejat Brohi",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nejat%20Brohi%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "neslihan-dilruba-koseoglu-aybu",
    "fullName": "Neslihan Dilrüba Köseoğlu",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Neslihan%20Dilr%C3%BCba%20K%C3%B6seo%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nesrin-ceylan-aybu",
    "fullName": "Nesrin Ceylan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nesrin%20Ceylan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nihal-akar-aybu",
    "fullName": "Nihal Akar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nihal%20Akar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nihal-demirel-aybu",
    "fullName": "Nihal Demirel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nihal%20Demirel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nilgun-altuntas-aybu",
    "fullName": "Nilgün Altuntaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nilg%C3%BCn%20Altunta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nilufer-yesilirmak-aybu",
    "fullName": "Nilüfer Yeşilırmak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nil%C3%BCfer%20Ye%C5%9Fil%C4%B1rmak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nisa-nur-akcagoz-tokpunar-aybu",
    "fullName": "Nisa Nur Akcagöz Tokpunar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nisa%20Nur%20Akcag%C3%B6z%20Tokpunar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nuh-atabey-aybu",
    "fullName": "Nuh Atabey",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nuh%20Atabey%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nuray-yilmaz-cakmak-aybu",
    "fullName": "Nuray Yılmaz Çakmak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Nuray%20Y%C4%B1lmaz%20%C3%87akmak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nurdan-cay-aybu",
    "fullName": "Nurdan Çay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nurdan%20%C3%87ay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nurettin-karaoglanoglu-aybu",
    "fullName": "Nurettin Karaoğlanoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nurettin%20Karao%C4%9Flano%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "nurettin-solak-aybu",
    "fullName": "Nurettin Solak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nurettin%20Solak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "oktay-gurcan-aybu",
    "fullName": "Oktay Gürcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Oktay%20G%C3%BCrcan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "orcan-burunkaya-aybu",
    "fullName": "Orcan Burunkaya",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Orcan%20Burunkaya%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "orhan-kucuksahin-aybu",
    "fullName": "Orhan Küçükşahin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Orhan%20K%C3%BC%C3%A7%C3%BCk%C5%9Fahin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "osman-ersoy-aybu",
    "fullName": "Osman Ersoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Osman%20Ersoy%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "osman-turkmen-aybu",
    "fullName": "Osman Türkmen",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Osman%20T%C3%BCrkmen%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "osman-uysal-aybu",
    "fullName": "Osman Uysal",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Osman%20Uysal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "oya-topaloglu-aybu",
    "fullName": "Oya Topaloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Oya%20Topalo%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "oguz-peker-aybu",
    "fullName": "Oğuz Peker",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20O%C4%9Fuz%20Peker%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "pelin-zeynep-bekin-sarikaya-aybu",
    "fullName": "Pelin Zeynep Bekin Sarıkaya",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Pelin%20Zeynep%20Bekin%20Sar%C4%B1kaya%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "pelin-celik-aybu",
    "fullName": "Pelin Çelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Pelin%20%C3%87elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "pelin-unsal-aybu",
    "fullName": "Pelin Ünsal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Pelin%20%C3%9Cnsal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "pinar-nalcacioglu-memis-aybu",
    "fullName": "Pınar Nalçacıoğlu Memiş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20P%C4%B1nar%20Nal%C3%A7ac%C4%B1o%C4%9Flu%20Memi%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "rasim-eren-cankurtaran-aybu",
    "fullName": "Rasim Eren Cankurtaran",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Rasim%20Eren%20Cankurtaran%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "raziye-toksoz-aybu",
    "fullName": "Raziye Toksöz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Raziye%20Toks%C3%B6z%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "reyhan-can-kalfa-aybu",
    "fullName": "Reyhan Can Kalfa",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Reyhan%20Can%20Kalfa%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "reyhan-ersoy-aybu",
    "fullName": "Reyhan Ersoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Reyhan%20Ersoy%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "rumeysa-reyhan-cander-koz-aybu",
    "fullName": "Rümeysa Reyhan Cander Koz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20R%C3%BCmeysa%20Reyhan%20Cander%20Koz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "safiye-kubra-cetindag-karatli-aybu",
    "fullName": "Safiye Kübra Çetindağ Karatlı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Safiye%20K%C3%BCbra%20%C3%87etinda%C4%9F%20Karatl%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "salih-baser-aybu",
    "fullName": "Salih Başer",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Salih%20Ba%C5%9Fer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "salih-benzer-aybu",
    "fullName": "Salih Benzer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Salih%20Benzer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "saliha-kanik-yuksek-aybu",
    "fullName": "Saliha Kanık Yüksek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Saliha%20Kan%C4%B1k%20Y%C3%BCksek%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "saliha-senel-aybu",
    "fullName": "Saliha Şenel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Saliha%20%C5%9Eenel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sara-erol-aybu",
    "fullName": "Sara Erol",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sara%20Erol%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sare-gulfem-ozlu-aybu",
    "fullName": "Sare Gülfem Özlü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sare%20G%C3%BClfem%20%C3%96zl%C3%BC%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "seda-sirin-aybu",
    "fullName": "Seda Şirin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Seda%20%C5%9Eirin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sedat-gulay-aybu",
    "fullName": "Sedat Gülay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sedat%20G%C3%BClay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "selami-akkus-aybu",
    "fullName": "Selami Akkuş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Selami%20Akku%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "selim-semih-coskuner-aybu",
    "fullName": "Selim Semih Coşkuner",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Selim%20Semih%20Co%C5%9Fkuner%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "selma-tural-hesapcioglu-aybu",
    "fullName": "Selma Tural Hesapçıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Selma%20Tural%20Hesap%C3%A7%C4%B1o%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sema-akinci-aybu",
    "fullName": "Sema Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sema%20Ak%C4%B1nc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sema-yuzbasioglu-aybu",
    "fullName": "Sema Yüzbaşıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Sema%20Y%C3%BCzba%C5%9F%C4%B1o%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "semih-baskan-aybu",
    "fullName": "Semih Başkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Semih%20Ba%C5%9Fkan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serdal-bastug-aybu",
    "fullName": "Serdal Baştuğ",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Serdal%20Ba%C5%9Ftu%C4%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serdar-barakli-aybu",
    "fullName": "Serdar Baraklı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Serdar%20Barakl%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serdar-ensari-aybu",
    "fullName": "Serdar Ensari",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Serdar%20Ensari%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serdar-suleyman-can-aybu",
    "fullName": "Serdar Süleyman Can",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Serdar%20S%C3%BCleyman%20Can%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "seren-karaciger-aybu",
    "fullName": "Seren Karaciğer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Seren%20Karaci%C4%9Fer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serhat-emeksiz-aybu",
    "fullName": "Serhat Emeksiz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Serhat%20Emeksiz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serkan-serifler-aybu",
    "fullName": "Serkan Şerifler",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Serkan%20%C5%9Eerifler%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serpil-elmalipinar-aybu",
    "fullName": "Serpil Elmalıpınar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Serpil%20Elmal%C4%B1p%C4%B1nar%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "seval-izdes-aybu",
    "fullName": "Seval İzdeş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Seval%20%C4%B0zde%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sevda-dabak-aybu",
    "fullName": "Sevda Dabak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sevda%20Dabak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sevdenur-bacanak-aybu",
    "fullName": "Sevdenur Bacanak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sevdenur%20Bacanak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sevinc-turkdemir-aybu",
    "fullName": "Sevinç Türkdemir",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sevin%C3%A7%20T%C3%BCrkdemir%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sezin-unlu-acikel-aybu",
    "fullName": "Sezin Ünlü Açıkel",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Sezin%20%C3%9Cnl%C3%BC%20A%C3%A7%C4%B1kel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sinem-karatepe-celik-aybu",
    "fullName": "Sinem Karatepe Çelik",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sinem%20Karatepe%20%C3%87elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "suheyla-aytac-arslan-aybu",
    "fullName": "Suheyla Aytaç Arslan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Suheyla%20Ayta%C3%A7%20Arslan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "suleyman-arif-bostanci-aybu",
    "fullName": "Süleyman Arif Bostancı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20S%C3%BCleyman%20Arif%20Bostanc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sumeyye-fatma-ozer-aybu",
    "fullName": "Sümeyye Fatma Özer",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20S%C3%BCmeyye%20Fatma%20%C3%96zer%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "tahir-durmaz-aybu",
    "fullName": "Tahir Durmaz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Tahir%20Durmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "tahir-kurtulus-yoldas-aybu",
    "fullName": "Tahir Kurtuluş Yoldaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Tahir%20Kurtulu%C5%9F%20Yolda%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "telat-keles-aybu",
    "fullName": "Telat Keleş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Telat%20Kele%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "turan-bayhan-aybu",
    "fullName": "Turan Bayhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Turan%20Bayhan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "turan-buzgan-aybu",
    "fullName": "Turan Buzgan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Turan%20Buzgan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "umut-selda-bayrakci-aybu",
    "fullName": "Umut Selda Bayrakci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Umut%20Selda%20Bayrakci%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "utku-pamuk-aybu",
    "fullName": "Utku Pamuk",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Utku%20Pamuk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "vahit-melikzade-aybu",
    "fullName": "Vahit Melikzade",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Vahit%20Melikzade%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "vusala-mukhtarova-aybu",
    "fullName": "Vusala Mukhtarova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Vusala%20Mukhtarova%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yasemin-aydogan-unsal-aybu",
    "fullName": "Yasemin Aydoğan Ünsal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Yasemin%20Aydo%C4%9Fan%20%C3%9Cnsal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yasemin-agar-aybu",
    "fullName": "Yasemin Ağar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yasemin%20A%C4%9Far%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yasin-toklu-aybu",
    "fullName": "Yasin Toklu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Yasin%20Toklu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yavuz-selim-silay-aybu",
    "fullName": "Yavuz Selim Sılay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yavuz%20Selim%20S%C4%B1lay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yelda-yildiz-tasci-aybu",
    "fullName": "Yelda Yıldız Taşcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Yelda%20Y%C4%B1ld%C4%B1z%20Ta%C5%9Fc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yeter-deniz-polat-aybu",
    "fullName": "Yeter Deniz Polat",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yeter%20Deniz%20Polat%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yusuf-yilmaz-aybu",
    "fullName": "Yusuf Yılmaz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yusuf%20Y%C4%B1lmaz%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "yilmaz-tezcan-aybu",
    "fullName": "Yılmaz Tezcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Y%C4%B1lmaz%20Tezcan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zahide-ekici-tekin-aybu",
    "fullName": "Zahide Ekici Tekin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Zahide%20Ekici%20Tekin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zehra-golbasi-aybu",
    "fullName": "Zehra Gölbaşı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Zehra%20G%C3%B6lba%C5%9F%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zehra-guven-cetin-aybu",
    "fullName": "Zehra Güven Çetin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Zehra%20G%C3%BCven%20%C3%87etin%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zehra-kurdoglu-aybu",
    "fullName": "Zehra Kurdoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Zehra%20Kurdo%C4%9Flu%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zeliha-kocak-tufan-aybu",
    "fullName": "Zeliha Koçak Tufan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Zeliha%20Ko%C3%A7ak%20Tufan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zeynep-inci-cakmak-aybu",
    "fullName": "Zeynep İnci Çakmak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20%C4%B0nci%20%C3%87akmak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "zeynep-kasapbasi-aybu",
    "fullName": "Zeynep Kasapbaşı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20Kasapba%C5%9F%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "cagdas-yildirim-aybu",
    "fullName": "Çağdaş Yıldırım",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C3%87a%C4%9Fda%C5%9F%20Y%C4%B1ld%C4%B1r%C4%B1m%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "omer-parlak-aybu",
    "fullName": "Ömer Parlak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%96mer%20Parlak%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "onder-kayigil-aybu",
    "fullName": "Önder Kayıgil",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96nder%20Kay%C4%B1gil%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "oyku-tayfur-yurekli-aybu",
    "fullName": "Öykü Tayfur Yürekli",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96yk%C3%BC%20Tayfur%20Y%C3%BCrekli%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ozge-saritas-aybu",
    "fullName": "Özge Sarıtaş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C3%96zge%20Sar%C4%B1ta%C5%9F%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ozlem-unal-aybu",
    "fullName": "Özlem Ünal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%96zlem%20%C3%9Cnal%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "ummugulsum-zengintepe-aybu",
    "fullName": "Ümmügülsüm Zengintepe",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%9Cmm%C3%BCg%C3%BCls%C3%BCm%20Zengintepe%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "umran-ozden-sertcelik-aybu",
    "fullName": "Ümran Özden Sertçelik",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C3%9Cmran%20%C3%96zden%20Sert%C3%A7elik%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sadan-soyyigit-aybu",
    "fullName": "Şadan Soyyiğit",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eadan%20Soyyi%C4%9Fit%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sadiye-gumusyayla-aybu",
    "fullName": "Şadiye Gümüşyayla",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eadiye%20G%C3%BCm%C3%BC%C5%9Fyayla%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "samil-hizli-aybu",
    "fullName": "Şamil Hızlı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eamil%20H%C4%B1zl%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sebnem-yucel-aybu",
    "fullName": "Şebnem Yücel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C5%9Eebnem%20Y%C3%BCcel%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sefika-burcak-polat-aybu",
    "fullName": "Şefika Burçak Polat",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eefika%20Bur%C3%A7ak%20Polat%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "semsi-mustafa-aksoy-aybu",
    "fullName": "Şemsi Mustafa Aksoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eemsi%20Mustafa%20Aksoy%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "serife-nur-altay-aybu",
    "fullName": "Şerife Nur Altay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eerife%20Nur%20Altay%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "servan-gokhan-aybu",
    "fullName": "Şervan Gökhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eervan%20G%C3%B6khan%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "seyma-harmanci-aybu",
    "fullName": "Şeyma Harmancı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eeyma%20Harmanc%C4%B1%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sule-mine-bakanay-ozturk-aybu",
    "fullName": "Şule Mine Bakanay Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eule%20Mine%20Bakanay%20%C3%96zt%C3%BCrk%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sulenur-aynagoz-aybu",
    "fullName": "Şulenur Aynagöz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eulenur%20Aynag%C3%B6z%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  },
  {
    "slug": "sukran-erten-aybu",
    "fullName": "Şükran Erten",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yildirim-beyazit-universitesi-tip-fakultesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9E%C3%BCkran%20Erten%20Ankara%20Y%C4%B1ld%C4%B1r%C4%B1m%20Beyaz%C4%B1t%20%C3%9Cniversitesi%20T%C4%B1p%20Fak%C3%BCltesi"
      }
    ]
  }
];
