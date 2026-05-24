import type { DoctorSummary } from "./types";

/**
 * Adana il-bazında doktor verisi.
 * Faz 1 kaynakları:
 *  - Acıbadem Adana Hastanesi (acibadem.com.tr): 105 doktor
 *  - Avrupa Hospital Adana (avrupahospitaladana.com): 22 doktor
 *
 * Veriler kurumların kamuya açık doktor sayfalarından otomatik derlenmiştir.
 * Sahiplenme akışı ile doktor/kurum tarafından doğrulanır.
 */
export const doctorsAdana: DoctorSummary[] = [
  {
    "slug": "ahmet-dogan-acibadem",
    "fullName": "Ahmet Doğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Ahmet%20Do%C4%9Fan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-oytun-baykan-acibadem",
    "fullName": "Profesör Doktor Ahmet Oytun Baykan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Ahmet%20Oytun%20Baykan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-arikan-acibadem",
    "fullName": "Ali Arıkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Ali%20Ar%C4%B1kan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-bulent-antmen-acibadem",
    "fullName": "Profesör Doktor Ali Bülent Antmen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Ali%20B%C3%BClent%20Antmen%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alper-eken-acibadem",
    "fullName": "Doçent Doktor Alper Eken",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C3%A7ent%20Doktor%20Alper%20Eken%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alper-findikcioglu-acibadem",
    "fullName": "Profesör Doktor Alper Fındıkcıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Alper%20F%C4%B1nd%C4%B1kc%C4%B1o%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "altug-kol-acibadem",
    "fullName": "Altuğ Kol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Altu%C4%9F%20Kol%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "asiye-merve-erdogan-acibadem",
    "fullName": "Asiye Merve Erdoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Asiye%20Merve%20Erdo%C4%9Fan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aydin-halefoglu-acibadem",
    "fullName": "Aydın Halefoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Ayd%C4%B1n%20Halefo%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayfer-pepekal-kukrer-acibadem",
    "fullName": "Ayfer Pepekal Kükrer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Ayfer%20Pepekal%20K%C3%BCkrer%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aynur-eken-acibadem",
    "fullName": "Aynur Eken",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Aynur%20Eken%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bedii-ender-topcu-acibadem",
    "fullName": "Bedii Ender Topçu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Bedii%20Ender%20Top%C3%A7u%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "behice-kurtaran-acibadem",
    "fullName": "Profesör Doktor Behice Kurtaran",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Behice%20Kurtaran%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bulent-kisacikoglu-acibadem",
    "fullName": "Profesör Doktor Bülent Kısacıkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20B%C3%BClent%20K%C4%B1sac%C4%B1ko%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bulent-soyupak-acibadem",
    "fullName": "Profesör Doktor Bülent Soyupak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20B%C3%BClent%20Soyupak%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burak-can-acibadem",
    "fullName": "Burak Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Burak%20Can%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cagri-ors-acibadem",
    "fullName": "Doçent Doktor Çağrı Örs",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C3%A7ent%20Doktor%20%C3%87a%C4%9Fr%C4%B1%20%C3%96rs%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cem-ortacbayram-acibadem",
    "fullName": "Cem Ortaçbayram",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Cem%20Orta%C3%A7bayram%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cisem-gunduz-acibadem",
    "fullName": "Diyetisyen Çisem Gündüz Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "diyetisyen",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Diyetisyen%20%C3%87isem%20G%C3%BCnd%C3%BCz%20Can%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "deniz-cetinkunar-acibadem",
    "fullName": "Deniz Çetinkünar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Deniz%20%C3%87etink%C3%BCnar%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dilara-boyraz-giris-acibadem",
    "fullName": "Klinik Psk Dilara Boyraz Giriş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Klinik%20Psk%20Dilara%20Boyraz%20Giri%C5%9F%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dogan-oncu-acibadem",
    "fullName": "Doğan Öncü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C4%9Fan%20%C3%96nc%C3%BC%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "eda-tokuccu-acibadem",
    "fullName": "Eda Tokuçcu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Eda%20Toku%C3%A7cu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-avsaroglu-acibadem",
    "fullName": "Elif Avşaroğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Elif%20Av%C5%9Faro%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emre-bozkirli-acibadem",
    "fullName": "Profesör Doktor Emre Bozkırlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "endokrinoloji",
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Emre%20Bozk%C4%B1rl%C4%B1%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emre-togrul-acibadem",
    "fullName": "Profesör Doktor Emre Toğrul",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Emre%20To%C4%9Frul%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erdem-toku-acibadem",
    "fullName": "Erdem Toku",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Erdem%20Toku%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "eren-erken-acibadem",
    "fullName": "Profesör Doktor Eren Erken",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Eren%20Erken%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erhan-serin-acibadem",
    "fullName": "Profesör Doktor Erhan Serin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji",
      "cocuk-cerrahisi",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Erhan%20Serin%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erhan-zohre-acibadem",
    "fullName": "Erhan Zöhre",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Erhan%20Z%C3%B6hre%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ertugrul-emre-gunturk-acibadem",
    "fullName": "Doçent Doktor Ertuğrul Emre Güntürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C3%A7ent%20Doktor%20Ertu%C4%9Frul%20Emre%20G%C3%BCnt%C3%BCrk%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ertugrul-seyrek-acibadem",
    "fullName": "Profesör Doktor Ertuğrul Seyrek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Ertu%C4%9Frul%20Seyrek%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatih-celik-acibadem",
    "fullName": "Fatih Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Fatih%20%C3%87elik%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatih-kaya-acibadem",
    "fullName": "Fatih Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Fatih%20Kaya%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatih-koksal-acibadem",
    "fullName": "Profesör Doktor Fatih Köksal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Fatih%20K%C3%B6ksal%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feray-farsak-acibadem",
    "fullName": "Embriyolog Feray Farsak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Embriyolog%20Feray%20Farsak%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feyha-kahya-aydogan-acibadem",
    "fullName": "Feyha Kahya Aydoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Feyha%20Kahya%20Aydo%C4%9Fan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gamze-ucar-acibadem",
    "fullName": "Gamze Uçar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Gamze%20U%C3%A7ar%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hakan-erkman-acibadem",
    "fullName": "Hakan Erkman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Hakan%20Erkman%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halime-bayram-acibadem",
    "fullName": "Halime Bayram",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Halime%20Bayram%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hatice-ilgen-sasmaz-acibadem",
    "fullName": "Profesör Doktor Hatice İlgen Şaşmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Hatice%20%C4%B0lgen%20%C5%9Ea%C5%9Fmaz%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "havva-golalan-acibadem",
    "fullName": "Havva Gölalan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Havva%20G%C3%B6lalan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "helin-kussever-topcu-acibadem",
    "fullName": "Helin Kuşsever Topçu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Helin%20Ku%C5%9Fsever%20Top%C3%A7u%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huri-aydogan-2-acibadem",
    "fullName": "Odyometrist Huri Aydoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Odyometrist%20Huri%20Aydo%C4%9Fan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-tugsan-balli-acibadem",
    "fullName": "Profesör Doktor Tuğsan Ballı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Tu%C4%9Fsan%20Ball%C4%B1%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ihsan-guney-acibadem",
    "fullName": "İhsan Güney",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C4%B0hsan%20G%C3%BCney%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ilkut-ozer-acibadem",
    "fullName": "İlkut Özer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C4%B0lkut%20%C3%96zer%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "irem-hatipoglu-acibadem",
    "fullName": "İrem Hatipoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C4%B0rem%20Hatipo%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "leyla-sen-acibadem",
    "fullName": "Leyla Şen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Leyla%20%C5%9Een%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahir-gulsen-acibadem",
    "fullName": "Profesör Doktor Mahir Gülşen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Mahir%20G%C3%BCl%C5%9Fen%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-ali-vardar-acibadem",
    "fullName": "Profesör Doktor Mehmet Ali Vardar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Mehmet%20Ali%20Vardar%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-can-sahin-acibadem",
    "fullName": "Mehmet Can Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mehmet%20Can%20%C5%9Eahin%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-can-acibadem",
    "fullName": "Mehmet Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mehmet%20Can%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-noyan-zenger-acibadem",
    "fullName": "Mehmet Noyan Zenger",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mehmet%20Noyan%20Zenger%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehrdad-rezaeimiyandoab-acibadem",
    "fullName": "Mehrdad Rezaeımıyandoab",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mehrdad%20Rezae%C4%B1m%C4%B1yandoab%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meltem-acil-acibadem",
    "fullName": "Öğretim Üyesi Meltem Açıl",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C3%96%C4%9Fretim%20%C3%9Cyesi%20Meltem%20A%C3%A7%C4%B1l%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meltem-serin-acibadem",
    "fullName": "Profesör Doktor Meltem Serin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Meltem%20Serin%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mohammad-sevimli-acibadem",
    "fullName": "Mohammad Sevimli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mohammad%20Sevimli%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "moslem-eshghi-acibadem",
    "fullName": "Moslem Eshghı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Moslem%20Eshgh%C4%B1%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "murat-oksuz-acibadem",
    "fullName": "Murat Öksüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Murat%20%C3%96ks%C3%BCz%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-herdem-acibadem",
    "fullName": "Profesör Doktor Mustafa Herdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi",
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Mustafa%20Herdem%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-karaboga-acibadem",
    "fullName": "Mustafa Karaboğa",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Mustafa%20Karabo%C4%9Fa%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-kemal-batur-acibadem",
    "fullName": "Profesör Doktor Mustafa Kemal Batur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Mustafa%20Kemal%20Batur%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazife-kartal-kara-acibadem",
    "fullName": "Nazife Kartal Kara",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Nazife%20Kartal%20Kara%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazli-ozcan-acibadem",
    "fullName": "Nazlı Özcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Nazl%C4%B1%20%C3%96zcan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "necati-zincirli-acibadem",
    "fullName": "Necati Zincirli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Necati%20Zincirli%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurgul-yonyul-acibadem",
    "fullName": "Nurgül Yönyül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Nurg%C3%BCl%20Y%C3%B6ny%C3%BCl%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nursena-sunguray-acibadem",
    "fullName": "Fizyoterapist Nursena Altınkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Fizyoterapist%20Nursena%20Alt%C4%B1nkaya%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurzen-sezgin-acibadem",
    "fullName": "Profesör Doktor Nurzen Sezgin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Nurzen%20Sezgin%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "okay-mehmet-ergenoglu-acibadem",
    "fullName": "Okay Mehmet Ergenoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Okay%20Mehmet%20Ergeno%C4%9Flu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oner-gulcan-acibadem",
    "fullName": "Profesör Doktor Öner Gülcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20%C3%96ner%20G%C3%BClcan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "orhan-demircan-acibadem",
    "fullName": "Profesör Doktor Orhan Demircan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Orhan%20Demircan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozgun-ilke-karagoz-ceylan-acibadem",
    "fullName": "İlke Karagöz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C4%B0lke%20Karag%C3%B6z%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozgur-yagmur-acibadem",
    "fullName": "Profesör Doktor Özgür Yağmur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20%C3%96zg%C3%BCr%20Ya%C4%9Fmur%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "pakize-gizem-akgul-acibadem",
    "fullName": "Diyetisyen Pakize Gizem Akgül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "diyetisyen",
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Diyetisyen%20Pakize%20Gizem%20Akg%C3%BCl%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "pelin-acik-acibadem",
    "fullName": "Pelin Açık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Pelin%20A%C3%A7%C4%B1k%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "pinar-ozbay-acibadem",
    "fullName": "Pınar Özbay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20P%C4%B1nar%20%C3%96zbay%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rana-ozguven-acibadem",
    "fullName": "Rana Özgüven",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Rana%20%C3%96zg%C3%BCven%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "saime-paydas-acibadem",
    "fullName": "Profesör Doktor Saime Paydaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Saime%20Payda%C5%9F%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "salahattin-okur-acibadem",
    "fullName": "Salahattin Okur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Salahattin%20Okur%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "selcuk-sizmaz-acibadem",
    "fullName": "Profesör Doktor Selçuk Sızmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Sel%C3%A7uk%20S%C4%B1zmaz%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "senay-olguner-acibadem",
    "fullName": "Şenay Olguner",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C5%9Eenay%20Olguner%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sinan-yavuz-acibadem",
    "fullName": "Profesör Doktor Sinan Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Sinan%20Yavuz%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sirin-zeynep-haskalp-arikan-acibadem",
    "fullName": "Şirin Zeynep Haskalp Arıkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C5%9Eirin%20Zeynep%20Haskalp%20Ar%C4%B1kan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "soner-solmaz-acibadem",
    "fullName": "Profesör Doktor Soner Solmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Soner%20Solmaz%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "suleyman-cansun-demir-acibadem",
    "fullName": "Profesör Doktor Süleyman Cansun Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20S%C3%BCleyman%20Cansun%20Demir%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "suleyman-cetinkunar-acibadem",
    "fullName": "Profesör Doktor Süleyman Çetinkünar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20S%C3%BCleyman%20%C3%87etink%C3%BCnar%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sureyya-isik-coskun-acibadem",
    "fullName": "Süreyya Işık Coşkun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20S%C3%BCreyya%20I%C5%9F%C4%B1k%20Co%C5%9Fkun%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "taner-arpaci-acibadem",
    "fullName": "Doçent Doktor Taner Arpacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C3%A7ent%20Doktor%20Taner%20Arpac%C4%B1%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tansel-erol-acibadem",
    "fullName": "Profesör Doktor Tansel Erol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Tansel%20Erol%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tansel-yildiran-acibadem",
    "fullName": "Tansel Yıldıran",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Tansel%20Y%C4%B1ld%C4%B1ran%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "taylan-ozgur-cetin-acibadem",
    "fullName": "Taylan Özgür Çetin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Taylan%20%C3%96zg%C3%BCr%20%C3%87etin%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugana-akbas-acibadem",
    "fullName": "Öğretim Üyesi Tuğana Akbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20%C3%96%C4%9Fretim%20%C3%9Cyesi%20Tu%C4%9Fana%20Akba%C5%9F%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ulku-tuncer-acibadem",
    "fullName": "Profesör Doktor Ülkü Tuncer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20%C3%9Clk%C3%BC%20Tuncer%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umut-disel-acibadem",
    "fullName": "Doçent Doktor Umut Dişel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Do%C3%A7ent%20Doktor%20Umut%20Di%C5%9Fel%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "veli-mehmet-kindan-acibadem",
    "fullName": "Veli Mehmet Kından",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Veli%20Mehmet%20K%C4%B1ndan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "veysel-dogan-acibadem",
    "fullName": "Veysel Doğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Veysel%20Do%C4%9Fan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "volkan-noyan-acibadem",
    "fullName": "Profesör Doktor Volkan Noyan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Volkan%20Noyan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yakup-sabri-ariker-acibadem",
    "fullName": "Yakup Sabri Arıker",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Yakup%20Sabri%20Ar%C4%B1ker%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yaman-sarpel-acibadem",
    "fullName": "Profesör Doktor Yaman Sarpel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Yaman%20Sarpel%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yunus-ozturk-acibadem",
    "fullName": "Yunus Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Yunus%20%C3%96zt%C3%BCrk%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yusuf-hakan-abaci-acibadem",
    "fullName": "Yusuf Hakan Abacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji",
      "cocuk-cerrahisi",
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Yusuf%20Hakan%20Abac%C4%B1%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zehra-filiz-gundogan-turan-acibadem",
    "fullName": "Zehra Filiz Gündoğan Turan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Zehra%20Filiz%20G%C3%BCndo%C4%9Fan%20Turan%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-cansu-aladag-acibadem",
    "fullName": "Zeynep Cansu Aladağ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Zeynep%20Cansu%20Alada%C4%9F%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zuleyha-calikusu-acibadem",
    "fullName": "Profesör Doktor Züleyha Çalıkuşu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari",
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "adana-acibadem"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr%20Profes%C3%B6r%20Doktor%20Z%C3%BCleyha%20%C3%87al%C4%B1ku%C5%9Fu%20Ac%C4%B1badem%20Adana%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gokhan-morgul-avrupa-adana",
    "fullName": "Gökhan Morgül",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20G%C3%B6khan%20Morg%C3%BCl%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "vildan-veziroglu-avrupa-adana",
    "fullName": "Vildan Veziroğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Vildan%20Veziro%C4%9Flu%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "gokce-yanik-durmaz-avrupa-adana",
    "fullName": "Gökçe Yanık Durmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20G%C3%B6k%C3%A7e%20Yan%C4%B1k%20Durmaz%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "umit-ece-avrupa-adana",
    "fullName": "Ümit Ece",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%9Cmit%20Ece%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "osman-gereklioglu-avrupa-adana",
    "fullName": "Osman Gereklioğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Osman%20Gereklio%C4%9Flu%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "mahmut-birol-keskin-avrupa-adana",
    "fullName": "Mahmut Birol Keskin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mahmut%20Birol%20Keskin%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "sebahattin-toktas-avrupa-adana",
    "fullName": "Sebahattin Toktaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Sebahattin%20Tokta%C5%9F%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "burcu-akinci-avrupa-adana",
    "fullName": "Burcu Akıncı",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Burcu%20Ak%C4%B1nc%C4%B1%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "zuhal-mehtap-cubukcu-avrupa-adana",
    "fullName": "Zühal Mehtap Çubukçu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Z%C3%BChal%20Mehtap%20%C3%87ubuk%C3%A7u%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "tugba-sen-avrupa-adana",
    "fullName": "Tuğba Şen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tu%C4%9Fba%20%C5%9Een%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "nergiz-turkegun-avrupa-adana",
    "fullName": "Nergiz Türkegün",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nergiz%20T%C3%BCrkeg%C3%BCn%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "huseyin-ari-avrupa-adana",
    "fullName": "Hüseyin Arı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20H%C3%BCseyin%20Ar%C4%B1%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "halil-ibrahim-eren-avrupa-adana",
    "fullName": "Halil İbrahim Eren",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Halil%20%C4%B0brahim%20Eren%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "ahmet-apak-avrupa-adana",
    "fullName": "Ahmet Apak",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Ahmet%20Apak%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "hasan-yuvaci-avrupa-adana",
    "fullName": "Hasan Yuvacı",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Hasan%20Yuvac%C4%B1%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "evren-gezginer-avrupa-adana",
    "fullName": "Evren Gezginer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Evren%20Gezginer%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "idris-mehmetoglu-avrupa-adana",
    "fullName": "İdris Mehmetoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0dris%20Mehmeto%C4%9Flu%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "cihan-solak-avrupa-adana",
    "fullName": "Cihan Solak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Cihan%20Solak%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "lale-yuruk-avrupa-adana",
    "fullName": "Lale Yürük",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Lale%20Y%C3%BCr%C3%BCk%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "veli-hikmet-arpac-avrupa-adana",
    "fullName": "Veli Hikmet Arpaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Veli%20Hikmet%20Arpa%C3%A7%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "irem-incirligoz-avrupa-adana",
    "fullName": "İrem İncirligöz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=%20%C4%B0rem%20%C4%B0ncirlig%C3%B6z%20Avrupa%20Hospital%20Adana"
      }
    ]
  },
  {
    "slug": "sinem-aksahin-avrupa-adana",
    "fullName": "Sinem Akşahin",
    "titlePrefix": "Dyt.",
    "specialtySlugs": [
      "diyetisyen"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "avrupa-hospital-adana"
    ],
    "citySlug": "adana",
    "districtSlug": "seyhan",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dyt.%20Sinem%20Ak%C5%9Fahin%20Avrupa%20Hospital%20Adana"
      }
    ]
  }
];
