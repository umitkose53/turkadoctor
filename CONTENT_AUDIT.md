# İçerik Denetimi (2026-05-26)

Kapsam: `/Users/umur/turka/src/data/blog-posts.ts` (7 yazı) + `/Users/umur/turka/src/data/procedures.ts` (10 popüler tedavi: yuz-germe, rinoplasti, meme-buyutme, karin-germe, liposuction, sac-ekimi, botoks, dis-implanti, zirkonyum-kaplama, lasik).

Not: Canlı sayfaların kaynağı `procedures.ts` veri dosyasıdır ve dynamic route üzerinden render edilir; canlı HTML yerine kaynak veri üzerinde inceleme yapıldı (içerik birebir aynıdır).

---

## 🔴 Mevzuat ihlali

### 1. YANLIŞ MEVZUAT BAĞLANTISI — `blog-posts.ts:250`
**Snippet:** `"Garanti", "kesin sonuç", "en iyi" gibi ifadeler [Sağlık Hizmetlerinde Tanıtım Yönetmeliği](https://www.kvkk.gov.tr) gereği yasaktır.`
**Sorun:** Link `kvkk.gov.tr` (Kişisel Verileri Koruma Kurumu) — yanlış otorite. Yönetmelik T.C. Sağlık Bakanlığı tarafından yayınlanır.
**Öneri:** Link kaldırılmalı veya `https://www.saglik.gov.tr` ile değiştirilmeli. İdealde Resmi Gazete URL'si verilmeli.

### 2. FİYAT BEYANI — `blog-posts.ts:887`
**Snippet:** `Evet, Türkiye birçok ülkeye göre %30-70 daha düşük fiyat sunar.`
**Sorun:** AGENTS.md → "Fiyat yok (zaten MVP'de yok)" + sayısal fiyat karşılaştırması doğrudan tıbbi/sağlık turizmi reklamı niteliği taşıyor; tıbbi reklam yönetmeliği kapsamında risk.
**Öneri:** Sayısal yüzdelik kaldırılmalı; "uluslararası hastalar için maliyet avantajı bulabilir" şeklinde nötralize edilmeli veya soru/cevap tamamen çıkarılmalı.

### 3. KAYNAKSIZ SAYISAL İDDİA — `blog-posts.ts:84`
**Snippet:** `Hastaların yaklaşık %90'ında bu evrede tellerin bir kısmı düşer`
**Sorun:** Şok dökülmesi (shock loss) sıklığı için spesifik bir oran veriliyor, kaynak yok. Tıbbi reklam yönetmeliği "% başarı" yasağına yakın bir alan.
**Öneri:** "Hastaların büyük çoğunluğunda" gibi nitel ifadeye dönüştürülmeli ya da ISHRS/literatür kaynağı eklenmeli.

### 4. "en iyi" GEÇİŞİ — `blog-posts.ts:1049`
**Snippet:** `Bazı en iyi cerrahlar akademik kariyer yapmamıştır`
**Sorun:** SEO/marketing bağlamında değil ama AGENTS.md → "lider/öncü/1 numara/en iyi" yasak listesi; otomatik tarayıcı bu ifadeyi yakalayabilir.
**Öneri:** "En tecrübeli cerrahların bir kısmı" veya "öne çıkan cerrahların bazıları" gibi nötr ifadeye çevirilebilir (düşük öncelik).

---

## 🟡 Yanlış / Tutarsız tıbbi bilgi

### 5. PERİ-İMPLANTİTİS TERMİNOLOJİ TUTARSIZLIĞI
- `blog-posts.ts:363,370` → `peri-implantitis` (doğru tam terim)
- `blog-posts.ts:427` → `peri-implantit` (kısaltılmış, gayri-resmi)
- `procedures.ts:1587,1654` → `peri-implantitis` / `Peri-implantitis`
- `procedures.ts:1618` → `peri-implantit`

**Öneri:** Tüm metinlerde `peri-implantitis` standartlaştırılsın.

