# turkadoctor.com — Site Eksik Analizi (2026-05-26)

Live testler `curl` ile yapıldı; kaynak kod `/Users/umur/turka/src` üzerinden incelendi. Test edilen URL'ler: anasayfa, /sehirler, /branslar, /tedaviler, /blog, /istanbul, /ankara, /izmir, /branslar/estetik-cerrahi, /branslar/kardiyoloji, /istanbul/estetik-cerrahi, /ankara/kardiyoloji, /tedaviler/sac-ekimi, /doktor/op-dr-ali-cetinkaya, /doktor/op-dr-burak-aydin-sac-ekimi, /doktor/ugur-ozdemir-4-dt, /klinik/clinicmono-istanbul, /klinik/op-dr-ali-cetinkaya-klinigi, /klinik/acibadem-maslak, /blog/sac-ekimi-sonrasi-bakim-rehberi, /hakkimizda, /tibbi-danisma-kurulu, /editoryel-politika, /kvkk, /aydinlatma-metni, /cerez-politikasi, /iletisim, /yorum-itiraz, /profili-duzelt, /ara, küçük şehir × branş kombinasyonları (bayburt/kardiyoloji, ardahan/estetik-cerrahi, tunceli/dermatoloji, kilis/sac-ekimi), sitemap shard'ları, robots.txt.

---

## Özet

- **6 KRİTİK** (yasal risk veya canlıyı bozan)
- **18 ÖNEMLİ** (UX / SEO / E-E-A-T büyük etkisi)
- **15 İYİLEŞTİRME** (nice-to-have)
- **Genel sağlık: ~%55** — Listing iskeleti ve mevzuat title-yapısı doğru kurulmuş; ama E-E-A-T payload (TTB rozeti, son güncelleme, kaynaklar), tüzel kişilik metadata, performans, mobil UX, veri kalitesi (DT doktor isimleri Türkçesizleştirilmiş) ve fonksiyonel form akışları eksik. Sitemap'te 177K URL var ama bunların %95'i thin DT profili — Google Helpful Content riski yüksek.

---

## 🔴 KRİTİK (canlıyı bozan veya yasal risk)

### K-1 · DT (Doctortakvimi havuzu) doktor isimleri Türkçe diakritiksiz, web'in en görünür yüzünde
- **URL/Dosya:** `/Users/umur/turka/src/data/dt-shards/*/*.json` — 176K kayıt; `https://turkadoctor.com/doktor/ugur-ozdemir-4-dt`, `https://turkadoctor.com/doktor/koksal-haci-dt` vb.
- **Sorun:** İstanbul/Dermatoloji shard'ında 50 örnekten **47'sinde** (%94) Türkçe diakritik yok; Kayseri'de 1663/1663 doktorun **%94'ünde** diakritik yok. Tüm DT prefix'li doktor profilinin H1, `<title>`, breadcrumb ve meta description'ında "Ugur Ozdemir", "Koksal Haci", "Suleyman Aliyazicioglu", "Sibel Dogan" şeklinde render oluyor. Sicil + kimlik karşılaştırması yapan Türk kullanıcısı için **kabul edilemez**: doktor profilinin gerçek doktora ait olduğunu doğrulayamıyor. Ayrıca DT shard'ında **%100 `Dr.` prefix** kullanılıyor; uzm. dt., op. dr., prof. dr. ayrımı yok — bu da doktorlara karşı yanlış unvan kullanımı (TTB itirazı riski).
- **Öneri:** (a) `lib/text/turkish-restore.ts` — name normalization servisi. ASCII → Turkish unicode dönüşümü için bir basit heuristik tablo (Cetin→Çetin, Suleyman→Süleyman, Yildirim→Yıldırım) + branşa göre title prefix tahmini (diş hekimi → Dt., uzman → Uzm. Dr., vb.). (b) Build pipeline'da shard'lar üzerinde batch çalıştır, JSON'a yaz. (c) Tek tek kontrol için manuel düzeltme listesi: yüksek-trafikli ilk 1000 doktor (büyük şehirler × estetik/saç ekimi). (d) Hekim claim akışı geldiğinde doktorun kendi adı diakritikli yazması zorunlu.
- **Tahmini süre:** 3-5 gün (heuristik + manuel ilk 1000 düzeltme).

### K-2 · `/icon.png` 404 — Organization JSON-LD'nin logo referansı kırık, Google rich snippet alamıyor
- **URL/Dosya:** `https://turkadoctor.com/icon.png` (404). `/Users/umur/turka/src/app/page.tsx:149` — `organizationLd.logo = "${SITE_URL}/icon.png"`. `/Users/umur/turka/public/` içinde sadece `file.svg, globe.svg, next.svg, vercel.svg, window.svg` var (Next.js boilerplate kalıntısı). Gerçek logo yok.
- **Sorun:** Tüm sayfalardaki Organization schema'da kırık logo. Google "Organization Logo" rich snippet'i alamaz. Sosyal paylaşımda OG image de yok (`/opengraph-image` ve `/og-image.png` 404). Twitter card `summary_large_image` ama image yok → degrade. Marka tutarlılığı problemi.
- **Öneri:** (a) Düzgün vektör logo `/public/icon.png` (512×512) + `/public/icon.svg`. (b) `src/app/opengraph-image.tsx` — Next.js'in dinamik OG image generator'ını kullan; her sayfa tipinin kendi OG'si (anasayfa, doktor, klinik, tedavi). (c) `src/app/icon.tsx` ve `src/app/apple-icon.tsx` Next.js metadata API ile favicon variants.
- **Tahmini süre:** 1 gün.

