import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `Yorum İtirazı`,
  description:
    "TurkaDoctor üzerindeki bir yoruma itiraz veya kaldırma başvurusu.",
  path: "/yorum-itiraz",
});

export default function YorumItirazPage() {
  return (
    <PageShell
      title="Yorum İtirazı"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Yorum İtirazı" },
      ]}
    >
      <p>
        TurkaDoctor üzerinde yayımlanan bir yorumun kaldırılması veya
        düzeltilmesi için itiraz başvurusu yapabilirsiniz. Tüm itirazlar 24
        saat içinde editör ekibimiz tarafından değerlendirilir.
      </p>

      <h2>İtiraz nedenleri</h2>
      <ul>
        <li>Gerçeğe aykırı bilgi</li>
        <li>Hakaret veya iftira içeren ifade</li>
        <li>Tıbbi reklam yasağına aykırı içerik (öncesi-sonrası iddiası, vb.)</li>
        <li>Doktorun kendisine ait olmayan bir profile yapılan yorum</li>
      </ul>

      <h2>Nasıl başvurursunuz?</h2>
      <p>
        Şu an itiraz formu hazırlanma aşamasındadır. İtirazınızı{" "}
        <a href="mailto:moderasyon@turkadoctor.com">
          moderasyon@turkadoctor.com
        </a>{" "}
        adresine aşağıdaki bilgilerle iletebilirsiniz:
      </p>
      <ul>
        <li>İtiraz edilen yorumun bulunduğu profilin URL&apos;si</li>
        <li>Yorumun kısa alıntısı veya yorum tarihi</li>
        <li>İtiraz gerekçesi</li>
        <li>Sizinle iletişim kurabileceğimiz e-posta</li>
      </ul>

      <h2>5651 sayılı Kanun — Yer sağlayıcı</h2>
      <p>
        TurkaDoctor 5651 sayılı Kanun kapsamında yer sağlayıcı sıfatıyla
        faaliyet gösterir. İçerik üreten taraf değildir; kullanıcı kaynaklı
        yorumlar için bildirim üzerine 24 saat içinde gerekli aksiyonu alır.
      </p>
    </PageShell>
  );
}
