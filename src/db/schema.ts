/**
 * turkadoctor.com — veritabanı şeması
 * Drizzle ORM + PostgreSQL.
 *
 * Tasarım notları:
 * - Listeleme dizini olduğu için randevu/slot/fiyat tabloları YOK.
 * - Yorumlar üç katmanda: reviews_external_raw (ham), review_signals (özet meta), manual_reviews (kendi).
 * - Doktor/klinik master veri Sağlık Bakanlığı + TTB açık verisinden beslenir; manuel claim akışı `profile_claims`.
 */

import {
  pgTable,
  bigserial,
  varchar,
  text,
  boolean,
  integer,
  timestamp,
  jsonb,
  pgEnum,
  uniqueIndex,
  index,
  bigint,
  smallint,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const reviewSource = pgEnum("review_source", [
  "google_places",
  "eksi",
  "trustpilot",
  "whatclinic",
  "doktortakvimi",
  "doktorsitesi",
]);

export const entityType = pgEnum("entity_type", ["doctor", "clinic"]);

export const clinicType = pgEnum("clinic_type", [
  "muayenehane",
  "poliklinik",
  "ozel_hastane",
  "devlet_hastanesi",
  "universite_hastanesi",
  "tip_merkezi",
  "agdc", // Ağız ve diş sağlığı merkezi
  "gunubirlik_cerrahi",
]);

export const claimStatus = pgEnum("claim_status", [
  "pending",
  "verified",
  "rejected",
]);

export const moderationStatus = pgEnum("moderation_status", [
  "pending",
  "approved",
  "rejected",
  "removed",
]);

// ---------------------------------------------------------------------------
// Coğrafya
// ---------------------------------------------------------------------------

export const cities = pgTable("cities", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  slug: varchar("slug", { length: 64 }).notNull().unique(),
  name: varchar("name", { length: 64 }).notNull(),
  plateCode: smallint("plate_code"),
  nutsCode: varchar("nuts_code", { length: 8 }),
  // PostGIS POINT — Day-1 lat/lng kolonları, PostGIS extension açıldığında geometry'ye geçilebilir
  lat: integer("lat"), // 1e7 ile çarpılmış (örn: 41.0082 → 410082000)
  lng: integer("lng"),
});

export const districts = pgTable(
  "districts",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    cityId: bigint("city_id", { mode: "number" })
      .notNull()
      .references(() => cities.id, { onDelete: "cascade" }),
    slug: varchar("slug", { length: 64 }).notNull(),
    name: varchar("name", { length: 64 }).notNull(),
    lat: integer("lat"),
    lng: integer("lng"),
  },
  (t) => [uniqueIndex("districts_city_slug_uq").on(t.cityId, t.slug)],
);

// ---------------------------------------------------------------------------
// Tıbbi taksonomi
// ---------------------------------------------------------------------------

export const specialties = pgTable("specialties", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  parentId: bigint("parent_id", { mode: "number" }),
  ttbKodu: varchar("ttb_kodu", { length: 16 }),
  descriptionMd: text("description_md"),
  // Faz 2 i18n: specialty_translations ayrı tablo.
});

export const procedures = pgTable("procedures", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  name: varchar("name", { length: 160 }).notNull(),
  specialtyId: bigint("specialty_id", { mode: "number" }).references(
    () => specialties.id,
    { onDelete: "set null" },
  ),
  icd10: varchar("icd10", { length: 16 }),
  snomed: varchar("snomed", { length: 16 }),
  descriptionMd: text("description_md"),
  // Tedavi sayfası rehberi `articles` ile bağlanır.
});

// ---------------------------------------------------------------------------
// Kurumlar
// ---------------------------------------------------------------------------