### 6. "Yara yerine kıymık olmasını önlemek" — `procedures.ts:1572`
**Snippet:** `Yumuşak beslenme önerilir. Yara yerine kıymık olmasını önlemek için yumuşak diş fırçası kullanılır.`
**Sorun:** "Kıymık" (splinter) ifadesi tıbbi olarak yanlış — diş çekimi/implant sonrası riski "yara yerine yiyecek artığı kaçması" veya "fırça travması" şeklinde tanımlanır. "Kıymık" terimi semantik olarak hatalı + yumuşak diş fırçasının kullanım nedeni bu değildir (sert fırça yara çevresindeki dikiş/dokuya zarar verebileceği için yumuşak fırça tercih edilir).
**Öneri:** "Yara yerine yiyecek artığı kaçmasını ve dokuya travma olmasını önlemek için yumuşak diş fırçası kullanılır." şeklinde düzeltilmeli.

### 7. LASIK YAŞ KRİTERİ — `blog-posts.ts:478`
**Snippet:** `18 yaş ve üzeri (FDA önerisi; bazı durumlarda 21+)`
**Durum:** FDA LASIK cihazlarını 18+ yaş için onaylar; "21+" alıntısı bazı PRK protokollerine veya hekim tercihine ait. "FDA önerisi" ifadesi yanıltıcı olabilir.
**Öneri:** "18 yaş ve üzeri (FDA cihaz onayı 18+; bazı hekimler stabilite için 21+ tercih eder)" şeklinde berraklaştırılmalı.

### 8. KORNEA KALINLIĞI EŞİĞİ — `blog-posts.ts:480`
**Snippet:** `Kornea kalınlığı yeterli olmalı (genellikle minimum 480-500 mikron, hastaya göre)`
**Durum:** Klinik pratik 500 mikron üzeri olarak verilir; çıkarılacak doku miktarına göre değişen "residual stromal bed ≥ 250-300 mikron" kuralı daha güvenilir. 480 mikron alt sınırı tartışmalı.
**Öneri:** "Genellikle ≥500 mikron; net karar, kornea kalınlığı ve düzeltilecek diyoptriye göre çıkarılacak doku miktarı hesaplanarak verilir" şeklinde güncellenmeli ve uygunsa AAO/FDA kaynağı eklenmeli.

### 9. "Botoks ile saç ekimi/diş tedavisi 2 hafta kuralı" — `blog-posts.ts:747`
**Snippet:** `Genellikle 2 hafta kuralı uygulanır. Cerrahi öncesi ve sonrası 2 hafta botoks ertelenir.`
**Durum:** Bu standart bir tıbbi protokol değil; klinik pratikte sıkça kullanılan, ancak kaynakla desteklenmemiş genel bir tavsiye.
**Öneri:** "Genellikle hekimler 2 hafta gibi bir tampon önerebilir; net süre hekiminizin değerlendirmesine bağlıdır" şeklinde yumuşatılmalı.

---

## 🟢 Yazım / dil hataları

### 10. `blog-posts.ts:411` — TYPO
**Snippet:** `dayanıklı ve estetik krornlar`
**Düzeltme:** `krornlar` → `kronlar`

### 11. `blog-posts.ts:64` — TYPO
**Snippet:** `1. Önce loşyon/krem uygulanır`
**Düzeltme:** `loşyon` → `losyon`

### 12. `procedures.ts:71` — TYPO (Latince/İngilizce)
**Snippet:** `aspirin, omega-3, gingko biloba, E vitamini`
**Düzeltme:** `gingko` → `ginkgo` (doğru Latince/İngilizce yazım: *Ginkgo biloba*)

### 13. `blog-posts.ts:575` — Türkçe büyük harf eksiği
**Snippet:** `### Iki gözü aynı gün yapmak güvenli mi?`
**Düzeltme:** `Iki` → `İki` (Türkçe noktalı İ).

### 14. `blog-posts.ts:895` — Anglicism / dil tutarsızlığı
**Snippet:** `Plus özel **medical complications insurance** poliçesi alabilirsiniz.`
**Düzeltme:** "Plus" çevrilmemiş İngilizce; "Ayrıca" olmalı. İngilizce poliçe adı bırakılabilir ama parantez içinde Türkçesi verilmeli: `Ayrıca özel "medical complications insurance" (tıbbi komplikasyon sigortası) poliçesi alabilirsiniz.`

