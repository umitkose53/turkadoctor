import type { DoctorSummary } from "./types";

/**
 * Bezmialem Vakıf Üniversitesi Tıp Fakültesi akademik / klinik hekim kadrosu
 * (İstanbul/Fatih).
 * Kaynak: avesis.bezmialem.edu.tr (AVES — Akademik Veri Yönetim Sistemi) —
 * kurum tarafından alenileştirilmiş akademik kadro verisi.
 * KVKK m.5/2-d + m.28/1-ç istisnası kapsamında yeniden indeksleme.
 * Yalnız aktif (silinmemiş) Tıp Fakültesi kadrosu; branş eşlemesi
 * specialties.ts taksonomisine göre yapılır. Taksonomi dışı temel tıp / laboratuvar
 * dalları (tıbbi patoloji, tıbbi biyokimya, fizyoloji, anatomi, histoloji,
 * tıbbi mikrobiyoloji/biyoloji/genetik, nükleer tıp, biyofizik, halk sağlığı,
 * adli tıp, tıp tarihi, farmakoloji vb.) hariç tutulmuştur.
 */
export const doctorsBezmialem: DoctorSummary[] = [
  {
    "slug": "abdalrahman-abdalkareem-r-abdalrahman-r-bezmialem",
    "fullName": "Abdalrahman Abdalkareem R Abdalrahman R",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Abdalrahman%20Abdalkareem%20R%20Abdalrahman%20R%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdou-mannani-nadei-bezmialem",
    "fullName": "Abdou Mannanı Nadeı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Abdou%20Mannan%C4%B1%20Nade%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdulbaki-yusa-balikci-bezmialem",
    "fullName": "Abdulbaki Yuşa Balıkçı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Abdulbaki%20Yu%C5%9Fa%20Bal%C4%B1k%C3%A7%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdullah-salih-unal-bezmialem",
    "fullName": "Abdullah Salih Ünal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Abdullah%20Salih%20%C3%9Cnal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdullah-sarioglu-bezmialem",
    "fullName": "Abdullah Sarıoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Abdullah%20Sar%C4%B1o%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdurrahim-emirhan-ucuncu-bezmialem",
    "fullName": "Abdurrahim Emirhan Üçüncü",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Abdurrahim%20Emirhan%20%C3%9C%C3%A7%C3%BCnc%C3%BC%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdusselim-adil-peker-bezmialem",
    "fullName": "Abdusselim Adil Peker",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20Abdusselim%20Adil%20Peker%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "abdulkadir-eren-bezmialem",
    "fullName": "Abdülkadir Eren",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Abd%C3%BClkadir%20Eren%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aclan-ozder-bezmialem",
    "fullName": "Aclan Özder",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Aclan%20%C3%96zder%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "adem-burak-cekic-bezmialem",
    "fullName": "Adem Burak Çekiç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Adem%20Burak%20%C3%87eki%C3%A7%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "adem-comert-bezmialem",
    "fullName": "Adem Cömert",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Adem%20C%C3%B6mert%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmed-murati-bezmialem",
    "fullName": "Ahmed Muratı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmed%20Murat%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-adil-camli-bezmialem",
    "fullName": "Ahmet Adil Çamlı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ahmet%20Adil%20%C3%87aml%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-akcay-bezmialem",
    "fullName": "Ahmet Akçay",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ahmet%20Ak%C3%A7ay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-bacaksiz-bezmialem",
    "fullName": "Ahmet Bacaksız",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ahmet%20Bacaks%C4%B1z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-can-erdem-bezmialem",
    "fullName": "Ahmet Can Erdem",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20Ahmet%20Can%20Erdem%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-durcan-yavuz-bezmialem",
    "fullName": "Ahmet Durcan Yavuz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmet%20Durcan%20Yavuz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-elbay-bezmialem",
    "fullName": "Ahmet Elbay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ahmet%20Elbay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-hakan-sahin-bezmialem",
    "fullName": "Ahmet Hakan Şahin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmet%20Hakan%20%C5%9Eahin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-volkan-kurtoglu-bezmialem",
    "fullName": "Ahmet Volkan Kurtoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ahmet%20Volkan%20Kurto%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-arda-sozen-bezmialem",
    "fullName": "Ali Arda Sözen",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ali%20Arda%20S%C3%B6zen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-dogukan-angin-bezmialem",
    "fullName": "Ali Doğukan Anğın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ali%20Do%C4%9Fukan%20An%C4%9F%C4%B1n%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-erdem-dal-bezmialem",
    "fullName": "Ali Erdem Dal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ali%20Erdem%20Dal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-onurhan-ozturk-bezmialem",
    "fullName": "Ali Onurhan Öztürk",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ali%20Onurhan%20%C3%96zt%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-soker-bezmialem",
    "fullName": "Ali Söker",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ali%20S%C3%B6ker%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-tuzun-i-nce-bezmialem",
    "fullName": "Ali Tüzün İnce",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ali%20T%C3%BCz%C3%BCn%20%C4%B0nce%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alpay-alkan-bezmialem",
    "fullName": "Alpay Alkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Alpay%20Alkan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alper-can-bezmialem",
    "fullName": "Alper Can",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Alper%20Can%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alper-yenigun-bezmialem",
    "fullName": "Alper Yenigün",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Alper%20Yenig%C3%BCn%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alshimai-mohamad-awad-essa-bezmialem",
    "fullName": "Alshımaı Mohamad Awad Essa",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Alsh%C4%B1ma%C4%B1%20Mohamad%20Awad%20Essa%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "anastasiia-likhtorovych-bezmialem",
    "fullName": "Anastasııa Lıkhtorovych",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Anastas%C4%B1%C4%B1a%20L%C4%B1khtorovych%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "arzu-dilsat-cicek-bezmialem",
    "fullName": "Arzu Dilşat Çiçek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Arzu%20Dil%C5%9Fat%20%C3%87i%C3%A7ek%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aslan-demir-bezmialem",
    "fullName": "Aslan Demir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Aslan%20Demir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "asim-esen-bezmialem",
    "fullName": "Asım Esen",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20As%C4%B1m%20Esen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "atakan-yilmaz-bezmialem",
    "fullName": "Atakan Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Atakan%20Y%C4%B1lmaz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aybuke-erol-evli-bezmialem",
    "fullName": "Aybüke Erol Evli",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ayb%C3%BCke%20Erol%20Evli%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aycan-ugur-bezmialem",
    "fullName": "Aycan Uğur",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Aycan%20U%C4%9Fur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aydin-nadir-bezmialem",
    "fullName": "Aydın Nadir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Ayd%C4%B1n%20Nadir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayet-osmanoglu-bezmialem",
    "fullName": "Ayet Osmanoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ayet%20Osmano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aynur-gozukucuk-bezmialem",
    "fullName": "Aynur Gözüküçük",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Aynur%20G%C3%B6z%C3%BCk%C3%BC%C3%A7%C3%BCk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aynur-ozdamar-bezmialem",
    "fullName": "Aynur Özdamar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Aynur%20%C3%96zdamar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aytak-jafari-barani-bezmialem",
    "fullName": "Aytak Jafarı Baranı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Aytak%20Jafar%C4%B1%20Baran%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayse-filiz-gokmen-karasu-bezmialem",
    "fullName": "Ayşe Filiz Gökmen Karasu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ay%C5%9Fe%20Filiz%20G%C3%B6kmen%20Karasu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayse-isik-guven-bezmialem",
    "fullName": "Ayşe Işık Güven",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ay%C5%9Fe%20I%C5%9F%C4%B1k%20G%C3%BCven%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayse-karatas-bezmialem",
    "fullName": "Ayşe Karataş",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20Ay%C5%9Fe%20Karata%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aysegul-kalin-aycicek-bezmialem",
    "fullName": "Ayşegül Kalın Ayçiçek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ay%C5%9Feg%C3%BCl%20Kal%C4%B1n%20Ay%C3%A7i%C3%A7ek%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aysegul-ogut-bezmialem",
    "fullName": "Ayşegül Öğüt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Ay%C5%9Feg%C3%BCl%20%C3%96%C4%9F%C3%BCt%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aisulu-yapas-bezmialem",
    "fullName": "Aısulu Yapas",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20A%C4%B1sulu%20Yapas%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bahadir-bahadirlar-bezmialem",
    "fullName": "Bahadır Bahadırlar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Bahad%C4%B1r%20Bahad%C4%B1rlar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bahadir-taslidere-bezmialem",
    "fullName": "Bahadır Taşlıdere",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Bahad%C4%B1r%20Ta%C5%9Fl%C4%B1dere%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "basti-huseynova-bezmialem",
    "fullName": "Bastı Huseynova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Bast%C4%B1%20Huseynova%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "batuhan-galip-aydogdu-bezmialem",
    "fullName": "Batuhan Galip Aydoğdu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Batuhan%20Galip%20Aydo%C4%9Fdu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bayram-bayis-bezmialem",
    "fullName": "Bayram Bayiş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Bayram%20Bayi%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bayram-dogan-bezmialem",
    "fullName": "Bayram Doğan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Bayram%20Do%C4%9Fan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "basar-cander-bezmialem",
    "fullName": "Başar Cander",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ba%C5%9Far%20Cander%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "begum-petek-al-bezmialem",
    "fullName": "Begüm Petek Al",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beg%C3%BCm%20Petek%20Al%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "behlul-guran-bezmialem",
    "fullName": "Behlül Güran",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Behl%C3%BCl%20G%C3%BCran%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "behrad-valizadeh-bezmialem",
    "fullName": "Behrad Valızadeh",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Behrad%20Val%C4%B1zadeh%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bekir-i-nan-bezmialem",
    "fullName": "Bekir İnan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Bekir%20%C4%B0nan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "berna-duman-bezmialem",
    "fullName": "Berna Duman",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Berna%20Duman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "beste-eser-bezmialem",
    "fullName": "Beste Eser",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beste%20Eser%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "beybin-hayirli-bezmialem",
    "fullName": "Beybin Hayırlı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beybin%20Hay%C4%B1rl%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "beyza-goksu-bezmialem",
    "fullName": "Beyza Göksu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beyza%20G%C3%B6ksu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "beyza-keles-bezmialem",
    "fullName": "Beyza Keleş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Beyza%20Kele%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bilal-sulak-bezmialem",
    "fullName": "Bilal Sulak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Bilal%20Sulak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "buket-suslu-bezmialem",
    "fullName": "Buket Süslü",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Buket%20S%C3%BCsl%C3%BC%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burak-donmez-bezmialem",
    "fullName": "Burak Dönmez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Burak%20D%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burcu-aydin-boyama-bezmialem",
    "fullName": "Burcu Aydın Boyama",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Burcu%20Ayd%C4%B1n%20Boyama%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "buse-pulat-oztoprak-bezmialem",
    "fullName": "Buse Pulat Öztoprak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Buse%20Pulat%20%C3%96ztoprak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bushra-al-obeid-bezmialem",
    "fullName": "Bushra Al Obeıd",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Bushra%20Al%20Obe%C4%B1d%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bulent-durdu-bezmialem",
    "fullName": "Bülent Durdu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20B%C3%BClent%20Durdu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "busra-uzun-bezmialem",
    "fullName": "Büşra Uzun",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20B%C3%BC%C5%9Fra%20Uzun%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "busranur-cimen-bezmialem",
    "fullName": "Büşranur Çimen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20B%C3%BC%C5%9Franur%20%C3%87imen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "can-davutoglu-bezmialem",
    "fullName": "Can Davutoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Can%20Davuto%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "canberk-tabakoglu-bezmialem",
    "fullName": "Canberk Tabakoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Canberk%20Tabako%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "canet-akcin-ozbey-bezmialem",
    "fullName": "Canet Akçin Özbey",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Canet%20Ak%C3%A7in%20%C3%96zbey%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cansu-turkkan-bezmialem",
    "fullName": "Cansu Türkkan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Cansu%20T%C3%BCrkkan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "celaleddin-haluk-calisir-bezmialem",
    "fullName": "Celaleddin Haluk Çalışır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Celaleddin%20Haluk%20%C3%87al%C4%B1%C5%9F%C4%B1r%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cem-bayraktar-bezmialem",
    "fullName": "Cem Bayraktar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Cem%20Bayraktar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cevahir-alioglu-bezmialem",
    "fullName": "Cevahir Alioğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Cevahir%20Alio%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cevdet-yildirim-bezmialem",
    "fullName": "Cevdet Yıldırım",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Cevdet%20Y%C4%B1ld%C4%B1r%C4%B1m%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cuma-acer-bezmialem",
    "fullName": "Cuma Acer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Cuma%20Acer%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cumali-karatoprak-bezmialem",
    "fullName": "Cumali Karatoprak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Cumali%20Karatoprak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "damla-culha-bezmialem",
    "fullName": "Damla Culha",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Damla%20Culha%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dawod-khoroosha-bezmialem",
    "fullName": "Dawod Khoroosha",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Dawod%20Khoroosha%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "defne-sahin-bezmialem",
    "fullName": "Defne Şahin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Defne%20%C5%9Eahin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "deniz-kara-bezmialem",
    "fullName": "Deniz Kara",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Deniz%20Kara%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dida-marasli-bezmialem",
    "fullName": "Dida Maraşlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Dida%20Mara%C5%9Fl%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "didem-dizman-bezmialem",
    "fullName": "Didem Dizman",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Didem%20Dizman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dilara-sude-gunes-bezmialem",
    "fullName": "Dilara Sude Güneş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Dilara%20Sude%20G%C3%BCne%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "durukan-ture-bezmialem",
    "fullName": "Durukan Türe",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Durukan%20T%C3%BCre%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "didar-kyenshilik-bezmialem",
    "fullName": "Dıdar Kyenshılık",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20D%C4%B1dar%20Kyensh%C4%B1l%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ebru-koyuncu-bezmialem",
    "fullName": "Ebru Koyuncu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ebru%20Koyuncu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ebru-nur-karakoprulu-bezmialem",
    "fullName": "Ebru Nur Karaköprülü",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ebru%20Nur%20Karak%C3%B6pr%C3%BCl%C3%BC%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ece-vural-bezmialem",
    "fullName": "Ece Vural",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ece%20Vural%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "eda-kultur-bezmialem",
    "fullName": "Eda Kültür",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Eda%20K%C3%BClt%C3%BCr%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-betul-balci-bezmialem",
    "fullName": "Elif Betül Balcı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elif%20Bet%C3%BCl%20Balc%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-ugurlu-bezmialem",
    "fullName": "Elif Uğurlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Elif%20U%C4%9Furlu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-yaren-gundogdu-bezmialem",
    "fullName": "Elif Yaren Gündoğdu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elif%20Yaren%20G%C3%BCndo%C4%9Fdu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elifnaz-uyar-bezmialem",
    "fullName": "Elifnaz Uyar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Elifnaz%20Uyar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emna-jamoussi-bezmialem",
    "fullName": "Emna Jamoussı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Emna%20Jamouss%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emre-kalkan-bezmialem",
    "fullName": "Emre Kalkan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Emre%20Kalkan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emre-sonmez-bezmialem",
    "fullName": "Emre Sönmez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Emre%20S%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "enver-kunduz-bezmialem",
    "fullName": "Enver Kunduz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Enver%20Kunduz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ercan-onder-bezmialem",
    "fullName": "Ercan Önder",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ercan%20%C3%96nder%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erol-senturk-bezmialem",
    "fullName": "Erol Şentürk",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Erol%20%C5%9Eent%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ertan-bulbuloglu-bezmialem",
    "fullName": "Ertan Bülbüloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ertan%20B%C3%BClb%C3%BClo%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ertan-ozkural-bezmialem",
    "fullName": "Ertan Özkural",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ertan%20%C3%96zkural%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ertugrul-tasan-bezmialem",
    "fullName": "Ertuğrul Taşan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ertu%C4%9Frul%20Ta%C5%9Fan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esat-nursoy-bezmialem",
    "fullName": "Esat Nursoy",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esat%20Nursoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esin-kaplan-bezmialem",
    "fullName": "Esin Kaplan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Esin%20Kaplan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esma-betul-keskin-bezmialem",
    "fullName": "Esma Betül Keskin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esma%20Bet%C3%BCl%20Keskin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esma-cemre-eren-bezmialem",
    "fullName": "Esma Cemre Eren",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esma%20Cemre%20Eren%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-altun-mentes-bezmialem",
    "fullName": "Esra Altun Menteş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esra%20Altun%20Mente%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-danisman-bezmialem",
    "fullName": "Esra Danışman",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esra%20Dan%C4%B1%C5%9Fman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-gul-bakkal-bezmialem",
    "fullName": "Esra Gül Bakkal",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esra%20G%C3%BCl%20Bakkal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-nur-pinar-bezmialem",
    "fullName": "Esra Nur Pınar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Esra%20Nur%20P%C4%B1nar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "eyup-berk-cicek-bezmialem",
    "fullName": "Eyüp Berk Çiçek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ey%C3%BCp%20Berk%20%C3%87i%C3%A7ek%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ezgi-elcin-koksal-bezmialem",
    "fullName": "Ezgi Elçin Köksal",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ezgi%20El%C3%A7in%20K%C3%B6ksal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "faraz-rezaei-nazifi-bezmialem",
    "fullName": "Faraz Rezaeı Nazıfı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Faraz%20Rezae%C4%B1%20Naz%C4%B1f%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatih-i-bis-bezmialem",
    "fullName": "Fatih İbiş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fatih%20%C4%B0bi%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatma-busra-ulas-bezmialem",
    "fullName": "Fatma Büşra Ulaş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Fatma%20B%C3%BC%C5%9Fra%20Ula%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatma-tamer-bezmialem",
    "fullName": "Fatma Tamer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Fatma%20Tamer%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fazil-bayrakcioglu-bezmialem",
    "fullName": "Fazıl Bayrakçıoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Faz%C4%B1l%20Bayrak%C3%A7%C4%B1o%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ferah-sonmez-bezmialem",
    "fullName": "Ferah Sönmez",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ferah%20S%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feyza-ak-bezmialem",
    "fullName": "Feyza Ak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Feyza%20Ak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "furkan-kirik-bezmialem",
    "fullName": "Furkan Kırık",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Furkan%20K%C4%B1r%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "furkan-seha-yildirim-bezmialem",
    "fullName": "Furkan Seha Yıldırım",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Furkan%20Seha%20Y%C4%B1ld%C4%B1r%C4%B1m%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gaye-devrim-elmaci-bezmialem",
    "fullName": "Gaye Devrim Elmacı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Gaye%20Devrim%20Elmac%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gizem-elif-atli-bezmialem",
    "fullName": "Gizem Elif Atlı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Gizem%20Elif%20Atl%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gultaj-asadova-bezmialem",
    "fullName": "Gultaj Asadova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Gultaj%20Asadova%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gunay-rustamli-bezmialem",
    "fullName": "Gunay Rustamlı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Gunay%20Rustaml%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gokhan-lebe-bezmialem",
    "fullName": "Gökhan Lebe",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20G%C3%B6khan%20Lebe%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gokcen-basaranoglu-bezmialem",
    "fullName": "Gökçen Başaranoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%B6k%C3%A7en%20Ba%C5%9Farano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gokcer-uzer-bezmialem",
    "fullName": "Gökçer Uzer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%B6k%C3%A7er%20Uzer%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gorkem-kaptanoglu-bezmialem",
    "fullName": "Görkem Kaptanoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20G%C3%B6rkem%20Kaptano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gulay-okay-bezmialem",
    "fullName": "Gülay Okay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20G%C3%BClay%20Okay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gullu-gencebay-cetin-bezmialem",
    "fullName": "Güllü Gencebay Çetin",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20G%C3%BCll%C3%BC%20Gencebay%20%C3%87etin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gurkan-kiran-bezmialem",
    "fullName": "Gürkan Kıran",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCrkan%20K%C4%B1ran%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "guven-cetin-bezmialem",
    "fullName": "Güven Çetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCven%20%C3%87etin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "habib-akbulut-bezmialem",
    "fullName": "Habib Akbulut",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Habib%20Akbulut%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "haci-ahmet-bircan-bezmialem",
    "fullName": "Hacı Ahmet Bircan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hac%C4%B1%20Ahmet%20Bircan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "haci-mehmet-turk-bezmialem",
    "fullName": "Hacı Mehmet Türk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hac%C4%B1%20Mehmet%20T%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hafize-otcu-temur-bezmialem",
    "fullName": "Hafize Otcu Temur",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Hafize%20Otcu%20Temur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-bozkurtoglu-bezmialem",
    "fullName": "Hakan Bozkurtoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hakan%20Bozkurto%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-fotbolcu-bezmialem",
    "fullName": "Hakan Fotbolcu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hakan%20Fotbolcu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-somay-bezmialem",
    "fullName": "Hakan Somay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Hakan%20Somay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-senaran-bezmialem",
    "fullName": "Hakan Şenaran",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hakan%20%C5%9Eenaran%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-senturk-bezmialem",
    "fullName": "Hakan Şentürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hakan%20%C5%9Eent%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halil-akdag-bezmialem",
    "fullName": "Halil Akdağ",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Halil%20Akda%C4%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halil-can-oz-bezmialem",
    "fullName": "Halil Can Öz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Halil%20Can%20%C3%96z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halil-i-brahim-ture-bezmialem",
    "fullName": "Halil İbrahim Türe",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Halil%20%C4%B0brahim%20T%C3%BCre%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halime-cali-ozturk-bezmialem",
    "fullName": "Halime Çalı Öztürk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Halime%20%C3%87al%C4%B1%20%C3%96zt%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halit-cinar-caki-bezmialem",
    "fullName": "Halit Çınar Çakı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Halit%20%C3%87%C4%B1nar%20%C3%87ak%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hamad-ghazi-ghulamalla-mohamed-bezmialem",
    "fullName": "Hamad Ghazı Ghulamalla Mohamed",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hamad%20Ghaz%C4%B1%20Ghulamalla%20Mohamed%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hamdi-a-a-naser-bezmialem",
    "fullName": "Hamdı A.a. Naser",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Hamd%C4%B1%20A.a.%20Naser%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hamza-ogun-bezmialem",
    "fullName": "Hamza Ogun",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Hamza%20Ogun%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "handenur-akbayrak-bezmialem",
    "fullName": "Handenur Akbayrak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Handenur%20Akbayrak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "harika-salepcioglu-kaya-bezmialem",
    "fullName": "Harika Salepçioğlu Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Harika%20Salep%C3%A7io%C4%9Flu%20Kaya%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "harika-shundo-bezmialem",
    "fullName": "Harıka Shundo",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Har%C4%B1ka%20Shundo%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hasan-avci-bezmialem",
    "fullName": "Hasan Avci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Hasan%20Avci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hasan-burak-i-sleyen-bezmialem",
    "fullName": "Hasan Burak İşleyen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hasan%20Burak%20%C4%B0%C5%9Fleyen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hassen-daghmoura-bezmialem",
    "fullName": "Hassen Daghmoura",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Hassen%20Daghmoura%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hatice-neva-baki-bezmialem",
    "fullName": "Hatice Neva Baki",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hatice%20Neva%20Baki%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hatyja-saparova-bezmialem",
    "fullName": "Hatyja Saparova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hatyja%20Saparova%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hayat-abduselam-hassen-bezmialem",
    "fullName": "Hayat Abduselam Hassen",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Hayat%20Abduselam%20Hassen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hayrettin-daskaya-bezmialem",
    "fullName": "Hayrettin Daşkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hayrettin%20Da%C5%9Fkaya%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hayrettin-ozturk-bezmialem",
    "fullName": "Hayrettin Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hayrettin%20%C3%96zt%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hayriye-emel-yetkin-bezmialem",
    "fullName": "Hayriye Emel Yetkin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hayriye%20Emel%20Yetkin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hidayet-oner-bezmialem",
    "fullName": "Hidayet Öner",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hidayet%20%C3%96ner%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hulya-akan-bezmialem",
    "fullName": "Hülya Akan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BClya%20Akan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hulya-aladag-bezmialem",
    "fullName": "Hülya Aladağ",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20H%C3%BClya%20Alada%C4%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-arslan-bezmialem",
    "fullName": "Hüseyin Arslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20H%C3%BCseyin%20Arslan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-toprak-bezmialem",
    "fullName": "Hüseyin Toprak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BCseyin%20Toprak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-tufan-kutlu-bezmialem",
    "fullName": "Hüseyin Tufan Kutlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BCseyin%20Tufan%20Kutlu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-ozdemir-bezmialem",
    "fullName": "Hüseyin Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BCseyin%20%C3%96zdemir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-altay-bezmialem",
    "fullName": "İbrahim Altay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0brahim%20Altay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-arif-koytak-bezmialem",
    "fullName": "İbrahim Arif Koytak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0brahim%20Arif%20Koytak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-enes-aslan-bezmialem",
    "fullName": "İbrahim Enes Aslan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0brahim%20Enes%20Aslan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-halil-bozan-bezmialem",
    "fullName": "İbrahim Halil Bozan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C4%B0brahim%20Halil%20Bozan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-mehmet-aljbour-bezmialem",
    "fullName": "İbrahim Mehmet Aljbour",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C4%B0brahim%20Mehmet%20Aljbour%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-brahim-turk-bezmialem",
    "fullName": "İbrahim Türk",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0brahim%20T%C3%BCrk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-dil-tekkaya-ucar-bezmialem",
    "fullName": "İdil Tekkaya Uçar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0dil%20Tekkaya%20U%C3%A7ar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-lhami-furkan-isik-bezmialem",
    "fullName": "İlhami Furkan Işık",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0lhami%20Furkan%20I%C5%9F%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-lhan-sanverdi-bezmialem",
    "fullName": "İlhan Şanverdi",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0lhan%20%C5%9Eanverdi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-mge-begendi-bezmialem",
    "fullName": "İmge Beğendi",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C4%B0mge%20Be%C4%9Fendi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-skender-ekinci-bezmialem",
    "fullName": "İskender Ekinci",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C4%B0skender%20Ekinci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-smail-cengiz-bezmialem",
    "fullName": "İsmail Cengiz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C4%B0smail%20Cengiz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-smail-sumer-bezmialem",
    "fullName": "İsmail Sümer",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C4%B0smail%20S%C3%BCmer%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "i-smail-yurtsever-bezmialem",
    "fullName": "İsmail Yurtsever",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C4%B0smail%20Yurtsever%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "jamal-khalid-ismael-al-halboosi-bezmialem",
    "fullName": "Jamal Khalıd Ismael Al-halboosı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Jamal%20Khal%C4%B1d%20Ismael%20Al-halboos%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "julide-gurbuz-bezmialem",
    "fullName": "Jülide Gürbüz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20J%C3%BClide%20G%C3%BCrb%C3%BCz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kaan-i-nce-bezmialem",
    "fullName": "Kaan İnce",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Kaan%20%C4%B0nce%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kamil-sarkislali-bezmialem",
    "fullName": "Kamil Şarkışlalı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Kamil%20%C5%9Eark%C4%B1%C5%9Flal%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kamran-kerimzade-bezmialem",
    "fullName": "Kamran Kerimzade",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Kamran%20Kerimzade%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kazim-karaaslan-bezmialem",
    "fullName": "Kazim Karaaslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kazim%20Karaaslan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kenan-karaca-bezmialem",
    "fullName": "Kenan Karaca",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Kenan%20Karaca%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kerem-kara-bezmialem",
    "fullName": "Kerem Kara",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Kerem%20Kara%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "koray-sahin-bezmialem",
    "fullName": "Koray Şahin",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Koray%20%C5%9Eahin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kubilay-elmaci-bezmialem",
    "fullName": "Kubilay Elmacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Kubilay%20Elmac%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kubra-bicakci-bezmialem",
    "fullName": "Kübra Biçakcı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20K%C3%BCbra%20Bi%C3%A7akc%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kivanc-tas-bezmialem",
    "fullName": "Kıvanç Taş",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20K%C4%B1van%C3%A7%20Ta%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "lala-i-mata-bezmialem",
    "fullName": "Lala İmata",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Lala%20%C4%B0mata%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "lamia-seker-can-bezmialem",
    "fullName": "Lamia Şeker Can",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Lamia%20%C5%9Eeker%20Can%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahmut-murat-okan-bezmialem",
    "fullName": "Mahmut Murat Okan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mahmut%20Murat%20Okan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahmut-muzaffer-i-lhan-bezmialem",
    "fullName": "Mahmut Muzaffer İlhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mahmut%20Muzaffer%20%C4%B0lhan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahmut-uluganyan-bezmialem",
    "fullName": "Mahmut Uluganyan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mahmut%20Uluganyan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahsum-alyanak-bezmialem",
    "fullName": "Mahsum Alyanak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mahsum%20Alyanak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "malick-toure-bezmialem",
    "fullName": "Malıck Toure",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mal%C4%B1ck%20Toure%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-ali-gultekin-bezmialem",
    "fullName": "Mehmet Ali Gültekin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Ali%20G%C3%BCltekin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-fadlullah-aksoy-bezmialem",
    "fullName": "Mehmet Fadlullah Aksoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Fadlullah%20Aksoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-fikret-derman-bezmialem",
    "fullName": "Mehmet Fikret Derman",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mehmet%20Fikret%20Derman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-hakan-seyithanoglu-bezmialem",
    "fullName": "Mehmet Hakan Seyithanoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Hakan%20Seyithano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-hakan-ozdemir-bezmialem",
    "fullName": "Mehmet Hakan Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Hakan%20%C3%96zdemir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-kapicioglu-bezmialem",
    "fullName": "Mehmet Kapıcıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Kap%C4%B1c%C4%B1o%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-kolukisa-bezmialem",
    "fullName": "Mehmet Kolukısa",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Koluk%C4%B1sa%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-kucuk-bezmialem",
    "fullName": "Mehmet Küçük",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mehmet%20K%C3%BC%C3%A7%C3%BCk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-nuri-belge-bezmialem",
    "fullName": "Mehmet Nuri Belge",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mehmet%20Nuri%20Belge%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-ridvan-yalin-bezmialem",
    "fullName": "Mehmet Rıdvan Yalın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mehmet%20R%C4%B1dvan%20Yal%C4%B1n%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-sari-bezmialem",
    "fullName": "Mehmet Sarı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20Sar%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-serkan-kilicoglu-bezmialem",
    "fullName": "Mehmet Serkan Kılıçoğlu",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20Serkan%20K%C4%B1l%C4%B1%C3%A7o%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-zorlu-bezmialem",
    "fullName": "Mehmet Zorlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Zorlu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-sengor-bezmialem",
    "fullName": "Mehmet Şengör",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Mehmet%20%C5%9Eeng%C3%B6r%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melda-kuyucu-bezmialem",
    "fullName": "Melda Kuyucu",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Melda%20Kuyucu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meliha-gundag-papaker-bezmialem",
    "fullName": "Meliha Gündağ Papaker",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20Meliha%20G%C3%BCnda%C4%9F%20Papaker%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melisa-ozay-bezmialem",
    "fullName": "Melisa Özay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Melisa%20%C3%96zay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meltem-gursu-bezmialem",
    "fullName": "Meltem Gürsu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Meltem%20G%C3%BCrsu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meral-yilsen-bezmialem",
    "fullName": "Meral Yılsen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Meral%20Y%C4%B1lsen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "merve-adile-celep-kiyak-bezmialem",
    "fullName": "Merve Adile Celep Kiyak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Merve%20Adile%20Celep%20Kiyak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "metin-basaranoglu-bezmialem",
    "fullName": "Metin Başaranoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Metin%20Ba%C5%9Farano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mesal-nevai-bezmialem",
    "fullName": "Meşal Nevai",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Me%C5%9Fal%20Nevai%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mhd-malek-qamhiah-bezmialem",
    "fullName": "Mhd Malek Qamhıah",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mhd%20Malek%20Qamh%C4%B1ah%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mitra-halili-bezmialem",
    "fullName": "Mitra Halili",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mitra%20Halili%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-ali-geckalan-bezmialem",
    "fullName": "Muhammed Ali Geçkalan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20Ali%20Ge%C3%A7kalan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-agcakoyun-bezmialem",
    "fullName": "Muhammed Ağcakoyun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Muhammed%20A%C4%9Fcakoyun%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-batuhan-ayik-bezmialem",
    "fullName": "Muhammed Batuhan Ayık",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Muhammed%20Batuhan%20Ay%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-emre-deniz-bezmialem",
    "fullName": "Muhammed Emre Deniz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20Emre%20Deniz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-furkan-ozgan-bezmialem",
    "fullName": "Muhammed Furkan Özgan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20Furkan%20%C3%96zgan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-nur-bezmialem",
    "fullName": "Muhammed Nur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Muhammed%20Nur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-said-ekinci-bezmialem",
    "fullName": "Muhammed Said Ekinci",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20Said%20Ekinci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-sariahmetoglu-bezmialem",
    "fullName": "Muhammed Sarıahmetoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20Sar%C4%B1ahmeto%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-tunc-bezmialem",
    "fullName": "Muhammed Tunç",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Muhammed%20Tun%C3%A7%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-sarkoglu-bezmialem",
    "fullName": "Muhammed Şarkoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Muhammed%20%C5%9Earko%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammed-sefik-bezmialem",
    "fullName": "Muhammed Şefik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Muhammed%20%C5%9Eefik%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammet-fatih-sanli-bezmialem",
    "fullName": "Muhammet Fatih Şanlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Muhammet%20Fatih%20%C5%9Eanl%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhittin-calim-bezmialem",
    "fullName": "Muhittin Çalım",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Muhittin%20%C3%87al%C4%B1m%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "murat-aladag-bezmialem",
    "fullName": "Murat Aladağ",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Murat%20Alada%C4%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "murat-karahan-bezmialem",
    "fullName": "Murat Karahan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Murat%20Karahan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-alioglu-bezmialem",
    "fullName": "Mustafa Alioğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mustafa%20Alio%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-alper-i-ncesoy-bezmialem",
    "fullName": "Mustafa Alper İncesoy",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mustafa%20Alper%20%C4%B0ncesoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-aziz-hatiboglu-bezmialem",
    "fullName": "Mustafa Aziz Hatiboğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20Aziz%20Hatibo%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-gunay-bezmialem",
    "fullName": "Mustafa Günay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mustafa%20G%C3%BCnay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-namik-oztanir-bezmialem",
    "fullName": "Mustafa Namık Öztanır",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20Nam%C4%B1k%20%C3%96ztan%C4%B1r%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-cakirca-bezmialem",
    "fullName": "Mustafa Çakırca",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20%C3%87ak%C4%B1rca%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-senyurt-bezmialem",
    "fullName": "Mustafa Şenyurt",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Mustafa%20%C5%9Eenyurt%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muzaffer-akcay-bezmialem",
    "fullName": "Muzaffer Akçay",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Muzaffer%20Ak%C3%A7ay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muruvvet-avci-bezmialem",
    "fullName": "Mürüvvet Avcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20M%C3%BCr%C3%BCvvet%20Avc%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "milad-saeidi-bezmialem",
    "fullName": "Mılad Saeıdı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20M%C4%B1lad%20Sae%C4%B1d%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naci-karaagac-bezmialem",
    "fullName": "Naci Karaağaç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Naci%20Karaa%C4%9Fa%C3%A7%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naghmeh-nasiri-bezmialem",
    "fullName": "Naghmeh Nasırı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Naghmeh%20Nas%C4%B1r%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naim-memmi-bezmialem",
    "fullName": "Naim Memmi",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20Naim%20Memmi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naim-ulusan-bezmialem",
    "fullName": "Naim Ulusan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Naim%20Ulusan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nargiz-amirova-bezmialem",
    "fullName": "Nargız Amırova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Narg%C4%B1z%20Am%C4%B1rova%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naz-atila-bezmialem",
    "fullName": "Naz Atila",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Naz%20Atila%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazan-degirmenci-bezmialem",
    "fullName": "Nazan Değirmenci",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Nazan%20De%C4%9Firmenci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazan-taslidere-bezmialem",
    "fullName": "Nazan Taşlıdere",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Nazan%20Ta%C5%9Fl%C4%B1dere%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazlican-yaman-bezmialem",
    "fullName": "Nazlıcan Yaman",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nazl%C4%B1can%20Yaman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "necdet-demir-bezmialem",
    "fullName": "Necdet Demir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Necdet%20Demir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "necla-zeynep-eren-bezmialem",
    "fullName": "Necla Zeynep Eren",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Necla%20Zeynep%20Eren%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nihan-bayram-bezmialem",
    "fullName": "Nihan Bayram",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nihan%20Bayram%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nisan-cetin-yetimova-bezmialem",
    "fullName": "Nisan Çetin Yetimova",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Nisan%20%C3%87etin%20Yetimova%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nuh-mehmet-elmadag-bezmialem",
    "fullName": "Nuh Mehmet Elmadağ",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nuh%20Mehmet%20Elmada%C4%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nur-ozbek-bezmialem",
    "fullName": "Nur Özbek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nur%20%C3%96zbek%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nuran-kiyak-bezmialem",
    "fullName": "Nuran Kıyak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nuran%20K%C4%B1yak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nuray-kahraman-ay-bezmialem",
    "fullName": "Nuray Kahraman Ay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Nuray%20Kahraman%20Ay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurettin-savas-sen-bezmialem",
    "fullName": "Nurettin Savaş Şen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nurettin%20Sava%C5%9F%20%C5%9Een%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nuriye-unsel-bezmialem",
    "fullName": "Nuriye Ünsel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nuriye%20%C3%9Cnsel%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurullah-seyhun-bezmialem",
    "fullName": "Nurullah Seyhun",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nurullah%20Seyhun%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurzat-elmali-bezmialem",
    "fullName": "Nurzat Elmalı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nurzat%20Elmal%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nusret-acikgoz-bezmialem",
    "fullName": "Nusret Açıkgöz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nusret%20A%C3%A7%C4%B1kg%C3%B6z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nigar-kangarli-bezmialem",
    "fullName": "Nıgar Kangarlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20N%C4%B1gar%20Kangarl%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nigar-taghiyeva-bezmialem",
    "fullName": "Nıgar Taghıyeva",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20N%C4%B1gar%20Tagh%C4%B1yeva%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "onur-bozdag-bezmialem",
    "fullName": "Onur Bozdağ",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Onur%20Bozda%C4%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "osman-sevket-bezmialem",
    "fullName": "Osman Şevket",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Osman%20%C5%9Eevket%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozan-can-turker-bezmialem",
    "fullName": "Ozan Can Türker",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ozan%20Can%20T%C3%BCrker%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozan-volkan-yurdakul-bezmialem",
    "fullName": "Ozan Volkan Yurdakul",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ozan%20Volkan%20Yurdakul%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oguz-yazgan-bezmialem",
    "fullName": "Oğuz Yazgan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20O%C4%9Fuz%20Yazgan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oguzhan-abanoz-bezmialem",
    "fullName": "Oğuzhan Abanoz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20O%C4%9Fuzhan%20Abanoz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oguzhan-selvi-bezmialem",
    "fullName": "Oğuzhan Selvi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20O%C4%9Fuzhan%20Selvi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "paniz-varesi-bezmialem",
    "fullName": "Panız Varesı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Pan%C4%B1z%20Vares%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "pelin-aksoy-bezmialem",
    "fullName": "Pelin Aksoy",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Pelin%20Aksoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "polat-sarp-koseoglu-bezmialem",
    "fullName": "Polat Sarp Köseoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Polat%20Sarp%20K%C3%B6seo%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "pinar-soysal-bezmialem",
    "fullName": "Pınar Soysal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20P%C4%B1nar%20Soysal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rabiye-yilmaz-bezmialem",
    "fullName": "Rabiye Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Rabiye%20Y%C4%B1lmaz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ramazan-akal-bezmialem",
    "fullName": "Ramazan Akal",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ramazan%20Akal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ramazan-bahadir-kucuk-bezmialem",
    "fullName": "Ramazan Bahadır Küçük",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ramazan%20Bahad%C4%B1r%20K%C3%BC%C3%A7%C3%BCk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "raye-sevra-ozmen-bezmialem",
    "fullName": "Raye Sevra Özmen",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Raye%20Sevra%20%C3%96zmen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "recai-gurbuz-bezmialem",
    "fullName": "Recai Gürbüz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Recai%20G%C3%BCrb%C3%BCz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "reham-almotlak-bezmialem",
    "fullName": "Reham Almotlak",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Reham%20Almotlak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "remzi-dogan-bezmialem",
    "fullName": "Remzi Doğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Remzi%20Do%C4%9Fan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rukiye-m-h-al-shenkiti-bezmialem",
    "fullName": "Rukiye M.h.al.shenkiti",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Rukiye%20M.h.al.shenkiti%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rumeysa-turkel-bezmialem",
    "fullName": "Rumeysa Türkel",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Rumeysa%20T%C3%BCrkel%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rymejsa-gurmani-bezmialem",
    "fullName": "Rymejsa Gurmanı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Rymejsa%20Gurman%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rumeyza-kazancioglu-bezmialem",
    "fullName": "Rümeyza Kazancıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20R%C3%BCmeyza%20Kazanc%C4%B1o%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "saadi-aljundi-bezmialem",
    "fullName": "Saadı Aljundı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Saad%C4%B1%20Aljund%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sabri-baki-eren-bezmialem",
    "fullName": "Sabri Baki Eren",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sabri%20Baki%20Eren%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sabina-guliyeva-bezmialem",
    "fullName": "Sabına Gulıyeva",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sab%C4%B1na%20Gul%C4%B1yeva%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sadet-lutfuoglu-bezmialem",
    "fullName": "Sadet Lütfüoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sadet%20L%C3%BCtf%C3%BCo%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sadi-can-sonmez-bezmialem",
    "fullName": "Sadi Can Sönmez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sadi%20Can%20S%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "safa-el-mardi-alaoui-bezmialem",
    "fullName": "Safa El Mardı Alaouı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Safa%20El%20Mard%C4%B1%20Alaou%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "saffa-ahmadzada-bezmialem",
    "fullName": "Saffa Ahmadzada",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Saffa%20Ahmadzada%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "safiye-serra-erzurumluoglu-bezmialem",
    "fullName": "Safiye Serra Erzurumluoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Safiye%20Serra%20Erzurumluo%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "saime-demirci-bezmialem",
    "fullName": "Saime Demirci",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Saime%20Demirci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "samet-yardimci-bezmialem",
    "fullName": "Samet Yardımcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Samet%20Yard%C4%B1mc%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "samir-omarov-bezmialem",
    "fullName": "Samir Omarov",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Samir%20Omarov%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sara-ibrahim-bezmialem",
    "fullName": "Sara Ibrahım",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sara%20Ibrah%C4%B1m%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sarah-sabbagh-sharif-bezmialem",
    "fullName": "Sarah Sabbagh Sharıf",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Sarah%20Sabbagh%20Shar%C4%B1f%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sati-betul-beydilli-bezmialem",
    "fullName": "Satı Betül Beydilli",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sat%C4%B1%20Bet%C3%BCl%20Beydilli%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sayagat-musayeva-bezmialem",
    "fullName": "Sayagat Musayeva",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Sayagat%20Musayeva%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sebile-serranur-tumer-dogukan-bezmialem",
    "fullName": "Sebile Serranur Tümer Doğukan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sebile%20Serranur%20T%C3%BCmer%20Do%C4%9Fukan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "seda-ates-bezmialem",
    "fullName": "Seda Ateş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Seda%20Ate%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sedat-akbas-bezmialem",
    "fullName": "Sedat Akbaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sedat%20Akba%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sedat-kadanali-bezmialem",
    "fullName": "Sedat Kadanalı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Sedat%20Kadanal%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "selin-ayten-akok-bezmialem",
    "fullName": "Selin Ayten Akok",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Selin%20Ayten%20Akok%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "semih-guder-bezmialem",
    "fullName": "Semih Güder",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Semih%20G%C3%BCder%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sena-nur-dogan-bezmialem",
    "fullName": "Sena Nur Doğan",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sena%20Nur%20Do%C4%9Fan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sena-oz-bezmialem",
    "fullName": "Sena Öz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sena%20%C3%96z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "senanur-reisoglu-bezmialem",
    "fullName": "Senanur Reisoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Senanur%20Reiso%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sercan-kiremitci-bezmialem",
    "fullName": "Sercan Kiremitçi",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Sercan%20Kiremit%C3%A7i%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serdar-balsak-bezmialem",
    "fullName": "Serdar Balsak",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Serdar%20Balsak%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serdar-yesiltas-bezmialem",
    "fullName": "Serdar Yeşiltaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Serdar%20Ye%C5%9Filta%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serhan-karaali-bezmialem",
    "fullName": "Serhan Karaali",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Serhan%20Karaali%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serkan-akinci-bezmialem",
    "fullName": "Serkan Akıncı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Serkan%20Ak%C4%B1nc%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serpil-altinay-bezmialem",
    "fullName": "Serpil Altınay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Serpil%20Alt%C4%B1nay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sevim-ecem-ari-bezmialem",
    "fullName": "Sevim Ecem Arı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sevim%20Ecem%20Ar%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "shamil-rashidov-bezmialem",
    "fullName": "Shamıl Rashıdov",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sham%C4%B1l%20Rash%C4%B1dov%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sondos-abu-alhaija-bezmialem",
    "fullName": "Sondos Abu Alhaıja",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Sondos%20Abu%20Alha%C4%B1ja%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "songul-derin-bezmialem",
    "fullName": "Songül Derin",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Song%C3%BCl%20Derin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "suat-kahraman-bezmialem",
    "fullName": "Suat Kahraman",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Suat%20Kahraman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sultan-can-bezmialem",
    "fullName": "Sultan Can",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Sultan%20Can%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "suleyman-atalay-bezmialem",
    "fullName": "Süleyman Atalay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20S%C3%BCleyman%20Atalay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "suleyman-ceyhan-bezmialem",
    "fullName": "Süleyman Ceyhan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20S%C3%BCleyman%20Ceyhan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sumeyye-karakebelioglu-bezmialem",
    "fullName": "Sümeyye Karakebelioğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20S%C3%BCmeyye%20Karakebelio%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "taha-ramazan-sisman-bezmialem",
    "fullName": "Taha Ramazan Şişman",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Taha%20Ramazan%20%C5%9Ei%C5%9Fman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tahsin-saygi-bezmialem",
    "fullName": "Tahsin Saygı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tahsin%20Sayg%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "talal-ibrahim-abed-alfattah-ammar-bezmialem",
    "fullName": "Talal Ibrahım Abed Alfattah Ammar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Talal%20Ibrah%C4%B1m%20Abed%20Alfattah%20Ammar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tansu-merve-kirlangic-bezmialem",
    "fullName": "Tansu Merve Kırlangıç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Tansu%20Merve%20K%C4%B1rlang%C4%B1%C3%A7%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tekin-ekinci-bezmialem",
    "fullName": "Tekin Ekinci",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tekin%20Ekinci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tunahan-mese-bezmialem",
    "fullName": "Tunahan Meşe",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Tunahan%20Me%C5%9Fe%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugba-bayraktar-bezmialem",
    "fullName": "Tuğba Bayraktar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Tu%C4%9Fba%20Bayraktar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugba-kilik-bezmialem",
    "fullName": "Tuğba Kılık",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tu%C4%9Fba%20K%C4%B1l%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugba-yay-bezmialem",
    "fullName": "Tuğba Yay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tu%C4%9Fba%20Yay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugce-sonmez-bezmialem",
    "fullName": "Tuğçe Sönmez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Tu%C4%9F%C3%A7e%20S%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tulay-akcetin-bezmialem",
    "fullName": "Tülay Akçetin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20T%C3%BClay%20Ak%C3%A7etin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "turkyan-i-nan-erkoc-bezmialem",
    "fullName": "Türkyan İnan Erkoç",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20T%C3%BCrkyan%20%C4%B0nan%20Erko%C3%A7%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ufuk-erenberk-bezmialem",
    "fullName": "Ufuk Erenberk",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ufuk%20Erenberk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ularbek-aknazarov-bezmialem",
    "fullName": "Ularbek Aknazarov",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ularbek%20Aknazarov%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ulas-can-arikanoglu-bezmialem",
    "fullName": "Ulaş Can Arıkanoğlu",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Ula%C5%9F%20Can%20Ar%C4%B1kano%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umut-yilmaz-bezmialem",
    "fullName": "Umut Yılmaz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Umut%20Y%C4%B1lmaz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ugur-arda-bezmialem",
    "fullName": "Uğur Arda",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20U%C4%9Fur%20Arda%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ugur-ergun-koyun-bezmialem",
    "fullName": "Uğur Ergün Koyun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20U%C4%9Fur%20Erg%C3%BCn%20Koyun%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "vahdet-ucan-bezmialem",
    "fullName": "Vahdet Uçan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Vahdet%20U%C3%A7an%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "vildan-balioglu-bezmialem",
    "fullName": "Vildan Balioğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Vildan%20Balio%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "vugar-jafar-bezmialem",
    "fullName": "Vugar Jafar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Vugar%20Jafar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yakup-isik-bezmialem",
    "fullName": "Yakup Işık",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Yakup%20I%C5%9F%C4%B1k%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yasaman-mahmoudibisafar-bezmialem",
    "fullName": "Yasaman Mahmoudıbısafar",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yasaman%20Mahmoud%C4%B1b%C4%B1safar%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yasemin-akkoyunlu-bezmialem",
    "fullName": "Yasemin Akkoyunlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Yasemin%20Akkoyunlu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yaser-bekri-bezmialem",
    "fullName": "Yaser Bekri",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Yaser%20Bekri%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yasin-baki-baydas-bezmialem",
    "fullName": "Yasin Baki Baydaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Yasin%20Baki%20Bayda%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yavuz-celik-bezmialem",
    "fullName": "Yavuz Çelik",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yavuz%20%C3%87elik%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yavuzhan-tepebasi-bezmialem",
    "fullName": "Yavuzhan Tepebaşı",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yavuzhan%20Tepeba%C5%9F%C4%B1%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yasar-cesur-bezmialem",
    "fullName": "Yaşar Cesur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ya%C5%9Far%20Cesur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yeliz-emine-ersoy-bezmialem",
    "fullName": "Yeliz Emine Ersoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Yeliz%20Emine%20Ersoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yunus-emre-saglam-bezmialem",
    "fullName": "Yunus Emre Sağlam",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yunus%20Emre%20Sa%C4%9Flam%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yusuf-i-zzet-ayhan-bezmialem",
    "fullName": "Yusuf İzzet Ayhan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Yusuf%20%C4%B0zzet%20Ayhan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yusuf-kaplan-bezmialem",
    "fullName": "Yusuf Kaplan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Yusuf%20Kaplan%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yusuf-ozlem-i-lbey-bezmialem",
    "fullName": "Yusuf Özlem İlbey",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Yusuf%20%C3%96zlem%20%C4%B0lbey%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yusuf-saban-kertmen-bezmialem",
    "fullName": "Yusuf Şaban Kertmen",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Yusuf%20%C5%9Eaban%20Kertmen%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yildirim-ozer-bezmialem",
    "fullName": "Yıldırım Özer",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Y%C4%B1ld%C4%B1r%C4%B1m%20%C3%96zer%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeliha-donmez-bezmialem",
    "fullName": "Zeliha Dönmez",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20Zeliha%20D%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeliha-matur-bezmialem",
    "fullName": "Zeliha Matur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Zeliha%20Matur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-abanoz-bezmialem",
    "fullName": "Zeynep Abanoz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20Abanoz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-donmez-bezmialem",
    "fullName": "Zeynep Dönmez",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20D%C3%B6nmez%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-ece-ozdemir-bezmialem",
    "fullName": "Zeynep Ece Özdemir",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20Ece%20%C3%96zdemir%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-gulsah-bakkal-bezmialem",
    "fullName": "Zeynep Gülşah Bakkal",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20G%C3%BCl%C5%9Fah%20Bakkal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-ladin-onat-bezmialem",
    "fullName": "Zeynep Ladin Onat",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20Ladin%20Onat%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-cetin-bezmialem",
    "fullName": "Zeynep Çetin",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Zeynep%20%C3%87etin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zuhal-bozkurt-bezmialem",
    "fullName": "Zühal Bozkurt",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20Z%C3%BChal%20Bozkurt%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cagri-yildiz-bezmialem",
    "fullName": "Çağrı Yıldız",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%87a%C4%9Fr%C4%B1%20Y%C4%B1ld%C4%B1z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cisem-simsek-bezmialem",
    "fullName": "Çisem Şimşek",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%87isem%20%C5%9Eim%C5%9Fek%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cinar-aksoy-bezmialem",
    "fullName": "Çınar Aksoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%87%C4%B1nar%20Aksoy%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-celal-elcioglu-bezmialem",
    "fullName": "Ömer Celal Elçioğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96mer%20Celal%20El%C3%A7io%C4%9Flu%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-cihat-altay-bezmialem",
    "fullName": "Ömer Cihat Altay",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96mer%20Cihat%20Altay%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-faruk-akgun-bezmialem",
    "fullName": "Ömer Faruk Akgün",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96mer%20Faruk%20Akg%C3%BCn%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-faruk-gozderesi-bezmialem",
    "fullName": "Ömer Faruk Gözderesi",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96mer%20Faruk%20G%C3%B6zderesi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-faruk-oz-bezmialem",
    "fullName": "Ömer Faruk Öz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96mer%20Faruk%20%C3%96z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-soysal-bezmialem",
    "fullName": "Ömer Soysal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96mer%20Soysal%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozcan-karaman-bezmialem",
    "fullName": "Özcan Karaman",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96zcan%20Karaman%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozge-selcukoglu-kilimci-bezmialem",
    "fullName": "Özge Selçukoğlu Kilimci",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9Cyesi%20%C3%96zge%20Sel%C3%A7uko%C4%9Flu%20Kilimci%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozge-sinem-horoz-bezmialem",
    "fullName": "Özge Sinem Horoz",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96zge%20Sinem%20Horoz%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozgur-kucukyildirim-bezmialem",
    "fullName": "Özgür Küçükyıldırım",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96zg%C3%BCr%20K%C3%BC%C3%A7%C3%BCky%C4%B1ld%C4%B1r%C4%B1m%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozlem-su-kucuk-bezmialem",
    "fullName": "Özlem Su Küçük",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96zlem%20Su%20K%C3%BC%C3%A7%C3%BCk%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozlem-sen-bezmialem",
    "fullName": "Özlem Şen",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%96zlem%20%C5%9Een%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umit-guler-bezmialem",
    "fullName": "Ümit Güler",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C3%9Cmit%20G%C3%BCler%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umit-kaya-bezmialem",
    "fullName": "Ümit Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%9Cmit%20Kaya%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "unal-aydin-bezmialem",
    "fullName": "Ünal Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%9Cnal%20Ayd%C4%B1n%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "unal-egeli-bezmialem",
    "fullName": "Ünal Egeli",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%9Cnal%20Egeli%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sahnur-guler-bezmialem",
    "fullName": "Şahnur Güler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C5%9Eahnur%20G%C3%BCler%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serare-moridi-bezmialem",
    "fullName": "Şerare Moridi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C5%9Eerare%20Moridi%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serife-erdem-bezmialem",
    "fullName": "Şerife Erdem",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C5%9Eerife%20Erdem%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sey-hamit-sahin-bezmialem",
    "fullName": "Şey Hamit Şahin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C5%9Eey%20Hamit%20%C5%9Eahin%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "seyma-teymur-bezmialem",
    "fullName": "Şeyma Teymur",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eeyma%20Teymur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "seyma-yildiz-bezmialem",
    "fullName": "Şeyma Yıldız",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eeyma%20Y%C4%B1ld%C4%B1z%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "siirnaz-kukurt-bezmialem",
    "fullName": "Şiirnaz Kükürt",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eiirnaz%20K%C3%BCk%C3%BCrt%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sukufe-batur-bezmialem",
    "fullName": "Şukufe Batur",
    "titlePrefix": "Arş. Gör. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Ar%C5%9F.%20G%C3%B6r.%20Dr.%20%C5%9Eukufe%20Batur%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sukran-erdem-bezmialem",
    "fullName": "Şükran Erdem",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C5%9E%C3%BCkran%20Erdem%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sukruye-firuze-ocak-karatas-bezmialem",
    "fullName": "Şükrüye Firuze Ocak Karataş",
    "titlePrefix": "Öğr. Gör. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "bezmialem-vakif-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "fatih",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%C3%96%C4%9Fr.%20G%C3%B6r.%20Dr.%20%C5%9E%C3%BCkr%C3%BCye%20Firuze%20Ocak%20Karata%C5%9F%20Bezmialem%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  }
];
