/**
 * JSON-LD üretimi.
 *
 * Önemli kurallar:
 * - aggregateRating Physician/MedicalClinic ÜZERİNE konmaz (self-serving snippet riski).
 *   Bunun yerine MedicalProcedure üzerine konabilir.
 * - ItemList her zaman alfabetik — itemListOrder açıkça bildirilir.
 * - inLanguage: "tr-TR" Day-1.
 *
 * Not: schema-dts paketi referans tip olarak tutuldu ama runtime objesi `Record<string, unknown>`
 * olarak üretiliyor; JSON-LD esnektir ve schema-dts strict tipi pratik üretimde çok bağlayıcı.
 */

import { SITE_NAME, SITE_URL } from "./title";

type JsonLd = Record<string, unknown>;
const CTX = "https://schema.org";

export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ---------------------------------------------------------------------------
// BreadcrumbList
// ---------------------------------------------------------------------------

export function breadcrumb(
  items: { name: string; url: string }[],
): JsonLd {
  return {
    "@context": CTX,
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

// ---------------------------------------------------------------------------
// ItemList (Alphabetical) — listeleme sayfaları için
// ---------------------------------------------------------------------------

export function alphabeticalItemList(args: {
  name: string;
  items: { name: string; url: string }[];
}): JsonLd {
  return {
    "@context": CTX,
    "@type": "ItemList",
    name: args.name,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: args.items.length,
    itemListElement: args.items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

// ---------------------------------------------------------------------------
// Physician — doktor profil
// ---------------------------------------------------------------------------

/**
 * Bizim specialty slug → Schema.org MedicalSpecialty enum.
 * Google Rich Results: medicalSpecialty alanı **enum URL** olmak zorunda;
 * "Diş Hekimliği" gibi serbest Türkçe metin geçersiz sayılıyor.
 *
 * Liste: https://schema.org/MedicalSpecialty
 */
const MEDICAL_SPECIALTY_MAP: Record<string, string> = {
  "acil-tip": "Emergency",
  "aile-hekimligi": "PrimaryCare",
  "anesteziyoloji-ve-reanimasyon": "Anesthesia",
  "beyin-ve-sinir-cerrahisi": "Neurologic",
  "cocuk-cerrahisi": "Pediatric",
  "cocuk-hastaliklari": "Pediatric",
  "dermatoloji": "Dermatology",
  "dis-hekimligi": "Dentistry",
  "diyetisyen": "DietNutrition",
  "endokrinoloji": "Endocrine",
  "enfeksiyon-hastaliklari": "Infectious",
  "estetik-cerrahi": "PlasticSurgery",
  "fizik-tedavi": "Physiotherapy",
  "gastroenteroloji": "Gastroenterologic",
  "genel-cerrahi": "Surgical",
  "gogus-cerrahisi": "Surgical",
  "gogus-hastaliklari": "Pulmonary",
  "goz-hastaliklari": "Optometric",
  "hematoloji": "Hematologic",
  "ic-hastaliklari": "PrimaryCare",
  "kadin-hastaliklari-ve-dogum": "Gynecologic",
  "kalp-ve-damar-cerrahisi": "Cardiovascular",
  "kardiyoloji": "Cardiovascular",
  "kbb": "Otolaryngologic",
  "medikal-onkoloji": "Oncologic",
  "nefroloji": "Renal",
  "noroloji": "Neurologic",
  "ortodonti": "Dentistry",
  "ortopedi-ve-travmatoloji": "Musculoskeletal",
  "psikiyatri": "Psychiatric",
  "psikoloji": "Psychiatric",
  "radyasyon-onkolojisi": "Oncologic",
  "radyoloji": "Radiography",
  "romatoloji": "Rheumatologic",
  "sac-ekimi": "PlasticSurgery",
  "uroloji": "Urologic",
};

export function specialtyToSchemaEnum(slug: string | undefined): string {
  if (!slug) return "https://schema.org/PrimaryCare";
  const enumKey = MEDICAL_SPECIALTY_MAP[slug] ?? "PrimaryCare";
  return `https://schema.org/${enumKey}`;
}

export function physicianLd(args: {
  fullName: string;
  titlePrefix?: string | null;
  slug: string;
  photoUrl?: string | null;
  specialty: string;
  /** Bizim specialty slug — Schema.org enum'a map etmek için. */
  specialtySlug?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  hospitalAffiliations?: { name: string; url?: string }[];
  alumniOf?: { name: string }[];
  memberships?: string[];
  ttbSicilNo?: string | null;
  procedureNames?: string[];
  sameAs?: string[];
  /** E.164 veya yerel format — schema.org `telephone`. */
  telephone?: string | null;
  /** Google Maps URL (search ya da place URL). schema.org `hasMap`. */
  hasMap?: string | null;
  /** Coordinate — yoksa atla. */
  geo?: { latitude: number; longitude: number } | null;
}): JsonLd {
  const fullName = `${args.titlePrefix ?? "Dr."} ${args.fullName}`;
  // Doktor profili hem Person (Physician) hem yerel işletme (MedicalBusiness)
  // olarak işaretlenir. Google Local Search ve haritalı rich-snippet için
  // MedicalBusiness daha güçlü; klinik adresi varsa LocalBusiness profilini
  // tetikler.
  // medicalSpecialty: Schema.org MedicalSpecialty enum URL (Diş Hekimliği →
  // https://schema.org/Dentistry). Türkçe görünür ad description'da yer alır.
  const ld: JsonLd = {
    "@context": CTX,
    "@type": ["Physician", "MedicalBusiness"],
    "@id": `${SITE_URL}/doktor/${args.slug}#physician`,
    name: fullName,
    url: `${SITE_URL}/doktor/${args.slug}`,
    medicalSpecialty: specialtyToSchemaEnum(args.specialtySlug),
    description: `${args.specialty} alanında hizmet veren hekim`,
    priceRange: "$$",
  };
  if (args.photoUrl) ld.image = args.photoUrl;

  if (args.address) {
    ld.address = {
      "@type": "PostalAddress",
      addressCountry: "TR",
      ...args.address,
    };
  }

  if (args.telephone) ld.telephone = args.telephone;
  if (args.hasMap) ld.hasMap = args.hasMap;
  if (args.geo) {
    ld.geo = {
      "@type": "GeoCoordinates",
      latitude: args.geo.latitude,
      longitude: args.geo.longitude,
    };
  }

  if (args.hospitalAffiliations?.length) {
    ld.hospitalAffiliation = args.hospitalAffiliations.map((h) => ({
      "@type": "Hospital",
      name: h.name,
      url: h.url,
    }));
  }

  if (args.alumniOf?.length) {
    ld.alumniOf = args.alumniOf.map((a) => ({
      "@type": "EducationalOrganization",
      name: a.name,
    }));
  }

  if (args.memberships?.length) {
    ld.memberOf = args.memberships.map((m) => ({
      "@type": "MedicalOrganization",
      name: m,
    }));
  }

  if (args.ttbSicilNo) {
    ld.identifier = {
      "@type": "PropertyValue",
      propertyID: "TTB Sicil No",
      value: args.ttbSicilNo,
    };
  }

  if (args.procedureNames?.length) {
    ld.availableService = args.procedureNames.map((n) => ({
      "@type": "MedicalProcedure",
      name: n,
    }));
  }

  if (args.sameAs?.length) ld.sameAs = args.sameAs;

  return ld;
}

// ---------------------------------------------------------------------------
// MedicalClinic / Hospital — klinik profil
// ---------------------------------------------------------------------------

export function medicalClinicLd(args: {
  name: string;
  slug: string;
  description?: string;
  photoUrl?: string | null;
  logoUrl?: string | null;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  specialties?: string[];
  procedures?: string[];
  awards?: string[];
  sameAs?: string[];
  isHospital?: boolean;
}): JsonLd {
  const type = args.isHospital ? "Hospital" : "MedicalClinic";
  const ld: JsonLd = {
    "@context": CTX,
    "@type": type,
    name: args.name,
    url: `${SITE_URL}/klinik/${args.slug}`,
    inLanguage: "tr-TR",
  };
  if (args.description) ld.description = args.description;
  if (args.photoUrl) ld.image = args.photoUrl;
  if (args.logoUrl) ld.logo = args.logoUrl;

  if (args.address) {
    ld.address = {
      "@type": "PostalAddress",
      addressCountry: "TR",
      ...args.address,
    };
  }
  if (args.specialties?.length) ld.medicalSpecialty = args.specialties;
  if (args.procedures?.length) {
    ld.availableService = args.procedures.map((p) => ({
      "@type": "MedicalProcedure",
      name: p,
    }));
  }
  if (args.awards?.length) ld.award = args.awards;
  if (args.sameAs?.length) ld.sameAs = args.sameAs;

  return ld;
}

// ---------------------------------------------------------------------------
// MedicalProcedure — tedavi sayfası
// ---------------------------------------------------------------------------

export function medicalProcedureLd(args: {
  name: string;
  description?: string;
  slug: string;
  bodyLocation?: string;
  howPerformed?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}): JsonLd {
  const ld: JsonLd = {
    "@context": CTX,
    "@type": "MedicalProcedure",
    name: args.name,
    url: `${SITE_URL}/tedaviler/${args.slug}`,
    inLanguage: "tr-TR",
  };
  if (args.description) ld.description = args.description;
  if (args.bodyLocation) ld.bodyLocation = args.bodyLocation;
  if (args.howPerformed) ld.howPerformed = args.howPerformed;
  if (args.aggregateRating) {
    ld.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: args.aggregateRating.ratingValue,
      reviewCount: args.aggregateRating.reviewCount,
    };
  }
  return ld;
}

// ---------------------------------------------------------------------------
// CollectionPage — şehir / branş hub
// ---------------------------------------------------------------------------

export function collectionPageLd(args: {
  name: string;
  description: string;
  url: string;
  about?: {
    name: string;
    type: "City" | "MedicalSpecialty" | "MedicalProcedure";
  };
}): JsonLd {
  const ld: JsonLd = {
    "@context": CTX,
    "@type": "CollectionPage",
    name: args.name,
    description: args.description,
    url: args.url.startsWith("http") ? args.url : `${SITE_URL}${args.url}`,
    inLanguage: "tr-TR",
  };
  if (args.about) {
    ld.about = { "@type": args.about.type, name: args.about.name };
  }
  return ld;
}

// ---------------------------------------------------------------------------
// Article — E-E-A-T içerik
// ---------------------------------------------------------------------------

export function articleLd(args: {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  author: { name: string; url?: string };
  reviewer?: { name: string; url?: string };
  datePublished?: string;
  dateModified?: string;
}): JsonLd {
  const ld: JsonLd = {
    "@context": CTX,
    "@type": "Article",
    headline: args.title,
    url: args.url.startsWith("http") ? args.url : `${SITE_URL}${args.url}`,
    inLanguage: "tr-TR",
    author: {
      "@type": "Person",
      name: args.author.name,
      url: args.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  if (args.description) ld.description = args.description;
  if (args.imageUrl) ld.image = args.imageUrl;
  if (args.reviewer) {
    ld.reviewedBy = {
      "@type": "Person",
      name: args.reviewer.name,
      url: args.reviewer.url,
    };
  }
  if (args.datePublished) ld.datePublished = args.datePublished;
  if (args.dateModified) ld.dateModified = args.dateModified;
  return ld;
}
