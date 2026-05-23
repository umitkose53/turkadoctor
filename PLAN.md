# turkadoctor.com — Master Plan

> Sürüm: 2026-05-23 (rev 2) · Hedef: Türkiye'nin **basit, SEO-odaklı** doktor/klinik dizini.

---

## 0. Kapsam (rev 2 — netleşti)

**Var:**
- Doktor + klinik **listeleme** (alfabetik)
- Şehir × branş × tedavi kombinasyon sayfaları (programmatic)
- TTB sicil + sertifika doğrulama (E-E-A-T için zorunlu)
- Yorum sinyalleri (Google Maps, Ekşi, Trustpilot, WhatClinic — kaynak attribution ile)
- SEO-odaklı title: "En iyi {Şehir} {Branş/Tedavi} Doktorları"
- Tıbbi danışma kurulu + editöryel uzun-form içerik (E-E-A-T)

**Yok (MVP'de):**
- Randevu alma akışı, slot motoru, takvim
- Fiyat / fiyat aralığı / paket fiyatı
- Dil filtresi (doktorun konuştuğu yabancı dil)
- Çoklu dil / lokalizasyon (Faz 2)
- Telekonsültasyon / WhatsApp entegrasyon
- AI semptom checker / Q&A forum
- Ödeme, üyelik, hasta hesabı (sadece email yorum doğrulama olabilir)

**Sonra (Faz 2):**
- Çoklu dil + medical tourism (USHAŞ izniyle)
- Randevu + fiyat şeffaflığı
- Mobil app

---

## 1. Hukuki kurallar (UI'yı bağlar)

Tıbbi reklam mevzuatı sıkı; her tasarım kararı bundan geçer.

### Title / H1 stratejisi
- `<title>` ve `<h1>`'de **SEO için** "en iyi {Şehir} {Branş} doktorları" kalıbı.
- Sayfa **içinde** sıralama numarası, "1. ... 2. ..." rozet, "lider", "öncü", "%X başarı" yok.
- Liste **alfabetik**.
- Her liste sayfasının üstünde disclaimer:

> *"Bu sayfa, [şehir] genelinde [branş] hizmeti veren hekim ve klinikleri kamuya açık verilere dayalı olarak bilgilendirme amacıyla listeler. TurkaDoctor sıralama veya tıbbi reklam yapmaz. Liste alfabetik sıradadır."*

### Diğer kurallar
- ❌ Öncesi-sonrası fotoğraf yok
- ❌ Kampanya / indirim / "ilk N hastaya" yok
- ❌ Fiyat reklamı yok (zaten MVP'de fiyat yok)
- ❌ "Garanti", "kesin sonuç", "%X başarı" yok
- ✅ Hasta yorumu yayını (kaynak attribution + uyar-kaldır SLA + doktor cevap hakkı)
- ✅ Filtreleme (şehir, semt, branş) — sıralama değil
- ✅ TTB sicil + SB ruhsat + sertifika doğrulama
- ✅ Tedavi bilgi içerikleri (eğitsel, kaynaklı, tarafsız ton)

### Compliance Day-1
- VERBİS kaydı + KVKK aydınlatma metni
- Çerez politikası + açık rıza yöneticisi
- 5651 yer sağlayıcı statüsü → 24 saat uyar-kaldır akışı + doktor cevap/itiraz
- Tüzel kişilik tic. sicil, KEP, fiziki adres footer'da

---

## 2. URL haritası (sade — listeleme dizini)

```
/                                          (anasayfa)
/sehirler                                  (şehir indeksi)
/[sehir]                                   (şehir hub — örn: /istanbul)
/branslar                                  (branş indeksi)
/branslar/[bransh]                         (branş hub — örn: /branslar/sac-ekimi)
/tedaviler                                 (tedavi indeksi — opsiyonel: branş ile çakışan medical tourism nişleri)
/tedaviler/[tedavi]                        (örn: /tedaviler/sac-ekimi)

/[sehir]/[bransh]                          (şehir × branş — örn: /istanbul/sac-ekimi)
/[sehir]/[bransh]/[semt]                   (yeterli arz varsa — min 5 listing)

/doktor/[slug]                             (doktor profil — ad-soyad-uzmanlik)
/klinik/[slug]                             (klinik profil)

/blog/[slug]                               (medical reviewer imzalı içerik)
/rehber/[slug]                             (uzun-form tedavi rehberleri)

/hakkimizda
/tibbi-danisma-kurulu
/editoryel-politika
/kvkk
/aydinlatma-metni
/cerez-politikasi
/iletisim
/yorum-itiraz
/profili-duzelt/[id]
/profili-talep-et
```

**SEO title örnekleri** (aynı URL, dinamik title):
| URL | `<title>` | `<h1>` |
|---|---|---|
| `/istanbul/sac-ekimi` | En İyi İstanbul Saç Ekim Doktorları ve Klinikleri 2026 — TurkaDoctor | İstanbul'da Saç Ekim Yapan Doktor ve Klinikler |
| `/istanbul/dermatoloji` | En İyi İstanbul Dermatoloji Doktorları (Cilt Hastalıkları) — TurkaDoctor | İstanbul Dermatoloji Uzmanları Dizini |
| `/branslar/sac-ekimi` | En İyi Türkiye Saç Ekim Doktorları ve Klinikleri — TurkaDoctor | Türkiye'de Saç Ekim Yapan Klinikler |
| `/doktor/dr-ayse-yilmaz-dermatoloji` | Dr. Ayşe Yılmaz — Dermatoloji Uzmanı, İstanbul | (klinik/uzmanlık) |

**Önemli:** `<title>` SEO için "en iyi" içerir, ama `<h1>` ve görünür içerik **alfabetik dizin** dilinde konuşur. Bu ayrım Bakanlık tebliği geldiğinde savunma argümanıdır.

### Doorway koruması
- Min 5 listing yoksa sayfa `noindex,follow`.
- Boş semt sayfası üretme.
- Şehir+branş+semt kombinasyonu doğal arzla sınırlı.

---

## 3. Veri modeli (sadeleşti — randevu/fiyat/dil yok)

```
specialties           id, slug, name, parent_id, ttb_kodu, description_md
procedures            id, slug, name, specialty_id, icd10, snomed, description_md
                      -- (sac-ekimi, dis-implanti, lasik, rinoplasti, vb.)

cities                id, slug, name, geom POINT, nuts_code
districts             id, city_id, slug, name, geom POLYGON

hospitals             id, slug, name, type (devlet/özel/üniversite),
                      city_id, district_id, geom, address,
                      jci_cert boolean, temos_cert boolean, iso_certs text[]

clinics               id, slug, name, type, city_id, district_id, geom,
                      address, phone, website,
                      ushas_no, sb_ruhsat_no, ruhsat_verified_at,
                      logo_url, photos_jsonb, opening_hours_jsonb,
                      claimed_by_user_id, claimed_at

doctors               id, slug, full_name, ttb_sicil_no, ttb_verified_at,
                      gender, photo_url, deneyim_yili,
                      bio_md,
                      educations_jsonb,         -- [{school, degree, year}]
                      memberships text[],       -- [TTB, dernek adları]
                      publications_jsonb,
                      hospital_affiliations bigint[],
                      claimed_by_user_id, claimed_at,
                      reklam_uyumlu boolean default true

doctor_clinic         doctor_id, clinic_id, role, start_year, primary boolean
doctor_specialties    doctor_id, specialty_id, primary boolean
doctor_procedures     doctor_id, procedure_id          -- "bu doktor saç ekimi yapıyor"
clinic_procedures     clinic_id, procedure_id

-- YORUM ALTYAPISI
reviews_external_raw  id, target_type, target_id,
                      source enum (google_places, eksi, trustpilot, whatclinic, doktortakvimi, doktorsitesi),
                      raw_jsonb, fetched_at, attribution_url
                      -- ToS-uyumlu projeksiyon için ham depo

review_signals        id, target_type, target_id, source,
                      rating_avg, review_count, last_seen_at, source_url
                      -- her kaynak için tek satır: gösterim + iç algoritma için

manual_reviews        id, target_type, target_id, rating, body,
                      author_handle (opsiyonel), author_email_hash,
                      moderation_status, doctor_response,
                      flagged_count, takedown_status, created_at

-- E-E-A-T ÜRETİMİ
content_authors       id, slug, name, title, photo_url, bio_md,
                      credentials_jsonb, linkedin, pubmed_url,
                      is_medical_reviewer boolean
articles              id, slug, title, body_md,
                      author_id, medical_reviewer_id,
                      published_at, last_reviewed_at, next_review_due_at,
                      target_specialties bigint[], target_procedures bigint[],
                      target_cities bigint[],
                      sources_jsonb       -- [{title, url, publisher}]

-- DOKTOR/KLİNİK SAHİPLENME
profile_claims        id, target_type, target_id, user_email,
                      verification_token, verified_at, status
                      
edit_requests         id, target_type, target_id, field, proposed_value,
                      submitter_email, status (pending/approved/rejected),
                      reviewer_id, decided_at

-- DENETİM
schema_audit_log      id, table_name, row_id, change_jsonb, actor, created_at
```

> Fiyat tabloları, randevu/slot, dil tabloları YOK. Bunlar Faz 2'de eklenecek.

---

## 4. Yorum mimarisi (sadeleşmiş — listeleme odaklı)

Listelemenin değerini yaratan tek araç **yorum sinyalleri**. Akış:

### Toplama (arka plan scraper'lar — ayrı izole servis)
| Kaynak | Topla | Sıklık | Saklanan |
|---|---|---|---|
| Google Places API | 5 yorum + rating + count | Ay | `reviews_external_raw` (30 gün sonra purge — ToS gereği) |
| Trustpilot | rating + count + son N yorum başlığı | Hafta | Sadece meta `review_signals` |
| WhatClinic | rating + count | Hafta | Sadece meta + URL |
| Ekşi Sözlük | başlık adı + entry sayısı + URL | Hafta | Sadece meta + URL |
| Doktortakvimi/Doktorsitesi | **yalnızca varlık + rating + count** | Ay | Sadece meta (içerik metin ÇEKİLMEZ) |

### Gösterim (kullanıcıya — ToS uyumlu)
- **TurkaDoctor değerlendirmesi:** yalnız `manual_reviews`'tan, doğrulanmış e-posta + uyar-kaldır akışıyla. Yoksa hiç gösterme.
- **Google yorumları:** ya resmî Google Maps widget, ya da 5 yorum + "Powered by Google" + Maps link + 30 günde tazeleme.
- **Trustpilot:** TrustBox embed (kliniğin kendi onayıyla) — yoksa "Trustpilot'ta ★4.8 / 124 yorum" yazıp link verebilir misin? **Hayır**, lisanssız puan gösterme. Sadece "Trustpilot'ta var" + link.
- **WhatClinic:** "WhatClinic'te aktif profil" + link. Yıldız gösterme.
- **Ekşi:** "Ekşi Sözlük'te 'dr ayşe yılmaz' başlığında 47 entry" + link.
- **Doktortakvimi/Doktorsitesi:** Yayında **gösterme**. Yalnız iç keşif algoritmasında sinyal.

### Liste sayfasında sıralama
**Alfabetik birincil.** Filtre ile kullanıcı isterse "değerlendirme sayısı yüksek" ya da "doğrulanmış" filtresi uygulayabilir, ama **sayfa açılışında alfabetik**, sıralama numarası yok.

---

## 5. Sayfa şablonları (ASCII mockup — revize)

### 5.1 Anasayfa

```
┌──────────────────────────────────────────────────────────────────────┐
│  TurkaDoctor    Branşlar  Şehirler  Tedaviler  Blog                  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│         Türkiye'nin doğrulanmış doktor ve klinik dizini              │
│         TTB sicil doğrulamalı · Bilgilendirme amaçlı                 │
│                                                                      │
│   ┌────────────────────────────────────────────────────────────┐    │
│   │  🔍  Doktor, klinik, tedavi veya şehir ara…                │    │
│   └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│   ────────────────  Popüler branşlar  ────────────────               │
│   [Saç Ekimi] [Diş Hekimi] [Estetik Cerrahi] [Dermatoloji]           │
│   [Diyetisyen] [Psikoloji] [Göz] [Kadın Doğum] · tüm branşlar →      │
│                                                                      │
│   ────────────────  Şehirler  ────────────────                       │
│   [İstanbul · 18.420 hekim] [Ankara · 6.130] [İzmir · 4.880]         │
│   [Antalya · 2.640] [Bursa · 2.130] · tüm iller →                    │
│                                                                      │
│   ────────────────  Tedavi rehberleri  ────────────────              │
│   ╭─────────────────╮ ╭─────────────────╮ ╭─────────────────╮       │
│   │ Saç Ekimi       │ │ Diş İmplantı    │ │ LASIK           │       │
│   │ Tıbbi inceleme: │ │ Tıbbi inceleme: │ │ Tıbbi inceleme: │       │
│   │ Dr. K. Aydın    │ │ Dr. M. Demir    │ │ Dr. A. Yılmaz   │       │
│   │ Son güncel:     │ │ Son güncel:     │ │ Son güncel:     │       │
│   │ 02.04.2026      │ │ 12.04.2026      │ │ 08.04.2026      │       │
│   ╰─────────────────╯ ╰─────────────────╯ ╰─────────────────╯       │
│                                                                      │
│   ────────────────  Neden TurkaDoctor?  ────────────────             │
│   ✓ TTB sicil no doğrulama                                           │
│   ✓ SB ruhsat + JCI/Temos sertifika takibi                           │
│   ✓ Tıbbi danışma kurulu onaylı bilgilendirme içeriği                │
│   ✓ Çoklu kaynak değerlendirme sinyalleri (Google, Ekşi, Trustpilot)│
│                                                                      │
│   Tıbbi Danışma Kurulu →  ·  Editöryel politika →                    │
│                                                                      │
│   ⓘ TurkaDoctor sıralama veya tıbbi reklam yapmaz. Listeler          │
│     alfabetik sıradadır.                                             │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.2 Şehir × branş listeleme (`/istanbul/sac-ekimi`)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ <title>En İyi İstanbul Saç Ekim Doktorları ve Klinikleri 2026 ...      │
│                                                                         │
│ Anasayfa › İstanbul › Saç Ekimi                                         │
├─────────────────────────────────────────────────────────────────────────┤
│ <h1>İstanbul'da Saç Ekim Yapan Doktor ve Klinikler</h1>                 │
│ 142 listing · alfabetik sırada                                          │
│                                                                         │
│ ⓘ Bu sayfa, İstanbul'da saç ekimi hizmeti veren hekim ve klinikleri    │
│   kamuya açık verilere dayalı olarak listeler. TurkaDoctor sıralama    │
│   veya tıbbi reklam yapmaz. Tüm listeler alfabetik sıradadır.          │
│                                                                         │
│ ┌─ Filtre ───────────┐  ┌─ Liste ─────────────────────────────────────┐│
│ │ Tür                │  │                                              ││
│ │ ☐ Doktor      88   │  │ ┌────────────────────────────────────────┐  ││
│ │ ☐ Klinik      54   │  │ │ [Logo] Acıbadem Maslak Hastanesi  ✓JCI│  ││
│ │                    │  │ │  📍 Sarıyer, İstanbul                  │  ││
│ │ Semt               │  │ │  Klinik · Özel Genel Hastane           │  ││
│ │ ☐ Şişli       34   │  │ │  Değerlendirmeler:                     │  ││
│ │ ☐ Kadıköy     28   │  │ │   🅖 Google ★4.6 / 3.402                │  ││
│ │ ☐ Beşiktaş    19   │  │ │   🅔 Ekşi 14 entry                      │  ││
│ │ ☐ Sarıyer     12   │  │ │                            [Detay →]   │  ││
│ │                    │  │ └────────────────────────────────────────┘  ││
│ │ Doğrulama          │  │                                              ││
│ │ ☐ TTB doğrulanmış  │  │ ┌────────────────────────────────────────┐  ││
│ │ ☐ Sertifikalı      │  │ │ [Foto] Dr. Burak Aydın          ✓TTB  │  ││
│ │   klinik           │  │ │  Saç Ekimi · 12 yıl deneyim            │  ││
│ │                    │  │ │  📍 Kadıköy · Özel Florence            │  ││
│ │ Değerlendirme      │  │ │  Değerlendirmeler:                     │  ││
│ │ ☐ Yorumu olan      │  │ │   🅖 Google ★4.5 / 64                   │  ││
│ │                    │  │ │   🅣 Trustpilot'ta aktif                │  ││
│ │ Filtreyi temizle   │  │ │                            [Detay →]   │  ││
│ └────────────────────┘  │ └────────────────────────────────────────┘  ││
│                          │                                              ││
│                          │  … (alfabetik, sayfa 1 / 8)                  ││
│                          └──────────────────────────────────────────────┘│
│                                                                         │
│ ────────────  İstanbul'da Saç Ekimi hakkında  ────────────              │
│ [Editör imzalı 400-600 kelime bilgilendirme — kaynaklı, pazarlamasız]   │
│ Tıbbi inceleyici: Dr. K. Aydın · Son güncelleme: 02.04.2026            │
│                                                                         │
│ Sık Sorulan Sorular                                                     │
│ ▸ İstanbul'da saç ekimi yapan kaç klinik var?                          │
│ ▸ Saç ekimi için nasıl klinik araştırmalıyım?                          │
│ ▸ TTB sicil no nedir, neden önemlidir?                                 │
│ ▸ TurkaDoctor sıralama yapıyor mu?                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

> Kart üzerinde: ad/foto, TTB rozeti, branş, semt, **sadece yorum sinyalleri** (kaynak + puan + sayı), detay linki. **Randevu butonu yok. Fiyat yok. Dil yok.**

### 5.3 Doktor profil sayfası

```
┌────────────────────────────────────────────────────────────────────────┐
│ <title>Dr. Ayşe Yılmaz — Dermatoloji Uzmanı, İstanbul                  │
│ Anasayfa › İstanbul › Dermatoloji › Dr. Ayşe Yılmaz                    │
├────────────────────────────────────────────────────────────────────────┤
│ [Headshot]   Dr. Ayşe Yılmaz                                           │
│              Dermatoloji Uzmanı · 14 yıl deneyim                        │
│              📍 Acıbadem Maslak · Şişli, İstanbul                       │
│              ✓ TTB Sicil 123456 (doğrulandı 22.04.2026)                 │
│                                                                        │
│              [⚐ Profili kaydet]  [⚠ Profili düzelt]  [📝 Yorum ekle]   │
├────────────────────────────────────────────────────────────────────────┤
│ ▌Hakkında │ Yorumlar │ Konum │ S.S.S. │ Aynı klinikteki hekimler ▐   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  EĞİTİM                                                                │
│  • Tıp Doktoru — Hacettepe Üniversitesi Tıp Fakültesi (2008)           │
│  • Dermatoloji Uzmanlık — Marmara Üniversitesi (2014)                  │
│  • Fellowship — Hauterzten Klinik, Berlin (2016, 6 ay)                 │
│                                                                        │
│  ÇALIŞTIĞI KURUMLAR                                                    │
│  • Acıbadem Maslak Hastanesi (2018 — devam)                            │
│  • Özel Florence Nightingale (2014 — 2018)                             │
│                                                                        │
│  ÜYELİKLER                                                             │
│  • Türk Dermatoloji Derneği                                            │
│  • TTB İstanbul Tabip Odası                                            │
│  • European Academy of Dermatology and Venereology (EADV)              │
│                                                                        │
│  YAYINLAR                                                              │
│  • "Akne vulgariste topikal tedavi" — Turk Derm Derg 2021              │
│    [PubMed →]                                                          │
│                                                                        │
│  UZMANLIK ALANLARI                                                     │
│  Akne · Mantar tedavisi · Cilt benlerinin değerlendirilmesi ·          │
│  Saç ve tırnak hastalıkları · Cilt biyopsisi                           │
│                                                                        │
├── DEĞERLENDİRMELER ────────────────────────────────────────────────────┤
│                                                                        │
│  TurkaDoctor (12)                  ★ 4.6 ortalama                      │
│  ★★★★★ "Dikkatli muayene, sorularıma zaman ayırdı."                   │
│         — Z. K. · 10.04.2026                                           │
│  ★★★★☆ "Bekleme süresi 20 dakikaydı…"                                  │
│         — M. A. · 22.03.2026                                           │
│  [12 yorumu gör →]   [Yorum politikamız →]                            │
│                                                                        │
│  Diğer kaynaklar (TurkaDoctor puanına dahil değildir)                  │
│  🅖 Google Maps         ★4.6 / 86 yorum         [Google'da gör →]      │
│  🅔 Ekşi Sözlük         47 entry                [Ekşi'de gör →]        │
│  🅣 Trustpilot          aktif profil             [Trustpilot →]        │
│                                                                        │
├── KONUM ───────────────────────────────────────────────────────────────┤
│  [Harita widget]                                                       │
│  Büyükdere Cad. No:40, Maslak, Sarıyer/İstanbul                        │
│  📞 0212 xxx xx xx     🚇 Metro: Maslak                                │
├────────────────────────────────────────────────────────────────────────┤
│ Bu profili Dr. Yılmaz onayladı (22.04.2026).                          │
│ Profil bilgilendirme amaçlıdır, tıbbi reklam değildir.                 │
│ Yanlış bilgi mi var? [Profili düzelt] · [Yorum itirazı]                │
│ Editöryel inceleyici: Dr. M. Demir · Son güncelleme: 22.04.2026        │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Klinik profil sayfası

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [Klinik kapak görseli]                                                  │
│                                                                         │
│ Acıbadem Maslak Hastanesi                          ✓ JCI · ISO 9001     │
│ Özel Genel Hastane · Maslak, Sarıyer, İstanbul                          │
│ SB Ruhsat: 34-xxx (doğrulandı 15.04.2026)                              │
│                                                                         │
│ [⚐ Kaydet]   [⚠ Profili düzelt]   [📝 Yorum ekle]                      │
├─────────────────────────────────────────────────────────────────────────┤
│ Hakkında │ Hekimler │ Sunulan tedaviler │ Yorumlar │ Konum             │
├─────────────────────────────────────────────────────────────────────────┤
│  KURUM PROFİLİ                                                          │
│  Kuruluş: 1991  ·  Yatak: 285  ·  Ameliyathane: 8                       │
│  Kurum türü: Özel Genel Hastane                                         │
│                                                                         │
│  SERTİFİKALAR                                                           │
│  [JCI Accredited — 2024] [ISO 9001:2015] [Temos]                       │
│                                                                         │
│  HEKİMLER (124)        [filtre: branş ▾]                               │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ Dr. Ayşe Yılmaz · Dermatoloji · ✓TTB           [Profil]        │    │
│  │ Dr. Burak Aydın · Kardiyoloji · ✓TTB           [Profil]        │    │
│  │ …                                                              │    │
│  └────────────────────────────────────────────────────────────────┘    │
│  [Tüm hekimleri gör →]                                                  │
│                                                                         │
│  SUNULAN TEDAVİLER (412)   [filtre: branş ▾]                           │
│  • Diş implantı       [Tedavi rehberi →]                                │
│  • Saç ekimi (FUE)    [Tedavi rehberi →]                                │
│  • LASIK göz          [Tedavi rehberi →]                                │
│  …                                                                      │
│  [Tüm tedavileri gör →]                                                 │
│                                                                         │
│  DEĞERLENDİRMELER (özet hekim profil kalıbı)                            │
│                                                                         │
│ Sertifika doğrulama: 15.04.2026 · Editör: TurkaDoctor Tıbbi Kurul       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.5 Tedavi sayfası (`/tedaviler/sac-ekimi`)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ <title>Saç Ekimi: Yöntemler, Süreç, En İyi Klinikler — TurkaDoctor     │
│ Anasayfa › Tedaviler › Saç Ekimi                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ <h1>Saç Ekimi Rehberi</h1>                                              │
│ Tıbbi inceleyici: Dr. K. Aydın · Son güncelleme: 02.04.2026            │
│                                                                         │
│ İÇİNDEKİLER                                                             │
│ ▸ Saç ekimi nedir?                                                      │
│ ▸ FUE, DHI, Safir teknikleri                                            │
│ ▸ Kimler aday olabilir?                                                 │
│ ▸ Türkiye'de saç ekimi (akreditasyon, sertifikasyon)                    │
│ ▸ Sık sorulan sorular                                                   │
│ ▸ Kaynaklar (ISHRS, PubMed, NICE)                                       │
│                                                                         │
│ [2.500–3.500 kelime, kaynaklı, pazarlamasız ton]                        │
│                                                                         │
│ ─────────────  Saç Ekimi Yapan Klinikler (Şehre Göre)  ─────────────   │
│ [İstanbul →] [Ankara →] [Antalya →] [İzmir →] [Bursa →] · tüm iller   │
│                                                                         │
│ ⓘ Liste alfabetik sıradadır. TurkaDoctor sıralama yapmaz.              │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Schema.org JSON-LD (sadeleşmiş)

### Doktor profili — `Physician`
- `@type: Physician`
- `name`, `image`, `url`
- `address: PostalAddress`, `geo: GeoCoordinates`
- `medicalSpecialty`
- `availableService: MedicalProcedure[]` — yalnız tedavi adları (price YOK)
- `memberOf: MedicalOrganization[]`
- `alumniOf: EducationalOrganization[]`
- `hospitalAffiliation: Hospital[]`
- `identifier: { propertyID: "TTB", value: "123456" }`
- `inLanguage: "tr-TR"`
- `sameAs[]` (LinkedIn, dernek profili, Google Maps)

### Klinik profili — `MedicalClinic` veya `Hospital`
- Aynı temel alanlar +
- `medicalSpecialty[]`, `department[]`, `employee: Physician[]`
- `availableService: MedicalProcedure[]`
- `award` (JCI, ISO)
- `isAcceptingNewPatients` opsiyonel

### Liste sayfası
- `BreadcrumbList`
- `ItemList { itemListOrder: "Alphabetical", itemListElement: ListItem[] }` — *order alfabetik açıkça bildirilir*
- `CollectionPage` + `about: City` veya `MedicalSpecialty`

### Yorum / rating
- `aggregateRating` self-serving snippet riski yüzünden `Physician`/`MedicalClinic` üzerine **konmayacak**.
- Yıldız rich snippet'i `MedicalProcedure` üzerinde dener (`Service` alt-tipi olarak).
- Her review için `Review` schema (`author`, `datePublished`, `reviewBody`, `reviewRating`).

### Tedavi / rehber sayfası
- `MedicalProcedure` + `procedureType` + `bodyLocation` + `howPerformed`
- `Article` veya `MedicalWebPage` + `lastReviewed`, `reviewedBy: Person`
- `FAQPage` (yalnız sayfada gerçekten görünen SSS)

---

## 7. E-E-A-T launch checklist

**Site-genel:**
- [ ] `/hakkimizda` — tüzel kişilik, ekip
- [ ] `/tibbi-danisma-kurulu` — en az 5 hekim, foto + sicil no + LinkedIn
- [ ] `/editoryel-politika` — doğrulama süreci, hata düzeltme prosedürü, kaynak hiyerarşisi
- [ ] KVKK aydınlatma + VERBİS no + 5651 yer sağlayıcı politikası
- [ ] Her tıbbi içerikte: yazar + tıbbi inceleyici + son güncelleme + sonraki inceleme
- [ ] PubMed/WHO/Sağlık Bakanlığı kaynaklı atıflar
- [ ] HTTPS, HSTS, CSP, robots, sitemap.xml, sitemap_index.xml

**Doktor sayfası:**
- [ ] TTB sicil no + doğrulama tarihi rozeti
- [ ] Eğitim + üyelik + yayın
- [ ] Hastane affiliations
- [ ] Profili kim doğruladı + ne zaman
- [ ] Claim sistemi + claimed badge
- [ ] Yorum itiraz + 24 saat SLA + uyar-kaldır akışı

**Klinik sayfası:**
- [ ] SB ruhsat no + ruhsat doğrulama tarihi
- [ ] Sertifika rozetleri (JCI, ISO, Temos) + doğrulama linki
- [ ] Yatak/ameliyathane sayısı (varsa)
- [ ] Çalışan hekimler (yalnız doğrulanmış)

**Liste sayfası:**
- [ ] Disclaimer üstte (alfabetik + reklam değil)
- [ ] Min 5 listing yoksa noindex
- [ ] Editör imzalı 400-600 kelime hub içeriği
- [ ] FAQ (gerçek, kopyalanmamış)

---

## 8. Tech stack

- **Framework:** Next.js 15 App Router + RSC + ISR
- **Hosting:** Vercel (Frankfurt edge) + CDN Cloudflare
- **DB:** PostgreSQL 16 + PostGIS (Neon veya Supabase)
- **Önbellek:** Upstash Redis
- **Arama:** Typesense (self-host, Türkçe stemming + geo-search)
- **Görsel:** Cloudflare Images (yüz-merkezli auto-crop, AVIF/WebP)
- **Form:** React Hook Form + Zod
- **Email:** Resend
- **Auth (yorum doğrulama):** Magic link e-posta (Resend) — hesap sistemi yok, sadece doğrulama
- **i18n:** Day-1 yok (tek-dil TR); route ileride locale segmenti eklenebilir biçimde tasarlanıyor
- **Analitik:** PostHog (self-host) + Vercel Speed Insights
- **Hata:** Sentry
- **A11y CI:** Axe-core + Playwright
- **CI/CD:** GitHub Actions, PR preview deploy
- **Test:** Vitest (unit), Playwright (e2e)
- **Scraper backend:** Python (scrapy) + Postgres outbox; **ayrı izole repo** (legal containment)

> Çıkarılanlar (MVP'ye gerek yok): Cal.com, Twilio, WhatsApp API, Daily.co video, push notification.

---

## 9. MVP roadmap (8 hafta)

### Hafta 1 — Temel
- Repo, Next.js 15 + Tailwind + shadcn
- Vercel + Cloudflare + Postgres (Neon)
- DB migration, seed (5 şehir × 10 branş × 50 doktor + 30 klinik manuel)
- Tasarım sistemi temel bileşenler (Card, Filter, Badge, Disclaimer)

### Hafta 2 — Listeleme + arama
- Typesense kurulum, Türkçe stemming
- Anasayfa, şehir hub, branş hub, tedavi indeks
- Şehir × branş × tedavi listeleme (alfabetik)
- Filtre bileşeni (semt, doğrulama, yorum varlığı)
- Doorway koruması (min 5 listing → noindex)

### Hafta 3 — Doktor + klinik profili
- Doktor profil sayfası (tüm sekmeler)
- Klinik profil sayfası
- JSON-LD Physician + MedicalClinic + BreadcrumbList + ItemList(Alphabetical)

### Hafta 4 — Veri toplama (scraper'lar)
- Sağlık Bakanlığı + TTB açık veri → master list (gece batch)
- Google Places API → 5 yorum + meta (ay batch, 30 gün purge)
- Trustpilot embed kontrol akışı
- Ekşi Sözlük başlık taraması (yalnız meta)
- WhatClinic profil var-yok sinyali
- Doktortakvimi/Doktorsitesi var-yok + rating sinyali (yalnız meta, içerik metin YOK)

### Hafta 5 — Yorum altyapısı
- `manual_reviews` formu + magic link doğrulama
- Moderasyon paneli (admin)
- Doktor cevap akışı + uyar-kaldır
- "Profili düzelt" + "Yorum itiraz" formları (24 saat SLA)

### Hafta 6 — E-E-A-T sayfaları
- /hakkimizda, /tibbi-danisma-kurulu, /editoryel-politika
- /kvkk, /aydinlatma-metni, /cerez-politikasi
- /iletisim + KEP
- Doktor claim sistemi + e-posta doğrulama akışı
- VERBİS başvuru hazırlığı

### Hafta 7 — İçerik (medical reviewer imzalı)
- 8 tedavi rehberi (saç ekim, diş implant, LASIK, rinoplasti, botoks, diyet, psikolojik destek, dermatoloji genel)
- Her şehir hub'ı için 400-700 kelime özgün giriş (5 büyük şehir x 8 popüler branş = 40 hub)
- Sitemap_index + child sitemap'ler

### Hafta 8 — Performans + A11y + launch
- Core Web Vitals (LCP < 2.5s, INP < 200ms, CLS < 0.1)
- WCAG 2.2 AA Axe-core CI yeşil
- robots.txt, sitemap, GSC, Bing
- Sosyal medya kartları (OG image generator)
- Avukat son onayı (KVKK + tıbbi reklam + telif)
- Soft launch (50 hekim/klinik ön-onayla)

---

## 10. Risk matrisi

| Risk | Olasılık | Etki | Azaltma |
|---|---|---|---|
| **Bakanlık tıbbi reklam cezası** ("en iyi" + sıralama yorumu) | **Orta-Yüksek** | **Yüksek** (kapatma/içerik kaldırma) | Title'da SEO için tutulur ama içerik alfabetik + üst disclaimer + sıralama numarası yok + avukat onayı; tebliğ gelirse 24 saat içinde başlık şablonu değiştirme planı hazır |
| Docplanner cease & desist (Doktortakvimi scraping) | Orta | Orta | Yalnız var-yok + meta sinyal, içerik metin çekme yok, izole servis |
| KVKK yorum şikayeti | Düşük-Orta | Orta | 5651 yer sağlayıcı + 24 saat uyar-kaldır + VERBİS + aydınlatma |
| Google Helpful Content downgrade (programmatic SEO) | Orta | Yüksek | E-E-A-T checklist + thin sayfa noindex + medical reviewer imzası + özgün hub içeriği |
| Doktor onayı düşük (claim oranı) | Yüksek | Orta | İlk 3 ay BD — 500 hekim ön-onayı; saha ekibi |
| Yorum spam | Yüksek | Orta | Magic link + manuel moderasyon ilk 6 ay |

### "En iyi" başlığı için kontenjan planı
Eğer Bakanlık tebliği gelirse:
1. Title şablonu otomatik değişsin: `"En İyi {Şehir} {Branş} Doktorları"` → `"{Şehir} {Branş} Doktorları ve Klinikleri Dizini"`. Tek satır config flag.
2. Eski URL'ler aynı kalır; 301 yok.
3. Sosyal meta + OG title aynı şekilde otomatik değişir.
4. 24-48 saatte tüm sayfalar uyumlu.

Bu yedek plan repo'da `lib/seo/title.ts` altında flag ile tasarlanmalı.

---

## 11. Sıradaki adımlar

**Avukat & operasyon (kod öncesi paralel):**
1. KVKK + tıbbi reklam + telif görüşü (3 avukat)
2. VERBİS başvurusu hazırlık
3. Tüzel kişilik (varsa onayı), KEP, fiziki adres
4. Tıbbi danışma kurulu (en az 5 hekimle ön sözleşme)
5. TPMK marka tescili (Sınıf 35, 44)

**Teknik (kod tarafı):**
1. Repo init + temel Next.js 15 iskeleti
2. DB schema migration (sade hâli)
3. Seed data (5 şehir × 10 branş × 50 doktor manuel)
4. Tasarım sistemi base
5. Şehir × branş × tedavi listeleme prototip
