import type { Procedure } from "./types";

/**
 * Tedavi sayfaları — estetik cerrahi + medical tourism dikeyleri.
 *
 * İçerik kuralları (Sağlık Hizmetlerinde Tanıtım Yönetmeliği 2023):
 *  - "%X başarı", "garanti", "kesin sonuç", "en iyi" yasak.
 *  - Öncesi/sonrası fotoğraf yok.
 *  - Kampanya / indirim yok; fiyat verisi yok.
 *  - Risk + komplikasyon bölümü zorunlu (E-E-A-T + dürüst bilgilendirme).
 *  - Tüm tıbbi içerik tıbbi inceleyici + güncelleme tarihi taşır.
 *
 * Detaylı içerik alanları opsiyoneldir; bulunmayan tedaviler için sayfa kısa
 * sürümde render olur. İçerik üretildikçe alanlar doldurulur.
 */

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const LAST_REVIEWED = "2026-05-23";
const NEXT_REVIEW = "2026-11-23"; // 6 ayda bir gözden geçirme

export const procedures: Procedure[] = [
  // ═════════════════════════════════════════════════════════════════════════
  // ESTETİK CERRAHİ — DETAYLI
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "yuz-germe",
    name: "Yüz Germe (Facelift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Yüz bölgesindeki sarkma ve kırışıklıkların cerrahi olarak gerildiği estetik operasyon.",
    intro:
      "Yüz germe (rhytidectomy / facelift); yaşlanma ile yüzde oluşan sarkma, gevşeme ve derin kırışıklıkları cerrahi yöntemle düzeltmeye yönelik bir estetik cerrahi işlemidir. Modern yöntemler yalnızca cilt germe değil; alt cilt dokusu (SMAS), kaslar ve gerekirse yağ dokusu birlikte yeniden konumlandırır.",
    whatIs:
      "Yüz germe operasyonu; yanaklar, çene hattı (jawline) ve boyun üst bölgesindeki sarkmış dokuları daha genç görünüme yakın bir konuma yeniden yerleştirmeyi amaçlar. Etkinin doğal ve uzun ömürlü olabilmesi için günümüzde tercih edilen teknikler, yüzeyel kas-aponevroz sistemini (SMAS) ve gerekiyorsa derin doku katmanlarını da kapsar.\n\nİşlem; hekim değerlendirmesi sonucunda yalnız alt yüz, orta yüz, alın veya boyun bölgesini hedefleyebilir; bütün yüzü kapsayan kapsamlı operasyonlar da uygulanır. Sonuç; hastanın cilt kalitesi, yaş, kemik yapısı ve operasyon tekniğine bağlı olarak kişiden kişiye değişir.",
    methods: [
      {
        name: "Mini Facelift (Kısa Skarlı Yüz Germe)",
        description:
          "Yalnızca alt yüz ve çene hattı bölgesindeki orta düzeyde sarkma için tercih edilir. Kulak çevresinde kısa kesiler kullanılır; iyileşme süresi nispeten kısadır.",
      },
      {
        name: "SMAS Lift",
        description:
          "Cilt altındaki yüzeyel kas-aponevroz sistemi (SMAS) tabakası ayrı olarak gerilir. Yalnız cildi geren tekniklere göre daha kalıcı sonuç hedeflenir.",
      },
      {
        name: "Deep Plane Facelift",
        description:
          "SMAS tabakası ile altındaki doku birlikte hareket ettirilir. İleri seviye sarkmalarda tercih edilir; teknik olarak daha kapsamlıdır ve uzun iyileşme süreci gerektirebilir.",
      },
      {
        name: "Boyun Germe ile Birlikte",
        description:
          "Çene altı yağ ve gevşeme belirginse aynı seansta boyun germe (necklift) eklenebilir.",
      },
    ],
    candidates: [
      "Yanaklarda ve çene hattında belirgin sarkma yaşayan bireyler",
      "Boyun üstünde gevşek deri ve çene-boyun açısında bulanıklaşma olanlar",
      "Genel sağlık durumu cerrahiye uygun, sigara içmeyen veya operasyon öncesi bırakan bireyler",
      "Sonuçtan gerçekçi beklentisi olan ve operasyon sürecini anlayan kişiler",
    ],
    notCandidates: [
      "Kontrolsüz hipertansiyon, kanama bozuklukları veya yüksek anestezi riski taşıyan bireyler",
      "Aktif sigara kullanımı (yara iyileşmesini ve doku canlılığını ciddi olarak etkiler)",
      "Beden Dismorfik Bozukluğu (BDD) veya gerçek dışı estetik beklentileri olan bireyler",
      "Hekim değerlendirmesine göre cilt kalitesi cerrahiye uygun olmayan ileri yaş hastalar",
    ],
    preparation: [
      "En az 2 hafta önce sigaranın bırakılması (yara iyileşmesi için kritik)",
      "Kan sulandırıcı ilaçların (aspirin, omega-3, gingko biloba, E vitamini) hekim onayıyla kesilmesi",
      "Genel kan tahlilleri ve EKG dahil cerrahi öncesi değerlendirme",
      "Operasyon sonrası 1-2 hafta refakatçi planlaması",
      "İyileşme döneminde gerekli ilaçların ve soğuk kompresin önceden temini",
    ],
    process: [
      "Genel anestezi veya sedasyon altında, ameliyathane şartlarında gerçekleştirilir.",
      "Kesiler genellikle saç çizgisi, kulak önü ve arkasında, mümkün olduğunca gizli planlanır.",
      "SMAS tabakası ve gerekiyorsa derin doku katmanları ayrı olarak repozisyone edilir.",
      "Fazla cilt çıkarılır, ciltler gerginlik altına alınmadan dikilir.",
      "Süre tekniğe göre 3-6 saat arasında değişir; çoğu zaman 1 gece hastanede kalış önerilir.",
    ],
    recovery: [
      {
        period: "İlk 24-48 saat",
        description:
          "Yüzde belirgin şişlik ve morluk normaldir. Baş yüksek tutularak yatılır; hafif ağrı için reçeteli ağrı kesiciler kullanılır.",
      },
      {
        period: "1. hafta",
        description:
          "Dikişler 5-7 gün arasında alınır. Şişlik ve morluk azalmaya başlar; ancak yüzdeki gerginlik hissi devam eder. Genellikle bu sürede sosyal hayata dönüş önerilmez.",
      },
      {
        period: "2-4. hafta",
        description:
          "Morluklar büyük ölçüde geçer, makyaj ile gizlenebilir. Hafif egzersize geri dönülebilir; ağır egzersiz hâlâ önerilmez.",
      },
      {
        period: "1-3. ay",
        description:
          "Şişliğin büyük çoğunluğu çözülür. Bazı hastalarda yüzde uyuşukluk ve hassasiyet sürebilir; bu beklenen bir durumdur.",
      },
      {
        period: "6-12. ay",
        description:
          "Nihai sonuç görünür olur; iz dokusu olgunlaşır ve daha az belirgin hâle gelir.",
      },
    ],
    risks: [
      "Şişlik, morluk, geçici uyuşukluk (sık ve normal)",
      "Cilt altında kan birikmesi (hematom)",
      "Yara iyileşme problemleri, iz kalması",
      "Yüz siniri sinirsel yaralanma (geçici veya nadir kalıcı asimetri)",
      "Doku canlılığı kaybı (özellikle sigara içenlerde)",
      "Enfeksiyon (nadirdir, antibiyotik ile yönetilir)",
      "Operasyondan beklenmeyen ya da geç ortaya çıkan estetik sonuçlar — revizyon gerekebilir",
    ],
    selectionCriteria: [
      "Hekimin Plastik, Rekonstrüktif ve Estetik Cerrahi uzmanı olması (TTB tescilli)",
      "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği (TPRECD) veya uluslararası dernek (ISAPS, ASPS) üyeliği",
      "Operasyonun Sağlık Bakanlığı ruhsatlı, ameliyathanesi bulunan bir kurumda yapılması",
      "Hekimle yapılan yüz yüze konsültasyonda gerçekçi beklenti çerçevesinin çizilmesi",
      "Operasyon sonrası takip planının netleştirilmiş olması",
    ],
    faq: [
      {
        question: "Yüz germe ne kadar sürede iyileşir?",
        answer:
          "Belirgin şişlik ve morluk 2-3 hafta içinde geçer; cilt görünümünün netleşmesi 3-6 ay sürer. Nihai sonuç ve iz yumuşaması 12 aya kadar devam edebilir. Bu süreler bireysel iyileşmeye, kullanılan tekniğe ve operasyon sonrası bakıma göre değişir.",
      },
      {
        question: "Yüz germe kalıcı mıdır?",
        answer:
          "Yüz germe yaşlanma sürecini durdurmaz; ancak doğal yaşlanma seyrini geriye çekerek belirgin bir gençleşme görünümü sağlayabilir. Sonucun ne kadar süreceği; tekniğe, hasta yaşına, cilt kalitesine ve yaşam tarzına (sigara, güneş, beslenme) bağlıdır.",
      },
      {
        question: "Hangi yaşta yüz germe yapılır?",
        answer:
          "Yüz germe için sabit bir yaş yoktur. Genel olarak 40-65 yaş aralığında yapılan operasyonlardır; ancak uygunluk yaşa değil, dokunun durumuna bağlıdır. Daha erken yaşlarda kısmen değişen alanlar için ipli askılama veya enerji tabanlı sıkılaştırma alternatifleri değerlendirilebilir.",
      },
      {
        question: "Yara izleri belli olur mu?",
        answer:
          "Kesiler genellikle saç çizgisi, kulak önü ve kulak arkasında planlanır. İlk aylarda kızarık görünebilen izler 6-12 ay içinde olgunlaşarak çoğunlukla belirsiz hâle gelir. Bireysel iz iyileşmesi farklılık gösterir.",
      },
      {
        question: "Operasyon sonrası ne zaman işime dönebilirim?",
        answer:
          "Çoğu kişi 10-14 gün sonra makyaj desteğiyle sosyal hayata döner. Görünüşün önem taşıdığı işlerde 3 hafta beklenebilir. Ağır fiziksel aktiviteye dönüş 4-6 haftayı bulur.",
      },
      {
        question: "Yüz germe ile birlikte hangi işlemler yapılabilir?",
        answer:
          "Sıkça boyun germe, göz kapağı estetiği (blefaroplasti), kaş kaldırma ve yağ enjeksiyonu aynı seansta yapılır. Kombine cerrahi anestezi süresini uzatır; bu nedenle hekim değerlendirmesinde fayda-risk dengesi gözetilir.",
      },
    ],
    relatedProcedureSlugs: [
      "sakak-germe",
      "kas-germe",
      "goz-kapagi-estetigi",
      "boyun-germe",
      "yag-enjeksiyonu",
      "botoks",
    ],
    sources: [
      {
        title: "Facelift Surgery Procedure Information",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/facelift",
      },
      {
        title: "Rhytidectomy / Facelift Clinical Overview",
        publisher: "American Academy of Facial Plastic and Reconstructive Surgery (AAFPRS)",
        url: "https://www.aafprs.org/Patients/Procedures/Face_Lift.aspx",
      },
      {
        title: "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
        publisher: "TPRECD",
        url: "https://www.plastikcerrahi.org.tr",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "sakak-germe",
    name: "Şakak Germe (Temporal Lift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Şakak bölgesindeki sarkma ve kaş düşmesinin cerrahi olarak düzeltildiği uygulama.",
    intro:
      "Şakak germe (temporal lift); şakak bölgesindeki gevşeme ve kaşların dış kısmındaki düşmenin cerrahi olarak düzeltildiği bir mini estetik cerrahi işlemidir. Tek başına ya da yüz germe / kaş germe ile kombine yapılabilir.",
    whatIs:
      "Yaşlanma sürecinde şakak bölgesinde derinin yerçekimi etkisiyle aşağı kayması ve kaşların dış (lateral) bölgesinde düşme görülür. Bu durum bakışın yorgun, uykusuz ya da üzgün algılanmasına yol açabilir. Şakak germe; saç çizgisi içinde yapılan küçük kesilerle bu bölgenin yukarı doğru repozisyone edilmesini hedefler.",
    candidates: [
      "Kaşların dış kısmında düşme olan bireyler",
      "Şakak bölgesinde orta düzeyde sarkma yaşayanlar",
      "Sınırlı bir bölgeye odaklı, kısa iyileşme süreli müdahale arayanlar",
    ],
    preparation: [
      "Sigara ve kan sulandırıcı ilaçların hekim onayıyla kesilmesi",
      "Cerrahi öncesi standart kan tahlilleri",
    ],
    process: [
      "Lokal anestezi + sedasyon ya da genel anestezi altında yapılır.",
      "Kesiler saç çizgisi içinde planlanır; iz, saç altında gizli kalır.",
      "Doku yukarı çekilir ve sabitlenir. Süre genellikle 1-2 saattir.",
    ],
    recovery: [
      {
        period: "İlk 1 hafta",
        description:
          "Hafif şişlik ve nadiren morluk olabilir. Baş yıkamaya hekim onayıyla 3-5. günde başlanır.",
      },
      {
        period: "2-4. hafta",
        description:
          "Şişliğin büyük çoğunluğu çözülür, sosyal hayata dönüş mümkündür.",
      },
    ],
    risks: [
      "Şişlik, morluk",
      "Saç çizgisinde geçici hassasiyet veya saç kaybı",
      "Asimetri (revizyon gerekebilir)",
      "Yüz siniri sinir lifi hassasiyeti (geçici)",
    ],
    faq: [
      {
        question: "Şakak germe yüz germe yerine geçer mi?",
        answer:
          "Hayır. Şakak germe; yüzün diğer bölgelerindeki sarkmaları düzeltmez. Yalnız şakak ve kaş dış kısmı için uygundur. Daha kapsamlı sarkmalarda yüz germe değerlendirilir.",
      },
      {
        question: "İz görünür olur mu?",
        answer:
          "Kesiler saç çizgisi içinde planlandığı için izler genellikle saç tarafından gizlenir.",
      },
    ],
    relatedProcedureSlugs: ["yuz-germe", "kas-germe", "goz-kapagi-estetigi"],
    sources: [
      {
        title: "Brow and Temporal Lift Overview",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/brow-lift",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kas-germe",
    name: "Kaş Germe (Brow Lift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Kaşların yukarı kaldırılarak alın çizgilerinin azaltıldığı estetik operasyon.",
    intro:
      "Kaş germe (brow lift / forehead lift); kaşların pozisyonunu yukarı yönlü düzelten, alın bölgesindeki yatay çizgileri ve glabella (kaş arası) hattını yumuşatan bir estetik cerrahi yöntemidir. Endoskopik veya açık tekniklerle uygulanabilir.",
    methods: [
      {
        name: "Endoskopik Kaş Germe",
        description:
          "Saç çizgisi içinde birkaç küçük kesi yapılır; endoskop yardımıyla doku yukarı kaldırılır. Daha kısa iyileşme süresi.",
      },
      {
        name: "Açık Kaş Germe (Koronal)",
        description:
          "Saç çizgisi içinde geniş bir kesi ile yapılır; ileri sarkmalarda tercih edilebilir.",
      },
      {
        name: "Cerrahi Olmayan Kaldırma",
        description:
          "İp askı, botoks veya enerji tabanlı (RF, HIFU) uygulamalar hafif düzeyde kaş kaldırma sağlayabilir. Etki cerrahi yöntemden daha kısa sürelidir.",
      },
    ],
    candidates: [
      "Kaşları düşmüş ve alın çizgileri belirgin bireyler",
      "Üst göz kapağı ağırlığına bağlı yorgun bakış görünümü olanlar",
    ],
    risks: [
      "Saç çizgisinde geçici hassasiyet",
      "Şişlik, morluk",
      "Saçlı deride kısmi uyuşukluk (genellikle geçici)",
      "Asimetri",
    ],
    relatedProcedureSlugs: ["yuz-germe", "sakak-germe", "goz-kapagi-estetigi", "botoks"],
    sources: [
      {
        title: "Brow Lift",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/brow-lift",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "goz-kapagi-estetigi",
    name: "Göz Kapağı Estetiği (Blefaroplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Üst ve/veya alt göz kapağındaki sarkma, torba ve fazla derinin cerrahi olarak düzeltilmesi.",
    intro:
      "Blefaroplasti; göz kapaklarındaki fazla deri ve yağ dokusunun düzenlendiği bir estetik cerrahi işlemidir. Üst kapak, alt kapak veya her ikisi birlikte yapılabilir.",
    whatIs:
      "Yaşlanma, genetik yapı ve yorgunluk; üst kapaklarda sarkmaya, alt kapaklarda yağ torbalanmasına ve cilt gevşemesine yol açabilir. Üst kapakta ileri sarkma görüş alanını da daraltabilir. Blefaroplasti bu fazla doku ve yağı yeniden düzenler.",
    methods: [
      {
        name: "Üst Kapak Blefaroplastisi",
        description:
          "Üst göz kapağı kıvrım çizgisinde yapılan kesi ile fazla deri ve yağ çıkarılır. İz kapak kıvrımı içinde gizlenir.",
      },
      {
        name: "Alt Kapak Blefaroplastisi",
        description:
          "Kirpik altı veya kapağın iç yüzeyinden (transkonjonktival) yapılan kesi ile alt kapaktaki yağ torbaları yeniden düzenlenir.",
      },
    ],
    candidates: [
      "Üst kapağında belirgin sarkma olan bireyler",
      "Alt kapakta yağ torbası ve geçirgen koyu halkalar görenler",
      "Sigara kullanmayan veya operasyon öncesi bırakan kişiler",
    ],
    risks: [
      "Şişlik, morluk",
      "Kuru göz hissi (genellikle geçici)",
      "Alt kapakta ektropion (kapak aşağı çekilmesi) — nadirdir",
      "İz görünürlüğü",
      "Görme alanında geçici bulanıklık",
    ],
    faq: [
      {
        question: "Blefaroplasti görüşü etkiler mi?",
        answer:
          "İlk birkaç gün içinde şişlik nedeniyle geçici bulanıklık olabilir. Üst kapakta belirgin sarkma görüş alanı dar olan hastalarda operasyon sonrası görüş daha rahat hâle gelebilir.",
      },
      {
        question: "Sonuçlar kalıcı mı?",
        answer:
          "Çoğunlukla uzun ömürlüdür; ancak yaşlanma süreci devam ettiği için yıllar içinde tekrar değişiklikler görülebilir.",
      },
    ],
    relatedProcedureSlugs: ["yuz-germe", "kas-germe", "botoks", "dolgu"],
    sources: [
      {
        title: "Eyelid Surgery (Blepharoplasty)",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/eyelid-surgery",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "boyun-germe",
    name: "Boyun Germe (Necklift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Boyun bölgesindeki sarkma ve gevşemenin cerrahi olarak giderildiği estetik operasyon.",
    intro:
      "Boyun germe (necklift); çene altı ve boyun bölgesinde yaşa veya kilo değişimine bağlı oluşan sarkma, gevşek deri ve yağ birikimini cerrahi olarak düzeltir. Genellikle yüz germe ile birlikte yapılır; ancak tek başına da uygulanabilir.",
    risks: [
      "Şişlik, morluk",
      "Geçici uyuşukluk",
      "Asimetri",
      "Cilt altında kan birikmesi (hematom)",
    ],
    relatedProcedureSlugs: ["yuz-germe", "liposuction"],
    sources: [
      {
        title: "Neck Lift",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/neck-lift",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "rinoplasti",
    name: "Rinoplasti (Burun Estetiği)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Burunun şekil veya işlevsel sorunlarının cerrahi olarak düzeltildiği estetik operasyon.",
    intro:
      "Rinoplasti; burunun estetik görünümünü ve/veya nefes alma işlevini iyileştirmek amacıyla yapılan cerrahi bir işlemdir. Septoplasti (burun içi nefes düzeltme) ile birlikte yapıldığında septorinoplasti olarak adlandırılır.",
    whatIs:
      "Burun yüzün merkezinde yer aldığı için şeklindeki küçük değişiklikler dahi yüz dengesini etkileyebilir. Rinoplasti; burun ucu, sırt, kanatlar ve içyapı (septum, konkalar) üzerinde planlanan değişiklikleri tek operasyonda gerçekleştirir.",
    methods: [
      {
        name: "Açık Rinoplasti",
        description:
          "Kolumella (burun delikleri arasındaki cilt köprüsü) üzerinden küçük bir kesi yapılarak burnun tüm yapıları doğrudan görülerek çalışılır.",
      },
      {
        name: "Kapalı Rinoplasti",
        description:
          "Tüm kesiler burun içinden yapılır; dış izi yoktur. Belirli durumlarda tercih edilir.",
      },
      {
        name: "Piezo (Ultrasonik) Rinoplasti",
        description:
          "Kemik çalışmalarında klasik aletler yerine ultrason enerjisi kullanan cihazlar tercih edilir. Genellikle daha az morluk hedeflenir.",
      },
      {
        name: "Revizyon Rinoplasti",
        description:
          "Daha önce yapılmış rinoplasti sonrası fonksiyonel veya estetik nedenlerle yapılan ikinci operasyon. Teknik olarak daha karmaşıktır.",
      },
    ],
    candidates: [
      "Burun büyüklüğü, şekli veya simetrisinden memnun olmayan bireyler",
      "Septum eğriliği nedeniyle nefes problemi yaşayanlar",
      "İskelet gelişimi tamamlanmış (genelde 17 yaş üzeri) bireyler",
    ],
    notCandidates: [
      "Aktif sigara içicileri (operasyon öncesi bırakılması istenir)",
      "Gerçek dışı estetik beklentisi olan bireyler (BDD değerlendirmesi)",
      "Kontrolsüz tıbbi durumu olanlar",
    ],
    preparation: [
      "Sigara ve nikotin ürünleri en az 2-4 hafta önce bırakılmalı",
      "Kan sulandırıcı ilaçların hekim onayıyla kesilmesi",
      "Standart cerrahi öncesi tetkikler",
      "Septum, konka değerlendirmesi için KBB konsültasyonu önerilebilir",
    ],
    process: [
      "Genel anestezi altında, ameliyathane şartlarında yapılır.",
      "Süre 2-4 saat arasında değişir.",
      "Operasyon sonunda burun içine tampon veya silikon splint, dış yüzeye termoplastik atel uygulanır.",
    ],
    recovery: [
      {
        period: "İlk 7 gün",
        description:
          "Burnun dışında atel, içinde silikon splint bulunur. Şişlik ve göz çevresinde morluk normaldir. 5-7. günde atel ve splint çıkarılır.",
      },
      {
        period: "2-4. hafta",
        description:
          "Morluklar büyük ölçüde geçer. Burun şekli ortaya çıkmaya başlar ama belirgin şişlik devam eder.",
      },
      {
        period: "3-6. ay",
        description:
          "Şişliğin önemli kısmı çözülür; burun ucu hassasiyeti azalır.",
      },
      {
        period: "12-18. ay",
        description:
          "Nihai sonuç görünür; özellikle burun ucu ödemi en son inen alandır.",
      },
    ],
    risks: [
      "Şişlik, morluk",
      "Geçici nefes alma zorluğu",
      "Kanama",
      "Enfeksiyon (nadir)",
      "Asimetri",
      "Beklenmedik estetik sonuç — revizyon ihtiyacı",
      "Koku duyusunda geçici azalma",
    ],
    selectionCriteria: [
      "Hekimin Plastik, Rekonstrüktif ve Estetik Cerrahi veya Kulak Burun Boğaz uzmanı olması",
      "Operasyonun Sağlık Bakanlığı ruhsatlı ameliyathanesi olan kurumda yapılması",
      "Hekimle konsültasyonda hem estetik hem fonksiyonel değerlendirme yapılması",
    ],
    faq: [
      {
        question: "Rinoplasti sonucu ne zaman netleşir?",
        answer:
          "Burun ucundaki ödem en son geçen bölümdür; nihai sonuç genellikle 12-18 ayda netleşir. İlk 6 ayda şekil büyük ölçüde belli olmaya başlar.",
      },
      {
        question: "Rinoplasti ve septoplasti farkı nedir?",
        answer:
          "Septoplasti; burun içindeki kıkırdak/kemik bölme (septum) eğriliklerinin nefes alma için düzeltilmesidir. Rinoplasti dış görünüme yönelik estetik bir işlemdir. İkisi aynı seansta septorinoplasti olarak yapılabilir.",
      },
      {
        question: "Burnumdan ne zaman normal şekilde nefes alabilirim?",
        answer:
          "İçerideki silikon splintler çıkarıldıktan sonra (yaklaşık 1 hafta) belirgin rahatlama olur. Tam normalleşme şişliğin geçmesiyle 4-6 haftayı bulabilir.",
      },
      {
        question: "Ne zaman gözlük takabilirim?",
        answer:
          "Burun sırtına temas eden çerçeveli gözlüklerin 4-6 hafta süreyle kullanılmaması önerilir. Bu sürede yapışkanlı destekler veya kontakt lens tercih edilebilir.",
      },
      {
        question: "Spor ve yüzme ne zaman serbest?",
        answer:
          "Hafif egzersiz 3 hafta sonra, ağır egzersiz ve burna travma riski olan sporlar 6-8 hafta sonra hekim onayıyla başlatılır. Yüzme genellikle 4. haftadan sonra önerilir.",
      },
    ],
    relatedProcedureSlugs: ["yuz-germe", "goz-kapagi-estetigi", "botoks"],
    sources: [
      {
        title: "Rhinoplasty (Nose Surgery)",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty",
      },
      {
        title: "Functional Rhinoplasty Clinical Practice Guideline",
        publisher: "American Academy of Otolaryngology",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "meme-buyutme",
    name: "Meme Büyütme (Augmentasyon)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Silikon implant veya yağ enjeksiyonu ile meme hacminin artırılması.",
    intro:
      "Meme büyütme (augmentasyon mammaplasti); meme hacmini artırmak ve şeklini iyileştirmek amacıyla yapılan estetik cerrahi işlemidir. İki temel yöntem vardır: implant ile büyütme ve yağ enjeksiyonu ile büyütme.",
    whatIs:
      "Operasyon; küçük göğüs hacmi, doğum/emzirme sonrası volüm kaybı veya iki meme arasında belirgin asimetri durumlarında uygulanır. İmplant seçimi (yuvarlak / damla şekilli, pürüzlü / pürüzsüz yüzey, hacim) ve yerleştirme planı (kas altı / üstü, dual plan) hekim değerlendirmesi ile belirlenir.",
    methods: [
      {
        name: "Silikon İmplant ile Büyütme",
        description:
          "FDA / CE onaylı silikon jel veya tuzlu su implantları kullanılır. Şekil (yuvarlak / damla), profil, yüzey ve hacim hastanın anatomisine göre seçilir.",
      },
      {
        name: "Yağ Enjeksiyonu (Otolog Fat Transfer)",
        description:
          "Vücudun başka bölgelerinden alınan yağ işlenip memeye enjekte edilir. Sınırlı hacim artışı sağlar; implant yabancı cisim istemeyen hastalar tercih edebilir.",
      },
      {
        name: "Kombine (Hibrit) Yöntem",
        description:
          "İmplant ile yağ enjeksiyonu birlikte uygulanır; özellikle çok ince hasta ya da meme dekoltesinde daha doğal geçiş istenenlerde tercih edilir.",
      },
    ],
    candidates: [
      "Meme hacminden memnun olmayan bireyler",
      "Doğum / emzirme sonrası volüm kaybı yaşayanlar",
      "İki meme arasında belirgin asimetri olanlar",
      "Genel sağlık durumu cerrahiye uygun, beklentileri gerçekçi olanlar",
    ],
    notCandidates: [
      "Aktif meme kanseri tedavisi gören veya yüksek riskli ailesel hikâyesi olan bireyler (hekim değerlendirmesi şart)",
      "Henüz iskelet gelişimi tamamlanmamış bireyler (genelde 18 yaş altı)",
      "Kontrolsüz tıbbi rahatsızlıkları olanlar",
    ],
    preparation: [
      "Mamografi veya meme ultrasonu (önceki görüntü bulunması önerilir, baseline)",
      "Sigara bırakma (en az 2 hafta)",
      "Kan sulandırıcı ilaçların kesilmesi",
      "İmplant tipi ve hacim seçimi için ölçüm ve simülasyon",
    ],
    process: [
      "Genel anestezi altında, ameliyathane şartlarında yapılır.",
      "İmplant yerleştirme için kesi seçenekleri: meme altı katlantısı (inframammary), areola çevresi (periareolar) veya koltuk altı (axillary).",
      "İmplant kas altı (submüsküler), kas üstü (subglandular) veya dual plan tekniğiyle yerleştirilir.",
      "Süre yaklaşık 1-2 saattir; çoğunlukla 1 gece hastanede kalış önerilir.",
    ],
    recovery: [
      {
        period: "İlk 48 saat",
        description:
          "Ağrı, şişlik ve gerginlik hissi normaldir. Sportif sutyen sürekli kullanılır.",
      },
      {
        period: "1. hafta",
        description:
          "Hafif ev içi aktivite mümkündür. Kollar omuz seviyesinin üzerine kaldırılmaz.",
      },
      {
        period: "2-4. hafta",
        description:
          "Ofis işine dönüş genellikle 1-2 haftada mümkündür. Egzersiz yasağı sürer.",
      },
      {
        period: "6-8. hafta",
        description:
          "Hafif egzersize başlanır; göğüs kası egzersizleri için hekim onayı beklenir.",
      },
    ],
    risks: [
      "Şişlik, morluk, geçici hassasiyet",
      "Kapsül kontraktürü (implant etrafında sertleşme)",
      "İmplant rüptürü, sızıntı",
      "Enfeksiyon (nadir)",
      "Asimetri, riplinglik (cilt altında implant kıvrımı)",
      "Areola çevresi hissinde geçici / kalıcı değişiklik",
      "Anaplastik büyük hücreli lenfoma (BIA-ALCL) — pürüzlü yüzeyli implantlarla nadir ilişkilendirilen risk; FDA bilgilendirmesi mevcuttur",
      "Emzirme sürecinin etkilenme olasılığı (genelde korunur ama bireysel değişir)",
    ],
    selectionCriteria: [
      "Hekimin Plastik, Rekonstrüktif ve Estetik Cerrahi uzmanı olması",
      "TPRECD / ISAPS / ASPS üyeliği",
      "Kullanılan implantların FDA veya CE onaylı, izlenebilir seri numarasına sahip olması",
      "Operasyonun ameliyathanesi olan ruhsatlı kurumda yapılması",
      "Düzenli meme kontrolü (mamografi/USG) planının net olması",
    ],
    faq: [
      {
        question: "İmplantlar ömür boyu kalıcı mıdır?",
        answer:
          "Modern silikon implantların ömrü uzun olsa da hiçbir implant ömür boyu garantili değildir. Üretici ve cerrahlar 10-15 yılda bir kontrol önerir; klinik ya da görüntülemede sorun saptanmadıkça otomatik değişim gerekmez.",
      },
      {
        question: "Meme büyütme emzirmeyi engeller mi?",
        answer:
          "Çoğu hastada emzirme korunur. Kesi yerine (özellikle periareolar), implant yerleşim planına ve cerrahi tekniğine bağlı bireysel değişiklikler olabilir. Gelecekte emzirme planı varsa konsültasyonda dile getirilmelidir.",
      },
      {
        question: "Meme kanseri taraması etkilenir mi?",
        answer:
          "Mamografi implantlı meme için özel teknikler (Eklund tekniği) ile yapılabilir. Görüntüleme merkezi implantlı hasta olduğunu bilmelidir; bazı durumlarda meme MR ile destekleyici görüntüleme önerilir.",
      },
      {
        question: "İmplant kapsül kontraktürü nedir?",
        answer:
          "Vücudun implant etrafında oluşturduğu zarın sertleşmesidir. Hafif düzeylerde fark edilmez; ileri derecede memeyi sert, ağrılı ve şekilsiz hâle getirebilir ve cerrahi düzeltme gerekebilir.",
      },
    ],
    relatedProcedureSlugs: [
      "meme-kucultme",
      "meme-diklestirme",
      "yag-enjeksiyonu",
      "liposuction",
    ],
    sources: [
      {
        title: "Breast Augmentation",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/breast-augmentation",
      },
      {
        title: "Breast Implants — Safety, Risks, and Complications",
        publisher: "U.S. Food and Drug Administration (FDA)",
        url: "https://www.fda.gov/medical-devices/implants-and-prosthetics/breast-implants",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "meme-kucultme",
    name: "Meme Küçültme (Redüksiyon)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Aşırı büyük memelerin küçültülmesi ve şekillendirilmesi.",
    intro:
      "Meme küçültme (redüksiyon mammaplasti); aşırı büyük memelerin neden olduğu sırt-boyun ağrısı, omuz oluk izi, postür bozukluğu ve cilt tahrişi gibi sorunları hafifletmek üzere yapılan, hem işlevsel hem estetik bir cerrahi işlemdir.",
    whatIs:
      "Operasyonda meme dokusu, yağ ve fazla cilt çıkarılır; meme başı ve areola daha yukarı bir noktaya konumlandırılır. Sonuç olarak meme küçültülür, dikleştirilir ve şekillendirilir.",
    candidates: [
      "Sırt, boyun ve omuz ağrılarına yol açacak ölçüde büyük memeleri olanlar",
      "Sutyen askı izi, cilt altı tahriş veya egzersiz kısıtlılığı yaşayanlar",
      "Genel sağlık durumu cerrahiye uygun bireyler",
    ],
    risks: [
      "İz oluşumu (çoğunlukla T ya da ters T şeklinde, zamanla yumuşar)",
      "Meme başı hissinin geçici veya kalıcı değişimi",
      "Emzirme yeteneğinin etkilenmesi (cerrahi tekniğe göre)",
      "Asimetri, hipertrofik iz",
      "Geç dönem yara iyileşme problemleri (özellikle sigara içenlerde)",
    ],
    relatedProcedureSlugs: ["meme-buyutme", "meme-diklestirme"],
    sources: [
      {
        title: "Breast Reduction",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/reconstructive-procedures/breast-reduction",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "meme-diklestirme",
    name: "Meme Dikleştirme (Mastopeksi)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Sarkmış memelerin yukarı kaldırılması ve şekillendirilmesi.",
    intro:
      "Mastopeksi; sarkmış memelerin daha yüksek bir konuma getirildiği ve şekillendirildiği estetik cerrahi işlemidir. Volüm artışı istenirse aynı seansta implant ile kombine yapılabilir.",
    risks: [
      "İz oluşumu",
      "Meme başı hissinde geçici değişim",
      "Asimetri",
      "Zamanla yerçekimine bağlı yeniden sarkma",
    ],
    relatedProcedureSlugs: ["meme-buyutme", "meme-kucultme"],
    sources: [
      {
        title: "Breast Lift (Mastopexy)",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/breast-lift",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "karin-germe",
    name: "Karın Germe (Abdominoplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Karın bölgesindeki fazla deri ve yağ dokusunun çıkarılması, karın kaslarının sıkılaştırılması.",
    intro:
      "Karın germe (abdominoplasti / tummy tuck); özellikle gebelik veya belirgin kilo değişimi sonrası karın bölgesinde oluşan fazla deri, sarkma ve karın kası ayrılması (diastasis recti) için uygulanan kapsamlı bir cerrahi işlemdir.",
    methods: [
      {
        name: "Tam Karın Germe",
        description:
          "Göbek altı + üstü bölgedeki cilt ve yağ fazlasının çıkarılıp karın kaslarının onarıldığı kapsamlı operasyon. Göbek yeniden şekillendirilir.",
      },
      {
        name: "Mini Karın Germe",
        description:
          "Yalnız göbek altı bölgedeki sınırlı sarkma için tercih edilir. Daha kısa iz, daha kısa iyileşme.",
      },
      {
        name: "Liposuction ile Kombine",
        description:
          "Bel ve yan bölgelerdeki fazla yağın liposuction ile alındığı, karın bölgesinin germe ile birlikte düzenlendiği kombine yöntem.",
      },
    ],
    candidates: [
      "Doğum veya kilo değişimi sonrası göbek altında sarkmış cilt yaşayanlar",
      "Karın kaslarında ayrılma (diastasis recti) bulunan kişiler",
      "Sigara içmeyen veya bırakmaya hazır bireyler",
      "İlerideki gebelik planı olmayanlar (sonuçların korunması için)",
    ],
    risks: [
      "İz (göbek altında bel hattı boyunca; iç çamaşırı içinde gizlenebilir)",
      "Şişlik, morluk",
      "Seroma (cilt altında sıvı birikimi)",
      "Yara iyileşme problemleri (özellikle sigara içenlerde yüksek risk)",
      "Derin ven trombozu / pulmoner emboli (önleyici protokol uygulanır)",
      "Geçici uyuşukluk",
    ],
    relatedProcedureSlugs: ["liposuction", "bbl", "yag-enjeksiyonu"],
    sources: [
      {
        title: "Tummy Tuck (Abdominoplasty)",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "bbl",
    name: "BBL (Brezilya Popo Estetiği)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun farklı bölgelerinden alınan yağın işlenip kalçaya enjekte edildiği şekillendirme operasyonu.",
    intro:
      "BBL (Brazilian Butt Lift); hastanın kendi yağ dokusunun karın, bel, sırt veya uyluk gibi bölgelerden alınıp özel işlemden geçirildikten sonra kalçaya enjekte edildiği vücut şekillendirme operasyonudur.",
    risks: [
      "Yağ embolisi (özellikle kas içine yapılan enjeksiyonlarda nadir ama ciddi)",
      "Enfeksiyon",
      "Asimetri",
      "Verilen yağın bir kısmının emilmesi (revizyon gerekebilir)",
      "Cilt altı düzensizlikler",
    ],
    selectionCriteria: [
      "Operasyonun yalnız subkütan (cilt altı) plana yapılması — kas içi enjeksiyon yapılmaması (uluslararası multisocity bildirisi)",
      "Hekimin Plastik, Rekonstrüktif ve Estetik Cerrahi uzmanı olması",
      "Sağlık Bakanlığı ruhsatlı ameliyathanede yapılması",
    ],
    relatedProcedureSlugs: ["karin-germe", "liposuction", "yag-enjeksiyonu"],
    sources: [
      {
        title: "Multisociety Gluteal Fat Grafting Task Force Recommendations",
        publisher: "ASPS / ISAPS / ASAPS",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "liposuction",
    name: "Liposuction (Yağ Aldırma)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun çeşitli bölgelerindeki fazla yağ dokusunun cerrahi olarak alınması.",
    intro:
      "Liposuction; lokalize yağ birikimlerinin (karın, bel, sırt, basenler, uyluk, kollar, çene altı) cerrahi olarak alındığı vücut şekillendirme yöntemidir. Bir kilo verme yöntemi değil; lokalize hacim azaltma ve kontur düzenleme operasyonudur.",
    risks: [
      "Şişlik, morluk",
      "Cilt düzensizliği (oluk, dalgalanma)",
      "Asimetri",
      "Geçici uyuşukluk",
      "Enfeksiyon",
      "Sıvı-elektrolit dengesi değişiklikleri (geniş alanlarda)",
    ],
    relatedProcedureSlugs: ["karin-germe", "bbl", "yag-enjeksiyonu"],
    sources: [
      {
        title: "Liposuction",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/liposuction",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kol-germe",
    name: "Kol Germe (Brakiyoplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Üst kol iç kısmındaki sarkık derinin cerrahi olarak gerilmesi.",
    relatedProcedureSlugs: ["liposuction", "bacak-germe"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "bacak-germe",
    name: "Bacak Germe (Tayplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Uyluk iç ve dış kısımlarındaki sarkık doku ve yağın cerrahi olarak düzeltilmesi.",
    relatedProcedureSlugs: ["liposuction", "kol-germe"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "yag-enjeksiyonu",
    name: "Yağ Enjeksiyonu (Yağ Transferi)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun bir bölgesinden alınan yağın hacim eklenmek istenen başka bir bölgeye nakledilmesi.",
    intro:
      "Yağ enjeksiyonu (otolog fat grafting); hastanın kendi yağı kullanılarak yapılan dolgu işlemidir. Yüz hatlarında hacim eklemek, meme veya kalçada şekillendirmek, yara izlerini düzeltmek için tercih edilir.",
    risks: [
      "Verilen yağın bir kısmının emilmesi (bireysel değişir)",
      "Asimetri",
      "Cilt altında düzensizlik",
      "Enfeksiyon (nadir)",
    ],
    relatedProcedureSlugs: ["meme-buyutme", "bbl", "dolgu"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "jinekomasti",
    name: "Jinekomasti (Erkek Meme Küçültme)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Erkeklerde meme dokusunun büyümesi durumunun cerrahi olarak düzeltilmesi.",
    intro:
      "Jinekomasti; erkeklerde meme dokusunun çeşitli sebeplerle büyümesidir. Tedavi; liposuction, glandüler doku eksizyonu veya bunların kombinasyonu ile yapılır. Hormonal nedenler önce endokrinolojik olarak değerlendirilir.",
    methods: [
      {
        name: "Liposuction ile Jinekomasti",
        description:
          "Yalnız yağ dokusu artışı baskınsa liposuction yeterli olabilir.",
      },
      {
        name: "Glandüler Eksizyon",
        description:
          "Bez doku artışı baskınsa cerrahi eksizyon ile çıkarılır.",
      },
      {
        name: "Kombine Yöntem",
        description:
          "Yağ + glandüler doku ikisi de varsa liposuction + eksizyon birlikte uygulanır.",
      },
    ],
    risks: [
      "Şişlik, morluk",
      "Asimetri",
      "Meme başında geçici hassasiyet",
      "İz oluşumu (genelde areola çevresinde gizlenir)",
    ],
    relatedProcedureSlugs: ["liposuction", "meme-kucultme"],
    sources: [
      {
        title: "Gynecomastia Surgery",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/gynecomastia-surgery",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "dudak-estetigi",
    name: "Dudak Estetiği (Lip Augmentation)",
    specialtySlug: "dermatoloji",
    description:
      "Dudaklara hacim eklemek ve şekillendirmek için yapılan dolgu veya cerrahi uygulama.",
    intro:
      "Dudak estetiği; dudaklara hyaluronik asit dolgu veya yağ enjeksiyonu ile hacim eklemek, dudak kontürünü düzenlemek için yapılır. Kalıcı çözüm istenirse cerrahi (lip lift) yöntemler tercih edilebilir.",
    methods: [
      {
        name: "Hyaluronik Asit Dolgu",
        description:
          "Dudaklara doğal görünümlü hacim ekler. Etki 6-12 ay sürer.",
      },
      {
        name: "Yağ Enjeksiyonu",
        description:
          "Hastanın kendi yağı kullanılır. Daha uzun ömürlü ama emilim oranı değişkendir.",
      },
      {
        name: "Lip Lift",
        description:
          "Üst dudağı kalıcı olarak yukarı kaldıran cerrahi yöntem.",
      },
    ],
    risks: [
      "Şişlik, kızarıklık",
      "Asimetri",
      "Damar tıkanıklığı (dolgu) — nadir ama ciddi",
      "Granüloma",
    ],
    relatedProcedureSlugs: ["dolgu", "yag-enjeksiyonu", "botoks"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "cene-estetigi",
    name: "Çene Estetiği (Genioplasty)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Çenenin şeklini ve boyutunu cerrahi veya implant ile düzenleme.",
    intro:
      "Çene estetiği; küçük veya geride olan çenenin implant veya kemik osteotomisi ile düzeltildiği yöntemdir. Yüz oranlarını dengelemek ve profil görünümünü iyileştirmek için tercih edilir.",
    risks: [
      "Şişlik, geçici uyuşukluk (sinir hassasiyeti)",
      "Asimetri",
      "İmplant durumlarında pozisyon kayması",
    ],
    relatedProcedureSlugs: ["rinoplasti", "yuz-germe"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "bichectomy",
    name: "Bichectomy (Yanak İnceltme)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Yanak iç kısmındaki Bichat yağ pedinin cerrahi olarak çıkarılması.",
    intro:
      "Bichectomy; yanaklardaki dolgun görünümün cerrahi olarak ince hale getirilmesidir. Ağız iç kısmından yapılan küçük kesiyle Bichat yağ pedi çıkarılır. Sonuç kalıcıdır.",
    risks: [
      "Şişlik, ağız içinde geçici hassasiyet",
      "Asimetri",
      "Yaşlanma sürecinde yüz çökmesi (aşırı çıkarımda)",
    ],
    relatedProcedureSlugs: ["yuz-germe", "yag-enjeksiyonu"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "hifu",
    name: "HIFU (Yoğunlaştırılmış Ultrason)",
    specialtySlug: "dermatoloji",
    description:
      "Cilt altı dokuya enerji ileterek sıkılaştırma sağlayan, cerrahi olmayan yöntem.",
    intro:
      "HIFU (High-Intensity Focused Ultrasound); cildin alt katmanlarına yoğun ultrason enerjisi ileterek kolajen üretimini uyaran ve cildi sıkılaştıran cerrahi olmayan bir uygulamadır. Yüz ve boyun bölgesinde hafif-orta düzey sarkmalarda tercih edilir.",
    risks: [
      "Geçici kızarıklık, hassasiyet",
      "Nadir hipopigmentasyon",
      "Sonuçların kişiden kişiye değişmesi",
    ],
    relatedProcedureSlugs: ["yuz-germe", "botoks", "dolgu"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "prp",
    name: "PRP Tedavisi (Trombositten Zengin Plazma)",
    specialtySlug: "dermatoloji",
    description:
      "Hastadan alınan kanın işlenip cilde veya saçlı deriye enjekte edildiği rejeneratif uygulama.",
    intro:
      "PRP (Platelet Rich Plasma); hastanın kendi kanının santrifüj ile işlenip büyüme faktörlerinden zengin plazmanın hedef bölgeye enjekte edildiği tedavidir. Saç dökülmesi, cilt yenileme, sivilce izi tedavisinde uygulanır.",
    risks: [
      "Enjeksiyon bölgesinde kızarıklık, hassasiyet",
      "Hafif şişlik",
      "Sonuçların seans sayısına bağlı değişmesi",
    ],
    relatedProcedureSlugs: ["sac-ekimi", "mezoterapi", "fraksiyonel-lazer"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "hidrafacial",
    name: "Hidrafacial",
    specialtySlug: "dermatoloji",
    description:
      "Cilt temizleme, soyma, hidrasyon ve serum infüzyonunu birlikte uygulayan estetik uygulama.",
    intro:
      "Hidrafacial; cilt yüzeyini özel uçlarla temizleyip aynı seansta nemlendirici ve antioksidan içeren serumların infüze edildiği cerrahi olmayan bir cilt bakımı uygulamasıdır.",
    risks: [
      "Hafif geçici kızarıklık",
      "İçeriklere alerji (nadir)",
    ],
    relatedProcedureSlugs: ["mezoterapi", "kimyasal-peeling", "prp"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "mezoterapi",
    name: "Mezoterapi",
    specialtySlug: "dermatoloji",
    description:
      "Cildin orta katmanına vitamin, mineral, amino asit ve hyaluronik asit gibi içeriklerin mikro enjeksiyonu.",
    intro:
      "Mezoterapi; cildin orta katmanına çoklu mikro enjeksiyonlarla bireysel olarak hazırlanan içeriklerin verildiği bir dermatolojik uygulamadır. Cilt yenileme, saç dökülmesi, lokal yağlanma tedavilerinde tercih edilir.",
    risks: [
      "Enjeksiyon noktalarında geçici kızarıklık ve hassasiyet",
      "İçeriklere alerji (nadir)",
    ],
    relatedProcedureSlugs: ["prp", "hidrafacial", "dolgu"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kimyasal-peeling",
    name: "Kimyasal Peeling",
    specialtySlug: "dermatoloji",
    description:
      "Cildin üst katmanlarının kimyasal solüsyonlarla soyularak yenilenmesi.",
    intro:
      "Kimyasal peeling; cildin üst katmanlarının kontrollü olarak soyulmasıyla yeni cilt katmanının ortaya çıkarıldığı bir uygulamadır. Yüzeyel, orta ve derin peeling olarak üç düzeyde yapılır.",
    risks: [
      "Geçici kızarıklık ve soyulma",
      "Yanlış doz/uygulamada yanık ve renk değişikliği",
      "Güneş hassasiyeti",
    ],
    relatedProcedureSlugs: ["fraksiyonel-lazer", "mezoterapi", "hidrafacial"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "fraksiyonel-lazer",
    name: "Fraksiyonel Lazer",
    specialtySlug: "dermatoloji",
    description:
      "Cilt yüzeyine mikro lazer noktaları ile uygulanan, kolajen sentezini uyaran cilt yenileme yöntemi.",
    intro:
      "Fraksiyonel lazer; cilt yüzeyine mikro odaklı lazer noktaları uygulanarak çevresindeki sağlam dokunun iyileşmeyi hızlandırmasını hedefler. Yüzeyel kırışıklık, akne izleri ve cilt pürüzlülüğü için tercih edilir.",
    risks: [
      "Kızarıklık, geçici şişlik",
      "Hipopigmentasyon / hiperpigmentasyon (uygun olmayan cilt tipinde)",
      "Güneş hassasiyeti — koruma şart",
    ],
    relatedProcedureSlugs: ["kimyasal-peeling", "mezoterapi"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kulak-estetigi",
    name: "Kulak Estetiği (Otoplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Kepçe kulak veya kulak şekil bozukluklarının cerrahi olarak düzeltilmesi.",
    intro:
      "Otoplasti; kulağın şekil veya konum bozukluklarının cerrahi olarak düzeltildiği işlemdir. Genellikle kepçe kulak için yapılır; çocuklarda 5-6 yaşından itibaren uygulanabilir.",
    risks: [
      "Şişlik, morluk",
      "Asimetri",
      "Nüks (kulağın tekrar ileri kayması)",
    ],
    relatedProcedureSlugs: ["rinoplasti"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "g-spot-vajinoplasti",
    name: "Vajinoplasti",
    specialtySlug: "kadin-hastaliklari-ve-dogum",
    description:
      "Vajen ve çevresindeki dokuların cerrahi olarak yeniden şekillendirilmesi.",
    intro:
      "Vajinoplasti; doğum, yaşlanma veya genetik nedenlerle vajen bölgesinde oluşan gevşekliğin cerrahi olarak düzeltildiği işlemdir. Kadın hastalıkları ve doğum uzmanı veya estetik cerrah tarafından uygulanır.",
    risks: [
      "Şişlik, hassasiyet",
      "İz oluşumu",
      "Geçici cinsel hassasiyet değişimi",
    ],
    relatedProcedureSlugs: ["labioplasti"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "labioplasti",
    name: "Labioplasti",
    specialtySlug: "kadin-hastaliklari-ve-dogum",
    description:
      "Dış genital bölgedeki anatomik düzensizliklerin cerrahi olarak düzeltilmesi.",
    relatedProcedureSlugs: ["g-spot-vajinoplasti"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // SAÇ EKİMİ
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Sağlıklı saç köklerinin dökülen bölgeye nakledildiği cerrahi işlem.",
    intro:
      "Saç ekimi; saç dökülmesinin ileri evrelerinde, dökülmeye dirençli alandan (ense ve kulak arkası) alınan sağlıklı saç köklerinin (greftlerin) seyrelmiş veya dökülmüş bölgeye nakledildiği bir cerrahi işlemdir.",
    whatIs:
      "Operasyon; Androgenetik Alopesi (erkek tipi ve kadın tipi saç dökülmesi) başta olmak üzere belirli saç kaybı tiplerinde uygulanır. Donör alandan alınan saç kökleri kalıcı niteliktedir ve nakledildikleri yerde ömür boyu çalışmaya devam etme eğilimindedir; ancak nakil dışındaki bölgelerdeki dökülme süreci devam edebilir, bu nedenle uzun vadeli planlama önemlidir.",
    methods: [
      {
        name: "FUE (Follicular Unit Extraction)",
        description:
          "Donör bölgeden saç kökleri tek tek mikro-punch ile alınır. Sütur izi bırakmaz; ince noktasal izler oluşur. Günümüzün standart yöntemidir.",
      },
      {
        name: "DHI (Direct Hair Implantation)",
        description:
          "Greftler özel kalem benzeri implanter aletlerle (Choi pen) doğrudan alıcı bölgeye yerleştirilir; ayrı kanal açma adımı azalır. Daha yoğun ve doğal saç çizgisi hedeflenir.",
      },
      {
        name: "Sapphire FUE",
        description:
          "Kanal açma aşamasında çelik bıçak yerine safir uçlu blade kullanılır; daha küçük ve homojen kanallar hedeflenir.",
      },
      {
        name: "Robotik FUE",
        description:
          "Bilgisayar kontrollü robot kollar ile greft çıkarımı yapılır. Türkiye'de seçili merkezlerde uygulanır.",
      },
    ],
    candidates: [
      "Donör alanda yeterli, sağlıklı saç kökü bulunan bireyler",
      "Saç dökülmesi stabilize olmuş kişiler (genellikle 25 yaş üzeri)",
      "Genel sağlık durumu cerrahiye uygun bireyler",
      "Sonucu gerçekçi beklenti çerçevesinde değerlendiren kişiler",
    ],
    notCandidates: [
      "Donör alanı yetersiz olan bireyler",
      "Aktif olarak hızla ilerleyen dökülmesi olan genç hastalar (önce medikal stabilizasyon önerilir)",
      "Alopecia areata, sikatrisyel alopesi gibi belirli dökülme tiplerinde — özel değerlendirme gerektirir",
      "Kontrolsüz hipertansiyon, kanama bozuklukları",
    ],
    preparation: [
      "Operasyon öncesi dermatolog/cerrah konsültasyonu, donör değerlendirmesi",
      "Kan tahlilleri (hemogram, koagülasyon, enfeksiyon panel)",
      "Kan sulandırıcı ilaçların hekim onayıyla kesilmesi",
      "Operasyon öncesi minimum 7 gün sigara, alkol ve kafein kısıtlaması önerilir",
    ],
    process: [
      "Lokal anestezi ile yapılır; sedasyon eklenebilir.",
      "Donör alandan greftler alınır (FUE / DHI).",
      "Alıcı alanda saç çizgisi planlanır; kanallar açılır veya implanter pen kullanılır.",
      "Greftler tek tek yerleştirilir. Süre, greft sayısına göre 6-10 saat olabilir.",
      "Operasyon günü hasta taburcu edilir.",
    ],
    recovery: [
      {
        period: "İlk 3 gün",
        description:
          "Donör ve alıcı bölgede kabuklanma ve hassasiyet normaldir. Hekim yıkama protokolüne göre 2-3. günde ilk yıkama yapılır.",
      },
      {
        period: "1-2. hafta",
        description:
          "Kabuklar yıkamalarla dökülür. Hafif kızarıklık devam edebilir.",
      },
      {
        period: "2-4. hafta",
        description:
          "Nakledilen saçlar şok dökülmesi yaşayabilir; bu beklenen bir durumdur ve kalıcı kayıp anlamına gelmez.",
      },
      {
        period: "3-6. ay",
        description:
          "Yeni saçlar belirgin biçimde çıkmaya başlar.",
      },
      {
        period: "12-18. ay",
        description:
          "Nihai sonuç görünür: nakledilen saçlar uzar, yoğunluk netleşir.",
      },
    ],
    risks: [
      "Donör alanda nadir punch izleri",
      "Geçici şişlik (alın bölgesinde, 2-4. gün)",
      "Kabuklanma, kaşıntı",
      "Foliküllerin tutmama oranı (her hastada %100 değildir; teknik ve bakıma bağlı bireysel değişim)",
      "Enfeksiyon (uygun hijyenle çok nadir)",
      "Beklenmedik estetik sonuç — revizyon ekim gerekebilir",
    ],
    selectionCriteria: [
      "Hekimin Saç Ekimi Sertifikalı olması (dermatoloji veya plastik cerrahi uzmanlığı ile)",
      "International Society of Hair Restoration Surgery (ISHRS) üyeliği veya benzer uluslararası dernek bağlantısı",
      "Operasyonun Sağlık Bakanlığı ruhsatlı ameliyathanesi olan merkezde yapılması",
      "Saç çizgisi planlamasının hastayla birlikte yapılması",
      "Operasyon ekibinin (cerrah + asistan) operasyon boyunca aynı kalması",
    ],
    faq: [
      {
        question: "Saç ekimi kalıcı mıdır?",
        answer:
          "Donör alandan nakledilen saç köklerinin büyük çoğunluğu kalıcı niteliktedir ve nakil bölgesinde ömür boyu çalışmaya devam eder. Ancak donör alan dışındaki saçlarda dökülme süreci devam edebilir; bu nedenle hekim uzun vadeli planlama yapar.",
      },
      {
        question: "Saç ekimi sonrası ne zaman normal görünürüm?",
        answer:
          "Kabuklanma 7-14 günde geçer. Şok dökülmesi 2-4. haftada görülebilir. Yeni saçlar 3-4. ayda görünmeye başlar; nihai görünüm 12-18 ayda netleşir.",
      },
      {
        question: "FUE ile DHI arasındaki fark nedir?",
        answer:
          "FUE donör alandan greft alma yöntemini; DHI hem alma hem implanter pen ile doğrudan yerleştirme yöntemini ifade eder. DHI daha yoğun ekim ve mevcut saçlar arasına seyreltme için tercih edilebilir; ancak teknik seçim hekimin değerlendirmesine göre yapılır.",
      },
      {
        question: "Kaç greft yaptırmalıyım?",
        answer:
          "Greft sayısı; saç dökülmesinin evresi (Norwood skalası), donör kapasitesi ve hedef alana göre belirlenir. Yüz yüze değerlendirme olmadan sayı vermek doğru değildir.",
      },
      {
        question: "Saç ekiminden ne zaman uçabilirim?",
        answer:
          "Operasyon ertesi gün veya 2 gün sonra uçuş genellikle güvenli kabul edilir; ancak ilk haftada uzun süreli uçuştan kaçınılması, donör alanına basınç olmaması önerilir.",
      },
      {
        question: "Saç ekimi tek seansta tamamlanır mı?",
        answer:
          "İhtiyaca göre bir veya birden fazla seans gerekebilir. Geniş alan ve düşük donör kapasitesinde 1 yıl arayla ikinci seans planlanabilir.",
      },
    ],
    relatedProcedureSlugs: ["sakal-ekimi", "kas-ekimi", "botoks"],
    sources: [
      {
        title: "Hair Transplantation — Clinical Overview",
        publisher: "International Society of Hair Restoration Surgery (ISHRS)",
        url: "https://www.ishrs.org",
      },
      {
        title: "Androgenetik Alopesi Klinik Yaklaşımı",
        publisher: "Türk Dermatoloji Derneği",
      },
      {
        title: "Hair Loss Treatments Overview",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/conditions/hair-loss/",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "sakal-ekimi",
    name: "Sakal Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Sakal bölgesindeki seyreklik ya da boşlukların kapatılması amacıyla yapılan kök nakli.",
    methods: [
      {
        name: "FUE ile Sakal Ekimi",
        description:
          "Ense donör alandan alınan tek köklü greftler yüz / sakal hattına nakledilir.",
      },
    ],
    risks: [
      "Geçici kızarıklık ve kabuklanma",
      "Yön düzensizliği — revizyon gerekebilir",
      "Şok dökülmesi (geçici)",
    ],
    relatedProcedureSlugs: ["sac-ekimi", "kas-ekimi"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "kas-ekimi",
    name: "Kaş Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Kaş bölgesindeki seyreklik veya boşlukların kapatılması için yapılan kıl kökü nakli.",
    relatedProcedureSlugs: ["sac-ekimi", "sakal-ekimi"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // DERMATOLOJİ ESTETİK
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "botoks",
    name: "Botoks (Botulinum Toksin)",
    specialtySlug: "dermatoloji",
    description:
      "Yüz mimik kaslarının geçici olarak gevşetilmesiyle kırışıklıkların azaltıldığı dermatolojik uygulama.",
    intro:
      "Botoks (botulinum toksin tip A); mimik kaslarına yapılan enjeksiyonla kasların kasılma gücünü geçici olarak azaltarak yüzdeki dinamik çizgilerin görünümünü hafifletir. Estetik amaçlı en çok kullanılan minimal invaziv uygulamalardan biridir.",
    whatIs:
      "Etken madde; sinir-kas iletisini geçici olarak bloke eden bir nöromodülatördür. Etkisi enjeksiyondan 3-7 gün sonra başlar, 10-14 günde tam yerleşir ve genellikle 3-6 ay sürer. Süre kişisel metabolizmaya, kas yoğunluğuna ve dozaja bağlıdır.",
    methods: [
      {
        name: "Dinamik Yüz Çizgilerinde",
        description:
          "Alın çizgileri, kaş arası (glabella) ve göz çevresi çizgileri (kaz ayakları) için en sık tercih edilen uygulama bölgeleri.",
      },
      {
        name: "Masseter Botoksu",
        description:
          "Çene köşesindeki çiğneme kasına yapılan uygulama; diş gıcırdatma ve yüzün alt bölgesinde köşeli görünümü azaltmak için kullanılır.",
      },
      {
        name: "Aşırı Terleme (Hiperhidroz)",
        description:
          "Koltuk altı, el ayası ve ayak tabanında aşırı terlemeyi azaltmak için terapötik amaçla uygulanır.",
      },
      {
        name: "Migren Tedavisi",
        description:
          "Kronik migrende belirli bir protokolle uygulanan tıbbi endikasyondur; nöroloji uzmanı değerlendirmesiyle yapılır.",
      },
    ],
    candidates: [
      "Dinamik çizgileri belirgin, statik çizgilere geçmemiş bireyler",
      "Genel sağlık durumu uygun yetişkinler",
    ],
    notCandidates: [
      "Hamilelik ve emzirme dönemindeki bireyler",
      "Miyastenia gravis gibi nöromüsküler hastalığı olanlar",
      "Botulinum toksine bilinen alerjisi olanlar",
      "Enjeksiyon bölgesinde aktif enfeksiyon olanlar",
    ],
    process: [
      "Yüz değerlendirmesi ve mimik gözlemi sonrası enjeksiyon planı çizilir.",
      "İnce iğneyle, hedef kaslara minimum hacim enjekte edilir.",
      "İşlem 10-15 dakika sürer, anestezi gerektirmez.",
      "Enjeksiyon sonrası 4 saat hasta uzanmamalı; alan ovuşturulmamalıdır.",
    ],
    recovery: [
      {
        period: "Aynı gün",
        description:
          "Sosyal hayata dönüş genellikle hemen mümkündür. Enjeksiyon noktalarında küçük kırmızılıklar olabilir.",
      },
      {
        period: "3-14 gün",
        description:
          "Etki kademeli olarak yerleşir; 10-14 günde tam etki görünür.",
      },
      {
        period: "3-6 ay",
        description:
          "Etki kademeli azalır; kişisel periyot belirlendiğinde tekrar uygulama planlanır.",
      },
    ],
    risks: [
      "Enjeksiyon bölgesinde kısa süreli kızarıklık, hassasiyet",
      "Hafif morluk",
      "Asimetrik etki (uygulamacının deneyimine bağlı)",
      "Geçici göz kapağı düşmesi (pitozis) — nadir",
      "Baş ağrısı — geçici",
    ],
    selectionCriteria: [
      "Uygulayıcının tıp doktoru olması (dermatoloji veya plastik cerrahi)",
      "Onaylı (FDA / CE / Sağlık Bakanlığı) ürün kullanımı",
      "Tıbbi tesis ortamında uygulama",
    ],
    faq: [
      {
        question: "Botoks bağımlılık yapar mı?",
        answer:
          "Hayır. Botoks etken maddesi vücutta birikmez ve süresi dolunca kasın eski işlevi geri döner. Tekrarlı uygulama hastanın kişisel tercihidir; cilt etkisi açısından bağımlılık tanımı geçersizdir.",
      },
      {
        question: "Ne zaman ilk uygulamayı düşünmeliyim?",
        answer:
          "Sabit bir yaş yoktur. Dinamik çizgiler kalıcı statik çizgiler hâline gelmeye başladığında profilaktik olarak değerlendirilebilir. Konsültasyonda hekim önerisi kişiye göre verilir.",
      },
      {
        question: "Hangi bölgelere uygulanmaz?",
        answer:
          "Gözün hemen altı (alt göz kapağı kası) ve dudak çevresi gibi bölgelerde özel doz ve teknik gerektirir; deneyimsiz uygulamada işlevsel sorun olabilir. Mutlaka uzman tarafından yapılmalıdır.",
      },
    ],
    relatedProcedureSlugs: ["dolgu", "yuz-germe", "kas-germe"],
    sources: [
      {
        title: "Botulinum Toxin Type A — Patient Information",
        publisher: "American Academy of Dermatology",
        url: "https://www.aad.org",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "dolgu",
    name: "Dolgu (Hyaluronik Asit)",
    specialtySlug: "dermatoloji",
    description:
      "Yüzde hacim kaybı olan bölgelere hyaluronik asit bazlı dolgu enjeksiyonu.",
    intro:
      "Dolgu uygulamaları; hyaluronik asit (HA) içerikli ürünlerin yüz bölgesinde hacim eklemek veya hatları yumuşatmak için yapılan enjeksiyonlardır. Etkisi ürüne ve uygulanan bölgeye göre 6-18 ay arasında değişir.",
    risks: [
      "Enjeksiyon bölgesinde kızarıklık, şişlik, morluk",
      "Asimetri",
      "Damar tıkanıklığı (vasküler oklüzyon) — nadir ama ciddi; deneyimli el zorunludur",
      "Granüloma veya geç başlangıçlı reaksiyonlar",
    ],
    relatedProcedureSlugs: ["botoks", "yag-enjeksiyonu", "goz-kapagi-estetigi"],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "lazer-epilasyon",
    name: "Lazer Epilasyon",
    specialtySlug: "dermatoloji",
    description:
      "İstenmeyen tüylerin lazer enerjisiyle azaltılması.",
    risks: [
      "Geçici kızarıklık",
      "Hiperpigmentasyon veya hipopigmentasyon (uygun olmayan cilt tipi/protokol)",
      "Yanık (kalitesiz cihaz/uygulayıcı)",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "akne-tedavisi",
    name: "Akne Tedavisi",
    specialtySlug: "dermatoloji",
    description: "Sivilcelerin tıbbi takip ve uygulamalarla yönetilmesi.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // DİŞ HEKİMLİĞİ
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "dis-implanti",
    name: "Diş İmplantı",
    specialtySlug: "dis-hekimligi",
    description:
      "Eksik dişlerin yerine titanyum vida ile yapay diş kökü yerleştirilen tedavi yöntemi.",
    intro:
      "Diş implantı; çene kemiğine yerleştirilen titanyum (veya zirkonyum) yapay diş kökü ve üzerine yerleştirilen porselen kron / köprü kombinasyonudur. Eksik dişlerin estetik ve işlevsel olarak yeniden kazandırılmasında kullanılır.",
    whatIs:
      "Tedavi süreci genellikle iki aşamalıdır: (1) implantın çene kemiğine yerleştirilmesi ve kemiğin implantla kaynaşması (osseointegrasyon), (2) kaynaşma tamamlandıktan sonra (genellikle 3-6 ay) üst yapı (kron) yerleştirilmesi. Bazı vakalarda anında yükleme (immediate loading) mümkündür.",
    methods: [
      {
        name: "Tek Diş İmplantı",
        description:
          "Tek bir eksik diş için tek implant ve üzerine tek kron yerleştirilir.",
      },
      {
        name: "İmplant Destekli Köprü",
        description:
          "Birkaç eksik diş için 2-3 implanta dayanan sabit köprü yapılır.",
      },
      {
        name: "All-on-4 / All-on-6",
        description:
          "Tüm üst veya alt dişlerin kaybedildiği durumlarda 4 veya 6 implant üzerine tam ark sabit protez tasarlanır. Ayrı sayfası için: all-on-4.",
      },
      {
        name: "Anında Yükleme (Same-Day Implant)",
        description:
          "İmplant yerleştirme ile aynı seansta geçici diş yerleştirilir; uygunluk kemik kalitesi ve klinik değerlendirmeye bağlıdır.",
      },
    ],
    candidates: [
      "Eksik dişi bulunan ve genel sağlık durumu uygun yetişkinler",
      "Çene kemik yapısı yeterli olan veya kemik grefti ile düzeltilebilen bireyler",
      "Ağız hijyenine düzenli olarak dikkat eden bireyler",
    ],
    notCandidates: [
      "Aktif diş eti hastalığı olanlar (önce tedavi gerekir)",
      "Kontrolsüz diyabet, osteoporoz, bisfosfonat kullanımı (özel değerlendirme)",
      "Aktif sigara içicileri (başarı oranı düşer)",
      "İskelet büyümesi tamamlanmamış bireyler",
    ],
    preparation: [
      "Detaylı klinik muayene + 3D dental tomografi (CBCT)",
      "Diş eti sağlığı değerlendirmesi",
      "Sistemik hastalıkların hekim onayı",
      "Sigara bırakma önerisi",
    ],
    process: [
      "Lokal anestezi altında, gerekirse sedasyon ile.",
      "İmplantın çene kemiğine yerleştirilmesi (genellikle 30-60 dk / tek implant).",
      "Kemik grefti gerekiyorsa aynı seansta uygulanabilir.",
      "Osseointegrasyon süresi: alt çene 3-4 ay, üst çene 4-6 ay (anatomi farklılıkları nedeniyle).",
      "Kaynaşma tamamlanınca üst yapı (abutment + kron) yerleştirilir.",
    ],
    recovery: [
      {
        period: "İlk 24 saat",
        description:
          "Hafif şişlik, kanama ve ağrı normaldir. Reçeteli ağrı kesici ve antibiyotik kullanılır. Soğuk uygulama önerilir.",
      },
      {
        period: "1. hafta",
        description:
          "Yumuşak beslenme önerilir. Yara yerine kıymık olmasını önlemek için yumuşak diş fırçası kullanılır.",
      },
      {
        period: "2-4. hafta",
        description:
          "İyileşme büyük ölçüde tamamlanır. Diş eti sağlığı düzenli takip edilir.",
      },
      {
        period: "3-6. ay",
        description:
          "Osseointegrasyon tamamlandığında üst yapı seansı planlanır.",
      },
    ],
    risks: [
      "Geçici şişlik, ağrı, hassasiyet",
      "Enfeksiyon (peri-implantitis) — uzun vadede risk; düzenli kontrol şart",
      "Osseointegrasyon başarısızlığı (implant kaynaşmaz) — nadir",
      "Sinir hasarı, sinüs perforasyonu (anatomik dikkat gerektirir)",
      "Estetik veya işlevsel sorunlar — revizyon gerekebilir",
    ],
    selectionCriteria: [
      "Hekimin diş hekimi olması; implant cerrahisi konusunda eğitimli/sertifikalı olması",
      "Türk Diş Hekimleri Birliği üyeliği",
      "ITI (International Team for Implantology) veya benzer uluslararası dernek üyeliği — opsiyonel ama tercih sebebi",
      "Kullanılan implant markasının CE/FDA onaylı ve uluslararası sicilde izlenebilir olması",
      "3D dental tomografi ile cerrahi planlamanın yapılması",
    ],
    faq: [
      {
        question: "İmplant ömür boyu kalıcı mıdır?",
        answer:
          "Modern titanyum implantların uzun ömürlü olduğu klinik çalışmalarda gösterilmiştir; ancak ağız hijyeni, sigara, diş eti sağlığı ve düzenli kontrol başarıyı belirleyen başlıca faktörlerdir. Ömür boyu garantili kabul edilmez.",
      },
      {
        question: "Implant tedavisi ne kadar sürer?",
        answer:
          "İmplant yerleştirme + osseointegrasyon + üst yapı dahil toplam süre genellikle 3-6 aydır. Kemik grefti gerekiyorsa süre uzayabilir.",
      },
      {
        question: "Ağrı oluyor mu?",
        answer:
          "İşlem lokal anestezi altında ağrısız yapılır. Sonrasında 24-48 saatlik hafif ağrı ve şişlik beklenebilir; reçeteli ağrı kesicilerle yönetilir.",
      },
      {
        question: "Sigara içiyorum, implant yapılabilir mi?",
        answer:
          "Sigara implant başarı oranını düşürür ve peri-implantit riskini artırır. İdeal olan operasyon öncesi bırakmaktır. Hekim değerlendirmesinde sigara öyküsü mutlaka paylaşılmalıdır.",
      },
    ],
    relatedProcedureSlugs: [
      "all-on-4",
      "zirkonyum-kaplama",
      "lamine-dis",
      "dis-beyazlatma",
    ],
    sources: [
      {
        title: "Dental Implants — Information for Patients",
        publisher: "American Dental Association (ADA)",
        url: "https://www.ada.org",
      },
      {
        title: "Türk Diş Hekimleri Birliği",
        publisher: "TDB",
        url: "https://www.tdb.org.tr",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "all-on-4",
    name: "All-on-4 Diş Tedavisi",
    specialtySlug: "dis-hekimligi",
    description:
      "Tüm dişlerin 4 implant üzerine sabitlendiği ileri implant tedavisi.",
    intro:
      "All-on-4; tüm üst ya da alt çenede dişlerin kaybedildiği durumlarda 4 implant üzerine tam ark sabit protez tasarlanan ileri implant tedavisidir. Anında yükleme ile aynı gün geçici diş takılması çoğunlukla mümkündür.",
    risks: [
      "İmplantlardan birinin kaynaşmaması — nadiren tüm planı etkiler",
      "Peri-implantitis — uzun vadeli hijyen çok önemlidir",
      "Geçici çiğneme uyumu — final restorasyon sonrası düzelir",
    ],
    relatedProcedureSlugs: ["dis-implanti", "zirkonyum-kaplama"],
    sources: [
      {
        title: "All-on-Four Treatment Concept — Clinical Evidence",
        publisher: "International Journal of Oral & Maxillofacial Implants",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "zirkonyum-kaplama",
    name: "Zirkonyum Kaplama",
    specialtySlug: "dis-hekimligi",
    description:
      "Dişlerin estetik ve fonksiyonel sebeplerle zirkonyum porselen kaplama ile restorasyonu.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "lamine-dis",
    name: "Lamine Diş (Veneer)",
    specialtySlug: "dis-hekimligi",
    description:
      "Ön dişlere yapıştırılan ince porselen yapraklarla estetik gülüş tasarımı.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    specialtySlug: "dis-hekimligi",
    description:
      "Mat veya sararmış dişlerin profesyonel uygulama ile beyazlatılması.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // GÖZ
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "lasik",
    name: "LASIK Göz Ameliyatı",
    specialtySlug: "goz-hastaliklari",
    description:
      "Miyop, hipermetrop ve astigmat gibi kırma kusurlarının lazer ile düzeltildiği göz ameliyatı.",
    intro:
      "LASIK (Laser-Assisted In Situ Keratomileusis); korneada flap (kapak) oluşturularak altındaki dokuya excimer lazer ile şekil verildiği refraktif cerrahi yöntemidir. Miyop, hipermetrop ve astigmatın belirli derecelerinde uygulanır.",
    methods: [
      {
        name: "Standart LASIK",
        description:
          "Mikrokeratom veya femtosaniye lazer ile flap oluşturulur; sonra excimer lazer kornea dokusuna şekil verir.",
      },
      {
        name: "Femto-LASIK",
        description:
          "Flap oluşturma adımı bıçak yerine femtosaniye lazerle yapılır.",
      },
      {
        name: "PRK / TransPRK",
        description:
          "Flap oluşturulmaz; kornea yüzeyi (epitel) çıkarılıp doğrudan lazerle şekillendirilir. Sporcu ve ince kornealı hastalar için tercih sebebi olabilir.",
      },
    ],
    candidates: [
      "Refraktif kusuru stabil olan (en az 1 yıl) bireyler",
      "Genellikle 18-50 yaş arası",
      "Kornea kalınlığı ve şekli uygun olanlar",
      "Aktif göz hastalığı (keratokonus, ciddi kuru göz) olmayanlar",
    ],
    notCandidates: [
      "Keratokonus tanısı veya şüphesi olanlar",
      "Hamilelik ve emzirme dönemi",
      "Diyabet kontrol altında değilse",
      "İleri kuru göz hastalığı olanlar",
    ],
    process: [
      "Damla anestezi (göze damla anestezik) ile yapılır; iğne gerekmez.",
      "Her göz için işlem yaklaşık 10-15 dakika sürer.",
      "Lazer uygulaması 30-60 saniye kadardır; geri kalan süre hazırlık.",
    ],
    recovery: [
      {
        period: "İlk 24 saat",
        description:
          "Hafif yanma, sulanma, ışığa hassasiyet olabilir. Koruyucu gözlük takılır. Bu dönemde dinlenme önerilir.",
      },
      {
        period: "2-7. gün",
        description:
          "Görüşte hızlı iyileşme; ofis işine 1-2 günde dönüş çoğunlukla mümkündür. Damla protokolü uygulanır.",
      },
      {
        period: "1-3. ay",
        description:
          "Görüş kalitesi stabilize olur. Geç dönem kuru göz şikayeti olabilir; yapay gözyaşı kullanımı yardımcı olur.",
      },
    ],
    risks: [
      "Geçici kuru göz (en sık)",
      "Gece görüşünde halo / glare",
      "Hafif gözde rahatsızlık",
      "Az sayıda hastada yetersiz düzeltme veya aşırı düzeltme — gözlük veya tamamlayıcı işlem gerekebilir",
      "Flap komplikasyonları (femtosaniye ile çok nadir)",
    ],
    relatedProcedureSlugs: ["smile"],
    sources: [
      {
        title: "LASIK Patient Information",
        publisher: "U.S. Food and Drug Administration (FDA)",
        url: "https://www.fda.gov/medical-devices/lasik/fdas-lasik-program",
      },
      {
        title: "Laser Eye Surgery and Lens Surgery — Patient Information",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/tests-and-treatments/laser-eye-surgery-and-lens-surgery/",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  {
    slug: "smile",
    name: "SMILE Göz Lazer",
    specialtySlug: "goz-hastaliklari",
    description:
      "Femtosaniye lazerle yapılan, daha küçük kesi ile gerçekleştirilen modern refraktif cerrahi yöntemi.",
    intro:
      "SMILE (Small Incision Lenticule Extraction); femtosaniye lazerle kornea içinde oluşturulan ince lentikülün küçük bir kesi yoluyla çıkarıldığı flap-siz bir refraktif cerrahi yöntemidir.",
    risks: [
      "Geçici görüş bulanıklığı",
      "Kuru göz (LASIK'e göre genellikle daha az)",
      "Az sayıda hastada yetersiz veya aşırı düzeltme",
    ],
    relatedProcedureSlugs: ["lasik"],
    sources: [
      {
        title: "Laser Eye Surgery and Lens Surgery — Patient Information",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/tests-and-treatments/laser-eye-surgery-and-lens-surgery/",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // KADIN DOĞUM
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "tup-bebek",
    name: "Tüp Bebek (IVF)",
    specialtySlug: "kadin-hastaliklari-ve-dogum",
    description:
      "Yardımcı üreme tekniği ile yumurta ve spermin laboratuvarda döllenmesi ve embriyonun rahime nakli.",
    intro:
      "Tüp bebek (IVF / In Vitro Fertilizasyon); yumurta ve spermin laboratuvar ortamında bir araya getirilerek döllenmesi ve oluşan embriyonun rahime transferi sürecidir. Türkiye'de Sağlık Bakanlığı yönetmelikleri çerçevesinde, izinli üreme merkezlerinde uygulanır.",
    methods: [
      {
        name: "Klasik IVF",
        description:
          "Yumurta ve sperm laboratuvar ortamında bir araya getirilir; döllenme spontan gerçekleşir.",
      },
      {
        name: "ICSI (İntrasitoplazmik Sperm Enjeksiyonu)",
        description:
          "Tek bir spermin doğrudan yumurta içine mikroenjeksiyonu. Erkek faktörü infertilitede tercih edilir.",
      },
      {
        name: "Mikro-TESE",
        description:
          "Spermi az veya bulunmayan erkek hastalarda cerrahi olarak testisten sperm elde edilmesi.",
      },
    ],
    candidates: [
      "Doğal yolla gebelik elde edemeyen çiftler",
      "Tüp tıkanıklığı, ileri endometriozis veya açıklanamayan infertilite",
      "Belirli erkek faktörü infertilite durumları",
    ],
    risks: [
      "Ovaryan hiperstimülasyon sendromu (OHSS)",
      "Çoğul gebelik riski",
      "Yumurta toplama işlemine bağlı nadir komplikasyonlar",
      "Tedavi başarısının her denemede %100 olmaması (yaşa ve tanıya bağlı bireysel değişim)",
    ],
    sources: [
      {
        title: "Üremeye Yardımcı Tedavi Uygulamaları ve Üremeye Yardımcı Tedavi Merkezleri Hakkında Yönetmelik",
        publisher: "T.C. Sağlık Bakanlığı",
      },
      {
        title: "IVF Patient Information",
        publisher: "European Society of Human Reproduction and Embryology (ESHRE)",
        url: "https://www.eshre.eu",
      },
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // GENEL
  // ═════════════════════════════════════════════════════════════════════════
  {
    slug: "beslenme-danismanligi",
    name: "Beslenme Danışmanlığı",
    specialtySlug: "diyetisyen",
    description:
      "Diyetisyen tarafından kişiye özel beslenme planlaması ve takibi.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  {
    slug: "psikolojik-destek",
    name: "Psikolojik Destek",
    specialtySlug: "psikoloji",
    description:
      "Psikolog veya psikiyatrist tarafından bireysel terapi süreci.",
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
];

export function findProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