export const hospitals = pgTable(
  "hospitals",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    slug: varchar("slug", { length: 140 }).notNull().unique(),
    name: varchar("name", { length: 200 }).notNull(),
    type: clinicType("type").notNull().default("ozel_hastane"),
    cityId: bigint("city_id", { mode: "number" }).references(() => cities.id),
    districtId: bigint("district_id", { mode: "number" }).references(
      () => districts.id,
    ),
    address: text("address"),
    lat: integer("lat"),
    lng: integer("lng"),
    phone: varchar("phone", { length: 32 }),
    website: varchar("website", { length: 255 }),
    jciCert: boolean("jci_cert").notNull().default(false),
    temosCert: boolean("temos_cert").notNull().default(false),
    isoCerts: text("iso_certs").array(),
    sbRuhsatNo: varchar("sb_ruhsat_no", { length: 64 }),
    ruhsatVerifiedAt: timestamp("ruhsat_verified_at", { withTimezone: true }),
    bedCount: integer("bed_count"),
    operatingRoomCount: integer("operating_room_count"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("hospitals_city_idx").on(t.cityId),
    index("hospitals_district_idx").on(t.districtId),
  ],
);

export const clinics = pgTable(
  "clinics",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    slug: varchar("slug", { length: 140 }).notNull().unique(),
    name: varchar("name", { length: 200 }).notNull(),
    type: clinicType("type").notNull().default("muayenehane"),
    cityId: bigint("city_id", { mode: "number" }).references(() => cities.id),
    districtId: bigint("district_id", { mode: "number" }).references(
      () => districts.id,
    ),
    hospitalId: bigint("hospital_id", { mode: "number" }).references(
      () => hospitals.id,
      { onDelete: "set null" },
    ),
    address: text("address"),
    lat: integer("lat"),
    lng: integer("lng"),
    phone: varchar("phone", { length: 32 }),
    website: varchar("website", { length: 255 }),
    sbRuhsatNo: varchar("sb_ruhsat_no", { length: 64 }),
    ruhsatVerifiedAt: timestamp("ruhsat_verified_at", { withTimezone: true }),
    ushasNo: varchar("ushas_no", { length: 64 }),
    logoUrl: varchar("logo_url", { length: 500 }),
    photos: jsonb("photos"), // [{ url, alt, sort }]
    openingHours: jsonb("opening_hours"),
    bio: text("bio"),
    claimedAt: timestamp("claimed_at", { withTimezone: true }),
    claimedEmail: varchar("claimed_email", { length: 255 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("clinics_city_idx").on(t.cityId),
    index("clinics_district_idx").on(t.districtId),
  ],
);

// ---------------------------------------------------------------------------
// Doktorlar
// ---------------------------------------------------------------------------

export const doctors = pgTable(
  "doctors",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    slug: varchar("slug", { length: 160 }).notNull().unique(),
    fullName: varchar("full_name", { length: 160 }).notNull(),
    titlePrefix: varchar("title_prefix", { length: 32 }).default("Dr."), // Dr. / Prof. Dr. / Doç. Dr. / Op. Dr. / Uzm. Dr.
    ttbSicilNo: varchar("ttb_sicil_no", { length: 32 }),
    ttbVerifiedAt: timestamp("ttb_verified_at", { withTimezone: true }),
    gender: varchar("gender", { length: 16 }),
    photoUrl: varchar("photo_url", { length: 500 }),
    deneyimYili: integer("deneyim_yili"),
    bioMd: text("bio_md"),
    educations: jsonb("educations"), // [{ school, degree, year, country }]
    memberships: text("memberships").array(), // ["TTB İstanbul", "EADV"]
    publications: jsonb("publications"), // [{ title, journal, year, url }]
    awards: jsonb("awards"),
    claimedAt: timestamp("claimed_at", { withTimezone: true }),
    claimedEmail: varchar("claimed_email", { length: 255 }),
    reklamUyumlu: boolean("reklam_uyumlu").notNull().default(true),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    uniqueIndex("doctors_ttb_uq").on(t.ttbSicilNo),
    index("doctors_full_name_idx").on(t.fullName),
  ],
);

export const doctorSpecialties = pgTable(
  "doctor_specialties",
  {
    doctorId: bigint("doctor_id", { mode: "number" })
      .notNull()
      .references(() => doctors.id, { onDelete: "cascade" }),
    specialtyId: bigint("specialty_id", { mode: "number" })
      .notNull()
      .references(() => specialties.id, { onDelete: "cascade" }),
    isPrimary: boolean("is_primary").notNull().default(false),
  },
  (t) => [
    uniqueIndex("doctor_specialties_pk").on(t.doctorId, t.specialtyId),
  ],
);

