import type { BlogPost } from "./types";

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const AUTHOR = "TurkaDoctor Editör Ekibi";
const PUBLISHED = "2026-05-25";
const NEXT_REVIEW = "2026-11-25";

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
];

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
