import type { Specialty } from "./types";

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const LAST_REVIEWED = "2026-05-23";
const NEXT_REVIEW = "2026-11-23";

/**
 * TTB ana branş listesi. 8 ana branşta uzun-form E-E-A-T içerik mevcuttur;
 * diğerleri için description seviyesinde bilgi vardır.
 */
export const specialties: Specialty[] = [
  {
    slug: "estetik-cerrahi",
    name: "Estetik, Plastik ve Rekonstrüktif Cerrahi",
    description:
      "Vücudun ve yüzün estetik veya rekonstrüktif amaçlarla cerrahi yöntemlerle düzenlenmesi.",
    intro:
      "Estetik, plastik ve rekonstrüktif cerrahi; doğuştan veya sonradan oluşan görünüm değişikliklerinin cerrahi yöntemle düzeltildiği ve hastanın hem fiziksel hem de psikolojik konforuna yönelik yapılan tıbbi bir uzmanlık dalıdır.",
    fullContent:
      "Bu branş; doğuştan gelen anomaliler (yarık dudak, mikroti gibi), travma sonrası rekonstrüksiyon, yanık tedavisi sonrası onarım, meme rekonstrüksiyonu gibi rekonstrüktif uygulamalar ve hastanın talebine bağlı estetik girişimleri kapsar.\n\nTürkiye'de plastik cerrahi uzmanlığı 5 yıllık tıp eğitimi sonrası 5 yıllık uzmanlık eğitimini içerir. Branş; Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği (TPRECD) tarafından temsil edilir. Uluslararası seviyede ISAPS (International Society of Aesthetic Plastic Surgery) ve ASPS (American Society of Plastic Surgeons) gibi dernekler standartları belirler.\n\nEstetik girişimler her zaman bireyseldir; sonuçlar hastaya özel anatomi, doku özellikleri ve uygulanan tekniğe göre değişir. Cerrahi olmayan estetik uygulamalar (botoks, dolgu, lazer) çoğunlukla dermatoloji uzmanları tarafından yapılır.",
    popularProcedureSlugs: [
      "rinoplasti",
      "yuz-germe",
      "meme-buyutme",
      "meme-kucultme",
      "meme-diklestirme",
      "karin-germe",
      "liposuction",
      "bbl",
      "jinekomasti",
      "dudak-estetigi",
      "goz-kapagi-estetigi",
      "kulak-estetigi",
    ],
    faq: [
      {
        question: "Estetik cerrahi ile plastik cerrahi aynı şey mi?",
        answer:
          "Estetik cerrahi, plastik ve rekonstrüktif cerrahi uzmanlığının bir bölümüdür. Tek başına 'estetik cerrahi' diye ayrı bir uzmanlık dalı Türkiye'de yoktur; estetik girişimler plastik cerrahi uzmanları tarafından yapılır.",
      },
      {
        question: "Estetik operasyonlar SGK tarafından karşılanır mı?",
        answer:
          "Yalnız fonksiyonel veya rekonstrüktif endikasyonu olan operasyonlar (travma sonrası onarım, doğumsal anomali, meme rekonstrüksiyonu, fonksiyonel rinoplasti vb.) SGK kapsamında değerlendirilir. Tamamen kozmetik amaçlı operasyonlar genellikle hasta tarafından karşılanır.",
      },
      {
        question: "Birden fazla operasyonu aynı seansta yaptırabilir miyim?",
        answer:
          "Mümkün olabilir ancak anestezi süresi ve toplam cerrahi yük açısından fayda-risk dengesi hekim tarafından değerlendirilir. Bazı kombinasyonlar (rinoplasti + göz kapağı estetiği) yaygındır; bazıları ise ayrı seanslarda yapılmalıdır.",
      },
    ],
    sources: [
      {
        title: "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
        publisher: "TPRECD",
        url: "https://www.plastikcerrahi.org.tr",
      },
      {
        title: "Plastic Surgery Procedures",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    description:
      "Saç dökülmesi tedavisinde nakil odaklı tıbbi uygulamalar.",
    intro:
      "Saç ekimi; tıbbi olarak saç dökülmesi gözlemlenen bireylerde, donör (genellikle ense) bölgeden alınan saç köklerinin seyrek veya dökülmüş alanlara nakledilmesini içeren bir cerrahi uygulama alanıdır.",
    fullContent:
      "Türkiye, dünya genelinde saç ekiminde önde gelen ülkelerden biridir. Uygulama; dermatoloji veya plastik cerrahi uzmanlığı altında, ek saç ekimi sertifikasyon eğitimi almış hekimler tarafından, Sağlık Bakanlığı ruhsatlı merkezlerde yapılmalıdır.\n\nUluslararası standartlar International Society of Hair Restoration Surgery (ISHRS) tarafından belirlenir. Uygulama teknikleri (FUE, DHI, Sapphire FUE, Robotik FUE) klinik değerlendirmeye göre seçilir.\n\nSaç ekimi yalnızca uygun aday hastalarda klinik değer üretir. Saç dökülmesinin hızla ilerlediği genç hastalarda önce medikal tedavi ile stabilizasyon önerilir.",
    popularProcedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
    faq: [
      {
        question: "Saç ekimi yaptırmak için ideal yaş nedir?",
        answer:
          "Sabit bir yaş yoktur, ancak çoğu hekim saç dökülmesinin stabilize olduğu 25 yaş üzeri hastaları öncelikler. Genç hastalarda önce medikal stabilizasyon (minoksidil, finasterid vb.) önerilir; saç ekimi gelecek için planlanır.",
      },
      {
        question: "Saç ekimi ağrılı mı?",
        answer:
          "İşlem lokal anestezi altında yapılır; aktif cerrahi süresince ağrı hissedilmez. Sonrasında 1-3 günlük hafif hassasiyet ve kabuklanma normaldir.",
      },
      {
        question: "Saç ekimi sonrası saçım dökülür mü?",
        answer:
          "Operasyonu izleyen 2-4. haftada nakledilen saçların geçici dökülmesi (şok dökülmesi) yaşanabilir. Bu beklenen bir süreçtir ve kalıcı kayıp anlamına gelmez. Yeni saçlar 3-4. ayda görünmeye başlar.",
      },
    ],
    sources: [
      {
        title: "Hair Transplantation Standards",
        publisher: "International Society of Hair Restoration Surgery (ISHRS)",
        url: "https://www.ishrs.org",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "dis-hekimligi",
    name: "Diş Hekimliği",
    description:
      "Ağız ve diş sağlığı; estetik diş, implant, ortodonti, periodontoloji.",
    intro:
      "Diş hekimliği; ağız, diş ve çene yapısının sağlığını koruyan, hastalıklarını teşhis ve tedavi eden tıbbi bir uzmanlık alanıdır. Türkiye'de yetkili hekimlik; 5 yıllık diş hekimliği fakültesi eğitiminin tamamlanmasını gerektirir.",
    fullContent:
      "Modern diş hekimliği koruyucu, restoratif ve estetik uygulamaları kapsar. İmplant, all-on-4, zirkonyum ve lamine porselen (veneer) uygulamaları gibi ileri teknikler estetik diş hekimliğinin çekirdek alanıdır.\n\nTürkiye, son yıllarda diş tedavisi turizminde dünya çapında öne çıkmıştır. Klinik seçiminde Sağlık Bakanlığı ruhsatı, hekimin Türk Diş Hekimleri Birliği (TDB) tescili ve uluslararası implant dernekleri (ITI vb.) üyeliği önemlidir.\n\nDiş implantı için kullanılan vidaların CE veya FDA onaylı olması, üretici sıra numarasının izlenebilir olması ve hekimin 3D dental tomografi ile cerrahi planlama yapması — uzun vadeli başarı için kritik faktörlerdir.",
    popularProcedureSlugs: [
      "dis-implanti",
      "all-on-4",
      "zirkonyum-kaplama",
      "lamine-dis",
      "dis-beyazlatma",
    ],
    faq: [
      {
        question: "Diş implantı ile köprü arasındaki fark nedir?",
        answer:
          "Köprü, yanındaki sağlam dişlere dayanarak yapılır ve bu dişlerin törpülenmesini gerektirir. İmplant ise çene kemiğine yerleştirilen yapay diş köküdür; yan dişlere zarar vermez ve kemik kaybını engelleyebilir.",
      },
      {
        question: "Lamine diş ile zirkonyum kaplama farkı nedir?",
        answer:
          "Lamine, dişin yalnızca ön yüzeyine yapıştırılan ince porselen yapraklardır ve daha az diş törpülenmesi gerektirir. Zirkonyum kaplama dişin tamamını çevreler; daha fazla yapısal güç sağlar ve geniş restorasyonlarda tercih edilir.",
      },
      {
        question: "Diş beyazlatma ne kadar kalıcıdır?",
        answer:
          "Profesyonel uygulamanın etkisi 6 ay ile 2 yıl arasında değişir; çay, kahve, sigara gibi alışkanlıklar süresini doğrudan etkiler. Düzenli ağız bakımı ve takip seanslarıyla süre uzar.",
      },
    ],
    sources: [
      {
        title: "Türk Diş Hekimleri Birliği",
        publisher: "TDB",
        url: "https://www.tdb.org.tr",
      },
      {
        title: "Dental Implant Standards",
        publisher: "International Team for Implantology (ITI)",
        url: "https://www.iti.org",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "dermatoloji",
    name: "Dermatoloji",
    description:
      "Cilt, saç ve tırnak hastalıklarının tıbbi ve estetik tedavisi.",
    intro:
      "Dermatoloji; cilt, saç ve tırnak hastalıklarının teşhis ve tedavisiyle ilgilenen tıbbi uzmanlık alanıdır. Akne, sedef, mantar, alerjik dermatitler gibi tıbbi durumların yanı sıra cerrahi olmayan estetik uygulamaların büyük çoğunluğu bu branş tarafından yapılır.",
    fullContent:
      "Dermatoloji uzmanı olmak için tıp fakültesi sonrası 4 yıllık uzmanlık eğitimi gerekir. Türkiye'de branş; Türk Dermatoloji Derneği tarafından temsil edilir.\n\nBranşın estetik tarafı son 10 yılda hızla büyümüştür. Botoks, dolgu, mezoterapi, PRP, HIFU, lazer epilasyon, kimyasal peeling ve fraksiyonel lazer gibi uygulamalar artık standart dermatolojik hizmet kapsamındadır.\n\nUygulamaların güvenliği için: cihaz onayları (FDA / CE), kullanılan ürünlerin Sağlık Bakanlığı tarafından onaylı olması ve uygulayıcının tıp doktoru sıfatıyla yapması esastır. Tıbbi cihazlar konusunda izinsiz veya 'eğitimsiz' uygulamalar Türkiye'de mevzuata aykırıdır.",
    popularProcedureSlugs: [
      "botoks",
      "dolgu",
      "lazer-epilasyon",
      "akne-tedavisi",
      "mezoterapi",
      "prp",
      "hifu",
      "kimyasal-peeling",
      "fraksiyonel-lazer",
      "hidrafacial",
    ],
    faq: [
      {
        question: "Botoks ile dolgu arasındaki fark nedir?",
        answer:
          "Botoks (botulinum toksin) mimik kaslarını geçici olarak gevşeterek dinamik çizgilerin görünümünü azaltır. Dolgu (hyaluronik asit) ise hacim kaybı olan bölgelere uygulanır; statik çizgileri yumuşatır ve şekillendirme sağlar. Genellikle birbirini tamamlar.",
      },
      {
        question: "Lazer epilasyon kalıcı mı?",
        answer:
          "Lazer epilasyon, kıl köklerinde anlamlı bir azalma sağlayan kalıcı tüy azaltma yöntemidir. Tek seansta her tüyü etkilemediği için seanslar halinde uygulanır; tipik olarak 6-10 seans sonrasında hasta klinik olarak fark edilir kalıcılık görür. Hormonal dengeye bağlı bireysel değişkenlik vardır.",
      },
      {
        question: "Cilt bakımına ne zaman başlanmalı?",
        answer:
          "Genel bir kural olarak 25-30 yaş arası koruyucu uygulamalar (peeling, antioksidan içerikli serumlar, profesyonel cilt bakımı) önerilebilir. Tıbbi rahatsızlıklar (akne, rosacea) için yaş sınırı yoktur.",
      },
    ],
    sources: [
      {
        title: "Türk Dermatoloji Derneği",
        publisher: "TDD",
      },
      {
        title: "American Academy of Dermatology",
        publisher: "AAD",
        url: "https://www.aad.org",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "goz-hastaliklari",
    name: "Göz Hastalıkları",
    description:
      "Göz ve göz çevresinin hastalıkları, kırma kusurları ve cerrahi.",
    intro:
      "Göz hastalıkları (oftalmoloji); göz ve göz çevresinin hastalıklarının teşhis, takip ve tedavisinden sorumlu tıbbi bir uzmanlık alanıdır. Refraktif cerrahi (LASIK, SMILE), katarakt cerrahisi, retina hastalıkları ve glokom başlıca alt alanlarıdır.",
    fullContent:
      "Türkiye'de göz hastalıkları uzmanlığı tıp fakültesi sonrası 4 yıllık uzmanlık eğitimi ile alınır. Branş; Türk Oftalmoloji Derneği (TOD) tarafından temsil edilir.\n\nLazer refraktif cerrahi (LASIK / Femto-LASIK / SMILE / PRK); kornea yapısı uygun olan miyop, hipermetrop ve astigmat hastalarda gözlüğe veya kontakt lense bağımlılığı azaltmaya yöneliktir. Uygulamadan önce mutlaka kornea kalınlığı (pakimetri), topografi ve kuru göz değerlendirmesi yapılmalıdır.\n\nKullanılan lazer cihazlarının tanınmış marka olması (Zeiss VisuMax, WaveLight EX500 vb.) ve hekimin refraktif cerrahi konusunda deneyimli olması — kalıcı görme kalitesi açısından kritik faktörlerdir.",
    popularProcedureSlugs: ["lasik", "smile"],
    faq: [
      {
        question: "LASIK herkese yapılabilir mi?",
        answer:
          "Hayır. Kornea kalınlığının yeterli olması, refraktif kusurun stabil olması (en az 1 yıl) ve aktif göz hastalığının bulunmaması gerekir. Keratokonus şüphesi olan hastalara LASIK yapılmaz.",
      },
      {
        question: "LASIK sonrası gözüm normal görmeye ne zaman başlar?",
        answer:
          "Çoğu hastada operasyondan birkaç saat sonra net görme başlar; ertesi gün ofis işine dönüş genellikle mümkündür. Tam stabilizasyon 1-3 ayda sağlanır.",
      },
      {
        question: "LASIK ile SMILE arasındaki fark nedir?",
        answer:
          "LASIK'te kornea üzerinde bir flap (kapak) oluşturulurken, SMILE'da küçük bir kesi ile flap'sız çalışılır. SMILE sonrası kuru göz şikayeti genellikle daha az görülür; ancak teknik seçim hekim değerlendirmesine bağlıdır.",
      },
    ],
    sources: [
      {
        title: "Türk Oftalmoloji Derneği",
        publisher: "TOD",
      },
      {
        title: "Laser Eye Surgery and Lens Surgery",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/tests-and-treatments/laser-eye-surgery-and-lens-surgery/",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kadin-hastaliklari-ve-dogum",
    name: "Kadın Hastalıkları ve Doğum",
    description:
      "Kadın sağlığı, gebelik takibi, doğum ve üreme sağlığı.",
    intro:
      "Kadın Hastalıkları ve Doğum (jinekoloji ve obstetri); kadın üreme sisteminin sağlığı, gebelik takibi, doğum süreçleri ve infertilite tedavilerini kapsayan geniş bir tıbbi uzmanlık alanıdır.",
    fullContent:
      "Türkiye'de uzmanlık eğitimi 5 yıldır. Branş; Türkiye Jinekoloji ve Obstetrik Derneği (TJOD) tarafından temsil edilir. Üremeye yardımcı tedaviler (IVF, ICSI, mikro-TESE) Sağlık Bakanlığı yönetmeliklerine tabi izinli üreme merkezlerinde yapılır.\n\nTürkiye'de tüp bebek tedavisi açısından deneyimli birçok merkez bulunmaktadır. ESHRE (European Society of Human Reproduction and Embryology) uluslararası standartları belirler.\n\nEstetik jinekoloji (vajinoplasti, labioplasti) son yıllarda gelişen bir alandır; bu uygulamalar plastik cerrahi veya kadın doğum uzmanları tarafından, ameliyathane şartlarında yapılır.",
    popularProcedureSlugs: ["tup-bebek", "g-spot-vajinoplasti", "labioplasti"],
    faq: [
      {
        question: "Tüp bebek tedavisi için yaş sınırı var mı?",
        answer:
          "Türkiye'de Sağlık Bakanlığı yönetmeliği gereği kadın yaşı 46'ya kadar tedavi yapılabilir; ancak başarı oranı yaşla doğru orantılı olarak değişir. Genç hastalarda başarı oranları daha yüksektir.",
      },
      {
        question: "Vajinoplasti SGK kapsamında mıdır?",
        answer:
          "Tamamen kozmetik amaçlı vajinoplasti SGK kapsamında değildir. Doğum sonrası fonksiyonel sorunlara yönelik bazı rekonstrüksiyonlar tıbbi endikasyonla değerlendirilebilir.",
      },
    ],
    sources: [
      {
        title: "Türkiye Jinekoloji ve Obstetrik Derneği",
        publisher: "TJOD",
      },
      {
        title: "ESHRE Guidelines",
        publisher: "European Society of Human Reproduction and Embryology",
        url: "https://www.eshre.eu",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kardiyoloji",
    name: "Kardiyoloji",
    description:
      "Kalp ve damar hastalıklarının teşhis, takip ve tıbbi tedavisi.",
    intro:
      "Kardiyoloji; kalp ve damar hastalıklarının teşhis ve tedavisinde uzmanlaşmış tıbbi alandır. Hipertansiyon, koroner arter hastalığı, kalp ritim bozuklukları ve kalp yetmezliği gibi konular ana iş alanlarıdır.",
    fullContent:
      "Türkiye'de kardiyoloji uzmanlığı; iç hastalıkları (dahiliye) uzmanlığı sonrası 3 yıllık yan dal eğitimini gerektirir. Branş; Türk Kardiyoloji Derneği tarafından temsil edilir. Uluslararası standartlar European Society of Cardiology (ESC) tarafından belirlenir.\n\nİnvaziv kardiyoloji (anjiyografi, stent, ablasyon vb.) ile non-invaziv kardiyoloji (ekokardiyografi, EKG, stres testi vb.) ayrı alt uzmanlıklar olarak gelişir. Kalp cerrahisi ayrı bir uzmanlık alanıdır (Kalp ve Damar Cerrahisi).",
    faq: [
      {
        question: "Ne sıklıkla kardiyoloji kontrolü yapılmalı?",
        answer:
          "Genel sağlık taraması kapsamında 40 yaş üzerinde yılda bir kalp kontrolü önerilir. Aile öyküsü, diyabet, hipertansiyon, sigara kullanımı gibi risk faktörleri varsa hekim daha sık takip planlayabilir.",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "ic-hastaliklari",
    name: "İç Hastalıkları (Dahiliye)",
    description:
      "Yetişkin iç sistemleri hastalıklarının tıbbi tanı ve tedavisi.",
  },
  {
    slug: "noroloji",
    name: "Nöroloji",
    description:
      "Beyin, omurilik, sinirler ve kas hastalıklarının tıbbi tedavisi.",
  },
  {
    slug: "psikiyatri",
    name: "Psikiyatri",
    description:
      "Ruhsal hastalıkların tıbbi tanı ve tedavisi (hekim — psikolog değildir).",
  },
  {
    slug: "psikoloji",
    name: "Psikoloji",
    description:
      "Klinik psikolog tarafından bireysel terapi ve danışmanlık süreçleri.",
    intro:
      "Klinik psikoloji; ruh sağlığı sorunlarının test, görüşme ve psikoterapi yöntemleriyle değerlendirildiği ve desteklendiği bir alandır. Klinik psikologlar tıp doktoru değildir; ilaç reçete edemezler. İlaç tedavisi gereken durumlarda psikiyatri hekimine yönlendirilir.",
    popularProcedureSlugs: ["psikolojik-destek"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  {
    slug: "diyetisyen",
    name: "Diyetisyen ve Beslenme",
    description:
      "Bireye özel beslenme planı ve metabolik takip.",
    intro:
      "Diyetisyenler; beslenme ve diyetetik lisans eğitimi almış sağlık profesyonelleridir. Bireye özel beslenme planı yapma, kronik hastalıklarda (diyabet, böbrek yetmezliği, çölyak vb.) tıbbi beslenme tedavisi düzenleme yetkileri vardır.",
    popularProcedureSlugs: ["beslenme-danismanligi"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  {
    slug: "uroloji",
    name: "Üroloji",
    description:
      "Erkek ve kadın üriner sistem ile erkek üreme sistemi hastalıkları.",
  },
  {
    slug: "ortopedi-ve-travmatoloji",
    name: "Ortopedi ve Travmatoloji",
    description:
      "Kas-iskelet sistemi hastalıklarının cerrahi ve tıbbi tedavisi.",
  },
  {
    slug: "kbb",
    name: "Kulak Burun Boğaz",
    description:
      "Kulak, burun, boğaz ve baş-boyun bölgesi hastalıkları.",
  },
  {
    slug: "cocuk-hastaliklari",
    name: "Çocuk Hastalıkları (Pediatri)",
    description:
      "Bebek, çocuk ve adolesanların tıbbi tanı, takip ve tedavisi.",
  },
  {
    slug: "fizik-tedavi",
    name: "Fizik Tedavi ve Rehabilitasyon",
    description:
      "Hareket sistemi ve nörolojik rahatsızlıkların fizyoterapi süreçleri.",
  },
  {
    slug: "genel-cerrahi",
    name: "Genel Cerrahi",
    description:
      "Karın bölgesi, tiroid, meme ve fıtık gibi cerrahi alanlar.",
  },
  {
    slug: "endokrinoloji",
    name: "Endokrinoloji",
    description:
      "Hormon hastalıkları, tiroid, diyabet ve metabolik bozukluklar.",
  },
  {
    slug: "gastroenteroloji",
    name: "Gastroenteroloji",
    description:
      "Sindirim sistemi ve karaciğer hastalıklarının tanı ve tedavisi.",
  },
  {
    slug: "anesteziyoloji-ve-reanimasyon",
    name: "Anesteziyoloji ve Reanimasyon",
    description:
      "Cerrahi ve girişimsel işlemlerde anestezi yönetimi ile yoğun bakım hizmetleri.",
  },
  {
    slug: "beyin-ve-sinir-cerrahisi",
    name: "Beyin ve Sinir Cerrahisi (Nöroşirürji)",
    description:
      "Beyin, omurilik ve periferik sinir sistemi hastalıklarının cerrahi tedavisi.",
  },
  {
    slug: "radyoloji",
    name: "Radyoloji",
    description:
      "Görüntüleme yöntemleri (MR, BT, ultrason, mamografi) ile tanı ve görüntüleme rehberliğinde girişimler.",
  },
  {
    slug: "medikal-onkoloji",
    name: "Medikal Onkoloji",
    description:
      "Kanser hastalıklarının tıbbi (kemoterapi, immünoterapi, hedefe yönelik tedavi) tedavisi.",
  },
  {
    slug: "hematoloji",
    name: "Hematoloji",
    description:
      "Kan, kemik iliği ve lenf sistemi hastalıklarının tanı ve tedavisi.",
  },
  {
    slug: "radyasyon-onkolojisi",
    name: "Radyasyon Onkolojisi",
    description:
      "Kanser tedavisinde radyoterapi (ışın tedavisi) uygulamaları.",
  },
  {
    slug: "enfeksiyon-hastaliklari",
    name: "Enfeksiyon Hastalıkları",
    description:
      "Bakteriyel, viral, fungal ve paraziter enfeksiyon hastalıklarının tanı ve tedavisi.",
  },
  {
    slug: "kalp-ve-damar-cerrahisi",
    name: "Kalp ve Damar Cerrahisi",
    description:
      "Kalp ve büyük damar hastalıklarının cerrahi tedavisi (bypass, kapak, anevrizma vb.).",
  },
  {
    slug: "gogus-cerrahisi",
    name: "Göğüs Cerrahisi",
    description:
      "Akciğer, mediasten ve göğüs duvarı hastalıklarının cerrahi tedavisi.",
  },
  {
    slug: "gogus-hastaliklari",
    name: "Göğüs Hastalıkları",
    description:
      "Akciğer ve solunum sistemi hastalıklarının tıbbi tanı ve tedavisi.",
  },
  {
    slug: "cocuk-cerrahisi",
    name: "Çocuk Cerrahisi",
    description:
      "Yenidoğan, bebek, çocuk ve adolesanların cerrahi tedavi gerektiren rahatsızlıkları.",
  },
  {
    slug: "romatoloji",
    name: "Romatoloji",
    description:
      "Eklem, kas ve bağ dokusu hastalıklarının (romatoid artrit, lupus, vaskülitler) tanı ve tedavisi.",
  },
  {
    slug: "nefroloji",
    name: "Nefroloji",
    description:
      "Böbrek hastalıkları, hipertansiyon ve diyaliz süreçlerinin yönetimi.",
  },
  {
    slug: "aile-hekimligi",
    name: "Aile Hekimliği",
    description:
      "Birinci basamak sağlık hizmeti: koruyucu hekimlik, takip ve genel tanı.",
  },
  {
    slug: "acil-tip",
    name: "Acil Tıp",
    description:
      "Acil sağlık durumlarının ilk değerlendirme ve müdahale süreçleri.",
  },
];

export function findSpecialty(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
