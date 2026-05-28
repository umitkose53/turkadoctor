import type { DoctorSummary } from "./types";

/**
 * Yeditepe Üniversitesi Hastanesi akademik / klinik hekim kadrosu
 * (İstanbul/Ataşehir merkez + Kozyatağı şubesi).
 * Kaynak: yeditepehastaneleri.com/doktorlar (resmi hastane doktor dizini) —
 * kurum tarafından alenileştirilmiş hekim kadrosu verisi.
 * KVKK m.5/2-d + m.28/1-ç istisnası kapsamında yeniden indeksleme.
 * Branş eşlemesi specialties.ts taksonomisine göre yapılır;
 * taksonomi dışı dallar (nükleer tıp, tıbbi biyokimya/patoloji/mikrobiyoloji,
 * tıbbi genetik, histoloji, algoloji, odyoloji, eczacı) hariç tutulmuştur.
 */
export const doctorsYeditepe: DoctorSummary[] = [
  {
    "slug": "abdullah-ozkok-yeditepe",
    "fullName": "Abdullah Özkök",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Abdullah%20%C3%96zk%C3%B6k%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ahmet-unsal-yeditepe",
    "fullName": "Ahmet Ünsal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ahmet%20%C3%9Cnsal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alev-eceviz-yeditepe",
    "fullName": "Alev Eceviz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Alev%20Eceviz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-cihangir-cetinel-yeditepe",
    "fullName": "Ali Cihangir Çetinel",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Ali%20Cihangir%20%C3%87etinel%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-ediz-kivanc-yeditepe",
    "fullName": "Ali Ediz Kıvanç",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Ali%20Ediz%20K%C4%B1van%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ali-fuad-durusoy-yeditepe",
    "fullName": "Ali Fuad Durusoy",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Ali%20Fuad%20Durusoy%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alp-kayiran-yeditepe",
    "fullName": "Alp Kayıran",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Alp%20Kay%C4%B1ran%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "alper-kurt-yeditepe",
    "fullName": "Alper Kurt",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Alper%20Kurt%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "anil-ergin-yeditepe",
    "fullName": "Anıl Ergin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20An%C4%B1l%20Ergin%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "asuman-comert-erkilinc-yeditepe",
    "fullName": "Asuman Cömert Erkılınç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Asuman%20C%C3%B6mert%20Erk%C4%B1l%C4%B1n%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "atiye-goksu-asil-yeditepe",
    "fullName": "Atiye Göksu Asil",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Atiye%20G%C3%B6ksu%20Asil%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ayca-turer-cabbar-yeditepe",
    "fullName": "Ayça Türer Cabbar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ay%C3%A7a%20T%C3%BCrer%20Cabbar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aysegul-gormez-yeditepe",
    "fullName": "Ayşegül Görmez",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Ay%C5%9Feg%C3%BCl%20G%C3%B6rmez%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "baki-serdar-oztezcan-yeditepe",
    "fullName": "Baki Serdar Öztezcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Baki%20Serdar%20%C3%96ztezcan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bala-basak-oven-yeditepe",
    "fullName": "Bala Başak Öven",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Bala%20Ba%C5%9Fak%20%C3%96ven%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "banu-musaffa-salepci-yeditepe",
    "fullName": "Banu Musaffa Salepçi",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Banu%20Musaffa%20Salep%C3%A7i%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "baran-simsek-yeditepe",
    "fullName": "Baran Şimşek",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Baran%20%C5%9Eim%C5%9Fek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "berrin-aktekin-yeditepe",
    "fullName": "Berrin Aktekin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Berrin%20Aktekin%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "biray-caner-yeditepe",
    "fullName": "Biray Caner",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Biray%20Caner%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "budak-akman-yeditepe",
    "fullName": "Budak Akman",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Budak%20Akman%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burak-murat-tekturk-yeditepe",
    "fullName": "Burak Murat Tektürk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Burak%20Murat%20Tekt%C3%BCrk%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burak-cagri-aksu-yeditepe",
    "fullName": "Burak Çağrı Aksu",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Burak%20%C3%87a%C4%9Fr%C4%B1%20Aksu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burla-demirbilek-cil-yeditepe",
    "fullName": "Burla Demirbilek Çil",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Burla%20Demirbilek%20%C3%87il%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burcin-yorganci-yeditepe",
    "fullName": "Burçin Yorgancı",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Bur%C3%A7in%20Yorganc%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "busra-nizam-yeditepe",
    "fullName": "Büşra Nizam",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20B%C3%BC%C5%9Fra%20Nizam%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cemil-selim-isbir-yeditepe",
    "fullName": "C. Selim İsbir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20C.%20Selim%20%C4%B0sbir%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "can-yucel-karabay-yeditepe",
    "fullName": "Can Yücel Karabay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Can%20Y%C3%BCcel%20Karabay%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "canan-aykut-bingol-yeditepe",
    "fullName": "Canan Aykut Bingöl",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Canan%20Aykut%20Bing%C3%B6l%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "canan-elif-yildiz-yeditepe",
    "fullName": "Canan Elif Yıldız",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Canan%20Elif%20Y%C4%B1ld%C4%B1z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cem-simsek-yeditepe",
    "fullName": "Cem Şimşek",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Cem%20%C5%9Eim%C5%9Fek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dijan-tav-simsek-yeditepe",
    "fullName": "Dijan Tav Şimşek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Dijan%20Tav%20%C5%9Eim%C5%9Fek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-birtas-atesoglu-yeditepe",
    "fullName": "Elif Birtaş Ateşoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Elif%20Birta%C5%9F%20Ate%C5%9Fo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elif-sagsak-yeditepe",
    "fullName": "Elif Sağsak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Elif%20Sa%C4%9Fsak%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emin-gokhan-gencer-yeditepe",
    "fullName": "Emin Gökhan Gencer",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Emin%20G%C3%B6khan%20Gencer%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emin-oguzcan-yamaner-yeditepe",
    "fullName": "Emin Oğuzcan Yamaner",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Emin%20O%C4%9Fuzcan%20Yamaner%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emine-alpay-yeditepe",
    "fullName": "Emine Alpay",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Emine%20Alpay%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "emine-manolya-kara-yeditepe",
    "fullName": "Emine Manolya Kara",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Emine%20Manolya%20Kara%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erhan-aysan-yeditepe",
    "fullName": "Erhan Ayşan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Erhan%20Ay%C5%9Fan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erkut-attar-yeditepe",
    "fullName": "Erkut Attar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Erkut%20Attar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erman-uygun-yeditepe",
    "fullName": "Erman Uygun",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Erman%20Uygun%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "erol-demir-yeditepe",
    "fullName": "Erol Demir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Erol%20Demir%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-bayar-yeditepe",
    "fullName": "Esra Bayar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Esra%20Bayar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ezgi-aytac-yeditepe",
    "fullName": "Ezgi Aytaç",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Ezgi%20Ayta%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ezgi-kartal-yeditepe",
    "fullName": "Ezgi Kartal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ezgi%20Kartal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fahrettin-kelestemur-yeditepe",
    "fullName": "Fahrettin Keleştemur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Fahrettin%20Kele%C5%9Ftemur%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "faik-altintas-yeditepe",
    "fullName": "Faik Altıntaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Faik%20Alt%C4%B1nta%C5%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "farid-hasanov-yeditepe",
    "fullName": "Farid Hasanov",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Farid%20Hasanov%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "faruk-yencilek-yeditepe",
    "fullName": "Faruk Yencilek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Faruk%20Yencilek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fatma-tulin-arslan-yeditepe",
    "fullName": "Fatma Tülin Şimşek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Fatma%20T%C3%BClin%20%C5%9Eim%C5%9Fek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ferdi-menda-yeditepe",
    "fullName": "Ferdi Menda",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ferdi%20Menda%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ferhat-ferhatoglu-yeditepe",
    "fullName": "Ferhat Ferhatoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Ferhat%20Ferhato%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feyza-aksu-yeditepe",
    "fullName": "Feyza Aksu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Feyza%20Aksu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feyza-karasu-yeditepe",
    "fullName": "Feyza Karasu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Feyza%20Karasu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "figen-atalay-yeditepe",
    "fullName": "Figen Atalay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Figen%20Atalay%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "filiz-bakar-yeditepe",
    "fullName": "Filiz Bakar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Filiz%20Bakar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "firuz-barakaev-yeditepe",
    "fullName": "Firuz Barakaev",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Firuz%20Barakaev%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "elvira-cehiz-yeditepe",
    "fullName": "Fizyoterapist Elvira Cehiz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Elvira%20Cehiz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "feyza-kilic-yeditepe",
    "fullName": "Fizyoterapist Feyza Kılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Feyza%20K%C4%B1l%C4%B1%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gizem-kavcakar-yeditepe",
    "fullName": "Fizyoterapist Gizem Kavçakar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Gizem%20Kav%C3%A7akar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meryem-balci-yeditepe",
    "fullName": "Fizyoterapist Meryem Balcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Meryem%20Balc%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sena-kurtoglu-yeditepe",
    "fullName": "Fizyoterapist Sena Kurtoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Sena%20Kurto%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yagmur-orta-yeditepe",
    "fullName": "Fizyoterapist Yağmur Orta",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Ya%C4%9Fmur%20Orta%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zuhre-ergun-yeditepe",
    "fullName": "Fizyoterapist Zühre Ergün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Fizyoterapist%20Z%C3%BChre%20Erg%C3%BCn%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "funda-ozturk-yeditepe",
    "fullName": "Funda Öztürk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Funda%20%C3%96zt%C3%BCrk%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gazanfer-ekinci-yeditepe",
    "fullName": "Gazanfer Ekinci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Gazanfer%20Ekinci%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gizem-boz-izceyhan-yeditepe",
    "fullName": "Gizem Boz İzceyhan",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Gizem%20Boz%20%C4%B0zceyhan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gizem-yakut-gurvardar-yeditepe",
    "fullName": "Gizem Yakut Gürvardar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Gizem%20Yakut%20G%C3%BCrvardar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gulderen-yanikkaya-demirel-yeditepe",
    "fullName": "Gülderen Yanıkkaya Demirel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BClderen%20Yan%C4%B1kkaya%20Demirel%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gulcin-kantarci-yeditepe",
    "fullName": "Gülçin Kantarcı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20G%C3%BCl%C3%A7in%20Kantarc%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "halide-rengin-bilgen-akdeniz-yeditepe",
    "fullName": "Halide Rengin Bilgen Akdeniz",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Halide%20Rengin%20Bilgen%20Akdeniz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "haluk-aydin-topaloglu-yeditepe",
    "fullName": "Haluk Aydın Topaloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Haluk%20Ayd%C4%B1n%20Topalo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hande-candemir-yeditepe",
    "fullName": "Hande Candemir",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Hande%20Candemir%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hande-eren-yeditepe",
    "fullName": "Hande Eren",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Hande%20Eren%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "harika-ozkaya-yurttadur-yeditepe",
    "fullName": "Harika Özkaya Yurttadur",
    "titlePrefix": "Uzm. Dyt.",
    "specialtySlugs": [
      "diyetisyen"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dyt.%20Harika%20%C3%96zkaya%20Yurttadur%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hasan-bombaci-yeditepe",
    "fullName": "Hasan Bombacı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hasan%20Bombac%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hatice-ture-yeditepe",
    "fullName": "Hatice Türe",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Hatice%20T%C3%BCre%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hulya-ercan-saricoban-yeditepe",
    "fullName": "Hülya Ercan Sarıçoban",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20H%C3%BClya%20Ercan%20Sar%C4%B1%C3%A7oban%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ibrahim-asaf-uncu-yeditepe",
    "fullName": "İbrahim Asaf Uncu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C4%B0brahim%20Asaf%20Uncu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ibrahim-bayram-yeditepe",
    "fullName": "İbrahim Bayram",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0brahim%20Bayram%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ilhan-topaloglu-yeditepe",
    "fullName": "İlhan Topaloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0lhan%20Topalo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ilke-bahceci-simsek-yeditepe",
    "fullName": "İlke Bahçeci Şimşek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C4%B0lke%20Bah%C3%A7eci%20%C5%9Eim%C5%9Fek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "inan-yilmaz-yeditepe",
    "fullName": "İnan Yılmaz",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20%C4%B0nan%20Y%C4%B1lmaz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ismet-dusmez-yeditepe",
    "fullName": "İsmet Düşmez",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C4%B0smet%20D%C3%BC%C5%9Fmez%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kinyas-kartal-yeditepe",
    "fullName": "Kinyas Kartal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Kinyas%20Kartal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "lala-rustamova-yeditepe",
    "fullName": "Lala Rustamova",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Lala%20Rustamova%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-akif-ozturk-yeditepe",
    "fullName": "Mehmet Akif Öztürk",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Akif%20%C3%96zt%C3%BCrk%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-fatih-yilmaz-yeditepe",
    "fullName": "Mehmet Fatih Yılmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mehmet%20Fatih%20Y%C4%B1lmaz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-oktay-taskapan-yeditepe",
    "fullName": "Mehmet Oktay Taşkapan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20Oktay%20Ta%C5%9Fkapan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-tevfik-dag-yeditepe",
    "fullName": "Mehmet Tevfik Dağ",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Mehmet%20Tevfik%20Da%C4%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-caglar-berk-yeditepe",
    "fullName": "Mehmet Çağlar Berk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mehmet%20%C3%87a%C4%9Flar%20Berk%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melih-topcuoglu-yeditepe",
    "fullName": "Melih Topçuoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Melih%20Top%C3%A7uo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melis-gokce-kocer-yazici-yeditepe",
    "fullName": "Melis Gökçe Koçer Yazıcı",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Melis%20G%C3%B6k%C3%A7e%20Ko%C3%A7er%20Yaz%C4%B1c%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melis-turkel-ozkan-yeditepe",
    "fullName": "Melis Türkel Özkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Melis%20T%C3%BCrkel%20%C3%96zkan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meltem-bozaci-kilicoglu-yeditepe",
    "fullName": "Meltem Bozacı Kılıçoğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Meltem%20Bozac%C4%B1%20K%C4%B1l%C4%B1%C3%A7o%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meltem-ergun-yeditepe",
    "fullName": "Meltem Ergün",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Meltem%20Erg%C3%BCn%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meral-sonmezoglu-yeditepe",
    "fullName": "Meral Sönmezoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Meral%20S%C3%B6nmezo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meral-ulukoylu-menguc-0-yeditepe",
    "fullName": "Meral Uluköylü Mengüç",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Meral%20Uluk%C3%B6yl%C3%BC%20Meng%C3%BC%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mert-ersan-yeditepe",
    "fullName": "Mert Ersan",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Mert%20Ersan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mert-yesiladali-yeditepe",
    "fullName": "Mert Yeşiladalı",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Mert%20Ye%C5%9Filadal%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mert-cetin-yeditepe",
    "fullName": "Mert Çetin",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Mert%20%C3%87etin%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-basbug-yeditepe",
    "fullName": "Mustafa Başbuğ",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Mustafa%20Ba%C5%9Fbu%C4%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-berber-yeditepe",
    "fullName": "Mustafa Berber",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Mustafa%20Berber%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-ferudun-celikmen-yeditepe",
    "fullName": "Mustafa Ferudun Çelikmen",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Mustafa%20Ferudun%20%C3%87elikmen%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mustafa-yazicioglu-yeditepe",
    "fullName": "Mustafa Yazıcıoğlu",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Mustafa%20Yaz%C4%B1c%C4%B1o%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muge-bicakcigil-kalayci-yeditepe",
    "fullName": "Müge Bıçakçıgil Kalaycı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCge%20B%C4%B1%C3%A7ak%C3%A7%C4%B1gil%20Kalayc%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muzeyyen-dogan-yeditepe",
    "fullName": "Müzeyyen Doğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20M%C3%BCzeyyen%20Do%C4%9Fan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "naz-berfu-akbas-yeditepe",
    "fullName": "Naz Berfu Akbaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Naz%20Berfu%20Akba%C5%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "necati-yazar-yeditepe",
    "fullName": "Necati Yazar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Necati%20Yazar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "neset-koksal-yeditepe",
    "fullName": "Neşet Köksal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ne%C5%9Fet%20K%C3%B6ksal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nihal-seden-boyoglu-yeditepe",
    "fullName": "Nihal Seden Boyoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Nihal%20Seden%20Boyo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nilufer-cetinkaya-kocadal-yeditepe",
    "fullName": "Nilüfer Çetinkaya Kocadal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Nil%C3%BCfer%20%C3%87etinkaya%20Kocadal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "noyan-temucin-ogus-yeditepe",
    "fullName": "Noyan Temuçin Oğuş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Noyan%20Temu%C3%A7in%20O%C4%9Fu%C5%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nurcan-arzu-yeditepe",
    "fullName": "Nurcan Arzu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Nurcan%20Arzu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "okan-taycan-yeditepe",
    "fullName": "Okan Taycan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Okan%20Taycan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "olcay-ozveren-yeditepe",
    "fullName": "Olcay Özveren",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Olcay%20%C3%96zveren%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "onur-erdagoz-yeditepe",
    "fullName": "Onur Erdagöz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Onur%20Erdag%C3%B6z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "onur-kocadal-yeditepe",
    "fullName": "Onur Kocadal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Onur%20Kocadal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "orhan-unal-yeditepe",
    "fullName": "Orhan Ünal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Orhan%20%C3%9Cnal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oya-akcin-alagoz-yeditepe",
    "fullName": "Oya Akçın Alagöz",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Oya%20Ak%C3%A7%C4%B1n%20Alag%C3%B6z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozan-tezen-yeditepe",
    "fullName": "Ozan Tezen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Ozan%20Tezen%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "oguzhan-zahmacioglu-yeditepe",
    "fullName": "Oğuzhan Zahmacıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20O%C4%9Fuzhan%20Zahmac%C4%B1o%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "raciha-beril-kucumen-yeditepe",
    "fullName": "Raciha Beril Küçümen",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Raciha%20Beril%20K%C3%BC%C3%A7%C3%BCmen%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rana-karabudak-yeditepe",
    "fullName": "Rana Karabudak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Rana%20Karabudak%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ruhan-dusunsel-yeditepe",
    "fullName": "Ruhan Düşünsel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ruhan%20D%C3%BC%C5%9F%C3%BCnsel%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rukset-attar-yeditepe",
    "fullName": "Rukset Attar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Rukset%20Attar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "seha-akduman-yeditepe",
    "fullName": "Seha Akduman",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Seha%20Akduman%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serhat-tunc-yeditepe",
    "fullName": "Serhat Tunç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Serhat%20Tun%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "serkan-celik-yeditepe",
    "fullName": "Serkan Çelik",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Serkan%20%C3%87elik%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sezgin-sarikaya-yeditepe",
    "fullName": "Sezgin Sarıkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sezgin%20Sar%C4%B1kaya%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sibel-temur-yeditepe",
    "fullName": "Sibel Temür",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sibel%20Tem%C3%BCr%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "simuzar-aliyeva-yeditepe",
    "fullName": "Simuzar Aliyeva",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Simuzar%20Aliyeva%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sina-ercan-yeditepe",
    "fullName": "Sina Ercan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sina%20Ercan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sinan-tatlipinar-yeditepe",
    "fullName": "Sinan Tatlıpınar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Sinan%20Tatl%C4%B1p%C4%B1nar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sunel-kaynar-yeditepe",
    "fullName": "Sunel Kaynar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Sunel%20Kaynar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "sumeyra-ceylan-yeditepe",
    "fullName": "Sümeyra Ceylan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20S%C3%BCmeyra%20Ceylan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "taylan-akgun-yeditepe",
    "fullName": "Taylan Akgün",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Taylan%20Akg%C3%BCn%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tijen-alkan-bozkaya-yeditepe",
    "fullName": "Tijen Alkan Bozkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Tijen%20Alkan%20Bozkaya%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tuba-giray-yeditepe",
    "fullName": "Tuba Giray",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tuba%20Giray%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tugba-okluoglu-yeditepe",
    "fullName": "Tuğba Okluoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Tu%C4%9Fba%20Okluo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tughan-utku-yeditepe",
    "fullName": "Tuğhan Utku",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Tu%C4%9Fhan%20Utku%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "arda-yavuz-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Arda Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Arda%20Yavuz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "aysenur-bayram-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Ayşenur Bayram",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Ay%C5%9Fenur%20Bayram%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "banu-erkal-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Banu Erkal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Banu%20Erkal%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "begum-tollu-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Begüm Tollu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Beg%C3%BCm%20Tollu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "behic-celik-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Behiç Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Behi%C3%A7%20%C3%87elik%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "bengul-fatma-golge-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Bengül Fatma Gölge",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Beng%C3%BCl%20Fatma%20G%C3%B6lge%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "betul-uzunoglu-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Betül Uzunoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Bet%C3%BCl%20Uzuno%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "beyzanur-durak-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Beyzanur Durak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Beyzanur%20Durak%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "burcu-aslandere-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Burcu Aslandere",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Burcu%20Aslandere%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cemre-dolgun-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Cemre Dolgun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Cemre%20Dolgun%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ceren-nur-karaali-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Ceren Nur Karaali",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Ceren%20Nur%20Karaali%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cihan-dural-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Cihan Dural",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Cihan%20Dural%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "dila-gul-dundar-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Dila Gül Dündar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Dila%20G%C3%BCl%20D%C3%BCndar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ece-gumusoglu-caglar-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Ece Gümüşoğlu Çağlar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Ece%20G%C3%BCm%C3%BC%C5%9Fo%C4%9Flu%20%C3%87a%C4%9Flar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "efe-yavuz-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Efe Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Efe%20Yavuz%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "esra-oncu-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Esra Öncü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Esra%20%C3%96nc%C3%BC%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ezgi-duztas-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Ezgi Düztaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Ezgi%20D%C3%BCzta%C5%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "fahrettin-atakan-gultekin-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Fahrettin Atakan Gültekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Fahrettin%20Atakan%20G%C3%BCltekin%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "gokberk-yildiz-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Gökberk Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20G%C3%B6kberk%20Y%C4%B1ld%C4%B1z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hande-aksoy-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Hande Aksoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Hande%20Aksoy%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hasan-tufan-celik-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Hasan Tufan Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Hasan%20Tufan%20%C3%87elik%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "hilal-aybuke-yildiz-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Hilal Aybüke Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Hilal%20Ayb%C3%BCke%20Y%C4%B1ld%C4%B1z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "huseyin-alphan-sekuri-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Hüseyin Alphan Şekuri",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20H%C3%BCseyin%20Alphan%20%C5%9Eekuri%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ilayda-rana-ilgun-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi İlayda Rana İlgün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20%C4%B0layda%20Rana%20%C4%B0lg%C3%BCn%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "israfil-akbay-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi İsrafil Akbay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20%C4%B0srafil%20Akbay%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "kubra-dilek-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Kübra Dilek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20K%C3%BCbra%20Dilek%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "lidya-aden-caglar-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Lidya Aden Çağlar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Lidya%20Aden%20%C3%87a%C4%9Flar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mahinur-dogan-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Mahinur Doğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Mahinur%20Do%C4%9Fan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "mehmet-fatih-ozkan-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Mehmet Fatih Özkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Mehmet%20Fatih%20%C3%96zkan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "melis-ayca-burniku-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Melis Ayça Burniku",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Melis%20Ay%C3%A7a%20Burniku%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "meryem-babaoglan-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Meryem Babaoğlan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Meryem%20Babao%C4%9Flan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muhammet-ali-sadikoglu-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Muhammet Ali Sadıkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Muhammet%20Ali%20Sad%C4%B1ko%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "muge-oral-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Müge Oral",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20M%C3%BCge%20Oral%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "nazli-kocaoglu-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Nazlı Kocaoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Nazl%C4%B1%20Kocao%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "niran-tekkeli-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Niran Tekkeli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Niran%20Tekkeli%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "rabia-sariyildiz-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Rabia Sarıyıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Rabia%20Sar%C4%B1y%C4%B1ld%C4%B1z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "selin-filizel-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Selin Filizel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Selin%20Filizel%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "tolga-orhan-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Tolga Orhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Tolga%20Orhan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umut-deniz-akdag-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Umut Deniz Akdağ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20Umut%20Deniz%20Akda%C4%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozgur-gulumser-yeditepe",
    "fullName": "Tıpta Uzmanlık Öğrencisi Özgür Gülümser",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20T%C4%B1pta%20Uzmanl%C4%B1k%20%C3%96%C4%9Frencisi%20%C3%96zg%C3%BCr%20G%C3%BCl%C3%BCmser%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "merve-oz-yeditepe",
    "fullName": "Uzm. Klinik Psikolog, Uzm. Dyt. Merve Öz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "diyetisyen"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Uzm.%20Klinik%20Psikolog%2C%20Uzm.%20Dyt.%20Merve%20%C3%96z%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-goktuna-yeditepe",
    "fullName": "Uzm. Psikolog Zeynep Göktuna",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20Uzm.%20Psikolog%20Zeynep%20G%C3%B6ktuna%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ugur-ture-yeditepe",
    "fullName": "Uğur Türe",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20U%C4%9Fur%20T%C3%BCre%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "veysel-umman-yeditepe",
    "fullName": "Veysel Umman",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20Veysel%20Umman%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "vildan-ozturk-yeditepe",
    "fullName": "Vildan Öztürk",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Vildan%20%C3%96zt%C3%BCrk%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "volkan-dinc-yeditepe",
    "fullName": "Volkan Dinç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20Volkan%20Din%C3%A7%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "volkan-oglin-yeditepe",
    "fullName": "Volkan Oğlin",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Volkan%20O%C4%9Flin%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yavuz-selim-pata-yeditepe",
    "fullName": "Yavuz Selim Pata",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Yavuz%20Selim%20Pata%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "yasar-kucukardali-yeditepe",
    "fullName": "Yaşar Küçükardalı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Ya%C5%9Far%20K%C3%BC%C3%A7%C3%BCkardal%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeki-salar-yeditepe",
    "fullName": "Zeki Salar",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20Zeki%20Salar%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-alkan-yeditepe",
    "fullName": "Zeynep Alkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20Zeynep%20Alkan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "zeynep-ece-utkan-korun-yeditepe",
    "fullName": "Zeynep Ece Utkan Korun",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20Zeynep%20Ece%20Utkan%20Korun%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "celik-sumer-yeditepe",
    "fullName": "Çelik Sümer",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20%C3%87elik%20S%C3%BCmer%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cetin-timur-yeditepe",
    "fullName": "Çetin Timur",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20%C3%87etin%20Timur%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "cigdem-yanar-ayanoglu-yeditepe",
    "fullName": "Çiğdem Yanar Ayanoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%87i%C4%9Fdem%20Yanar%20Ayano%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-goksel-kosker-yeditepe",
    "fullName": "Ömer Göksel Köşker",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%96mer%20G%C3%B6ksel%20K%C3%B6%C5%9Fker%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "omer-yonga-yeditepe",
    "fullName": "Ömer Yonga",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Op.%20Dr.%20%C3%96mer%20Yonga%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozcan-gokce-yeditepe",
    "fullName": "Özcan Gökçe",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96zcan%20G%C3%B6k%C3%A7e%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozge-koner-yeditepe",
    "fullName": "Özge Köner",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96zge%20K%C3%B6ner%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozge-yabas-yeditepe",
    "fullName": "Özge Yabaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%96zge%20Yaba%C5%9F%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozgur-yazici-yeditepe",
    "fullName": "Özgür Yazıcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%96zg%C3%BCr%20Yaz%C4%B1c%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozkan-erarslan-yeditepe",
    "fullName": "Özkan Erarslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "acil-tip"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Uzm.%20Dr.%20%C3%96zkan%20Erarslan%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozlem-akin-yeditepe",
    "fullName": "Özlem Akın",
    "titlePrefix": "Dr. Öğr. Ü.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Dr.%20%C3%96%C4%9Fr.%20%C3%9C.%20%C3%96zlem%20Ak%C4%B1n%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozlem-alici-yeditepe",
    "fullName": "Özlem Alıcı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C3%96zlem%20Al%C4%B1c%C4%B1%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "ozlem-haliloglu-yeditepe",
    "fullName": "Özlem Haliloğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%96zlem%20Halilo%C4%9Flu%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "umit-ozcelik-yeditepe",
    "fullName": "Ümit Özçelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Do%C3%A7.%20Dr.%20%C3%9Cmit%20%C3%96z%C3%A7elik%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  },
  {
    "slug": "safak-karacay-yeditepe",
    "fullName": "Şafak Karaçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "yeditepe-universitesi-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "atasehir",
    "signals": [
      {
        "source": "google_places",
        "visible": true,
        "sourceUrl": "https://maps.google.com/?q=Prof.%20Dr.%20%C5%9Eafak%20Kara%C3%A7ay%20Yeditepe%20%C3%9Cniversitesi%20Hastanesi"
      }
    ]
  }
];
