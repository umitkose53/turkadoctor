import type { Procedure } from "./types";

/**
 * Tedavi sayfaları için popüler prosedürler. Medical tourism dikeyleri öncelikli.
 */
export const procedures: Procedure[] = [
  {
    slug: "sac-ekimi",
    name: "Saç Ekimi",
    specialtySlug: "sac-ekimi",
    description:
      "Saç dökülmesinin tedavisinde uygulanan, sağlıklı saç köklerinin dökülen bölgeye nakledildiği cerrahi işlem.",
  },
  {
    slug: "dis-implanti",
    name: "Diş İmplantı",
    specialtySlug: "dis-hekimligi",
    description:
      "Eksik dişlerin yerine titanyum vida ile yapay diş kökü yerleştirilen tedavi yöntemi.",
  },
  {
    slug: "lasik",
    name: "LASIK Göz Ameliyatı",
    specialtySlug: "goz-hastaliklari",
    description:
      "Miyop, hipermetrop ve astigmat gibi kırma kusurlarının lazer ile düzeltildiği göz ameliyatı.",
  },
  {
    slug: "rinoplasti",
    name: "Rinoplasti (Burun Estetiği)",
    specialtySlug: "estetik-cerrahi",
    description:
      "Burunun şekil veya işlevsel sorunlarının cerrahi olarak düzeltildiği estetik operasyon.",
  },
  {
    slug: "botoks",
    name: "Botoks (Botulinum Toksin Uygulaması)",
    specialtySlug: "dermatoloji",
    description:
      "Yüz mimik kaslarının geçici olarak gevşetilmesiyle kırışıklıkların azaltıldığı dermatolojik uygulama.",
  },
  {
    slug: "akne-tedavisi",
    name: "Akne Tedavisi",
    specialtySlug: "dermatoloji",
    description:
      "Sivilcelerin tıbbi takip ve uygulamalarla yönetilmesi.",
  },
  {
    slug: "tup-bebek",
    name: "Tüp Bebek (IVF)",
    specialtySlug: "kadin-hastaliklari-ve-dogum",
    description:
      "Yardımcı üreme tekniği ile yumurta ve spermin laboratuvarda döllenmesi ve embriyonun rahime nakli.",
  },
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
  {
    slug: "all-on-4",
    name: "All-on-4 Diş Tedavisi",
    specialtySlug: "dis-hekimligi",
    description:
      "Tüm dişlerin 4 implant üzerine sabitlendiği ileri implant tedavisi.",
  },
];

export function findProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