export const doctorClinic = pgTable(
  "doctor_clinic",
  {
    doctorId: bigint("doctor_id", { mode: "number" })
      .notNull()
      .references(() => doctors.id, { onDelete: "cascade" }),
    clinicId: bigint("clinic_id", { mode: "number" })
      .notNull()
      .references(() => clinics.id, { onDelete: "cascade" }),
    role: varchar("role", { length: 64 }),
    startYear: smallint("start_year"),
    endYear: smallint("end_year"),
    isPrimary: boolean("is_primary").notNull().default(false),
  },
  (t) => [uniqueIndex("doctor_clinic_pk").on(t.doctorId, t.clinicId)],
);

export const doctorProcedures = pgTable(
  "doctor_procedures",
  {
    doctorId: bigint("doctor_id", { mode: "number" })
      .notNull()
      .references(() => doctors.id, { onDelete: "cascade" }),
    procedureId: bigint("procedure_id", { mode: "number" })
      .notNull()
      .references(() => procedures.id, { onDelete: "cascade" }),
  },
  (t) => [uniqueIndex("doctor_procedures_pk").on(t.doctorId, t.procedureId)],
);

export const clinicProcedures = pgTable(
  "clinic_procedures",
  {
    clinicId: bigint("clinic_id", { mode: "number" })
      .notNull()
      .references(() => clinics.id, { onDelete: "cascade" }),
    procedureId: bigint("procedure_id", { mode: "number" })
      .notNull()
      .references(() => procedures.id, { onDelete: "cascade" }),
  },
  (t) => [uniqueIndex("clinic_procedures_pk").on(t.clinicId, t.procedureId)],
);

// ---------------------------------------------------------------------------
// Yorum altyapısı
// ---------------------------------------------------------------------------

/**
 * Ham scraped/API verisi. ToS gereği 30 günde purge edilir (cron).
 * Yalnız iç projeksiyona kaynak; kullanıcıya direkt sergilenmez.
 */
export const reviewsExternalRaw = pgTable(
  "reviews_external_raw",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    targetType: entityType("target_type").notNull(),
    targetId: bigint("target_id", { mode: "number" }).notNull(),
    source: reviewSource("source").notNull(),
    raw: jsonb("raw").notNull(),
    attributionUrl: varchar("attribution_url", { length: 500 }),
    fetchedAt: timestamp("fetched_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    purgeAt: timestamp("purge_at", { withTimezone: true }),
  },
  (t) => [
    index("reviews_external_raw_target_idx").on(t.targetType, t.targetId),
    index("reviews_external_raw_purge_idx").on(t.purgeAt),
  ],
);

/**
 * Her kaynak için tek satır özet meta (rating, sayım, URL).
 * Profil sayfasında "diğer kaynaklar" kartında gösterilen veri.
 */
export const reviewSignals = pgTable(
  "review_signals",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    targetType: entityType("target_type").notNull(),
    targetId: bigint("target_id", { mode: "number" }).notNull(),
    source: reviewSource("source").notNull(),
    ratingAvg: integer("rating_avg"), // 0-50 (5.0 * 10)
    reviewCount: integer("review_count"),
    extraCount: integer("extra_count"), // örn. Ekşi entry sayısı
    sourceUrl: varchar("source_url", { length: 500 }),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    visible: boolean("visible").notNull().default(true),
    // Doktortakvimi/Doktorsitesi: visible=false (yalnız iç ranking sinyali)
  },
  (t) => [
    uniqueIndex("review_signals_uq").on(t.targetType, t.targetId, t.source),
    index("review_signals_target_idx").on(t.targetType, t.targetId),
  ],
);

/**
 * Kendi platform yorumları. Magic link doğrulamalı, doktor cevap hakkı,
 * KVKK uyar-kaldır akışı, 24 saat SLA.
 * `aggregateRating` JSON-LD yalnız bunlardan üretilir.
 */
