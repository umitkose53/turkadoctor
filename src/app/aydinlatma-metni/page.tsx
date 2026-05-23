import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/seo/title";

export const metadata: Metadata = buildMetadata({
  title: `Aydınlatma Metni — ${SITE_NAME}`,
  description: "KVKK kapsamında veri sorumlusu aydınlatma metni.",
  path: "/aydinlatma-metni",
});

export default function AydinlatmaMetniPage() {
  return (
    <PageShell
      title="Aydınlatma Metni"
      breadcrumbItems={[
        { name: "Anasayfa", href: "/" },
        { name: "Aydınlatma Metni" },
      ]}
    >
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun
        (&quot;KVKK&quot;) 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine
        Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında,
        veri sorumlusu sıfatıyla aşağıdaki bilgilendirmeyi yaparız.
      </p>

      <h2>1. Veri Sorumlusu</h2>
      <p>
        TurkaDoctor &mdash; nihai tüzel kişilik bilgileri, tic. sicil ve KEP
        adresi resmî yayın öncesinde bu sayfada güncellenecektir.
      </p>

      <h2>2. İşlenen Kişisel Veriler</h2>
      <ul>
        <li>
          <strong>Kamuya açık meslek verileri:</strong> hekim/klinik adı,
          uzmanlık, çalışılan kurum, TTB sicil numarası, SB ruhsat numarası
        </li>
        <li>
          <strong>İletişim verisi:</strong> kullanıcı tarafından gönüllü olarak
          paylaşılan e-posta (yorum doğrulama için)
        </li>
        <li>
          <strong>İşlem güvenliği verisi:</strong> IP adresi, tarayıcı ve
          oturum bilgileri
        </li>
      </ul>

      <h2>3. İşleme Amaçları</h2>
      <ul>
        <li>Bilgilendirme amaçlı sağlık dizini hizmeti sunmak</li>
        <li>Profil sahibi hekim/kliniklerin claim ve düzeltme akışlarını yürütmek</li>
        <li>Yorum doğrulama ve moderasyon</li>
        <li>5651 sayılı Kanun kapsamında yer sağlayıcı yükümlülükleri</li>
      </ul>

      <h2>4. Hukuki Sebep</h2>
      <ul>
        <li>
          KVKK m.5/2-ç: Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi
        </li>
        <li>
          KVKK m.5/2-d: İlgili kişinin kendisi tarafından alenileştirilmiş olması
          (hekim/klinik meslek icrası bilgileri)
        </li>
        <li>KVKK m.5/2-f: Meşru menfaat</li>
        <li>
          Kullanıcı yorumları için: KVKK m.5/1 açık rıza (yorum gönderim
          formunda alınır)
        </li>
      </ul>

      <h2>5. Aktarım</h2>
      <p>
        Verileriniz; hosting ve teknik altyapı sağlayıcıları (Vercel, Cloudflare,
        Neon) ile sınırlı olmak üzere, yalnız hizmetin sürdürülmesi için gerekli
        ölçüde aktarılır. Yurt dışına aktarım, KVKK m.9 kapsamında uygun
        güvencelerle gerçekleştirilir.
      </p>

      <h2>6. Saklama Süresi</h2>
      <p>
        Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır;
        süre sonunda silinir, yok edilir veya anonim hâle getirilir.
      </p>

      <h2>7. İlgili Kişinin Hakları</h2>
      <p>
        KVKK m.11 kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme,
        düzeltilmesini, silinmesini veya yok edilmesini talep etme, yurt
        içindeki/dışındaki üçüncü kişilere aktarılıp aktarılmadığını öğrenme,
        kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep
        etme haklarına sahipsiniz.
      </p>

      <p>
        Başvurularınızı{" "}
        <a href="/iletisim">iletişim</a> sayfasındaki KEP veya yazılı başvuru
        kanallarıyla yapabilirsiniz.
      </p>
    </PageShell>
  );
}
