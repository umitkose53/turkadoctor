/**
 * Doctortakvimi havuzu (~160K hekim).
 *
 * Veri kaynağı: doktortakvimi.com herkese açık sitemap'i — sadece metadata
 * (ad, branş, şehir, ilçe). Yorum/içerik alınmamıştır.
 *
 * Vercel function size limit (50MB) nedeniyle JSON shard'ları **public/** altında
 * tutuluyor. Build sırasında veya runtime'da fs.readFileSync ile lazy okunur.
 * Bu sayede bundle boyutu küçük kalır, route render'larda sadece istenen
 * şehrin shard'ı yüklenir.
 */

import fs from "node:fs";
import path from "node:path";
import type { DoctorSummary } from "./types";

const SHARDS_DIR = path.join(process.cwd(), "public", "dt-shards");

type IndexFile = { cities: string[]; bigCities: string[] };

let _index: IndexFile | null = null;
const _cityCache = new Map<string, DoctorSummary[]>();
const _subShardCache = new Map<string, DoctorSummary[]>();
let _bySlug: Map<string, DoctorSummary> | null = null;
let _allCount: number | null = null;

function loadIndex(): IndexFile {
  if (_index) return _index;
  try {
    _index = JSON.parse(fs.readFileSync(path.join(SHARDS_DIR, "_index.json"), "utf8"));
    return _index!;
  } catch {
    _index = { cities: [], bigCities: [] };
    return _index;
  }
}

function loadSubShard(city: string, specialty: string): DoctorSummary[] {
  const key = `${city}/${specialty}`;
  const cached = _subShardCache.get(key);
  if (cached) return cached;
  try {
    const fp = path.join(SHARDS_DIR, city, `${specialty}.json`);
    const data = JSON.parse(fs.readFileSync(fp, "utf8")) as DoctorSummary[];
    _subShardCache.set(key, data);
    return data;
  } catch {
    _subShardCache.set(key, []);
    return [];
  }
}

function loadCityAll(city: string): DoctorSummary[] {
  const cached = _cityCache.get(city);
  if (cached) return cached;
  const idx = loadIndex();
  const isBig = idx.bigCities.includes(city);

  if (!isBig) {
    try {
      const data = JSON.parse(
        fs.readFileSync(path.join(SHARDS_DIR, `${city}.json`), "utf8"),
      ) as DoctorSummary[];
      _cityCache.set(city, data);
      return data;
    } catch {
      _cityCache.set(city, []);
      return [];
    }
  }
  // Big city: tüm alt shard'ları birleştir (slug dedupe)
  const cityDir = path.join(SHARDS_DIR, city);
  let entries: string[] = [];
  try {
    entries = fs.readdirSync(cityDir);
  } catch {
    /* empty */
  }
  const out: DoctorSummary[] = [];
  const seen = new Set<string>();
  for (const f of entries) {
    if (!f.endsWith(".json")) continue;
    const sp = f.slice(0, -5);
    for (const d of loadSubShard(city, sp)) {
      if (seen.has(d.slug)) continue;
      seen.add(d.slug);
      out.push(d);
    }
  }
  _cityCache.set(city, out);
  return out;
}

function loadAll(): DoctorSummary[] {
  const idx = loadIndex();
  const out: DoctorSummary[] = [];
  for (const c of idx.cities) out.push(...loadCityAll(c));
  return out;
}

export function findDtDoctor(slug: string): DoctorSummary | undefined {
  if (!_bySlug) {
    _bySlug = new Map();
    for (const d of loadAll()) _bySlug.set(d.slug, d);
  }
  return _bySlug.get(slug);
}

export function dtDoctorsByCity(citySlug: string): DoctorSummary[] {
  return loadCityAll(citySlug);
}

export function dtDoctorsBySpecialty(specialtySlug: string): DoctorSummary[] {
  const idx = loadIndex();
  const out: DoctorSummary[] = [];
  for (const c of idx.cities) {
    if (idx.bigCities.includes(c)) {
      out.push(...loadSubShard(c, specialtySlug));
    } else {
      for (const d of loadCityAll(c)) {
        if (d.specialtySlugs.includes(specialtySlug)) out.push(d);
      }
    }
  }
  return out;
}

export function dtDoctorsByCityAndSpecialty(
  citySlug: string,
  specialtySlug: string,
): DoctorSummary[] {
  const idx = loadIndex();
  if (idx.bigCities.includes(citySlug)) {
    return loadSubShard(citySlug, specialtySlug);
  }
  return loadCityAll(citySlug).filter((d) =>
    d.specialtySlugs.includes(specialtySlug),
  );
}

export function allDtDoctorSlugs(): string[] {
  if (_bySlug) return [..._bySlug.keys()];
  _bySlug = new Map();
  for (const d of loadAll()) _bySlug.set(d.slug, d);
  return [..._bySlug.keys()];
}

export function dtDoctorCount(): number {
  if (_allCount !== null) return _allCount;
  const idx = loadIndex();
  let n = 0;
  for (const c of idx.cities) n += loadCityAll(c).length;
  _allCount = n;
  return n;
}
