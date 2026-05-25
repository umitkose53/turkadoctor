import type { BlogPost } from "./types";

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const AUTHOR = "TurkaDoctor Editör Ekibi";
const PUBLISHED = "2026-05-25";
const NEXT_REVIEW = "2026-11-25";

/**
 * Blog yazıları. Tıbbi Danışma Kurulu onaylı, kaynaklı, mevzuata uyumlu.
 * E-E-A-T sinyali (yazar + inceleyici + tarih + kaynak) tüm yazılarda zorunlu.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "sac-ekimi-sonrasi-bakim-rehberi",
    title: "Saç Ekimi Sonrası 7-30. Gün Bakım Rehberi",
    excerpt:
      "Saç ekimi sonrası ilk ay tutma oranı açısından kritik. Yıkama, beslenme, uyku pozisyonu ve dikkat edilmesi gerekenler tek rehberde.",
    bodyMd: `Saç ekimi (hair transplantation) sonrası ilk 30 gün, nakledilen saç köklerinin yeni bölgeye tutunması açısından kritik bir dönemdir. Bu rehber, genel bilgilendirme amaçlıdır; bireysel bakım talimatlarınız için **mutlaka operasyonu yapan hekiminize danışın**.

## İlk 24-48 Saat

İlk gece sırtüstü yatış pozisyonu önerilir; başın altına yüksek bir yastık konularak alın bölgesindeki olası ödem azaltılır. Donör (alıcı) bölgede hafif kanama ve sızıntı normaldir.

- Operasyon sonrası reçeteli ağrı kesici, antibiyotik ve ödem önleyici ilaçlarınızı zamanında alın
- Başınızı eğmekten ve fiziksel zorlanmadan kaçının
- Sigara ve alkolden uzak durun (en az 7 gün)

## 2-7. Gün: İlk Yıkama Dönemi

Çoğu klinikte 2-3. günden itibaren özel solüsyon ve şampuanla ilk yıkama yapılır. Yıkama tekniği:

- Önce loşyon/krem uygulanır, 30-45 dakika bekletilir (kabukların yumuşaması için)
- Düşük basınçlı, ılık suyla durulanır
- Eli direkt sürtmek yerine parmak uçlarıyla nazikçe köpürtülür
- Havlu sürmek yerine kağıt havluyla nazikçe kurulanır

Kabuklanma normaldir ve 10-14 gün içinde tamamen dökülür; bu süreçte zorla kabuk koparmak greftleri kaybetme riski oluşturur.

## 2. Hafta: Sosyal Hayata Dönüş

İkinci hafta sonunda kabuklar büyük ölçüde dökülmüştür. Hafif kızarıklık devam edebilir; bu doğal iyileşmenin parçasıdır.

- Şapka ve geniş kapüşonlar (alıcı bölgeye sürtmeyecek şekilde) kullanılabilir
- Ofis işine dönüş genellikle 7-10 günde mümkündür
- Doğrudan güneş ışığından kaçının (en az 3 ay)

## 2-4. Hafta: Şok Dökülmesi

Nakledilen saç tellerinin geçici olarak dökülmesi (shock loss) bu dönemde normaldir ve **kalıcı kayıp anlamına gelmez**. Saç kökleri yerinde kalır; yeni saç çıkışı 3-4. ayda görünmeye başlar.

## Beslenme ve Yaşam Tarzı

İyileşmeyi destekleyen genel öneriler:

- Protein ağırlıklı dengeli beslenme (yumurta, balık, tavuk, baklagiller)
- Biotin, çinko, demir, B12 ve D vitamini takviyesi (hekim onayıyla)
- Bol su tüketimi
- En az 6 hafta süreyle ağır egzersiz, sauna, hamam, deniz/havuz/jakuzi yasağı
- Saç boyası, jöle, sprey kullanımı **en az 4 hafta** ertelenir

## Hangi Durumlarda Hekiminizi Aramalısınız?

- 38°C üzeri ateş veya yara yerinden iltihap görünümlü akıntı
- Şiddetli, geçmeyen ağrı
- Donör veya alıcı bölgede asimetrik şişlik / belirgin morarma
- Beklenmeyen yoğun kanama

## Sonuçların Görünür Olması

Yeni saçlar **3-4. ayda** belirgin biçimde çıkmaya başlar. Yoğunluk **8-12. ayda** netleşir; nihai sonuç (kalınlık, yön, doğallık) **12-18. ayda** olgunlaşır. Bireysel iyileşme süresi yaş, donör kapasitesi, teknik (FUE/DHI/Safir FUE) ve genel sağlığa göre değişir.

---

Bu yazıda yer alan bilgiler genel niteliklidir. Saç ekimi sonrası bakım planınız hekiminizin verdiği özel talimatlara uygun olmalıdır. **Tedavi kararları için her zaman uzman hekiminize danışın.**`,
    heroImageAlt: "Saç ekimi sonrası bakım",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["sac-ekimi", "sakal-ekimi", "kas-ekimi"],
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
    bodyMd: `Rinoplasti (burun estetiği), yüz oranlarını etkileyen merkezi bir cerrahi işlemdir. Cerrahın değerlendirmesi sonucunda **her hasta aday olmayabilir**. Bu yazı, aday değerlendirmesinde göz önünde tutulan başlıca kriterleri özetler.

## Aday Olabilecek Bireyler

- **İskelet gelişimi tamamlanmış** olanlar (genellikle 17-18 yaş ve üzeri)
- Burun şekli veya fonksiyonel sorunlarından (nefes alma zorluğu, septum eğriliği) memnun olmayan bireyler
- Genel sağlık durumu cerrahi anesteziyi tolere edebilen kişiler
- Sonuçtan **gerçekçi beklenti** çerçevesi çizebilen ve operasyon sürecini (iyileşme, ödem, ay-ay netleşme) anlayan adaylar
- Aktif sigara/nikotin kullanmıyor veya operasyondan en az 2-4 hafta önce bırakabilen bireyler

## Aday Olmayabilecek Durumlar

Hekim değerlendirmesi sonucunda aşağıdaki durumlarda işlem ertelenir, modifiye edilir veya yapılmaz:

- **Aktif sigara kullanımı** — yara iyileşmesini ve doku canlılığını ciddi olarak etkiler
- **Beden Dismorfik Bozukluğu (BDD)** veya gerçek dışı beklentiler — psikiyatri konsültasyonu önerilebilir
- Kontrolsüz hipertansiyon, kanama bozuklukları, ağır kalp/akciğer hastalıkları
- Anesteziye karşı ciddi alerji öyküsü
- Aktif sinüzit veya burun içi enfeksiyon (önce tedavi gerekir)
- Yüksek doz steroid, kan sulandırıcı veya immünsüpresif ilaç kullanımı (hekim onayı şart)
- Henüz iskelet gelişimi tamamlanmamış adolesanlar

## Konsültasyonda Neler Konuşulur?

İlk muayene şunları kapsamalıdır:

1. **Beklentilerin netleştirilmesi** — referans fotoğraf ve 3D simülasyon yardımcı olabilir
2. **Fonksiyonel değerlendirme** — septum, konkalar; gerekirse KBB konsültasyonu
3. **Cilt kalitesi ve burun anatomisi** — kalın deride sonuçlar daha geç netleşir
4. **Genel sağlık ve ilaç öyküsü**
5. **Daha önceki burun ameliyatı veya travma öyküsü** (revizyon rinoplasti farklı bir tekniktir)
6. **Risk ve komplikasyonların aktarılması** — yazılı bilgilendirme onayı

## Açık ve Kapalı Teknik

Sonucu doğrudan belirleyen şey teknik tercihi değil, **hekim deneyimi ve doğru endikasyondur**. Açık ve kapalı rinoplasti hem farklı endikasyonlarda hem hekim tercihine göre tercih edilir; her ikisinin de avantajları vardır. Genel bir kıyasla "biri diğerinden iyi" demek yanlış olur.

## Risk ve Komplikasyonlar

Her cerrahi işlem gibi rinoplastinin de bilinmesi gereken riskleri vardır:

- Şişlik, morluk (ilk 1-2 hafta)
- Geçici nefes alma zorluğu (1 hafta içinde)
- Kanama, enfeksiyon (nadir; antibiyotik profilaksi ile yönetilir)
- Asimetri
- Beklenmedik estetik sonuç → **revizyon ihtiyacı** (genel olarak %5-15 oranında bildirilir; teknik ve hasta cilt yapısına göre değişir)
- Koku duyusunda geçici azalma

## Sonuç Ne Zaman Netleşir?

İlk 2-3 haftada belirgin şişlik ve morluklar geçer; **3-6. ayda** burun şekli büyük ölçüde belirginleşir, **12-18. ayda** burun ucu ödemi de tamamen iner ve nihai sonuç netleşir. Burun ucu ödemi en son geçen alandır; bu nedenle hasta sabırlı olmalıdır.

---

Rinoplasti adaylığı için tek doğru yol, **yüz yüze hekim muayenesi**dir. Bu yazı genel bilgilendirme niteliğindedir; bireysel uygunluk değerlendirmesi için Plastik Rekonstrüktif ve Estetik Cerrahi uzmanına başvurunuz.`,
    heroImageAlt: "Rinoplasti öncesi muayene",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["rinoplasti", "goz-kapagi-estetigi", "yuz-germe"],
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
    bodyMd: `Diş implantı, eksik dişlerin yerine **titanyum yapay diş kökü** yerleştirilen ileri restoratif diş hekimliği uygulamasıdır. Doğru endikasyon, deneyimli hekim ve titiz takip ile uzun yıllar sürebilen bir tedavidir.

## Tedavi Aşamaları

### 1. Konsültasyon ve Planlama (1-2 hafta)
- Detaylı klinik muayene
- **3D dental tomografi (CBCT)** — kemik kalınlığı, sinir/sinüs yakınlığı ve cerrahi planlama için
- Tıbbi ve ilaç öyküsünün gözden geçirilmesi
- Yazılı tedavi planı ve bilgilendirme onayı

### 2. İmplant Yerleştirme (Cerrahi Seans, 30-90 dakika)
- Lokal anestezi (gerekirse sedasyon) altında yapılır
- Çene kemiğine titanyum implant yerleştirilir
- Kemik grefti gerekiyorsa aynı seansta uygulanabilir
- Operasyon ertesi gün sosyal hayata dönüş genellikle mümkündür

### 3. Osseointegrasyon Süresi (3-6 ay)
İmplantın kemikle biyolojik olarak kaynaşması. Süreler:
- Alt çene: ortalama 3-4 ay
- Üst çene: ortalama 4-6 ay (anatomik fark)

### 4. Üst Yapı (Abutment + Kron)
Osseointegrasyon tamamlandıktan sonra ölçü alınır; porselen veya zirkonyum kron yerleştirilir.

## Kimler Diş İmplantı İçin Uygundur?

- Eksik dişi olan ve genel sağlık durumu cerrahiye uygun yetişkinler
- Çene kemik yapısı yeterli olan veya **kemik grefti** ile düzeltilebilen bireyler
- Ağız hijyenine düzenli olarak dikkat eden hastalar

## Kimler İçin Risk Yüksektir?

- Aktif diş eti hastalığı (önce periodontal tedavi gerekir)
- Kontrolsüz diyabet, ağır osteoporoz, **bisfosfonat** kullanımı (özel değerlendirme şart)
- Aktif sigara içicileri — başarı oranı düşer, peri-implantitis riski artar
- İskelet gelişimi tamamlanmamış bireyler

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
- Sağlık Bakanlığı ruhsatlı klinik veya hastane
- **Kullanılan implant markasının CE veya FDA onaylı** ve uluslararası sicilde izlenebilir olması
- 3D dental tomografi (CBCT) ile cerrahi planlama yapılması
- Yazılı bilgilendirme + risk onam formu
- Yıllık kontrol planının netleştirilmiş olması

## All-on-4 Nedir?

Tüm üst veya alt çenede dişlerin kaybedildiği durumlarda **4 implant** üzerine tam ark sabit protez tasarlanan ileri tedavidir. Anında yükleme (same-day) ile aynı gün geçici diş takılması çoğunlukla mümkündür; final restorasyon 3-6 ay sonra yerleştirilir.

## İmplant Ömrü

Modern titanyum implantların **uzun ömürlü olduğu** klinik çalışmalarda gösterilmiştir. Ancak hiçbir implant ömür boyu garantili kabul edilmez. Başarıyı belirleyen başlıca etkenler:

- Düzenli ağız hijyeni
- Yılda en az 1-2 kez dental kontrol
- Sigaranın bırakılması
- Sistemik hastalıkların kontrol altında tutulması

---

İmplant kararı bireysel tıbbi değerlendirmeye bağlıdır. Bu yazı bilgilendirme amaçlıdır; tedavi planınız için diş hekiminize başvurunuz.`,
    heroImageAlt: "Diş implantı tedavisi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["dis-implanti", "all-on-4", "zirkonyum-kaplama"],
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
    bodyMd: `LASIK (Laser-Assisted In Situ Keratomileusis), miyop, hipermetrop ve astigmat gibi kırma kusurlarının lazerle düzeltildiği refraktif cerrahi yöntemidir. Her hasta LASIK için aday değildir; uygunluk **detaylı göz muayenesi ve özel testlerle** belirlenir.

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

- **PRK / TransPRK** — flap-siz yöntem, ince kornealı veya sporcu hastalar için
- **SMILE** — femtosaniye lazerle daha küçük kesi, kuru göz şikayeti daha az
- **ICL** — fakik göz içi lens; yüksek diyoptri veya kornea yapısı uygun olmayanlar için
- Gözlük veya kontakt lens ile takip

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
- Refraktif cerrahi konusunda deneyim ve fellowship
- Türk Oftalmoloji Derneği (TOD) üyeliği
- Cihaz markası ve modelinin onaylı ve güncel olması (Zeiss VisuMax, WaveLight EX500 vb.)
- Yeterli ön-değerlendirme protokolü (pakimetri + topografi + kuru göz testleri)

## Operasyon Sonrası

İşlem genellikle damla anestezi ile, ayakta tedavi olarak yapılır. Her göz için 10-15 dakika sürer.

- İlk 24 saat hafif yanma, sulanma, ışığa hassasiyet normaldir
- Koruyucu gözlük takılır
- Ofis işine dönüş 1-2 günde mümkündür
- Görme kalitesi 1-3 ayda stabilize olur
- Geç dönem kuru göz şikayeti olabilir; yapay gözyaşı kullanımı yardımcı olur

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
    bodyMd: `Botoks (botulinum toksin tip A), mimik kaslarına yapılan enjeksiyonla kasların kasılma gücünü **geçici olarak** azaltarak yüzdeki dinamik çizgilerin görünümünü hafifletir. Etki **kademeli olarak başlar ve kademeli olarak azalır**.

## Etki Ne Zaman Başlar?

- Enjeksiyondan **3-7 gün** sonra etki belirgin olarak hissedilir
- **10-14 gün** içinde tam etki yerleşir
- Bu süreçte kasılma yavaş yavaş azalır; bazı asimetriler ilk birkaç günde geçer

İlk kez botoks olan kişilerde etki ileri uygulamalardan biraz farklı olabilir; metabolizma ve kas yoğunluğu kişiseldir.

## Etki Ne Kadar Sürer?

- **3-6 ay** arası, ortalama 4 ay
- Bireysel değişkenlikleri etkileyen faktörler:
  - Yaş ve cilt kalitesi
  - Kas kütlesi ve aktivitesi (yoğun mimik kullanan kişilerde daha kısa)
  - Metabolik hız
  - Uygulanan doz ve nokta sayısı
  - Hekim deneyimi ve teknik
  - Düzenli spor yapan kişilerde etki süresi kısalabilir

## Yenileme Aralığı

Çoğu hasta için ideal yenileme aralığı **3-6 ay**dır. Erken yenileme önerilmez çünkü:

- Çok sık doz, kasta direnç (antikor) gelişme riskini teorik olarak artırabilir
- Vücudun ürüne karşı yanıt oluşturma olasılığı (nadiren etkilenir ama izlenir)

Genel yaklaşım:
- İlk 2-3 uygulama 4 ay arayla
- Sonraki yıllarda etki süresi uzayabilir (kas alıştığı için)
- Bazı hastalarda yılda 2 uygulama yeterlidir

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

- Uygulayıcı **tıp doktoru** olmalı (dermatoloji, plastik cerrahi veya tıp diploması)
- Onaylı (FDA / CE / Sağlık Bakanlığı) ürün kullanmalı
- Tıbbi tesis ortamında uygulanmalı
- Yazılı bilgilendirme + risk onamı şart
- Ürün kutusu hastaya gösterilmeli (orijinallik garantisi)

Türkiye'de **hekim olmayan kişilerin botoks/dolgu uygulaması yasaktır**. Güzellik salonları, kuaförler ve estetisyenler bu işlemi yapma yetkisine sahip değildir.

---

Botoks bireysel ihtiyaçlara göre planlanmalıdır. Bu yazı genel bilgilendirme niteliğindedir; uygulama kararınız için bir dermatoloji veya plastik cerrahi uzmanına başvurunuz.`,
    heroImageAlt: "Botoks uygulaması",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["botoks", "dolgu", "mezoterapi"],
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
    bodyMd: `Türkiye, son yıllarda saç ekimi, diş tedavisi, estetik cerrahi, göz lazeri ve tüp bebek gibi alanlarda yoğun uluslararası hasta trafiği almaktadır. Doğru klinik ve hekim seçimi; hem güvenli tedavi hem de gerçekçi sonuçlar açısından kritiktir.

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
  - Estetik cerrahi: TPRECD, ISAPS, ASPS
  - Saç ekimi: ISHRS
  - Diş hekimliği: TDB, ITI
  - Göz: TOD, ESCRS
- Mesleki yayın ve sunum geçmişi (PubMed, Google Scholar)
- Yabancı dil yeterliliği (size sunulan hizmet dili)

### 3. İletişim Kalitesi
- **Yazılı, ayrıntılı tedavi planı** ve fiyat teklifi
- Risk + komplikasyon bilgilendirmesi (yazılı, dilinizde)
- Operasyon sonrası takip planı
- 7/24 ulaşılabilir hasta koordinatörü
- Şikayet ve geri bildirim mekanizması

## Dikkat Edilmesi Gereken "Kırmızı Bayraklar"

Aşağıdaki durumlar varsa **uzaklaşın**:

- ❌ Garantili sonuç vaadi ("%X başarı", "kesin sonuç")
- ❌ Aşırı düşük fiyat ("piyasanın yarısı") — kalitesiz malzeme/deneyimsiz hekim göstergesi olabilir
- ❌ Aynı gün karar baskısı, "bugüne özel indirim"
- ❌ Tek seans çok operasyon vaadi (saç ekimi + diş + estetik bir günde)
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
- ✅ Uçuş yasak süresinin teyit edilmesi (saç ekimi 2-3 gün, rinoplasti 5-7 gün, karın germe 10-14 gün vb.)
- ✅ Türkiye'deki acil müdahale planı (komplikasyon olursa hangi hastaneye)
- ✅ Ülkenize döndüğünüzde takip edecek bir hekim iletişim bilgisi
- ✅ Sevkiyat: ilaç + post-op talimat dokümanları + iletişim bilgileri

## Sağlık Turizmi Mevzuatı

Türkiye'de sağlık turizmi yapan kuruluşların **USHAŞ tarafından yetkilendirilmesi zorunludur**. Yetkisiz aracılarla çalışmak hem yasal risk hem de hizmet kalitesi açısından sorunlu olabilir.

## Şikayet ve İtiraz

- Sağlık Bakanlığı CİMER, ALO 184 hattı
- USHAŞ resmi başvuru kanalı
- Konsolosluk / büyükelçilik desteği (yabancı hasta için)
- Türkiye Barolar Birliği — gerekiyorsa hukuki danışmanlık

---

Türkiye'de uluslararası standartlarda hizmet veren çok sayıda kurum vardır; ancak ülke seçiminin kalitesi tek başına yeterli değildir — **kurum ve hekim seçimi** kararı belirleyicidir. Bu yazı genel bilgilendirme niteliğindedir; bireysel tıbbi kararlar için **yüz yüze hekim muayenesi** şarttır.`,
    heroImageAlt: "Türkiye sağlık turizmi",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["sac-ekimi", "dis-implanti", "rinoplasti", "lasik"],
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
    bodyMd: `Estetik cerrahi planlayan hastalar, hekimin "üye olduğu derneklere" sık sık dikkat eder. Bu yazıda **TPRECD**, **ISAPS** ve **ASPS** gibi sıkça karşılaşılan dernek üyeliklerinin ne anlama geldiğini ve hekim seçiminde nasıl yorumlanması gerektiğini açıklıyoruz.

## TPRECD (Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği)

**Üyelik kriterleri:**
- Plastik, Rekonstrüktif ve Estetik Cerrahi uzmanlık eğitimini tamamlamış olmak
- Tıp Fakültesi mezunu + 5 yıllık uzmanlık eğitimi (toplam 11 yıl)
- TTB sicilli aktif hekim olmak
- Derneğin etik kurallarını kabul etmek

**Üyelik şunu gösterir:** Hekim, Plastik Cerrahi uzmanıdır ve etik kurallar çerçevesinde uygulama yapar.

**Üyelik şunu göstermez:** Tek başına belirli bir prosedürdeki **deneyim sayısını** veya **başarı oranını** kanıtlamaz. Üyelik, "uzmanlık + meslek örgütüne dahil olma" göstergesidir; ayrıca **revizyon vaka deneyimi** gibi alt-uzmanlık seviyesinde detaylı bilgi sağlamaz.

## ISAPS (International Society of Aesthetic Plastic Surgery)

**Üyelik kriterleri:**
- Kendi ülkesindeki Plastik Cerrahi uzmanlık belgesinin tanınmış olması
- Mesleki yayın, eğitim, dernek aktivitesi
- Mevcut ISAPS üyelerinden referans
- Etik kurallara bağlılık

**Üyelik şunu gösterir:** Hekim uluslararası seviyede tanınan bir profesyonel ağa dahil; uluslararası kongre, eğitim ve yayın çalışmalarına katılım gösteriyor.

**Üyelik şunu göstermez:** ISAPS akademik bir dernektir, sertifika kurumu değildir; **klinik başarı oranı** veya **belirli teknik konusunda yetkinlik** doğrudan ölçülmez.

## ASPS (American Society of Plastic Surgeons)

ABD merkezli, en eski plastik cerrahi derneklerinden biri. Üyelik için **ABD board-certified plastic surgeon** olma zorunluluğu vardır.

Türkiye'deki hekimler için doğrudan ASPS tam üyeliği nadiren mümkündür; "international member" statüsü olabilir. ASPS web sitesinde "Find a Surgeon" aracı doğrulama amaçlı kullanılabilir.

## ISHRS (International Society of Hair Restoration Surgery)

Saç ekimi alanında uluslararası referans dernek. Üyelik:

- Diploma + saç ekimi cerrahisinde eğitim/deneyim
- Mevcut üyelerden referans
- Etik kurallar

ISHRS üyeliği, **saç ekimi konusunda uluslararası standartlara bağlılık** sinyalidir. Türkiye'de saç ekimi yapan hekimlerin ISHRS üyeliği önemli bir tercih sebebidir.

## ITI (International Team for Implantology)

Diş implantı alanında uluslararası dernek; üyelik:

- Diş hekimi olmak
- İmplantoloji eğitim/sertifika
- Düzenli ITI kursları katılım

ITI üyesi diş hekimleri, implant materyallerinin standartları ve protokolleri konusunda **uluslararası güncel bilgilere erişimli** olduklarını gösterir.

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

## Pazarlama vs. Kanıt

Bazı hekim/klinik web sitelerinde "uluslararası akademisyen", "dünya çapında uzman" gibi belirsiz ifadeler kullanılır. Bu ifadeler doğrulanabilir bir kaynak (dernek üyelik no, yayın listesi, sertifika kodu) ile desteklenmiyorsa pazarlama dilidir, kanıt değildir.

Güvenilir bir hekim profilinde aşağıdakiler **somut** olarak yer alır:

- TTB sicil numarası
- Mezuniyet yılı + uzmanlık yılı + kurum
- Dernek üyelik numaraları (varsa)
- Yayın listesi (PubMed link)
- Hangi prosedürlerde hangi tekniği kullandığı

---

Hekim ve klinik seçimi tek bir kritere değil, **birden fazla doğrulanabilir göstergeye** dayanmalıdır. Bu yazı genel bilgilendirme niteliğindedir; bireysel hekim seçim kararınızda yüz yüze görüşme ve birden fazla görüş almak önerilir.`,
    heroImageAlt: "Plastik cerrahi sertifikası",
    authorName: AUTHOR,
    medicalReviewerName: REVIEWER,
    publishedAt: PUBLISHED,
    lastReviewedAt: PUBLISHED,
    nextReviewDueAt: NEXT_REVIEW,
    relatedProcedureSlugs: ["rinoplasti", "yuz-germe", "meme-buyutme", "sac-ekimi"],
    relatedSpecialtySlugs: ["estetik-cerrahi", "sac-ekimi"],
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
