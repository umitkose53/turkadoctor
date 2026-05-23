<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# turkadoctor.com — Proje Kuralları

## Ne yapıyoruz
Türkiye'nin doğrulanmış doktor + klinik dizini. Saf **listeleme** sitesi.

## Kapsam (MVP)
- **Var:** doktor + klinik listeleme (alfabetik), şehir×branş×tedavi hub'ları, TTB sicil + sertifika doğrulama, çoklu kaynak yorum sinyalleri (Google/Ekşi/Trustpilot — kaynak attribution ile), medical reviewer imzalı E-E-A-T içeriği.
- **Yok:** randevu, fiyat, dil filtresi (doktorun konuştuğu dil), çoklu dil (Faz 2), telekonsültasyon, AI, ödeme.

## Tıbbi reklam mevzuatı — UI bağlayıcı kurallar
- `<title>` ve `<h1>` SEO için "en iyi {şehir} {branş} doktorları" kalıbı kullanır.
- Sayfa görünür içeriği **alfabetik dizin** dilinde — "TurkaDoctor sıralama yapmaz" disclaimer'ı üstte.
- Sıralama numarası, "lider/öncü/1 numara", "%X başarı", garanti yok.
- Öncesi-sonrası foto yok. Kampanya/indirim yok. Fiyat yok (zaten MVP'de yok).
- Listeler her zaman alfabetik (ya da kullanıcı filtre uygularsa o filtre).
- `src/lib/seo/title.ts` içinde **kontenjan flag** (`SEO_AGGRESSIVE_TITLES`): Bakanlık tebliği gelirse tek satır config ile tüm "en iyi" başlıklar nötr şablona döner.

## E-E-A-T
- Tüm tıbbi içerik: yazar + tıbbi inceleyici + son güncelleme + sonraki inceleme + kaynak listesi.
- Doktor profili: TTB sicil no + doğrulama tarihi rozeti şart.
- Klinik profili: SB ruhsat no + sertifika (JCI/ISO/Temos) + doğrulama tarihi.
- Liste sayfası min 5 listing → yoksa `noindex,follow`.

## Yorum mimarisi (agresif toplama + ToS-uyumlu gösterim)
- `reviews_external_raw`: ham scraped/API verisi (30 gün purge).
- `review_signals`: her kaynak (Google, Ekşi, Trustpilot, WhatClinic, Doktortakvimi, Doktorsitesi) için tek satır — meta (rating/count/url).
- `manual_reviews`: kendi platform yorumları (magic link doğrulamalı, doktor cevap hakkı).
- Gösterim:
  - Kendi yorumlar: tam metin, "TurkaDoctor puanı" yalnız bunlardan hesaplanır.
  - Google: 5 yorum + "Powered by Google" + Maps link + 30 günde tazeleme.
  - Trustpilot/WhatClinic: yalnız "X'te aktif profil" + link.
  - Ekşi: başlık adı + entry sayısı + link.
  - Doktortakvimi/Doktorsitesi: **yayında yok**, yalnız iç ranking sinyali.
- `aggregateRating` JSON-LD `Physician`/`MedicalClinic` ÜZERİNE konmaz (self-serving snippet riski). `MedicalProcedure` üzerine konabilir.

## Tech stack
- Next.js 16 + App Router + RSC + ISR (Turbopack default)
- Tailwind 4
- shadcn/ui (Radix-based)
- Drizzle ORM + Postgres (Neon production)
- TypeScript strict
- `schema-dts` tip-safe JSON-LD

## Dil
- Day-1 yalnız Türkçe.
- DB ve route yapısı Faz 2 i18n için genişletilebilir tutulur (locale segmenti eklenebilir).
- Tüm kullanıcı-yüzü metin Türkçe; kod yorumları Türkçe veya İngilizce serbest, terminoloji tutarlı kalsın.

## Dosya organizasyonu
- `src/app/` — route'lar
- `src/components/ui/` — temel bileşenler (Card, Badge, Button, Disclaimer)
- `src/components/listing/` — DoctorCard, ClinicCard, FilterPanel
- `src/db/schema.ts` — Drizzle schema
- `src/db/client.ts` — DB client
- `src/lib/seo/` — title, metadata, JSON-LD helpers
- `src/lib/utils.ts` — `cn` ve genel utility
- `src/data/` — manuel seed verileri (şehirler, branşlar, tedaviler statik)
- `scripts/seed.ts` — DB seed scripti

## Kod stili
- Server Component default, Client Component yalnız etkileşim gerektiğinde.
- `async function Page({ params }: PageProps<'/...'>)` — `params` await edilir (Next 16).
- Yorum yazmazken bile JSON-LD ve mevzuat-uyumlu disclaimer satırları kaldırılmaz.
- "use client" gerektiren bileşenler `components/ui/` veya `components/listing/` altında ayrı dosya.