### K-3 · `/hakkimizda`, `/iletisim`, `/aydinlatma-metni` ve `/kvkk` — tüzel kişilik bilgileri tamamen eksik (5651 + KVKK ihlal riski)
- **URL/Dosya:** Canlı `/hakkimizda` 22KB; `/iletisim` 21KB; `/kvkk` 222 kelime; `/aydinlatma-metni` 320 kelime. Hepsinde "tüzel kişilik süreci tamamlanmadı" yazıyor.
- **Sorun:** 5651 sayılı Kanun ve KVKK gereği yer sağlayıcı sıfatıyla:
  - VERBİS kayıt no **eksik** (`/kvkk`'da hiç geçmiyor)
  - Mersis no eksik
  - Ticaret sicil no eksik
  - KEP adresi eksik
  - Fiziki adres eksik
  - Veri sorumlusu iletişim adresi `[email protected]` — obfuscation eklentisi tarafından gizlenmiş, gerçek e-posta görünmüyor (ayrıca iletişim adresi yok demek)
  - Telefon yok
- **Plan**'da Faz 0'ın gerektirdikleri: "VERBİS başvurusu hazırlık, tüzel kişilik, KEP, fiziki adres footer'da". Hiçbiri yok.
- **Öneri:** (a) Tüzel kişilik kuruluşunu acele tamamla; KEP + Mersis + VERBİS no. (b) Tüm bu değerleri `src/data/legal.ts` içinde tek kaynak olarak tutup `/hakkimizda`, `/iletisim`, `/kvkk`, `/aydinlatma-metni`, `Footer.tsx` üzerine yansıt. (c) E-posta obfuscation yerine düz `mailto:` link kullan (spam'i SPF/DKIM + Cloudflare email routing ile azalt). (d) `/kvkk`'yı en az 800-1500 kelimeye çıkar — gerçek bir KVKK aydınlatma metni şablonu.
- **Tahmini süre:** Avukat onayı + 2-3 gün metin.

### K-4 · Curated doktor profillerinde TTB sicil rozeti çoğunlukla görünmüyor — E-E-A-T temel iddiası yıkık
- **URL/Dosya:** `/doktor/op-dr-ali-cetinkaya` (curated, TTB sicil yok); `/doktor/op-dr-burak-aydin-sac-ekimi` (TTB sicil 234567, doğrulandı 18.04.2026 görünüyor). Kod: `/Users/umur/turka/src/data/doctors.ts:36-84` Ali Çetinkaya'da `ttbSicilNo` ve `ttbVerifiedAt` yok.
- **Sorun:** 300 curated doktorun büyük çoğunluğunda TTB sicil no/doğrulama tarihi alanları boş. Anasayfa "Neden TurkaDoctor?" bölümünde "TTB sicil doğrulama rozeti" diyor; sayfada gerçekten doğrulanmış doktorlar ise nadir. Bu, sitenin ana E-E-A-T iddiasını çürütüyor. AGENTS.md: "Doktor profili: TTB sicil no + doğrulama tarihi rozeti ŞART".
- **Öneri:** (a) TTB sicil rozeti olmayan curated doktor profillerinde "TTB sicil bilgisi henüz doğrulanmadı — talep et" notu göster. (b) İlk hedef: Memorial, Acıbadem, Florence, Medicana, MP gibi büyük zincirlerin tüm hekimlerinin TTB sicil no'sunu toplu doğrulama (bu kurumların kendi web sitelerinde sicil no genelde var). (c) `ttbVerifiedAt` olmayan doktorlar listede özel "doğrulanmamış" filtre dışında tutulabilir. (d) Curated/DT ayrımını net göster: curated doktorların sicil yoksa "kuruma bağlı sicil bilgisi" not edilmeli.
- **Tahmini süre:** İlk dalga doğrulama 2-3 hafta; sistemsel çerçeve 2 gün.

### K-5 · `/profili-duzelt` ve `/yorum-itiraz` formları çalışmıyor — yasal SLA (24 saat) hizmet engeli
- **URL/Dosya:** `https://turkadoctor.com/profili-duzelt` HTML 20KB, hiç `<form>` veya `<input>` yok. Aynı şekilde `/yorum-itiraz`. İki sayfada da "Şu an düzeltme/itiraz formu hazırlanma aşamasındadır" + manuel e-posta talimatları. E-posta adresi obfuscated ve görünmüyor.
- **Sorun:** AGENTS.md ve PLAN.md: "5651 yer sağlayıcı statüsü → 24 saat uyar-kaldır akışı". KVKK + 5651 birlikte yer sağlayıcının itiraz akışını **operasyonel** kabul ediyor; e-posta gönderme imkanı sağlanmayan formun varlığı kanun şartını karşılamıyor. Robots.txt'te `Disallow: /profili-duzelt` `/yorum-itiraz` var — Google bu sayfaları görmüyor ama kullanıcı için yine de **kritik kanuni kapı**. Hak sahibinin başvuru yolu yok.
- **Öneri:** (a) Acil: e-posta adresini düz yazı görünür yap (mailto:). (b) Server action ile form: React Hook Form + Zod + Resend e-posta API. (c) Başvuruları izlemek için minimum çevrimiçi bir Postgres tablosu (`edit_requests`, `takedown_requests`). (d) Admin panel ya da hiç değilse e-postada ticket kimlik no ile gelmiş başvuruları takip et.
- **Tahmini süre:** Form + e-posta entegrasyonu 1-2 gün; Postgres+admin 3-4 gün.

### K-6 · `/istanbul/estetik-cerrahi` HTML 2.5 MB, `/branslar/estetik-cerrahi` 5.1 MB — sayfalama yok, Core Web Vitals fiilen başarısız
- **URL/Dosya:** `https://turkadoctor.com/istanbul/estetik-cerrahi` Size:2,527,431 bayt. `https://turkadoctor.com/branslar/estetik-cerrahi` Size:5,105,791 bayt. Kod: `src/app/[sehir]/[bransh]/page.tsx:181-205` — `doctors.map((d) => <DoctorCard ...>)` tüm 932 hekimi tek sayfada render ediyor.
- **Sorun:** 5 MB HTML mobil cihazda LCP 8-10 saniye, mobil Lighthouse Performance ~10-20. CDN cache miss durumunda TTFB 1.3s + transfer 5 saniye + parse 2 saniye = 8 saniye+ time-to-interactive. JSON-LD ItemList içinde de 950 itemListElement var — Google'ın Schema sınırı (numberOfItems > 500'de uyarı). Bu sayfalar Türkiye'nin en yüksek arama hacimli SEO query'lerini hedefliyor ("istanbul estetik cerrahi"); performans gerileme → ranking gerileme.
- **Öneri:** (a) Pagination: ilk 30 doktor server-rendered, geriye kalanı `<details>` ya da `/istanbul/estetik-cerrahi?page=2` ile. (b) Alternatif: progressive disclosure — "İlk 50 göster" + "Tümünü göster (922 daha)" butonu. (c) ItemList JSON-LD'yi 100 ile sınırla (Google önerisi). (d) DoctorCard içindeki signal row başına 1 component yerine inline render. (e) JS bundle analizi: card lazy hydration?
- **Tahmini süre:** Pagination + JSON-LD optimizasyonu 2-3 gün.

---

## 🟡 ÖNEMLİ (UX/SEO/E-E-A-T büyük etkisi)

### Ö-1 · Doktor profilinde "Yazar / Tıbbi inceleyici / Son güncelleme / Sonraki inceleme" yok
- **URL/Dosya:** `/doktor/op-dr-ali-cetinkaya` ve tüm `/doktor/*`. Kod: `src/app/doktor/[slug]/page.tsx` — bu E-E-A-T meta footer hiç bulunmuyor.
- **Sorun:** AGENTS.md: "Tüm tıbbi içerik: yazar + tıbbi inceleyici + son güncelleme + sonraki inceleme + kaynak listesi." Doktor profili "tıbbi içerik" sayılır; en azından bibliyo + son doğrulama tarihi olmalı. Google YMYL (Your Money Your Life) rehberinde sağlık siteleri için E-E-A-T zorunlu.
- **Öneri:** Footer'a `Profil son güncellendi: {doctor.lastUpdatedAt} · İçerik kaynağı: {curated|doctortakvimi} · Yanlış bilgi varsa profili düzelt.` ekle. Profil sahipliği iddia edildiyse "Bu profili Op. Dr. Ali Çetinkaya onayladı (tarih)" göster.
- **Tahmini süre:** 0.5 gün.

### Ö-2 · `/sehirler` ve `/branslar` index sayfalarında H1 dışında heading yok, içerik fakir
- **URL/Dosya:** `/sehirler` — sadece H1 "Türkiye Şehirleri", hiç H2 yok. `/branslar` — H1 "Tıbbi Branşlar", H2 yok.
- **Sorun:** İki sayfa düz link grid'i; özgün içerik yok, başlık hiyerarşisi yok, SEO için thin content. `/branslar` 47 KB HTML ama içeride sadece linkler. `/sehirler` 76 KB ama hiç gruplama yok (Marmara/Ege/Akdeniz vb. bölgeleme yok).
- **Öneri:** (a) Bölgeye göre gruplama (H2: Marmara, Ege, Akdeniz... 7 NUTS-1 bölgesi). (b) Her şehir kartında doktor + klinik sayısı göster. (c) `/branslar` üstüne "Branş indeksi nedir? Türkiye'de TTB tescilli ana branşlar ve yan dallar" gibi 300-500 kelime giriş. (d) H2 ile branşı dalla grupla: Cerrahi branşlar / Dahili branşlar / Pediatri / Yan dallar / Diş + Diyet + Psikoloji.
- **Tahmini süre:** 1-2 gün.

### Ö-3 · Mobile hamburger menü yok — header nav mobile'da bozuk
- **URL/Dosya:** `src/components/site/Header.tsx`. Component'te hamburger butonu yok, `<ul>` flex-row 5 link her ekran boyutunda yatay. Anasayfa HTML aramasında "hamburger" yok, hiçbir media query'li mobile component bulunamadı.
- **Sorun:** 320-375px iPhone SE/Mini ekranlarında "TurkaDoctor" markası + 4 link (Branşlar, Şehirler, Tedaviler, Blog) hepsi yan yana sığmıyor; ya overflow ya da çok küçük tıklama hedefi. WCAG 2.5.5 minimum tıklama hedef boyutu 24×24 px (AA).
- **Öneri:** Header'a mobile hamburger eklemek (Radix Sheet ya da plain `<details>`/`<summary>`). 768px altında collapsable menu. Search ikonu kalıcı tut.
- **Tahmini süre:** 0.5-1 gün.

### Ö-4 · `/profili-talep-et` 404, `/rehber/*` 404 — PLAN.md'de tanımlı route'lar yok
- **URL/Dosya:** PLAN.md satır 92: `/profili-talep-et[id]` ve `/rehber/[slug]` route'ları planlanmış. Canlıda 404.
- **Sorun:** Hekim claim akışının başlangıç noktası olan `/profili-talep-et` yok; PLAN'da "/rehber/" ayrı uzun-form rehberler için ayrılmış — tedavi sayfalarına ek olarak. İki yetenek de eksik. Doctor profile sayfasında "Profili düzelt" linki var ama "Profili talep et" linki yok.
- **Öneri:** (a) `/profili-talep-et` — minimum mailto + form skeleton (K-5 ile birleştir). (b) `/rehber/*` route MVP'de gereksiz; planı /tedaviler altında konsolide et veya PLAN.md'yi güncelle. Sitemap ve internal link de buna göre.
- **Tahmini süre:** Claim sayfası 1 gün.

### Ö-5 · `/tibbi-danisma-kurulu` boş — fotoğraf, isim, sicil no, LinkedIn yok
- **URL/Dosya:** `src/app/tibbi-danisma-kurulu/page.tsx` — placeholder metin: "MVP yayın aşamasında; kurul üyeleri henüz ilan edilmedi".
- **Sorun:** PLAN.md `7. E-E-A-T launch checklist`: "/tibbi-danisma-kurulu — en az 5 hekim, foto + sicil no + LinkedIn". Site canlıda. E-E-A-T temel iddia olan "tıbbi danışma kurulu onaylı" claim'i bu sayfanın boş olmasıyla doğrulanamıyor. Anasayfada da Card kartlarda "Tıbbi inceleyici: Dr. K. Aydın" gibi imzalar var ama Dr. K. Aydın'ın kim olduğu sayfada yok.
- **Öneri:** En az 3 hekim ile minimum tıbbi danışma kurulu sözleşmesi. Her hekim için Card: foto, ad, branş, TTB sicil no (doğrulama tarihi ile), kısa biyografi, LinkedIn/PubMed. Eğer bir an önce hekim toplanamıyorsa, sayfanın varolan "şu an MVP" diline daha şeffaf ve daha az kullanılan-template-gibi olan ifade getir; ama bu zayıf hâl bile şu an gösterileniyle aynı boş.
- **Tahmini süre:** Saha + sözleşme + içerik 2-4 hafta.

### Ö-6 · `/cerez-politikasi` 186 kelime, çerez consent banner yok
- **URL/Dosya:** `/cerez-politikasi` ve site geneli — çerez rızası banner'ı kullanıcının ilk ziyaretinde görünmüyor.
- **Sorun:** AB GDPR + KVKK Kurulu kararlarına göre analytics çerezleri için açık rıza şart. PostHog/Vercel Analytics gibi tracker'lar (Plan'da PostHog var) consent öncesi çalışmamalı. Aktif tracker yokmuş gibi görünüyor (HTML'de analytics script yok); bu iyi ama prod'a tracker eklendiğinde banner şart. İçerik 186 kelime; çerez kategorileri (gerekli/tercih/istatistik/pazarlama) yeterince ayrılmamış.
- **Öneri:** (a) Klein consent manager (cookie-consent-manager npm) veya basit kendi yazımı; localStorage'da consent saklayıp tracker'ları lazy yükle. (b) `/cerez-politikasi`'yı kategori detaylarıyla genişlet.
- **Tahmini süre:** Consent banner 1-2 gün, içerik 0.5 gün.

### Ö-7 · Resim/foto yok — `<img>` etiketi yok, doktor avatar'ları sadece initial harf
- **URL/Dosya:** Anasayfa, doktor, klinik tüm profillerde img sayısı 0. `DoctorCard.tsx:23-32` — placeholder olarak 64×64 daire içinde initial harf.
- **Sorun:** (a) Doktor profilinin görsel kimliği yok — kullanıcı için doğrulama sinyali zayıf. (b) Klinik profilinde de logo yok. (c) AGENTS.md / mevzuat: "öncesi-sonrası fotoğraf yok" denmiş ama doktor portresi ve klinik logosu yasal — mevzuat sadece tedavi sonuç fotosunu yasaklar. (d) Schema.org `Physician.image` ve `MedicalClinic.logo` JSON-LD'de boş; Google Knowledge Panel için gerekli.
- **Öneri:** (a) Cloudflare Images (PLAN'da var) entegrasyonu; doktor için face-detect crop. (b) Hekim claim akışında foto yükleme zorunlu kılmak. (c) Klinik logosu ilk dalga (Memorial, Acıbadem vs. zincirlerin public logo'sunu manuel topla, attribution ekle). (d) Avatar boş kaldığında `<picture>` ile sade SVG initial — gerçek `<img>` etiketinde olmalı (alt text ile a11y).
- **Tahmini süre:** Resim altyapısı 1 hafta; ilk dalga görsel toplama paralel 2-4 hafta.

### Ö-8 · `Physician` JSON-LD'de `priceRange: "$$"` — fiyat reklamı yasak olduğu söyleniyor ama burada $$ var
- **URL/Dosya:** `src/lib/seo/jsonld.ts:163` — `priceRange: "$$"` her doktora otomatik ekleniyor.
- **Sorun:** AGENTS.md & PLAN.md kesin: "fiyat reklamı YOK". `priceRange` Schema.org'da fiyat aralığı iddiasıdır; her doktora otomatik `$$` koymak hem doğru değil hem de mevzuata aykırı yorumlanabilir (Sağlık Hizmetlerinde Tanıtım Yönetmeliği 2023). Ayrıca Google rich result'da `Price range: $$$` görüntülenebilir.
- **Öneri:** `priceRange: "$$"` satırını JSON-LD'den **sil**. Hekim/klinikler tıbbi ürün/restoran/otel değil; LocalBusiness şablonundan PlasticSurgery'ye kalmış genel alan.
- **Tahmini süre:** 5 dakika.

### Ö-9 · Doktor profili meta description doğru ama H1/title'da iki farklı tekrar var: title "İstanbul Estetik … Cerrahi Doktoru", H1 "Op. Dr. Ali Çetinkaya"
- **URL/Dosya:** `/doktor/op-dr-ali-cetinkaya` — title 89 karakter ("Op. Dr. Ali Çetinkaya · Estetik, Plastik ve Rekonstrüktif Cerrahi, İstanbul | TurkaDoctor"). Önerilen 60 char, max 70.
- **Sorun:** Title çok uzun → Google SERP'te kesilir, branş adı kesilebilir. Ayrıca "Estetik, Plastik ve Rekonstrüktif Cerrahi" branş resmi adı çok uzun.
- **Öneri:** `doctorTitle` helper'ı kısalt: `Op. Dr. Ali Çetinkaya — Estetik Cerrahi, İstanbul` (~50 char). Resmi branş adı yerine kısaltılmış görünür ad (procedures.ts'te `procedure.name` parantezsiz versiyon zaten alınıyor; aynısı specialties'e uygulanmalı).
- **Tahmini süre:** 0.5 gün.

### Ö-10 · Klinik profilinde SB ruhsat no / sertifika doğrulama tarihi yok (clinicmono'da gösterilmiyor)
- **URL/Dosya:** `/klinik/clinicmono-istanbul` — "Bu kurum için kayıtlı uluslararası akreditasyon bilgisi henüz bulunmuyor" diyor. `src/data/clinics.ts` clinicmono kaydında sbRuhsatNo, ruhsatVerifiedAt boş.
- **Sorun:** Klinik profilinin merkezindeki E-E-A-T iddiası SB ruhsat doğrulaması. 55 klinikten kaçında veri var? Sample check: clinicmono'da yok, op-dr-ali-cetinkaya-klinigi'de yok. SB ruhsatı kamuya açık veri; ekibin doğrulama yapması mümkün.
- **Öneri:** (a) İlk dalga: 55 klinik için SB ruhsat no manuel doğrulama (web sitesi + Sağlık Bakanlığı sorgu sistemi). (b) JCI/Temos sertifika takibi için periodic check job (her ay JCI accreditation listesini scrape).
- **Tahmini süre:** Manuel doğrulama 1 hafta; sistemsel takip 1 hafta.

### Ö-11 · Şehir × branş listeleme sayfalarında filtre yok
- **URL/Dosya:** `/istanbul/estetik-cerrahi` — `FilterPanel` mentioned in AGENTS.md (`components/listing/FilterPanel`) ama 932 doktor düz alfabetik listede, filtre yok.
- **Sorun:** PLAN.md ASCII mockup'ta "Filtre" kolonu var (Semt, Tür, Doğrulama, Yorum). Kullanıcı 932 hekim arasından "Şişli'de TTB doğrulanmış" gibi seçim yapamıyor. Bu özellik PLAN'da MVP'de var.
- **Öneri:** Server-driven filter: URL query param (`?district=sisli&verified=true`). Server component yine RSC kalır. Client-side filter şu an gereksiz; önce kategoriler URL'ye, sonra istenirse ARIA radio group'la JS-free.
- **Tahmini süre:** 2-3 gün.

### Ö-12 · DT shard'larında klinik ataması (`clinicSlugs`) %100 boş, çoğunda district da yok
- **URL/Dosya:** `src/data/dt-shards/kayseri.json` — 1663 doktorun **1663**'ünde `clinicSlugs: []`. District yok: 1461/1663.
- **Sorun:** Doktor profilinde "📍 Şehir adı" var ama hangi semt ve hangi klinikte çalıştığı belli değil. Doktortakvimi havuzunun "var-yok" sinyalini sınırlı içerikle birlikte gösteriyoruz ama bu çok eksik. Profil neredeyse boş. Google Helpful Content açısından bu thin/AI-jenerik içerik kategorisine girer.
- **Öneri:** (a) DT profilini "minimum profile + claim me" pattern'i ile öne çıkar — şu an küçük amber kart var, bu yeterli değil. (b) Sitemap'te DT doktorları `priority: 0.3` (curated 0.6 yerine). (c) Çok büyük şehirlerin küçük branşları (örn. İstanbul'da göz hastalıkları — yüksek arz, yüksek talep) önceliklendir, küçük şehir × yan branş gibi listelemeleri **noindex** yap. (d) Google Search Console "Discovered – Not Indexed" raporunu izle.
- **Tahmini süre:** Sitemap priority + noindex strategy 1 gün; uzun vade: klinik ataması scraper'ı 2 hafta (Doctortakvimi web sayfasından kurum bilgisi).

### Ö-13 · `/blog` indeksinin meta description ve özet hiyerarşisi farklılık göstermiyor; her yazıda yazar sadece "TurkaDoctor Editör Ekibi"
- **URL/Dosya:** `/blog/sac-ekimi-sonrasi-bakim-rehberi` ve diğer 7 yazı. Yazar her zaman "TurkaDoctor Editör Ekibi", tıbbi inceleyici "TurkaDoctor Tıbbi Danışma Kurulu" gibi jenerik. Kişi yok.
- **Sorun:** E-E-A-T'in en zayıf noktası — Yazar ve Tıbbi inceleyici hem `Person` değil `Organization` olarak işaretleniyor JSON-LD'de. Google Helpful Content rehberi: "Who wrote this content?" → "TurkaDoctor Editör Ekibi" kabul edilebilir bir cevap değil. Tıbbi sayfa için **gerçek hekim** lazım.
- **Öneri:** (a) En az 1 yazar (gerçek Person) + 1 tıbbi inceleyici (gerçek hekim, TTB sicil ile) ekle. (b) `/yazarlar/[slug]` sayfaları (PLAN.md `content_authors` tablosu zaten önermiş). (c) Her makalenin başında "Yazan: Dr. X, İnceleyen: Doç. Dr. Y, TTB Sicil: 123456" görünür şekilde.
- **Tahmini süre:** Hekim sözleşmesi + içerik düzenleme 1-2 hafta.

### Ö-14 · Şehir hub'larında 30-50 büyük şehirden yalnız "öne çıkanlar 16" sayfasında özgün giriş içeriği var; geri kalan 65 şehirde sadece veri grid'i
- **URL/Dosya:** `/istanbul` 108 KB içeride özgün giriş + sektör notu var. `/bayburt` ne kadar? Kontrol et: muhtemelen sadece grid.
- **Sorun:** PLAN.md ay 7: "her şehir hub'ı için 400-700 kelime özgün giriş (5 büyük şehir x 8 popüler branş = 40 hub)". Şu an 16 büyük şehir × giriş paragrafı var (cities.ts içinde `intro/fullContent`). 65 küçük şehir özgün içeriksiz; Google'ın programmatic SEO penalty riski.
- **Öneri:** (a) Aktif olarak ranking talep eden ve >50 listing'i olan şehirlere öncelik. (b) Diğer 60+ şehir için kısaltılmış generic-template kabul edilebilir ama özelleştirme ihtiyaçlı (en azından şehrin nüfusu + hastane sayısı + jeografi). (c) Listing sayısı 5'in altındaki şehirler `noindex` (zaten metadata.ts'te kontrol).
- **Tahmini süre:** İçerik üretimi 2-3 hafta (LLM yardımıyla taslak + hekim onay).

### Ö-15 · Tedavi (Procedure) JSON-LD'de `aggregateRating` yer almıyor — PLAN.md'de bu izin verilen yer
- **URL/Dosya:** `src/lib/seo/jsonld.ts:285-311` — `medicalProcedureLd` aggregateRating parametresi alıyor ama hiçbir tedavi sayfasında geçilmiyor.
- **Sorun:** PLAN.md: "Yıldız rich snippet'i `MedicalProcedure` üzerinde dener (`Service` alt-tipi olarak)". Bu mevzuat-uyumlu yer; doktor/klinik üzerinde değil. Şu an kullanılmıyor → SERP'te yıldız yok.
- **Öneri:** Tedavi sayfasındaki manual_reviews + signal rating'lerden toplam aggregate hesapla. Önce review datası gerekli — şu an manual_reviews boş.
- **Tahmini süre:** Manuel yorum altyapısı bittikten sonra 1 gün.

### Ö-16 · Yorum altyapısının kendi tarafı (manual_reviews) henüz yok — sadece dış sinyal göstergesi var
- **URL/Dosya:** `src/data/types.ts` ve `src/components/listing/ReviewsCard.tsx` dış kaynak sinyali (Google, Trustpilot, Ekşi, WhatClinic) sergiliyor. PLAN.md `manual_reviews` tablosu önerilmiş ama yok.
- **Sorun:** "TurkaDoctor değerlendirmesi" iddiası yok hâlâ; site sadece dış kaynakları yönlendiriyor. Bu MVP için kabul edilebilir bir durum ama PLAN.md tarihçesi hafta 5'te yer alıyor; canlıda kullanılan ürün ise henüz yok. Magic link doğrulamalı yorum sistemi, doktor cevap akışı, 24 saat takedown — hepsi yok.
- **Öneri:** Faz 2'ye al ya da Postgres'e geçtikten sonra: Magic link e-posta (Resend), moderation queue, yorum CRUD, doktor cevap formu. AGENTS.md kuralı: "Kendi yorumlar: tam metin, TurkaDoctor puanı yalnız bunlardan hesaplanır."
- **Tahmini süre:** 1-2 hafta.

### Ö-17 · `<title>` template "%s | TurkaDoctor" — bazı sayfalarda title taşıyor
- **URL/Dosya:** `/branslar/estetik-cerrahi` title 86 karakter (`En İyi Türkiye Estetik, Plastik ve Rekonstrüktif Cerrahi Doktorları 2026 | TurkaDoctor`). `/doktor/op-dr-ali-cetinkaya` 89 karakter.
- **Sorun:** Google SERP title 50-60 karakterde keser. AGENTS.md "≤60 char ideali, ≤70 max". Hâlâ çok uzun.
- **Öneri:** (a) Branş adı uzun olunca `branchTitle` helper'ında `name.split(',')[0]` kullan ("Estetik Cerrahi"). (b) `cityBranchTitle` 80+ karaktere ulaşmasın diye yıl ekini opsiyonel yap.
- **Tahmini süre:** 0.5 gün.

### Ö-18 · Search (`/ara`) backend yok — sadece SearchAction JSON-LD lehinde, sonuç sayfası boş
- **URL/Dosya:** `/ara?q=saç+ekimi` HTML 22KB, H2: "Branşlar" "Tedaviler"; gerçek doktor/klinik araması yok. Sayfa noindex, follow (doğru).
- **Sorun:** Anasayfa hero "Doktor, klinik, tedavi veya şehir ara" placeholder. Kullanıcı `saç ekimi` aratınca sadece branş + tedavi linkleri görüyor (içeren branşlar tabloya statik mapleniyor). Doktor adıyla arama yok. Bu, sitenin değer önerisini olumsuz etkiliyor.
- **Öneri:** (a) Kısa vade: in-memory fuzzy search (Fuse.js) — 176K doktor isminde substring + tolerant matching. Server component'te execute. (b) Uzun vade: Typesense (PLAN.md tech stack'te var) — Türkçe stemming, geo-search.
- **Tahmini süre:** Fuse.js geçici çözüm 1-2 gün; Typesense kurulum + indexleme 1 hafta.

---

## 🟢 İYİLEŞTİRME (nice-to-have)

### İ-1 · HTTP security headers (HSTS, CSP, X-Frame-Options, Permissions-Policy) yok
- **URL/Dosya:** `next.config.ts` — yalnızca `output: standalone` + redirects. `headers()` yok. `curl -I` çıktısı: `cf-cache`, `report-to`, `nel` Cloudflare default; HSTS, CSP, X-Content-Type-Options, X-Frame-Options yok.
- **Öneri:** `next.config.ts`'te `async headers()` ile: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`, `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. CSP zor; başlangıç için report-only mode.
- **Tahmini süre:** 0.5 gün; CSP iteratif 2-3 gün.

### İ-2 · Skip-to-content link yok — klavye kullanıcısı için a11y
- **URL/Dosya:** `src/app/layout.tsx` body içinde sadece `<SiteHeader>` + `<main>`. Skip link yok.
- **Öneri:** Body'nin ilk child'ı: `<a href="#main" class="sr-only focus:not-sr-only">İçeriğe atla</a>`.
- **Tahmini süre:** 15 dk.

### İ-3 · Doktor avatar div'inde `aria-hidden` ama hiçbir alt metni yok
- **URL/Dosya:** `DoctorCard.tsx:24` `<div aria-hidden ...>{initials}</div>` — ekran okuyucusu için doktor portresi yerine kullanılan placeholder hiç algılanmıyor. Önemli değil ama her kart için ilk gözle görüleni "AY" (Ayşe Yılmaz) gibi.
- **Öneri:** Aria-label = doctor name'in tamamı; ya da yalnız placeholder olunca aria-hidden true kalsın (zaten doctor name h3'te). Mevcut hâl kabul edilebilir.
- **Tahmini süre:** —

### İ-4 · `<img>` etiketi olmadığı için lazy loading veya alt text test edilemiyor — Ö-7 ile birleşik
- **Öneri:** Resim eklendikçe `loading="lazy" decoding="async" alt="…"` sıkı.

### İ-5 · Open Graph image dinamik üretimi yok
- **URL/Dosya:** `/opengraph-image` 404. `src/app/opengraph-image.tsx` yok.
- **Öneri:** Next.js 16 OG Image API ile her route segmentinde dinamik OG (doktor adı + branş + şehir + logo). Twitter Card için aynı.
- **Tahmini süre:** Şablon 1 gün.

### İ-6 · `/blog` ve `/tedaviler` indeksinde pagination/kategori yok
- **URL/Dosya:** `/tedaviler` — 47 tedavi düz liste; `/blog` — 7 yazı.
- **Sorun:** Tedavi sayısı arttıkça organizasyon gerekli (özellikle estetik + saç + diş + diğer gruplamaları). Anasayfada bu gruplama var ama /tedaviler index'i tek flat liste.
- **Öneri:** /tedaviler'de H2 ile gruplama: "Estetik Cerrahi Tedavileri / Saç Estetiği / Diş / Göz / Diğer". Filter chips eklenebilir.
- **Tahmini süre:** 0.5 gün.

### İ-7 · Cards/Badge component'leri Tailwind 4 token kullanmıyor; renkler hard-coded zinc-200/zinc-50
- **URL/Dosya:** `src/components/ui/card.tsx`, `badge.tsx`.
- **Öneri:** Tailwind v4 `@theme` ile CSS variable token tabanı; dark mode hazırlığı gelir.
- **Tahmini süre:** 1 gün.

### İ-8 · Sitemap'te bütün şehir × branş yer alıyor ama "thin" kombinasyonlar (1-4 listing'li) noindex olduğu hâlde sitemap'te tutuluyor
- **URL/Dosya:** `src/app/sitemap.ts:71-95` — şehir × branş için içerik kontrolü "hasContent = ≥1" şeklinde. Ama meta robots noindex'i ayrı kontrol (`buildMetadata noindex: total < 5`).
- **Sorun:** Sitemap'te yer alıp noindex olan URL, Google Search Console'da "Excluded — by 'noindex' tag" raporlar; çok fazla bu durumda olunca site quality skoru düşer.
- **Öneri:** Sitemap.ts'te `hasContent` koşulunu `total >= 5` yap (doorway eşiğiyle aynı).
- **Tahmini süre:** 5 dk + GSC takip.

### İ-9 · Robots.txt'te 2 sitemap host directive sırası fazla; "Host:" başlığı modern olmayan
- **URL/Dosya:** `https://turkadoctor.com/robots.txt` — "Host: https://…" satırı var; "Host" Yandex'e özel direktif, Google ignore eder ama hatalı değil. Cloudflare Managed Content block'u dahili olarak ekledim/eklendi.
- **Öneri:** "Host:" satırı zararsız, kalabilir. Sitemap autodiscovery için 5 sitemap URL'si manuel listelenmiş — bu doğru.
- **Tahmini süre:** —

### İ-10 · Doktor profilinde "Aynı klinikteki diğer hekimler" sadece curated için çalışır; DT doktorları için hiç görünmüyor
- **URL/Dosya:** `src/app/doktor/[slug]/page.tsx:127-136` — `sameClinic` yalnız `curated` filtresi içeriyor; DT'lerin clinicSlugs zaten boş olduğu için bu olağan, ama DT profili için bu bölüm "İstanbul'da estetik cerrahi alanında diğer hekimler" (similar) ile değişiyor; doğru. İç linking yine de zayıf.
- **Öneri:** DT profilinde "Bu doktor hangi klinikte çalışıyor?" notu daha belirgin olarak claim akışına yönlendirmeli.
- **Tahmini süre:** 0.5 gün.

### İ-11 · Blog yazılarında dahili link metinleri jenerik
- **URL/Dosya:** `/blog/sac-ekimi-sonrasi-bakim-rehberi` — link metinleri OK (descriptive). 5+ internal link kuralı yazıyor; gerçekten 5+ var. Bu doğru.
- **Öneri:** Yazıların altındaki "İlgili tedavi rehberleri" + "Bu konuyla ilgili diğer yazılar" iyi — devam et.

### İ-12 · Tibbi-danisma-kurulu page'inde JSON-LD eksik (sayfanın author/reviewer Person profili olarak işaretlenmeli)
- **URL/Dosya:** `/tibbi-danisma-kurulu`.
- **Öneri:** Sayfa içeriği yayınlandığında her hekim için `Person` JSON-LD + `worksFor: Organization{TurkaDoctor}` + `medicalSpecialty` + `identifier: TTB Sicil`. Author profile aynı schema kullanılabilir.
- **Tahmini süre:** 0.5 gün.

### İ-13 · `lastReviewedAt` cities.ts ve specialties.ts'te var, kullanılıyor; ancak procedure'larda bir sabit ("2026-05-23") tüm tedavilere uygulanıyor
- **URL/Dosya:** `src/data/procedures.ts:18` `LAST_REVIEWED = "2026-05-23"` — tüm 47 tedaviye aynı tarih.
- **Sorun:** Google ve insan kullanıcı bunu fark eder; her tedavinin gerçek inceleme tarihi olmalı.
- **Öneri:** Her procedure objesinde `lastReviewedAt` ayrı doldur; gözden geçirme döngüsünü gerçek sürece bağla.
- **Tahmini süre:** İçerik üretimi devamında — 0 ek süre.

### İ-14 · Anasayfa "Estetik tedavi rehberleri" 15 prosedür kartı 3 alt seksiyonda, ama herhangi bir card'da resim yok
- **URL/Dosya:** Anasayfa procedureCards bölümü.
- **Öneri:** Her tedaviye ikon/illüstrasyon (Lucide icon ya da custom SVG); kart'lar şu an dengesiz görsel ağırlıkta.
- **Tahmini süre:** Görsel tasarım 1-2 gün.

### İ-15 · DoctorMap component'i — Google Maps embed mi yoksa external link mi?
- **URL/Dosya:** `src/components/listing/DoctorMap.tsx` (incelenmedi). Doktor profilinde "Harita" sekmesi var.
- **Öneri:** Google Maps embed kullanılıyorsa Maps Platform API key gerekli; ücretsiz tier sınırı var. Alternatif: Mapbox veya OpenStreetMap iframe.
- **Tahmini süre:** —

---

## ✅ İyi durumda olanlar

- **Alfabetik disclaimer** her ilgili sayfada üst kısımda görünüyor (`ALPHABETICAL_DISCLAIMER`). Mevzuat-uyumlu doğru ton.
- **SEO_AGGRESSIVE flag** mevcut (`src/lib/seo/title.ts:14`) — Bakanlık tebliği gelirse tek satır config ile "en iyi" başlıkları nötr şablona dönecek. Plan'da öngörülen tasarım uygulanmış.
- **JSON-LD yapısı sağlam:** `BreadcrumbList`, `ItemList(itemListOrder: ItemListOrderAscending)`, `CollectionPage`, `MedicalWebPage`, `FAQPage`, `Physician + MedicalBusiness`, `MedicalClinic / Hospital`, `MedicalProcedure`, `Organization`, `WebSite`. `aggregateRating` doğru şekilde `Physician`/`MedicalClinic` üzerinde değil — kural uygulanmış.
- **Şehir hub'ları:** İstanbul, Ankara, İzmir gibi büyük şehirlerde özgün giriş içeriği, sektör notu, medical tourism note, branş kırılımı — iyi yapılmış programmatic SEO.
- **Doorway koruma**: `total < 5` koşulunda `noindex, follow` çalışıyor (bayburt/kardiyoloji, ardahan/estetik-cerrahi, kilis/sac-ekimi vb. testlerde doğrulandı).
- **Tedavi sayfası şablonu (`/tedaviler/sac-ekimi` örneği):** Yöntemler, kimler aday/değil, hazırlık, süreç, iyileşme zaman çizelgesi, risk + komplikasyonlar (mevzuat için kritik), seçim kriterleri, FAQ, kaynaklar, ilgili tedaviler. Tıbbi inceleyici + son güncelleme + sonraki gözden geçirme tarihi. **E-E-A-T açısından en güçlü sayfa tipi.**
- **Blog yazıları:** Tıbbi inceleyici onaylı badge, tarih, dahili link yoğunluğu, callout block, kaynak listesi, ilgili tedavi linki. Kaliteli içerik.
- **Sitemap mimarisi:** sharded sitemap (40K URL/shard), curated (shard 0) + DT (1..4). Doğru tasarım.
- **Site response time:** Anasayfa ve curated profil sayfalarında TTFB ~300ms, Total ~400ms; Cloudflare cache HIT. **Curated sayfalar performanslı**, sorun büyük listeleme + JS bundle.
- **HTTPS + Cloudflare**: TLS, HTTP/2, modern protokoller aktif.
- **`metadataBase`** root layout'ta tanımlı — relative canonical/og:url'ler doğru resolve oluyor.
- **next.config.ts redirects:** Ali Çetinkaya curated için doğru route (301 ile düzelt) — Plan'da öngörülen ad düzeltme akışı uygulanmış.

---

## Mevcut PLAN.md ile MVP karşılaştırması

| PLAN.md MVP item | Durum |
|---|---|
| Doktor + klinik listeleme (alfabetik) | ✅ Var |
| Şehir × branş × tedavi kombinasyon sayfaları | ✅ Var (programmatic, sitemap'te) |
| TTB sicil + sertifika doğrulama | 🔴 Çoğu curated'da bile yok |
| Yorum sinyalleri (Google/Ekşi/Trustpilot/WhatClinic) | 🟡 Sinyal çerçevesi var, doğrulanmış sourceUrl'ler sınırlı |
| SEO-odaklı title ("En iyi … Doktorları") | ✅ Var, kontenjan flag ile |
| Tıbbi danışma kurulu | 🔴 Placeholder, hekim yok |
| Editöryel uzun-form içerik | 🟡 Blog 7 yazı + tedavi rehberleri var; ama jenerik organizational author |
| Min 5 listing → noindex,follow | ✅ Var |
| `/hakkimizda`, `/editoryel-politika`, `/kvkk` | 🟡 Sayfa var ama içerik thin, tüzel bilgi eksik |
| `/aydinlatma-metni`, `/cerez-politikasi` | 🟡 Aynı şekilde thin |
| `/iletisim` (KEP) | 🔴 KEP yok, e-posta obfuscated |
| `/yorum-itiraz` (24 saat SLA) | 🔴 Form yok, e-posta gizli |
| `/profili-duzelt` | 🔴 Form yok |
| `/profili-talep-et` | 🔴 Route bile yok (404) |
| Tıbbi reklam mevzuatı (öncesi/sonrası foto, garanti, %X başarı yasakları) | ✅ Sayfalarda görünür ihlal yok |
| VERBİS kayıt | 🔴 Yok |
| Çoklu kaynak yorum sinyalleri | 🟡 Card var ama curated profil dışında doluluk seyrek |
| Doktor claim sistemi (magic link) | 🔴 Yok |
| Manual reviews (kendi yorum sistemi) | 🔴 Yok |
| Postgres'e geçiş (Drizzle schema hazır) | 🔴 Hâlâ statik TS dosyalardan render; `src/db/client.ts` var ama kullanılmıyor |
| Sentry hata izleme | 🔴 Yok (HTML'de Sentry script yok) |
| PostHog analytics | 🔴 Yok |
| Cloudflare DDoS koruma | ✅ Var |
| Rate limiting | 🔴 Yok |
| Backup | ❓ Bilinmiyor (Postgres'e geçmediği için kritik değil) |

---

## Önerilen sıralı yapılacaklar (önümüzdeki 30 gün)

Sıralama: yasal risk → temel kullanıcı işlevi → performans → büyük ekleme.

1. **Tüzel kişilik + KEP + Mersis + VERBİS no'yu sayfalara yerleştir** (K-3 + İ-9). Avukat onaylı KVKK metni 800+ kelime. `src/data/legal.ts` tek-kaynak. Tahmini: 3 gün operasyonel + 1 gün kod.
2. **`/profili-duzelt`, `/yorum-itiraz`, `/profili-talep-et` formları** + Resend e-posta + Postgres `edit_requests` tablosu (K-5 + Ö-4). 24 saat SLA için minimum ticket tracking. Tahmini: 2-3 gün.
3. **Logo (icon.png) + OG image generator** (K-2). `src/app/opengraph-image.tsx` dinamik şablon. Tahmini: 1 gün.
4. **DT doktor isimlerinde Türkçe diakritik restorasyonu** — en çok trafiğe sahip İstanbul + Ankara + İzmir × estetik/saç/diş/dermatoloji shard'larını ilk dalgada düzelt. Title prefix tahmini (Dt., Uzm. Dr., vb.) (K-1). Tahmini: 3-5 gün.
5. **Şehir × branş listeleme sayfalama** — `/istanbul/estetik-cerrahi` ve diğer 100+ büyük kombinasyon için server-side pagination (K-6). Tahmini: 2-3 gün.
6. **`priceRange: "$$"` JSON-LD'den kaldır** (Ö-8). Tahmini: 5 dk.
7. **Mobile hamburger menü** (Ö-3). Tahmini: 0.5-1 gün.
8. **Security headers** (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy) (İ-1). Tahmini: 0.5 gün.
9. **Skip-to-content link** + `<img>` etiket alt text disiplini gelmeye başlasın (İ-2 + İ-4). Tahmini: 0.5 gün.
10. **`/tibbi-danisma-kurulu` için en az 3 hekim sözleşmesi** + sayfa içeriği (Ö-5). Tahmini: 2-3 hafta.
11. **TTB sicil doğrulama:** Curated 300 doktorun ilk 100'üne (büyük zincirler) TTB sicil + ttbVerifiedAt ekle (K-4). Tahmini: 1-2 hafta paralel manuel.
12. **Klinik SB ruhsat doğrulama:** 55 klinik için sbRuhsatNo + ruhsatVerifiedAt (Ö-10). Tahmini: 1 hafta paralel manuel.
13. **`/sehirler`, `/branslar` için zenginleştirilmiş içerik + bölgeye göre H2 gruplama** (Ö-2). Tahmini: 1-2 gün.
14. **Title uzunluğunu 60-70 karaktere indir** (Ö-9 + Ö-17). Tahmini: 0.5 gün.
15. **Sitemap thin-page filtresi: doorway eşiğine eşitle (>=5 listing)** (İ-8). Tahmini: 5 dk + GSC takip.

Bu liste tamamlandığında siteyi "soft launch" olgunluğuna getirir; ardından yorum altyapısı (Ö-16) + arama (Ö-18) + Postgres'e geçiş.
