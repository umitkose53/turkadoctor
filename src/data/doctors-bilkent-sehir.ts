import type { DoctorSummary } from "./types";

/**
 * Ankara Bilkent Şehir Hastanesi — hekim kadrosu (Ankara/Çankaya).
 * Türkiye'nin en büyük şehir hastanesi; T.C. Sağlık Bakanlığı'na bağlı
 * kamu (şehir/devlet) hastanesi kampüsü (Bilkent bölgesi).
 *
 * Kaynak: ankarasehir.saglik.gov.tr "Doktorlarımız" altındaki branş bazlı
 * resmî klinik hekim sayfaları (dr_list_info; unvan + bölüm bilgisiyle).
 * Kurum tarafından alenileştirilmiş kamu görevlisi hekim verisi.
 * KVKK m.28/1-ç + m.5/2-d (kamu görevi/alenileştirme) istisnası kapsamında
 * yeniden indeksleme. Doktorlar sahiplenme akışıyla (claim) bilgilerini
 * doğrulayabilir/düzeltebilir.
 *
 * NOT: Unvan resmî sayfadaki "dr_unvan" alanından alınmıştır
 * (Prof./Doç./Op./Uzm./Dr. Öğr. Üyesi/Dr.). Branş, hekimin görüldüğü
 * klinik dosyasından eşlenmiş; birden fazla klinikte görünen hekimde tüm
 * branşlar birleştirilmiştir. Tıbbi taksonomide karşılığı bulunmayan
 * laboratuvar/tanı branşları (patoloji, mikrobiyoloji, biyokimya, nükleer
 * tıp, genetik, adli tıp, transfüzyon) için specialtySlugs boş bırakılmıştır.
 * Kadın Doğum ve Çocuk hastaneleri ayrı kampüs sayfa yapısında olduğundan
 * bu listede yer almamaktadır.
 */
