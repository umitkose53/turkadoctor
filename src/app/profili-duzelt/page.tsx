import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Profili Düzelt — ${SITE_NAME}`,
  description:
    "Bir doktor veya klinik profilindeki hatalı bilgi için düzeltme başvurusu.",
  path: "/profili-duzelt",
});

export default function ProfiliDuzeltPage() {
  return (
    <PageShell
      title="Profili Düzelt"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Profili Düzelt" },
      ]}
    >
      <p>
        Bir doktor veya klinik profilinde hatalı/eksik bilgi tespit ettiyseniz
        düzeltme başvurusunda bulunabilirsiniz. Talepler 24 saat içinde editör
        ekibimiz tarafından incelenir.
      </p>
      <p>
        Şu an düzeltme formu hazırlanma aşamasındadır. Düzeltme başvurunuzu{" "}
        <a href="mailto:editor@turkadoctor.com">editor@turkadoctor.com</a>{" "}
        adresine aşağıdaki bilgilerle iletin:
      </p>
      <ul>
        <li>İlgili profilin URL&apos;si</li>
        <li>Hatalı veya eksik bilgi</li>
        <li>Doğru bilgi ve mümkünse kaynağı (TTB sicil, SB ruhsat, vb.)</li>
        <li>Sizin iletişim e-postanız</li>
      </ul>
    </PageShell>
  );
}
