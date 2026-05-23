import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Çerez Politikası — ${SITE_NAME}`,
  description: "Site içinde kullanılan çerezler ve tercihler hakkında bilgi.",
  path: "/cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <PageShell
      title="Çerez Politikası"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Çerez Politikası" },
      ]}
    >
      <p>
        Bu sayfa, TurkaDoctor&apos;da kullanılan çerezler ve benzeri izleme
        teknolojileri hakkında genel bilgi sağlar.
      </p>

      <h2>1. Çerez Nedir?</h2>
      <p>
        Çerez; bir web sitesini ziyaret ettiğinizde tarayıcınız tarafından
        cihazınıza kaydedilen küçük bir metin dosyasıdır. Çerezler, sitenin
        çalışmasını sağlamak, kullanıcı tercihlerini hatırlamak ve anonim
        istatistik toplamak için kullanılır.
      </p>

      <h2>2. Kullandığımız çerez türleri</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> sitenin temel işlevleri için
          gereklidir (oturum, güvenlik).
        </li>
        <li>
          <strong>Analitik çerezler:</strong> ziyaretçi davranışını anonim
          olarak ölçer (Vercel Speed Insights, ileride PostHog).
        </li>
      </ul>

      <h2>3. Üçüncü taraf çerezler</h2>
      <p>
        Sitemizde gömülü Google Maps widget&apos;ları ve harici link
        bağlantılarına yönlendirme sırasında, ilgili üçüncü taraf siteler
        kendi çerezlerini ayarlayabilir. Bu çerezler ilgili üçüncü tarafın
        gizlilik politikalarına tabidir.
      </p>

      <h2>4. Çerez yönetimi</h2>
      <p>
        Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz.
        Zorunlu çerezleri engellerseniz sitenin bazı bölümleri düzgün
        çalışmayabilir.
      </p>
    </PageShell>
  );
}
