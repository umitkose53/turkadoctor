import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Editöryel Politika — ${SITE_NAME}`,
  description:
    "TurkaDoctor içerik üretim ve doğrulama süreçleri; kaynak hiyerarşisi ve hata düzeltme prosedürü.",
  path: "/editoryel-politika",
});

export default function EditoryelPolitikaPage() {
  return (
    <PageShell
      title="Editöryel Politika"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Editöryel Politika" },
      ]}
    >
      <h2>1. İçerik üretim süreci</h2>
      <p>
        Tüm tıbbi bilgilendirme içerikleri, sağlık alanında editöryel deneyimi
        olan bir editör tarafından kaleme alınır ve ilgili branşta uzman bir
        hekim tarafından gözden geçirilir. Her makalenin altında{" "}
        <strong>yazar, tıbbi inceleyici, yayın tarihi ve bir sonraki
        gözden geçirme tarihi</strong> açıkça yer alır.
      </p>

      <h2>2. Doktor ve klinik profilleri</h2>
      <p>Doktor profilleri aşağıdaki kaynaklarla doğrulanır:</p>
      <ul>
        <li>Türk Tabipleri Birliği sicil sorgusu</li>
        <li>Uzmanlık dalı tescili</li>
        <li>Çalıştığı kurum (hastane / klinik) bağlantı doğrulaması</li>
        <li>Doktorun kendi onayı (claimed badge)</li>
      </ul>
      <p>Klinik profilleri için:</p>
      <ul>
        <li>Sağlık Bakanlığı ruhsat numarası ile doğrulama</li>
        <li>JCI, ISO 9001:2015, Temos vb. akreditasyonların kontrol edilmesi</li>
        <li>Adres ve iletişim bilgilerinin Bakanlık kayıtlarıyla eşleşmesi</li>
      </ul>

      <h2>3. Sıralama yoktur</h2>
      <p>
        TurkaDoctor; karşılaştırmalı sıralama, &quot;en iyi&quot; etiketi,
        kampanya, indirim veya yıldız bazlı sıralama yapmaz. Tüm listeler
        alfabetik sıradadır. Kullanıcının uyguladığı filtrelerin sonuçları da
        alfabetik sırada sunulur.
      </p>

      <h2>4. Kaynak hiyerarşisi</h2>
      <p>
        Tıbbi içerikte atıf yapılan kaynaklar şu hiyerarşiye uyar:
      </p>
      <ol>
        <li>
          Sistematik derleme ve klinik kılavuzlar (Cochrane, NICE, WHO, NIH)
        </li>
        <li>Türk uzmanlık dernekleri klinik kılavuzları</li>
        <li>Yüksek etki faktörlü tıp dergileri (PubMed üzerinden)</li>
        <li>Sağlık Bakanlığı resmî bildirileri ve mevzuat</li>
      </ol>

      <h2>5. Hata düzeltme</h2>
      <p>
        Bir doktor veya klinik kendi profilindeki hataları{" "}
        <a href="/profili-duzelt">profili düzelt</a> akışı ile bildirebilir.
        Bildirim 24 saat içinde TurkaDoctor editör ekibi tarafından
        değerlendirilir; haklı bulunduğunda profil güncellenir.
      </p>

      <h2>6. Yorum politikası</h2>
      <p>
        Platformda yer alan tüm kullanıcı yorumları, e-posta doğrulamasından
        geçer ve moderatör onayından sonra yayımlanır. Doktorların yorumlara
        cevap hakkı vardır. Hakaret, iftira veya gerçeğe aykırı içerik
        gerekçesiyle <a href="/yorum-itiraz">yorum itirazı</a> başvurusu
        yapılabilir; başvurular 24 saat içinde değerlendirilir.
      </p>

      <h2>7. Üçüncü taraf kaynaklar</h2>
      <p>
        Google Maps, Ekşi Sözlük, Trustpilot ve WhatClinic gibi kaynaklara yönelik
        bağlantılar; içerik kopyalamadan, kaynağa atıflı ve yalnız yönlendirme
        biçiminde sunulur. Bu kaynaklardaki puanlar TurkaDoctor&apos;un kendi
        değerlendirmesine dahil edilmez.
      </p>
    </PageShell>
  );
}
