import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `KVKK`,
  description: "Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <PageShell
      title="KVKK Bilgilendirme"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "KVKK" },
      ]}
    >
      <p>
        TurkaDoctor olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) kapsamında veri sorumlusu sıfatıyla
        sorumluluklarımızın bilincindeyiz. Bu sayfa veri işleme süreçlerimiz
        hakkında genel bilgilendirme niteliğindedir.
      </p>

      <h2>İşlenen veri kategorileri</h2>
      <ul>
        <li>
          <strong>Doktor ve klinik verileri:</strong> kamuya açık meslek icrası
          bilgileri (ad, uzmanlık, çalışılan kurum, TTB sicil, SB ruhsatı)
        </li>
        <li>
          <strong>Kullanıcı yorumları:</strong> rumuz (opsiyonel), e-posta
          adresi (doğrulama için, yayında gösterilmez), yorum içeriği
        </li>
        <li>
          <strong>Teknik veri:</strong> IP, tarayıcı bilgisi, ziyaret edilen
          sayfalar (analitik amaçlı, anonimleştirilmiş)
        </li>
      </ul>

      <h2>Veri işleme amacı</h2>
      <ul>
        <li>Bilgilendirme amaçlı sağlık dizini hizmeti sunmak</li>
        <li>Kullanıcı yorumlarını doğrulamak ve moderasyon yapmak</li>
        <li>Hizmet kalitesini ölçmek (anonim analitik)</li>
        <li>Yasal yükümlülükleri yerine getirmek</li>
      </ul>

      <h2>Haklarınız</h2>
      <p>
        KVKK m.11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme,
        düzeltilmesini veya silinmesini isteme, işlenme amacını öğrenme ve diğer
        kanunda sayılan haklara sahipsiniz. Talepleriniz için{" "}
        <a href="/iletisim">iletişim</a> sayfasından bize ulaşabilirsiniz.
      </p>

      <h2>Veri Sorumlusu</h2>
      <p>
        TurkaDoctor &mdash; iletişim bilgileri ve VERBİS kayıt numarası
        yayın öncesinde bu sayfada açıklanacaktır.
      </p>

      <p className="text-xs text-zinc-500">
        Bu metin genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine
        geçmez. Resmî KVKK aydınlatma metni{" "}
        <a href="/aydinlatma-metni">aydınlatma metni</a> sayfasında yer alır.
      </p>
    </PageShell>
  );
}
