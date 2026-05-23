import type { Procedure } from "./types";

/**
 * Tedavi sayfaları. Estetik cerrahi ağırlıklı + medical tourism dikeyleri.
 * Yeni prosedür eklerken `procedures` listesine + (varsa) ilgili doktor/klinik
 * verisinde `procedureSlugs`/`procedures` alanlarına ekleyin.
 */
export const procedures: Procedure[] = [
  // ── Estetik cerrahi ────────────────────────────────────────────────────
  {
    slug: "yuz-germe",
    name: "Yüz Germe (Facelift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Yüz bölgesindeki sarkma ve kırışıklıkların cerrahi olarak gerildiği estetik operasyon. Farklı teknikler (mini facelift, SMAS, deep plane) kişiye göre planlanır.",
  },
  {
    slug: "sakak-germe",
    name: "Şakak Germe (Temporal Lift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Şakak bölgesindeki sarkmaların ve kaş düşmesinin cerrahi olarak düzeltildiği uygulama. Genellikle yüz germe ile kombine yapılır.",
  },
  {
    slug: "kas-germe",
    name: "Kaş Germe (Brow Lift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Kaşların yukarı kaldırılarak alın bölgesindeki çizgilerin azaltıldığı operasyon. Endoskopik veya açık yöntemle yapılabilir.",
  },
  {
    slug: "goz-kapagi-estetigi",
    name: "Göz Kapağı Estetiği (Blefaroplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Üst ve/veya alt göz kapağındaki sarkma, torba ve fazla derinin cerrahi olarak düzeltilmesi.",
  },
  {
    slug: "boyun-germe",
    name: "Boyun Germe (Necklift)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Boyun bölgesindeki sarkma ve gevşemenin cerrahi olarak giderildiği estetik operasyon.",
  },
  {
    slug: "rinoplasti",
    name: "Rinoplasti (Burun Estetiği)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Burunun şekil veya işlevsel sorunlarının cerrahi olarak düzeltildiği estetik operasyon.",
  },
  {
    slug: "meme-buyutme",
    name: "Meme Büyütme (Augmentasyon)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Silikon implant veya yağ enjeksiyonu ile meme hacminin artırılması.",
  },
  {
    slug: "meme-kucultme",
    name: "Meme Küçültme (Redüksiyon)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Aşırı büyük memelerin küçültülmesi ve şekillendirilmesi. Sırt ağrısı, boyun ağrısı gibi şikâyetlere bağlı tıbbi endikasyon olabilir.",
  },
  {
    slug: "meme-diklestirme",
    name: "Meme Dikleştirme (Mastopeksi)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Sarkmış memelerin yukarı kaldırılması ve şekillendirilmesi. Gerekirse meme büyütme ile kombine yapılır.",
  },
  {
    slug: "karin-germe",
    name: "Karın Germe (Abdominoplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Karın bölgesindeki fazla deri ve yağ dokusunun çıkarılması, karın kaslarının sıkılaştırılması.",
  },
  {
    slug: "bbl",
    name: "BBL (Brezilya Popo Estetiği)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun farklı bölgelerinden alınan yağın işlenip kalçaya enjekte edildiği şekillendirme operasyonu.",
  },
  {
    slug: "liposuction",
    name: "Liposuction (Yağ Aldırma)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun çeşitli bölgelerindeki fazla yağ dokusunun cerrahi olarak alınması.",
  },
  {
    slug: "kol-germe",
    name: "Kol Germe (Brakiyoplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Üst kol iç kısmındaki sarkık derinin cerrahi olarak gerilmesi.",
  },
  {
    slug: "bacak-germe",
    name: "Bacak Germe (Tayplasti)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Uyluk iç ve dış kısımlarındaki sarkık doku ve yağın cerrahi olarak düzeltilmesi.",
  },
  {
    slug: "yag-enjeksiyonu",
    name: "Yağ Enjeksiyonu (Yağ Transferi)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Vücudun bir bölgesinden alınan yağın hacim eklenmek istenen başka bir bölgeye nakledilmesi.",
  },

  // ── Saç & dermatoloji estetik ─────────────────────────────────────────
  {
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Saç dökülmesinin tedavisinde uygulanan, sağlıklı saç köklerinin dökülen bölgeye nakledildiği cerrahi işlem. FUE, DHI ve Safir FUE teknikleri uygulanır.",
  },
  {
    slug: "sakal-ekimi",
    name: "Sakal Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Sakal bölgesindeki seyreklik ya da boşlukların kapatılması amacıyla yapılan kök nakli.",
  },
  {
    slug: "kas-ekimi",
    name: "Kaş Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Kaş bölgesindeki seyreklik ya da boşlukların kapatılması amacıyla yapılan kıl kökü nakli.",
  },
  {
    slug: "botoks",
    name: "Botoks (Botulinum Toksin)",
    specialtySlug: "dermatoloji",
    description:
      "Yüz mimik kaslarının geçici olarak gevşetilmesiyle kırışıklıkların azaltıldığı dermatolojik uygulama.",
  },
  {
    slug: "dolgu",
    name: "Dolgu (Hyaluronik Asit)",
    specialtySlug: "dermatoloji",
    description:
      "Yüzde hacim kaybı olan bölgelere hyaluronik asit bazlı dolgu enjeksiyonu.",
  },
  {
    slug: "lazer-epilasyon",
    name: "Lazer Epilasyon",
    specialtySlug: "dermatoloji",
    description:
      "İstenmeyen tüylerin lazer enerjisiyle azaltılması.",
  },
  {
    slug: "akne-tedavisi",
    name: "Akne Tedavisi",
    specialtySlug: "dermatoloji",
    description:
      "Sivilcelerin tıbbi takip ve uygulamalarla yönetilmesi.",
  },

  // ── Diş ───────────────────────────────────────────────────────────────
  {
    slug: "dis-implanti",
    name: "Diş İmplantı",
    specialtySlug: "dis-hekimligi",
    description:
      "Eksik dişlerin yerine titanyum vida ile yapay diş kökü yerleştirilen tedavi yöntemi.",
  },
  {
    slug: "all-on-4",
    name: "All-on-4 Diş Tedavisi",
    specialtySlug: "dis-hekimligi",
    description:
      "Tüm dişlerin 4 implant üzerine sabitlendiği ileri implant tedavisi.",
  },
  {
    slug: "zirkonyum-kaplama",
    name: "Zirkonyum Kaplama",
    specialtySlug: "dis-hekimligi",
    description:
      "Dişlerin estetik ve fonksiyonel sebeplerle zirkonyum porselen kaplama ile restorasyonu.",
  },
  {
    slug: "lamine-dis",
    name: "Lamine Diş (Veneer)",
    specialtySlug: "dis-hekimligi",
    description:
      "Ön dişlere yapıştırılan ince porselen yapraklarla estetik gülüş tasarımı.",
  },
  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    specialtySlug: "dis-hekimligi",
    description:
      "Mat veya sararmış dişlerin profesyonel uygulama ile beyazlatılması.",
  },

  // ── Göz ───────────────────────────────────────────────────────────────
  {
    slug: "lasik",
    name: "LASIK Göz Ameliyatı",
    specialtySlug: "goz-hastaliklari",
    description:
      "Miyop, hipermetrop ve astigmat gibi kırma kusurlarının lazer ile düzeltildiği göz ameliyatı.",
  },
  {
    slug: "smile",
    name: "SMILE Göz Lazer",
    specialtySlug: "goz-hastaliklari",
    description:
      "Femtosaniye lazerle yapılan, daha küçük kesi ile gerçekleştirilen modern refraktif cerrahi yöntemi.",
  },

  // ── Kadın doğum & üreme ────────────────────────────────────────────────
  {
    slug: "tup-bebek",
    name: "Tüp Bebek (IVF)",
    specialtySlug: "kadin-hastaliklari-ve-dogum",
    description:
      "Yardımcı üreme tekniği ile yumurta ve spermin laboratuvarda döllenmesi ve embriyonun rahime nakli.",
  },

  // ── Genel sağlık ──────────────────────────────────────────────────────
  {
    slug: "beslenme-danismanligi",
    name: "Beslenme Danışmanlığı",
    specialtySlug: "diyetisyen",
    description:
      "Diyetisyen tarafından kişiye özel beslenme planlaması ve takibi.",
  },
  {
    slug: "psikolojik-destek",
    name: "Psikolojik Destek",
    specialtySlug: "psikoloji",
    description:
      "Psikolog veya psikiyatrist tarafından bireysel terapi süreci.",
  },
];

export function findProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
