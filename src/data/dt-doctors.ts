/**
 * Doctortakvimi havuzu (~160K hekim).
 *
 * **Veri kaynağı:** doktortakvimi.com herkese açık sitemap'i — sadece doktor metadata
 * (ad-soyad, branş, şehir, ilçe). Yorum/içerik verisi alınmamıştır (Docplanner sui
 * generis veritabanı hakkı korumalı kısım). Doktor metadata kamuya açık ve sağlık
 * çalışanları için zaten TTB sicili üzerinden alenileştirilmiş bilgidir.
 *
 * Büyük havuz olduğu için (~29 MB JSON) lazy yüklenir ve slug→record indekslenir.
 * `/doktor/[slug]` route'u önce curated hospital-direct doktorlara bakar, yoksa
 * buradan dynamic SSG ile render eder.
 */

import type { DoctorSummary } from "./types";

let _index: Map<string, DoctorSummary> | null = null;
let _byCity: Map<string, DoctorSummary[]> | null = null;
let _bySpecialty: Map<string, DoctorSummary[]> | null = null;
let _list: DoctorSummary[] | null = null;

function ensureLoaded() {
  if (_index) return;
  // ESM JSON import (Node ile uyumlu, build-time'da bundle'lanır).
  // Top-level static import yerine require çünkü sadece data route'larında yüklensin.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("./doctors-dt.json") as DoctorSummary[];
  _list = data;
  _index = new Map();
  _byCity = new Map();
  _bySpecialty = new Map();
  for (const d of data) {
    _index.set(d.slug, d);
    const c = _byCity.get(d.citySlug);
    if (c) c.push(d);
    else _byCity.set(d.citySlug, [d]);
    for (const s of d.specialtySlugs) {
      const arr = _bySpecialty.get(s);
      if (arr) arr.push(d);
      else _bySpecialty.set(s, [d]);
    }
  }
}

export function findDtDoctor(slug: string): DoctorSummary | undefined {
  ensureLoaded();
  return _index!.get(slug);
}

export function dtDoctorsByCity(citySlug: string): DoctorSummary[] {
  ensureLoaded();
  return _byCity!.get(citySlug) ?? [];
}

export function dtDoctorsBySpecialty(specialtySlug: string): DoctorSummary[] {
  ensureLoaded();
  return _bySpecialty!.get(specialtySlug) ?? [];
}

export function dtDoctorsByCityAndSpecialty(
  citySlug: string,
  specialtySlug: string,
): DoctorSummary[] {
  ensureLoaded();
  return (_byCity!.get(citySlug) ?? []).filter((d) =>
    d.specialtySlugs.includes(specialtySlug),
  );
}

export function allDtDoctorSlugs(): string[] {
  ensureLoaded();
  return [..._index!.keys()];
}

export function dtDoctorCount(): number {
  ensureLoaded();
  return _list!.length;
}
