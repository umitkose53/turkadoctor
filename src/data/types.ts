/**
 * Listeleme dizini için domain tipler.
 * DB'den gelen veriler aynı şekle eşlenir (Drizzle row → bu tipler).
 */

export type City = {
  slug: string;
  name: string;
  plateCode: number;

  /** Şehir hub sayfasında üstte gösterilen kısa giriş. */
  intro?: string;
  /** Şehirdeki sağlık altyapısı hakkında uzun-form içerik. */
  fullContent?: string;
  /** Bu şehir için medical tourism / yabancı hasta odaklı not (varsa). */
  medicalTourismNote?: string;
  /** Şehirde öne çıkan branş slug'ları. */
  popularSpecialtySlugs?: string[];

  medicalReviewerName?: string;
  lastReviewedAt?: string;
  nextReviewDueAt?: string;
};

export type District = {
  slug: string;
  name: string;
  citySlug: string;
};

/**
 * Blog yazısı (Article / MedicalWebPage).
 * Article schema'ya direkt eşlenir; FAQPage ek olarak üretilebilir.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  bodyMd: string; // Markdown
  heroImageUrl?: string;
  heroImageAlt?: string;
  authorName: string;
  medicalReviewerName?: string;
  publishedAt: string; // ISO
  lastReviewedAt?: string;
  nextReviewDueAt?: string;
  relatedProcedureSlugs?: string[];
  relatedSpecialtySlugs?: string[];
  sources?: ProcedureSource[];
};

export type Specialty = {
  slug: string;
  name: string;
  parentSlug?: string;
  ttbKodu?: string;
  description?: string;

  // --- Detaylı içerik (opsiyonel)
  intro?: string;
  fullContent?: string; // paragraflar `\n\n` ayrılır
  popularProcedureSlugs?: string[];
  faq?: ProcedureFaq[];
  sources?: ProcedureSource[];

  medicalReviewerName?: string;
  lastReviewedAt?: string;
  nextReviewDueAt?: string;
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

export type DoctorPublication = {
  title: string;
  url?: string;
  year?: number;
  publisher?: string;
};

export type DoctorSocialLinks = {
  instagram?: string;
  youtube?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
};

export type DoctorCareerEntry = {
  institution: string;
  role?: string;
  startYear?: number;
  endYear?: number;
  /** Halen sürüyorsa true */
  current?: boolean;
  /** "Beylikdüzü, İstanbul" gibi serbest metin lokasyon */
  location?: string;
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

  // --- Detaylı profil alanları (opsiyonel; varsa /doktor/[slug] sayfasında render edilir)
  /** Hekimin kendi resmi web sitesi (varsa). */
  website?: string;
  /** Sosyal medya linkleri (URL veya handle). */
  socialLinks?: DoctorSocialLinks;
  /** Kariyer / çalıştığı kurumlar — tarih aralıklarıyla. */
  career?: DoctorCareerEntry[];
  /** Akademik yayınlar (PubMed/DergiPark/Türkiye Klinikleri vb.). */
  publications?: DoctorPublication[];
  /** Tıbbi inceleme / editöryel doğrulama tarihi (ISO). */
  lastVerifiedAt?: string;
};

