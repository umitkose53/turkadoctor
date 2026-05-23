import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: `Tıbbi Danışma Kurulu`,
  description:
    "TurkaDoctor içeriklerini gözden geçiren hekimlerden oluşan tıbbi danışma kurulu.",
  path: "/tibbi-danisma-kurulu",
});

export default function TibbiDanismaKuruluPage() {
  return (
    <PageShell
      title="Tıbbi Danışma Kurulu"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Tıbbi Danışma Kurulu" },
      ]}
    >
      <p>
        TurkaDoctor&apos;da yayınlanan tıbbi bilgilendirme içerikleri, alanında
        uzman hekimlerden oluşan bir tıbbi danışma kurulu tarafından gözden
        geçirilir. Her tedavi rehberi ve klinik branş içeriği, ilgili branşta
        uzman bir hekim tarafından son haline getirilir ve yayın tarihine ek
        olarak <em>bir sonraki gözden geçirme</em> tarihi atanır.
      </p>
      <h2>Kurul oluşturulma süreci</h2>
      <p>
        Kurul üyeleri:{" "}
      </p>
      <ul>
        <li>Türk Tabipleri Birliği tescilli olmalı</li>
        <li>Uzmanlık belgesi ve aktif çalışma kaydı bulunmalı</li>
        <li>Son 5 yılda disiplin işlemi almamış olmalı</li>
        <li>
          İlgili meslek odası veya derneğine üye olmalı (TTB, branş uzmanlık
          derneği)
        </li>
      </ul>
      <h2>Şu anda</h2>
      <p>
        TurkaDoctor MVP yayın aşamasındadır. Tıbbi danışma kurulu, yayına
        geçilirken nihai hâliyle açıklanacak ve bu sayfada kurul üyelerinin
        adı, uzmanlık dalı, TTB sicil numarası, eğitim ve mesleki üyelikleri
        yayımlanacaktır.
      </p>
      <h2>Hekim katılım ilanı</h2>
      <p>
        Tıbbi danışma kurulumuza katılmak isteyen hekimler{" "}
        <a href="/iletisim">iletişim</a> sayfasından bize ulaşabilir.
      </p>
    </PageShell>
  );
}
