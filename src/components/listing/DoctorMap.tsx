/**
 * Doktor profil sayfası için harita + iletişim kartı.
 *
 * - Google Maps embed (key gerektirmeyen `?output=embed` formatı)
 * - Telefon `tel:` link (sadece klinik telefonu varsa)
 * - "Yol tarifi al" Google Maps directions URL'i (yeni sekme)
 *
 * Server component — etkileşim yok. `address` öncelikli; yoksa fallback
 * sorgu (doktor adı + klinik + şehir) kullanılır.
 */

type DoctorMapProps = {
  /** Tam adres (varsa öncelikli olarak harita sorgusunda ve directions'da kullanılır). */
  address?: string;
  /** Fallback olarak haritada aratılacak metin (örn. "Op. Dr. Ad Soyad Klinik Şehir"). */
  fallbackQuery: string;
  /** Klinik adı (kartta başlık altında gösterilir). */
  clinicName?: string;
  /** Klinik telefonu — `tel:` link için ham metin. */
  phone?: string;
};

export function DoctorMap({
  address,
  fallbackQuery,
  clinicName,
  phone,
}: DoctorMapProps) {
  const query = address ?? fallbackQuery;
  const encoded = encodeURIComponent(query);
  const embedSrc = `https://www.google.com/maps?q=${encoded}&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encoded}`;
  const telHref = phone ? `tel:${phone.replace(/\s/g, "")}` : undefined;

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="aspect-[16/9] w-full bg-zinc-100">
        <iframe
          src={embedSrc}
          title={
            clinicName
              ? `${clinicName} konum haritası`
              : "Klinik konum haritası"
          }
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
      <div className="flex flex-wrap gap-2 border-t border-zinc-200 p-4">
        {telHref ? (
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
          >
            <span aria-hidden>📞</span>
            Telefon ile ara
          </a>
        ) : null}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50"
        >
          <span aria-hidden>🧭</span>
          Yol tarifi al
        </a>
      </div>
    </div>
  );
}
