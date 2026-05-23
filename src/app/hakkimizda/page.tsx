import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Hakkımızda — ${SITE_NAME}`,
  description:
    "TurkaDoctor; Türkiye genelindeki doktor ve klinikleri kamuya açık verilere dayalı olarak listeleyen bilgilendirme platformudur.",
  path: "/hakkimizda",
});

export default function HakkimizdaPage() {
  return (
    <PageShell
      title="Hakkımızda"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Hakkımızda" },
      ]}
    >
      <p>
        <strong>TurkaDoctor</strong>, Türkiye genelindeki doktor ve klinikleri
        kamuya açık verilere dayalı olarak listeleyen, bilgilendirme amaçlı bir
        dizin platformudur. Sağlık Bakanlığı ruhsatı, Türk Tabipleri Birliği
        sicil numarası ve uluslararası akreditasyonlar (JCI, ISO, Temos)
        doğrulamasına dayalı profil bilgileri sunarız.
      </p>
      <h2>Misyonumuz</h2>
      <p>
        Türkiye&apos;deki sağlık profesyonellerinin ve kuruluşlarının
        doğrulanmış bilgilerine erişimi kolaylaştırmak; hastaların bilinçli
        karar verebilmesi için tarafsız ve güncel veri sağlamak.
      </p>
      <h2>Sıralama yapmayız</h2>
      <p>
        TurkaDoctor; karşılaştırmalı sıralama, &quot;en iyi/lider&quot; gibi
        nitelendirici ifadeler veya tıbbi reklam yayını yapmaz. Tüm listeler{" "}
        <strong>alfabetik</strong> sıradadır. Sayfa başlıklarındaki arama
        motoru anahtar kelimeleri yalnız kullanıcıların aradığı içeriği
        bulmasına yardımcı olmak içindir; platformun kendi sıralaması veya
        tavsiyesi anlamına gelmez.
      </p>
      <h2>Veri kaynaklarımız</h2>
      <ul>
        <li>Sağlık Bakanlığı tescil verileri</li>
        <li>Türk Tabipleri Birliği sicil bilgileri</li>
        <li>Uluslararası akreditasyon kurumlarının yayınladığı listeler</li>
        <li>
          Doktor ve kliniklerin doğrulanmış profil sahiplenme akışı ile
          ilettiği bilgiler
        </li>
        <li>
          Google, Ekşi Sözlük, Trustpilot gibi kamuya açık kaynaklara
          yönlendirme bağlantıları (içerik kopyalanmaz, kaynak gösterilir)
        </li>
      </ul>
      <h2>Tıbbi Sorumluluk Reddi</h2>
      <p>
        Sayfalarımızdaki içerik genel bilgilendirme amaçlıdır; muayene, tanı
        veya tedavi yerine geçmez. Sağlık ile ilgili kararlar için her zaman
        hekiminize danışın.
      </p>
    </PageShell>
  );
}
