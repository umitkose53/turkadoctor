/**
 * Listeleme dizini için domain tipler.
 * DB'den gelen veriler aynı şekle eşlenir (Drizzle row → bu tipler).
 */

export type City = {
  slug: string;
  name: string;
  plateCode: number;
};

export type District = {
  slug: string;
  name: string;
  citySlug: string;
};

export type Specialty = {
  slug: string;
  name: string;
  parentSlug?: string;
  ttbKodu?: string;
  description?: string;
};

export type Procedure = {
  slug: string;
  name: string;
  specialtySlug: string;
  description?: string;
};

export type ReviewSignalSource =
  | "google_places"
  | "eksi"
  | "trustpilot"
  | "whatclinic"
  | "doktortakvimi"
  | "doktorsitesi";

export type ReviewSignal = {
  source: ReviewSignalSource;
  ratingAvg?: number; // 0-5
  reviewCount?: number;
  extraCount?: number;
  sourceUrl?: string;
  visible: boolean;
};

export type ClinicSummary = {
  slug: string;
  name: string;
  type:
    | "muayenehane"
    | "poliklinik"
    | "ozel_hastane"
    | "devlet_hastanesi"
    | "universite_hastanesi"
    | "tip_merkezi"
    | "agdc";
  citySlug: string;
  districtSlug?: string;
  address?: string;
  phone?: string;
  logoUrl?: string;
  jciCert?: boolean;
  isoCerts?: string[];
  sbRuhsatNo?: string;
  ruhsatVerifiedAt?: string;
  specialties: string[];
  procedures: string[];
  signals: ReviewSignal[];
};

export type DoctorSummary = {
  slug: string;
  fullName: string;
  titlePrefix?: string; // Dr., Prof. Dr., Op. Dr., Uzm. Dr.
  ttbSicilNo?: string;
  ttbVerifiedAt?: string;
  deneyimYili?: number;
  photoUrl?: string;
  specialtySlugs: string[]; // birincil ilk
  procedureSlugs: string[];
  clinicSlugs: string[]; // birincil ilk
  citySlug: string;
  districtSlug?: string;
  educations?: { school: string; degree: string; year?: number }[];
  memberships?: string[];
  signals: ReviewSignal[];
};
