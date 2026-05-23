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

export type ProcedureMethod = {
  name: string;
  description: string;
};

export type ProcedureRecoveryStage = {
  period: string; // "İlk 24 saat", "1. hafta", "1-3. ay" gibi
  description: string;
};

export type ProcedureFaq = {
  question: string;
  answer: string; // düz metin, paragraflar `\n\n` ile
};

export type ProcedureSource = {
  title: string;
  publisher: string;
  url?: string;
};

export type Procedure = {
  slug: string;
  name: string;
  specialtySlug: string;
  /** Liste kartlarında ve özet alanlarda kullanılan 1-2 cümle. */
  description?: string;

  // --- Detaylı içerik (opsiyonel; varsa /tedaviler/[tedavi] sayfasında render edilir)
  /** Sayfanın hero altı 2-3 cümlelik giriş. */
  intro?: string;
  /** "Saç ekimi nedir?" altı 2-4 paragraf. */
  whatIs?: string;
  /** FUE, DHI, Sapphire gibi alt teknikler. */
  methods?: ProcedureMethod[];
  /** Hangi durumlarda uygulanır / kimler aday olabilir. */
  candidates?: string[];
  /** Kimler aday olmayabilir / dikkat edilmesi gerekenler. */
  notCandidates?: string[];
  /** Operasyon öncesi süreç. */
  preparation?: string[];
  /** Operasyon süreci özet. */
  process?: string[];
  /** İyileşme dönemleri. */
  recovery?: ProcedureRecoveryStage[];
  /** Risk ve komplikasyonlar (mevzuat: garantili sonuç yok demek için ŞART). */
  risks?: string[];
  /** Türkiye'de bu tedaviyi seçerken nelere bakılır. */
  selectionCriteria?: string[];
  /** Sık sorulan sorular — FAQPage JSON-LD'e dönüşür. */
  faq?: ProcedureFaq[];
  /** İlgili tedaviler — slug ile. */
  relatedProcedureSlugs?: string[];
  /** Kaynaklar — Article + sources_jsonb için. */
  sources?: ProcedureSource[];

  /** Tıbbi inceleyici bilgisi. */
  medicalReviewerName?: string;
  /** Son güncelleme tarihi (ISO). */
  lastReviewedAt?: string;
  /** Bir sonraki gözden geçirme tarihi (ISO). */
  nextReviewDueAt?: string;
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
    | "agdc"
    | "gunubirlik_cerrahi";
  citySlug: string;
  districtSlug?: string;
  address?: string;
  phone?: string;
  website?: string;
  logoUrl?: string;
  jciCert?: boolean;
  temosCert?: boolean;
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