export const doctorsBilkentSehir: DoctorSummary[] = [
  {
    "slug": "abbas-ali-tam-bilkent",
    "fullName": "Abbas Ali Tam",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abbas+Ali+Tam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdulkadir-but-bilkent",
    "fullName": "Abdulkadir But",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdulkadir+But+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdulkadir-yilmaz-bilkent",
    "fullName": "Abdulkadir Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdulkadir+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdullah-bugra-kaya-bilkent",
    "fullName": "Abdullah Buğra Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdullah+Buğra+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdullah-edis-bilkent",
    "fullName": "Abdullah Edis",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdullah+Edis+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdullah-sungur-ilgaz-bilkent",
    "fullName": "Abdullah Sungur Ilgaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdullah+Sungur+Ilgaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdullah-omer-atsal-bilkent",
    "fullName": "Abdullah Ömer Atsal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdullah+Ömer+Atsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdurrezzak-yilmaz-bilkent",
    "fullName": "Abdurrezzak Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdurrezzak+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abdussamed-yalcin-bilkent",
    "fullName": "Abdussamed Yalçın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abdussamed+Yalçın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "abidin-erdal-bilkent",
    "fullName": "Abidin Erdal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Abidin+Erdal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "adalet-altinsoy-bilkent",
    "fullName": "Adalet Altınsoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Adalet+Altınsoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "adem-ozcan-bilkent",
    "fullName": "Adem Özcan",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Adem+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "adem-ozkara-bilkent",
    "fullName": "Adem Özkara",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Adem+Özkara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "adnan-burak-akcay-bilkent",
    "fullName": "Adnan Burak Akçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Adnan+Burak+Akçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "adnan-yilmaz-bilkent",
    "fullName": "Adnan Yılmaz",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Adnan+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "afsin-emre-akpinar-bilkent",
    "fullName": "Afşin Emre Akpınar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Afşin+Emre+Akpınar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "agah-yeniceri-bilkent",
    "fullName": "Agah Yeniçeri",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Agah+Yeniçeri+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-akkas-bilkent",
    "fullName": "Ahmet Akkaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Akkaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-alper-yarangumeli-bilkent",
    "fullName": "Ahmet Alper Yarangümeli",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Alper+Yarangümeli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-bilal-kandemir-bilkent",
    "fullName": "Ahmet Bilal Kandemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Bilal+Kandemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-burak-fedai-bilkent",
    "fullName": "Ahmet Burak Fedai",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Burak+Fedai+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-cevdet-ceylan-bilkent",
    "fullName": "Ahmet Cevdet Ceylan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Cevdet+Ceylan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-deniz-belen-bilkent",
    "fullName": "Ahmet Deniz Belen",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Deniz+Belen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-dirikoc-bilkent",
    "fullName": "Ahmet Dirikoç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Dirikoç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-elma-bilkent",
    "fullName": "Ahmet Elma",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Elma+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-eren-secen-bilkent",
    "fullName": "Ahmet Eren Seçen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Eren+Seçen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-faruk-kalkisim-bilkent",
    "fullName": "Ahmet Faruk Kalkışım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Faruk+Kalkışım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-gokhan-akdag-bilkent",
    "fullName": "Ahmet Gökhan Akdağ",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Gökhan+Akdağ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-goktug-ertem-bilkent",
    "fullName": "Ahmet Göktuğ Ertem",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Göktuğ+Ertem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-gungor-bilkent",
    "fullName": "Ahmet Güngör",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Güngör+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-gurer-bilkent",
    "fullName": "Ahmet Gürer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Gürer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-gurhan-gurcay-bilkent",
    "fullName": "Ahmet Gürhan Gürçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Gürhan+Gürçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-kaan-ozdemir-bilkent",
    "fullName": "Ahmet Kaan Özdemir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Kaan+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-keskin-bilkent",
    "fullName": "Ahmet Keskin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Keskin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-kessaf-aslar-bilkent",
    "fullName": "Ahmet Keşşaf Aşlar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Keşşaf+Aşlar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-korkmaz-bilkent",
    "fullName": "Ahmet Korkmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Korkmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-kursat-soyer-bilkent",
    "fullName": "Ahmet Kürşat Soyer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Kürşat+Soyer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-omma-bilkent",
    "fullName": "Ahmet Omma",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Omma+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-saritas-bilkent",
    "fullName": "Ahmet Sarıtaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Sarıtaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-sertcelik-bilkent",
    "fullName": "Ahmet Sertçelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Sertçelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-temizhan-bilkent",
    "fullName": "Ahmet Temizhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Temizhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-teoman-erten-bilkent",
    "fullName": "Ahmet Teoman Erten",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Teoman+Erten+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahmet-sukru-solak-bilkent",
    "fullName": "Ahmet Şükrü Solak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahmet+Şükrü+Solak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ahu-yorulmaz-bilkent",
    "fullName": "Ahu Yorulmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ahu+Yorulmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "akgun-ebru-sarer-bilkent",
    "fullName": "Akgün Ebru Şarer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Akgün+Ebru+Şarer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "akin-aktas-bilkent",
    "fullName": "Akın Aktaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Akın+Aktaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "akin-bostanoglu-bilkent",
    "fullName": "Akın Bostanoğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Akın+Bostanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-atay-bilkent",
    "fullName": "Ali Atay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Atay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-bal-bilkent",
    "fullName": "Ali Bal",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Bal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-coskun-bilkent",
    "fullName": "Ali Coşkun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-eba-demirbag-bilkent",
    "fullName": "Ali Eba Demirbağ",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Eba+Demirbağ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-guler-bilkent",
    "fullName": "Ali Güler",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Güler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-harlak-bilkent",
    "fullName": "Ali Harlak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Harlak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-haydar-baykan-bilkent",
    "fullName": "Ali Haydar Baykan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Haydar+Baykan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-kaan-yildiz-bilkent",
    "fullName": "Ali Kaan Yıldız",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Kaan+Yıldız+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-osman-arisal-bilkent",
    "fullName": "Ali Osman Arısal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Osman+Arısal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-sami-bercin-bilkent",
    "fullName": "Ali Sami Berçin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Sami+Berçin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-sapmaz-bilkent",
    "fullName": "Ali Sapmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Sapmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-sunar-bilkent",
    "fullName": "Ali Sunar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Sunar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ali-utkan-bilkent",
    "fullName": "Ali Utkan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ali+Utkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alican-kilic-bilkent",
    "fullName": "Alican Kılıç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alican+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alican-uguz-bilkent",
    "fullName": "Alican Uğuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alican+Uğuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aliye-bastug-bilkent",
    "fullName": "Aliye Baştuğ",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aliye+Baştuğ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aliye-serpil-sarifakiogullari-bilkent",
    "fullName": "Aliye Serpil Sarıfakıoğulları",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aliye+Serpil+Sarıfakıoğulları+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alkin-yazicioglu-bilkent",
    "fullName": "Alkın Yazıcıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alkın+Yazıcıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alp-yildiz-bilkent",
    "fullName": "Alp Yıldız",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alp+Yıldız+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alparslan-toyran-bilkent",
    "fullName": "Alparslan Toyran",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alparslan+Toyran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alpaslan-altunoglu-bilkent",
    "fullName": "Alpaslan Altunoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alpaslan+Altunoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alper-bayar-bilkent",
    "fullName": "Alper Bayar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alper+Bayar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alper-macif-bilkent",
    "fullName": "Alper Macif",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alper+Macif+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "alphan-gogen-bilkent",
    "fullName": "Alphan Gögen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Alphan+Gögen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "altan-osmanli-bilkent",
    "fullName": "Altan Osmanlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Altan+Osmanlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "anil-gokce-bilkent",
    "fullName": "Anıl Gökçe",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Anıl+Gökçe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "anil-marsan-bilkent",
    "fullName": "Anıl Marşan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Anıl+Marşan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aras-pervane-bilkent",
    "fullName": "Aras Pervane",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aras+Pervane+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arda-hepguler-bilkent",
    "fullName": "Arda Hepgüler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arda+Hepgüler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arda-tinaz-bilkent",
    "fullName": "Arda Tınaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arda+Tınaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arife-polat-duzgun-bilkent",
    "fullName": "Arife Polat Düzgün",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arife+Polat+Düzgün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "armagan-ozgur-bilkent",
    "fullName": "Armağan Özgür",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Armağan+Özgür+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arslan-ardicoglu-bilkent",
    "fullName": "Arslan Ardıçoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arslan+Ardıçoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arslan-guvendik-bilkent",
    "fullName": "Arslan Güvendik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arslan+Güvendik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arzu-dagdemir-bilkent",
    "fullName": "Arzu Dağdemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arzu+Dağdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "arzu-ertas-bilkent",
    "fullName": "Arzu Ertaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Arzu+Ertaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asiye-yavuz-bilkent",
    "fullName": "Asiye Yavuz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Asiye+Yavuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asiye-safak-bulut-bilkent",
    "fullName": "Asiye Şafak Bulut",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Asiye+Şafak+Bulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asli-yildirim-bilkent",
    "fullName": "Aslı Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aslı+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aslihan-aykut-bilkent",
    "fullName": "Aslıhan Aykut",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aslıhan+Aykut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asim-bulent-yamak-bilkent",
    "fullName": "Asım Bülent Yamak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Asım+Bülent+Yamak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asim-ciliz-bilkent",
    "fullName": "Asım Cılız",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Asım+Cılız+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asim-ozayar-bilkent",
    "fullName": "Asım Özayar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Asım+Özayar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "atike-burcin-aribas-tefon-bilkent",
    "fullName": "Atike Burçin Arıbaş Tefon",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Atike+Burçin+Arıbaş+Tefon+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "atilla-kazanci-bilkent",
    "fullName": "Atilla Kazancı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Atilla+Kazancı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aybeniz-civan-kahve-bilkent",
    "fullName": "Aybeniz Civan Kahve",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aybeniz+Civan+Kahve+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aydan-kilicarslan-bilkent",
    "fullName": "Aydan Kılıçarslan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aydan+Kılıçarslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aydan-yldiz-bilkent",
    "fullName": "Aydan Yldız",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aydan+Yldız+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aydan-caliskan-bilkent",
    "fullName": "Aydan Çalışkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aydan+Çalışkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aydin-bilgin-bilkent",
    "fullName": "Aydın Bilgin",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aydın+Bilgin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayfer-nazmiye-yilmaz-bilkent",
    "fullName": "Ayfer Nazmiye Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayfer+Nazmiye+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayfer-sahin-bilkent",
    "fullName": "Ayfer Şahin",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayfer+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aygun-guler-bilkent",
    "fullName": "Aygün Güler",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aygün+Güler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aykut-ikinciogullari-bilkent",
    "fullName": "Aykut İkincioğulları",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aykut+İkincioğulları+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aylin-baydar-artantas-bilkent",
    "fullName": "Aylin Baydar Artantaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aylin+Baydar+Artantaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aylin-demirezer-bolat-bilkent",
    "fullName": "Aylin Demirezer Bolat",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aylin+Demirezer+Bolat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aylin-yazgan-bilkent",
    "fullName": "Aylin Yazgan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aylin+Yazgan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aylin-ozgun-bilkent",
    "fullName": "Aylin Özgün",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aylin+Özgün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aynil-dalkiran-bilkent",
    "fullName": "Aynil Dalkıran",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aynil+Dalkıran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aynur-albayrak-bilkent",
    "fullName": "Aynur Albayrak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aynur+Albayrak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysel-colak-bilkent",
    "fullName": "Aysel Çolak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aysel+Çolak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayca-tuba-dumanli-ozcan-bilkent",
    "fullName": "Ayça Tuba Dumanlı Özcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayça+Tuba+Dumanlı+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-akbas-bilkent",
    "fullName": "Ayşe Akbaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Akbaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-akyuz-bilkent",
    "fullName": "Ayşe Akyüz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Akyüz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-but-bilkent",
    "fullName": "Ayşe But",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+But+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-dikmeer-bilkent",
    "fullName": "Ayşe Dikmeer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Dikmeer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-irem-demir-mammadli-bilkent",
    "fullName": "Ayşe İrem Demir Mammadlı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+İrem+Demir+Mammadlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-kaya-kalem-bilkent",
    "fullName": "Ayşe Kaya Kalem",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Kaya+Kalem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-lafci-bilkent",
    "fullName": "Ayşe Lafçı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Lafçı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-nur-yilmaz-bilkent",
    "fullName": "Ayşe Nur Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Nur+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-nur-sirin-ozcan-bilkent",
    "fullName": "Ayşe Nur Şirin Özcan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Nur+Şirin+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-pinar-titiz-mutlu-bilkent",
    "fullName": "Ayşe Pınar Titiz Mutlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Pınar+Titiz+Mutlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-rumeysa-bedir-bilkent",
    "fullName": "Ayşe Rümeysa Bedir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Rümeysa+Bedir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-secil-kayali-dinc-bilkent",
    "fullName": "Ayşe Seçil Kayalı Dinç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Seçil+Kayalı+Dinç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-yasemin-tezer-tekce-bilkent",
    "fullName": "Ayşe Yasemin Tezer Tekçe",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Yasemin+Tezer+Tekçe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-zorlutuna-bilkent",
    "fullName": "Ayşe Zorlutuna",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Zorlutuna+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ayse-ciftci-bilkent",
    "fullName": "Ayşe Çiftçi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşe+Çiftçi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysegul-aksoy-altinboga-bilkent",
    "fullName": "Ayşegül Aksoy Altınboğa",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşegül+Aksoy+Altınboğa+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysegul-karalezli-bilkent",
    "fullName": "Ayşegül Karalezli",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşegül+Karalezli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysegul-yalcinkaya-iyidal-bilkent",
    "fullName": "Ayşegül Yalçınkaya İyidal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşegül+Yalçınkaya+İyidal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysegul-yorumez-keskin-bilkent",
    "fullName": "Ayşegül Yörümez Keskin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşegül+Yörümez+Keskin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysegul-ozgok-bilkent",
    "fullName": "Ayşegül Özgök",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşegül+Özgök+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "aysen-aksoyek-bilkent",
    "fullName": "Ayşen Aksöyek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ayşen+Aksöyek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "azime-uguz-bilkent",
    "fullName": "Azime Uğuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Azime+Uğuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "asina-pinar-bilkent",
    "fullName": "Aşina Pınar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Aşina+Pınar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bahadir-aytekin-bilkent",
    "fullName": "Bahadır Aytekin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bahadır+Aytekin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bahar-gurlek-demirci-bilkent",
    "fullName": "Bahar Gürlek Demirci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bahar+Gürlek+Demirci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bahar-tekin-tak-bilkent",
    "fullName": "Bahar Tekin Tak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bahar+Tekin+Tak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bahar-ozdemir-ulusoy-bilkent",
    "fullName": "Bahar Özdemir Ulusoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bahar+Özdemir+Ulusoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "banu-demet-ozel-coskun-bilkent",
    "fullName": "Banu Demet Özel Coşkun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Banu+Demet+Özel+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "baran-sarikaya-bilkent",
    "fullName": "Baran Sarıkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Baran+Sarıkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "baris-can-demirdelen-bilkent",
    "fullName": "Barış Can Demirdelen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Barış+Can+Demirdelen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "baris-saylam-bilkent",
    "fullName": "Barış Saylam",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Barış+Saylam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "baris-zulfikaroglu-bilkent",
    "fullName": "Barış Zülfikaroğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Barış+Zülfikaroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "batuhan-bahadir-bilkent",
    "fullName": "Batuhan Bahadır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Batuhan+Bahadır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bayram-birkan-bilir-bilkent",
    "fullName": "Bayram Birkan Bilir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bayram+Birkan+Bilir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bayram-inan-bilkent",
    "fullName": "Bayram İnan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bayram+İnan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "basar-alp-bay-bilkent",
    "fullName": "Başar Alp Bay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Başar+Alp+Bay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bedia-dinc-bilkent",
    "fullName": "Bedia Dinç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bedia+Dinç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "begum-gorgulu-akin-bilkent",
    "fullName": "Begüm Görgülü Akın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Begüm+Görgülü+Akın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "behiye-deniz-kosovali-bilkent",
    "fullName": "Behiye Deniz Kosovalı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Behiye+Deniz+Kosovalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "behic-girgin-bilkent",
    "fullName": "Behiç Girgin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Behiç+Girgin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bekir-bogachan-akkaya-bilkent",
    "fullName": "Bekir Boğaçhan Akkaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bekir+Boğaçhan+Akkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bekir-cakir-bilkent",
    "fullName": "Bekir Çakır",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bekir+Çakır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "belgin-akan-bilkent",
    "fullName": "Belgin Akan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Belgin+Akan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "belgin-coskun-bilkent",
    "fullName": "Belgin Coşkun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Belgin+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "belgit-talay-bilkent",
    "fullName": "Belgit Talay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Belgit+Talay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "belma-yaman-bilkent",
    "fullName": "Belma Yaman",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Belma+Yaman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "belma-ozlem-tural-balsak-bilkent",
    "fullName": "Belma Özlem Tural Balsak",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Belma+Özlem+Tural+Balsak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bengi-arslan-bilkent",
    "fullName": "Bengi Arslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bengi+Arslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bengisu-catli-bilkent",
    "fullName": "Bengisu Çatlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bengisu+Çatlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berkan-armagan-bilkent",
    "fullName": "Berkan Armağan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berkan+Armağan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berkay-yesilyurt-bilkent",
    "fullName": "Berkay Yeşilyurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berkay+Yeşilyurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berna-arli-bilkent",
    "fullName": "Berna Arlı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berna+Arlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berna-okudan-tekin-bilkent",
    "fullName": "Berna Okudan Tekin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berna+Okudan+Tekin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berna-ogmen-bilkent",
    "fullName": "Berna Öğmen",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berna+Öğmen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "berrin-er-bilkent",
    "fullName": "Berrin Er",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Berrin+Er+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "betul-akdal-dolek-bilkent",
    "fullName": "Betül Akdal Dölek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Betül+Akdal+Dölek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "betul-erismis-bilkent",
    "fullName": "Betül Erişmiş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Betül+Erişmiş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "betul-guven-aytac-bilkent",
    "fullName": "Betül Güven Aytaç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Betül+Güven+Aytaç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "beyza-akbulut-bilkent",
    "fullName": "Beyza Akbulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Beyza+Akbulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "beyza-algul-burak-bilkent",
    "fullName": "Beyza Algül Burak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Beyza+Algül+Burak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "beyza-nur-yakisikli-arslan-bilkent",
    "fullName": "Beyza Nur Yakışıklı Arslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Beyza+Nur+Yakışıklı+Arslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bige-sayin-bilkent",
    "fullName": "Bige Sayın",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bige+Sayın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilal-egemen-ciftci-bilkent",
    "fullName": "Bilal Egemen Çiftçi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilal+Egemen+Çiftçi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilfer-ozler-bilkent",
    "fullName": "Bilfer Özler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilfer+Özler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilge-aslan-bilkent",
    "fullName": "Bilge Aslan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilge+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilge-dibeklioglu-bilkent",
    "fullName": "Bilge Dibeklioğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilge+Dibeklioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilge-duran-karaduman-bilkent",
    "fullName": "Bilge Duran Karaduman",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilge+Duran+Karaduman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilge-eris-bilkent",
    "fullName": "Bilge Eriş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilge+Eriş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilge-gozukara-bilkent",
    "fullName": "Bilge Gözükara",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilge+Gözükara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bilgehan-karadayi-bilkent",
    "fullName": "Bilgehan Karadayı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bilgehan+Karadayı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "binhan-kagan-aktas-bilkent",
    "fullName": "Binhan Kağan Aktaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Binhan+Kağan+Aktaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bircan-kayaaslan-bilkent",
    "fullName": "Bircan Kayaaslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bircan+Kayaaslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "birkan-birben-bilkent",
    "fullName": "Birkan Birben",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Birkan+Birben+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "birol-korukluoglu-bilkent",
    "fullName": "Birol Korukluoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Birol+Korukluoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "birsen-doganay-bilkent",
    "fullName": "Birsen Doğanay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Birsen+Doğanay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "birsen-ozdem-bilkent",
    "fullName": "Birsen Özdem",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Birsen+Özdem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "buket-ozdemir-bilkent",
    "fullName": "Buket Özdemir",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Buket+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-akova-bilkent",
    "fullName": "Burak Akova",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Akova+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-aslum-bilkent",
    "fullName": "Burak Aslum",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Aslum+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-bahadir-bilkent",
    "fullName": "Burak Bahadır",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Bahadır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-bilgin-bilkent",
    "fullName": "Burak Bilgin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Bilgin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-can-ozturk-bilkent",
    "fullName": "Burak Can Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Can+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-civelek-bilkent",
    "fullName": "Burak Civelek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Civelek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-furkan-demir-bilkent",
    "fullName": "Burak Furkan Demir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Furkan+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-gecer-bilkent",
    "fullName": "Burak Geçer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Geçer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-hazir-bilkent",
    "fullName": "Burak Hazır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Hazır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-kardesler-bilkent",
    "fullName": "Burak Kardeşler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Kardeşler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-nalbant-bilkent",
    "fullName": "Burak Nalbant",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Nalbant+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-yasar-bilkent",
    "fullName": "Burak Yaşar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Yaşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burak-celik-bilkent",
    "fullName": "Burak Çelik",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burak+Çelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcu-ertuten-bilkent",
    "fullName": "Burcu Ertüten",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burcu+Ertüten+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcu-mecit-demirkan-bilkent",
    "fullName": "Burcu Mecit Demirkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burcu+Mecit+Demirkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcu-saglam-ada-bilkent",
    "fullName": "Burcu Sağlam Ada",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burcu+Sağlam+Ada+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcu-tekgul-bilkent",
    "fullName": "Burcu Tekgül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burcu+Tekgül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcu-ozdemir-bilkent",
    "fullName": "Burcu Özdemir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burcu+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "burcak-polat-bilkent",
    "fullName": "Burçak Polat",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Burçak+Polat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bokebatur-ahmet-rasit-mendi-bilkent",
    "fullName": "Bökebatur Ahmet Raşit Mendi",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bökebatur+Ahmet+Raşit+Mendi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-akinci-bilkent",
    "fullName": "Bülent Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Akıncı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-kocer-bilkent",
    "fullName": "Bülent Koçer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Koçer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-yalcin-bilkent",
    "fullName": "Bülent Yalçın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Yalçın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-comcali-bilkent",
    "fullName": "Bülent Çomçalı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Çomçalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-odemis-bilkent",
    "fullName": "Bülent Ödemiş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Ödemiş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "bulent-ozkurt-bilkent",
    "fullName": "Bülent Özkurt",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Bülent+Özkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "busra-betul-cagir-bilkent",
    "fullName": "Büşra Betül Çağır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Büşra+Betül+Çağır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "busra-efe-bilkent",
    "fullName": "Büşra Efe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Büşra+Efe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "busra-sumeyye-arica-polat-bilkent",
    "fullName": "Büşra Sümeyye Arıca Polat",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Büşra+Sümeyye+Arıca+Polat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "busra-ozcimen-bilkent",
    "fullName": "Büşra Özçimen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Büşra+Özçimen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "busranur-cavdarli-bilkent",
    "fullName": "Büşranur Çavdarlı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Büşranur+Çavdarlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cahide-kahraman-bilkent",
    "fullName": "Cahide Kahraman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cahide+Kahraman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "can-yardimci-bilkent",
    "fullName": "Can Yardımcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Can+Yardımcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "canan-topcuoglu-bilkent",
    "fullName": "Canan Topçuoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Canan+Topçuoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "canan-cam-gonen-bilkent",
    "fullName": "Canan Çam Gönen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Canan+Çam+Gönen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "canan-un-bilkent",
    "fullName": "Canan Ün",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Canan+Ün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "caner-candar-bilkent",
    "fullName": "Caner Candar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Caner+Candar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cansev-sekerler-yildirim-bilkent",
    "fullName": "Cansev Şekerler Yıldırım",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cansev+Şekerler+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cansu-uzunoglu-bilkent",
    "fullName": "Cansu Uzunoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cansu+Uzunoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cavit-ceylan-bilkent",
    "fullName": "Cavit Ceylan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cavit+Ceylan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "celal-alp-vural-bilkent",
    "fullName": "Celal Alp Vural",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Celal+Alp+Vural+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cem-cuneyt-kose-bilkent",
    "fullName": "Cem Cüneyt Köse",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cem+Cüneyt+Köse+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cemal-cavdarli-bilkent",
    "fullName": "Cemal Çavdarlı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cemal+Çavdarlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cemile-bicer-bilkent",
    "fullName": "Cemile Biçer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cemile+Biçer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cemile-peker-bilkent",
    "fullName": "Cemile Peker",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cemile+Peker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cemile-yagmur-akel-bilkent",
    "fullName": "Cemile Yağmur Akel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cemile+Yağmur+Akel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cenk-zeki-fikret-bilkent",
    "fullName": "Cenk Zeki Fikret",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cenk+Zeki+Fikret+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceren-deniz-kapulu-akca-bilkent",
    "fullName": "Ceren Deniz Kapulu Akça",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceren+Deniz+Kapulu+Akça+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceren-kaplankiran-bilkent",
    "fullName": "Ceren Kaplankıran",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceren+Kaplankıran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cevdet-aydin-bilkent",
    "fullName": "Cevdet Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cevdet+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cevdet-serkan-gokkaya-bilkent",
    "fullName": "Cevdet Serkan Gökkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cevdet+Serkan+Gökkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cevher-unsal-bilkent",
    "fullName": "Cevher Ünsal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cevher+Ünsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceyda-baskan-bilkent",
    "fullName": "Ceyda Başkan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceyda+Başkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceyda-oktay-yanik-bilkent",
    "fullName": "Ceyda Oktay Yanık",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceyda+Oktay+Yanık+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceyda-yayla-bilkent",
    "fullName": "Ceyda Yayla",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceyda+Yayla+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceyhun-caglar-bilkent",
    "fullName": "Ceyhun Çağlar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceyhun+Çağlar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ceylan-bal-bilkent",
    "fullName": "Ceylan Bal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ceylan+Bal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cihan-doger-bilkent",
    "fullName": "Cihan Döğer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cihan+Döğer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cihangir-dogu-bilkent",
    "fullName": "Cihangir Doğu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cihangir+Doğu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cuneyt-ozden-bilkent",
    "fullName": "Cüneyt Özden",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Cüneyt+Özden+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "d-deniz-demirseren-bilkent",
    "fullName": "D. Deniz Demirseren",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=D.+Deniz+Demirseren+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "damla-erginturk-acar-bilkent",
    "fullName": "Damla Ergintürk Acar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Damla+Ergintürk+Acar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "davut-kamaci-bilkent",
    "fullName": "Davut Kamacı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Davut+Kamacı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "defne-kalayci-bilkent",
    "fullName": "Defne Kalaycı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Defne+Kalaycı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "demet-bolukbasi-bilkent",
    "fullName": "Demet Bölükbaşı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Demet+Bölükbaşı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "demet-ogdum-bilkent",
    "fullName": "Demet Öğdüm",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Demet+Öğdüm+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "demirhan-orsan-demir-bilkent",
    "fullName": "Demirhan Örsan Demir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Demirhan+Örsan+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "deniz-erdem-bilkent",
    "fullName": "Deniz Erdem",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Deniz+Erdem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "deniz-sozmen-ciliz-bilkent",
    "fullName": "Deniz Sözmen Cılız",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Deniz+Sözmen+Cılız+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "derya-ari-bilkent",
    "fullName": "Derya Arı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Derya+Arı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "derya-gokcinar-bilkent",
    "fullName": "Derya Gökçınar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Derya+Gökçınar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "derya-sarikaya-bilkent",
    "fullName": "Derya Sarıkaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Derya+Sarıkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "derya-tok-bilkent",
    "fullName": "Derya Tok",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Derya+Tok+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "derya-ucar-bilkent",
    "fullName": "Derya Uçar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Derya+Uçar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "devrim-tanil-kurt-bilkent",
    "fullName": "Devrim Tanıl Kurt",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Devrim+Tanıl+Kurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "devrim-tuba-ozcalan-bilkent",
    "fullName": "Devrim Tuba Özcalan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Devrim+Tuba+Özcalan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "didem-ozdemir-bilkent",
    "fullName": "Didem Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Didem+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "didem-sener-dede-bilkent",
    "fullName": "Didem Şener Dede",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Didem+Şener+Dede+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilay-top-ozek-bilkent",
    "fullName": "Dilay Top Özek",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilay+Top+Özek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilek-acar-bilkent",
    "fullName": "Dilek Acar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilek+Acar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilek-dellal-kahramanca-bilkent",
    "fullName": "Dilek Dellal Kahramanca",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilek+Dellal+Kahramanca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilek-gozustun-bilkent",
    "fullName": "Dilek Gözüstün",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilek+Gözüstün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilek-kazanci-bilkent",
    "fullName": "Dilek Kazancı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilek+Kazancı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilek-kececi-bilkent",
    "fullName": "Dilek Keçeci",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilek+Keçeci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilruba-koseoglu-bilkent",
    "fullName": "Dilruba Köseoğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilruba+Köseoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dilsen-hatice-ornek-bilkent",
    "fullName": "Dilşen Hatice Örnek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Dilşen+Hatice+Örnek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "doruk-demirel-bilkent",
    "fullName": "Doruk Demirel",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Doruk+Demirel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dogan-unal-bilkent",
    "fullName": "Doğan Ünal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Doğan+Ünal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dogukan-civelek-bilkent",
    "fullName": "Doğukan Civelek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Doğukan+Civelek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "durmus-ali-ocguder-bilkent",
    "fullName": "Durmuş Ali Öçgüder",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Durmuş+Ali+Öçgüder+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duygu-engez-hanci-bilkent",
    "fullName": "Duygu Engez Hancı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Duygu+Engez+Hancı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duygu-ercan-uzundal-bilkent",
    "fullName": "Duygu Ercan Uzundal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Duygu+Ercan+Uzundal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duygu-kayar-calili-bilkent",
    "fullName": "Duygu Kayar Çalılı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Duygu+Kayar+Çalılı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duygu-kocyigit-burunkaya-bilkent",
    "fullName": "Duygu Koçyiğit Burunkaya",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Duygu+Koçyiğit+Burunkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duygu-yalinbas-yeter-bilkent",
    "fullName": "Duygu Yalınbaş Yeter",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Duygu+Yalınbaş+Yeter+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dondu-iyican-bilkent",
    "fullName": "Döndü İyican",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Döndü+İyican+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "dondu-melek-ulusoy-bilkent",
    "fullName": "Döndü Melek Ulusoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Döndü+Melek+Ulusoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "duriye-ozer-turkay-bilkent",
    "fullName": "Düriye Özer Türkay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Düriye+Özer+Türkay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "e-yavuz-akcaboy-bilkent",
    "fullName": "E. Yavuz Akçaboy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=E.+Yavuz+Akçaboy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-atalar-bilkent",
    "fullName": "Ebru Atalar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Atalar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-aykut-arca-bilkent",
    "fullName": "Ebru Aykut Arca",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Aykut+Arca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-ayozturk-erguven-bilkent",
    "fullName": "Ebru Ayöztürk Ergüven",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Ayöztürk+Ergüven+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-asiret-mutlu-bilkent",
    "fullName": "Ebru Aşiret Mutlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Aşiret+Mutlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-bilge-dirik-bilkent",
    "fullName": "Ebru Bilge Dirik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Bilge+Dirik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-demir-ulgen-bilkent",
    "fullName": "Ebru Demir Ülgen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Demir+Ülgen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-menekse-bilkent",
    "fullName": "Ebru Menekşe",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Menekşe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-okutan-bilkent",
    "fullName": "Ebru Okutan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Okutan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-ugras-bilkent",
    "fullName": "Ebru Uğraş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Uğraş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-unsal-bilkent",
    "fullName": "Ebru Ünsal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Ünsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ebru-sengul-parlak-bilkent",
    "fullName": "Ebru Şengül Parlak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ebru+Şengül+Parlak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ece-ozdemir-zeydanli-bilkent",
    "fullName": "Ece Özdemir Zeydanlı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ece+Özdemir+Zeydanlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ecem-yon-bilkent",
    "fullName": "Ecem Yön",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ecem+Yön+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eda-balci-bilkent",
    "fullName": "Eda Balcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eda+Balcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eda-elverici-bilkent",
    "fullName": "Eda Elverici",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eda+Elverici+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eda-eylemer-mocan-bilkent",
    "fullName": "Eda Eylemer Mocan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eda+Eylemer+Mocan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eda-uysal-aydin-bilkent",
    "fullName": "Eda Uysal Aydın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eda+Uysal+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eda-caliskan-yildirim-bilkent",
    "fullName": "Eda Çalışkan Yıldırım",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eda+Çalışkan+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "edanur-savas-yildirim-bilkent",
    "fullName": "Edanur Savaş Yıldırım",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Edanur+Savaş+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "edip-efkan-gungor-bilkent",
    "fullName": "Edip Efkan Güngör",
    "titlePrefix": "Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Edip+Efkan+Güngör+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "efnan-algin-bilkent",
    "fullName": "Efnan Algın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Efnan+Algın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ekin-yigit-koroglu-bilkent",
    "fullName": "Ekin Yiğit Köroğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ekin+Yiğit+Köroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ekrem-sahan-bilkent",
    "fullName": "Ekrem Şahan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ekrem+Şahan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-coskun-bilkent",
    "fullName": "Elif Coşkun",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-ersoy-callioglu-bilkent",
    "fullName": "Elif Ersoy Çallıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Ersoy+Çallıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-hande-ozcan-cetin-bilkent",
    "fullName": "Elif Hande Özcan Çetin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Hande+Özcan+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-inci-erbahceci-timur-bilkent",
    "fullName": "Elif İnci Erbahçeci Timur",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+İnci+Erbahçeci+Timur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-uzun-ata-bilkent",
    "fullName": "Elif Uzun Ata",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Uzun+Ata+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-ozdemir-bilkent",
    "fullName": "Elif Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elif-sahin-kutuk-bilkent",
    "fullName": "Elif Şahin Kütük",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elif+Şahin+Kütük+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elmas-uysal-bilkent",
    "fullName": "Elmas Uysal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elmas+Uysal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "elvan-evrim-tuna-bilkent",
    "fullName": "Elvan Evrim Tuna",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Elvan+Evrim+Tuna+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emel-isleyen-kaya-bilkent",
    "fullName": "Emel İşleyen Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emel+İşleyen+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emin-altiparmak-bilkent",
    "fullName": "Emin Altıparmak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emin+Altıparmak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emin-emre-kurt-bilkent",
    "fullName": "Emin Emre Kurt",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emin+Emre+Kurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-arguder-bilkent",
    "fullName": "Emine Argüder",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Argüder+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-esra-karaca-bilkent",
    "fullName": "Emine Esra Karaca",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Esra+Karaca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-guldal-bilkent",
    "fullName": "Emine Güldal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Güldal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-kalkan-akcay-bilkent",
    "fullName": "Emine Kalkan Akçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Kalkan+Akçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-karahan-bilkent",
    "fullName": "Emine Karahan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Karahan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-keven-bilkent",
    "fullName": "Emine Keven",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Keven+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-nilgun-zengin-bilkent",
    "fullName": "Emine Nilgün Zengin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Nilgün+Zengin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-tamer-bilkent",
    "fullName": "Emine Tamer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Tamer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-yildiz-ozdemir-bilkent",
    "fullName": "Emine Yıldız Özdemir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Yıldız+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emine-ulku-okumus-bilkent",
    "fullName": "Emine Ülkü Okumuş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emine+Ülkü+Okumuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emir-tugrul-keskin-bilkent",
    "fullName": "Emir Tuğrul Keskin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emir+Tuğrul+Keskin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emir-over-bilkent",
    "fullName": "Emir Över",
    "titlePrefix": "Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emir+Över+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emis-deniz-akbulut-bilkent",
    "fullName": "Emiş Deniz Akbulut",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emiş+Deniz+Akbulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emra-asfuroglu-kalkan-bilkent",
    "fullName": "Emra Asfuroğlu Kalkan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emra+Asfuroğlu+Kalkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emrah-okulu-bilkent",
    "fullName": "Emrah Okulu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emrah+Okulu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emrah-salman-bilkent",
    "fullName": "Emrah Salman",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emrah+Salman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emrah-uguz-bilkent",
    "fullName": "Emrah Uğuz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emrah+Uğuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-alp-bilkent",
    "fullName": "Emre Alp",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Alp+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-demir-benli-bilkent",
    "fullName": "Emre Demir Benli",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Demir+Benli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-kaan-cadir-bilkent",
    "fullName": "Emre Kaan Çadır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Kaan+Çadır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-pakdemirli-bilkent",
    "fullName": "Emre Pakdemirli",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Pakdemirli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-saybasi-bilkent",
    "fullName": "Emre Saybaşı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Saybaşı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-solguntekin-bilkent",
    "fullName": "Emre Solguntekin",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Solguntekin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-uzun-bilkent",
    "fullName": "Emre Uzun",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Uzun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-yilmaz-bilkent",
    "fullName": "Emre Yılmaz",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emre-cankaya-bilkent",
    "fullName": "Emre Çankaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emre+Çankaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "emrim-tunc-bilkent",
    "fullName": "Emrim Tunç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Emrim+Tunç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ender-ornek-bilkent",
    "fullName": "Ender Örnek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ender+Örnek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "enejd-veizi-bilkent",
    "fullName": "Enejd Veizi",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Enejd+Veizi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "enes-kes-bilkent",
    "fullName": "Enes Kes",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Enes+Kes+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "enes-uluyardimci-bilkent",
    "fullName": "Enes Uluyardımcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Enes+Uluyardımcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "engin-cetinkaya-bilkent",
    "fullName": "Engin Çetinkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Engin+Çetinkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "enis-burak-gul-bilkent",
    "fullName": "Enis Burak Gül",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Enis+Burak+Gül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ensar-ozdemir-bilkent",
    "fullName": "Ensar Özdemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ensar+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "enver-kilic-bilkent",
    "fullName": "Enver Kılıç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Enver+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ercan-aydinkarahaliloglu-bilkent",
    "fullName": "Ercan Aydınkarahaliloğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ercan+Aydınkarahaliloğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ercan-bal-bilkent",
    "fullName": "Ercan Bal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ercan+Bal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ercan-yeni-bilkent",
    "fullName": "Ercan Yeni",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ercan+Yeni+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdal-birol-bostanci-bilkent",
    "fullName": "Erdal Birol Bostancı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdal+Birol+Bostancı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdal-yekeler-bilkent",
    "fullName": "Erdal Yekeler",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdal+Yekeler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdal-ozcan-bilkent",
    "fullName": "Erdal Özcan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdal+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdem-koc-bilkent",
    "fullName": "Erdem Koç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdem+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdinc-acar-bilkent",
    "fullName": "Erdinç Acar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdinç+Acar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdinc-cetinkaya-bilkent",
    "fullName": "Erdinç Çetinkaya",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdinç+Çetinkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erdogan-deniz-bilkent",
    "fullName": "Erdoğan Deniz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erdoğan+Deniz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eren-yilmaz-bilkent",
    "fullName": "Eren Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eren+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ergun-daglioglu-bilkent",
    "fullName": "Ergün Dağlıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ergün+Dağlıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erhan-simsek-bilkent",
    "fullName": "Erhan Şimşek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erhan+Şimşek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erman-ceyhan-bilkent",
    "fullName": "Erman Ceyhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erman+Ceyhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erol-aksoy-bilkent",
    "fullName": "Erol Aksoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erol+Aksoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erol-goka-bilkent",
    "fullName": "Erol Göka",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erol+Göka+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erol-koc-bilkent",
    "fullName": "Erol Koç",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erol+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erol-piskin-bilkent",
    "fullName": "Erol Pişkin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erol+Pişkin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "erol-sener-bilkent",
    "fullName": "Erol Şener",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Erol+Şener+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ersan-ozaslan-bilkent",
    "fullName": "Ersan Özaslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ersan+Özaslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ersin-gurkan-dumlu-bilkent",
    "fullName": "Ersin Gürkan Dumlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ersin+Gürkan+Dumlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ersin-kasim-ulusoy-bilkent",
    "fullName": "Ersin Kasım Ulusoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ersin+Kasım+Ulusoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ersin-kilic-bilkent",
    "fullName": "Ersin Kılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ersin+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ertugrul-kayacetin-bilkent",
    "fullName": "Ertuğrul Kayaçetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ertuğrul+Kayaçetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esen-ozmen-bilkent",
    "fullName": "Esen Özmen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esen+Özmen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esin-olcucuoglu-bilkent",
    "fullName": "Esin Ölçücüoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esin+Ölçücüoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esma-andac-uzdogan-bilkent",
    "fullName": "Esma Andaç Uzdoğan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esma+Andaç+Uzdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esma-ayranci-bilkent",
    "fullName": "Esma Ayrancı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esma+Ayrancı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esma-meltem-simsek-bilkent",
    "fullName": "Esma Meltem Şimşek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esma+Meltem+Şimşek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esma-tezer-bilkent",
    "fullName": "Esma Tezer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esma+Tezer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esmehan-akpinar-bilkent",
    "fullName": "Esmehan Akpınar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esmehan+Akpınar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esmehan-birdal-bilkent",
    "fullName": "Esmehan Birdal",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esmehan+Birdal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-dag-seker-bilkent",
    "fullName": "Esra Dağ Şeker",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Dağ+Şeker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-demir-unal-bilkent",
    "fullName": "Esra Demir Ünal",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Demir+Ünal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-firat-oguz-bilkent",
    "fullName": "Esra Fırat Oğuz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Fırat+Oğuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-iscanli-bilkent",
    "fullName": "Esra İşcanlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+İşcanlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-karakus-bilkent",
    "fullName": "Esra Karakuş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Karakuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-kayacan-erdogan-bilkent",
    "fullName": "Esra Kayacan Erdoğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Kayacan+Erdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-kiratli-nalbant-bilkent",
    "fullName": "Esra Kıratlı Nalbant",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Kıratlı+Nalbant+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-ucaryilmaz-ozhamam-bilkent",
    "fullName": "Esra Uçaryılmaz Özhamam",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Uçaryılmaz+Özhamam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-yakisik-cakir-bilkent",
    "fullName": "Esra Yakışık Çakır",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Yakışık+Çakır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-civgin-bilkent",
    "fullName": "Esra Çıvgın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Çıvgın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-ozayar-bilkent",
    "fullName": "Esra Özayar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Özayar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-sengul-bilkent",
    "fullName": "Esra Şengül",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Şengül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esra-sukran-cakar-bilkent",
    "fullName": "Esra Şükran Çakar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esra+Şükran+Çakar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esragul-akinci-bilkent",
    "fullName": "Esragül Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Esragül+Akıncı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "evren-selma-evirgen-bilkent",
    "fullName": "Evren Selma Evirgen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Evren+Selma+Evirgen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eyup-horasanli-bilkent",
    "fullName": "Eyüp Horasanlı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eyüp+Horasanlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eyup-kahveci-bilkent",
    "fullName": "Eyüp Kahveci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eyüp+Kahveci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "eyup-selvi-bilkent",
    "fullName": "Eyüp Selvi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eyüp+Selvi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ezgi-coskun-yenigun-bilkent",
    "fullName": "Ezgi Coşkun Yenigün",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ezgi+Coşkun+Yenigün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ezgi-erkilic-bilkent",
    "fullName": "Ezgi Erkılıç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ezgi+Erkılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "esay-kiran-yenice-bilkent",
    "fullName": "Eşay Kıran Yenice",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Eşay+Kıran+Yenice+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fadime-gullu-haydar-bilkent",
    "fullName": "Fadime Güllü Haydar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fadime+Güllü+Haydar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fadime-kilinc-bilkent",
    "fullName": "Fadime Kılınç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fadime+Kılınç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fahriye-tugba-kos-bilkent",
    "fullName": "Fahriye Tuğba Köş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fahriye+Tuğba+Köş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "faruk-ince-bilkent",
    "fullName": "Faruk İnce",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Faruk+İnce+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-akdemir-bilkent",
    "fullName": "Fatih Akdemir",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+Akdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-alagoz-bilkent",
    "fullName": "Fatih Alagöz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+Alagöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-dede-bilkent",
    "fullName": "Fatih Dede",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+Dede+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-inci-bilkent",
    "fullName": "Fatih İnci",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+İnci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-serdar-baykal-bilkent",
    "fullName": "Fatih Serdar Baykal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+Serdar+Baykal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatih-segmen-bilkent",
    "fullName": "Fatih Seğmen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatih+Seğmen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-arzu-gortan-bilkent",
    "fullName": "Fatma Arzu Görtan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Arzu+Görtan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-ayca-edis-ozdemir-bilkent",
    "fullName": "Fatma Ayça Edis Özdemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Ayça+Edis+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-ebru-akin-bilkent",
    "fullName": "Fatma Ebru Akın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Ebru+Akın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-eser-bilkent",
    "fullName": "Fatma Eser",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Eser+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-gul-buyukbayraktar-imamoglu-bilkent",
    "fullName": "Fatma Gül Büyükbayraktar İmamoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Gül+Büyükbayraktar+İmamoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-gulay-korukluoglu-bilkent",
    "fullName": "Fatma Gülay Korukluoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Gülay+Korukluoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-kavak-akelma-bilkent",
    "fullName": "Fatma Kavak Akelma",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Kavak+Akelma+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-meric-yilmaz-bilkent",
    "fullName": "Fatma Meriç Yılmaz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Meriç+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-sema-akkan-aydogmus-bilkent",
    "fullName": "Fatma Sema Akkan Aydoğmuş",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Sema+Akkan+Aydoğmuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-temurtas-oner-bilkent",
    "fullName": "Fatma Temurtaş Öner",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Temurtaş+Öner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatma-cakir-bilkent",
    "fullName": "Fatma Çakır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatma+Çakır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fatmanur-celik-basaran-bilkent",
    "fullName": "Fatmanur Çelik Başaran",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fatmanur+Çelik+Başaran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fazilet-erbay-bilkent",
    "fullName": "Fazilet Erbay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fazilet+Erbay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fazli-erdogan-bilkent",
    "fullName": "Fazlı Erdoğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fazlı+Erdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ferda-can-bilkent",
    "fullName": "Ferda Can",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ferda+Can+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ferhat-gurkan-aslan-bilkent",
    "fullName": "Ferhat Gürkan Aslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ferhat+Gürkan+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feride-alaca-bilkent",
    "fullName": "Feride Alaca",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feride+Alaca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feride-kural-rahatli-bilkent",
    "fullName": "Feride Kural Rahatlı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feride+Kural+Rahatlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feride-pinar-altay-bilkent",
    "fullName": "Feride Pınar Altay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feride+Pınar+Altay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feride-coksu-bilkent",
    "fullName": "Feride Çoksu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feride+Çoksu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ferit-kasimzade-bilkent",
    "fullName": "Ferit Kasımzade",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ferit+Kasımzade+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feryal-korkmaz-akcay-bilkent",
    "fullName": "Feryal Korkmaz Akçay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feryal+Korkmaz+Akçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fevziye-ilknur-kayali-bilkent",
    "fullName": "Fevziye İlknur Kayalı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fevziye+İlknur+Kayalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "feyza-sever-bilkent",
    "fullName": "Feyza Sever",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Feyza+Sever+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "figen-erkus-bilkent",
    "fullName": "Figen Erkuş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Figen+Erkuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "figen-gunes-bilkent",
    "fullName": "Figen Güneş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Figen+Güneş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "figen-tokoglu-bilkent",
    "fullName": "Figen Tokoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Figen+Tokoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "figen-turen-bilkent",
    "fullName": "Figen Türen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Figen+Türen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fikriye-kalkan-bilkent",
    "fullName": "Fikriye Kalkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fikriye+Kalkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "filiz-demirel-bilkent",
    "fullName": "Filiz Demirel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Filiz+Demirel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "filiz-kaya-bilkent",
    "fullName": "Filiz Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Filiz+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "filiz-koc-bilkent",
    "fullName": "Filiz Koç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Filiz+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "firdevs-aysenur-ekizler-bilkent",
    "fullName": "Firdevs Ayşenur Ekizler",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Firdevs+Ayşenur+Ekizler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "funda-ceran-bilkent",
    "fullName": "Funda Ceran",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Funda+Ceran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "funda-erduran-bilkent",
    "fullName": "Funda Erduran",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Funda+Erduran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "funda-eren-bilkent",
    "fullName": "Funda Eren",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Funda+Eren+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "furkan-savas-bilkent",
    "fullName": "Furkan Savaş",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Furkan+Savaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "furkan-temizayak-bilkent",
    "fullName": "Furkan Temizayak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Furkan+Temizayak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "furkan-yildirim-bilkent",
    "fullName": "Furkan Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Furkan+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "fusun-catar-kirca-bilkent",
    "fullName": "Füsun Çatar Kırca",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Füsun+Çatar+Kırca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "firat-caglar-budak-bilkent",
    "fullName": "Fırat Çağlar Budak",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fırat+Çağlar+Budak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "firat-ozcan-bilkent",
    "fullName": "Fırat Özcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fırat+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "firathan-sarialtin-bilkent",
    "fullName": "Fırathan Sarıaltın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Fırathan+Sarıaltın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gamze-dam-bilkent",
    "fullName": "Gamze Dam",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gamze+Dam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gamze-gok-bilkent",
    "fullName": "Gamze Gök",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gamze+Gök+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gamze-kilicarslan-bilkent",
    "fullName": "Gamze Kılıçarslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gamze+Kılıçarslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "garip-altintas-bilkent",
    "fullName": "Garip Altıntaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Garip+Altıntaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "giray-sahin-bilkent",
    "fullName": "Giray Şahin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Giray+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gizem-gunes-bilkent",
    "fullName": "Gizem Güneş",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gizem+Güneş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gizem-toker-bilkent",
    "fullName": "Gizem Toker",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gizem+Toker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gonca-altinisik-inan-bilkent",
    "fullName": "Gonca Altınışık İnan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gonca+Altınışık+İnan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokay-deniz-bilkent",
    "fullName": "Gökay Deniz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökay+Deniz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokcen-akdogan-bilkent",
    "fullName": "Gökcen Akdoğan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökcen+Akdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-akkurt-bilkent",
    "fullName": "Gökhan Akkurt",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Akkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-atik-bilkent",
    "fullName": "Gökhan Atik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Atik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-erdem-bilkent",
    "fullName": "Gökhan Erdem",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Erdem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-lafci-bilkent",
    "fullName": "Gökhan Lafçı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Lafçı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-ucar-bilkent",
    "fullName": "Gökhan Uçar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Uçar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-yalciner-bilkent",
    "fullName": "Gökhan Yalçıner",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Yalçıner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokhan-cicek-bilkent",
    "fullName": "Gökhan Çiçek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökhan+Çiçek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "goknur-alver-bilkent",
    "fullName": "Göknur Alver",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Göknur+Alver+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "goknur-kalkan-bilkent",
    "fullName": "Göknur Kalkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Göknur+Kalkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "goktan-askin-bilkent",
    "fullName": "Göktan Aşkın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Göktan+Aşkın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokturk-karatas-bilkent",
    "fullName": "Göktürk Karataş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Göktürk+Karataş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokce-selcuk-sert-bilkent",
    "fullName": "Gökçe Selçuk Sert",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökçe+Selçuk+Sert+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokcen-nailer-ertunc-bilkent",
    "fullName": "Gökçen Nailer Ertunç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökçen+Nailer+Ertunç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gokcer-ugur-bilkent",
    "fullName": "Gökçer Uğur",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gökçer+Uğur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gonul-vural-bilkent",
    "fullName": "Gönül Vural",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gönül+Vural+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gorkem-karakas-ugurlu-bilkent",
    "fullName": "Görkem Karakaş Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Görkem+Karakaş+Uğurlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gorkem-soylu-bilkent",
    "fullName": "Görkem Soylu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Görkem+Soylu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gorkem-tutal-gursoy-bilkent",
    "fullName": "Görkem Tutal Gürsoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Görkem+Tutal+Gürsoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gozde-ertunc-bilkent",
    "fullName": "Gözde Ertunç",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gözde+Ertunç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gul-meral-kocabeyoglu-bilkent",
    "fullName": "Gül Meral Kocabeyoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gül+Meral+Kocabeyoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gul-yuksel-bilkent",
    "fullName": "Gül Yüksel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gül+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulay-gencer-bilkent",
    "fullName": "Gülay Gençer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülay+Gençer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulay-gulec-ceylan-bilkent",
    "fullName": "Gülay Güleç Ceylan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülay+Güleç+Ceylan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulay-yalcin-yilmaz-bilkent",
    "fullName": "Gülay Yalçın Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülay+Yalçın+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulden-aydog-bilkent",
    "fullName": "Gülden Aydoğ",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülden+Aydoğ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "guler-inonu-bilkent",
    "fullName": "Güler İnönü",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Güler+İnönü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulhan-aksoy-sarac-bilkent",
    "fullName": "Gülhan Aksoy Saraç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülhan+Aksoy+Saraç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsen-bulduk-bilkent",
    "fullName": "Gülsen Bulduk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsen+Bulduk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsen-yilmaz-bilkent",
    "fullName": "Gülsen Yılmaz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsen+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsum-karaahmetli-bilkent",
    "fullName": "Gülsüm Karaahmetli",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsüm+Karaahmetli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsum-kubra-bahadir-bilkent",
    "fullName": "Gülsüm Kübra Bahadır",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsüm+Kübra+Bahadır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsum-kilickap-bilkent",
    "fullName": "Gülsüm Kılıçkap",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsüm+Kılıçkap+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsum-ozet-bilkent",
    "fullName": "Gülsüm Özet",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülsüm+Özet+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gultekin-pekcan-bilkent",
    "fullName": "Gültekin Pekcan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gültekin+Pekcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulten-korkmaz-bilkent",
    "fullName": "Gülten Korkmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülten+Korkmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulten-kiyak-bilkent",
    "fullName": "Gülten Kıyak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülten+Kıyak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulcin-babaoglu-bilkent",
    "fullName": "Gülçin Babaoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülçin+Babaoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsah-bayram-ilikan-bilkent",
    "fullName": "Gülşah Bayram Ilıkan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülşah+Bayram+Ilıkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gulsen-alev-alonay-bilkent",
    "fullName": "Gülşen Alev Alonay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gülşen+Alev+Alonay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gunes-eken-bilkent",
    "fullName": "Güneş Eken",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Güneş+Eken+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "guray-alp-bilkent",
    "fullName": "Güray Alp",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Güray+Alp+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "guray-koc-bilkent",
    "fullName": "Güray Koç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Güray+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gurdal-orhan-bilkent",
    "fullName": "Gürdal Orhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gürdal+Orhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "gurel-nessar-bilkent",
    "fullName": "Gürel Neşşar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gürel+Neşşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "giyas-ayberk-bilkent",
    "fullName": "Gıyas Ayberk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Gıyas+Ayberk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "habibe-hezer-bilkent",
    "fullName": "Habibe Hezer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Habibe+Hezer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "habibe-kafes-bilkent",
    "fullName": "Habibe Kafes",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Habibe+Kafes+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "haci-ahmet-kasapkara-bilkent",
    "fullName": "Hacı Ahmet Kasapkara",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hacı+Ahmet+Kasapkara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "haci-huseyin-dere-bilkent",
    "fullName": "Hacı Hüseyin Dere",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hacı+Hüseyin+Dere+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hafize-aktas-bilkent",
    "fullName": "Hafize Aktaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hafize+Aktaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hafize-corut-guzel-bilkent",
    "fullName": "Hafize Corut Güzel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hafize+Corut+Güzel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hakan-atas-bilkent",
    "fullName": "Hakan Ataş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hakan+Ataş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hakan-babaoglu-bilkent",
    "fullName": "Hakan Babaoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hakan+Babaoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hakan-kosku-bilkent",
    "fullName": "Hakan Kosku",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hakan+Kosku+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hakan-comakli-bilkent",
    "fullName": "Hakan Çomaklı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hakan+Çomaklı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hale-elif-akmese-bilkent",
    "fullName": "Hale Elif Akmeşe",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hale+Elif+Akmeşe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halide-aslaner-bilkent",
    "fullName": "Halide Aslaner",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halide+Aslaner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halide-ceyhan-bilkent",
    "fullName": "Halide Ceyhan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halide+Ceyhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halil-arslan-bilkent",
    "fullName": "Halil Arslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halil+Arslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halil-islamoglu-bilkent",
    "fullName": "Halil İslamoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halil+İslamoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halil-kul-bilkent",
    "fullName": "Halil Kul",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halil+Kul+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halime-araz-bilkent",
    "fullName": "Halime Araz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halime+Araz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "halis-emre-ciftci-bilkent",
    "fullName": "Halis Emre Çiftçi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Halis+Emre+Çiftçi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "haluk-goktug-altinok-bilkent",
    "fullName": "Haluk Göktuğ Altınok",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Haluk+Göktuğ+Altınok+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "haluk-sayan-bilkent",
    "fullName": "Haluk Sayan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Haluk+Sayan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hamza-bozkurt-bilkent",
    "fullName": "Hamza Bozkurt",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hamza+Bozkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "handan-gulec-bilkent",
    "fullName": "Handan Güleç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Handan+Güleç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hande-selvi-oztorun-bilkent",
    "fullName": "Hande Selvi Öztorun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hande+Selvi+Öztorun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hanife-tuba-akcam-bilkent",
    "fullName": "Hanife Tuba Akçam",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hanife+Tuba+Akçam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "harun-mikci-bilkent",
    "fullName": "Harun Mıkcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Harun+Mıkcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-ali-durmaz-bilkent",
    "fullName": "Hasan Ali Durmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Ali+Durmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-bayindir-bilkent",
    "fullName": "Hasan Bayındır",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Bayındır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-cemsultan-misirlioglu-bilkent",
    "fullName": "Hasan Cemsultan Mısırlıoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Cemsultan+Mısırlıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-dirik-bilkent",
    "fullName": "Hasan Dirik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Dirik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-kaya-bilkent",
    "fullName": "Hasan Kaya",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-murat-ergani-bilkent",
    "fullName": "Hasan Murat Ergani",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Murat+Ergani+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-oktay-emir-bilkent",
    "fullName": "Hasan Oktay Emir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Oktay+Emir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hasan-tankut-koseoglu-bilkent",
    "fullName": "Hasan Tankut Köseoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hasan+Tankut+Köseoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-bolek-bilkent",
    "fullName": "Hatice Bölek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Bölek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-canan-hasanoglu-bilkent",
    "fullName": "Hatice Canan Hasanoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Canan+Hasanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-ecem-konak-bilkent",
    "fullName": "Hatice Ecem Konak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Ecem+Konak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-gul-hatipoglu-cetin-bilkent",
    "fullName": "Hatice Gül Hatipoğlu Çetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Gül+Hatipoğlu+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-kozluca-bilkent",
    "fullName": "Hatice Kozluca",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Kozluca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-kilic-bilkent",
    "fullName": "Hatice Kılıç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-rahmet-guner-bilkent",
    "fullName": "Hatice Rahmet Güner",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Rahmet+Güner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-selcuk-bilkent",
    "fullName": "Hatice Selçuk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Selçuk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-turgut-sahin-bilkent",
    "fullName": "Hatice Turgut Şahin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Turgut+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-yuksel-bilkent",
    "fullName": "Hatice Yüksel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hatice-caglar-bilkent",
    "fullName": "Hatice Çağlar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hatice+Çağlar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "havva-beyaz-bilkent",
    "fullName": "Havva Beyaz",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Havva+Beyaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "havva-esra-uyar-turkyilmaz-bilkent",
    "fullName": "Havva Esra Uyar Türkyılmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Havva+Esra+Uyar+Türkyılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hayrettin-levent-mavioglu-bilkent",
    "fullName": "Hayrettin Levent Mavioğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hayrettin+Levent+Mavioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hayriye-cankar-dal-bilkent",
    "fullName": "Hayriye Cankar Dal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hayriye+Cankar+Dal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hayriye-tatli-dogan-bilkent",
    "fullName": "Hayriye Tatlı Doğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hayriye+Tatlı+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hesna-bektas-bilkent",
    "fullName": "Hesna Bektaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hesna+Bektaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hija-yazicioglu-bilkent",
    "fullName": "Hija Yazıcıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hija+Yazıcıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hilal-ahsen-bilkent",
    "fullName": "Hilal Ahsen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hilal+Ahsen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hilal-balta-bilkent",
    "fullName": "Hilal Balta",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hilal+Balta+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hilal-bolukbasi-bilkent",
    "fullName": "Hilal Bölükbaşı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hilal+Bölükbaşı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hilal-karakas-bilkent",
    "fullName": "Hilal Karakaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hilal+Karakaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huban-sibel-orhun-bilkent",
    "fullName": "Huban Sibel Orhun",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Huban+Sibel+Orhun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huriye-bilge-tuncer-bilkent",
    "fullName": "Huriye Bilge Tuncer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Huriye+Bilge+Tuncer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-deniz-misir-bilkent",
    "fullName": "Hülya Deniz Mısır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Deniz+Mısır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-gundogdu-bilkent",
    "fullName": "Hülya Gündoğdu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Gündoğdu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-guvenc-bilkent",
    "fullName": "Hülya Güvenç",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Güvenç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-kasikara-bilkent",
    "fullName": "Hülya Kaşıkara",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Kaşıkara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-uflaz-bilkent",
    "fullName": "Hülya Uflaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Uflaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-yigit-bilkent",
    "fullName": "Hülya Yiğit",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Yiğit+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-celenk-erguden-bilkent",
    "fullName": "Hülya Çelenk Ergüden",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Çelenk+Ergüden+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hulya-cicekcioglu-bilkent",
    "fullName": "Hülya Çiçekçioğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hülya+Çiçekçioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "hurrem-bodur-bilkent",
    "fullName": "Hürrem Bodur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hürrem+Bodur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-bayram-bilkent",
    "fullName": "Hüseyin Bayram",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Bayram+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-berkem-bilkent",
    "fullName": "Hüseyin Berkem",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Berkem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-furkan-ozturk-bilkent",
    "fullName": "Hüseyin Furkan Öztürk",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Furkan+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-gencer-bilkent",
    "fullName": "Hüseyin Gencer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Gencer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-camli-bilkent",
    "fullName": "Hüseyin Çamlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Çamlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-cetin-bilkent",
    "fullName": "Hüseyin Çetin",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "huseyin-oren-bilkent",
    "fullName": "Hüseyin Ören",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüseyin+Ören+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "husniye-baser-bilkent",
    "fullName": "Hüsniye Başer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Hüsniye+Başer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "isil-karabeyoglu-bilkent",
    "fullName": "Işıl Karabeyoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Işıl+Karabeyoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "isil-ozkocak-turan-bilkent",
    "fullName": "Işıl Özkoçak Turan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Işıl+Özkoçak+Turan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ibrahim-alper-yavuz-bilkent",
    "fullName": "İbrahim Alper Yavuz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İbrahim+Alper+Yavuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ibrahim-bozkurt-bilkent",
    "fullName": "İbrahim Bozkurt",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İbrahim+Bozkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ibrahim-emre-ozdemir-bilkent",
    "fullName": "İbrahim Emre Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İbrahim+Emre+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ibrahim-kasirga-bilkent",
    "fullName": "İbrahim Kasırga",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İbrahim+Kasırga+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ibrahim-kilinc-bilkent",
    "fullName": "İbrahim Kılınç",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İbrahim+Kılınç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "iclal-hocanli-bilkent",
    "fullName": "İclal Hocanlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İclal+Hocanlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "idris-ozturk-bilkent",
    "fullName": "İdris Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İdris+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ihsan-ates-bilkent",
    "fullName": "İhsan Ateş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İhsan+Ateş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ihsan-tuncer-okay-bilkent",
    "fullName": "İhsan Tuncer Okay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İhsan+Tuncer+Okay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ikbal-ovali-erdogdu-bilkent",
    "fullName": "İkbal Ovalı Erdoğdu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İkbal+Ovalı+Erdoğdu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ilhami-yuksel-bilkent",
    "fullName": "İlhami Yüksel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İlhami+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ilkem-acar-kaya-bilkent",
    "fullName": "İlkem Acar Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İlkem+Acar+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ilknur-gunaydin-bilkent",
    "fullName": "İlknur Günaydın",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İlknur+Günaydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ilknur-celik-bilkent",
    "fullName": "İlknur Çelik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İlknur+Çelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ilyas-tenlik-bilkent",
    "fullName": "İlyas Tenlik",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İlyas+Tenlik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "imdat-dilek-bilkent",
    "fullName": "İmdat Dilek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İmdat+Dilek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "imran-hasanoglu-bilkent",
    "fullName": "İmran Hasanoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İmran+Hasanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "inci-asli-atar-bilkent",
    "fullName": "İnci Aslı Atar",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İnci+Aslı+Atar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "inci-mulkem-simsek-bilkent",
    "fullName": "İnci Mülkem Şimşek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İnci+Mülkem+Şimşek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ipek-pinar-aral-bilkent",
    "fullName": "İpek Pınar Aral",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İpek+Pınar+Aral+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "irem-eroglu-sari-bilkent",
    "fullName": "İrem Eroğlu Sarı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İrem+Eroğlu+Sarı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "irem-saricanbaz-bilkent",
    "fullName": "İrem Sarıcanbaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İrem+Sarıcanbaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "irem-tumkaya-kilinc-bilkent",
    "fullName": "İrem Tümkaya Kılınç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İrem+Tümkaya+Kılınç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "irem-serifoglu-bilkent",
    "fullName": "İrem Şerifoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İrem+Şerifoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "irep-karatas-eray-bilkent",
    "fullName": "İrep Karataş Eray",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İrep+Karataş+Eray+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ismail-aytac-bilkent",
    "fullName": "İsmail Aytaç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İsmail+Aytaç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ismail-dogan-bilkent",
    "fullName": "İsmail Doğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İsmail+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ismail-kasim-bilkent",
    "fullName": "İsmail Kasım",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İsmail+Kasım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "izzet-bingol-bilkent",
    "fullName": "İzzet Bingöl",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İzzet+Bingöl+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "izzet-selcuk-parlak-bilkent",
    "fullName": "İzzet Selçuk Parlak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=İzzet+Selçuk+Parlak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kaan-can-bilkent",
    "fullName": "Kaan Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kaan+Can+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kadir-acun-bilkent",
    "fullName": "Kadir Acun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kadir+Acun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kadir-sinasi-bulut-bilkent",
    "fullName": "Kadir Şinasi Bulut",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kadir+Şinasi+Bulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kadriye-kahveci-bilkent",
    "fullName": "Kadriye Kahveci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kadriye+Kahveci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kamil-muftuoglu-bilkent",
    "fullName": "Kamil Müftüoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kamil+Müftüoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kamile-silay-bilkent",
    "fullName": "Kamile Sılay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kamile+Sılay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kamuran-kalkan-bilkent",
    "fullName": "Kamuran Kalkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kamuran+Kalkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kasim-kilicarslan-bilkent",
    "fullName": "Kasım Kılıçarslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kasım+Kılıçarslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kazim-bozdemir-bilkent",
    "fullName": "Kazım Bozdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kazım+Bozdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kazim-ceviz-bilkent",
    "fullName": "Kazım Ceviz",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kazım+Ceviz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kazim-cihan-can-bilkent",
    "fullName": "Kazım Cihan Can",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kazım+Cihan+Can+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kazim-onur-unal-bilkent",
    "fullName": "Kazım Onur Ünal",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kazım+Onur+Ünal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kemal-ener-bilkent",
    "fullName": "Kemal Ener",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kemal+Ener+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kemal-esref-erdogan-bilkent",
    "fullName": "Kemal Eşref Erdoğan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kemal+Eşref+Erdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kemal-zorlu-bilkent",
    "fullName": "Kemal Zorlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kemal+Zorlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kerem-deryal-bilkent",
    "fullName": "Kerem Deryal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kerem+Deryal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kerem-kenarli-bilkent",
    "fullName": "Kerem Kenarlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kerem+Kenarlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kerem-ozbek-bilkent",
    "fullName": "Kerem Özbek",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kerem+Özbek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kevser-gerceker-bilkent",
    "fullName": "Kevser Gerçeker",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kevser+Gerçeker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kevser-gulcihan-balci-bilkent",
    "fullName": "Kevser Gülcihan Balcı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kevser+Gülcihan+Balcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kevser-orhan-bilkent",
    "fullName": "Kevser Orhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kevser+Orhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "koray-demirtas-bilkent",
    "fullName": "Koray Demirtaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Koray+Demirtaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "koray-gul-bilkent",
    "fullName": "Koray Gül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Koray+Gül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-ceylanoglu-bilkent",
    "fullName": "Kübra Ceylanoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Ceylanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-durmus-demirel-bilkent",
    "fullName": "Kübra Durmuş Demirel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Durmuş+Demirel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-gungor-bilkent",
    "fullName": "Kübra Güngör",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Güngör+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-katipoglu-bilkent",
    "fullName": "Kübra Katipoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Katipoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-koken-bilkent",
    "fullName": "Kübra Köken",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Köken+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kubra-kilic-bilkent",
    "fullName": "Kübra Kılıç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kübra+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "kursat-sen-bilkent",
    "fullName": "Kürşat Şen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Kürşat+Şen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "lale-damgaci-bilkent",
    "fullName": "Lale Damgacı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Lale+Damgacı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "laser-sanal-bilkent",
    "fullName": "Laser Şanal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Laser+Şanal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "leman-gunbey-karabekmez-bilkent",
    "fullName": "Leman Günbey Karabekmez",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Leman+Günbey+Karabekmez+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "levent-ozturk-bilkent",
    "fullName": "Levent Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Levent+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "lutfi-can-cigirgan-bilkent",
    "fullName": "Lütfi Can Çığırgan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Lütfi+Can+Çığırgan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "m-i-safa-kapicioglu-bilkent",
    "fullName": "M. İ. Safa Kapıcıoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=M.+İ.+Safa+Kapıcıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "m-seda-bayrak-durmaz-bilkent",
    "fullName": "M. Seda Bayrak Durmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=M.+Seda+Bayrak+Durmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-asfuroglu-bilkent",
    "fullName": "Mahmut Asfuroğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Asfuroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-acikel-bilkent",
    "fullName": "Mahmut Açıkel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Açıkel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-koc-bilkent",
    "fullName": "Mahmut Koç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-onur-seymen-bilkent",
    "fullName": "Mahmut Onur Seymen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Onur+Seymen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-tamel-bilkent",
    "fullName": "Mahmut Tamel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Tamel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-ugurlu-bilkent",
    "fullName": "Mahmut Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Uğurlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mahmut-yuksel-bilkent",
    "fullName": "Mahmut Yüksel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mahmut+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-akif-erdol-bilkent",
    "fullName": "Mehmet Akif Erdöl",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Akif+Erdöl+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-akif-parlar-bilkent",
    "fullName": "Mehmet Akif Parlar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Akif+Parlar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ali-nahit-sendur-bilkent",
    "fullName": "Mehmet Ali Nahit Şendur",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Ali+Nahit+Şendur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ali-cetin-bilkent",
    "fullName": "Mehmet Ali Çetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Ali+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-alper-cinar-bilkent",
    "fullName": "Mehmet Alper Çınar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Alper+Çınar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-burak-bagci-bilkent",
    "fullName": "Mehmet Burak Bağcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Burak+Bağcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-erdogan-bilkent",
    "fullName": "Mehmet Erdoğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Erdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-eren-yuksel-bilkent",
    "fullName": "Mehmet Eren Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Eren+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-fatih-alpdemir-bilkent",
    "fullName": "Mehmet Fatih Alpdemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Fatih+Alpdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-fatih-avsar-bilkent",
    "fullName": "Mehmet Fatih Avşar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Fatih+Avşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-furkan-sahin-bilkent",
    "fullName": "Mehmet Furkan Şahin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Furkan+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-gumus-bilkent",
    "fullName": "Mehmet Gümüş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Gümüş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ileri-bilkent",
    "fullName": "Mehmet İleri",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+İleri+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ilker-yon-bilkent",
    "fullName": "Mehmet İlker Yön",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+İlker+Yön+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-keskek-bilkent",
    "fullName": "Mehmet Keşkek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Keşkek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-koray-gursel-bilkent",
    "fullName": "Mehmet Koray Gürsel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Koray+Gürsel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-murat-yigitbasi-bilkent",
    "fullName": "Mehmet Murat Yiğitbaşı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Murat+Yiğitbaşı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-serkan-cetin-bilkent",
    "fullName": "Mehmet Serkan Çetin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Serkan+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-sezgin-pepeler-bilkent",
    "fullName": "Mehmet Sezgin Pepeler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Sezgin+Pepeler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-sonmez-bilkent",
    "fullName": "Mehmet Sönmez",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Sönmez+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-timur-selcuk-bilkent",
    "fullName": "Mehmet Timur Selçuk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Timur+Selçuk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-yurdakul-bilkent",
    "fullName": "Mehmet Yurdakul",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Yurdakul+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-cakmak-bilkent",
    "fullName": "Mehmet Çakmak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Çakmak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-onen-bilkent",
    "fullName": "Mehmet Önen",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Önen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ozer-bilkent",
    "fullName": "Mehmet Özer",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Özer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-ozgur-ozates-bilkent",
    "fullName": "Mehmet Özgür Özateş",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Özgür+Özateş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehmet-sahap-bilkent",
    "fullName": "Mehmet Şahap",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehmet+Şahap+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehtap-aydin-bilkent",
    "fullName": "Mehtap Aydın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehtap+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehtap-balaban-bilkent",
    "fullName": "Mehtap Balaban",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehtap+Balaban+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehtap-honca-bilkent",
    "fullName": "Mehtap Honca",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehtap+Honca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mehtap-oktar-bilkent",
    "fullName": "Mehtap Oktar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mehtap+Oktar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "melahat-coban-bilkent",
    "fullName": "Melahat Çoban",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Melahat+Çoban+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "melih-cayonu-bilkent",
    "fullName": "Melih Çayönü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Melih+Çayönü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "melike-ersoy-ercan-bilkent",
    "fullName": "Melike Ersoy Ercan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Melike+Ersoy+Ercan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "melike-sanem-umut-bilkent",
    "fullName": "Melike Sanem Umut",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Melike+Sanem+Umut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meltem-kilic-bilkent",
    "fullName": "Meltem Kılıç",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meltem+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meltem-osmanoglu-bilkent",
    "fullName": "Meltem Osmanoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meltem+Osmanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meral-akdogan-bilkent",
    "fullName": "Meral Akdoğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meral+Akdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meral-somer-bilkent",
    "fullName": "Meral Somer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meral+Somer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mercan-tastemur-bilkent",
    "fullName": "Mercan Taştemur",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mercan+Taştemur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mert-ali-kaya-bilkent",
    "fullName": "Mert Ali Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mert+Ali+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-demirelli-bilkent",
    "fullName": "Merve Demirelli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Demirelli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-ergin-tuncay-bilkent",
    "fullName": "Merve Ergin Tunçay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Ergin+Tunçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-genc-bilkent",
    "fullName": "Merve Genç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Genç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-hatipoglu-bilkent",
    "fullName": "Merve Hatipoğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Hatipoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-kaplan-yurek-bilkent",
    "fullName": "Merve Kaplan Yürek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Kaplan+Yürek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-meryem-kiran-bilkent",
    "fullName": "Merve Meryem Kıran",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Meryem+Kıran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-nur-celik-bilkent",
    "fullName": "Merve Nur Çelik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Nur+Çelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-pamukcuoglu-bilkent",
    "fullName": "Merve Pamukçuoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Pamukçuoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "merve-sengul-inan-bilkent",
    "fullName": "Merve Şengül İnan",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Merve+Şengül+İnan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meryem-kara-bilkent",
    "fullName": "Meryem Kara",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meryem+Kara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "meryem-keles-bilkent",
    "fullName": "Meryem Keleş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Meryem+Keleş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mete-hidiroglu-bilkent",
    "fullName": "Mete Hıdıroğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mete+Hıdıroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "metin-akinci-bilkent",
    "fullName": "Metin Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Metin+Akıncı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "metin-aydin-bilkent",
    "fullName": "Metin Aydın",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Metin+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "metin-berberoglu-bilkent",
    "fullName": "Metin Berberoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Metin+Berberoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "metin-dogan-bilkent",
    "fullName": "Metin Doğan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Metin+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mevlut-hamamci-bilkent",
    "fullName": "Mevlüt Hamamcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mevlüt+Hamamcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mihriban-alkan-bilkent",
    "fullName": "Mihriban Alkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mihriban+Alkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mine-akin-bilkent",
    "fullName": "Mine Akın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mine+Akın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mine-sebnem-karakan-bilkent",
    "fullName": "Mine Şebnem Karakan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mine+Şebnem+Karakan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "minel-nur-ulukan-bilkent",
    "fullName": "Minel Nur Ulukan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Minel+Nur+Ulukan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mirmehdi-mehtiyev-bilkent",
    "fullName": "Mirmehdi Mehtiyev",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mirmehdi+Mehtiyev+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "miyase-serap-diker-bilkent",
    "fullName": "Miyase Serap Diker",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Miyase+Serap+Diker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mualla-sahin-hamurcu-bilkent",
    "fullName": "Mualla Şahin Hamurcu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mualla+Şahin+Hamurcu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammed-ali-beyoglu-bilkent",
    "fullName": "Muhammed Ali Beyoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammed+Ali+Beyoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammed-emin-oktay-bilkent",
    "fullName": "Muhammed Emin Oktay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammed+Emin+Oktay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammed-emin-polat-bilkent",
    "fullName": "Muhammed Emin Polat",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammed+Emin+Polat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammed-mustafa-ince-bilkent",
    "fullName": "Muhammed Mustafa İnce",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammed+Mustafa+İnce+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammed-yilmaz-bilkent",
    "fullName": "Muhammed Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammed+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammet-fethi-saglam-bilkent",
    "fullName": "Muhammet Fethi Sağlam",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammet+Fethi+Sağlam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammet-kadri-colakoglu-bilkent",
    "fullName": "Muhammet Kadri Çolakoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammet+Kadri+Çolakoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammet-sacikara-bilkent",
    "fullName": "Muhammet Saçıkara",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammet+Saçıkara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhammet-selim-yasar-bilkent",
    "fullName": "Muhammet Selim Yaşar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhammet+Selim+Yaşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muharrem-tola-bilkent",
    "fullName": "Muharrem Tola",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muharrem+Tola+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhittin-sonisik-bilkent",
    "fullName": "Muhittin Sonışık",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhittin+Sonışık+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhsin-selcuk-yavuz-bilkent",
    "fullName": "Muhsin Selçuk Yavuz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhsin+Selçuk+Yavuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muhsine-ahsen-hocaoglu-bilkent",
    "fullName": "Muhsine Ahsen Hocaoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muhsine+Ahsen+Hocaoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-akcay-bilkent",
    "fullName": "Murat Akçay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon",
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Akçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-canyigit-bilkent",
    "fullName": "Murat Canyiğit",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Canyiğit+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-gulcek-bilkent",
    "fullName": "Murat Gülçek",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Gülçek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-kiraci-bilkent",
    "fullName": "Murat Kiracı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Kiracı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-oguz-ozilhan-bilkent",
    "fullName": "Murat Oğuz Özilhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Oğuz+Özilhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-sinan-saricaoglu-bilkent",
    "fullName": "Murat Sinan Sarıcaoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Sinan+Sarıcaoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-vural-bilkent",
    "fullName": "Murat Vural",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Vural+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murat-yucel-bilkent",
    "fullName": "Murat Yücel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murat+Yücel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "murathan-koksal-bilkent",
    "fullName": "Murathan Köksal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Murathan+Köksal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "musa-onur-ozbakir-bilkent",
    "fullName": "Musa Onur Özbakır",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Musa+Onur+Özbakır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "musa-tanju-acar-bilkent",
    "fullName": "Musa Tanju Acar",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Musa+Tanju+Acar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "musab-ali-kutluhan-bilkent",
    "fullName": "Musab Ali Kutluhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Musab+Ali+Kutluhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-akdi-bilkent",
    "fullName": "Mustafa Akdi",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Akdi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-aldemir-bilkent",
    "fullName": "Mustafa Aldemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Aldemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-altan-bilkent",
    "fullName": "Mustafa Altan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Altan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-bindal-bilkent",
    "fullName": "Mustafa Bindal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Bindal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-burak-karadenizli-bilkent",
    "fullName": "Mustafa Burak Karadenizli",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Burak+Karadenizli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-canavarci-bilkent",
    "fullName": "Mustafa Canavarcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Canavarcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-dagli-bilkent",
    "fullName": "Mustafa Dağlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Dağlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-ekici-bilkent",
    "fullName": "Mustafa Ekici",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Ekici+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-emre-ertem-bilkent",
    "fullName": "Mustafa Emre Ertem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Emre+Ertem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-enes-kocsoy-bilkent",
    "fullName": "Mustafa Enes Koçsoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Enes+Koçsoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-erdem-altinoz-bilkent",
    "fullName": "Mustafa Erdem Altınöz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Erdem+Altınöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-hamidullah-turkkani-bilkent",
    "fullName": "Mustafa Hamidullah Türkkanı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Hamidullah+Türkkanı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-karanfil-bilkent",
    "fullName": "Mustafa Karanfil",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Karanfil+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-karaoglanoglu-bilkent",
    "fullName": "Mustafa Karaoğlanoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Karaoğlanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-naci-ballica-bilkent",
    "fullName": "Mustafa Naci Ballıca",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Naci+Ballıca+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-serdengecti-bilkent",
    "fullName": "Mustafa Serdengeçti",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Serdengeçti+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-tahtaci-bilkent",
    "fullName": "Mustafa Tahtacı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Tahtacı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-turan-bilkent",
    "fullName": "Mustafa Turan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Turan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-ugurlu-bilkent",
    "fullName": "Mustafa Uğurlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Uğurlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-yasin-hatipoglu-bilkent",
    "fullName": "Mustafa Yasin Hatipoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Yasin+Hatipoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-colak-bilkent",
    "fullName": "Mustafa Çolak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Çolak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-comoglu-bilkent",
    "fullName": "Mustafa Çomoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Çomoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-ozdemir-bilkent",
    "fullName": "Mustafa Özdemir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mustafa-ozsoy-bilkent",
    "fullName": "Mustafa Özsoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mustafa+Özsoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mutlu-doganay-bilkent",
    "fullName": "Mutlu Doğanay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mutlu+Doğanay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mutlu-gulbay-bilkent",
    "fullName": "Mutlu Gülbay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mutlu+Gülbay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mutlu-hizal-bilkent",
    "fullName": "Mutlu Hızal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mutlu+Hızal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muzaffer-serdar-deniz-bilkent",
    "fullName": "Muzaffer Serdar Deniz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muzaffer+Serdar+Deniz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muzaffer-sahin-bilkent",
    "fullName": "Muzaffer Şahin",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Muzaffer+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mucahit-ergul-bilkent",
    "fullName": "Mücahit Ergül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mücahit+Ergül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mucahit-saltan-bilkent",
    "fullName": "Mücahit Saltan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mücahit+Saltan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mucella-arikan-yorgun-bilkent",
    "fullName": "Mücella Arıkan Yorgun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mücella+Arıkan+Yorgun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muge-ayhan-bilkent",
    "fullName": "Müge Ayhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Müge+Ayhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muge-uzerk-kibar-bilkent",
    "fullName": "Müge Üzerk Kibar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Müge+Üzerk+Kibar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mukerrem-cete-bilkent",
    "fullName": "Mükerrem Cete",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mükerrem+Cete+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "mukremin-er-bilkent",
    "fullName": "Mükremin Er",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mükremin+Er+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "munir-demirci-bilkent",
    "fullName": "Münir Demirci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Münir+Demirci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "muruvvet-seda-aydin-bilkent",
    "fullName": "Mürüvvet Seda Aydın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Mürüvvet+Seda+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "naciye-semnur-buyukasik-bilkent",
    "fullName": "Naciye Şemnur Büyükaşık",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Naciye+Şemnur+Büyükaşık+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nadide-aysun-postaci-bilkent",
    "fullName": "Nadide Aysun Postacı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nadide+Aysun+Postacı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nagihan-bestepe-bilkent",
    "fullName": "Nagihan Beştepe",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nagihan+Beştepe+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nagihan-gulhan-yasar-bilkent",
    "fullName": "Nagihan Gülhan Yaşar",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nagihan+Gülhan+Yaşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nagihan-orhan-ozer-bilkent",
    "fullName": "Nagihan Orhan Özer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nagihan+Orhan+Özer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nagihan-ugurlu-bilkent",
    "fullName": "Nagihan Uğurlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nagihan+Uğurlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "naim-boran-tumer-bilkent",
    "fullName": "Naim Boran Tümer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Naim+Boran+Tümer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nalan-aslan-bilkent",
    "fullName": "Nalan Aslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nalan+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nalan-demir-bilkent",
    "fullName": "Nalan Demir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nalan+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nalan-kara-bilkent",
    "fullName": "Nalan Kara",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nalan+Kara+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "namik-nebi-ozcan-bilkent",
    "fullName": "Namık Nebi Özcan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Namık+Nebi+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "narin-nasiroglu-imga-bilkent",
    "fullName": "Narin Nasıroğlu İmga",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Narin+Nasıroğlu+İmga+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nazan-has-selmi-bilkent",
    "fullName": "Nazan Has Selmi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nazan+Has+Selmi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nazli-pelin-kirkayak-bilkent",
    "fullName": "Nazlı Pelin Kırkayak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nazlı+Pelin+Kırkayak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nazmi-gokhan-unver-bilkent",
    "fullName": "Nazmi Gökhan Ünver",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nazmi+Gökhan+Ünver+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nazim-coskun-bilkent",
    "fullName": "Nazım Coşkun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nazım+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nedim-c-m-gulaldi-bilkent",
    "fullName": "Nedim C.m. Gülaldı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nedim+C.m.+Gülaldı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nedret-ulvan-bilkent",
    "fullName": "Nedret Ülvan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nedret+Ülvan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nermin-damla-okay-bilkent",
    "fullName": "Nermin Damla Okay",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nermin+Damla+Okay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nesibe-aslan-bilkent",
    "fullName": "Nesibe Aslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nesibe+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nesibe-cesur-bilkent",
    "fullName": "Nesibe Cesur",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nesibe+Cesur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nesibe-guler-bilkent",
    "fullName": "Nesibe Güler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nesibe+Güler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "neslihan-bayraktar-bilen-bilkent",
    "fullName": "Neslihan Bayraktar Bilen",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Neslihan+Bayraktar+Bilen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "neslihan-gulay-peri-bilkent",
    "fullName": "Neslihan Gülay Peri",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Neslihan+Gülay+Peri+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "neslihan-inci-zengin-bilkent",
    "fullName": "Neslihan İnci Zengin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Neslihan+İnci+Zengin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "neslihan-cuhaci-seyrek-bilkent",
    "fullName": "Neslihan Çuhacı Seyrek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Neslihan+Çuhacı+Seyrek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nesrin-turhan-bilkent",
    "fullName": "Nesrin Turhan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nesrin+Turhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nevriye-salman-bilkent",
    "fullName": "Nevriye Salman",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nevriye+Salman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nevzat-mehmet-mutlu-bilkent",
    "fullName": "Nevzat Mehmet Mutlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nevzat+Mehmet+Mutlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nihal-akar-bilkent",
    "fullName": "Nihal Akar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nihal+Akar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nihal-gokbulut-ozaslan-bilkent",
    "fullName": "Nihal Gökbulut Özaslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nihal+Gökbulut+Özaslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nihal-yuzbasioglu-bilkent",
    "fullName": "Nihal Yüzbaşıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nihal+Yüzbaşıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nihan-aydin-guzey-bilkent",
    "fullName": "Nihan Aydın Guzey",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nihan+Aydın+Guzey+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nil-irem-ucgun-bilkent",
    "fullName": "Nil İrem Uçgun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nil+İrem+Uçgun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilay-yuksel-bilkent",
    "fullName": "Nilay Yüksel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilay+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilay-coplu-bilkent",
    "fullName": "Nilay Çöplü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilay+Çöplü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilgun-isiksalan-ozbulbul-bilkent",
    "fullName": "Nilgün Işıksalan Özbülbül",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilgün+Işıksalan+Özbülbül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilufer-onak-kandemir-bilkent",
    "fullName": "Nilüfer Onak Kandemir",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilüfer+Onak+Kandemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilufer-yesilirmak-bilkent",
    "fullName": "Nilüfer Yeşilırmak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilüfer+Yeşilırmak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nilufer-yildirim-bilkent",
    "fullName": "Nilüfer Yıldırım",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nilüfer+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "niyazi-erdem-yasar-bilkent",
    "fullName": "Niyazi Erdem Yaşar",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Niyazi+Erdem+Yaşar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "numan-ilteris-cevik-bilkent",
    "fullName": "Numan İlteriş Çevik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Numan+İlteriş+Çevik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nur-karaaslan-bilkent",
    "fullName": "Nur Karaaslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nur+Karaaslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nur-karademir-bilkent",
    "fullName": "Nur Karademir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nur+Karademir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nur-semerci-gunduz-bilkent",
    "fullName": "Nur Semerci Gündüz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nur+Semerci+Gündüz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nur-turkmen-bilkent",
    "fullName": "Nur Türkmen",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nur+Türkmen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nural-cevahir-bilkent",
    "fullName": "Nural Cevahir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nural+Cevahir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nuran-sungu-bilkent",
    "fullName": "Nuran Süngü",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nuran+Süngü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nuran-ulusoy-bilkent",
    "fullName": "Nuran Ulusoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nuran+Ulusoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nuray-karakoy-bilkent",
    "fullName": "Nuray Karaköy",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nuray+Karaköy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nuray-yilmaz-cakmak-bilkent",
    "fullName": "Nuray Yılmaz Çakmak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nuray+Yılmaz+Çakmak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nurcan-yurtsever-kum-bilkent",
    "fullName": "Nurcan Yurtsever Kum",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nurcan+Yurtsever+Kum+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nurettin-karaoglanoglu-bilkent",
    "fullName": "Nurettin Karaoğlanoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nurettin+Karaoğlanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nurettin-manti-bilkent",
    "fullName": "Nurettin Mantı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nurettin+Mantı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nursen-karakelle-bilkent",
    "fullName": "Nursen Karakelle",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nursen+Karakelle+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "nursen-unal-bilkent",
    "fullName": "Nursen Ünal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Nursen+Ünal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "okan-hamamci-bilkent",
    "fullName": "Okan Hamamcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Okan+Hamamcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oktay-bagdatoglu-bilkent",
    "fullName": "Oktay Bağdatoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oktay+Bağdatoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oktay-gurcan-bilkent",
    "fullName": "Oktay Gürcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oktay+Gürcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "olgun-bingol-bilkent",
    "fullName": "Olgun Bingöl",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Olgun+Bingöl+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omac-tufekcioglu-bilkent",
    "fullName": "Omaç Tüfekçioğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Omaç+Tüfekçioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "onur-karahasanoglu-bilkent",
    "fullName": "Onur Karahasanoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Onur+Karahasanoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "onur-serdar-gencler-bilkent",
    "fullName": "Onur Serdar Gençler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Onur+Serdar+Gençler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "orhan-coskun-bilkent",
    "fullName": "Orhan Coşkun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Orhan+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "orhan-kanbak-bilkent",
    "fullName": "Orhan Kanbak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Orhan+Kanbak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "orhan-kucuksahin-bilkent",
    "fullName": "Orhan Küçükşahin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Orhan+Küçükşahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "orhan-maden-bilkent",
    "fullName": "Orhan Maden",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Orhan+Maden+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "osman-aydin-bilkent",
    "fullName": "Osman Aydın",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Osman+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "osman-cerlet-bilkent",
    "fullName": "Osman Cerlet",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Osman+Cerlet+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "osman-ersoy-bilkent",
    "fullName": "Osman Ersoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Osman+Ersoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "osman-inan-bilkent",
    "fullName": "Osman İnan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Osman+İnan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "osman-kayan-bilkent",
    "fullName": "Osman Kayan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Osman+Kayan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oya-kilci-bilkent",
    "fullName": "Oya Kılcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oya+Kılcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oya-topaloglu-bilkent",
    "fullName": "Oya Topaloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oya+Topaloğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oguz-ozturk-bilkent",
    "fullName": "Oğuz Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oğuz+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oguzhan-hancer-bilkent",
    "fullName": "Oğuzhan Hançer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oğuzhan+Hançer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oguzhan-kursun-bilkent",
    "fullName": "Oğuzhan Kurşun",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oğuzhan+Kurşun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oguzhan-zengin-bilkent",
    "fullName": "Oğuzhan Zengin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Oğuzhan+Zengin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pelin-gurcan-bilkent",
    "fullName": "Pelin Gürcan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pelin+Gürcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pelin-yumusak-bilkent",
    "fullName": "Pelin Yumuşak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pelin+Yumuşak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pelin-zeynep-bekin-sarikaya-bilkent",
    "fullName": "Pelin Zeynep Bekin Sarıkaya",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pelin+Zeynep+Bekin+Sarıkaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pelin-unsal-bilkent",
    "fullName": "Pelin Ünsal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pelin+Ünsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "perihan-kemerci-bilkent",
    "fullName": "Perihan Kemerci",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Perihan+Kemerci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "perihan-perkin-bilkent",
    "fullName": "Perihan Perkin",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Perihan+Perkin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-ilhan-demir-bilkent",
    "fullName": "Pınar İlhan Demir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+İlhan+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-kilic-bilkent",
    "fullName": "Pınar Kılıç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Kılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-nalcacioglu-memis-bilkent",
    "fullName": "Pınar Nalçacıoğlu Memiş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Nalçacıoğlu+Memiş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-ulubasoglu-bilkent",
    "fullName": "Pınar Ulubaşoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Ulubaşoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-yuruk-atasoy-bilkent",
    "fullName": "Pınar Yürük Atasoy",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Yürük+Atasoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-celtikci-bilkent",
    "fullName": "Pınar Çeltikçi",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Çeltikçi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "pinar-oksuz-bilkent",
    "fullName": "Pınar Öksüz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Pınar+Öksüz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rabia-nazik-yuksel-bilkent",
    "fullName": "Rabia Nazik Yüksel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rabia+Nazik+Yüksel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rahmet-yildirim-bilkent",
    "fullName": "Rahmet Yıldırım",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rahmet+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rahsan-habiboglu-bilkent",
    "fullName": "Rahşan Habiboğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rahşan+Habiboğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ramazan-erkin-unlu-bilkent",
    "fullName": "Ramazan Erkin Ünlü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ramazan+Erkin+Ünlü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rana-tuna-dogrul-bilkent",
    "fullName": "Rana Tuna Doğrul",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rana+Tuna+Doğrul+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rasime-sare-bilir-bilkent",
    "fullName": "Rasime Sare Bilir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rasime+Sare+Bilir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "reyhan-ersoy-bilkent",
    "fullName": "Reyhan Ersoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Reyhan+Ersoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "rojsin-akyol-ozhasenekler-bilkent",
    "fullName": "Rojşin Akyol Özhasenekler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rojşin+Akyol+Özhasenekler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "roni-atalay-bilkent",
    "fullName": "Roni Atalay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Roni+Atalay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ridvan-firat-bilkent",
    "fullName": "Rıdvan Fırat",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıdvan+Fırat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ridvan-cit-bilkent",
    "fullName": "Rıdvan Çit",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıdvan+Çit+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "riza-durmaz-bilkent",
    "fullName": "Rıza Durmaz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıza+Durmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "riza-sarper-okten-bilkent",
    "fullName": "Rıza Sarper Ökten",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıza+Sarper+Ökten+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "riza-turk-bilkent",
    "fullName": "Rıza Türk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıza+Türk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "riza-sefizade-bilkent",
    "fullName": "Rıza Şefizade",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Rıza+Şefizade+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sabite-kacar-bilkent",
    "fullName": "Sabite Kacar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sabite+Kacar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sadettin-er-bilkent",
    "fullName": "Sadettin Er",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sadettin+Er+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sadik-kadri-acikgoz-bilkent",
    "fullName": "Sadık Kadri Açıkgöz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sadık+Kadri+Açıkgöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "safa-can-efil-bilkent",
    "fullName": "Safa Can Efil",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Safa+Can+Efil+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "saim-duman-bilkent",
    "fullName": "Saim Duman",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Saim+Duman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "salih-baser-bilkent",
    "fullName": "Salih Başer",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Salih+Başer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "salih-suha-koparal-bilkent",
    "fullName": "Salih Süha Koparal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Salih+Süha+Koparal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "salim-neselioglu-bilkent",
    "fullName": "Salim Neşelioğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Salim+Neşelioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "samet-senel-bilkent",
    "fullName": "Samet Şenel",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Samet+Şenel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sarpcan-maden-bilkent",
    "fullName": "Sarpcan Maden",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sarpcan+Maden+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "savili-karakas-bilkent",
    "fullName": "Savili Karakaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Savili+Karakaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sebile-comcali-bilkent",
    "fullName": "Sebile Çomçalı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sebile+Çomçalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seda-yamak-bilkent",
    "fullName": "Seda Yamak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seda+Yamak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sedat-tastemur-bilkent",
    "fullName": "Sedat Taştemur",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sedat+Taştemur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sedat-yahsi-bilkent",
    "fullName": "Sedat Yahşi",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sedat+Yahşi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sedef-acikgoz-bilkent",
    "fullName": "Sedef Açıkgöz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sedef+Açıkgöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "selma-karaahmetoglu-bilkent",
    "fullName": "Selma Karaahmetoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Selma+Karaahmetoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "selcuk-akan-bilkent",
    "fullName": "Selçuk Akan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Selçuk+Akan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "selcuk-esengen-bilkent",
    "fullName": "Selçuk Esengen",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Selçuk+Esengen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sema-akinci-bilkent",
    "fullName": "Sema Akıncı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sema+Akıncı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sema-nur-ozsan-bilkent",
    "fullName": "Sema Nur Özsan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sema+Nur+Özsan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sema-turan-bilkent",
    "fullName": "Sema Turan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sema+Turan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sema-turan-uzuntas-bilkent",
    "fullName": "Sema Turan Uzuntaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sema+Turan+Uzuntaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sema-yuzbasioglu-bilkent",
    "fullName": "Sema Yüzbaşıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sema+Yüzbaşıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "semih-baskan-bilkent",
    "fullName": "Semih Başkan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Semih+Başkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "semra-duran-bilkent",
    "fullName": "Semra Duran",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Semra+Duran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "semra-mungan-ozturk-bilkent",
    "fullName": "Semra Mungan Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Semra+Mungan+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sengul-ozmert-bilkent",
    "fullName": "Sengül Özmert",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sengül+Özmert+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seniha-naldoken-bilkent",
    "fullName": "Seniha Naldöken",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seniha+Naldöken+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serap-akbay-bilkent",
    "fullName": "Serap Akbay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serap+Akbay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serap-aydin-bilkent",
    "fullName": "Serap Aydın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serap+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serap-gurbuz-bilkent",
    "fullName": "Serap Gürbüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serap+Gürbüz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serap-ulusoy-bilkent",
    "fullName": "Serap Ulusoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serap+Ulusoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serap-yucel-gulcek-bilkent",
    "fullName": "Serap Yücel Gülçek",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serap+Yücel+Gülçek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seray-kulcu-cakmak-bilkent",
    "fullName": "Seray Külcü Çakmak",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seray+Külcü+Çakmak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdal-bastug-bilkent",
    "fullName": "Serdal Baştuğ",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdal+Baştuğ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-barakli-bilkent",
    "fullName": "Serdar Baraklı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Baraklı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-can-guven-bilkent",
    "fullName": "Serdar Can Güven",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Can+Güven+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-ensari-bilkent",
    "fullName": "Serdar Ensari",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Ensari+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-gokay-terzioglu-bilkent",
    "fullName": "Serdar Gökay Terzioğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Gökay+Terzioğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-suleyman-can-bilkent",
    "fullName": "Serdar Süleyman Can",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Süleyman+Can+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serdar-coban-bilkent",
    "fullName": "Serdar Çoban",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serdar+Çoban+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serhat-akcaalan-bilkent",
    "fullName": "Serhat Akçaalan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serhat+Akçaalan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serhat-akin-bilkent",
    "fullName": "Serhat Akın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serhat+Akın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serkan-topaloglu-bilkent",
    "fullName": "Serkan Topaloğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serkan+Topaloğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serkan-cay-bilkent",
    "fullName": "Serkan Çay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serkan+Çay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serkan-ozmen-bilkent",
    "fullName": "Serkan Özmen",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serkan+Özmen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serkan-serifler-bilkent",
    "fullName": "Serkan Şerifler",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serkan+Şerifler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serpil-erdogan-bilkent",
    "fullName": "Serpil Erdoğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serpil+Erdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serpil-kocali-bilkent",
    "fullName": "Serpil Koçali",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serpil+Koçali+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serpil-ocal-bilkent",
    "fullName": "Serpil Öcal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serpil+Öcal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serra-kayacetin-bilkent",
    "fullName": "Serra Kayaçetin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Serra+Kayaçetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "servet-guresci-bilkent",
    "fullName": "Servet Güreşçi",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Servet+Güreşçi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "servet-kocaoz-bilkent",
    "fullName": "Servet Kocaöz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Servet+Kocaöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seval-izdes-bilkent",
    "fullName": "Seval İzdeş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seval+İzdeş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seval-kablan-bilkent",
    "fullName": "Seval Kablan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seval+Kablan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevgi-kaya-bilkent",
    "fullName": "Sevgi Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevgi+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevgi-pektas-bilkent",
    "fullName": "Sevgi Pektaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevgi+Pektaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevgul-faki-bilkent",
    "fullName": "Sevgül Fakı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevgül+Fakı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevil-uygun-ilikhan-bilkent",
    "fullName": "Sevil Uygun İlikhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevil+Uygun+İlikhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevilay-sezer-bilkent",
    "fullName": "Sevilay Sezer",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevilay+Sezer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevim-gayenur-buyukberber-bilkent",
    "fullName": "Sevim Gayenur Büyükberber",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevim+Gayenur+Büyükberber+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sevtap-simsek-bulut-bilkent",
    "fullName": "Sevtap Şimşek Bulut",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sevtap+Şimşek+Bulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyhan-babaroglu-bilkent",
    "fullName": "Seyhan Babaroğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seyhan+Babaroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyhan-yagar-bilkent",
    "fullName": "Seyhan Yağar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seyhan+Yağar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyit-ahmet-korur-bilkent",
    "fullName": "Seyit Ahmet Korur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seyit+Ahmet+Korur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sezer-kulacoglu-bilkent",
    "fullName": "Sezer Kulaçoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sezer+Kulaçoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sezin-unlu-bilkent",
    "fullName": "Sezin Ünlü",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sezin+Ünlü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "secil-gundogdu-bilkent",
    "fullName": "Seçil Gündoğdu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Seçil+Gündoğdu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sibel-aydogan-bilkent",
    "fullName": "Sibel Aydoğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sibel+Aydoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sibel-gokay-bilkent",
    "fullName": "Sibel Gökay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sibel+Gökay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sibel-gunay-bilkent",
    "fullName": "Sibel Günay",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sibel+Günay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sibel-saydam-bilkent",
    "fullName": "Sibel Saydam",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sibel+Saydam+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sibel-yucel-bilkent",
    "fullName": "Sibel Yücel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sibel+Yücel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "simge-temur-bilkent",
    "fullName": "Simge Temur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Simge+Temur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "simten-dagdas-bilkent",
    "fullName": "Simten Dağdaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Simten+Dağdaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sinan-aydogdu-bilkent",
    "fullName": "Sinan Aydoğdu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sinan+Aydoğdu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sinan-sabit-kocabeyoglu-bilkent",
    "fullName": "Sinan Sabit Kocabeyoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sinan+Sabit+Kocabeyoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sinan-turkkan-bilkent",
    "fullName": "Sinan Türkkan",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sinan+Türkkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sinem-ipekli-ceylan-bilkent",
    "fullName": "Sinem İpekli Ceylan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sinem+İpekli+Ceylan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sinem-ulke-bilkent",
    "fullName": "Sinem Ülke",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sinem+Ülke+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "soner-akbaba-bilkent",
    "fullName": "Soner Akbaba",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Soner+Akbaba+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "soner-yavas-bilkent",
    "fullName": "Soner Yavaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Soner+Yavaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "songul-binay-bilkent",
    "fullName": "Songül Binay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Songül+Binay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sualp-turan-bilkent",
    "fullName": "Sualp Turan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sualp+Turan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sude-karadas-bilkent",
    "fullName": "Sude Karadaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sude+Karadaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sultan-sevim-yakin-bilkent",
    "fullName": "Sultan Sevim Yakın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sultan+Sevim+Yakın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sumru-sekerci-bilkent",
    "fullName": "Sumru Şekerci",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sumru+Şekerci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suzan-ozturk-selcuk-bilkent",
    "fullName": "Suzan Öztürk Selçuk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Suzan+Öztürk+Selçuk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "soylem-toksoz-bilkent",
    "fullName": "Söylem Toksöz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Söylem+Toksöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suheyla-aytac-arslan-bilkent",
    "fullName": "Süheyla Aytaç Arslan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süheyla+Aytaç+Arslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suheyla-ayca-gulenay-bilkent",
    "fullName": "Süheyla Ayça Gülenay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süheyla+Ayça+Gülenay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suheyla-dogan-bilkent",
    "fullName": "Süheyla Doğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süheyla+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-anil-akboga-bilkent",
    "fullName": "Süleyman Anıl Akboğa",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Anıl+Akboğa+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-boynuegri-bilkent",
    "fullName": "Süleyman Boynueğri",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Boynueğri+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-bulut-bilkent",
    "fullName": "Süleyman Bulut",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Bulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-ege-tozan-bilkent",
    "fullName": "Süleyman Ege Tozan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Ege+Tozan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-emre-metin-bilkent",
    "fullName": "Süleyman Emre Metin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Emre+Metin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-kalayci-bilkent",
    "fullName": "Süleyman Kalaycı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Kalaycı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "suleyman-kurtay-bilkent",
    "fullName": "Süleyman Kurtay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Süleyman+Kurtay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sumeyye-kazancioglu-bilkent",
    "fullName": "Sümeyye Kazancıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sümeyye+Kazancıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sila-burca-nakisci-gokhan-bilkent",
    "fullName": "Sıla Burca Nakışçi Gökhan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sıla+Burca+Nakışçi+Gökhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sila-celik-bilkent",
    "fullName": "Sıla Çelik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Sıla+Çelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tahir-durmaz-bilkent",
    "fullName": "Tahir Durmaz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tahir+Durmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tahir-kurtulus-yoldas-bilkent",
    "fullName": "Tahir Kurtuluş Yoldaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tahir+Kurtuluş+Yoldaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tahsin-aydin-bilkent",
    "fullName": "Tahsin Aydın",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tahsin+Aydın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tamer-balci-bilkent",
    "fullName": "Tamer Balcı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tamer+Balcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tamer-direk-bilkent",
    "fullName": "Tamer Direk",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tamer+Direk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "taner-yamaner-bilkent",
    "fullName": "Taner Yamaner",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Taner+Yamaner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tanju-ak-bilkent",
    "fullName": "Tanju Ak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tanju+Ak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tanju-keten-bilkent",
    "fullName": "Tanju Keten",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tanju+Keten+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tanju-tutuncu-bilkent",
    "fullName": "Tanju Tütüncü",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tanju+Tütüncü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tanju-yilmaz-bilkent",
    "fullName": "Tanju Yılmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tanju+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tatiana-bahceci-bilkent",
    "fullName": "Tatiana Bahçeci",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tatiana+Bahçeci+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tekin-guney-bilkent",
    "fullName": "Tekin Güney",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tekin+Güney+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "telat-keles-bilkent",
    "fullName": "Telat Keleş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Telat+Keleş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "telli-kirac-kuru-bilkent",
    "fullName": "Telli Kıraç Kuru",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Telli+Kıraç+Kuru+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "temel-oguz-bilkent",
    "fullName": "Temel Oğuz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Temel+Oğuz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tezcan-akin-bilkent",
    "fullName": "Tezcan Akın",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tezcan+Akın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tilbe-hakcil-oz-bilkent",
    "fullName": "Tilbe Hakçıl Öz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tilbe+Hakçıl+Öz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tolga-canli-bilkent",
    "fullName": "Tolga Canlı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tolga+Canlı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tolga-dinc-bilkent",
    "fullName": "Tolga Dinç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tolga+Dinç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tolga-karakan-bilkent",
    "fullName": "Tolga Karakan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tolga+Karakan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tuba-akdag-bilkent",
    "fullName": "Tuba Akdağ",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuba+Akdağ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tuba-akkurt-bilkent",
    "fullName": "Tuba Akkurt",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuba+Akkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tuba-dilay-kokener-unal-bilkent",
    "fullName": "Tuba Dilay Kökener Ünal",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuba+Dilay+Kökener+Ünal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tuncer-tug-bilkent",
    "fullName": "Tuncer Tuğ",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuncer+Tuğ+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "turan-buzgan-bilkent",
    "fullName": "Turan Buzgan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Turan+Buzgan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "turan-kaya-bilkent",
    "fullName": "Turan Kaya",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Turan+Kaya+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "turan-turhan-bilkent",
    "fullName": "Turan Turhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Turan+Turhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "turgay-kacan-bilkent",
    "fullName": "Turgay Kaçan",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Turgay+Kaçan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tugba-akgun-bilkent",
    "fullName": "Tuğba Akgün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuğba+Akgün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tugba-topcu-bilkent",
    "fullName": "Tuğba Topçu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuğba+Topçu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tugba-yilmaz-bilkent",
    "fullName": "Tuğba Yılmaz",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuğba+Yılmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tugba-sengezer-bilkent",
    "fullName": "Tuğba Şengezer",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuğba+Şengezer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tugce-ata-bilkent",
    "fullName": "Tuğçe Ata",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tuğçe+Ata+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "tulin-gumus-bilkent",
    "fullName": "Tülin Gümüş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Tülin+Gümüş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "turker-soydas-bilkent",
    "fullName": "Türker Soydaş",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Türker+Soydaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umut-tahsin-mafratoglu-bilkent",
    "fullName": "Umut Tahsin Mafratoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Umut+Tahsin+Mafratoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umut-oktem-bilkent",
    "fullName": "Umut Öktem",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Umut+Öktem+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ural-koc-bilkent",
    "fullName": "Ural Koç",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ural+Koç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-bak-bilkent",
    "fullName": "Uğur Bak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Bak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-emre-kibris-bilkent",
    "fullName": "Uğur Emre Kıbrıs",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Emre+Kıbrıs+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-kemal-gunduz-bilkent",
    "fullName": "Uğur Kemal Gündüz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Kemal+Gündüz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-turktas-bilkent",
    "fullName": "Uğur Türktaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Türktaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-ozberk-bilkent",
    "fullName": "Uğur Özberk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Özberk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugur-ozkan-bilkent",
    "fullName": "Uğur Özkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğur+Özkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ugurcan-salman-bilkent",
    "fullName": "Uğurcan Salman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Uğurcan+Salman+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "velihan-cayhan-bilkent",
    "fullName": "Velihan Çayhan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Velihan+Çayhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "vildan-ergen-cocuk-hast-kule-sor-bilkent",
    "fullName": "Vildan Ergen Çocuk Hast. Kule Sor.",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Vildan+Ergen+Çocuk+Hast.+Kule+Sor.+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "volkan-gokbulut-bilkent",
    "fullName": "Volkan Gökbulut",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Volkan+Gökbulut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "volkan-oter-bilkent",
    "fullName": "Volkan Öter",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Volkan+Öter+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "vural-ince-bilkent",
    "fullName": "Vural İnce",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Vural+İnce+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yakup-kahve-bilkent",
    "fullName": "Yakup Kahve",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yakup+Kahve+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yakup-safak-bilkent",
    "fullName": "Yakup Şafak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yakup+Şafak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yalcin-kizilkan-bilkent",
    "fullName": "Yalçın Kızılkan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yalçın+Kızılkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yalcin-turhan-bilkent",
    "fullName": "Yalçın Turhan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yalçın+Turhan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasemin-hoke-bilkent",
    "fullName": "Yasemin Höke",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yasemin+Höke+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasemin-ozderin-ozin-bilkent",
    "fullName": "Yasemin Özderin Özin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yasemin+Özderin+Özin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasemin-ulger-bilkent",
    "fullName": "Yasemin Ülger",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yasemin+Ülger+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasin-orhan-erkus-bilkent",
    "fullName": "Yasin Orhan Erkuş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yasin+Orhan+Erkuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasin-toklu-bilkent",
    "fullName": "Yasin Toklu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yasin+Toklu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yavuz-hekimoglu-bilkent",
    "fullName": "Yavuz Hekimoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yavuz+Hekimoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yasar-unsal-bilkent",
    "fullName": "Yaşar Ünsal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yaşar+Ünsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yelda-yildiz-tasci-bilkent",
    "fullName": "Yelda Yıldız Taşcı",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yelda+Yıldız+Taşcı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yener-yogun-bilkent",
    "fullName": "Yener Yoğun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yener+Yoğun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yetkin-agackiran-bilkent",
    "fullName": "Yetkin Ağaçkıran",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yetkin+Ağaçkıran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yeser-genc-bilkent",
    "fullName": "Yeşer Genç",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yeşer+Genç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yesim-aybar-bilir-bilkent",
    "fullName": "Yeşim Aybar Bilir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yeşim+Aybar+Bilir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yigit-karabicak-bilkent",
    "fullName": "Yiğit Karabıçak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yiğit+Karabıçak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yigit-mehmet-ozgun-bilkent",
    "fullName": "Yiğit Mehmet Özgün",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yiğit+Mehmet+Özgün+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yonca-asfuroglu-bilkent",
    "fullName": "Yonca Asfuroğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yonca+Asfuroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yunus-emre-ozbebek-bilkent",
    "fullName": "Yunus Emre Özbebek",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yunus+Emre+Özbebek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yunus-nadi-yuksek-bilkent",
    "fullName": "Yunus Nadi Yüksek",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yunus+Nadi+Yüksek+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yunus-polat-bilkent",
    "fullName": "Yunus Polat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yunus+Polat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yurdagul-albayrak-bilkent",
    "fullName": "Yurdagül Albayrak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yurdagül+Albayrak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yusuf-bayram-ozogul-bilkent",
    "fullName": "Yusuf Bayram Özoğul",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yusuf+Bayram+Özoğul+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yusuf-gokkurt-bilkent",
    "fullName": "Yusuf Gökkurt",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yusuf+Gökkurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yusuf-hancer-bilkent",
    "fullName": "Yusuf Hançer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yusuf+Hançer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yusuf-kasap-bilkent",
    "fullName": "Yusuf Kasap",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yusuf+Kasap+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yusuf-kursat-karakus-bilkent",
    "fullName": "Yusuf Kürşat Karakuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yusuf+Kürşat+Karakuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yuce-islamoglu-bilkent",
    "fullName": "Yüce İslamoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yüce+İslamoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yucel-akkas-bilkent",
    "fullName": "Yücel Akkaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yücel+Akkaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yucel-balbay-bilkent",
    "fullName": "Yücel Balbay",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yücel+Balbay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yuksel-maras-bilkent",
    "fullName": "Yüksel Maraş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yüksel+Maraş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yildiz-akcay-bilkent",
    "fullName": "Yıldız Akçay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yıldız+Akçay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yildiz-hayran-bilkent",
    "fullName": "Yıldız Hayran",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yıldız+Hayran+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yilmaz-aslan-bilkent",
    "fullName": "Yılmaz Aslan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yılmaz+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "yilmaz-tezcan-bilkent",
    "fullName": "Yılmaz Tezcan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Yılmaz+Tezcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zafer-guduk-bilkent",
    "fullName": "Zafer Güdük",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zafer+Güdük+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zafer-iscan-bilkent",
    "fullName": "Zafer İşcan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zafer+İşcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zahid-berke-aygin-bilkent",
    "fullName": "Zahid Berke Aygın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zahid+Berke+Aygın+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zehra-betul-paksoy-bilkent",
    "fullName": "Zehra Betül Paksoy",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zehra+Betül+Paksoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zehra-golbasi-bilkent",
    "fullName": "Zehra Gölbaşı",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zehra+Gölbaşı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zehra-guven-cetin-bilkent",
    "fullName": "Zehra Güven Çetin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zehra+Güven+Çetin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zekeriya-ersin-celen-bilkent",
    "fullName": "Zekeriya Ersin Çelen",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zekeriya+Ersin+Çelen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeki-ender-gunes-bilkent",
    "fullName": "Zeki Ender Güneş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeki+Ender+Güneş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeki-mesut-yalinkilic-bilkent",
    "fullName": "Zeki Mesut Yalınkılıç",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeki+Mesut+Yalınkılıç+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeki-catav-bilkent",
    "fullName": "Zeki Çatav",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeki+Çatav+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeliha-asli-demir-bilkent",
    "fullName": "Zeliha Aslı Demir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeliha+Aslı+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeliha-kocak-tufan-bilkent",
    "fullName": "Zeliha Koçak Tufan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeliha+Koçak+Tufan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeliha-yazar-bilkent",
    "fullName": "Zeliha Yazar",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeliha+Yazar+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-ay-sengul-bilkent",
    "fullName": "Zeynep Ay Şengül",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Ay+Şengül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-erhuner-tengirsenk-bilkent",
    "fullName": "Zeynep Erhuner Tengirşenk",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Erhuner+Tengirşenk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-hancioglu-bilkent",
    "fullName": "Zeynep Hancıoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Hancıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-m-aydogmus-bilkent",
    "fullName": "Zeynep M. Aydoğmuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+M.+Aydoğmuş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-nur-akcaboy-bilkent",
    "fullName": "Zeynep Nur Akçaboy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Nur+Akçaboy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-oktay-bilkent",
    "fullName": "Zeynep Oktay",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Oktay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-ruken-hakkoymaz-bilkent",
    "fullName": "Zeynep Ruken Hakkoymaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Ruken+Hakkoymaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-sahiner-bilkent",
    "fullName": "Zeynep Şahiner",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Şahiner+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zeynep-seyma-kadioglu-bilkent",
    "fullName": "Zeynep Şeyma Kadıoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zeynep+Şeyma+Kadıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ziya-cibali-acikgoz-bilkent",
    "fullName": "Ziya Cibali Açıkgöz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ziya+Cibali+Açıkgöz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ziya-ogut-bilkent",
    "fullName": "Ziya Öğüt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ziya+Öğüt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zuhal-kandemir-bilkent",
    "fullName": "Zuhal Kandemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zuhal+Kandemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "zuhal-ozluoglu-igde-bilkent",
    "fullName": "Zuhal Özlüoğlu İğde",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Zuhal+Özlüoğlu+İğde+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cagan-aykurt-bilkent",
    "fullName": "Çağan Aykurt",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çağan+Aykurt+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "caglar-keskin-bilkent",
    "fullName": "Çağlar Keskin",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çağlar+Keskin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "caglar-sarioglu-bilkent",
    "fullName": "Çağlar Sarıoğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çağlar+Sarıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cagri-yayla-bilkent",
    "fullName": "Çağrı Yayla",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çağrı+Yayla+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cagri-ozcan-bilkent",
    "fullName": "Çağrı Özcan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çağrı+Özcan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cilem-bayindir-dicle-bilkent",
    "fullName": "Çilem Bayındır Dicle",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çilem+Bayındır+Dicle+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "cigdem-coskun-bilkent",
    "fullName": "Çiğdem Coşkun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Çiğdem+Coşkun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-can-sahin-bilkent",
    "fullName": "Ömer Can Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Can+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-faruk-bahadir-bilkent",
    "fullName": "Ömer Faruk Bahadır",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Faruk+Bahadır+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-faruk-turkoglu-bilkent",
    "fullName": "Ömer Faruk Türkoğlu",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Faruk+Türkoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-faruk-cufali-bilkent",
    "fullName": "Ömer Faruk Çufalı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Faruk+Çufalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-faruk-cirak-bilkent",
    "fullName": "Ömer Faruk Çırak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Faruk+Çırak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-furkan-erbay-bilkent",
    "fullName": "Ömer Furkan Erbay",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Furkan+Erbay+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-huseyin-aksoy-bilkent",
    "fullName": "Ömer Hüseyin Aksoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Hüseyin+Aksoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-karahancer-bilkent",
    "fullName": "Ömer Karahançer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Karahançer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-naci-kambur-bilkent",
    "fullName": "Ömer Naci Kambur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Naci+Kambur+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-parlak-bilkent",
    "fullName": "Ömer Parlak",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Parlak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-yazicioglu-bilkent",
    "fullName": "Ömer Yazıcıoğlu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Yazıcıoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "omer-ozturk-bilkent",
    "fullName": "Ömer Öztürk",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ömer+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "onder-kayigil-bilkent",
    "fullName": "Önder Kayıgil",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Önder+Kayıgil+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oner-odabas-bilkent",
    "fullName": "Öner Odabaş",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Öner+Odabaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oyku-eren-bilkent",
    "fullName": "Öykü Eren",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Öykü+Eren+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oyku-tayfur-yurekli-bilkent",
    "fullName": "Öykü Tayfur Yürekli",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Öykü+Tayfur+Yürekli+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozcan-erel-bilkent",
    "fullName": "Özcan Erel",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özcan+Erel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozcan-ozeke-bilkent",
    "fullName": "Özcan Özeke",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özcan+Özeke+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozdamar-fuad-oken-bilkent",
    "fullName": "Özdamar Fuad Öken",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özdamar+Fuad+Öken+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozdem-levent-ozdal-bilkent",
    "fullName": "Özdem Levent Özdal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özdem+Levent+Özdal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozdemir-ozdemir-bilkent",
    "fullName": "Özdemir Özdemir",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özdemir+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozden-baz-yagmuroglu-bilkent",
    "fullName": "Özden Baz Yağmuroğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özden+Baz+Yağmuroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozenc-devrim-polat-bilkent",
    "fullName": "Özenç Devrim Polat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özenç+Devrim+Polat+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozge-basaran-aydogdu-bilkent",
    "fullName": "Özge Başaran Aydoğdu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özge+Başaran+Aydoğdu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozge-saritas-bilkent",
    "fullName": "Özge Sarıtaş",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özge+Sarıtaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozge-soyer-kosemehmetoglu-bilkent",
    "fullName": "Özge Soyer Kösemehmetoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özge+Soyer+Kösemehmetoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozge-cakmak-karaaslan-bilkent",
    "fullName": "Özge Çakmak Karaaslan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özge+Çakmak+Karaaslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozgul-ucar-elalmis-bilkent",
    "fullName": "Özgül Uçar Elalmış",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özgül+Uçar+Elalmış+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozgur-akgul-bilkent",
    "fullName": "Özgür Akgül",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özgür+Akgül+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozgur-aldemir-bilkent",
    "fullName": "Özgür Aldemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özgür+Aldemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozgur-dogan-bilkent",
    "fullName": "Özgür Doğan",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özgür+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozkan-ozdemir-bilkent",
    "fullName": "Özkan Özdemir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özkan+Özdemir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-akdogan-bilkent",
    "fullName": "Özlem Akdoğan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Akdoğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-balkiz-soyal-bilkent",
    "fullName": "Özlem Balkız Soyal",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Balkız+Soyal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-ergin-beton-bilkent",
    "fullName": "Özlem Ergin Beton",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Ergin+Beton+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-evren-kemer-bilkent",
    "fullName": "Özlem Evren Kemer",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Evren+Kemer+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-kurtkaya-kocak-bilkent",
    "fullName": "Özlem Kurtkaya Koçak",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Kurtkaya+Koçak+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ozlem-ozcan-celebi-bilkent",
    "fullName": "Özlem Özcan Çelebi",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Özlem+Özcan+Çelebi+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oznur-bal-bilkent",
    "fullName": "Öznur Bal",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Öznur+Bal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "oznur-dogan-bilkent",
    "fullName": "Öznur Doğan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Öznur+Doğan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ulku-sabuncu-bilkent",
    "fullName": "Ülkü Sabuncu",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ülkü+Sabuncu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umit-gorgulu-bilkent",
    "fullName": "Ümit Görgülü",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümit+Görgülü+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umit-guray-bilkent",
    "fullName": "Ümit Güray",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümit+Güray+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umit-karadeniz-bilkent",
    "fullName": "Ümit Karadeniz",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümit+Karadeniz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umit-kervan-bilkent",
    "fullName": "Ümit Kervan",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümit+Kervan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "ummuhan-hulya-barut-bilkent",
    "fullName": "Ümmühan Hülya Barut",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümmühan+Hülya+Barut+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "umran-ozden-sertcelik-bilkent",
    "fullName": "Ümran Özden Sertçelik",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ümran+Özden+Sertçelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "unsal-eroglu-bilkent",
    "fullName": "Ünsal Eroğlu",
    "titlePrefix": "Op. Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Ünsal+Eroğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sadan-soyyigit-bilkent",
    "fullName": "Şadan Soyyiğit",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şadan+Soyyiğit+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sadiye-gumusyayla-bilkent",
    "fullName": "Şadiye Gümüşyayla",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şadiye+Gümüşyayla+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "safak-unsal-bilkent",
    "fullName": "Şafak Ünsal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şafak+Ünsal+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sahan-guven-bilkent",
    "fullName": "Şahan Güven",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şahan+Güven+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sahin-gurkan-bilkent",
    "fullName": "Şahin Gürkan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şahin+Gürkan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "saziye-sahin-bilkent",
    "fullName": "Şaziye Şahin",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şaziye+Şahin+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sebnem-yucel-bilkent",
    "fullName": "Şebnem Yücel",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şebnem+Yücel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sehnaz-durmus-erkekel-bilkent",
    "fullName": "Şehnaz Durmuş Erkekel",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şehnaz+Durmuş+Erkekel+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "semsi-mustafa-aksoy-bilkent",
    "fullName": "Şemsi Mustafa Aksoy",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şemsi+Mustafa+Aksoy+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "senay-funda-dereagzi-bilkent",
    "fullName": "Şenay Funda Dereağzı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şenay+Funda+Dereağzı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "senol-bekmez-bilkent",
    "fullName": "Şenol Bekmez",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şenol+Bekmez+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "senol-kursun-bilkent",
    "fullName": "Şenol Kurşun",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şenol+Kurşun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seref-alp-kucuker-bilkent",
    "fullName": "Şeref Alp Küçüker",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeref+Alp+Küçüker+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seref-celik-bilkent",
    "fullName": "Şeref Çelik",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeref+Çelik+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serife-gokbulut-bektas-bilkent",
    "fullName": "Şerife Gökbulut Bektaş",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şerife+Gökbulut+Bektaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serife-toptas-bilkent",
    "fullName": "Şerife Toptaş",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şerife+Toptaş+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serife-yildirim-bilkent",
    "fullName": "Şerife Yıldırım",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şerife+Yıldırım+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "serife-sennur-aslan-bilkent",
    "fullName": "Şerife Şennur Aslan",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şerife+Şennur+Aslan+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyda-akbal-cufali-bilkent",
    "fullName": "Şeyda Akbal Çufalı",
    "titlePrefix": "Dr. Öğr. Üyesi",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeyda+Akbal+Çufalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyda-ilhan-demir-bilkent",
    "fullName": "Şeyda İlhan Demir",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeyda+İlhan+Demir+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyda-turkolmez-bilkent",
    "fullName": "Şeyda Türkölmez",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeyda+Türkölmez+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "seyma-eroglu-durmaz-bilkent",
    "fullName": "Şeyma Eroğlu Durmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şeyma+Eroğlu+Durmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "silan-kanas-seymen-bilkent",
    "fullName": "Şilan Kanaş Seymen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şilan+Kanaş+Seymen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "simal-koksal-cevher-bilkent",
    "fullName": "Şimal Köksal Cevher",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şimal+Köksal+Cevher+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sule-berk-ergun-bilkent",
    "fullName": "Şule Berk Ergun",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şule+Berk+Ergun+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sule-bilen-bilkent",
    "fullName": "Şule Bilen",
    "titlePrefix": "Doç. Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şule+Bilen+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sule-mine-bakanay-ozturk-bilkent",
    "fullName": "Şule Mine Bakanay Öztürk",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şule+Mine+Bakanay+Öztürk+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sukran-erten-bilkent",
    "fullName": "Şükran Erten",
    "titlePrefix": "Prof. Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şükran+Erten+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sukran-zisan-ozguler-bilkent",
    "fullName": "Şükran Zişan Özgüler",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şükran+Zişan+Özgüler+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sukriye-dadali-bilkent",
    "fullName": "Şükriye Dadalı",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şükriye+Dadalı+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sukru-alperen-korkmaz-bilkent",
    "fullName": "Şükrü Alperen Korkmaz",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şükrü+Alperen+Korkmaz+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  },
  {
    "slug": "sukru-cem-hatipoglu-bilkent",
    "fullName": "Şükrü Cem Hatipoğlu",
    "titlePrefix": "Uzm. Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "ankara-bilkent-sehir-hastanesi"
    ],
    "citySlug": "ankara",
    "districtSlug": "cankaya",
    "signals": [
      {
        "source": "google_places",
        "sourceUrl": "https://maps.google.com/?q=Şükrü+Cem+Hatipoğlu+Ankara+Bilkent+Şehir+Hastanesi",
        "visible": true
      }
    ]
  }
];
