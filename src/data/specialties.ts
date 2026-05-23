import type { Specialty } from "./types";

/**
 * TTB ana branş listesi (kısaltılmış). Day-1 popüler 20 branş.
 */
export const specialties: Specialty[] = [
  { slug: "dermatoloji", name: "Dermatoloji" },
  { slug: "estetik-cerrahi", name: "Estetik, Plastik ve Rekonstrüktif Cerrahi" },
  { slug: "sac-ekimi", name: "Saç Ekimi" }, // Genelde plastik cerrahi/dermatoloji altı; arama için ayrı dal
  { slug: "dis-hekimligi", name: "Diş Hekimliği" },
  { slug: "goz-hastaliklari", name: "Göz Hastalıkları" },
  { slug: "kadin-hastaliklari-ve-dogum", name: "Kadın Hastalıkları ve Doğum" },
  { slug: "kardiyoloji", name: "Kardiyoloji" },
  { slug: "ic-hastaliklari", name: "İç Hastalıkları (Dahiliye)" },
  { slug: "noroloji", name: "Nöroloji" },
  { slug: "psikiyatri", name: "Psikiyatri" },
  { slug: "psikoloji", name: "Psikoloji" },
  { slug: "diyetisyen", name: "Diyetisyen ve Beslenme" },
  { slug: "uroloji", name: "Üroloji" },
  { slug: "ortopedi-ve-travmatoloji", name: "Ortopedi ve Travmatoloji" },
  { slug: "kbb", name: "Kulak Burun Boğaz" },
  { slug: "cocuk-hastaliklari", name: "Çocuk Hastalıkları (Pediatri)" },
  { slug: "fizik-tedavi", name: "Fizik Tedavi ve Rehabilitasyon" },
  { slug: "genel-cerrahi", name: "Genel Cerrahi" },
  { slug: "endokrinoloji", name: "Endokrinoloji" },
  { slug: "gastroenteroloji", name: "Gastroenteroloji" },
];

export function findSpecialty(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
