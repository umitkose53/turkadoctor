/**
 * Yorumlar kart grid'i — Google + Trustpilot vb. dış kaynaklar.
 *
 * Mevzuat:
 * - Google yorumlarının TAM METNİ gösterilmez; yalnız rozet + dış link.
 * - "Yorumlar doğrulanmamıştır" disclaimer'ı kartların ÜSTÜNDE.
 * - "Garanti", "X numara", "%X başarı" gibi ifadeler yok.
 * - aggregateRating Physician schema'sının üzerine konmaz (page.tsx'de halledildi).
 *
 * Veri: `doctor.signals` array'inden `visible: true` olanlar.
 * Eğer hiç visible signal yoksa, çağıran bu component'i hiç render etmemeli.
 */

import type { ReviewSignal } from "@/data/types";

const SOURCE_META: Record<
  ReviewSignal["source"],
  { label: string; icon: string; iconBg: string; iconColor: string }
> = {
  google_places: {
    label: "Google",
    icon: "G",
    iconBg: "bg-white border border-zinc-200",
    iconColor: "text-blue-600",
  },
  trustpilot: {
    label: "Trustpilot",
    icon: "★",
    iconBg: "bg-emerald-50 border border-emerald-200",
    iconColor: "text-emerald-600",
  },
  eksi: {
    label: "Ekşi Sözlük",
    icon: "E",
    iconBg: "bg-lime-50 border border-lime-200",
    iconColor: "text-lime-700",
  },
  whatclinic: {
    label: "WhatClinic",
    icon: "W",
    iconBg: "bg-sky-50 border border-sky-200",
    iconColor: "text-sky-700",
  },
  doktortakvimi: {
    label: "Doktortakvimi",
    icon: "D",
    iconBg: "bg-zinc-50 border border-zinc-200",
    iconColor: "text-zinc-700",
  },
  doktorsitesi: {
    label: "Doktorsitesi",
    icon: "D",
    iconBg: "bg-zinc-50 border border-zinc-200",
    iconColor: "text-zinc-700",
  },
};

function ReviewSourceCard({ signal }: { signal: ReviewSignal }) {
  const meta = SOURCE_META[signal.source];
  const hasRating = signal.ratingAvg !== undefined;
  const reviewCount = signal.reviewCount ?? signal.extraCount;

  const cardInner = (
    <div className="flex h-full items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 hover:shadow-sm">
      <div
        aria-hidden
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold ${meta.iconBg} ${meta.iconColor}`}
      >
        {meta.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="font-medium text-zinc-900">{meta.label}</div>
          {signal.sourceUrl ? (
            <span
              aria-hidden
              className="shrink-0 text-zinc-400 group-hover:text-sky-600"
            >
              ↗
            </span>
          ) : null}
        </div>
        <div className="mt-1 flex items-baseline gap-1.5 text-sm">
          {hasRating ? (
            <>
              <span className="text-amber-500" aria-hidden>
                ★
              </span>
              <span className="font-semibold text-zinc-900">
                {signal.ratingAvg!.toFixed(1)}
                <span className="font-normal text-zinc-500">/5</span>
              </span>
            </>
          ) : (
            <span className="text-zinc-600">Aktif profil</span>
          )}
        </div>
        {reviewCount !== undefined ? (
          <div className="mt-0.5 text-xs text-zinc-500">
            {reviewCount} değerlendirme
          </div>
        ) : null}
      </div>
    </div>
  );

  if (signal.sourceUrl) {
    return (
      <a
        href={signal.sourceUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group block h-full"
      >
        {cardInner}
      </a>
    );
  }
  return <div className="h-full">{cardInner}</div>;
}

export function ReviewsCard({ signals }: { signals: ReviewSignal[] }) {
  const visible = signals.filter((s) => s.visible);
  if (visible.length === 0) return null;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-900">Yorumlar</h2>
      </div>
      <div
        className="mt-2 flex items-start gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-900"
        role="note"
      >
        <span aria-hidden className="mt-0.5 select-none font-semibold">
          ⓘ
        </span>
        <span>
          Yorumlar doğrulanmamıştır. Dış kaynaklardan derlenen değerlendirme
          sinyalleri TurkaDoctor puanına dahil edilmez; ilgili platformda
          yayınlandığı şekliyle yönlendirme amaçlıdır.
        </span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((s) => (
          <ReviewSourceCard key={s.source} signal={s} />
        ))}
      </div>
    </div>
  );
}
