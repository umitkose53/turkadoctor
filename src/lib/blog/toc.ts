/**
 * Markdown body'sinden H2 başlıklarını çıkarır, slug üretir.
 * Detay sayfasında "İçindekiler" navigasyonu için.
 */

export type TocItem = {
  id: string;
  text: string;
};

function slugify(s: string): string {
  return s
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ı/g, "i").replace(/ş/g, "s").replace(/ğ/g, "g")
    .replace(/ç/g, "c").replace(/ö/g, "o").replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** H2 başlıklarını topla (Markdown gövdesinden). */
export function extractToc(markdown: string): TocItem[] {
  const re = /^##\s+(.+?)\s*$/gm;
  const items: TocItem[] = [];
  let m;
  while ((m = re.exec(markdown))) {
    const text = m[1].trim();
    items.push({ id: slugify(text), text });
  }
  return items;
}

/** Okuma süresini tahmin et (kelime/dakika oranı 200). */
export function estimateReadingMinutes(markdown: string): number {
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / 200));
}
