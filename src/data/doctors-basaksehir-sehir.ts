import type { DoctorSummary } from "./types";

/**
 * Başakşehir Çam ve Sakura Şehir Hastanesi — hekim kadrosu (İstanbul/Başakşehir).
 * Türkiye'nin en büyük ikinci şehir hastanesi; T.C. Sağlık Bakanlığı'na bağlı
 * kamu (şehir/devlet) hastanesi. 2.682 yatak kapasiteli tıp kampüsü.
 *
 * Kaynak: camsakurasehir.saglik.gov.tr "Doktor Çalışma Listesi" sayfasındaki
 * branş bazlı resmî aylık hekim çalışma listeleri (2026 Nisan, .xlsx).
 * Kurum tarafından alenileştirilmiş kamu görevlisi hekim verisi.
 * KVKK m.28/1-ç + m.5/2-d (kamu görevi/alenileştirme) istisnası kapsamında
 * yeniden indeksleme. Doktorlar sahiplenme akışıyla (claim) bilgilerini
 * doğrulayabilir/düzeltebilir.
 *
 * NOT: Çalışma listeleri unvan bilgisi içermediğinden, uydurma kıdem/unvan
 * iddiasından kaçınmak için tıbbi branşlarda nötr "Dr.", diş hekimliği
 * kliniklerinde "Dt." unvanı kullanılmıştır. Branş, hekimin görüldüğü klinik
 * dosyasından eşlenmiş; birden fazla klinikte görünen hekimde tüm branşlar
 * birleştirilmiş, en sık görülen branş birincil kabul edilmiştir.
 */
