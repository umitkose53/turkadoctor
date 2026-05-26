import type { BlogPost } from "./types";

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const AUTHOR = "TurkaDoctor Editör Ekibi";
const PUBLISHED = "2026-05-25";
const NEXT_REVIEW = "2026-11-25";

// 2026-05-26 batch — 12 yeni yazı
const PUBLISHED_2 = "2026-05-26";
const NEXT_REVIEW_2 = "2027-05-26";

// 2026-05-26 batch — 4 yeni estetik cerrahi yazısı
const PUBLISHED_NEW = "2026-05-26";
const NEXT_REVIEW_NEW = "2027-05-26";

/**
 * Blog yazıları. Tıbbi Danışma Kurulu onaylı, kaynaklı, mevzuata uyumlu.
 * E-E-A-T sinyali (yazar + inceleyici + tarih + kaynak) tüm yazılarda zorunlu.
 *
 * İçerik standardı:
 *  - Her yazıda en az 6-8 H2 başlık
 *  - 5+ içsel link (/tedaviler/, /branslar/, /blog/)
 *  - Callout box (> emoji ile başlayan blockquote)
 *  - Sık sorulan sorular bölümü
 *  - Risk + komplikasyon bölümü
 *  - "Hekiminize danışın" disclaimer
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "sac-ekimi-sonrasi-bakim-rehberi",
    title: "Saç Ekimi Sonrası 7-30. Gün Bakım Rehberi",
    excerpt:
      "Saç ekimi sonrası ilk ay tutma oranı açısından kritik. Yıkama, beslenme, uyku pozisyonu ve dikkat edilmesi gerekenler tek rehberde.",
    bodyMd: `[Saç ekimi](/tedaviler/sac-ekimi) sonrası ilk 30 gün, nakledilen saç köklerinin yeni bölgeye tutunması açısından kritik bir dönemdir. Bu rehber, genel bilgilendirme amaçlıdır; bireysel bakım talimatlarınız için **mutlaka operasyonu yapan hekiminize danışın**.

> 📌 Bu rehber [Saç Ekimi branşı](/branslar/sac-ekimi) altındaki [FUE, DHI ve Sapphire FUE](/tedaviler/sac-ekimi) tekniklerinin hepsinde geçerli temel bakım prensiplerini özetler.

## İlk 24-48 Saat: En Hassas Dönem

İlk gece sırtüstü yatış pozisyonu önerilir; başın altına yüksek bir yastık konularak alın bölgesindeki olası ödem azaltılır. Donör (alıcı) bölgede hafif kanama ve sızıntı normaldir, paniklemenize gerek yok.

### Yapılması gerekenler

- Operasyon sonrası reçeteli ağrı kesici, antibiyotik ve ödem önleyici ilaçlarınızı **zamanında alın**
- Başınızı eğmekten ve fiziksel zorlanmadan kaçının
- Sigara ve alkolden uzak durun (en az 7 gün, ideali 4 hafta)
- Klinik tarafından verilen koruyucu bandanayı ilk 1-2 gün boyunca takın

### Kaçınmanız gerekenler

- Aşırı sıcak/soğuk ortam (sauna, klima rüzgârı)
- Donör veya alıcı bölgeye temas
- Eğilerek bağcık bağlama, alışveriş torbası kaldırma
- Yatakta yan veya yüzükoyun pozisyonu

> ⚠️ **Dikkat:** 38°C üzeri ateş, yara yerinden iltihaplı akıntı veya beklenmedik yoğun kanama varsa hemen [operasyonu yapan hekiminizi](/branslar/sac-ekimi) arayın. Bu belirtiler erken müdahale gerektirir.

## 2-7. Gün: İlk Yıkama Dönemi

Çoğu klinikte 2-3. günden itibaren özel solüsyon ve şampuanla ilk yıkama yapılır. Yıkama tekniği son derece önemlidir; yanlış uygulamanız grefti kaybedebilirsiniz.

### Doğru yıkama akışı

1. Önce loşyon/krem uygulanır, **30-45 dakika** bekletilir (kabukların yumuşaması için)
2. **Düşük basınçlı, ılık suyla** durulanır (asla doğrudan duş başlığı altına girilmez)
3. Eli direkt sürtmek yerine **parmak uçlarıyla nazikçe** köpürtülür
4. Havlu sürmek yerine **kağıt havluyla nazikçe** kurulanır

> 💡 **İpucu:** Kabuklanma normaldir ve 10-14 gün içinde tamamen dökülür. **Zorla kabuk koparmak, greftleri kaybetme riski oluşturur.** Sabırlı olun, kabuklar kendiliğinden düşecektir.

## 2. Hafta: Sosyal Hayata Dönüş

İkinci hafta sonunda kabuklar büyük ölçüde dökülmüştür. Hafif kızarıklık devam edebilir; bu doğal iyileşmenin parçasıdır.

- **Şapka ve geniş kapüşonlar** (alıcı bölgeye sürtmeyecek şekilde) kullanılabilir
- Ofis işine dönüş genellikle 7-10 günde mümkündür
- **Doğrudan güneş ışığından kaçının** (en az 3 ay)
- Hava kirliliği olan ortamlardan uzak durun

## 2-4. Hafta: Şok Dökülmesi

Nakledilen saç tellerinin geçici olarak dökülmesi (*shock loss*) bu dönemde normaldir ve **kalıcı kayıp anlamına gelmez**. Saç kökleri yerinde kalır; yeni saç çıkışı 3-4. ayda görünmeye başlar.

> ℹ️ **Bilgi:** Şok dökülmesi panik yapacağınız bir durum değil; tam tersine sürecin sağlıklı bir parçasıdır. Hastaların yaklaşık %90'ında bu evrede tellerin bir kısmı düşer, ardından kökten yeni saç çıkışı başlar.

## Beslenme ve Yaşam Tarzı

İyileşmeyi destekleyen genel öneriler:

| Konu | Tavsiye |
|---|---|
| Protein | Yumurta, balık, tavuk, baklagil — günlük 1.2-1.6 g/kg |
| Mikronutrient | Biotin, çinko, demir, B12, D vitamini (hekim onayı ile) |
| Sıvı | Günlük en az 2-2.5 litre su |
| Sigara | İlk 4 hafta yasak (ideali ömür boyu azaltma) |
| Alkol | İlk 2 hafta yasak |
| Spor | Hafif egzersiz 2 hafta, ağır egzersiz **6 hafta** sonra |
| Sauna / hamam / havuz / deniz | En az 6 hafta yasak |
| Saç boyası / jöle / sprey | En az 4 hafta ertelenir |

> 💬 [Beslenme danışmanlığı](/tedaviler/beslenme-danismanligi) ile süreci destekleyebilirsiniz; [diyetisyenler](/branslar/diyetisyen) saç sağlığını destekleyici özel planlar hazırlayabilir.

## Hangi Durumlarda Hekiminizi Aramalısınız?

- 38°C üzeri ateş veya yara yerinden **iltihap görünümlü akıntı**
- Şiddetli, geçmeyen ağrı
- Donör veya alıcı bölgede **asimetrik şişlik / belirgin morarma**
- Beklenmeyen yoğun kanama
- Tekrarlayan baş ağrısı veya bulantı

## Sonuçların Görünür Olması

Yeni saçlar **3-4. ayda** belirgin biçimde çıkmaya başlar. Yoğunluk **8-12. ayda** netleşir; nihai sonuç (kalınlık, yön, doğallık) **12-18. ayda** olgunlaşır.

Bireysel iyileşme süresi şu faktörlere göre değişir:

- Yaş
- Donör kapasitesi (donör alandaki sağlıklı kök sayısı)
- Kullanılan teknik (FUE, DHI veya Sapphire FUE)
- Genel sağlık durumu
- Sigara kullanımı
- Operasyon sonrası bakım disiplini

> 👉 **Hekim seçimi:** [Saç ekimi yapan doktorlar](/branslar/sac-ekimi) listesinden, TTB sicilli ve ISHRS üyesi hekimleri tercih etmek başarı için kritik. Detaylar için: [Estetik cerrahide TPRECD/ISAPS sertifikalarının anlamı](/blog/tprecd-isaps-sertifika-anlami).

## Sık Sorulan Sorular

### Saç ekiminden 2 hafta sonra kuaföre gidebilir miyim?

Hayır. **En az 4 hafta** beklemek gerekir. Saç kesimi makas ile, jiletsiz ve nazik biçimde yapılmalı; saç boyası ise minimum 6 hafta sonra önerilir.

### Spor yapmaya ne zaman başlayabilirim?

Hafif yürüyüş 1-2 hafta sonra, koşu/fitness **4 hafta sonra**, ağır kaldırma ve yüzme **6-8 hafta sonra** güvenli kabul edilir. Erken egzersiz, ödem ve kanama riskini artırır.

### Şampuanımı değiştirmem gerekiyor mu?

Operasyonu yapan klinik genellikle ilk 2 hafta için özel solüsyon ve şampuan verir. Sonrasında **sülfatsız, paraben içermeyen** nazik şampuanlara geçilebilir.

### Saç ekimi başarısız olabilir mi?

Evet, hiçbir cerrahi işlem garantili sonuç vermez. Greft tutma oranı; teknik, hekim deneyimi, hasta uyumu ve genel sağlık durumuna göre değişir. Düşük tutma oranı durumunda **revizyon ekim** gerekebilir.

---

Bu yazıda yer alan bilgiler genel niteliklidir. Saç ekimi sonrası bakım planınız hekiminizin verdiği özel talimatlara uygun olmalıdır. **Tedavi kararları için her zaman uzman hekiminize danışın.**`,
    heroImageAlt: "Saç ekimi sonrası bakım",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi", "prp"],
    relatedSpecialtySlugs: ["sac-ekimi", "dermatoloji"],
    sources: [
      {
        title: "Hair Transplantation — Clinical Practice Standards",
        publisher: "International Society of Hair Restoration Surgery (ISHRS)",
        url: "https://www.ishrs.org",
      },
      {
        title: "Hair Loss Treatments Overview",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/conditions/hair-loss/",
      },
      {
        title: "Androgenetik Alopesi Klinik Yaklaşımı",
        publisher: "Türk Dermatoloji Derneği",
      },
    ],
  },

  {
    slug: "rinoplasti-oncesi-kim-aday",
    title: "Rinoplasti Öncesi: Kimler Aday, Kimler Değil?",
    excerpt:
      "Burun estetiği için uygun adayı belirleyen tıbbi ve psikolojik kriterler, kontrendikasyonlar ve gerçekçi beklentilerin önemi.",
    bodyMd: `[Rinoplasti (burun estetiği)](/tedaviler/rinoplasti), yüz oranlarını etkileyen merkezi bir cerrahi işlemdir. Cerrahın değerlendirmesi sonucunda **her hasta aday olmayabilir**. Bu yazı, aday değerlendirmesinde göz önünde tutulan başlıca kriterleri özetler.

> 📌 Bu yazı [estetik, plastik ve rekonstrüktif cerrahi](/branslar/estetik-cerrahi) branşı kapsamındaki rinoplasti kararı için bilgilendirmedir. Plastik cerrahi uzmanlığı kapsamında [yüz germe](/tedaviler/yuz-germe), [göz kapağı estetiği](/tedaviler/goz-kapagi-estetigi) ve [kaş germe](/tedaviler/kas-germe) gibi yüz operasyonları sıkça birlikte planlanır.

## Aday Olabilecek Bireyler

Aşağıdaki kriterleri taşıyan bireyler genellikle rinoplasti adayı olarak değerlendirilir:

- **İskelet gelişimi tamamlanmış** olanlar (genellikle 17-18 yaş ve üzeri)
- Burun şekli veya **fonksiyonel sorunlarından** (nefes alma zorluğu, septum eğriliği) memnun olmayan bireyler
- Genel sağlık durumu cerrahi anesteziyi tolere edebilen kişiler
- Sonuçtan **gerçekçi beklenti** çerçevesi çizebilen ve operasyon sürecini (iyileşme, ödem, ay-ay netleşme) anlayan adaylar
- Aktif sigara/nikotin kullanmıyor veya operasyondan en az 2-4 hafta önce bırakabilen bireyler

## Aday Olmayabilecek Durumlar

Hekim değerlendirmesi sonucunda aşağıdaki durumlarda işlem ertelenir, modifiye edilir veya yapılmaz:

- **Aktif sigara kullanımı** — yara iyileşmesini ve doku canlılığını ciddi olarak etkiler
- **Beden Dismorfik Bozukluğu (BDD)** veya gerçek dışı beklentiler — [psikoloji](/branslar/psikoloji) veya psikiyatri konsültasyonu önerilebilir
- Kontrolsüz hipertansiyon, kanama bozuklukları, ağır kalp/akciğer hastalıkları
- Anesteziye karşı ciddi alerji öyküsü
- Aktif sinüzit veya burun içi enfeksiyon (önce tedavi gerekir)
- Yüksek doz steroid, kan sulandırıcı veya immünsüpresif ilaç kullanımı (hekim onayı şart)
- Henüz iskelet gelişimi tamamlanmamış adolesanlar

> ⚠️ **Önemli:** BDD (Beden Dismorfik Bozukluk) hastaları rinoplasti sonrası genellikle hiçbir sonuçtan memnun olmaz ve birden fazla revizyon talep eder. Sorumlu cerrahlar bu kategorideki hastaları operasyon öncesi psikiyatrik değerlendirmeye yönlendirir.

## Konsültasyonda Neler Konuşulur?

İlk muayene şunları kapsamalıdır:

1. **Beklentilerin netleştirilmesi** — referans fotoğraf ve 3D simülasyon yardımcı olabilir
2. **Fonksiyonel değerlendirme** — septum, konkalar; gerekirse [KBB](/branslar/kbb) konsültasyonu
3. **Cilt kalitesi ve burun anatomisi** — kalın deride sonuçlar daha geç netleşir
4. Genel sağlık ve ilaç öyküsü
5. Daha önceki burun ameliyatı veya travma öyküsü (**revizyon rinoplasti** farklı bir tekniktir)
6. **Risk ve komplikasyonların aktarılması** — yazılı bilgilendirilmiş onam

> 💡 **İpucu:** İlk konsültasyondan **birden fazla hekim görüşü almak** mantıklıdır. [Estetik cerrahi yapan doktorların listesinden](/branslar/estetik-cerrahi) deneyim ve uzmanlık alanlarını karşılaştırabilirsiniz.

## Açık ve Kapalı Teknik

Sonucu doğrudan belirleyen şey teknik tercihi değil, **hekim deneyimi ve doğru endikasyondur**. Açık ve kapalı rinoplasti hem farklı endikasyonlarda hem hekim tercihine göre tercih edilir; her ikisinin de avantajları vardır.

### Açık rinoplasti

- Kolumella (burun delikleri arasındaki cilt köprüsü) üzerinden küçük bir kesi yapılır
- Burnun tüm yapıları **doğrudan görülerek** çalışılır
- Revizyon vakaları ve karmaşık deformiteler için tercih edilir

### Kapalı rinoplasti

- Tüm kesiler **burun içinden** yapılır; dış izi yoktur
- Daha basit/orta deformitelerde tercih edilir
- İyileşme süreci kısmen daha hızlı olabilir

### Piezo (Ultrasonik) ve Diğer Teknikler

Modern teknikler arasında piezo (ultrasonik) rinoplasti, yapısal greftleme ve mikro-osteotomi gibi yöntemler vardır. Tüm bunlar yapısal değişikliklerin tipine ve cerrah deneyimine bağlı tercih edilir.

## Risk ve Komplikasyonlar

Her cerrahi işlem gibi rinoplastinin de bilinmesi gereken riskleri vardır:

- Şişlik, morluk (ilk 1-2 hafta)
- Geçici nefes alma zorluğu (1 hafta içinde geçer)
- Kanama, enfeksiyon (nadir; antibiyotik profilaksi ile yönetilir)
- Asimetri
- Beklenmedik estetik sonuç → **revizyon ihtiyacı**
- Koku duyusunda geçici azalma

> 🚨 **Önemli:** Hiçbir cerrah "%100 garantili sonuç" vaat edemez. "Garanti", "kesin sonuç", "en iyi" gibi ifadeler [Sağlık Hizmetlerinde Tanıtım Yönetmeliği](https://www.kvkk.gov.tr) gereği yasaktır. Bu tür vaatler veren klinik/hekimden uzak durun.

## Sonuç Ne Zaman Netleşir?

İlk 2-3 haftada belirgin şişlik ve morluklar geçer; **3-6. ayda** burun şekli büyük ölçüde belirginleşir, **12-18. ayda** burun ucu ödemi de tamamen iner ve nihai sonuç netleşir.

> 💡 **Sabır kritik:** Rinoplasti sonrası şikayetlerin önemli kısmı, sonucun yeterince oturmadan değerlendirilmesinden kaynaklanır. **En az 12 ay** beklenmeden revizyon kararı verilmemelidir.

## Yurt Dışından Hasta Olarak Geliyorsanız

Türkiye, rinoplastide önemli bir [medical tourism](/blog/saglik-turizmi-nelere-dikkat) merkezidir. Yurt dışından geliyorsanız şu noktalara dikkat edin:

- **USHAŞ yetkili** kuruluş seçin
- Operasyon sonrası en az **7 gün** ülkede kalın (atel/splint çıkarımı için)
- Uçuş yasak süresi tipik olarak **5-7 gün**
- Ülkenize döndüğünüzde takip edecek bir hekim iletişim bilgisi alın

## Sık Sorulan Sorular

### Rinoplasti SGK tarafından karşılanır mı?

Fonksiyonel endikasyonlu (örn. septum eğriliği nedeniyle ciddi nefes alma sorunu) **septorinoplasti** belirli durumlarda SGK kapsamında olabilir. Tamamen kozmetik amaçlı rinoplasti SGK kapsamında değildir.

### Operasyondan sonra ne zaman gözlük takabilirim?

Burun sırtına temas eden çerçeveli gözlüklerin **4-6 hafta** süreyle kullanılmaması önerilir. Bu sürede yapışkanlı destekler veya kontakt lens tercih edilebilir.

### Burun ucu ne zaman normalleşir?

Burun ucu, en son ödem inen bölgedir. Çoğu hastada **6-12 ay**, kalın ciltli hastalarda **18 aya** kadar uzayabilir.

### Septum eğriliğim var, rinoplasti aynı seansta yapılır mı?

Evet. Septum eğriliği + estetik düzeltme aynı seansta **septorinoplasti** olarak yapılabilir; çoğu durumda bu daha verimli bir yaklaşımdır.

---

Rinoplasti adaylığı için tek doğru yol, **yüz yüze hekim muayenesi**dir. Bu yazı genel bilgilendirme niteliğindedir; bireysel uygunluk değerlendirmesi için Plastik Rekonstrüktif ve Estetik Cerrahi uzmanına başvurunuz.`,
    heroImageAlt: "Rinoplasti öncesi muayene",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["rinoplasti", "goz-kapagi-estetigi", "yuz-germe", "kas-germe"],
    relatedSpecialtySlugs: ["estetik-cerrahi", "kbb"],
    sources: [
      {
        title: "Rhinoplasty (Nose Surgery) — Patient Information",
        publisher: "American Society of Plastic Surgeons (ASPS)",
        url: "https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty",
      },
      {
        title: "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
        publisher: "TPRECD",
        url: "https://www.plastikcerrahi.org.tr",
      },
    ],
  },

  {
    slug: "dis-implanti-surec-rehberi",
    title: "Diş İmplantı: Süreç, Riskler ve Klinik Seçimi",
    excerpt:
      "Diş implantı tedavisinin aşamaları, osseointegrasyon süresi, klinik ve hekim seçim kriterleri, risk ve komplikasyonlar.",
    bodyMd: `[Diş implantı](/tedaviler/dis-implanti), eksik dişlerin yerine **titanyum yapay diş kökü** yerleştirilen ileri restoratif diş hekimliği uygulamasıdır. Doğru endikasyon, deneyimli hekim ve titiz takip ile uzun yıllar sürebilen bir tedavidir.

> 📌 Bu yazı [diş hekimliği](/branslar/dis-hekimligi) branşı kapsamındaki implant tedavisi içindir. Diş kaybınızın boyutuna göre [All-on-4](/tedaviler/all-on-4), [zirkonyum kaplama](/tedaviler/zirkonyum-kaplama) veya [lamine diş](/tedaviler/lamine-dis) alternatifleri de değerlendirilebilir.

## Tedavi Aşamaları

### 1. Konsültasyon ve Planlama (1-2 hafta)

- Detaylı klinik muayene
- **3D dental tomografi (CBCT)** — kemik kalınlığı, sinir/sinüs yakınlığı ve cerrahi planlama için
- Tıbbi ve ilaç öyküsünün gözden geçirilmesi
- Yazılı tedavi planı ve bilgilendirilmiş onam

### 2. İmplant Yerleştirme (Cerrahi Seans, 30-90 dakika)

- Lokal anestezi (gerekirse sedasyon) altında yapılır
- Çene kemiğine titanyum implant yerleştirilir
- Kemik grefti gerekiyorsa aynı seansta uygulanabilir
- Operasyon ertesi gün sosyal hayata dönüş genellikle mümkündür

### 3. Osseointegrasyon Süresi (3-6 ay)

İmplantın kemikle biyolojik olarak kaynaşması süreci. Bu aşamada implant fiziksel olarak çene kemiği içinde bir parça hâline gelir.

| Çene | Ortalama Süre |
|---|---|
| Alt çene | 3-4 ay |
| Üst çene | 4-6 ay (anatomik fark) |

### 4. Üst Yapı (Abutment + Kron)

Osseointegrasyon tamamlandıktan sonra ölçü alınır; porselen veya [zirkonyum kron](/tedaviler/zirkonyum-kaplama) yerleştirilir.

> 💡 **Anında Yükleme:** Belirli vakalarda (özellikle [All-on-4](/tedaviler/all-on-4) tedavilerinde) implant yerleştirme ile aynı seansta geçici diş takılabilir. Bu, hastanın "dişsiz" geçirdiği süreyi kısaltır.

## Kimler Diş İmplantı İçin Uygundur?

- Eksik dişi olan ve **genel sağlık durumu cerrahiye uygun** yetişkinler
- Çene kemik yapısı yeterli olan veya **kemik grefti** ile düzeltilebilen bireyler
- Ağız hijyenine düzenli olarak dikkat eden hastalar
- Sigara içmeyen veya bırakabilen kişiler

## Kimler İçin Risk Yüksektir?

> ⚠️ Aşağıdaki durumlarda implant başarısız olma riski belirgin ölçüde artar:

- **Aktif diş eti hastalığı** (periodontit) — önce periodontal tedavi gerekir
- Kontrolsüz **diyabet**, ağır osteoporoz, **bisfosfonat** kullanımı (özel değerlendirme şart)
- **Aktif sigara içicileri** — peri-implantitis riski belirgin yüksek
- İskelet gelişimi tamamlanmamış bireyler
- Bazı immünsüpresif ilaç kullanımı

## Risk ve Komplikasyonlar

- Geçici şişlik, ağrı, hassasiyet
- **Peri-implantitis** — uzun vadede en önemli risk; düzenli kontrol şart
- **Osseointegrasyon başarısızlığı** — implantın kemikle kaynaşmaması (oran düşük ama sıfır değil)
- Sinir hasarı (alt çene mandibular sinir hassasiyeti)
- Sinüs perforasyonu (üst çene arka bölge)
- Estetik veya işlevsel sorunlar → revizyon gerekebilir

## Klinik / Hekim Seçim Kriterleri

Doğru klinik ve hekim seçimi uzun vadeli başarı için kritiktir:

- **Hekimin diş hekimliği uzmanlığı** (TDB tescili)
- İmplant cerrahisi konusunda eğitim/sertifikasyon
- ITI (International Team for Implantology) veya benzer uluslararası dernek üyeliği — tercih sebebi
- **Sağlık Bakanlığı ruhsatlı** klinik veya hastane
- Kullanılan implant markasının **CE veya FDA onaylı** ve uluslararası sicilde izlenebilir olması
- 3D dental tomografi (CBCT) ile cerrahi planlama yapılması
- Yazılı bilgilendirme + risk onam formu
- Yıllık kontrol planının netleştirilmiş olması

> 👉 [Diş implantı yapan klinik ve doktorları](/tedaviler/dis-implanti) inceleyebilir, farklı şehirlerden seçenekleri karşılaştırabilirsiniz. Türkiye sağlık turizminde bu alan en güçlü dikeylerden biridir — [sağlık turizmi rehberimiz](/blog/saglik-turizmi-nelere-dikkat) yurt dışı hastalar için yol gösterici olabilir.

## All-on-4 Nedir?

[Tüm üst veya alt çenede dişlerin kaybedildiği](/tedaviler/all-on-4) durumlarda **4 implant** üzerine tam ark sabit protez tasarlanan ileri tedavidir. Anında yükleme (same-day) ile aynı gün geçici diş takılması çoğunlukla mümkündür; final restorasyon 3-6 ay sonra yerleştirilir.

## İmplant Ömrü

Modern titanyum implantların **uzun ömürlü olduğu** klinik çalışmalarda gösterilmiştir. Ancak hiçbir implant ömür boyu garantili kabul edilmez. Başarıyı belirleyen başlıca etkenler:

| Faktör | Etkisi |
|---|---|
| Düzenli ağız hijyeni | Çok yüksek |
| Yılda 1-2 dental kontrol | Yüksek |
| Sigaranın bırakılması | Yüksek |
| Sistemik hastalık kontrolü | Yüksek |
| İlk operasyonun kalitesi | Çok yüksek |

## Estetik Diş Hekimliği ile Birleşik Tedavi

Diş implantı tek başına bir restoratif uygulamadır; estetik kaygılar varsa şu işlemler de birlikte planlanabilir:

- [Zirkonyum kaplama](/tedaviler/zirkonyum-kaplama) — dayanıklı ve estetik krornlar
- [Lamine diş](/tedaviler/lamine-dis) — ön dişlerde minimal müdahaleyle estetik
- [Diş beyazlatma](/tedaviler/dis-beyazlatma) — implant öncesi/sonrası renk uyumu

## Sık Sorulan Sorular

### İmplant ne kadar sürer? Yani toplam tedavi süresi?

Operasyon (1 gün) + osseointegrasyon (3-6 ay) + üst yapı (1-2 hafta) dahil toplam süre genellikle **3-6 aydır**. Kemik grefti gerekiyorsa süre uzayabilir.

### İmplant ağrılı mı?

İşlem lokal anestezi altında ağrısız yapılır. Sonrasında 24-48 saatlik hafif ağrı ve şişlik beklenebilir; reçeteli ağrı kesicilerle yönetilir.

### Sigara içiyorum, implant yapılabilir mi?

Sigara implant başarı oranını düşürür ve peri-implantit riskini artırır. **İdeal olan operasyon öncesi bırakmaktır**. Hekim değerlendirmesinde sigara öyküsü mutlaka paylaşılmalıdır.

### Hangi marka implant daha iyi?

Bu kararı **hekiminiz vermeli**. Onaylı markalar (Straumann, Nobel Biocare, Astra Tech, BioHorizons vd.) klinik çalışmalarla başarılarını kanıtlamıştır. Hekiminize hangi marka kullandığını mutlaka sorun.

### İmplant düşerse ne olur?

Çok nadirdir. Düşerse yeni implant 3-6 ay beklenerek yerleştirilebilir; kemik kaybı varsa önce greft gerekir. Düzenli kontrolle erken müdahale şansı yüksektir.

---

İmplant kararı bireysel tıbbi değerlendirmeye bağlıdır. Bu yazı bilgilendirme amaçlıdır; tedavi planınız için **diş hekiminize başvurunuz**.`,
    heroImageAlt: "Diş implantı tedavisi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama", "lamine-dis"],
    relatedSpecialtySlugs: ["dis-hekimligi"],
    sources: [
      {
        title: "Dental Implants — Information for Patients",
        publisher: "American Dental Association (ADA)",
        url: "https://www.ada.org",
      },
      {
        title: "Türk Diş Hekimleri Birliği",
        publisher: "TDB",
        url: "https://www.tdb.org.tr",
      },
      {
        title: "Dental Implant Standards",
        publisher: "International Team for Implantology (ITI)",
        url: "https://www.iti.org",
      },
    ],
  },

  {
    slug: "lasik-aday-kornea-kalinligi",
    title: "LASIK İçin İdeal Aday Kim? Kornea Kalınlığı Neden Önemli?",
    excerpt:
      "LASIK öncesi yapılması gereken değerlendirmeler, kornea kalınlığı, refraktif kusur stabilitesi ve aday olmayabilecek durumlar.",
    bodyMd: `[LASIK (Laser-Assisted In Situ Keratomileusis)](/tedaviler/lasik), miyop, hipermetrop ve astigmat gibi kırma kusurlarının lazerle düzeltildiği refraktif cerrahi yöntemidir. Her hasta LASIK için aday değildir; uygunluk **detaylı göz muayenesi ve özel testlerle** belirlenir.

> 📌 Bu yazı [göz hastalıkları (oftalmoloji)](/branslar/goz-hastaliklari) branşı kapsamındaki refraktif cerrahi kararı için bilgilendirmedir. LASIK adayı olmayanlar için alternatif [SMILE](/tedaviler/smile) yöntemi de değerlendirilebilir.

## LASIK Adaylığı için Temel Kriterler

- **18 yaş ve üzeri** (FDA önerisi; bazı durumlarda 21+)
- Refraktif kusur en az **1 yıl stabil** olmalı (numara değişmemiş)
- **Kornea kalınlığı yeterli** olmalı (genellikle minimum 480-500 mikron, hastaya göre)
- Aktif göz hastalığı (keratokonus, ciddi kuru göz, üveit, glokom) olmamalı
- Genel sağlık durumu uygun olmalı
- Hamilelik veya emzirme döneminde **olmamalı**

## Kornea Kalınlığı Neden Bu Kadar Kritik?

LASIK işleminde kornea üzerinde önce bir flap (kapak) oluşturulur, ardından altındaki dokuya excimer lazer ile şekil verilir. **Çıkarılan doku miktarı düzeltilecek diyoptri ile doğru orantılıdır**.

Eğer kornea kalınlığı yetersizse:

- Yeterli doku çıkarmak için güvenli rezerv kalmaz
- **Ektazi (kornea zayıflaması ve şekil bozulması)** riski artar — geri dönüşü olmayan, görme kaybına neden olabilen bir komplikasyon

> 🚨 **Kritik:** Yetersiz kornea kalınlığı ile yapılan LASIK, geri alınamaz bir komplikasyon olan **post-LASIK ektazi** ile sonuçlanabilir. Bu nedenle operasyon öncesi pakimetri ve topografi yapmayan hekim/kliniği kesinlikle tercih etmeyin.

Bu nedenle ameliyat öncesinde:

- **Pakimetri** (kornea kalınlık ölçümü) — mikron cinsinden
- **Topografi / Pentacam** — kornea yüzey haritası, asimetrik kalınlık tespiti
- **Kuru göz testleri** — Schirmer, TBUT

## LASIK Adayı Olmayanlar

Aşağıdaki durumlarda LASIK yapılmaz veya alternatif yöntem önerilir:

- **Keratokonus tanısı veya şüphesi**
- İnce kornea (ektazi riski)
- İleri kuru göz hastalığı
- Aktif diyabet veya kontrolsüz sistemik hastalık
- Otoimmün hastalıklar (lupus, romatoid artrit) — yara iyileşmesini bozar
- Hamilelik / emzirme dönemi
- Sürekli ilaç kullanımı (immünsüpresif, steroid)

## Alternatif Yöntemler

LASIK'e uygun olmayan hastalar için diğer seçenekler:

| Yöntem | Avantajı | Dezavantajı |
|---|---|---|
| **PRK / TransPRK** | Flap-siz; ince kornealı hastalar için | İyileşme süresi daha uzun |
| **[SMILE](/tedaviler/smile)** | Daha küçük kesi, kuru göz şikayeti az | Bazı reçetelerde uygun değil |
| **ICL** | Yüksek diyoptri için, kornea dokunulmaz | İntraoküler bir prosedür |
| **Gözlük/Kontakt lens** | Cerrahi gerektirmez | Kalıcı çözüm değil |

> 💡 **İpucu:** Sporcu, askeri personel veya travmaya açık meslek mensupları için **PRK** veya **SMILE** çoğunlukla LASIK'tan daha uygundur. Flap olmadığı için sportif aktivitelerde travma riskini ortadan kaldırır.

## Risk ve Komplikasyonlar

Modern LASIK güvenli kabul edilen bir prosedürdür ancak risk içermez değildir:

- **Geçici kuru göz** — en sık görülen yan etki (haftalar-aylar sürebilir)
- Gece görüşünde halo (ışık halkası) veya glare (parlama)
- Hafif rahatsızlık, yanma hissi
- Az sayıda hastada **yetersiz düzeltme** veya **aşırı düzeltme** — gözlük veya tamamlayıcı işlem gerekebilir
- Flap komplikasyonları (femtosaniye lazer ile çok nadir)
- Ektazi (uygun olmayan adayda)

## Hekim ve Cihaz Seçimi

Sonucu doğrudan etkileyen faktörler:

- **Hekimin Göz Hastalıkları (Oftalmoloji) uzmanlığı**
- Refraktif cerrahi konusunda **deneyim ve fellowship**
- Türk Oftalmoloji Derneği (TOD) üyeliği
- Cihaz markası ve modelinin onaylı ve güncel olması (Zeiss VisuMax, WaveLight EX500 vb.)
- Yeterli ön-değerlendirme protokolü (pakimetri + topografi + kuru göz testleri)

> 👉 [Göz hastalıkları doktorları listesinden](/branslar/goz-hastaliklari) refraktif cerrahi deneyimi olan hekimleri inceleyebilirsiniz. Türkiye'de **İstanbul, Antalya ve İzmir** gibi büyük şehirlerde modern cihazlarla donatılmış göz klinikleri yoğundur.

## Operasyon Sonrası

İşlem genellikle damla anestezi ile, ayakta tedavi olarak yapılır. Her göz için 10-15 dakika sürer.

| Dönem | Beklenen |
|---|---|
| İlk 24 saat | Hafif yanma, sulanma, ışığa hassasiyet. Koruyucu gözlük takılır. Dinlenme önerilir. |
| 2-7. gün | Ofis işine dönüş çoğunlukla mümkün. Damla protokolü uygulanır. |
| 1. ay | Görme kalitesi stabilize olur. Gece görüş halo/glare azalır. |
| 1-3. ay | Geç dönem kuru göz şikayeti olabilir; yapay gözyaşı kullanımı yardımcı olur. |

## Sık Sorulan Sorular

### LASIK'tan sonra gözlük kullanmak gerekir mi?

Çoğu hastada gözlüğe duyulan ihtiyaç belirgin biçimde azalır veya tamamen ortadan kalkar. Ancak yaşa bağlı **presbiyopi** (yakın görüş bozukluğu, genellikle 40+) gelişimi LASIK'le önlenmez; bu durumda yakın gözlük gerekebilir.

### Operasyondan sonra spor yapabilir miyim?

Yürüyüş 1-2 günde, hafif egzersiz 1 haftada, kontakt sporlar (boks, dövüş sanatları) **en az 1 ay** sonra önerilir. Yüzme 2-3 hafta beklenmelidir.

### LASIK sonrası numara geri geliyor mu?

Çoğu hastada sonuçlar uzun ömürlüdür. Az sayıda hastada birkaç yıl içinde minimal regresyon olabilir. **Presbiyopi** (yaş bağımlı yakın görüş bozukluğu) ayrı bir konudur ve LASIK'le önlenmez.

### Iki gözü aynı gün yapmak güvenli mi?

Modern uygulamada iki göz **aynı seansta** yapılır ve güvenli kabul edilir. Bazı hekimler hasta tercihi veya özel durumlarda iki seansa bölmeyi tercih edebilir.

### LASIK ile SMILE arasındaki fark nedir?

[SMILE](/tedaviler/smile) flap oluşturmaz, küçük bir kesi ile yapılır. LASIK'a göre kuru göz şikayeti daha az olabilir. Ancak her hasta için uygun değildir; teknik seçim hekim değerlendirmesine bağlıdır.

---

LASIK kararı; kornea analizi, kuru göz değerlendirmesi ve hekim deneyimini içeren detaylı bir değerlendirme süreci gerektirir. Bu yazı genel bilgilendirme niteliğindedir; bireysel uygunluk için göz hastalıkları uzmanına başvurunuz.`,
    heroImageAlt: "LASIK göz ameliyatı muayenesi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["lasik", "smile"],
    relatedSpecialtySlugs: ["goz-hastaliklari"],
    sources: [
      {
        title: "FDA's LASIK Program",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/medical-devices/lasik/fdas-lasik-program",
      },
      {
        title: "Laser Eye Surgery and Lens Surgery",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/tests-and-treatments/laser-eye-surgery-and-lens-surgery/",
      },
    ],
  },

  {
    slug: "botoks-etki-suresi-yenileme",
    title: "Botoks Ne Kadar Süre Etkili Kalır? Yenileme Aralığı",
    excerpt:
      "Botulinum toksin uygulamasının etki süresi, yenileme aralığı, kasa direnç oluşumu ve uygulama bölgelerine göre değişkenlikler.",
    bodyMd: `[Botoks (botulinum toksin tip A)](/tedaviler/botoks), mimik kaslarına yapılan enjeksiyonla kasların kasılma gücünü **geçici olarak** azaltarak yüzdeki dinamik çizgilerin görünümünü hafifletir. Etki **kademeli olarak başlar ve kademeli olarak azalır**.

> 📌 Bu yazı [dermatoloji](/branslar/dermatoloji) branşı kapsamındaki estetik uygulamalar için bilgilendirmedir. Botoks dışında [dolgu](/tedaviler/dolgu), [mezoterapi](/tedaviler/mezoterapi), [HIFU](/tedaviler/hifu) ve [fraksiyonel lazer](/tedaviler/fraksiyonel-lazer) gibi tamamlayıcı uygulamalar da değerlendirilebilir.

## Etki Ne Zaman Başlar?

- Enjeksiyondan **3-7 gün** sonra etki belirgin olarak hissedilir
- **10-14 gün** içinde tam etki yerleşir
- Bu süreçte kasılma yavaş yavaş azalır; bazı asimetriler ilk birkaç günde geçer

İlk kez botoks olan kişilerde etki ileri uygulamalardan biraz farklı olabilir; metabolizma ve kas yoğunluğu kişiseldir.

## Etki Ne Kadar Sürer?

- **3-6 ay** arası, ortalama 4 ay
- Bireysel değişkenlikleri etkileyen faktörler:
  - Yaş ve cilt kalitesi
  - **Kas kütlesi ve aktivitesi** (yoğun mimik kullanan kişilerde daha kısa)
  - Metabolik hız
  - Uygulanan doz ve nokta sayısı
  - Hekim deneyimi ve teknik
  - Düzenli spor yapan kişilerde etki süresi kısalabilir

> 💡 **Bilgi:** Profesyonel sporcu veya yoğun antrenman yapan kişilerde botoks etkisi 2-3 aya düşebilir. Sedanter bireylerde ise 5-6 aya kadar uzayabilir.

## Yenileme Aralığı

Çoğu hasta için ideal yenileme aralığı **3-6 ay**dır. Erken yenileme önerilmez çünkü:

- Çok sık doz, kasta **direnç (antikor)** gelişme riskini teorik olarak artırabilir
- Vücudun ürüne karşı yanıt oluşturma olasılığı (nadiren etkilenir ama izlenir)

### Genel yaklaşım

- İlk 2-3 uygulama 4 ay arayla
- Sonraki yıllarda etki süresi uzayabilir (kas alıştığı için)
- Bazı hastalarda yılda 2 uygulama yeterlidir

> ⚠️ **Uyarı:** "Etki kısa sürdü, hemen yenileyelim" yaklaşımı yanlıştır. Önce **etki süresinin neden kısaldığı** değerlendirilmelidir (yetersiz doz, yanlış teknik, kas yoğunluğu vb.).

## Hangi Bölgelere Uygulanır?

### Estetik Endikasyonlar

- **Alın çizgileri** (frontalis kası)
- **Kaş arası (glabella)** — "çatık kaş" çizgisi
- **Göz çevresi (kaz ayakları)**
- **Kaş kaldırma (kimyasal browlift)** — yüksek dozda hekim deneyimi gerektirir
- **Boyun bantları (platizma)**
- **Çene köşesi (masseter)** — diş gıcırdatma, çene daraltma

### Tıbbi Endikasyonlar

- **Aşırı terleme (hiperhidroz)** — koltuk altı, el ayası
- **Kronik migren** — nöroloji uzmanı tarafından, belirli bir protokolle
- Strabismus (şaşılık), blefarospazm
- Sialore (salya artışı)

## Kimler İçin Uygun Değildir?

> ⚠️ **Mutlak kontrendikasyonlar:**

- **Hamilelik ve emzirme dönemi**
- Miyastenia gravis, Lambert-Eaton sendromu gibi nöromüsküler hastalıklar
- Botulinum toksine bilinen alerji
- Enjeksiyon bölgesinde aktif enfeksiyon
- Belirli ilaç etkileşimleri (aminoglikozit antibiyotikler, kas gevşeticiler)

## Risk ve Komplikasyonlar

- Enjeksiyon bölgesinde kızarıklık, hassasiyet, hafif morluk
- Geçici baş ağrısı (özellikle ilk uygulamada)
- **Geçici göz kapağı düşmesi (pitozis)** — nadir, uygulayıcı deneyimi ile minimize edilir
- Asimetrik etki (genellikle 2 hafta içinde dengelenir)
- Çok nadir alerjik reaksiyonlar

## Uygulamadan Sonra Yapılmaması Gerekenler

İlk 4-6 saat önemlidir:

- Uzanmak veya yüzükoyun yatmak yasak (toksinin yanlış yere göçmesi riski)
- Enjeksiyon noktalarını ovuşturmamak
- Ağır spor, sauna ve hamamdan uzak durmak
- Alkol tüketmemek
- Yüz masajı yaptırmamak

## Doğru Uygulayıcı Seçimi

> 🚨 **Kritik uyarı:** Türkiye'de **hekim olmayan kişilerin botoks/dolgu uygulaması yasaktır**. Güzellik salonları, kuaförler ve estetisyenler bu işlemi yapma yetkisine sahip değildir. Yetkisiz uygulayıcılar hem yasal hem tıbbi açıdan ciddi risk doğurur.

Doğru uygulayıcının özellikleri:

- **Tıp doktoru** olmalı (dermatoloji, plastik cerrahi veya tıp diploması)
- Onaylı (FDA / CE / Sağlık Bakanlığı) ürün kullanmalı
- Tıbbi tesis ortamında uygulanmalı
- Yazılı bilgilendirme + risk onamı şart
- Ürün kutusu hastaya gösterilmeli (orijinallik garantisi)

> 👉 [Dermatologlar listesinden](/branslar/dermatoloji) deneyimli uygulayıcıları bulabilirsiniz. [Estetik cerrahi](/branslar/estetik-cerrahi) uzmanları da botoks uygulayabilir.

## Botoks ile Dolgu Farkı

Bu iki uygulama sık karıştırılır ancak farklıdır:

| Konu | Botoks | [Dolgu](/tedaviler/dolgu) |
|---|---|---|
| Etken madde | Botulinum toksin tip A | Genellikle hyaluronik asit |
| Mekanizma | Kas aktivitesini azaltır | Hacim ekler, çizgiyi doldurur |
| Hedef | Dinamik çizgiler (mimik kaynaklı) | Statik çizgiler, hacim kaybı |
| Etki süresi | 3-6 ay | 6-18 ay |
| Etki başlangıcı | 3-14 gün | Anında |

Genellikle birbirini tamamlar — botoks dinamik çizgiler için, dolgu hacim kaybı için tercih edilir.

## Sık Sorulan Sorular

### Botoks bağımlılık yapar mı?

Hayır. Botoks etken maddesi vücutta birikmez ve süresi dolunca kasın eski işlevi geri döner. Tekrarlı uygulama hastanın kişisel tercihidir; cilt etkisi açısından bağımlılık tanımı geçersizdir.

### Ne zaman ilk uygulamayı düşünmeliyim?

Sabit bir yaş yoktur. Dinamik çizgiler kalıcı statik çizgiler hâline gelmeye başladığında profilaktik olarak değerlendirilebilir. Konsültasyonda hekim önerisi kişiye göre verilir. Genellikle 25-35 yaş aralığında başlanır.

### Botoks yüzü dondurur mu?

Doğru doz ve teknikle uygulandığında **yüz ifadesi korunur**. Aşırı doz veya yanlış noktaya enjeksiyon "donmuş" görünüm yaratır. Bu nedenle deneyimli hekim seçimi kritik önemdedir.

### Hangi bölgelere uygulanmaz?

Gözün hemen altı (alt göz kapağı kası) ve dudak çevresi gibi bölgelerde özel doz ve teknik gerektirir; deneyimsiz uygulamada işlevsel sorun olabilir. Mutlaka uzman tarafından yapılmalıdır.

### Botoks ile saç ekimi/diş tedavisi gibi başka operasyon birleşik yapılabilir mi?

Genellikle 2 hafta kuralı uygulanır. Cerrahi öncesi ve sonrası 2 hafta botoks ertelenir.

---

Botoks bireysel ihtiyaçlara göre planlanmalıdır. Bu yazı genel bilgilendirme niteliğindedir; uygulama kararınız için bir [dermatoloji](/branslar/dermatoloji) veya [plastik cerrahi](/branslar/estetik-cerrahi) uzmanına başvurunuz.`,
    heroImageAlt: "Botoks uygulaması",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["botoks", "dolgu", "mezoterapi", "hifu"],
    relatedSpecialtySlugs: ["dermatoloji", "estetik-cerrahi"],
    sources: [
      {
        title: "Botulinum Toxin Type A — Patient Information",
        publisher: "American Academy of Dermatology",
        url: "https://www.aad.org",
      },
    ],
  },

  {
    slug: "saglik-turizmi-nelere-dikkat",
    title: "Türkiye'de Sağlık Turizmi: Nelere Dikkat Edilmeli?",
    excerpt:
      "Yurt dışından sağlık hizmeti almak için Türkiye'yi tercih edenlerin klinik ve hekim seçiminde dikkat etmesi gereken kritik kriterler.",
    bodyMd: `Türkiye, son yıllarda [saç ekimi](/tedaviler/sac-ekimi), [diş tedavisi](/tedaviler/dis-implanti), [estetik cerrahi](/branslar/estetik-cerrahi), [göz lazeri](/tedaviler/lasik) ve [tüp bebek](/tedaviler/tup-bebek) gibi alanlarda yoğun uluslararası hasta trafiği almaktadır. Doğru klinik ve hekim seçimi; hem güvenli tedavi hem de gerçekçi sonuçlar açısından kritiktir.

> 📌 Türkiye'nin en yoğun sağlık turizmi şehirleri: [İstanbul](/istanbul), [Antalya](/antalya), [Ankara](/ankara) ve [İzmir](/izmir). Her ilin kendine özgü güçlü alanı vardır — örneğin İstanbul saç ekimi, Antalya diş tedavisi öne çıkar.

## Klinik Seçiminde Kontrol Edilmesi Gerekenler

### 1. Yetki Belgeleri ve Akreditasyonlar

- **USHAŞ (Uluslararası Sağlık Hizmetleri A.Ş.) yetki belgesi** — Türkiye'de sağlık turizmi yapan kuruluşlar için zorunludur
- **Sağlık Bakanlığı ruhsatı** — klinik veya hastane için
- **JCI (Joint Commission International)** akreditasyonu — uluslararası hasta güvenliği standardı
- **Temos International** veya **ISO 9001:2015** sertifikaları
- **TÜRSAB sağlık turizmi acente** kaydı (acente üzerinden geliyorsanız)

### 2. Hekim Profili

- Hekimin **Türk Tabipleri Birliği (TTB) sicil numarası**
- İlgili branş uzmanlık derneği üyeliği:
  - [Estetik cerrahi](/branslar/estetik-cerrahi): TPRECD, ISAPS, ASPS
  - [Saç ekimi](/branslar/sac-ekimi): ISHRS
  - [Diş hekimliği](/branslar/dis-hekimligi): TDB, ITI
  - [Göz](/branslar/goz-hastaliklari): TOD, ESCRS
- Mesleki yayın ve sunum geçmişi (PubMed, Google Scholar)
- Yabancı dil yeterliliği (size sunulan hizmet dili)

> 👉 [TPRECD/ISAPS/ASPS sertifikaları gerçekten ne anlama gelir?](/blog/tprecd-isaps-sertifika-anlami) — Detaylı analiz blog yazımızda.

### 3. İletişim Kalitesi

- **Yazılı, ayrıntılı tedavi planı** ve fiyat teklifi
- Risk + komplikasyon bilgilendirmesi (yazılı, dilinizde)
- Operasyon sonrası takip planı
- 7/24 ulaşılabilir hasta koordinatörü
- Şikayet ve geri bildirim mekanizması

## Dikkat Edilmesi Gereken "Kırmızı Bayraklar"

> 🚨 **Aşağıdaki durumlar varsa uzaklaşın:**

- ❌ Garantili sonuç vaadi ("%X başarı", "kesin sonuç")
- ❌ Aşırı düşük fiyat ("piyasanın yarısı") — kalitesiz malzeme/deneyimsiz hekim göstergesi olabilir
- ❌ Aynı gün karar baskısı, "bugüne özel indirim"
- ❌ Tek seans çok operasyon vaadi ([saç ekimi](/tedaviler/sac-ekimi) + [diş](/tedaviler/dis-implanti) + estetik bir günde)
- ❌ Web sitesinde hekim adı, sicil no, ruhsat bilgisi yok
- ❌ "Tedaviye ücretsiz uçuş + 5 yıldızlı otel + transfer" paketinin ana hizmet kalemi hastaneden çok pazarlamaya odaklı
- ❌ Öncesi-sonrası fotoğrafların yoğun kullanımı (Türkiye'de yurtiçi tüketiciye yasak)
- ❌ Sosyal medya influencerlarına dayalı pazarlama
- ❌ Yazılı bilgilendirme yapılmıyor, sözlü vaat veriliyor

## Pratik Hazırlık Listesi

### Yola Çıkmadan Önce

- ✅ Mevcut tüm tıbbi raporlarınızın (kan testi, görüntüleme, ilaç listesi) İngilizce/Türkçe kopyası
- ✅ Kullandığınız ilaç ve takviyelerin tam listesi
- ✅ Alerji öyküsü
- ✅ Acil durum iletişim bilgileri
- ✅ Seyahat sigortası ve tıbbi sigorta poliçeleri (kapsam: tedavi komplikasyonu, geri dönüş tıbbi tahliye)
- ✅ Geçerli pasaport + e-Visa (varsa)
- ✅ Hekimin tam adı + sicil numarası + klinik adresi yazılı doğrulanmış

### Operasyon Öncesi (Türkiye'de)

- ✅ Yüz yüze hekim muayenesi (Skype/Zoom yerine fizik muayene)
- ✅ Yazılı bilgilendirilmiş onam (Türkçe + sizin dilinizde)
- ✅ Anestezi konsültasyonu (cerrahi prosedürlerde)
- ✅ Beklenti çerçevesinin netleştirilmesi
- ✅ Operasyon sonrası takip programının yazılı paylaşılması

### Operasyon Sonrası

- ✅ Uçuş yasak süresinin teyit edilmesi ([saç ekimi](/tedaviler/sac-ekimi) 2-3 gün, [rinoplasti](/tedaviler/rinoplasti) 5-7 gün, [karın germe](/tedaviler/karin-germe) 10-14 gün vb.)
- ✅ Türkiye'deki acil müdahale planı (komplikasyon olursa hangi hastaneye)
- ✅ Ülkenize döndüğünüzde takip edecek bir hekim iletişim bilgisi
- ✅ Sevkiyat: ilaç + post-op talimat dokümanları + iletişim bilgileri

## Tedavi Türüne Göre Türkiye'de Öne Çıkanlar

### Saç ekimi

İstanbul küresel ölçekte en yoğun [saç ekimi](/tedaviler/sac-ekimi) merkezi. FUE, DHI, Sapphire FUE teknikleri yaygın. Detaylı bakım rehberi için: [Saç ekimi sonrası bakım](/blog/sac-ekimi-sonrasi-bakim-rehberi).

### Diş tedavisi

[Diş implantı](/tedaviler/dis-implanti) ve [All-on-4](/tedaviler/all-on-4) için Antalya, İstanbul ve İzmir öne çıkıyor. Detaylı süreç: [Diş implantı rehberi](/blog/dis-implanti-surec-rehberi).

### Estetik cerrahi

[Rinoplasti](/tedaviler/rinoplasti), [meme büyütme](/tedaviler/meme-buyutme), [karın germe](/tedaviler/karin-germe) gibi operasyonlar için İstanbul en yoğun. Aday değerlendirmesi: [Rinoplasti öncesi kim aday?](/blog/rinoplasti-oncesi-kim-aday).

### Göz lazer

[LASIK](/tedaviler/lasik) ve [SMILE](/tedaviler/smile) için İstanbul ve İzmir modern cihazlarla donatılmış merkezlere sahip. Aday kriterleri: [LASIK için ideal aday kim?](/blog/lasik-aday-kornea-kalinligi).

### Tüp bebek

[Tüp bebek (IVF)](/tedaviler/tup-bebek) merkezleri Sağlık Bakanlığı yönetmeliklerine tabi. İstanbul ve Ankara büyük merkez.

## Sağlık Turizmi Mevzuatı

Türkiye'de sağlık turizmi yapan kuruluşların **USHAŞ tarafından yetkilendirilmesi zorunludur**. Yetkisiz aracılarla çalışmak hem yasal risk hem de hizmet kalitesi açısından sorunlu olabilir.

## Şikayet ve İtiraz

- Sağlık Bakanlığı CİMER, ALO 184 hattı
- USHAŞ resmi başvuru kanalı
- Konsolosluk / büyükelçilik desteği (yabancı hasta için)
- Türkiye Barolar Birliği — gerekiyorsa hukuki danışmanlık

## Sık Sorulan Sorular

### Türkiye'de tedavi gerçekten daha mı ucuz?

Evet, Türkiye birçok ülkeye göre %30-70 daha düşük fiyat sunar. Ancak "en ucuz" değil "en doğru fiyat-kalite dengesi" aranmalıdır. Aşırı düşük teklifler kalite kaybı işareti olabilir.

### Türkçe bilmeden tedavi olabilir miyim?

Evet. Büyük şehirlerdeki uluslararası kuruluşlar (Acıbadem, Memorial, Medical Park, Liv vb.) İngilizce + Arapça + Rusça + Almanca dil desteği sunar. Tercüman koordinatör atanır.

### Komplikasyon olursa ne yaparım?

USHAŞ kapsamındaki kuruluşlar bu durumlar için protokol uygulamak zorundadır. Tedavi öncesi mutlaka komplikasyon planını yazılı isteyin. Plus özel **medical complications insurance** poliçesi alabilirsiniz.

### Ne kadar süre Türkiye'de kalmalıyım?

Tedaviye göre değişir:
- Saç ekimi: 2-4 gün
- Diş tedavisi: 5-14 gün (kompleks vakalarda 2 ziyaret)
- LASIK: 2-3 gün
- Rinoplasti / büyük cerrahi: 7-14 gün
- All-on-4: 5-7 gün ilk seans + 4 ay sonra son seans

---

Türkiye'de uluslararası standartlarda hizmet veren çok sayıda kurum vardır; ancak ülke seçiminin kalitesi tek başına yeterli değildir — **kurum ve hekim seçimi** kararı belirleyicidir. Bu yazı genel bilgilendirme niteliğindedir; bireysel tıbbi kararlar için **yüz yüze hekim muayenesi** şarttır.`,
    heroImageAlt: "Türkiye sağlık turizmi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["sac-ekimi", "dis-implanti", "rinoplasti", "lasik", "tup-bebek"],
    relatedSpecialtySlugs: ["estetik-cerrahi", "dis-hekimligi", "sac-ekimi", "goz-hastaliklari"],
    sources: [
      {
        title: "USHAŞ — Uluslararası Sağlık Hizmetleri A.Ş.",
        publisher: "T.C. Sağlık Bakanlığı",
      },
      {
        title: "JCI Accreditation",
        publisher: "Joint Commission International",
      },
    ],
  },

  {
    slug: "tprecd-isaps-sertifika-anlami",
    title: "Estetik Cerrahide TPRECD / ISAPS Sertifikalarının Anlamı",
    excerpt:
      "Türk Plastik Cerrahi Derneği ve uluslararası dernek üyeliklerinin neyi gösterdiği ve neyi göstermediği üzerine bilgilendirme.",
    bodyMd: `[Estetik cerrahi](/branslar/estetik-cerrahi) planlayan hastalar, hekimin "üye olduğu derneklere" sık sık dikkat eder. Bu yazıda **TPRECD**, **ISAPS** ve **ASPS** gibi sıkça karşılaşılan dernek üyeliklerinin ne anlama geldiğini ve hekim seçiminde nasıl yorumlanması gerektiğini açıklıyoruz.

> 📌 Bu yazı [rinoplasti](/tedaviler/rinoplasti), [meme büyütme](/tedaviler/meme-buyutme), [yüz germe](/tedaviler/yuz-germe) gibi estetik cerrahi operasyonları planlayan hastalar için hekim seçim kriterlerini netleştirir. [Saç ekimi](/tedaviler/sac-ekimi) için ISHRS bölümüne, [diş hekimliği](/branslar/dis-hekimligi) için TDB/ITI bölümüne odaklanın.

## TPRECD (Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği)

**Üyelik kriterleri:**

- Plastik, Rekonstrüktif ve Estetik Cerrahi uzmanlık eğitimini tamamlamış olmak
- Tıp Fakültesi mezunu + 5 yıllık uzmanlık eğitimi (toplam 11 yıl)
- TTB sicilli aktif hekim olmak
- Derneğin etik kurallarını kabul etmek

> ✅ **Üyelik şunu gösterir:** Hekim, Plastik Cerrahi uzmanıdır ve etik kurallar çerçevesinde uygulama yapar.

> ⚠️ **Üyelik şunu göstermez:** Tek başına belirli bir prosedürdeki **deneyim sayısını** veya **başarı oranını** kanıtlamaz. Üyelik, "uzmanlık + meslek örgütüne dahil olma" göstergesidir; ayrıca **revizyon vaka deneyimi** gibi alt-uzmanlık seviyesinde detaylı bilgi sağlamaz.

## ISAPS (International Society of Aesthetic Plastic Surgery)

**Üyelik kriterleri:**

- Kendi ülkesindeki Plastik Cerrahi uzmanlık belgesinin tanınmış olması
- Mesleki yayın, eğitim, dernek aktivitesi
- Mevcut ISAPS üyelerinden referans
- Etik kurallara bağlılık

> ✅ **Üyelik şunu gösterir:** Hekim uluslararası seviyede tanınan bir profesyonel ağa dahil; uluslararası kongre, eğitim ve yayın çalışmalarına katılım gösteriyor.

> ⚠️ **Üyelik şunu göstermez:** ISAPS akademik bir dernektir, sertifika kurumu değildir; **klinik başarı oranı** veya **belirli teknik konusunda yetkinlik** doğrudan ölçülmez.

## ASPS (American Society of Plastic Surgeons)

ABD merkezli, en eski plastik cerrahi derneklerinden biri. Üyelik için **ABD board-certified plastic surgeon** olma zorunluluğu vardır.

Türkiye'deki hekimler için doğrudan ASPS tam üyeliği nadiren mümkündür; "international member" statüsü olabilir. ASPS web sitesinde "Find a Surgeon" aracı doğrulama amaçlı kullanılabilir.

## ISHRS (International Society of Hair Restoration Surgery)

[Saç ekimi](/tedaviler/sac-ekimi) alanında uluslararası referans dernek. Üyelik:

- Diploma + saç ekimi cerrahisinde eğitim/deneyim
- Mevcut üyelerden referans
- Etik kurallar

ISHRS üyeliği, **saç ekimi konusunda uluslararası standartlara bağlılık** sinyalidir. Türkiye'de saç ekimi yapan hekimlerin ISHRS üyeliği önemli bir tercih sebebidir.

> 👉 [Saç ekimi yapan doktorları incelerken](/branslar/sac-ekimi) ISHRS üyeliğini ekstra güven göstergesi olarak değerlendirin.

## ITI (International Team for Implantology)

[Diş implantı](/tedaviler/dis-implanti) alanında uluslararası dernek; üyelik:

- Diş hekimi olmak
- İmplantoloji eğitim/sertifika
- Düzenli ITI kursları katılım

ITI üyesi diş hekimleri, implant materyallerinin standartları ve protokolleri konusunda **uluslararası güncel bilgilere erişimli** olduklarını gösterir. Detaylar: [Diş implantı rehberi](/blog/dis-implanti-surec-rehberi).

## Dernek Üyeliği Tek Başına Yeterli mi?

Hayır. Dernek üyeliği **gerekli ama yeterli değil** bir kriterdir. Hekim seçiminde dikkate alınması gereken diğer faktörler:

- **TTB sicil numarası** — kanun gereği aktif çalışma yetkisi
- **Uzmanlık alanı** (genel cerrahi ≠ plastik cerrahi; göz hastalıkları ≠ refraktif cerrahi alt-uzmanlığı)
- **Çalıştığı kurumun ruhsatı** — Sağlık Bakanlığı SHGM
- **Belirli prosedürdeki deneyim** — kaç vaka, ne kadar süredir
- **Revizyon vaka deneyimi** — komplikasyon yönetimi yeteneği
- **Hekimin sunduğu yazılı bilgilendirme** kalitesi
- **Operasyon sonrası takip** planı

## Doğrulama Nasıl Yapılır?

| Bilgi | Doğrulama Kaynağı |
|---|---|
| Tıp diploması | YÖK Diploma Sorgulama |
| TTB sicil | İlgili Tabip Odası (kişisel veri kısıtları çerçevesinde) |
| Uzmanlık belgesi | Sağlık Bakanlığı Doktor Bilgi Bankası (e-Devlet) |
| Çalıştığı kurum ruhsatı | SHGM Kurum Ruhsat Sorgulama |
| TPRECD üyeliği | plastikcerrahi.org.tr |
| ISAPS / ASPS | isaps.org / plasticsurgery.org |
| ISHRS | ishrs.org |

> 💡 **İpucu:** Bilgileri doğrulamak için hekimin web sitesindeki sicil bilgilerini ilgili kurumda **kişisel olarak teyit edin**. Doğrulanamayan bilgilerle "ünvan inflasyonu" yaratan profilden uzak durun.

## Pazarlama vs. Kanıt

> 🚨 Bazı hekim/klinik web sitelerinde "uluslararası akademisyen", "dünya çapında uzman" gibi belirsiz ifadeler kullanılır. Bu ifadeler doğrulanabilir bir kaynak (dernek üyelik no, yayın listesi, sertifika kodu) ile desteklenmiyorsa pazarlama dilidir, kanıt değildir.

Güvenilir bir hekim profilinde aşağıdakiler **somut** olarak yer alır:

- TTB sicil numarası
- Mezuniyet yılı + uzmanlık yılı + kurum
- Dernek üyelik numaraları (varsa)
- Yayın listesi (PubMed link)
- Hangi prosedürlerde hangi tekniği kullandığı

## Sahte Sertifikalar Konusunda Uyarı

Bazı sahte/kalitesiz "sertifika programları" mevcuttur. Bunlar genellikle:

- Birkaç günlük online kursla "sertifika" verir
- Uluslararası tanınırlığı yoktur
- Akademik veya etik denetimden geçmez
- "Botoks Sertifika Programı", "Estetik Hekimi Sertifikası" gibi belirsiz isimlerle pazarlanır

Bu tür sertifikaları profil sayfasında öne çıkaran hekimler — **gerçek uzmanlık eksikliğini örtmeye** çalışıyor olabilir. TPRECD/ISAPS/ASPS/ISHRS gibi köklü derneklerin üyelik referansı çok daha güvenilirdir.

## Sık Sorulan Sorular

### Bir hekimin birden fazla dernek üyeliği olması iyi mi?

Genel olarak evet, ancak nicelik değil **nitelik** önemlidir. 1 köklü dernek (TPRECD, ISAPS) üyeliği, 5 belirsiz "estetik kurs" sertifikasından çok daha değerlidir.

### "Profesör" unvanı garanti midir?

Profesörlük akademik bir unvandır, klinik beceri ile doğrudan orantılı olmayabilir. Bazı en iyi cerrahlar akademik kariyer yapmamıştır; bazı profesörler estetik cerrahide aktif uygulayıcı değildir. **Operatif vaka deneyimini ayrıca sorun.**

### Hekim "İngiltere'de fellowship yaptım" diyor — bu önemli mi?

Önemli olabilir ancak fellowship'in hangi kurumda, ne süre, hangi alanda olduğu açıkça belirtilmelidir. Belgeyi göstermesini isteyin.

### Birden fazla hekim görüşü almak mantıklı mı?

Evet, çok güçlü bir öneridir. Büyük operasyonlar (rinoplasti, meme büyütme, karın germe) için **en az 2-3 hekim** görüşü alın. Yaklaşım farkları, sizin için doğru cerrahı bulmaya yardımcı olur.

### Türkiye'de plastik cerrahi yapamayanlar kim?

Plastik cerrahi uzmanı olmayan hekimler (KBB, dermatoloji vb.) bazı "estetik" işlemleri yapabilirler ama büyük cerrahi (rinoplasti, meme, karın germe) için **plastik cerrahi uzmanı** olmalıdır. Bu, hem etik hem yasal bir gerekliliktir.

---

Hekim ve klinik seçimi tek bir kritere değil, **birden fazla doğrulanabilir göstergeye** dayanmalıdır. Bu yazı genel bilgilendirme niteliğindedir; bireysel hekim seçim kararınızda yüz yüze görüşme ve birden fazla görüş almak önerilir.`,
    heroImageAlt: "Plastik cerrahi sertifikası",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["rinoplasti", "yuz-germe", "meme-buyutme", "sac-ekimi", "dis-implanti"],
    relatedSpecialtySlugs: ["estetik-cerrahi", "sac-ekimi", "dis-hekimligi"],
    sources: [
      {
        title: "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği",
        publisher: "TPRECD",
        url: "https://www.plastikcerrahi.org.tr",
      },
      {
        title: "International Society of Aesthetic Plastic Surgery",
        publisher: "ISAPS",
      },
      {
        title: "American Society of Plastic Surgeons",
        publisher: "ASPS",
        url: "https://www.plasticsurgery.org",
      },
    ],
  },

  {
    slug: "sac-ekimi-fue-dhi-safir-robotik-karsilastirma",
    title: "FUE, DHI, Safir ve Robotik Saç Ekim Yöntemleri: Detaylı Karşılaştırma",
    excerpt:
      "Türkiye'de en yaygın 4 saç ekim yöntemi — teknik farklar, iyileşme süresi, greft kapasitesi, kim için uygun?",
    bodyMd: `[Saç ekimi](/tedaviler/sac-ekimi) operasyonunda kullanılan teknik, sonucun doğallığını, iyileşme süresini ve donör alanın korunmasını doğrudan etkiler. Türkiye'de en yaygın olarak uygulanan dört yöntem **FUE (Follicular Unit Extraction)**, **DHI (Direct Hair Implantation)**, **Safir FUE** ve **Robotik FUE**'dir. Bu yazıda her tekniğin nasıl uygulandığını, hangi vakada öne çıktığını ve aday kriterlerini ayrıntılı olarak ele alıyoruz.

> 📌 Bu yazı [saç ekimi branşı](/branslar/sac-ekimi) altındaki teknik seçimlerine yönelik bilgilendirmedir. Operasyon sonrası bakım için: [Saç ekimi sonrası 7-30. gün bakım rehberi](/blog/sac-ekimi-sonrasi-bakim-rehberi).

## Saç Ekiminin Temel Mantığı

Tüm modern saç ekim teknikleri **folliküler ünite transplantasyonu** prensibine dayanır. Saç dökülmesine dirençli donör alandan (ense ve şakaklar) tek tek alınan saç kökleri (greft), seyrelmiş veya kelleşmiş bölgeye (alıcı saha) nakledilir. Teknikler arasındaki farklar; greftin nasıl alındığı, nasıl saklandığı ve alıcı bölgeye nasıl yerleştirildiği aşamalarında ortaya çıkar.

> ℹ️ **Greft nedir?** Bir greft, içinde 1-4 saç teli barındıran küçük bir doku ünitesidir. Saçların doğal kümeleşme yapısı korunarak alındığında, ekilen saçlar doğal görünür.

## FUE (Follicular Unit Extraction)

FUE, günümüzde en yaygın saç ekim tekniğidir. 2000'li yıllarda gelişen mikro-motor sistemleriyle popülerlik kazanmıştır.

### Nasıl uygulanır?

1. Donör alan traş edilir ve lokal anestezi uygulanır
2. **0.6-1.0 mm çapında özel mikro-punch** uçlarla greftler tek tek çıkarılır
3. Çıkarılan greftler özel saklama solüsyonunda bekletilir
4. Alıcı bölgede **çelik veya safir uçla** kanallar açılır
5. Greftler kanallara penset ile yerleştirilir

### Avantajları

- Skar (dikiş izi) bırakmaz — sadece nokta şeklinde mikro izler
- İyileşme süresi nispeten kısa (10-14 gün)
- 3000-4500 greft tek seansta mümkündür (donör kapasitesine bağlı)
- Sakal/göğüs gibi farklı bölgelerden de greft alınabilir

### Sınırlamaları

- Donör alanın traş edilmesi gerekir (uzun saçlı kadın hastalar için dezavantaj)
- Cerrahın deneyimi sonucu çok etkiler
- Çok yüksek greft sayısında donör alan görsel olarak seyrekleşebilir

## DHI (Direct Hair Implantation)

DHI, **Choi Implanter Pen** adı verilen özel bir kalem yardımıyla greftin doğrudan alıcı bölgeye yerleştirildiği tekniktir. Kanal açma ve ekim aşamaları tek adımda birleşir.

### Nasıl uygulanır?

1. Donör alandan FUE ile greftler çıkarılır
2. Greftler **Choi pen** içine yüklenir
3. Kalem ile alıcı bölgeye **kanal açma ve yerleştirme aynı anda** yapılır
4. Açı, derinlik ve yön kalem ucundan kontrol edilir

### Avantajları

- Alıcı bölgede **traş gerekmeyebilir** (unshaven DHI tekniği)
- Greftin dış ortamda bekleme süresi daha kısa — teorik olarak greft canlılığı korunur
- Saç çıkış açısı ve yönü hassas kontrol edilir
- Mevcut saçların seyrek olduğu sıklaştırma vakalarında uygundur

### Sınırlamaları

- Tek seansta nakledilebilecek greft sayısı genellikle daha düşük (2000-3500)
- Operasyon süresi daha uzun
- Cerrahın ekip kalitesi sonucu büyük ölçüde belirler
- Kalem ucu maliyeti operasyon maliyetini etkiler

> 💡 **İpucu:** DHI özellikle [sakal ekimi](/tedaviler/sakal-ekimi) ve [kaş ekimi](/tedaviler/kas-ekimi) gibi yön ve açının kritik olduğu küçük bölgelerde tercih edilir.

## Safir FUE (Sapphire FUE)

Safir FUE, klasik FUE tekniğinin **çelik bistüri yerine safir (yapay kristal) uçlu bisturi** ile kanal açma aşamasında modifiye edilmiş halidir. Greft çıkarma adımı klasik FUE ile aynıdır.

### Avantajları

- Safir uçlar daha **keskin ve pürüzsüz kesi** oluşturur
- Açılan kanallar daha küçük çaplı olabilir → greftler arasında **daha sık ekim** mümkündür
- Doku travması teorik olarak daha az
- Kabuklanma süreci daha hızlı olabilir

### Sınırlamaları

- "Safir" bir teknik değil **bir uç malzemesidir** — temel FUE prensipleri aynıdır
- Cerrah deneyimi yine en kritik faktör
- Pazarlama dilinde "üstün teknik" şeklinde abartılı sunulabilir; gerçekte FUE'nin bir varyasyonudur

> ⚠️ **Dikkat:** "Safir FUE en iyi tekniktir" gibi mutlak ifadelere şüpheyle yaklaşın. Hangi tekniğin sizin için uygun olduğu, donör kapasitesi, alıcı saha özellikleri ve cerrahın bu teknikteki deneyimi gibi çok faktörlü bir değerlendirmenin sonucudur.

## Robotik FUE (ARTAS)

ARTAS sistemi, FUE greft çıkarımının **robotik kol ve görüntü işleme** ile yapıldığı teknolojidir. ABD'de FDA onayı 2011'de alınmıştır.

### Nasıl uygulanır?

1. Donör alan haritalanır, sistem her foliküler üniteyi tanımlar
2. Robotik kol **algoritma ile seçilen greftleri** çıkarır
3. Kanal açma ve ekim aşamaları manuel veya robotik destekli yapılır

### Avantajları

- Operatör yorgunluğundan bağımsız tutarlı greft çıkarımı
- Açı ölçümünde insan hatasını azaltır
- Donör alanda eşit dağılımlı greft seçimi

### Sınırlamaları

- Türkiye'de görece az merkezde mevcut
- Operasyon maliyeti diğer tekniklere göre yüksektir
- Yalnız belirli saç tipleri ve cilt renkleri için optimize edilmiştir (koyu saç + açık cilt kontrastı gerekli)
- Cerrah denetimi mutlaka gereklidir; robot tek başına çalışmaz

## Yöntemlerin Karşılaştırma Tablosu

| Kriter | FUE | DHI | Safir FUE | Robotik FUE |
|---|---|---|---|---|
| Greft çıkarma | Mikro-punch | Mikro-punch | Mikro-punch | Robotik kol |
| Kanal açma | Çelik uç | Choi pen ile birleşik | Safir uç | Manuel/robotik |
| Tipik seans kapasitesi | 3000-4500 | 2000-3500 | 3000-4500 | 2000-3500 |
| Alıcı bölge traşı | Genelde gerekir | Gerekmeyebilir | Genelde gerekir | Gerekir |
| Operasyon süresi | 6-8 saat | 8-10 saat | 6-8 saat | 7-9 saat |
| İyileşme | 10-14 gün | 10-14 gün | 7-12 gün | 10-14 gün |
| Cerrah bağımlılığı | Yüksek | Çok yüksek | Yüksek | Orta-yüksek |

> ℹ️ Bu tablo genel referans amaçlıdır. Süreler ve kapasiteler hekime, hasta anatomisine ve donör kalitesine göre değişir.

## Hangi Teknik Sizin İçin Uygun?

Doğru teknik kararı şu faktörlere bağlıdır:

- **Saç dökülme derecesi (Norwood / Ludwig skalası)** — ileri kelleşmede yüksek greft kapasitesi olan teknikler tercih edilir
- **Donör alan kalitesi** — yoğunluk, esneklik, saç teli kalınlığı
- **Saç tipi** — düz, dalgalı, kıvırcık (kıvırcık saçlarda greft çıkarımı daha zordur)
- **Yaş** — ilerleyici dökülme planlamasında uzun vadeli strateji şart
- **Hastanın yaşam tarzı** — operasyon sonrası dinlenme süresi tolere edebileceği kadar
- **Cerrahın deneyimi** — bu, teknikten bile önemlidir

> 💬 **Sıklaştırma vakalarında** (mevcut saçların arasına ekim) DHI öne çıkar; mevcut saçların hasar görme riskini azaltır. **İleri kelleşmede** (Norwood 5-7) FUE veya Safir FUE ile yüksek greft kapasiteli planlama daha sık tercih edilir.

## Kimler Saç Ekimi İçin Aday Olmayabilir?

- Saç dökülmesi henüz **stabilize olmamış** genç hastalar (18-22 yaş arası dikkat)
- **Aktif alopesi areata, sikatrisyel alopesi** gibi inflamatuar saç hastalıkları
- Donör alanı çok zayıf hastalar (yoğun seyrelme)
- Kontrolsüz diyabet, kanama bozukluğu, ağır sistemik hastalık
- Beden Dismorfik Bozukluk (BDD) veya gerçekçi olmayan beklentiler
- Aktif sigara kullanımı (operasyondan en az 2 hafta önce bırakılmalı)

> ⚠️ Saç dökülmesi devam ettiği sürece sadece ekim yapmak yeterli olmaz. Hekim, [PRP](/tedaviler/prp), finasterid veya minoksidil gibi destekleyici tedavileri de planlamaya dahil edebilir. Tüm bunlar bir [dermatolog](/branslar/dermatoloji) veya saç ekimi uzmanı değerlendirmesi gerektirir.

## Risk ve Komplikasyonlar

Tüm tekniklerde ortak risk profili vardır:

- Donör/alıcı bölgede geçici şişlik, kızarıklık, kabuklanma
- **Şok dökülmesi** — nakledilen tellerin geçici dökülmesi (3-4. ayda yeniden çıkar)
- Folikülit (kıl kökü iltihabı) — çoğunlukla tedavi edilebilir
- Donör alanda görünür seyrelme (yüksek greft sayısında)
- Düşük greft tutma oranı → revizyon ekim ihtiyacı
- Çok nadir: skar dokusu, alıcı bölgede kalıcı renk değişikliği

## Hekim Seçim Kriterleri

> 👉 [Saç ekimi yapan doktorları](/branslar/sac-ekimi) incelerken aşağıdaki noktalara dikkat edin:

- **TTB sicil numarası** ve aktif çalışma yetkisi
- Dermatoloji veya plastik cerrahi uzmanlığı (Türkiye'de ana branşlar)
- **ISHRS (International Society of Hair Restoration Surgery)** üyeliği
- Hangi teknikte kaç vaka deneyimi olduğu
- Sağlık Bakanlığı ruhsatlı klinik
- Operasyonun **hekim tarafından bizzat yapılması** (sadece teknisyen değil)
- Yazılı bilgilendirilmiş onam
- Operasyon sonrası takip programı

Detaylı sertifika ve dernek analizi için: [TPRECD / ISAPS sertifikalarının anlamı](/blog/tprecd-isaps-sertifika-anlami).

## Sık Sorulan Sorular

### Hangi teknik en doğal sonuç verir?

Doğallık tekniğe değil, **cerrahın açı, yön, sıklık ve dağılım planına** bağlıdır. Aynı teknik farklı cerrahlarda çok farklı sonuçlar verebilir.

### DHI mi FUE mi tercih edilmeli?

İkisi de farklı endikasyonlarda öne çıkar. Sıklaştırma + küçük alanlar için DHI; ileri kelleşme + büyük alan için FUE veya Safir FUE değerlendirilir. Karar konsültasyon sonrası verilmelidir.

### Robotik FUE Türkiye'de yaygın mı?

Kısıtlı sayıda merkezde mevcuttur. ARTAS sistemi ABD merkezli geliştirilmiştir; Türkiye'de erişim sınırlıdır. Robotik destek manuel FUE'ye göre dramatik bir avantaj sunmaz; cerrahın deneyimi yine kritiktir.

### Bir seansta kaç greft yapılabilir?

Donör kapasitesi ve hekim kararına göre tipik olarak 2000-4500 greft mümkündür. **5000+ greft** ("mega session") iddialarına şüpheyle yaklaşın — donör alanı tahrip etme riski vardır.

### İkinci operasyon ne zaman yapılabilir?

İlk operasyondan en az **8-12 ay** sonra, sonucun olgunlaştığı görüldükten sonra planlanır. Erken müdahale önceki operasyonu tehlikeye atabilir.

### Safir FUE klasik FUE'den daha iyi mi?

"Daha iyi" yerine "farklı bir uç malzemesi" demek daha doğrudur. Safir uçlar kesi kalitesini artırabilir, ancak temel başarı yine cerrah deneyimi ve doğru aday seçimine bağlıdır.

### Yurt dışından geliyorum, ne kadar kalmalıyım?

Tipik kalış süresi **2-4 gündür**. İlk yıkama klinikte yapılır, ardından dönüş güvenlidir. Detaylı planlama için: [Türkiye'de sağlık turizmi rehberi](/blog/saglik-turizmi-nelere-dikkat).

---

Saç ekimi tekniği kararı; donör kapasitesi, dökülme paterni ve hekim deneyimi temelinde verilmelidir. Hiçbir teknik tek başına başarı garantisi sağlamaz. Bu yazı genel bilgilendirme niteliğindedir; bireysel uygunluk değerlendirmesi için **yüz yüze hekim muayenesi** şarttır.`,
    heroImageAlt: "Saç ekim yöntemleri karşılaştırma",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED_NEW,
    lastReviewedAt: PUBLISHED_NEW,
    nextReviewDueAt: NEXT_REVIEW_NEW,
    relatedProcedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi", "prp"],
    relatedSpecialtySlugs: ["sac-ekimi", "dermatoloji", "estetik-cerrahi"],
    sources: [
      {
        title: "Hair Transplantation — Clinical Practice Standards",
        publisher: "International Society of Hair Restoration Surgery (ISHRS)",
        url: "https://www.ishrs.org",
      },
      {
        title: "Follicular Unit Extraction: A Review",
        publisher: "PubMed — Journal of Cutaneous and Aesthetic Surgery",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "ARTAS Robotic Hair Restoration System — FDA Clearance",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov",
      },
      {
        title: "Hair Loss Treatments Overview",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/conditions/hair-loss/",
      },
      {
        title: "Androgenetik Alopesi Klinik Yaklaşımı",
        publisher: "Türk Dermatoloji Derneği",
      },
    ],
  },

  {
    slug: "lasik-vs-smile-vs-prk-goz-lazer",
    title: "LASIK, SMILE ve PRK: Göz Lazer Yöntemleri Karşılaştırma Rehberi",
    excerpt:
      "Refraktif cerrahide üç ana yöntem — flap mantığı, iyileşme süresi, hangi diyoptri aralığına uygun, kim için tercih edilir?",
    bodyMd: `Gözlük veya kontakt lens bağımlılığından kurtulmak isteyen hastalar için refraktif cerrahi günümüzde olgunlaşmış bir alandır. Türkiye'de en sık uygulanan üç yöntem **LASIK**, **SMILE** ve **PRK**'dır. Her birinin avantajı, iyileşme süresi ve aday profili farklıdır. Bu yazıda üç tekniği karşılaştırmalı olarak ele alıyoruz.

> 📌 Bu yazı [göz hastalıkları (oftalmoloji)](/branslar/goz-hastaliklari) branşı kapsamındaki refraktif cerrahi kararı için bilgilendirmedir. Aday kriterleri için: [LASIK için ideal aday kim?](/blog/lasik-aday-kornea-kalinligi).

## Refraktif Cerrahinin Temel Mantığı

Miyopi, hipermetropi ve astigmat gibi kırma kusurları, ışığın **retinaya tam odaklanmadığı** durumlardır. Refraktif cerrahide amaç, **kornea üzerine excimer veya femtosaniye lazer** ile şekil verip ışığın doğru odaklanmasını sağlamaktır.

Üç tekniğin temel farkı; **lazerin korneanın hangi katmanına nasıl uygulandığı**dır.

## LASIK (Laser-Assisted In Situ Keratomileusis)

LASIK, dünya çapında en yaygın refraktif yöntemdir. 1990'lı yıllardan beri uygulanmaktadır.

### Nasıl uygulanır?

1. Femtosaniye lazer ile **kornea ön yüzeyinde ince bir flap (kapak)** oluşturulur
2. Flap kaldırılır, altındaki stromal dokuya excimer lazer ile şekil verilir
3. Flap geri kapatılır ve doğal vakumla yerinde tutunur

### Avantajları

- Hızlı iyileşme — 24 saat içinde belirgin görsel iyileşme
- Ağrı az veya hiç yok (ilk birkaç saat hafif yanma)
- Geniş diyoptri aralığında uygulanabilir
- Operasyon ayakta tedavi şeklinde, 10-15 dakika sürer

### Sınırlamaları

- **Flap olması**, dövüş sporu / askeri / kontakt sporlarda travma riski oluşturur
- Geçici **kuru göz** sık yan etki
- İnce korneada güvenli değil → ektazi riski
- Femtosaniye + excimer iki ayrı lazer sistemi gerektirir

> 💡 LASIK için detaylı aday kriterleri ve kornea kalınlığı önemine dair: [LASIK için ideal aday kim? Kornea kalınlığı neden önemli?](/blog/lasik-aday-kornea-kalinligi)

## SMILE (Small Incision Lenticule Extraction)

SMILE, 2011'den sonra yaygınlaşan, **flap oluşturmayan** modern bir tekniktir. Yalnız femtosaniye lazer kullanılır.

### Nasıl uygulanır?

1. Femtosaniye lazer ile **korneanın iç katmanında lentikül (mercek şeklinde disk)** oluşturulur
2. Korneanın yüzeyinde **2-4 mm'lik küçük kesi** açılır
3. Lentikül bu küçük kesiden çıkarılır
4. Kornea yeni şeklini alır

### Avantajları

- **Flap yok** → travma riski LASIK'a göre düşük
- **Kuru göz daha az** — kornea sinir hasarı minimaldir
- Sporcu, askeri personel ve travmaya açık meslekler için tercih edilebilir
- Tek lazer sistemi (genellikle Zeiss VisuMax)

### Sınırlamaları

- Görsel iyileşme **LASIK'a göre 1-2 gün daha yavaş** olabilir
- **Hipermetropi için sınırlı endikasyon** — geliştirme aşamasında
- Yüksek astigmat düzeltmede LASIK kadar deneyim birikimi yok
- Türkiye'de görece az merkezde mevcut, cihaz maliyeti yüksek

> ℹ️ **SMILE özellikle yüksek miyopi (örn. -6 ila -10 D)** ve **kuru göz şikayeti olan hastalarda** öne çıkar. Düşük diyoptri ve hipermetropi vakalarında her merkezde uygun olmayabilir.

## PRK / TransPRK (Photorefractive Keratectomy)

PRK, refraktif cerrahinin **en eski tekniğidir** (1980'ler). Günümüzde özellikle **ince kornealı** ve **flap riski taşıyan** hastalarda tercih edilir.

### Nasıl uygulanır?

1. Korneanın en üst tabakası (**epitel**) mekanik olarak veya excimer lazer ile (TransPRK) çıkarılır
2. Altındaki stromal dokuya doğrudan lazer uygulanır
3. **Flap yok** — epitel kendi kendine 3-5 gün içinde yeniden büyür
4. Bantlı kontakt lens iyileşme sürecinde kullanılır

### Avantajları

- **Flap yok** → travma riski ve flap komplikasyonu tamamen yok
- **İnce korneada güvenli** uygulama mümkün
- Uzun vadeli stabilite kanıtlanmış (30+ yıl klinik veri)
- Maliyeti diğer tekniklere göre daha düşük olabilir

### Sınırlamaları

- **İyileşme süresi en uzun** — 3-7 gün önemli düzeyde rahatsızlık ve sulanma
- **Görsel iyileşme yavaş** — net görüş 2-4 hafta sürebilir, nihai sonuç 3-6 ay
- İlk hafta ağrı kesici ve damla protokolü disiplin gerektirir
- Geçici sis (haze) görme bozukluğu (modern tekniklerle nadir)

## Üç Yöntemin Karşılaştırma Tablosu

| Kriter | LASIK | SMILE | PRK |
|---|---|---|---|
| Flap oluşturma | Var | Yok (küçük kesi) | Yok |
| Kornea katmanı | Yüzeyel (flap altı) | İç katman (lentikül) | Yüzeyel (epitelsiz) |
| Diyoptri aralığı | Geniş (miyop, hipermetrop, astigmat) | Miyop + astigmat (hipermetrop sınırlı) | Geniş (miyop, hipermetrop, astigmat) |
| Operasyon süresi | 10-15 dk/göz | 15-20 dk/göz | 10-15 dk/göz |
| Görsel iyileşme | 24 saat | 1-3 gün | 1-2 hafta |
| Tam iyileşme | 1-3 ay | 1-3 ay | 3-6 ay |
| Kuru göz riski | Orta-yüksek | Düşük | Orta |
| Travma riski | Flap nedeniyle var | Düşük | Çok düşük |
| Sporcu / askeri | Önerilmez | Uygun | Uygun |
| İnce kornea | Uygun değil | Sınırlı | Tercih edilebilir |

> ⚠️ Bu tablo genel rehber niteliğindedir. Bireysel uygunluk; kornea kalınlığı, topografi, kuru göz testleri ve diyoptri değeri temelinde **hekim değerlendirmesiyle** belirlenir.

## Hangi Teknik Sizin İçin Uygun?

Karar verirken göz önünde tutulan faktörler:

### LASIK için tipik aday

- Yeterli kornea kalınlığı (genellikle 480+ mikron)
- Stabil reçete (en az 1 yıl)
- Kuru göz şikayeti minimal
- Hızlı iyileşme öncelikli
- Spor / meslek travma riski düşük

### SMILE için tipik aday

- **Orta-yüksek miyopi** (örn. -3 ila -10 D)
- Astigmat eşlikli olabilir
- **Kuru göz şikayetli** veya sporcu
- Yeterli kornea kalınlığı
- Hipermetrop ise dikkatli değerlendirme

### PRK için tipik aday

- **İnce kornea**
- Travma riski yüksek meslek (askeri, dövüş sporu)
- LASIK'tan **flap riski** nedeniyle vazgeçilen hasta
- İyileşme süresine tolerans
- Daha düşük diyoptride ve hipermetropide uygun

> 💬 **Çok yüksek diyoptri** (örn. -10 D üzeri) veya çok ince kornea durumunda refraktif cerrahi yerine **fakik intraoküler lens (ICL)** önerilebilir. Bu, korneayı dokunmadan göz içine kalıcı lens yerleştirme yöntemidir; ayrı bir konsültasyon gerektirir.

## Aday Olmayanlar

> ⚠️ Aşağıdaki durumlarda hiçbir lazer tekniği uygun değildir:

- **Keratokonus** tanısı veya şüphesi (topografide şüphe varsa kesin red)
- 18 yaş altı, iskelet gelişimi tamamlanmamış
- Reçetenin son 1 yılda **stabil olmaması**
- Aktif göz hastalığı (üveit, glokom, ciddi kuru göz)
- Otoimmün hastalık (lupus, romatoid artrit) — yara iyileşmesini bozar
- **Hamilelik ve emzirme dönemi** — hormonal değişiklik reçeteyi etkiler
- Kontrolsüz diyabet
- Belirli ilaç kullanımı (steroid, immünsüpresif, isotretinoin)

## Risk ve Komplikasyonlar

Modern refraktif cerrahi güvenli kabul edilir, ancak risk içermez değildir:

- **Geçici kuru göz** (en sık yan etki, haftalar-aylar)
- Gece görüşünde **halo ve glare** (ışık halkası, parlama)
- Yetersiz düzeltme → gözlük veya tamamlayıcı işlem gerekebilir
- Aşırı düzeltme
- **Ektazi** (kornea zayıflaması) — uygun olmayan adayda
- LASIK'a özgü: flap komplikasyonları (femtosaniye ile çok nadir)
- PRK'ya özgü: korneal haze (modern tekniklerde nadir)
- Çok nadir: enfeksiyon

> 🚨 "%100 gözlüksüz hayat", "kesin sonuç" gibi vaatler [Sağlık Hizmetlerinde Tanıtım Yönetmeliği](https://www.kvkk.gov.tr) gereği yasaktır. Bu tür ifadeler veren klinikten uzak durun.

## Operasyon Öncesi Yapılması Gereken Testler

| Test | Amaç |
|---|---|
| Pakimetri | Kornea kalınlığı ölçümü |
| Topografi / Pentacam | Kornea yüzey haritası, ektazi taraması |
| Schirmer / TBUT | Kuru göz değerlendirmesi |
| Sikloplejik refraksiyon | Gerçek diyoptri değerinin tespiti |
| Göz dibi muayenesi | Retina ve diğer patolojiler |
| Göz içi basıncı | Glokom taraması |

> 💡 Bu testleri **yapmadan** operasyon teklif eden klinikten uzak durun. Test sonuçları yazılı olarak size verilmelidir.

## Hekim ve Cihaz Seçim Kriterleri

- **Göz Hastalıkları (Oftalmoloji) uzmanlığı** + refraktif cerrahi deneyimi
- TTB sicil numarası aktif
- Türk Oftalmoloji Derneği (TOD) üyeliği
- ESCRS (European Society of Cataract & Refractive Surgeons) veya AAO referansı
- **Cihaz kalitesi:** Zeiss VisuMax (SMILE), WaveLight EX500, Schwind Amaris vb.
- Sağlık Bakanlığı ruhsatlı klinik
- Yazılı bilgilendirilmiş onam
- Operasyon sonrası takip programı (1 gün, 1 hafta, 1 ay, 3 ay, 6 ay)

> 👉 [Göz hastalıkları doktorları listesini](/branslar/goz-hastaliklari) inceleyerek refraktif cerrahi deneyimi olan hekimleri karşılaştırabilirsiniz. Yurt dışından geliyorsanız: [Türkiye'de sağlık turizmi rehberi](/blog/saglik-turizmi-nelere-dikkat).

## Sık Sorulan Sorular

### LASIK mi SMILE mi tercih edilmeli?

Kişisel duruma bağlıdır. Yüksek miyopi + kuru göz şikayeti + sporcu ise SMILE; düşük-orta diyoptri + hızlı iyileşme öncelik ise LASIK öne çıkabilir. Karar topografi ve pakimetri sonuçlarıyla verilir.

### PRK gerçekten ağrılı mı?

İlk 3-5 gün epitel iyileşme süresinde belirgin yanma, sulanma ve ışığa hassasiyet vardır. Bantlı kontakt lens ve reçeteli damlalarla yönetilir. Çoğu hasta 1 hafta içinde rahatlar.

### İki gözü aynı seansta yapmak güvenli mi?

Modern uygulamada üç teknikte de iki göz aynı seansta yapılabilir ve güvenli kabul edilir. PRK'da bazı hekimler iyileşme süresi nedeniyle iki seansa bölmeyi tercih edebilir.

### Hangi teknik en kalıcı sonuç verir?

Üç tekniğin uzun vadeli stabilite verisi benzerdir. **Presbiyopi** (yaşa bağlı yakın görme bozukluğu, genellikle 40+) hiçbir teknikle önlenmez; bu, ayrı bir konudur.

### LASIK sonrası numara geri geliyor mu?

Az sayıda hastada minimal regresyon olabilir. Stabilite tüm tekniklerde benzerdir. Yıllık göz muayenesi önerilir.

### Lazerden sonra göz içi lens (ICL) yapılabilir mi?

Evet, gerekirse. Ancak ICL genellikle **lazer için aday olmayan** yüksek diyoptri veya ince kornealı hastalarda **birinci tercih** olarak değerlendirilir.

### Yurt dışından geliyorum, ne kadar kalmalıyım?

LASIK / SMILE için **2-3 gün** yeterli. PRK için **5-7 gün** önerilir (epitel iyileşmesi tamamlanana kadar). İlk kontrol klinikte yapılmalı.

---

Göz lazer kararı; kornea analizi, kuru göz testi, diyoptri stabilitesi ve cerrah deneyimi temelinde verilmelidir. Hiçbir teknik tek başına başarı garantisi sağlamaz. Bu yazı genel bilgilendirme niteliğindedir; bireysel uygunluk için **göz hastalıkları uzmanı muayenesi** şarttır.`,
    heroImageAlt: "Göz lazer ameliyatı yöntemleri",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED_NEW,
    lastReviewedAt: PUBLISHED_NEW,
    nextReviewDueAt: NEXT_REVIEW_NEW,
    relatedProcedureSlugs: ["lasik", "smile"],
    relatedSpecialtySlugs: ["goz-hastaliklari"],
    sources: [
      {
        title: "Refractive Errors & Refractive Surgery — Preferred Practice Pattern",
        publisher: "American Academy of Ophthalmology (AAO)",
        url: "https://www.aao.org",
      },
      {
        title: "FDA's LASIK Program",
        publisher: "U.S. Food and Drug Administration",
        url: "https://www.fda.gov/medical-devices/lasik/fdas-lasik-program",
      },
      {
        title: "Small Incision Lenticule Extraction (SMILE): A Systematic Review",
        publisher: "PubMed — Journal of Refractive Surgery",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "Photorefractive Keratectomy: Long-term Outcomes",
        publisher: "PubMed — Cornea Journal",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "Laser Eye Surgery and Lens Surgery",
        publisher: "NHS UK",
        url: "https://www.nhs.uk/tests-and-treatments/laser-eye-surgery-and-lens-surgery/",
      },
      {
        title: "Türk Oftalmoloji Derneği",
        publisher: "TOD",
      },
    ],
  },

  {
    slug: "zirkonyum-emax-metal-destekli-dis-kaplama",
    title: "Zirkonyum, E-max ve Metal Destekli Diş Kaplama Farkları",
    excerpt:
      "Üç temel diş kaplama malzemesi — yapısal farklar, estetik, dayanıklılık, hangi diş için uygun, ömür beklentisi.",
    bodyMd: `Diş kaplama (kron), yıpranmış, çürümüş, kırık veya estetik açıdan değişiklik istenen dişlerin **dış yüzeyini kaplayan** restoratif yapılardır. Günümüzde en yaygın üç malzeme **zirkonyum**, **E-max (lityum disilikat)** ve **metal destekli porselen**dir. Hangi malzemenin sizin için uygun olduğu; dişin konumu, ısırma kuvveti, estetik beklenti ve hekim önerisine bağlıdır.

> 📌 Bu yazı [diş hekimliği](/branslar/dis-hekimligi) branşı kapsamındaki kaplama seçimi için bilgilendirmedir. İmplant + kaplama kombinasyonu için: [Diş implantı rehberi](/blog/dis-implanti-surec-rehberi).

## Diş Kaplaması Nedir?

Diş kaplaması, dişin **dış görünür yüzeyini tamamen örten** yapay bir başlıktır. Çürük tedavisi sonrası, kanal tedavisi sonrası, kırık veya aşınmış dişlerde işlev ve estetiği geri kazandırmak için uygulanır.

**Lamine (veneer) ile farkı:** [Lamine diş](/tedaviler/lamine-dis), yalnızca dişin **ön yüzünü kaplar** ve tamamen estetik amaçlıdır. Kaplama (kron) ise dişin tüm yüzeyini sarar ve hem fonksiyonel hem estetik amaçlıdır.

## Zirkonyum Kaplama

[Zirkonyum kaplama](/tedaviler/zirkonyum-kaplama), son 15 yılda diş hekimliğinde en yaygın metalsız restoratif materyallerden biri olmuştur.

### Yapısı

- **Zirkonyum oksit (ZrO2)** seramik altyapı
- Bilgisayar destekli CAD/CAM tasarımla milimetrik hassasiyetle üretilir
- Üzeri estetik porselen ile kaplanır (geleneksel) veya **monolitik zirkonyum** (tek parça) olarak şekillendirilir

### Avantajları

- **Metalsiz** — diş eti çekilmesinde "siyah kenar" oluşturmaz
- Yüksek dayanıklılık — kırılma direnci yüksek
- Doku uyumu mükemmel — alerjik reaksiyon nadirdir
- **Arka dişlerde** ısırma kuvvetine dayanıklılığı yüksek
- Köprü çalışmalarında uygundur

### Sınırlamaları

- Yüksek monolitik formda **ışık geçirgenliği** doğal dişten daha az olabilir
- Ön dişlerde "daha mat" görünebilir — E-max daha doğal olabilir
- Karşı dişi aşındırma potansiyeli (yüzey iyi parlatılmazsa)
- Maliyeti metal-destekli kaplamadan yüksektir

> 💡 **Multilayer zirkonyum** (çok katmanlı), kesme/şekil verme bölgesinde geçişli renk veren yeni nesil malzemedir. Ön dişlerde estetik açıdan daha başarılı sonuç vermektedir.

## E-max (Lityum Disilikat Cam Seramik)

E-max, **lityum disilikat** içeren güçlendirilmiş cam seramik malzemesidir. Estetik diş hekimliğinde özellikle ön dişler için tercih edilir.

### Yapısı

- Tek parça cam seramik
- CAD/CAM ile veya preslemeli teknikle üretilir
- Yüksek translüsensi (ışık geçirgenliği)

### Avantajları

- **En doğal görünüm** — doğal diş gibi ışık geçirgenliği
- Estetik açıdan ön dişlerde tercih sebebi
- **Metalsiz** — diş eti uyumu yüksek
- Daha ince hazırlık (preparasyon) yeterli olabilir → daha az sağlam diş dokusu kaybı
- İyi yapıştırma protokolü ile dayanıklılık iyi

### Sınırlamaları

- Zirkonyuma göre **kırılma direnci daha düşük**
- **Arka dişlerde** (azı dişleri) tek başına dayanıklılığı sınırlı
- Geniş köprü çalışmalarında uygun değil (tek diş veya kısa köprü)
- Bruksizm (diş gıcırdatma) olan hastalarda dikkat

## Metal Destekli Porselen (PFM — Porcelain-Fused-to-Metal)

Diş hekimliğinin **klasik kaplama** yöntemidir. 1960'lardan beri yaygın kullanılır.

### Yapısı

- İç altyapı: metal (krom-kobalt, krom-nikel veya değerli alaşımlar)
- Dış kaplama: porselen seramik

### Avantajları

- **Uzun klinik geçmiş** — 60+ yıllık veri
- Yüksek dayanıklılık
- Geniş köprü çalışmalarında tercih edilir
- Maliyet düşük olabilir

### Sınırlamaları

- **Diş eti çekilirse "siyah kenar"** (metal görüntüsü) oluşur — özellikle ön dişlerde estetik sorun
- Işık geçirgenliği yok → daha "ölü" görünüm
- Nikel içeren alaşımlarda **alerji riski** (özellikle kadınlarda daha sık)
- Metal alerjisi olan hastalarda kullanılmaz

> ⚠️ Estetik kaygısı yüksek ve ön dişlerde **metal destekli kaplama günümüzde tercih edilmez**. Arka dişlerde ve uzun köprülerde hala kullanım yeri vardır.

## Üç Malzemenin Karşılaştırma Tablosu

| Kriter | Zirkonyum | E-max | Metal Destekli |
|---|---|---|---|
| Yapı | Zirkonyum oksit seramik | Lityum disilikat | Metal + porselen |
| Estetik (ön diş) | İyi (multilayer ile çok iyi) | Mükemmel | Düşük-orta |
| Dayanıklılık | Çok yüksek | Yüksek | Yüksek |
| Köprü uygunluğu | Uzun köprü uygun | Tek diş / kısa köprü | Uzun köprü uygun |
| Metal alerjisi | Yok | Yok | Riskli (nikel) |
| Doku uyumu | Çok iyi | Çok iyi | Orta |
| Diş eti çekilme görüntüsü | Sorun yok | Sorun yok | "Siyah kenar" riski |
| Üretim teknolojisi | CAD/CAM | CAD/CAM veya pres | Geleneksel laboratuvar |
| Tipik kullanım yeri | Tüm dişler | Ön dişler tercihen | Arka diş + köprü |

> ℹ️ Bu karşılaştırma genel rehberdir. Bireysel karar hekim değerlendirmesine bağlıdır.

## Hangi Malzeme Hangi Diş İçin?

### Ön dişler (kesici, kanin)

- **E-max** veya **multilayer zirkonyum** → en doğal estetik
- Tek diş restorasyonu veya 2-3 dişli kısa köprü için uygun
- Metal destekli ön dişte estetik açıdan tercih edilmez

### Yan dişler (premolar)

- **Zirkonyum** sık tercih
- E-max da uygun
- Estetik + dayanıklılık dengesi

### Arka dişler (azı / molar)

- **Monolitik zirkonyum** → yüksek ısırma kuvvetine dayanıklılık
- Uzun köprü çalışmalarında zirkonyum veya metal destekli
- E-max tek diş için uygun ama köprüde önerilmez

### İmplant üstü kaplama

- Zirkonyum sık tercih (CAD/CAM kişiselleştirme)
- Detaylar: [Diş implantı süreç rehberi](/blog/dis-implanti-surec-rehberi)

> 💬 Tek bir diş için E-max ve zirkonyum arasında karar; **diş eti görünürlüğü, mevcut dişlerin rengi, hasta beklentisi** temelinde yapılır. Hekiminiz sizin için en uygunu önerir.

## Hangi Durumlarda Kaplama Önerilir?

- Geniş çürük sonrası kalan diş dokusunun zayıflığı
- **Kanal tedavisi** sonrası (diş kırılmaya yatkın hale gelir)
- Kırık veya çatlamış diş
- Aşınmış / eski dolgular
- **Estetik amaçlı** form / renk değişikliği
- **İmplant** üstü restorasyon
- Köprü ayağı olarak

## Kimler İçin Uygun Değildir?

- **Ağır periodontal hastalık** (önce diş eti tedavisi gerekir)
- Aktif çürük (önce restorasyon)
- Yetersiz diş dokusu (önce post-core veya kanal tedavisi)
- Kontrolsüz bruksizm (önce gece plağı planlanmalı)
- Çok genç hastalar (diş gelişimi tamamlanmamış)
- Kötü ağız hijyeni

## Diş Kaplama Süreci

### 1. Konsültasyon (1. seans)

- Klinik muayene + röntgen
- Tedavi planı yazılı sunumu
- Malzeme tercihi tartışılır
- Yazılı bilgilendirilmiş onam

### 2. Hazırlık (2. seans)

- Diş, kaplama kalınlığı kadar **aşındırılır** (preparasyon)
- Ölçü alınır (dijital veya geleneksel)
- Geçici kaplama yerleştirilir

### 3. Laboratuvar Aşaması (5-10 gün)

- CAD/CAM veya geleneksel teknikle kaplama üretilir
- Renk uyumu için fotoğraf ve renk seçici kullanılır

### 4. Yapıştırma (3. seans)

- Geçici çıkarılır
- Yeni kaplama prova edilir → renk, form, oklüzyon kontrolü
- Adeziv yapıştırıcı ile kalıcı olarak yapıştırılır

### 5. Takip

- 1 hafta sonra kontrol
- 6 ay – 1 yıl arayla rutin diş kontrolü

## Kaplama Ömrü

Modern kaplamaların ömrü; **ağız hijyeni, diş hekimi kontrolleri ve kullanım alışkanlığına** bağlıdır:

| Faktör | Ömre Etkisi |
|---|---|
| Düzenli ağız hijyeni | Çok yüksek |
| 6 ayda bir dental kontrol | Yüksek |
| Bruksizm (gece plağı kullanımı) | Yüksek |
| Sert besinler (buz, sert kabuk) | Orta-yüksek (negatif) |
| Sigara | Orta (renk değişimi) |
| Kaplama malzemesi | Orta |

> ⚠️ "Ömür boyu garanti", "30 yıl dayanır" gibi mutlak vaatlere şüpheyle yaklaşın. Hiçbir restoratif yapı sınırsız ömür beklentisine sahip değildir. Düzenli kontrol ve bakımla uzun kullanım mümkündür.

## Risk ve Komplikasyonlar

- **Geçici hassasiyet** (sıcak/soğuk) — birkaç hafta sürebilir
- Diş eti tahrişi
- Kaplama altında çürük (kötü ağız hijyeni → marjinal çürük)
- Kaplama kırılması veya çıkması
- Oklüzyon (ısırma) uyumsuzluğu → ayarlama gerekir
- Karşı dişin aşınması (parlatma kalitesine bağlı)
- Diş eti çekilmesi → estetik kayıp
- Kanal tedavisi ihtiyacı (preparasyon stresi sonrası, nadir)

## Hekim ve Laboratuvar Seçim Kriterleri

> 👉 [Diş hekimliği](/branslar/dis-hekimligi) profesyonelleri arasından seçim yaparken:

- **Diş Hekimliği Fakültesi** mezunu, TDB sicilli
- Estetik diş hekimliği veya protez alanında ek eğitim/sertifika
- **CAD/CAM teknolojisi** kullanımı
- Çalışılan **dental laboratuvarın akreditasyonu**
- Sağlık Bakanlığı ruhsatlı klinik
- Yazılı bilgilendirilmiş onam
- Operasyon sonrası takip programı
- Önceki vaka çalışmaları (etik kurallar çerçevesinde gösterilebilir)

Detaylı sertifika ve dernek analizi için: [TPRECD/ISAPS sertifikalarının anlamı](/blog/tprecd-isaps-sertifika-anlami).

## Sık Sorulan Sorular

### Zirkonyum mu E-max mı tercih edilmeli?

Ön dişlerde estetik öncelikse E-max veya multilayer zirkonyum öne çıkar. Arka dişlerde, geniş köprülerde ve dayanıklılık öncelikse zirkonyum tercih edilir. Karar diş diş verilir.

### Metal destekli kaplama hala kullanılır mı?

Evet, özellikle uzun köprülerde ve arka dişlerde maliyet/dayanıklılık avantajıyla kullanılır. Ancak estetik öne çıkan ön dişlerde günümüzde tercih edilmez.

### Kaplama yaparken kanal tedavisi de yapılır mı?

Yalnızca pulpaya (diş canlı sinir dokusu) zarar varsa veya restorasyon gereği zorunluysa yapılır. Sağlıklı diş için **rutin olarak kanal tedavisi gerekmez**.

### Diş eti çekilirse kaplama yenilenmeli mi?

Mutlaka değil. Metal destekli kaplamada estetik açıdan görünür "siyah kenar" çıkarsa değişim önerilir. Zirkonyum / E-max'da bu sorun yoktur.

### Sigara kaplamaya zarar verir mi?

Direkt malzemeye zarar vermez ama **renk değişimi** ve özellikle marjinde plak / diş eti hastalığı riski artar. Bu da kaplama ömrünü kısaltır.

### Bruksizm (diş gıcırdatma) varsa kaplama yapılır mı?

Önce **gece plağı (night guard)** ile koruma sağlanmalı, ardından zirkonyum gibi yüksek dayanıklı kaplama tercih edilebilir. E-max bruksizm olan hastada kırılma riski daha yüksektir.

### Yurt dışından geliyorum, ne kadar kalmalıyım?

Tek diş kaplaması için **2 ziyaret** gereklidir (hazırlık + yapıştırma) — yaklaşık 7-10 gün ülke içinde kalış. Geniş restorasyonlarda süre uzar. Detaylı planlama: [sağlık turizmi rehberi](/blog/saglik-turizmi-nelere-dikkat).

---

Kaplama malzemesi tercihi diş diş yapılan bireysel bir karardır. Bu yazı genel bilgilendirme niteliğindedir; sizin için uygun malzeme seçimi **diş hekimi muayenesi** sonucunda belirlenmelidir.`,
    heroImageAlt: "Zirkonyum ve E-max diş kaplama karşılaştırma",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED_NEW,
    lastReviewedAt: PUBLISHED_NEW,
    nextReviewDueAt: NEXT_REVIEW_NEW,
    relatedProcedureSlugs: ["zirkonyum-kaplama", "lamine-dis", "dis-implanti", "dis-beyazlatma"],
    relatedSpecialtySlugs: ["dis-hekimligi"],
    sources: [
      {
        title: "Dental Crowns — Patient Information",
        publisher: "American Dental Association (ADA)",
        url: "https://www.ada.org",
      },
      {
        title: "Clinical Performance of Lithium Disilicate (E-max) and Zirconia Crowns: Systematic Review",
        publisher: "PubMed — Journal of Prosthetic Dentistry",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "All-Ceramic Restorations: A Review",
        publisher: "PubMed — International Journal of Prosthodontics",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "Dental Restorations Guidance",
        publisher: "NICE (UK)",
        url: "https://www.nice.org.uk",
      },
      {
        title: "Türk Diş Hekimleri Birliği",
        publisher: "TDB",
        url: "https://www.tdb.org.tr",
      },
    ],
  },

  {
    slug: "ortodonti-tedavi-suresi-yetiskin-cocuk",
    title: "Ortodonti Tedavi Süresi: Yetişkin ve Çocuk Diş Teli Süreci",
    excerpt:
      "Ortodontik tedavi nedir, çocuk ve yetişkin tedavisi nasıl farklılaşır, metal / şeffaf / şeffaf plak (Invisalign) yöntemleri ve süre beklentileri.",
    bodyMd: `Ortodonti, dişlerin ve çene yapısının düzensizliklerini düzelten diş hekimliği uzmanlık alanıdır. Tedavi süresi; yaş, vaka karmaşıklığı ve kullanılan yönteme göre belirgin biçimde değişir. Bu yazıda **çocuk ve yetişkin ortodontik tedavi** süreçlerini, yöntemleri ve süre beklentilerini karşılaştırıyoruz.

> 📌 Bu yazı [diş hekimliği](/branslar/dis-hekimligi) branşı altında **Ortodonti** uzmanlığı kapsamındaki tedavi seçenekleri için bilgilendirmedir. Estetik diş restorasyonu için: [Zirkonyum, E-max ve metal destekli diş kaplama farkları](/blog/zirkonyum-emax-metal-destekli-dis-kaplama).

## Ortodonti Nedir?

Ortodonti, **dişlerin ve çenelerin doğru pozisyonda hizalanmasını** sağlayan diş hekimliği uzmanlığıdır. Türkiye'de ortodonti uzmanı olabilmek için diş hekimliği fakültesinden sonra **4 yıl ortodonti uzmanlık eğitimi** alınması gerekir.

Tedavi sadece estetik değil **fonksiyonel** amaç da taşır:

- Doğru ısırma (oklüzyon)
- Etkili çiğneme
- Daha kolay ağız hijyeni → diş eti hastalığı ve çürük riskinde azalma
- Konuşma kalitesi
- Çene ekleminde (TME) dengeli yük dağılımı

## Çocuklarda Ortodontik Tedavi

Çocuklarda ortodonti genellikle **iki dönemde** ele alınır.

### Erken Ortodontik Tedavi (7-10 yaş)

İskelet gelişimi devam ettiği için **çene büyümesi yönlendirilebilir**. Bu dönemde:

- Çapraz kapanış düzeltme
- Damak genişletme aparatları
- Alışkanlık kırma (parmak emme, dil itme)
- Yer kazanma / yer tutucu

### Esas Ortodontik Tedavi (11-14 yaş)

Daimi dişlerin büyük çoğunluğu sürdükten sonra:

- Klasik braket (diş teli) tedavisi
- Şeffaf plak tedavisi (Invisalign Teen vb.)
- Çene ortopedisi (Headgear, Twin-block) gerekirse

### Çocuklarda Süre Beklentisi

| Yaş aralığı | Tedavi tipi | Tipik süre |
|---|---|---|
| 7-10 | Erken (preventif) tedavi | 6-18 ay |
| 11-14 | Esas tedavi (klasik braket) | 18-30 ay |
| 11-14 | Şeffaf plak | 12-24 ay |

> 💡 Çocuklarda iskelet gelişiminin avantajı sayesinde tedavi genellikle yetişkine göre **daha kısa ve etkili** olur. İlk ortodonti muayenesi **7 yaş** dolayında önerilir (AAO — American Association of Orthodontists).

## Yetişkinlerde Ortodontik Tedavi

Yetişkin ortodontisi son 15 yılda dramatik biçimde yaygınlaşmıştır. **18-65+ yaş aralığında** sağlıklı dişler ve diş eti dokusu varsa tedavi mümkündür.

### Yetişkinde Beklenen Farklar

- **İskelet büyümesi tamamlanmış** — çene büyütme aparatları işe yaramaz, gerekirse ortognatik cerrahi
- **Diş hareket hızı daha yavaş** — kemik yoğunluğu daha sıkı
- Tedavi süresi **çocuklara göre %20-40 daha uzun** olabilir
- Mevcut restorasyonlar (kaplama, dolgu) tedavi planlamasını etkileyebilir
- Bruksizm veya diş eti çekilmesi varsa önce yönetim

### Yetişkin Tedavi Süresi

| Vaka karmaşıklığı | Klasik braket | Şeffaf plak |
|---|---|---|
| Hafif (1-2 mm sıkışıklık, ufak kaymalar) | 6-12 ay | 6-12 ay |
| Orta (orta düzey çapraşıklık, kapanış sorunu) | 18-30 ay | 12-24 ay |
| Ağır (cerrahi gerektiren çene anomalileri) | 24-36 ay | Tek başına uygun olmayabilir |

## Ortodontik Tedavi Yöntemleri

### 1. Klasik Metal Braket (Diş Teli)

En geleneksel ve hala en yaygın yöntem.

**Avantajları:**
- Geniş vaka aralığında etkili (basit-ağır)
- Hekim kontrolü yüksek
- Maliyet uygun
- Karmaşık vakalarda da kullanılabilir

**Sınırlamaları:**
- Estetik (görünür)
- Ağız hijyeni daha zor → çürük ve diş eti hastalığı riski artar
- Bazı yiyeceklerden kaçınma (sakız, sert kabuklu, yapışkan)
- Düzenli muayene (her 4-6 hafta)

### 2. Şeffaf (Porselen / Seramik) Braket

Metal yerine **diş renginde seramik braketler** kullanılır.

**Avantajları:**
- Daha estetik (uzaktan zor fark edilir)
- Klasik braket tedavi etkinliğine yakın

**Sınırlamaları:**
- Metalden daha kırılgan
- Hafif renk değişimi olabilir (sigara, koyu içecekler)
- Maliyet metalin üzerinde

### 3. Lingual (İç Yüz) Braket

Braketler dişin **iç (lingual) yüzüne** yapıştırılır.

**Avantajları:**
- Dışarıdan tamamen görünmez
- Estetik beklentisi en yüksek hastalarda tercih edilir

**Sınırlamaları:**
- Konuşma adaptasyonu 2-4 hafta sürer
- Dil tahrişi (ilk haftalar)
- Yüksek hekim deneyimi gerekir → Türkiye'de görece az merkez
- Maliyet yüksek

### 4. Şeffaf Plak (Invisalign vb.)

Bilgisayar destekli planlamayla üretilen **çıkarılabilir şeffaf plaklar** ile tedavi.

**Avantajları:**
- Görünmez denecek kadar şeffaf
- Çıkarılabilir → ağız hijyeni kolay
- Tüketim alışkanlıklarında esneklik (plak çıkarılıp yenir)
- Konfor (braket teli batma sorunu yok)

**Sınırlamaları:**
- **Hasta uyumu kritik** — günde 20-22 saat takılmalı
- Karmaşık vakalarda yetersiz kalabilir
- Maliyet en yüksek seçenek
- Periyodik plak değişimi (genellikle 1-2 haftada bir)
- Bazı diş hareketleri için **attachment** (diş üzerine küçük kompozit ekler) gerekir

> 💬 **Hasta uyumu olmazsa şeffaf plak tedavisi başarısız olur.** Bu yöntem disiplinli kullanım gerektirir. Çocuklarda klasik braket genellikle daha öngörülebilir sonuç verir.

## Yöntemlerin Karşılaştırma Tablosu

| Kriter | Metal Braket | Şeffaf Braket | Lingual Braket | Şeffaf Plak |
|---|---|---|---|---|
| Estetik | Düşük | Orta-yüksek | Yüksek (görünmez) | Yüksek (görünmez) |
| Vaka aralığı | Geniş | Geniş | Geniş (deneyim gerekir) | Hafif-orta |
| Konfor | Orta | Orta | Düşük (ilk haftalar) | Yüksek |
| Hijyen | Zor | Zor | Zor | Kolay |
| Hasta uyumu | Sabit | Sabit | Sabit | **Kritik** |
| Hekim deneyim ihtiyacı | Standart | Standart | Yüksek | Standart-yüksek |
| Tipik süre (orta vaka) | 18-30 ay | 18-30 ay | 18-30 ay | 12-24 ay |

## Ortodontik Tedavi Süreci

### 1. Konsültasyon (1. seans)

- Klinik muayene
- **Sefalometrik röntgen** + panoramik röntgen + diş model ölçüleri
- Yüz, gülüş, profil analizi
- Tedavi planı yazılı sunumu
- Yöntem seçeneklerinin sunulması

### 2. Hazırlık

- Çürük varsa önce tedavi
- Diş eti hastalığı varsa periodontoloji
- Gerekirse diş çekimi (yer kazanmak için)
- Hijyen eğitimi

### 3. Aktif Tedavi

| Yöntem | Kontrol sıklığı |
|---|---|
| Metal / şeffaf braket | 4-6 haftada bir |
| Lingual braket | 4-6 haftada bir |
| Şeffaf plak | 6-10 haftada bir |

### 4. Pekiştirme (Retansiyon) — Çok Önemli!

Braketler çıkarıldıktan sonra dişlerin **geri kaymasını önlemek için pekiştirici** kullanılır:

- **Sabit pekiştirici** — dişlerin iç yüzüne yapıştırılan ince tel (kalıcı)
- **Hareketli pekiştirici (plak)** — gece kullanılır
- Kullanım süresi: en az **1-2 yıl** aktif, sonrasında genellikle gece kullanım önerilir
- **Pekiştirici disiplini sağlanmazsa diş hareketi geri gelir**

> ⚠️ **Kritik:** Pekiştirici kullanmamak, tedavi sonucunun **birkaç yıl içinde kaybedilmesine** neden olur. Bu, ortodontik tedavi başarısının ayrılmaz parçasıdır.

## Tedavi Süresini Etkileyen Faktörler

- **Yaş** — çocukta daha hızlı, yetişkinde daha yavaş
- **Vaka karmaşıklığı** — basit kayma vs. ağır iskelet anomalisi
- **Diş çekimi gerekip gerekmediği**
- **Cerrahi gereksinim** (ortognatik cerrahi)
- **Hasta uyumu** (lastik takma, plak kullanma, hijyen, randevu sıklığı)
- **Diş hareket biyolojisi** (kemik yoğunluğu, periodontal sağlık)
- **Yöntem** — şeffaf plak hafif vakalarda daha hızlı olabilir
- **Hekim deneyimi**

## Kimler İçin Uygundur?

- Çapraşık dişler
- Açık kapanış / derin kapanış
- Çapraz kapanış
- Diastema (diş arası boşluk)
- İskelet uyumsuzlukları (sınıf II, III maloklüzyon)
- Estetik kaygılar
- Çiğneme veya çene ekleminde sorunlar

## Kimler İçin Uygun Değildir / Dikkat Gerekir?

- **Aktif diş eti hastalığı** (önce tedavi)
- Aktif çürük (önce tedavi)
- Ciddi kemik kaybı
- Kontrolsüz sistemik hastalıklar
- Bazı bisfosfonat ilaç kullanımları
- Kötü ağız hijyeni
- Beklentilerin tedaviyle uyumsuz olması

## Risk ve Komplikasyonlar

- **Diş kökü emilimi (rezorpsiyon)** — nadir ama bilinmesi gereken risk
- Diş eti çekilmesi
- Kök kanal tedavisi ihtiyacı (nadir)
- Çürük (kötü hijyen → braket etrafında)
- Diş minesinde geçici beyaz lezyonlar
- Çene eklemi (TME) hassasiyeti
- Pekiştirici uyumsuzluğunda **relaps** (geri kayma)
- Braket teli batması, yara
- Konuşma ve çiğneme adaptasyon dönemi

## Hekim Seçim Kriterleri

> 👉 [Diş hekimliği](/branslar/dis-hekimligi) profesyonelleri arasından ortodonti uzmanı seçerken:

- **Ortodonti uzmanlık belgesi** (4 yıl uzmanlık) — bu kritik
- TDB sicilli
- **Türk Ortodonti Derneği** üyeliği
- Şeffaf plak tercihinde resmi sertifika (Invisalign provider seviyesi)
- Sağlık Bakanlığı ruhsatlı klinik
- Yazılı tedavi planı + bilgilendirme
- Sefalometrik ve dijital ölçüm imkanı
- Önceki vaka çalışmaları (etik kurallar çerçevesinde)

> ⚠️ Genel diş hekimleri (uzman olmayan) bazı ortodontik tedavileri yapabilirler, ancak **karmaşık vakalar mutlaka ortodonti uzmanı** tarafından tedavi edilmelidir.

Detaylı dernek ve sertifika analizi: [TPRECD/ISAPS sertifikalarının anlamı](/blog/tprecd-isaps-sertifika-anlami).

## Sık Sorulan Sorular

### Yetişkinde ortodontik tedavi başarılı olur mu?

Evet. Sağlıklı dişler ve diş eti varsa yetişkinlikte de tedavi başarıyla yapılabilir. Süre çocuklara göre uzun olabilir; uyum disiplini önemlidir.

### Şeffaf plak (Invisalign) metal braket kadar etkili mi?

Hafif-orta vakalarda evet, etkili sonuç sağlar. **Karmaşık vakalarda klasik braket** genellikle daha öngörülebilir. Karar konsültasyonla verilir.

### Tedavi ağrılı mı?

Braket veya plak değişiminden sonra **2-5 gün hafif rahatsızlık ve hassasiyet** beklenebilir. Klasik ağrı kesicilerle yönetilir. Sürekli ağrı normal değildir; hekiminize bildirin.

### Diş çekimi gerekir mi?

Vakaya göre değişir. Yer darlığı, çapraşıklık veya iskelet uyumsuzluğunda **premolar çekimi** ile yer açılması gerekebilir. Bu karar sefalometrik analizle verilir.

### Tedavi sonrası dişler tekrar bozulur mu?

**Pekiştirici (retainer) düzgün kullanılmazsa** evet. Pekiştirici kullanım disiplini, tedavi sonucunu uzun vadede koruyan en kritik unsurdur.

### Cerrahi gerekir mi?

Ağır iskelet uyumsuzluklarında (örn. belirgin alt çene ileride veya geride) **ortognatik cerrahi** + ortodonti kombinasyonu gerekebilir. Bu vakalarda [estetik cerrahi](/branslar/estetik-cerrahi) ve ortodonti birlikte çalışır.

### Yurt dışından geliyorum, ortodonti uygun mu?

Karmaşık vakalarda **uzun süreli takip** gerektiği için ortodonti sağlık turizmine pek uygun değildir. Şeffaf plak vakaları uzaktan takip ile yönetilebilir ancak yine de **3-6 ayda bir** kontrol önerilir. Genel rehber: [sağlık turizmi nelere dikkat](/blog/saglik-turizmi-nelere-dikkat).

### Ortodonti sırasında diş beyazlatma yapılabilir mi?

Braket tedavisi sırasında [diş beyazlatma](/tedaviler/dis-beyazlatma) uygun değildir (braket altı renk farkı oluşur). **Tedavi sonrası** beyazlatma planlanabilir.

### Tedavi sonunda kaplama veya lamine ile birleşik tedavi olur mu?

Evet. Bazı vakalarda ortodonti ile diş pozisyonu düzeltilir, ardından estetik için [lamine](/tedaviler/lamine-dis) veya [zirkonyum kaplama](/tedaviler/zirkonyum-kaplama) yapılabilir. Detaylar: [Zirkonyum, E-max ve metal destekli kaplama farkları](/blog/zirkonyum-emax-metal-destekli-dis-kaplama).

---

Ortodontik tedavi süresi bireyseldir ve yaş, vaka karmaşıklığı ve hasta uyumuna bağlıdır. Hiçbir yöntem belirli bir sürede tamamlanma garantisi vermez. Bu yazı genel bilgilendirme niteliğindedir; bireysel tedavi planı için **ortodonti uzmanı muayenesi** şarttır.`,
    heroImageAlt: "Ortodonti diş teli tedavisi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED_NEW,
    lastReviewedAt: PUBLISHED_NEW,
    nextReviewDueAt: NEXT_REVIEW_NEW,
    relatedProcedureSlugs: ["zirkonyum-kaplama", "lamine-dis", "dis-beyazlatma"],
    relatedSpecialtySlugs: ["dis-hekimligi"],
    sources: [
      {
        title: "Orthodontic Treatment — Patient Information",
        publisher: "American Association of Orthodontists (AAO)",
        url: "https://www.aaoinfo.org",
      },
      {
        title: "Clear Aligner Therapy vs. Fixed Appliances: A Systematic Review",
        publisher: "PubMed — American Journal of Orthodontics and Dentofacial Orthopedics",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "Orthodontic Retention: Clinical Guidance",
        publisher: "PubMed — European Journal of Orthodontics",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        title: "Orthodontic Treatment Guidance",
        publisher: "NICE (UK)",
        url: "https://www.nice.org.uk",
      },
      {
        title: "Türk Ortodonti Derneği",
        publisher: "TOD-Ortodonti",
      },
      {
        title: "Türk Diş Hekimleri Birliği",
        publisher: "TDB",
        url: "https://www.tdb.org.tr",
      },
    ],
  },
];

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
