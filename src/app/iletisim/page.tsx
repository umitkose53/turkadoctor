import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `İletişim — ${SITE_NAME}`,
  description: "Bize ulaşın — düzeltme, kurul başvurusu, KVKK talepleri.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return (
    <PageShell
      title="İletişim"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "İletişim" },
      ]}
    >
      <p>
        Aşağıdaki kanallardan bize ulaşabilirsiniz. Resmî iletişim ve KEP
        bilgileri tüzel kişilik sürecinin tamamlanmasının ardından bu sayfada
        güncellenecektir.
      </p>

      <h2>Genel iletişim</h2>
      <p>E-posta: <a href="mailto:info@turkadoctor.com">info@turkadoctor.com</a></p>

      <h2>Profil sahipliği ve düzeltme</h2>
      <p>
        Bir doktor veya klinik profili sizin adınızaysa{" "}
        <a href="/profili-talep-et">profili talep et</a> sayfasından
        başlayabilirsiniz. Mevcut bir profilde düzeltme için{" "}
        <a href="/profili-duzelt">profili düzelt</a> sayfasını kullanın.
      </p>

      <h2>Yorum itirazları</h2>
      <p>
        Bir yorumun kaldırılması veya itiraz için{" "}
        <a href="/yorum-itiraz">yorum itirazı</a> sayfasından başvurabilirsiniz.
        İtirazlar 24 saat içinde değerlendirilir.
      </p>

      <h2>Tıbbi danışma kurulu başvurusu</h2>
      <p>
        TurkaDoctor tıbbi danışma kurulumuza katılmak isteyen hekimler{" "}
        <a href="mailto:editor@turkadoctor.com">editor@turkadoctor.com</a>{" "}
        adresinden CV ve uzmanlık alanı bilgisiyle başvurabilir.
      </p>
    </PageShell>
  );
}
