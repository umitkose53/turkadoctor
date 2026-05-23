import type { City } from "./types";

const REVIEWER = "TurkaDoctor Tıbbi Danışma Kurulu";
const LAST_REVIEWED = "2026-05-23";
const NEXT_REVIEW = "2026-11-23";

/**
 * Türkiye 81 il — plaka kodu sırasında.
 * 8-10 büyük şehirde uzun-form E-E-A-T içerik mevcuttur.
 */
export const cities: City[] = [
  {
    slug: "adana",
    name: "Adana",
    plateCode: 1,
    intro:
      "Adana; Güneydoğu Anadolu Bölgesi'nin en büyük metropollerinden biri olup özel ve devlet sağlık kuruluşları ile bölgesel bir sağlık merkezi konumundadır.",
    popularSpecialtySlugs: [
      "kardiyoloji",
      "ic-hastaliklari",
      "kadin-hastaliklari-ve-dogum",
      "dis-hekimligi",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  { slug: "adiyaman", name: "Adıyaman", plateCode: 2 },
  { slug: "afyonkarahisar", name: "Afyonkarahisar", plateCode: 3 },
  { slug: "agri", name: "Ağrı", plateCode: 4 },
  { slug: "amasya", name: "Amasya", plateCode: 5 },
  {
    slug: "ankara",
    name: "Ankara",
    plateCode: 6,
    intro:
      "Ankara; Türkiye'nin başkenti ve ülkenin en büyük ikinci tıbbi araştırma ve uzmanlık merkezidir. Hacettepe, Gazi, Ankara Üniversitesi gibi köklü tıp fakülteleri ile özel hastane ağı geniştir.",
    fullContent:
      "Ankara, üniversite hastanelerinin yoğunluğu ile Türkiye'nin akademik tıp merkezi konumundadır. Hacettepe Üniversitesi Tıp Fakültesi, Ankara Üniversitesi Tıp Fakültesi ve Gazi Üniversitesi Tıp Fakültesi gibi köklü kurumlar; ileri tedavi gerektiren durumların yönlendirildiği referans merkezler arasındadır.\n\nÖzel hastane sektöründe Medical Park, Acıbadem, Liv Hospital gibi zincirler ile Çankaya ve Ümitköy bölgelerinde yoğunlaşan özel klinikler bulunur. Diş hekimliği, estetik cerrahi, ortopedi ve kardiyoloji öne çıkan alanlardır.\n\nAnkara'da hekim seçerken; çalıştığı kurumun Sağlık Bakanlığı ruhsatlı olması, hekimin Türk Tabipleri Birliği sicil numarasının doğrulanabilmesi ve hekimin ilgili branş uzmanlık derneği üyeliği aranan başlıca güven göstergeleridir.",
    popularSpecialtySlugs: [
      "estetik-cerrahi",
      "dis-hekimligi",
      "kardiyoloji",
      "ortopedi-ve-travmatoloji",
      "kadin-hastaliklari-ve-dogum",
      "goz-hastaliklari",
      "dermatoloji",
      "sac-ekimi",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  {
    slug: "antalya",
    name: "Antalya",
    plateCode: 7,
    intro:
      "Antalya; Akdeniz kıyısının en büyük şehri ve aynı zamanda Türkiye'nin sağlık turizmi açısından öne çıkan merkezlerinden biridir.",
    fullContent:
      "Antalya, yılda milyonlarca uluslararası ziyaretçiyi ağırlayan kuruluşları, gelişmiş ulaşım altyapısı ve sıcak iklimi ile özellikle diş tedavisi, estetik cerrahi ve saç ekimi alanlarında medical tourism için tercih edilen bir lokasyondur. Muratpaşa, Konyaaltı ve Lara semtleri özel hastane ve klinik yoğunluğunun en yüksek olduğu bölgelerdir.\n\nDiş tedavisi turizmi açısından şehirde yoğun aktivite mevcuttur; All-on-4 ve zirkonyum kaplama gibi uygulamalar uluslararası hastalara yönelik paketler halinde sunulmaktadır. Yurt dışından gelen hastalar için klinik seçiminde TÜRSAB onaylı sağlık turizmi acente bağlantısı ve USHAŞ kapsamındaki kuruluşlarla çalışmak güven sağlar.\n\nBölgenin önde gelen kuruluşları arasında Medical Park Antalya Hastanesi gibi özel hastaneler ile Antalya Eğitim ve Araştırma Hastanesi gibi devlet kuruluşları yer alır.",
    medicalTourismNote:
      "Antalya, Türkiye'nin önde gelen medical tourism merkezlerinden biridir. Uluslararası hasta hizmeti veren klinikler için USHAŞ kapsamında çalışmak ve sağlık turizmi yetki belgesi şarttır.",
    popularSpecialtySlugs: [
      "dis-hekimligi",
      "estetik-cerrahi",
      "sac-ekimi",
      "goz-hastaliklari",
      "dermatoloji",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  { slug: "artvin", name: "Artvin", plateCode: 8 },
  { slug: "aydin", name: "Aydın", plateCode: 9 },
  { slug: "balikesir", name: "Balıkesir", plateCode: 10 },
  { slug: "bilecik", name: "Bilecik", plateCode: 11 },
  { slug: "bingol", name: "Bingöl", plateCode: 12 },
  { slug: "bitlis", name: "Bitlis", plateCode: 13 },
  { slug: "bolu", name: "Bolu", plateCode: 14 },
  { slug: "burdur", name: "Burdur", plateCode: 15 },
  {
    slug: "bursa",
    name: "Bursa",
    plateCode: 16,
    intro:
      "Bursa; Marmara Bölgesi'nin en büyük şehirlerinden biri olup Uludağ Üniversitesi Tıp Fakültesi gibi köklü kurumlarla bölgesel sağlık merkezi konumundadır.",
    popularSpecialtySlugs: [
      "kardiyoloji",
      "estetik-cerrahi",
      "ortopedi-ve-travmatoloji",
      "kadin-hastaliklari-ve-dogum",
      "dis-hekimligi",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  { slug: "canakkale", name: "Çanakkale", plateCode: 17 },
  { slug: "cankiri", name: "Çankırı", plateCode: 18 },
  { slug: "corum", name: "Çorum", plateCode: 19 },
  { slug: "denizli", name: "Denizli", plateCode: 20 },
  { slug: "diyarbakir", name: "Diyarbakır", plateCode: 21 },
  { slug: "edirne", name: "Edirne", plateCode: 22 },
  { slug: "elazig", name: "Elazığ", plateCode: 23 },
  { slug: "erzincan", name: "Erzincan", plateCode: 24 },
  { slug: "erzurum", name: "Erzurum", plateCode: 25 },
  { slug: "eskisehir", name: "Eskişehir", plateCode: 26 },
  { slug: "gaziantep", name: "Gaziantep", plateCode: 27 },
  { slug: "giresun", name: "Giresun", plateCode: 28 },
  { slug: "gumushane", name: "Gümüşhane", plateCode: 29 },
  { slug: "hakkari", name: "Hakkari", plateCode: 30 },
  { slug: "hatay", name: "Hatay", plateCode: 31 },
  { slug: "isparta", name: "Isparta", plateCode: 32 },
  { slug: "mersin", name: "Mersin", plateCode: 33 },
  {
    slug: "istanbul",
    name: "İstanbul",
    plateCode: 34,
    intro:
      "İstanbul; Türkiye'nin ekonomik merkezi ve sağlık sektörünün en yoğun olduğu metropolüdür. Avrupa ve Asya yakalarında JCI akredite uluslararası hastaneler, üniversite tıp fakülteleri ve binlerce özel klinik ile global bir sağlık merkezi konumundadır.",
    fullContent:
      "İstanbul; saç ekimi, estetik cerrahi, diş tedavisi, göz lazeri ve tüp bebek gibi alanlarda Türkiye'nin uluslararası medical tourism akışının büyük çoğunluğunu çekmektedir. Şehir; JCI akredite Acıbadem, Memorial, Liv Hospital, Medipol, Florence Nightingale, VKV Amerikan Hastanesi gibi büyük zincirlerin ana üslerine ev sahipliği yapar.\n\nÜniversite tıp fakültelerinden Hacettepe ve Çapa Tıp Fakültesi, Cerrahpaşa Tıp Fakültesi ileri seviye tedavi referans noktalarıdır. Şişli, Maslak, Ataşehir ve Kadıköy semtleri özel klinik yoğunluğu en yüksek bölgelerdir; saç ekimi merkezleri özellikle Şişli ve Ataşehir'de yoğunlaşır.\n\nİstanbul'da hekim ve klinik seçerken; JCI veya Temos uluslararası akreditasyonu, Sağlık Bakanlığı ruhsat numarasının açık olarak yer alması, hekimin TTB sicil numarasının doğrulanabilmesi ve uluslararası uzmanlık dernek üyelikleri başlıca güven göstergeleridir.",
    medicalTourismNote:
      "İstanbul, dünya genelinde saç ekiminde en fazla hasta çeken şehirlerden biridir. Uluslararası hasta hizmeti veren klinikler için USHAŞ kapsamında çalışma şartı vardır.",
    popularSpecialtySlugs: [
      "estetik-cerrahi",
      "sac-ekimi",
      "dis-hekimligi",
      "dermatoloji",
      "goz-hastaliklari",
      "kadin-hastaliklari-ve-dogum",
      "kardiyoloji",
      "psikoloji",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  {
    slug: "izmir",
    name: "İzmir",
    plateCode: 35,
    intro:
      "İzmir; Ege Bölgesi'nin en büyük şehri ve Türkiye'nin üçüncü büyük sağlık merkezidir. Ege Üniversitesi ve Dokuz Eylül Üniversitesi Tıp Fakülteleri ile özel hastane ağı geniştir.",
    fullContent:
      "İzmir; özellikle göz hastalıkları, kardiyoloji ve estetik cerrahi alanlarında bölgenin önde gelen merkezidir. Alsancak, Bornova ve Karşıyaka semtleri özel klinik yoğunluğunun en yüksek olduğu bölgelerdir.\n\nKent Hastanesi (JCI akredite), Medical Park ve Özel Sağlık gibi özel hastaneler ile Ege Üniversitesi Hastanesi gibi üniversite kurumları şehrin sağlık altyapısının omurgasını oluşturur.\n\nMedical tourism açısından İzmir; Antalya ve İstanbul'a göre daha küçük bir paya sahip olsa da Yunan adalarına yakınlığı nedeniyle özellikle Avrupa'dan gelen hastalar için pratik bir alternatif konumundadır.",
    popularSpecialtySlugs: [
      "estetik-cerrahi",
      "goz-hastaliklari",
      "kardiyoloji",
      "dis-hekimligi",
      "dermatoloji",
    ],
    medicalReviewerName: REVIEWER,
    lastReviewedAt: LAST_REVIEWED,
    nextReviewDueAt: NEXT_REVIEW,
  },
  { slug: "kars", name: "Kars", plateCode: 36 },
  { slug: "kastamonu", name: "Kastamonu", plateCode: 37 },
  { slug: "kayseri", name: "Kayseri", plateCode: 38 },
  { slug: "kirklareli", name: "Kırklareli", plateCode: 39 },
  { slug: "kirsehir", name: "Kırşehir", plateCode: 40 },
  { slug: "kocaeli", name: "Kocaeli", plateCode: 41 },
  { slug: "konya", name: "Konya", plateCode: 42 },
  { slug: "kutahya", name: "Kütahya", plateCode: 43 },
  { slug: "malatya", name: "Malatya", plateCode: 44 },
  { slug: "manisa", name: "Manisa", plateCode: 45 },
  { slug: "kahramanmaras", name: "Kahramanmaraş", plateCode: 46 },
  { slug: "mardin", name: "Mardin", plateCode: 47 },
  { slug: "mugla", name: "Muğla", plateCode: 48 },
  { slug: "mus", name: "Muş", plateCode: 49 },
  { slug: "nevsehir", name: "Nevşehir", plateCode: 50 },
  { slug: "nigde", name: "Niğde", plateCode: 51 },
  { slug: "ordu", name: "Ordu", plateCode: 52 },
  { slug: "rize", name: "Rize", plateCode: 53 },
  { slug: "sakarya", name: "Sakarya", plateCode: 54 },
  { slug: "samsun", name: "Samsun", plateCode: 55 },
  { slug: "siirt", name: "Siirt", plateCode: 56 },
  { slug: "sinop", name: "Sinop", plateCode: 57 },
  { slug: "sivas", name: "Sivas", plateCode: 58 },
  { slug: "tekirdag", name: "Tekirdağ", plateCode: 59 },
  { slug: "tokat", name: "Tokat", plateCode: 60 },
  { slug: "trabzon", name: "Trabzon", plateCode: 61 },
  { slug: "tunceli", name: "Tunceli", plateCode: 62 },
  { slug: "sanliurfa", name: "Şanlıurfa", plateCode: 63 },
  { slug: "usak", name: "Uşak", plateCode: 64 },
  { slug: "van", name: "Van", plateCode: 65 },
  { slug: "yozgat", name: "Yozgat", plateCode: 66 },
  { slug: "zonguldak", name: "Zonguldak", plateCode: 67 },
  { slug: "aksaray", name: "Aksaray", plateCode: 68 },
  { slug: "bayburt", name: "Bayburt", plateCode: 69 },
  { slug: "karaman", name: "Karaman", plateCode: 70 },
  { slug: "kirikkale", name: "Kırıkkale", plateCode: 71 },
  { slug: "batman", name: "Batman", plateCode: 72 },
  { slug: "sirnak", name: "Şırnak", plateCode: 73 },
  { slug: "bartin", name: "Bartın", plateCode: 74 },
  { slug: "ardahan", name: "Ardahan", plateCode: 75 },
  { slug: "igdir", name: "Iğdır", plateCode: 76 },
  { slug: "yalova", name: "Yalova", plateCode: 77 },
  { slug: "karabuk", name: "Karabük", plateCode: 78 },
  { slug: "kilis", name: "Kilis", plateCode: 79 },
  { slug: "osmaniye", name: "Osmaniye", plateCode: 80 },
  { slug: "duzce", name: "Düzce", plateCode: 81 },
];

export function findCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/**
 * Türkiye'nin en büyük metropolleri — anasayfada öne çıkanlar listesi.
 * Plaka kodu sırasında değil, nüfus / medical tourism önemine göre.
 */
export const FEATURED_CITY_SLUGS = [
  "istanbul",
  "ankara",
  "izmir",
  "antalya",
  "bursa",
  "adana",
  "konya",
  "gaziantep",
  "kayseri",
  "mersin",
  "eskisehir",
  "samsun",
  "denizli",
  "diyarbakir",
  "trabzon",
  "kocaeli",
];