export const doctorsBasaksehirSehir: DoctorSummary[] = [
  {
    "slug": "abas-hasimoglu-camsakura",
    "fullName": "Abas Haşimoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdulkadir-demir-camsakura",
    "fullName": "Abdulkadir Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdullah-akdag-camsakura",
    "fullName": "Abdullah Akdağ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdullah-ensar-kilic-camsakura",
    "fullName": "Abdullah Ensar Kılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdullah-erdem-camsakura",
    "fullName": "Abdullah Erdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdullah-kilic-camsakura",
    "fullName": "Abdullah Kılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdullah-serefoglu-camsakura",
    "fullName": "Abdullah Şerefoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdurrahman-alpaslan-alkan-camsakura",
    "fullName": "Abdurrahman Alpaslan Alkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abdurrahman-engin-baydemir-camsakura",
    "fullName": "Abdurrahman Engin Baydemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "abidin-yusuf-kavurmaci-camsakura",
    "fullName": "Abidin Yusuf Kavurmacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "adem-celik-camsakura",
    "fullName": "Adem Çelik",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "agit-sulhan-camsakura",
    "fullName": "Agit Sulhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-askar-camsakura",
    "fullName": "Ahmet Aşkar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-baki-camsakura",
    "fullName": "Ahmet Baki",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-bas-camsakura",
    "fullName": "Ahmet Baş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-beyendi-camsakura",
    "fullName": "Ahmet Beyendi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-dogukan-kansu-camsakura",
    "fullName": "Ahmet Doğukan Kansu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-guler-camsakura",
    "fullName": "Ahmet Güler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-rifat-dogramaci-camsakura",
    "fullName": "Ahmet Rıfat Doğramacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahmet-ilker-tekkesin-camsakura",
    "fullName": "Ahmet İlker Tekkeşin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ahsen-celik-ozbay-camsakura",
    "fullName": "Ahsen Çelik Özbay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "akin-varlik-camsakura",
    "fullName": "Akın Varlık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "akif-erbin-camsakura",
    "fullName": "Akif Erbin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alaattin-ozen-camsakura",
    "fullName": "Alaattin Özen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alev-kilicgedik-camsakura",
    "fullName": "Alev Kılıçgedik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alparslan-melik-kayikci-camsakura",
    "fullName": "Alparslan Melik Kayıkçi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alper-gezdirici-camsakura",
    "fullName": "Alper Gezdirici",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alper-gunduz-camsakura",
    "fullName": "Alper Gündüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alper-turkoglu-camsakura",
    "fullName": "Alper Türkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alperen-akansel-caglar-camsakura",
    "fullName": "Alperen Akansel Çağlar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "alperen-inceoglu-camsakura",
    "fullName": "Alperen İnceoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-aycicek-camsakura",
    "fullName": "Ali Ayçiçek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-bekraki-camsakura",
    "fullName": "Ali Bekraki",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-gokhan-bolluk-camsakura",
    "fullName": "Ali Gökhan Bolluk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-levent-isik-camsakura",
    "fullName": "Ali Levent Işık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-selcuk-yeniocak-camsakura",
    "fullName": "Ali Selçuk Yeniocak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-usta-camsakura",
    "fullName": "Ali Usta",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-utku-oz-camsakura",
    "fullName": "Ali Utku Öz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-varlihan-camsakura",
    "fullName": "Ali Varlıhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-volkan-ozluk-camsakura",
    "fullName": "Ali Volkan Özlük",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-yucesan-camsakura",
    "fullName": "Ali Yücesan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ali-olmezoglu-camsakura",
    "fullName": "Ali Ölmezoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "anil-erdem-camsakura",
    "fullName": "Anıl Erdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "anil-yildiz-camsakura",
    "fullName": "Anıl Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "anil-ozkaya-camsakura",
    "fullName": "Anıl Özkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "araz-kazimov-camsakura",
    "fullName": "Araz Kazımov",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "arman-ozgunduz-camsakura",
    "fullName": "Arman Özgündüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "arzu-akcay-camsakura",
    "fullName": "Arzu Akçay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "arif-turgan-camsakura",
    "fullName": "Arif Turgan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aslan-babayigit-camsakura",
    "fullName": "Aslan Babayiğit",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aslan-erdogan-camsakura",
    "fullName": "Aslan Erdoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "asli-kulduk-mete-camsakura",
    "fullName": "Aslı Kulduk Mete",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aslihan-yalcin-camsakura",
    "fullName": "Aslıhan Yalçın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "asuman-aytac-camsakura",
    "fullName": "Asuman Aytaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "asiye-yir-camsakura",
    "fullName": "Asiye Yir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayben-yentek-balkanay-camsakura",
    "fullName": "Ayben Yentek Balkanay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayberk-onal-camsakura",
    "fullName": "Ayberk Önal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aybuke-damla-cetindere-camsakura",
    "fullName": "Aybüke Damla Çetindere",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aydeniz-aydin-gumus-camsakura",
    "fullName": "Aydeniz Aydın Gümüş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aydin-talat-baydar-camsakura",
    "fullName": "Aydın Talat Baydar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayhan-ekti-camsakura",
    "fullName": "Ayhan Ekti",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayhan-koksal-camsakura",
    "fullName": "Ayhan Köksal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aykut-celik-camsakura",
    "fullName": "Aykut Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aykut-ozmen-camsakura",
    "fullName": "Aykut Özmen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aylin-ayyildiz-camsakura",
    "fullName": "Aylin Ayyıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aylin-yilmaz-camsakura",
    "fullName": "Aylin Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aynur-islamova-camsakura",
    "fullName": "Aynur Islamova",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayca-altinkaya-uslu-camsakura",
    "fullName": "Ayça Altınkaya Uslu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayca-ozkul-camsakura",
    "fullName": "Ayça Özkul",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-bacaksiz-camsakura",
    "fullName": "Ayşe Bacaksız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-bahadir-camsakura",
    "fullName": "Ayşe Bahadır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-beste-guzel-tuncer-camsakura",
    "fullName": "Ayşe Beste Güzel Tuncer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-ceren-yildiz-camsakura",
    "fullName": "Ayşe Ceren Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-ceylan-kilincarslan-camsakura",
    "fullName": "Ayşe Ceylan Kılınçarslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-esref-camsakura",
    "fullName": "Ayşe Eşref",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-gonca-kacar-camsakura",
    "fullName": "Ayşe Gonca Kaçar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-nur-ceylan-camsakura",
    "fullName": "Ayşe Nur Ceylan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-nur-demirgoz-demir-camsakura",
    "fullName": "Ayşe Nur Demirgöz Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-subasi-camsakura",
    "fullName": "Ayşe Subaşı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-sumeyye-demir-gungor-camsakura",
    "fullName": "Ayşe Sümeyye Demir Güngör",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-ozge-savkli-camsakura",
    "fullName": "Ayşe Özge Şavklı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ayse-ozkan-karagenc-camsakura",
    "fullName": "Ayşe Özkan Karagenç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aysegul-sakin-camsakura",
    "fullName": "Ayşegül Sakin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "aysenur-bagdatli-camsakura",
    "fullName": "Ayşenur Bağdatlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "azize-beril-yuksel-camsakura",
    "fullName": "Azize Beril Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "azize-esra-gursoy-camsakura",
    "fullName": "Azize Esra Gürsoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bahadir-topal-camsakura",
    "fullName": "Bahadır Topal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bahar-koyuncu-camsakura",
    "fullName": "Bahar Koyuncu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baki-ekci-camsakura",
    "fullName": "Baki Ekçi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "banu-otkur-ozgen-camsakura",
    "fullName": "Banu Ötkür Özgen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baran-taskala-camsakura",
    "fullName": "Baran Taşkala",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baris-boza-camsakura",
    "fullName": "Barış Boza",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baris-demirkol-camsakura",
    "fullName": "Barış Demirkol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baris-kaya-camsakura",
    "fullName": "Barış Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "baris-colluoglu-camsakura",
    "fullName": "Barış Çöllüoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "barika-mercan-camsakura",
    "fullName": "Barika Mercan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "basak-can-camsakura",
    "fullName": "Başak Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "basak-korkmazer-camsakura",
    "fullName": "Başak Korkmazer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "basak-ozge-kayan-camsakura",
    "fullName": "Başak Özge Kayan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "begum-bahar-yilmaz-camsakura",
    "fullName": "Begüm Bahar Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "behzat-tuzun-camsakura",
    "fullName": "Behzat Tüzün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bekir-cebe-camsakura",
    "fullName": "Bekir Cebe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bekir-karakilic-camsakura",
    "fullName": "Bekir Karakılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bekir-tugcu-camsakura",
    "fullName": "Bekir Tuğcu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berat-bulut-camsakura",
    "fullName": "Berat Bulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berkay-guzel-camsakura",
    "fullName": "Berkay Güzel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berkay-kapar-camsakura",
    "fullName": "Berkay Kapar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berna-aslan-camsakura",
    "fullName": "Berna Aslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berna-demirok-camsakura",
    "fullName": "Berna Demirok",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berna-karaismailoglu-camsakura",
    "fullName": "Berna Karaismailoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berna-yelken-camsakura",
    "fullName": "Berna Yelken",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "berra-zumrut-tan-recep-camsakura",
    "fullName": "Berra Zümrüt Tan Recep",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "betul-avci-camsakura",
    "fullName": "Betül Avcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "betul-okur-camsakura",
    "fullName": "Betül Okur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "betul-sarac-camsakura",
    "fullName": "Betül Saraç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "beyza-arslansoy-camsakura",
    "fullName": "Beyza Arslansoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "beyza-kal-kolik-camsakura",
    "fullName": "Beyza Kal Kolik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "beyza-melek-palaz-camsakura",
    "fullName": "Beyza Melek Palaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bora-taspinar-camsakura",
    "fullName": "Bora Taşpınar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "buket-tugba-onder-camsakura",
    "fullName": "Buket Tuğba Önder",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burak-alkac-camsakura",
    "fullName": "Burak Alkaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burak-can-siltak-camsakura",
    "fullName": "Burak Can Şıltak",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burak-demirekin-camsakura",
    "fullName": "Burak Demirekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burak-yucel-camsakura",
    "fullName": "Burak Yücel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcu-aggul-camsakura",
    "fullName": "Burcu Aggül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcu-bozdogan-tuysuz-camsakura",
    "fullName": "Burcu Bozdoğan Tüysüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcu-esen-akkas-camsakura",
    "fullName": "Burcu Esen Akkaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcu-hazer-camsakura",
    "fullName": "Burcu Hazer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcu-nurozler-tabakci-camsakura",
    "fullName": "Burcu Nurözler Tabakcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "buruc-erkan-camsakura",
    "fullName": "Buruç Erkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcak-demir-camsakura",
    "fullName": "Burçak Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcin-aygun-cosarpinar-camsakura",
    "fullName": "Burçin Aygün Coşarpınar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "burcin-kepez-yildiz-camsakura",
    "fullName": "Burçin Kepez Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "buse-agirbas-camsakura",
    "fullName": "Buse Ağırbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bulent-erbarut-camsakura",
    "fullName": "Bülent Erbarut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-ceran-serce-camsakura",
    "fullName": "Büşra Ceran Serçe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-korkmaz-camsakura",
    "fullName": "Büşra Korkmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-koker-demirel-camsakura",
    "fullName": "Büşra Köker Demirel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-tugci-camsakura",
    "fullName": "Büşra Tuğci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-tugce-tonyali-camsakura",
    "fullName": "Büşra Tuğçe Tonyalı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-yagbasan-camsakura",
    "fullName": "Büşra Yağbasan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-yildirim-camsakura",
    "fullName": "Büşra Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-yuce-camsakura",
    "fullName": "Büşra Yüce",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busra-unsal-camsakura",
    "fullName": "Büşra Ünsal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "busranur-tirtir-yilmaz-camsakura",
    "fullName": "Büşranur Tırtır Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bilal-cangir-camsakura",
    "fullName": "Bilal Cangir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "bilal-yekeler-camsakura",
    "fullName": "Bilal Yekeler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "binnur-karabiyik-camsakura",
    "fullName": "Binnur Karabıyık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "birgul-karaaslan-camsakura",
    "fullName": "Birgül Karaaslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "birkan-bozkurt-camsakura",
    "fullName": "Birkan Bozkurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "birsen-asena-emre-camsakura",
    "fullName": "Birsen Asena Emre",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cafer-koskeroglu-camsakura",
    "fullName": "Cafer Köşkeroğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "can-gunay-camsakura",
    "fullName": "Can Günay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "can-tercan-camsakura",
    "fullName": "Can Tercan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "canan-caymaz-camsakura",
    "fullName": "Canan Caymaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "canan-ozdemir-camsakura",
    "fullName": "Canan Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "caner-aktas-camsakura",
    "fullName": "Caner Aktaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cansu-ekici-camsakura",
    "fullName": "Cansu Ekici",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cansu-kilinc-berktas-camsakura",
    "fullName": "Cansu Kılınç Berktaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cansu-kosucuoglu-baytekin-camsakura",
    "fullName": "Cansu Koşucuoğlu Baytekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cansu-simsek-camsakura",
    "fullName": "Cansu Şimşek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "celalettin-herek-camsakura",
    "fullName": "Celalettin Herek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cemal-bes-camsakura",
    "fullName": "Cemal Bes",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cemal-firat-subasi-camsakura",
    "fullName": "Cemal Fırat Subaşı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cemalettin-aydin-camsakura",
    "fullName": "Cemalettin Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cengiz-bayram-camsakura",
    "fullName": "Cengiz Bayram",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cengiz-gul-camsakura",
    "fullName": "Cengiz Gül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cengiz-havali-camsakura",
    "fullName": "Cengiz Havalı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cengiz-yagmur-camsakura",
    "fullName": "Cengiz Yağmur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ceren-tansu-yavuz-camsakura",
    "fullName": "Ceren Tansu Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ceylan-koksal-camsakura",
    "fullName": "Ceylan Köksal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cihan-uysal-camsakura",
    "fullName": "Cihan Uysal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "damla-azakli-yazici-camsakura",
    "fullName": "Damla Azaklı Yazıcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "damla-karatas-camsakura",
    "fullName": "Damla Karataş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "defne-ozkoca-camsakura",
    "fullName": "Defne Özkoca",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "demet-acar-camsakura",
    "fullName": "Demet Acar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "deniz-dilan-naki-tekin-camsakura",
    "fullName": "Deniz Dilan Naki Tekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "deniz-polisci-camsakura",
    "fullName": "Deniz Polisci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "derya-selamoglu-camsakura",
    "fullName": "Derya Selamoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dogan-kiral-camsakura",
    "fullName": "Doğan Kıral",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-akyol-camsakura",
    "fullName": "Duygu Akyol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-acar-camsakura",
    "fullName": "Duygu Açar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-genc-albayrak-camsakura",
    "fullName": "Duygu Genç Albayrak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-kinay-ermis-camsakura",
    "fullName": "Duygu Kınay Ermiş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-cetinkaya-camsakura",
    "fullName": "Duygu Çetinkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-ozkorucu-yildirgan-camsakura",
    "fullName": "Duygu Özkorucu Yıldırgan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "duygu-inan-camsakura",
    "fullName": "Duygu İnan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dicle-aybike-filiz-karabey-camsakura",
    "fullName": "Dicle Aybike Filiz Karabey",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "didem-acarer-bugun-camsakura",
    "fullName": "Didem Acarer Bugün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "didem-sule-erdem-camsakura",
    "fullName": "Didem Şule Erdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dila-deliveli-kekec-camsakura",
    "fullName": "Dila Deliveli Kekeç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dilan-serap-cakmak-camsakura",
    "fullName": "Dilan Serap Çakmak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dilara-mermi-dibek-camsakura",
    "fullName": "Dilara Mermi Dibek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dilay-yerlioglu-ak-camsakura",
    "fullName": "Dilay Yerlioğlu Ak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "dilek-yavuzcan-ozturk-camsakura",
    "fullName": "Dilek Yavuzcan Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "diren-ozer-ozbey-camsakura",
    "fullName": "Diren Özer Özbey",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ebru-turker-mercandagi-camsakura",
    "fullName": "Ebru Türker Mercandağı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ebru-sen-camsakura",
    "fullName": "Ebru Şen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ebubekir-akpinar-camsakura",
    "fullName": "Ebubekir Akpınar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ece-atak-camsakura",
    "fullName": "Ece Atak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ece-yasemin-demirkol-camsakura",
    "fullName": "Ece Yasemin Demirkol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ece-ozal-camsakura",
    "fullName": "Ece Özal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ecem-bengisu-dervisoglu-camsakura",
    "fullName": "Ecem Bengisu Dervişoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ecem-demir-camsakura",
    "fullName": "Ecem Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ecren-parlak-kuvvet-camsakura",
    "fullName": "Ecren Parlak Kuvvet",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eda-alp-camsakura",
    "fullName": "Eda Alp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eda-zeynep-arikan-camsakura",
    "fullName": "Eda Zeynep Arıkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "edanur-potak-camsakura",
    "fullName": "Edanur Potak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "egemen-ayhan-camsakura",
    "fullName": "Egemen Ayhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ekin-ece-oskan-kutucu-camsakura",
    "fullName": "Ekin Ece Oşkan Kutucu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "elif-ertan-baydemir-camsakura",
    "fullName": "Elif Ertan Baydemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "elif-guven-cetin-camsakura",
    "fullName": "Elif Güven Çetin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "elif-yuce-bilgin-camsakura",
    "fullName": "Elif Yüce Bilgin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "elif-caliskan-camsakura",
    "fullName": "Elif Çalışkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "elifnur-koc-camsakura",
    "fullName": "Elifnur Koç",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emel-elif-aydemir-camsakura",
    "fullName": "Emel Elif Aydemir",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emel-hatun-aytac-kaplan-camsakura",
    "fullName": "Emel Hatun Aytaç Kaplan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emrah-bozbeyoglu-camsakura",
    "fullName": "Emrah Bozbeyoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emrah-birol-camsakura",
    "fullName": "Emrah Birol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emrah-dagdeviren-camsakura",
    "fullName": "Emrah Dağdeviren",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emre-yazgec-camsakura",
    "fullName": "Emre Yazgeç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emrullah-akay-camsakura",
    "fullName": "Emrullah Akay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emin-taha-keskin-camsakura",
    "fullName": "Emin Taha Keskin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-alev-yalin-camsakura",
    "fullName": "Emine Alev Yalın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-bilgen-dogan-camsakura",
    "fullName": "Emine Bilgen Doğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-cengiz-cavusoglu-camsakura",
    "fullName": "Emine Cengiz Çavuşoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-dilek-camsakura",
    "fullName": "Emine Dilek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-hilal-coban-camsakura",
    "fullName": "Emine Hilal Çoban",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-kirsan-ileri-camsakura",
    "fullName": "Emine Kırşan İleri",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-parlak-camsakura",
    "fullName": "Emine Parlak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-ozcan-camsakura",
    "fullName": "Emine Özcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emine-seyda-teloglu-camsakura",
    "fullName": "Emine Şeyda Teloğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emir-renda-camsakura",
    "fullName": "Emir Renda",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "emircan-ortahisar-camsakura",
    "fullName": "Emircan Ortahisar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "enes-sarac-camsakura",
    "fullName": "Enes Saraç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "enes-yavuz-camsakura",
    "fullName": "Enes Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erdal-ercan-camsakura",
    "fullName": "Erdal Ercan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erdal-karakose-camsakura",
    "fullName": "Erdal Karaköse",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erdem-kinaci-camsakura",
    "fullName": "Erdem Kınacı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erden-erkut-erkol-camsakura",
    "fullName": "Erden Erkut Erkol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eren-alpaydin-camsakura",
    "fullName": "Eren Alpaydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eren-erdogdu-camsakura",
    "fullName": "Eren Erdoğdu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eren-tuncer-camsakura",
    "fullName": "Eren Tuncer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ergin-yucel-camsakura",
    "fullName": "Ergin Yücel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erhan-kurt-camsakura",
    "fullName": "Erhan Kurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erkan-akkus-camsakura",
    "fullName": "Erkan Akkuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erkut-ozturk-camsakura",
    "fullName": "Erkut Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erol-sagatli-camsakura",
    "fullName": "Erol Sağatlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "erol-oksuz-camsakura",
    "fullName": "Erol Öksüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ersoy-engin-camsakura",
    "fullName": "Ersoy Engin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ersin-ibisoglu-camsakura",
    "fullName": "Ersin İbişoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ertugrul-bisgin-camsakura",
    "fullName": "Ertuğrul Bişgin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esat-hayat-camsakura",
    "fullName": "Esat Hayat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esma-nur-konur-akbas-camsakura",
    "fullName": "Esma Nur Konur Akbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-arslantas-camsakura",
    "fullName": "Esra Arslantaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-deniz-kahvecioglu-camsakura",
    "fullName": "Esra Deniz Kahvecioğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-donmez-camsakura",
    "fullName": "Esra Dönmez",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-fersan-camsakura",
    "fullName": "Esra Fersan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-ugurlu-camsakura",
    "fullName": "Esra Uğurlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-sevketoglu-camsakura",
    "fullName": "Esra Şevketoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esra-suheda-hatipoglu-camsakura",
    "fullName": "Esra Şüheda Hatipoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esin-nagihan-benlice-camsakura",
    "fullName": "Esin Nagihan Benlice",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esin-nur-tasdemir-camsakura",
    "fullName": "Esin Nur Taşdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esin-yildiz-aldemir-camsakura",
    "fullName": "Esin Yıldız Aldemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esin-cevik-camsakura",
    "fullName": "Esin Çevik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "esin-sair-camsakura",
    "fullName": "Esin Şair",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "evrim-coskun-camsakura",
    "fullName": "Evrim Coşkun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "evin-bozcali-polat-camsakura",
    "fullName": "Evin Bozçalı Polat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eymen-recep-camsakura",
    "fullName": "Eymen Recep",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eymen-ozer-camsakura",
    "fullName": "Eymen Özer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eyup-sabri-akagunduz-camsakura",
    "fullName": "Eyüp Sabri Akagündüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "eyup-ozkan-camsakura",
    "fullName": "Eyüp Özkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ezgi-akpinar-sahin-camsakura",
    "fullName": "Ezgi Akpınar Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ezgi-gokdemir-camsakura",
    "fullName": "Ezgi Gökdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ezgi-pasli-uysalol-camsakura",
    "fullName": "Ezgi Paslı Uysalol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fahri-onur-aydin-camsakura",
    "fullName": "Fahri Onur Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fahir-sencan-camsakura",
    "fullName": "Fahir Şencan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fatma-feyza-nur-keskin-perk-camsakura",
    "fullName": "Fatma Feyza Nur Keskin Perk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fatma-sarac-camsakura",
    "fullName": "Fatma Saraç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fatma-savur-camsakura",
    "fullName": "Fatma Savur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fatma-selin-kaya-camsakura",
    "fullName": "Fatma Selin Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fatih-palit-camsakura",
    "fullName": "Fatih Palıt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fazilet-melikoglu-camsakura",
    "fullName": "Fazilet Melikoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fazilet-ozturk-camsakura",
    "fullName": "Fazilet Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fergane-mehmedova-camsakura",
    "fullName": "Fergane Mehmedova",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ferhat-yildiz-camsakura",
    "fullName": "Ferhat Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "feride-karakus-kanbolat-camsakura",
    "fullName": "Feride Karakuş Kanbolat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ferit-cetinkaya-camsakura",
    "fullName": "Ferit Çetinkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "feyyaz-gungor-camsakura",
    "fullName": "Feyyaz Güngör",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "feyza-yildirim-tasgin-camsakura",
    "fullName": "Feyza Yıldırım Taşğın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "firat-demir-camsakura",
    "fullName": "Fırat Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "firat-oz-camsakura",
    "fullName": "Fırat Öz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fuad-aghazada-camsakura",
    "fullName": "Fuad Aghazada",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "funda-gumus-ozcan-camsakura",
    "fullName": "Funda Gümüş Özcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "funda-ozlem-pamuk-camsakura",
    "fullName": "Funda Özlem Pamuk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "furkan-bahadir-alptekin-camsakura",
    "fullName": "Furkan Bahadır Alptekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "furkan-tontu-camsakura",
    "fullName": "Furkan Tontu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "fusun-unal-camsakura",
    "fullName": "Füsun Ünal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "figen-cakmak-camsakura",
    "fullName": "Figen Çakmak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "filiz-azman-iste-camsakura",
    "fullName": "Filiz Azman İste",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "firuze-delen-camsakura",
    "fullName": "Firuze Delen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gamze-gubse-yaldiz-sapan-camsakura",
    "fullName": "Gamze Gubse Yaldız Sapan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gamze-cebi-akgun-camsakura",
    "fullName": "Gamze Çebi Akgün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gazi-guner-camsakura",
    "fullName": "Gazi Güner",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gonca-yazici-sacaklidir-camsakura",
    "fullName": "Gonca Yazıcı Saçaklıdır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokhan-gunes-camsakura",
    "fullName": "Gökhan Güneş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokhan-yirgin-camsakura",
    "fullName": "Gökhan Yırgın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokhan-ceker-camsakura",
    "fullName": "Gökhan Çeker",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokhan-ispir-camsakura",
    "fullName": "Gökhan İspir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokmen-umut-erdem-camsakura",
    "fullName": "Gökmen Umut Erdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "goknur-ozaydin-yavuz-camsakura",
    "fullName": "Göknur Özaydın Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "goksel-cinier-camsakura",
    "fullName": "Göksel Çinier",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokce-altin-camsakura",
    "fullName": "Gökçe Altın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gokce-cinli-camsakura",
    "fullName": "Gökçe Cinli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gonul-kirmizi-camsakura",
    "fullName": "Gönül Kırmızı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gorkem-ercin-esen-camsakura",
    "fullName": "Görkem Erçin Esen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gorkem-yildiz-camsakura",
    "fullName": "Görkem Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gozde-sahin-camsakura",
    "fullName": "Gözde Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulay-yilmaz-camsakura",
    "fullName": "Gülay Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulay-ozboluk-camsakura",
    "fullName": "Gülay Özbölük",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulden-guven-camsakura",
    "fullName": "Gülden Güven",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "guler-ozgul-camsakura",
    "fullName": "Güler Özgül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulhan-gunes-elci-camsakura",
    "fullName": "Gülhan Güneş Elçi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulhan-tunca-sahin-camsakura",
    "fullName": "Gülhan Tunca Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulpinar-tepe-camsakura",
    "fullName": "Gülpınar Tepe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulru-avci-camsakura",
    "fullName": "Gülru Avcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulcin-bostan-camsakura",
    "fullName": "Gülçin Bostan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulistan-alpagat-camsakura",
    "fullName": "Gülistan Alpağat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gulistan-oyur-camsakura",
    "fullName": "Gülistan Oyur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gunduzalp-bugrahan-babacan-camsakura",
    "fullName": "Gündüzalp Buğrahan Babacan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gungor-tastekin-camsakura",
    "fullName": "Güngör Taştekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gungor-ustun-camsakura",
    "fullName": "Güngör Üstün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gungor-ilayda-bostanci-alp-camsakura",
    "fullName": "Güngör İlayda Bostancı Alp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gunsel-kutluk-camsakura",
    "fullName": "Günsel Kutluk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "guray-tuna-camsakura",
    "fullName": "Güray Tuna",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gursel-yildiz-camsakura",
    "fullName": "Gürsel Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "guven-akalin-guducu-camsakura",
    "fullName": "Güven Akalın Güdücü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gizem-pinar-sirin-camsakura",
    "fullName": "Gizem Pınar Şirin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gizem-sari-camsakura",
    "fullName": "Gizem Sarı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "gizem-sirin-donbaloglu-camsakura",
    "fullName": "Gizem Şirin Donbaloğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "habip-ertay-atalar-camsakura",
    "fullName": "Habip Ertay Atalar",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hafize-dilek-sualp-camsakura",
    "fullName": "Hafize Dilek Süalp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hakan-baybora-camsakura",
    "fullName": "Hakan Baybora",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hakan-erenel-camsakura",
    "fullName": "Hakan Erenel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hakan-kirit-camsakura",
    "fullName": "Hakan Kırıt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hakan-sirin-camsakura",
    "fullName": "Hakan Şirin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "halil-lutfi-canat-camsakura",
    "fullName": "Halil Lutfi Canat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "halil-ozgun-yigit-camsakura",
    "fullName": "Halil Özgün Yiğit",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "halise-zeynep-genc-camsakura",
    "fullName": "Halise Zeynep Genç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hamdi-pusuroglu-camsakura",
    "fullName": "Hamdi Püşüroğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hamide-ercan-camsakura",
    "fullName": "Hamide Ercan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hamide-sevinc-genc-camsakura",
    "fullName": "Hamide Sevinç Genç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hamit-gokhan-nokay-camsakura",
    "fullName": "Hamit Gökhan Nokay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "handan-turhan-karakus-camsakura",
    "fullName": "Handan Turhan Karakuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hande-kirisman-keles-camsakura",
    "fullName": "Hande Kırışman Keleş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hanim-hulya-alinay-camsakura",
    "fullName": "Hanım Hülya Alınay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hanne-sena-tasdemir-camsakura",
    "fullName": "Hanne Sena Taşdemir",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hanife-usta-atmaca-camsakura",
    "fullName": "Hanife Usta Atmaca",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "harbiye-dilek-canat-camsakura",
    "fullName": "Harbiye Dilek Canat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "harun-ozdemir-camsakura",
    "fullName": "Harun Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hasan-akin-camsakura",
    "fullName": "Hasan Akın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hasan-goze-camsakura",
    "fullName": "Hasan Göze",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hasan-mervan-aytac-camsakura",
    "fullName": "Hasan Mervan Aytaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hasan-onal-camsakura",
    "fullName": "Hasan Önal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hatun-deniz-aytac-camsakura",
    "fullName": "Hatun Deniz Aytaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hatice-dilara-karakas-camsakura",
    "fullName": "Hatice Dilara Karakaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hatice-dilek-ozcanoglu-camsakura",
    "fullName": "Hatice Dilek Özcanoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hatice-kubra-yerisenoglu-demir-camsakura",
    "fullName": "Hatice Kübra Yerişenoğlu Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "havva-kaldirim-camsakura",
    "fullName": "Havva Kaldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "havva-sevde-taha-camsakura",
    "fullName": "Havva Sevde Taha",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "havvanur-bayraktar-camsakura",
    "fullName": "Havvanur Bayraktar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hayrettin-sever-camsakura",
    "fullName": "Hayrettin Sever",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hazan-dagli-aslan-camsakura",
    "fullName": "Hazan Dağlı Aslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hasim-atakan-erol-camsakura",
    "fullName": "Haşim Atakan Erol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hediye-eker-camsakura",
    "fullName": "Hediye Eker",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hulusi-burak-tanir-camsakura",
    "fullName": "Hulusi Burak Tanır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hulya-cilingir-camsakura",
    "fullName": "Hülya Çilingir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "humeyra-akbas-camsakura",
    "fullName": "Hümeyra Akbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huru-ceren-gokduman-camsakura",
    "fullName": "Hürü Ceren Gökduman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huriye-senay-kiziltan-camsakura",
    "fullName": "Hüriye Şenay Kızıltan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huseyin-kilavuz-camsakura",
    "fullName": "Hüseyin Kılavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huseyin-mutlu-camsakura",
    "fullName": "Hüseyin Mutlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huseyin-ozturk-camsakura",
    "fullName": "Hüseyin Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "huseyin-sehit-burhan-camsakura",
    "fullName": "Hüseyin Şehit Burhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "husna-kaan-camsakura",
    "fullName": "Hüsna Kaan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hikmet-zeynep-agaoglu-camsakura",
    "fullName": "Hikmet Zeynep Ağaoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-akyuz-camsakura",
    "fullName": "Hilal Akyüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-akca-camsakura",
    "fullName": "Hilal Akça",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-guner-kucukgedik-camsakura",
    "fullName": "Hilal Güner Küçükgedik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-kunkul-bayraktar-camsakura",
    "fullName": "Hilal Künkül Bayraktar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-yilmaz-camsakura",
    "fullName": "Hilal Yılmaz",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-ozkaya-camsakura",
    "fullName": "Hilal Özkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "hilal-ozturk-camsakura",
    "fullName": "Hilal Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isik-sozen-camsakura",
    "fullName": "Işık Sözen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isil-aladagli-camsakura",
    "fullName": "Işıl Aladağlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isil-tatlidil-camsakura",
    "fullName": "Işıl Tatlıdil",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isil-turan-bakirci-camsakura",
    "fullName": "Işıl Turan Bakırcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isil-turel-camsakura",
    "fullName": "Işıl Türel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "jelena-grusina-uyumaz-camsakura",
    "fullName": "Jelena Grusına Uyumaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kader-irak-camsakura",
    "fullName": "Kader İrak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kadir-cevik-camsakura",
    "fullName": "Kadir Çevik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kahraman-yakut-camsakura",
    "fullName": "Kahraman Yakut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kamer-tandogan-camsakura",
    "fullName": "Kamer Tandoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kamile-guveli-camsakura",
    "fullName": "Kamile Güveli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kardelen-altin-camsakura",
    "fullName": "Kardelen Altın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "karolin-ohanoglu-cetinel-camsakura",
    "fullName": "Karolin Ohanoğlu Çetinel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kartal-emre-aslanger-camsakura",
    "fullName": "Kartal Emre Aslanger",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kagan-cevlik-camsakura",
    "fullName": "Kağan Çevlik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kemal-kutanis-camsakura",
    "fullName": "Kemal Kutanis",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kemal-topaloglu-camsakura",
    "fullName": "Kemal Topaloğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kimia-cepni-camsakura",
    "fullName": "Kımıa Çepni",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kurtulus-oz-camsakura",
    "fullName": "Kurtuluş Öz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kubra-cebeci-camsakura",
    "fullName": "Kübra Cebeci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kubra-kalkan-camsakura",
    "fullName": "Kübra Kalkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kubra-keskin-toptas-camsakura",
    "fullName": "Kübra Keskin Toptaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kubra-kurt-bilirer-camsakura",
    "fullName": "Kübra Kurt Bilirer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kubra-nur-toplutas-camsakura",
    "fullName": "Kübra Nur Toplutaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "kursat-epozturk-camsakura",
    "fullName": "Kürşat Epöztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "lale-gundogdu-camsakura",
    "fullName": "Lale Gündoğdu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "lale-yilmaz-celik-camsakura",
    "fullName": "Lale Yılmaz Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "levent-pay-camsakura",
    "fullName": "Levent Pay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "lezgin-mert-camsakura",
    "fullName": "Lezgin Mert",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "lutfi-sinasi-postalci-camsakura",
    "fullName": "Lütfi Şinasi Postalcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mahmut-yassa-camsakura",
    "fullName": "Mahmut Yassa",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "malik-koc-camsakura",
    "fullName": "Malik Koç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehlika-iscan-camsakura",
    "fullName": "Mehlika İşcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmed-yanartas-camsakura",
    "fullName": "Mehmed Yanartaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-akif-durmus-camsakura",
    "fullName": "Mehmet Akif Durmuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-akif-ozgul-camsakura",
    "fullName": "Mehmet Akif Özgül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-ali-talmac-camsakura",
    "fullName": "Mehmet Ali Talmaç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-arda-kilinc-camsakura",
    "fullName": "Mehmet Arda Kılınç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-emin-kalkan-camsakura",
    "fullName": "Mehmet Emin Kalkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-emin-menentoglu-camsakura",
    "fullName": "Mehmet Emin Menentoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-erdem-cakmak-camsakura",
    "fullName": "Mehmet Erdem Çakmak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-ersin-ayni-camsakura",
    "fullName": "Mehmet Ersin Aynı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-faruk-cekmeceli-camsakura",
    "fullName": "Mehmet Faruk Çekmeceli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-fatih-altintepe-camsakura",
    "fullName": "Mehmet Fatih Altıntepe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-fatih-yargi-camsakura",
    "fullName": "Mehmet Fatih Yargı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-gumustas-camsakura",
    "fullName": "Mehmet Gümüştaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-halil-celiksoy-camsakura",
    "fullName": "Mehmet Halil Çeliksoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-karasakal-camsakura",
    "fullName": "Mehmet Karasakal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-kemal-gursoy-camsakura",
    "fullName": "Mehmet Kemal Gürsoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-keskin-camsakura",
    "fullName": "Mehmet Keskin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-kulus-camsakura",
    "fullName": "Mehmet Kulus",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-nail-bilen-camsakura",
    "fullName": "Mehmet Nail Bilen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-nuri-karabulut-camsakura",
    "fullName": "Mehmet Nuri Karabulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-okan-donbaloglu-camsakura",
    "fullName": "Mehmet Okan Donbaloğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-onur-gokalp-camsakura",
    "fullName": "Mehmet Onur Gökalp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-rasih-sonsoz-camsakura",
    "fullName": "Mehmet Rasih Sonsöz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-semih-ari-camsakura",
    "fullName": "Mehmet Semih Arı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-turan-basunlu-camsakura",
    "fullName": "Mehmet Turan Basunlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-turkmencalikoglu-camsakura",
    "fullName": "Mehmet Türkmençalıkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-uzun-camsakura",
    "fullName": "Mehmet Uzun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-yazici-camsakura",
    "fullName": "Mehmet Yazıcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-yasasin-camsakura",
    "fullName": "Mehmet Yaşasın",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-yener-caliskaner-camsakura",
    "fullName": "Mehmet Yener Çalışkaner",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-cakir-camsakura",
    "fullName": "Mehmet Çakır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-onut-camsakura",
    "fullName": "Mehmet Önüt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-ozgur-cubuk-camsakura",
    "fullName": "Mehmet Özgür Çubuk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehmet-unal-camsakura",
    "fullName": "Mehmet Ünal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mehtap-uslu-camsakura",
    "fullName": "Mehtap Uslu",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "melek-tufan-yucesoy-camsakura",
    "fullName": "Melek Tufan Yücesoy",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meltem-akinbingol-camsakura",
    "fullName": "Meltem Akınbingöl",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meltem-gunaydin-camsakura",
    "fullName": "Meltem Günaydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "melih-civan-camsakura",
    "fullName": "Melih Civan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "melih-cagri-elci-camsakura",
    "fullName": "Melih Çağrı Elçi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meliha-aksoy-camsakura",
    "fullName": "Meliha Aksoy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meliha-meric-koc-camsakura",
    "fullName": "Meliha Meriç Koç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "melike-yalcin-avcuoglu-camsakura",
    "fullName": "Melike Yalçın Avcuoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "melis-deniz-camsakura",
    "fullName": "Melis Deniz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "memduh-sahin-camsakura",
    "fullName": "Memduh Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mert-omer-terzi-camsakura",
    "fullName": "Mert Ömer Terzi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "merve-elif-ercivan-aydin-camsakura",
    "fullName": "Merve Elif Ercivan Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "merve-er-camsakura",
    "fullName": "Merve Er",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "merve-polat-onmaz-camsakura",
    "fullName": "Merve Polat Onmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "merve-uran-dogan-camsakura",
    "fullName": "Merve Uran Doğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "merve-ulku-camsakura",
    "fullName": "Merve Ülkü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meryem-kaya-camsakura",
    "fullName": "Meryem Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "meryem-sahin-ozdemir-camsakura",
    "fullName": "Meryem Şahin Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mesut-ayer-camsakura",
    "fullName": "Mesut Ayer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mesut-kosem-camsakura",
    "fullName": "Mesut Kösem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mete-ozer-camsakura",
    "fullName": "Mete Özer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "metehan-eseoglu-camsakura",
    "fullName": "Metehan Eseoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "metin-mod-camsakura",
    "fullName": "Metin Mod",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "metin-savun-camsakura",
    "fullName": "Metin Savun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "metin-yildirim-camsakura",
    "fullName": "Metin Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muhammed-bayindir-camsakura",
    "fullName": "Muhammed Bayındır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muhammed-zeki-cicek-camsakura",
    "fullName": "Muhammed Zeki Çiçek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muhammet-berkay-ozyurek-camsakura",
    "fullName": "Muhammet Berkay Özyürek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muhammet-hamza-halil-toprak-camsakura",
    "fullName": "Muhammet Hamza Halil Toprak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muhammet-okkan-camsakura",
    "fullName": "Muhammet Okkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-civan-camsakura",
    "fullName": "Murat Civan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-demir-camsakura",
    "fullName": "Murat Demir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-karapapak-camsakura",
    "fullName": "Murat Karapapak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-yasar-tas-camsakura",
    "fullName": "Murat Yaşar Taş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-yuksel-camsakura",
    "fullName": "Murat Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "murat-cabalar-camsakura",
    "fullName": "Murat Çabalar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-akman-camsakura",
    "fullName": "Mustafa Akman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-azizoglu-camsakura",
    "fullName": "Mustafa Azizoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-berkay-kilic-camsakura",
    "fullName": "Mustafa Berkay Kılıç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-can-sivas-camsakura",
    "fullName": "Mustafa Can Sivas",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-donmez-camsakura",
    "fullName": "Mustafa Dönmez",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-karaarslan-camsakura",
    "fullName": "Mustafa Karaarslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-karatas-camsakura",
    "fullName": "Mustafa Karataş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-pehlivan-camsakura",
    "fullName": "Mustafa Pehlivan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-turan-camsakura",
    "fullName": "Mustafa Turan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-carkci-camsakura",
    "fullName": "Mustafa Çarkçı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-ozdemir-camsakura",
    "fullName": "Mustafa Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mustafa-ozsutcu-camsakura",
    "fullName": "Mustafa Özsütcü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mutlu-niyazoglu-camsakura",
    "fullName": "Mutlu Niyazoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muzaffer-gencer-camsakura",
    "fullName": "Muzaffer Gencer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muzaffer-zeki-duman-camsakura",
    "fullName": "Muzaffer Zeki Duman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "mucahid-kulaksiz-camsakura",
    "fullName": "Mücahid Kulaksız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muge-payasli-camsakura",
    "fullName": "Müge Payaslı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muge-unlu-camsakura",
    "fullName": "Müge Ünlü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "munise-seda-ozaltin-yurter-camsakura",
    "fullName": "Münise Seda Özaltın Yurter",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "muyesser-nergiz-yanmaz-camsakura",
    "fullName": "Müyesser Nergiz Yanmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "romatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nadira-nabiyeva-cevik-camsakura",
    "fullName": "Nadıra Nabıyeva Çevik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nagehan-bilgili-ozgur-camsakura",
    "fullName": "Nagehan Bilgili Özgür",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazli-bahar-ozbey-camsakura",
    "fullName": "Nazlı Bahar Özbey",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazli-elif-dogan-moustafa-camsakura",
    "fullName": "Nazlı Elif Doğan Moustafa",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazli-huma-teke-camsakura",
    "fullName": "Nazlı Hüma Teke",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazlican-bockun-egitmen-camsakura",
    "fullName": "Nazlıcan Böçkün Eğitmen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazmiye-nilgun-karadag-camsakura",
    "fullName": "Nazmiye Nilgün Karadağ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazif-bilicier-camsakura",
    "fullName": "Nazif Bilicier",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nazime-binnur-comert-camsakura",
    "fullName": "Nazime Binnur Cömert",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nebahat-bulut-camsakura",
    "fullName": "Nebahat Bulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nebil-aydin-camsakura",
    "fullName": "Nebil Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "necmiye-ay-camsakura",
    "fullName": "Necmiye Ay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nermin-kapci-camsakura",
    "fullName": "Nermin Kapçı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "neslihan-duman-camsakura",
    "fullName": "Neslihan Duman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nevzat-yakisir-camsakura",
    "fullName": "Nevzat Yakışır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nevin-cambaz-kurt-camsakura",
    "fullName": "Nevin Cambaz Kurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nezahat-nurefsan-evli-camsakura",
    "fullName": "Nezahat Nurefşan Evli",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "numan-gorgulu-camsakura",
    "fullName": "Numan Görgülü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nur-betul-sancak-demirci-camsakura",
    "fullName": "Nur Betül Sancak Demirci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nur-nazire-yucal-camsakura",
    "fullName": "Nur Nazire Yucal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nur-sema-deniz-camsakura",
    "fullName": "Nur Sema Deniz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nur-terzi-altan-camsakura",
    "fullName": "Nur Terzi Altan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nuran-karabulut-camsakura",
    "fullName": "Nuran Karabulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nurdan-kasar-camsakura",
    "fullName": "Nurdan Kasar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nurdan-uras-camsakura",
    "fullName": "Nurdan Uraş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nurettin-onur-kutlu-camsakura",
    "fullName": "Nurettin Onur Kutlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nurhadiye-kuru-camsakura",
    "fullName": "Nurhadiye Kuru",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nurhayat-yakut-camsakura",
    "fullName": "Nurhayat Yakut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nuriye-demirkan-camsakura",
    "fullName": "Nuriye Demirkan",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nushaba-abdullayeva-camsakura",
    "fullName": "Nushaba Abdullayeva",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nida-oztop-uz-camsakura",
    "fullName": "Nida Öztop Uz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nihan-guner-korkmaz-camsakura",
    "fullName": "Nihan Güner Korkmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nihan-kayalar-camsakura",
    "fullName": "Nihan Kayalar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nilay-tasdemir-hasanbas-camsakura",
    "fullName": "Nilay Taşdemir Hasanbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nilufer-aktura-camsakura",
    "fullName": "Nilüfer Aktura",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nilufer-bulut-camsakura",
    "fullName": "Nilüfer Bulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nisan-ucer-bahadir-camsakura",
    "fullName": "Nisan Üçer Bahadır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "nizam-kurtdere-camsakura",
    "fullName": "Nizam Kurtdere",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "okyar-altas-camsakura",
    "fullName": "Okyar Altaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omca-guney-camsakura",
    "fullName": "Omca Güney",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "onur-dursun-tombaz-camsakura",
    "fullName": "Onur Dursun Tombaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "onur-ozalp-camsakura",
    "fullName": "Onur Özalp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "orhan-gokturk-camsakura",
    "fullName": "Orhan Göktürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "orhan-sahin-camsakura",
    "fullName": "Orhan Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "osman-bilen-camsakura",
    "fullName": "Osman Bilen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "osman-can-camsakura",
    "fullName": "Osman Can",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "osman-fehmi-beyazal-camsakura",
    "fullName": "Osman Fehmi Beyazal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "osman-tanriverdi-camsakura",
    "fullName": "Osman Tanrıverdi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oya-guclu-camsakura",
    "fullName": "Oya Güçlü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozan-hasimoglu-camsakura",
    "fullName": "Ozan Haşimoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozan-sonbahar-camsakura",
    "fullName": "Ozan Sonbahar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozan-tuysuz-camsakura",
    "fullName": "Ozan Tüysüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oguz-kaan-kutucu-camsakura",
    "fullName": "Oğuz Kaan Kutucu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oguzhan-aydin-camsakura",
    "fullName": "Oğuzhan Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oguzhan-elci-camsakura",
    "fullName": "Oğuzhan Elçi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oguzhan-tekin-camsakura",
    "fullName": "Oğuzhan Tekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pakizer-banu-kilicoglu-dane-camsakura",
    "fullName": "Pakizer Banu Kılıçoğlu Dane",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "peren-perk-camsakura",
    "fullName": "Peren Perk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "percin-caskan-camsakura",
    "fullName": "Perçin Caşkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-arican-camsakura",
    "fullName": "Pınar Arıcan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-gun-camsakura",
    "fullName": "Pınar Gün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-kundi-camsakura",
    "fullName": "Pınar Kundi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-yamac-dilaver-camsakura",
    "fullName": "Pınar Yamaç Dilaver",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-yesil-aksu-camsakura",
    "fullName": "Pınar Yeşil Aksu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-ozkan-camsakura",
    "fullName": "Pınar Özkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "pinar-oztop-ciftkaya-camsakura",
    "fullName": "Pınar Öztop Çiftkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "rabia-ata-camsakura",
    "fullName": "Rabia Ata",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "rabia-bag-soytas-camsakura",
    "fullName": "Rabia Bağ Soytaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ramazan-korkusuz-camsakura",
    "fullName": "Ramazan Korkusuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ramazan-ugur-camsakura",
    "fullName": "Ramazan Uğur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ramazan-sahin-camsakura",
    "fullName": "Ramazan Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "raziye-handan-nurhat-camsakura",
    "fullName": "Raziye Handan Nurhat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "recep-bastug-camsakura",
    "fullName": "Recep Baştuğ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "reyhan-ertan-camsakura",
    "fullName": "Reyhan Ertan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "reza-karabagli-camsakura",
    "fullName": "Reza Karabağlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "reside-borce-aydin-camsakura",
    "fullName": "Reşide Börçe Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "riza-deryol-camsakura",
    "fullName": "Rıza Deryol",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "riza-ozbek-camsakura",
    "fullName": "Rıza Özbek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "royca-kelesoglu-yildiz-camsakura",
    "fullName": "Royça Keleşoğlu Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ruhi-esme-camsakura",
    "fullName": "Ruhi Eşme",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ruken-abul-toz-camsakura",
    "fullName": "Ruken Abul Toz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sadettin-selcuk-baysal-camsakura",
    "fullName": "Sadettin Selçuk Baysal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sadik-altan-ozal-camsakura",
    "fullName": "Sadık Altan Özal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "safiye-giran-ortekin-camsakura",
    "fullName": "Safiye Giran Örtekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "saltanat-mert-camsakura",
    "fullName": "Saltanat Mert",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "salih-zeki-kadioglu-camsakura",
    "fullName": "Salih Zeki Kadıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "saide-erturk-camsakura",
    "fullName": "Saide Ertürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seda-bozduman-celebi-camsakura",
    "fullName": "Seda Bozduman Çelebi",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seda-erdogan-camsakura",
    "fullName": "Seda Erdoğan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seda-ozdagli-camsakura",
    "fullName": "Seda Özdağlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sedat-ozdemir-camsakura",
    "fullName": "Sedat Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sefa-bayram-camsakura",
    "fullName": "Sefa Bayram",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selda-komec-camsakura",
    "fullName": "Selda Kömeç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selma-ozgur-camsakura",
    "fullName": "Selma Özgür",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selvi-aydin-senel-camsakura",
    "fullName": "Selvi Aydın Şenel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selin-saglam-camsakura",
    "fullName": "Selin Sağlam",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selin-ozmen-onur-camsakura",
    "fullName": "Selin Özmen Onur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selin-ustun-bezgin-camsakura",
    "fullName": "Selin Üstün Bezgin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "selinay-ayan-camsakura",
    "fullName": "Selinay Ayan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sema-alacam-camsakura",
    "fullName": "Sema Alaçam",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sema-tuncer-camsakura",
    "fullName": "Sema Tuncer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "semih-kalkan-camsakura",
    "fullName": "Semih Kalkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sena-beyazyildirim-besli-camsakura",
    "fullName": "Sena Beyazyıldırım Besli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sercan-yuksel-camsakura",
    "fullName": "Sercan Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serdar-bozlak-camsakura",
    "fullName": "Serdar Bozlak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serdar-onur-aydin-camsakura",
    "fullName": "Serdar Onur Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serdar-toy-camsakura",
    "fullName": "Serdar Toy",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seren-kirmizi-ozgul-camsakura",
    "fullName": "Seren Kırmızı Özgül",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serhat-ermis-camsakura",
    "fullName": "Serhat Ermiş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serhat-soylu-camsakura",
    "fullName": "Serhat Soylu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serkan-sari-camsakura",
    "fullName": "Serkan Sarı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "servet-ergun-camsakura",
    "fullName": "Servet Ergün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevda-yazicioglu-camsakura",
    "fullName": "Sevda Yazıcıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevgi-herek-camsakura",
    "fullName": "Sevgi Herek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevgi-yavuz-camsakura",
    "fullName": "Sevgi Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevil-azazoglu-erbek-camsakura",
    "fullName": "Sevil Azazoğlu Erbek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevil-tugrul-yavuz-camsakura",
    "fullName": "Sevil Tuğrul Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevinc-kaptan-camsakura",
    "fullName": "Sevinç Kaptan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sezer-akbulut-camsakura",
    "fullName": "Sezer Akbulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sezin-naiboglu-camsakura",
    "fullName": "Sezin Naiboğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "shamkhal-safarov-camsakura",
    "fullName": "Shamkhal Safarov",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sleva-solgun-camsakura",
    "fullName": "Sleva Solğun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "soner-arik-camsakura",
    "fullName": "Soner Arık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sonnur-durmus-camsakura",
    "fullName": "Sonnur Durmuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "soykan-arikan-camsakura",
    "fullName": "Soykan Arıkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suat-can-ulukent-camsakura",
    "fullName": "Suat Can Ulukent",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suat-yalcin-camsakura",
    "fullName": "Suat Yalçın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suheyla-piyade-camsakura",
    "fullName": "Süheyla Piyade",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suleyman-hilmi-ozkiris-camsakura",
    "fullName": "Süleyman Hilmi Özkırış",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suleyman-yazici-camsakura",
    "fullName": "Süleyman Yazıcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suleyman-yildirim-camsakura",
    "fullName": "Süleyman Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "suleyman-sahin-camsakura",
    "fullName": "Süleyman Şahin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sumeyya-akyildirim-camsakura",
    "fullName": "Sümeyya Akyıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sumeyye-kolcuk-aygun-camsakura",
    "fullName": "Sümeyye Kolcuk Aygün",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-akpinar-tekgunduz-camsakura",
    "fullName": "Sibel Akpınar Tekgündüz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-baktir-altuntas-camsakura",
    "fullName": "Sibel Baktır Altuntaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-guler-camsakura",
    "fullName": "Sibel Güler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-gulcicek-camsakura",
    "fullName": "Sibel Gülçiçek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "nefroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-yurt-camsakura",
    "fullName": "Sibel Yurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sibel-celiker-uslu-camsakura",
    "fullName": "Sibel Çeliker Uslu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "simge-seren-kirlioglu-balcioglu-camsakura",
    "fullName": "Simge Seren Kırlıoğlu Balcıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sinan-erkul-camsakura",
    "fullName": "Sinan Erkul",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sinan-obut-camsakura",
    "fullName": "Sinan Obut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sinan-ozgur-camsakura",
    "fullName": "Sinan Özgür",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tahir-alper-cinli-camsakura",
    "fullName": "Tahir Alper Cinli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "talha-sarigoz-camsakura",
    "fullName": "Talha Sarıgöz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "taner-abdullah-camsakura",
    "fullName": "Taner Abdullah",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tolgahan-korkmaz-camsakura",
    "fullName": "Tolgahan Korkmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tuba-erdem-sit-camsakura",
    "fullName": "Tuba Erdem Şit",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tuba-nur-tahtakesen-gucer-camsakura",
    "fullName": "Tuba Nur Tahtakesen Güçer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tuba-soysal-camsakura",
    "fullName": "Tuba Soysal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tuba-tanyel-saracoglu-camsakura",
    "fullName": "Tuba Tanyel Saraçoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tuna-eren-esen-camsakura",
    "fullName": "Tuna Eren Esen",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "turan-ozdemir-camsakura",
    "fullName": "Turan Özdemir",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugba-kupeli-camsakura",
    "fullName": "Tuğba Küpeli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugba-matlim-ozel-camsakura",
    "fullName": "Tuğba Matlım Özel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugba-parlakay-uzun-camsakura",
    "fullName": "Tuğba Parlakay Uzun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugba-sarikaya-camsakura",
    "fullName": "Tuğba Sarıkaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugrul-burak-genc-camsakura",
    "fullName": "Tuğrul Burak Genç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugce-dursun-yilmazsamli-camsakura",
    "fullName": "Tuğçe Dursun Yılmazşamlı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tugce-karakoc-camsakura",
    "fullName": "Tuğçe Karakoç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "tulin-ogreden-camsakura",
    "fullName": "Tülin Öğreden",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "turkan-dubus-camsakura",
    "fullName": "Türkan Dübüş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ufuk-yildiz-camsakura",
    "fullName": "Ufuk Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "umran-sumeyse-elbahr-camsakura",
    "fullName": "Umran Şumeyse Elbahr",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "umut-eraslan-camsakura",
    "fullName": "Umut Eraslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ural-kaptan-camsakura",
    "fullName": "Ural Kaptan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ugur-ozan-demirhan-camsakura",
    "fullName": "Uğur Ozan Demirhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ugur-onal-camsakura",
    "fullName": "Uğur Önal",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "vahide-nagehan-aslan-camsakura",
    "fullName": "Vahide Nagehan Aslan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "veli-polat-camsakura",
    "fullName": "Veli Polat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "verda-alpay-camsakura",
    "fullName": "Verda Alpay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "veysel-altindag-camsakura",
    "fullName": "Veysel Altındağ",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "veysel-sezgin-camsakura",
    "fullName": "Veysel Sezgin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "vildan-guzel-camsakura",
    "fullName": "Vildan Güzel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yakub-anlagan-camsakura",
    "fullName": "Yakub Anlağan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yalcin-alimoglu-camsakura",
    "fullName": "Yalçın Alimoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yasin-anasiz-camsakura",
    "fullName": "Yasin Anasız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yasin-canbaz-camsakura",
    "fullName": "Yasin Canbaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yasin-caliskan-camsakura",
    "fullName": "Yasin Çalışkan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yavuz-altunkaynak-camsakura",
    "fullName": "Yavuz Altunkaynak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yasar-tanir-camsakura",
    "fullName": "Yaşar Tanır",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yekta-furkan-altin-camsakura",
    "fullName": "Yekta Furkan Altın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yelda-dervis-camsakura",
    "fullName": "Yelda Derviş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yelda-parlak-camsakura",
    "fullName": "Yelda Parlak",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yelda-saltan-ozates-camsakura",
    "fullName": "Yelda Saltan Özateş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yeliz-guler-camsakura",
    "fullName": "Yeliz Güler",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yildiray-kiliccioglu-camsakura",
    "fullName": "Yıldıray Kılıçcıoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yunus-avci-camsakura",
    "fullName": "Yunus Avcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yunus-karabela-camsakura",
    "fullName": "Yunus Karabela",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yusuf-berk-akbas-camsakura",
    "fullName": "Yusuf Berk Akbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yusuf-cem-yilmaz-camsakura",
    "fullName": "Yusuf Cem Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yusuf-sait-durak-camsakura",
    "fullName": "Yusuf Sait Durak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yusuf-yunus-korkmaz-camsakura",
    "fullName": "Yusuf Yunus Korkmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yusuf-inci-camsakura",
    "fullName": "Yusuf İnci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yigit-can-filtekin-camsakura",
    "fullName": "Yiğit Can Filtekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yigit-duzkoylu-camsakura",
    "fullName": "Yiğit Düzköylü",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "yigit-onaloglu-camsakura",
    "fullName": "Yiğit Önaloğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zafer-orhan-camsakura",
    "fullName": "Zafer Orhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zafer-teke-camsakura",
    "fullName": "Zafer Teke",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zafer-turkoglu-camsakura",
    "fullName": "Zafer Türkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeki-temizturk-camsakura",
    "fullName": "Zeki Temiztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeki-celik-camsakura",
    "fullName": "Zeki Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "estetik-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zelal-aydin-camsakura",
    "fullName": "Zelal Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeliha-kapusuz-gencer-camsakura",
    "fullName": "Zeliha Kapusuz Gencer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeynep-betul-turkoglu-camsakura",
    "fullName": "Zeynep Betül Türkoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeynep-kayaoglu-yildirim-camsakura",
    "fullName": "Zeynep Kayaoğlu Yıldırım",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zeynep-nesibe-isik-camsakura",
    "fullName": "Zeynep Nesibe Işık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zuhtu-utku-sevimli-camsakura",
    "fullName": "Zühtü Utku Sevimli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "zulfiye-yildiz-camsakura",
    "fullName": "Zülfiye Yıldız",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cagatay-tekin-camsakura",
    "fullName": "Çağatay Tekin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cagla-karavaizoglu-camsakura",
    "fullName": "Çağla Karavaizoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "caglayan-deniz-camsakura",
    "fullName": "Çağlayan Deniz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cetin-irmak-camsakura",
    "fullName": "Çetin Irmak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cigdem-aydogmus-camsakura",
    "fullName": "Çiğdem Aydoğmuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "cigdem-koni-camsakura",
    "fullName": "Çiğdem Köni",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omer-devrim-efeturk-camsakura",
    "fullName": "Ömer Devrim Efetürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omer-faruk-bucak-camsakura",
    "fullName": "Ömer Faruk Bucak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omer-fehmi-yardi-camsakura",
    "fullName": "Ömer Fehmi Yardı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omer-genc-camsakura",
    "fullName": "Ömer Genç",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "omer-yavuz-camsakura",
    "fullName": "Ömer Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "onder-aydin-camsakura",
    "fullName": "Önder Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozge-kaba-camsakura",
    "fullName": "Özge Kaba",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozge-kucur-camsakura",
    "fullName": "Özge Kucur",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozge-yasun-camsakura",
    "fullName": "Özge Yasun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozgu-canbolat-kaplan-camsakura",
    "fullName": "Özgü Canbolat Kaplan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozgu-deniz-metin-camsakura",
    "fullName": "Özgü Deniz Metin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozgu-hancerli-camsakura",
    "fullName": "Özgü Hançerli",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozgun-cicek-camsakura",
    "fullName": "Özgün Çiçek",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozgur-bostanci-camsakura",
    "fullName": "Özgür Bostancı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozlem-altuntas-aydin-camsakura",
    "fullName": "Özlem Altuntaş Aydın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozlem-dincer-camsakura",
    "fullName": "Özlem Dinçer",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozlem-gokce-camsakura",
    "fullName": "Özlem Gökçe",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "enfeksiyon-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozlem-yilmaz-aykent-camsakura",
    "fullName": "Özlem Yılmaz Aykent",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ozlem-yuksel-camsakura",
    "fullName": "Özlem Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oznur-akil-camsakura",
    "fullName": "Öznur Akıl",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "oznur-toplu-ozgan-camsakura",
    "fullName": "Öznur Toplu Özgan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ulku-dubus-hos-camsakura",
    "fullName": "Ülkü Dübüş Hoş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "umran-yakici-camsakura",
    "fullName": "Ümran Yakıcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "umut-celik-camsakura",
    "fullName": "Ümüt Çelik",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "umit-yalcin-camsakura",
    "fullName": "Ümit Yalçın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "uzeyir-caferoglu-camsakura",
    "fullName": "Üzeyir Caferoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-akbas-camsakura",
    "fullName": "İbrahim Akbaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-hacibey-camsakura",
    "fullName": "İbrahim Hacibey",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "uroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-hakki-akalin-camsakura",
    "fullName": "İbrahim Hakkı Akalın",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-hakki-aktan-camsakura",
    "fullName": "İbrahim Hakkı Aktan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-hakki-karakus-camsakura",
    "fullName": "İbrahim Hakkı Karakuş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "psikiyatri"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-halil-erdem-camsakura",
    "fullName": "İbrahim Halil Erdem",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ibrahim-halil-yavuz-camsakura",
    "fullName": "İbrahim Halil Yavuz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "dermatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ihsan-saygin-sari-camsakura",
    "fullName": "İhsan Saygın Sarı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilhan-gurpinar-camsakura",
    "fullName": "İlhan Gürpınar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilhan-yilmaz-camsakura",
    "fullName": "İlhan Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilkay-kilic-muftuoglu-camsakura",
    "fullName": "İlkay Kılıç Müftüoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilkbal-temel-yuksel-camsakura",
    "fullName": "İlkbal Temel Yüksel",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilke-kaya-camsakura",
    "fullName": "İlke Kaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ic-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilknur-harmankaya-camsakura",
    "fullName": "İlknur Harmankaya",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilknur-kurt-camsakura",
    "fullName": "İlknur Kurt",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilknur-sahin-isilay-camsakura",
    "fullName": "İlknur Şahin Işılay",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilyas-kar-camsakura",
    "fullName": "İlyas Kar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "ortopedi-ve-travmatoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilyas-kudas-camsakura",
    "fullName": "İlyas Kudaş",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ilyas-cetin-camsakura",
    "fullName": "İlyas Çetin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kardiyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "inanc-yazici-camsakura",
    "fullName": "İnanç Yazıcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "inci-yener-camsakura",
    "fullName": "İnci Yener",
    "titlePrefix": "Dt.",
    "specialtySlugs": [
      "dis-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "incila-ali-kahraman-camsakura",
    "fullName": "İncila Ali Kahraman",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ipek-calik-camsakura",
    "fullName": "İpek Çalık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gogus-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ipek-ozturk-camsakura",
    "fullName": "İpek Öztürk",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "irem-basaran-karalar-camsakura",
    "fullName": "İrem Başaran Karalar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isa-ozyilmaz-camsakura",
    "fullName": "İsa Özyılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ismail-akyagci-camsakura",
    "fullName": "İsmail Akyağcı",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "ismail-hakan-akbulut-camsakura",
    "fullName": "İsmail Hakan Akbulut",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "fizik-tedavi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "istemi-serin-camsakura",
    "fullName": "İstemi Serin",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "isbara-alp-eniste-camsakura",
    "fullName": "İşbara Alp Enişte",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sadiye-ayca-yilmaz-camsakura",
    "fullName": "Şadiye Ayça Yılmaz",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sadiye-hande-soyer-somunsu-camsakura",
    "fullName": "Şadiye Hande Soyer Somunsu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kadin-hastaliklari-ve-dogum"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sahin-ogreden-camsakura",
    "fullName": "Şahin Öğreden",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kbb"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "samil-amirjanov-camsakura",
    "fullName": "Şamil Amırjanov",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "samil-dikici-camsakura",
    "fullName": "Şamil Dikici",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "beyin-ve-sinir-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sebnem-burhan-camsakura",
    "fullName": "Şebnem Burhan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "endokrinoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "senay-coban-camsakura",
    "fullName": "Şenay Çoban",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seniz-ongoren-camsakura",
    "fullName": "Şeniz Öngören",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "hematoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seref-oray-camsakura",
    "fullName": "Şeref Oray",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "genel-cerrahi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serife-ciloglu-hayat-camsakura",
    "fullName": "Şerife Çiloğlu Hayat",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "goz-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "serife-ozalp-camsakura",
    "fullName": "Şerife Özalp",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sevket-tuna-turkkolu-camsakura",
    "fullName": "Şevket Tuna Türkkolu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "kalp-ve-damar-cerrahisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seyda-dogantan-camsakura",
    "fullName": "Şeyda Doğantan",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seyma-enise-baki-camsakura",
    "fullName": "Şeyma Enise Baki",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "aile-hekimligi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "seymanur-ucum-agcakoyun-camsakura",
    "fullName": "Şeymanur Uçum Ağcakoyun",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "cocuk-hastaliklari"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sule-balk-ucar-camsakura",
    "fullName": "Şule Balk Uçar",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sule-batcik-camsakura",
    "fullName": "Şule Batçık",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "anesteziyoloji-ve-reanimasyon"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sule-deveci-camsakura",
    "fullName": "Şule Deveci",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "noroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sule-poturoglu-camsakura",
    "fullName": "Şule Poturoğlu",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "gastroenteroloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "sukru-saltuk-bugra-evran-camsakura",
    "fullName": "Şükrü Saltuk Buğra Evran",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "medikal-onkoloji"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  },
  {
    "slug": "simay-gurocak-camsakura",
    "fullName": "Şimay Gürocak",
    "titlePrefix": "Dr.",
    "specialtySlugs": [
      "radyasyon-onkolojisi"
    ],
    "procedureSlugs": [],
    "clinicSlugs": [
      "basaksehir-cam-sakura-sehir-hastanesi"
    ],
    "citySlug": "istanbul",
    "districtSlug": "basaksehir",
    "signals": []
  }
];
