import type { City } from "./types";

/**
 * Day-1 için 12 büyük şehir. Master liste TTB / TÜİK verisinden gelecek.
 */
export const cities: City[] = [
  { slug: "istanbul", name: "İstanbul", plateCode: 34 },
  { slug: "ankara", name: "Ankara", plateCode: 6 },
  { slug: "izmir", name: "İzmir", plateCode: 35 },
  { slug: "antalya", name: "Antalya", plateCode: 7 },
  { slug: "bursa", name: "Bursa", plateCode: 16 },
  { slug: "adana", name: "Adana", plateCode: 1 },
  { slug: "konya", name: "Konya", plateCode: 42 },
  { slug: "gaziantep", name: "Gaziantep", plateCode: 27 },
  { slug: "kayseri", name: "Kayseri", plateCode: 38 },
  { slug: "mersin", name: "Mersin", plateCode: 33 },
  { slug: "eskisehir", name: "Eskişehir", plateCode: 26 },
  { slug: "samsun", name: "Samsun", plateCode: 55 },
];

export function findCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