export const manualReviews = pgTable(
  "manual_reviews",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    targetType: entityType("target_type").notNull(),
    targetId: bigint("target_id", { mode: "number" }).notNull(),
    rating: smallint("rating").notNull(), // 1-5
    title: varchar("title", { length: 140 }),
    body: text("body").notNull(),
    authorHandle: varchar("author_handle", { length: 64 }),
    authorEmailHash: varchar("author_email_hash", { length: 128 }),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    moderationStatus: moderationStatus("moderation_status")
      .notNull()
      .default("pending"),
    doctorResponse: text("doctor_response"),
    doctorRespondedAt: timestamp("doctor_responded_at", { withTimezone: true }),
    flaggedCount: integer("flagged_count").notNull().default(0),
    takedownNote: text("takedown_note"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (t) => [
    index("manual_reviews_target_idx").on(t.targetType, t.targetId),
    index("manual_reviews_status_idx").on(t.moderationStatus),
  ],
);

// ---------------------------------------------------------------------------
// E-E-A-T içerik
// ---------------------------------------------------------------------------

export const contentAuthors = pgTable("content_authors", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  titleLine: varchar("title_line", { length: 200 }), // "Dermatoloji Uzmanı, MD"
  photoUrl: varchar("photo_url", { length: 500 }),
  bioMd: text("bio_md"),
  credentials: jsonb("credentials"),
  linkedinUrl: varchar("linkedin_url", { length: 255 }),
  pubmedUrl: varchar("pubmed_url", { length: 255 }),
  isMedicalReviewer: boolean("is_medical_reviewer").notNull().default(false),
  ttbSicilNo: varchar("ttb_sicil_no", { length: 32 }),
});

export const articles = pgTable(
  "articles",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    slug: varchar("slug", { length: 160 }).notNull().unique(),
    title: varchar("title", { length: 220 }).notNull(),
    excerpt: text("excerpt"),
    bodyMd: text("body_md").notNull(),
    heroImageUrl: varchar("hero_image_url", { length: 500 }),
    authorId: bigint("author_id", { mode: "number" }).references(
      () => contentAuthors.id,
    ),
    medicalReviewerId: bigint("medical_reviewer_id", {
      mode: "number",
    }).references(() => contentAuthors.id),
    publishedAt: timestamp("published_at", { withTimezone: true }),
    lastReviewedAt: timestamp("last_reviewed_at", { withTimezone: true }),
    nextReviewDueAt: timestamp("next_review_due_at", { withTimezone: true }),
    targetSpecialtyIds: bigint("target_specialty_ids", { mode: "number" })
      .array()
      .default([]),
    targetProcedureIds: bigint("target_procedure_ids", { mode: "number" })
      .array()
      .default([]),
    targetCityIds: bigint("target_city_ids", { mode: "number" })
      .array()
      .default([]),
    sources: jsonb("sources"), // [{ title, url, publisher }]
  },
  (t) => [index("articles_published_idx").on(t.publishedAt)],
);

// ---------------------------------------------------------------------------
// Sahiplenme / düzeltme akışları (E-E-A-T için zorunlu)
// ---------------------------------------------------------------------------

export const profileClaims = pgTable("profile_claims", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  targetType: entityType("target_type").notNull(),
  targetId: bigint("target_id", { mode: "number" }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  verificationToken: varchar("verification_token", { length: 128 }).notNull(),
  verifiedAt: timestamp("verified_at", { withTimezone: true }),
  status: claimStatus("status").notNull().default("pending"),
  note: text("note"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const editRequests = pgTable("edit_requests", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  targetType: entityType("target_type").notNull(),
  targetId: bigint("target_id", { mode: "number" }).notNull(),
  field: varchar("field", { length: 64 }).notNull(),
  proposedValue: text("proposed_value"),
  submitterEmail: varchar("submitter_email", { length: 255 }).notNull(),
  status: claimStatus("status").notNull().default("pending"),
  reviewerNote: text("reviewer_note"),
  decidedAt: timestamp("decided_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ---------------------------------------------------------------------------
// Denetim
// ---------------------------------------------------------------------------

export const schemaAuditLog = pgTable("schema_audit_log", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  tableName: varchar("table_name", { length: 80 }).notNull(),
  rowId: bigint("row_id", { mode: "number" }).notNull(),
  change: jsonb("change").notNull(),
  actor: varchar("actor", { length: 128 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