### 15. `blog-posts.ts:66` — Dil bozukluğu
**Snippet:** `Eli direkt sürtmek yerine parmak uçlarıyla nazikçe köpürtülür`
**Düzeltme:** "Eli direkt sürtmek" anlamsız; tahminen "el direkt sürülmesi yerine" veya "avuçla bastırmak yerine". Önerilen: `Avuçla bastırmak yerine parmak uçlarıyla nazikçe köpürtülür.`

### 16. `blog-posts.ts:417` — Karışık dil
**Snippet:** `### İmplant ne kadar sürer? Yani toplam tedavi süresi?`
**Düzeltme:** Soru iki kez sorulmuş izlenimi veriyor. Tek soru: `### Toplam tedavi süresi ne kadardır?`

### 17. Header yorumunda yanlış bilgi — `blog-posts.ts:8-14`
**Snippet:**
```
// 2026-05-26 batch — 12 yeni yazı
// 2026-05-26 batch — 4 yeni estetik cerrahi yazısı
```
**Sorun:** Dosyada toplam 7 yazı var; yorumlardaki "12 + 4 = 16" rakamları gerçekleşmemiş.
**Öneri:** Yorumlar dosya gerçeğine göre güncellenmeli veya kaldırılmalı (yarı-bitmiş batch sözünü ima ediyor).

---

## ✅ İyi durumda olanlar

- **Tarih hijyeni temiz:** Hiçbir yazıda eski "2025" referansı yok; tüm `publishedAt`, `lastReviewedAt`, `nextReviewDueAt` alanları 2026 ve geçerli aralıkta.
- **E-E-A-T sinyalleri:** Tüm 7 blog yazısı ve incelenen 10 tedavinin tamamında yazar, tıbbi inceleyici, yayın/inceleme tarihi ve kaynak listesi mevcut.
- **Mevzuat-uyumlu disclaimer:** Her tedavi sayfasında `ALPHABETICAL_DISCLAIMER` ve `MEDICAL_INFO_DISCLAIMER` server-render ediliyor; "hekiminize danışın" notu blog yazılarının sonunda standart hale getirilmiş.
- **Risk bölümü zorunluluğu:** Bütün cerrahi prosedürlerde `risks` array dolduruluyor (yuz-germe, rinoplasti, meme-buyutme, karin-germe, liposuction, sac-ekimi, botoks, dis-implanti, lasik). **İSTİSNA:** `zirkonyum-kaplama` (procedures.ts:1670-1678) — yalnız `description` alanı dolu, içerik yok; sayfa kısa sürümde render olur. Bu tedavi sayfası içerik üretilene kadar **noindex** önerilebilir.
- **Garanti/kesin sonuç kullanımı:** Tüm `garanti` geçişleri olumsuz/eğitici bağlamda (yasak olduğunu açıklayan); doğrudan reklam vaadi yok.
- **TPRECD/ISAPS sertifika yazısı:** Dernek üyeliğinin "neyi göstermez" tarafını dürüstçe işliyor — E-E-A-T açısından güçlü.
- **Sağlık turizmi yazısındaki kırmızı bayrak listesi:** Mevzuata uyumlu, tüketiciyi koruyucu.
- **İçsel link disiplini:** Tüm blog yazıları `/tedaviler/...`, `/branslar/...` ve `/blog/...` iç linkleriyle iyi örülmüş.

---

## Öncelik sırası özet

1. **Yüksek (mevzuat):** #1 KVKK link, #2 fiyat yüzdeliği, #3 %90 iddiası.
2. **Orta (tıbbi doğruluk):** #6 "kıymık" diş hekimliği ifadesi, #8 kornea 480 mikron, #5 terim tutarlılığı.
3. **Düşük (yazım):** #10–#16.

Toplam: 17 bulgu / 7 yazı + 10 tedavi.
