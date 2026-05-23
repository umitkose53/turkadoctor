import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Blog — ${SITE_NAME}`,
  description: "Tıbbi inceleyici onaylı sağlık ve dizin makaleleri.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Blog" },
      ]}
    >
      <p>
        Blog bölümümüz hazırlanma aşamasındadır. Burada{" "}
        <strong>tıbbi inceleyici onaylı</strong> sağlık ve dizin
        makalelerimizi yayımlayacağız: tedavi rehberleri, hekim seçim
        kriterleri, klinik akreditasyonları ve KVKK / 5651 mevzuatı hakkında
        kullanıcı bilgilendirmesi.
      </p>
      <p>
        Bu arada{" "}
        <a href="/tedaviler">tedavi rehberlerimize</a> göz atabilir veya{" "}
        <a href="/branslar">branş dizinimizi</a> keşfedebilirsiniz.
      </p>
    </PageShell>
  );
}
