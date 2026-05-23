import type { ReviewSignal } from "@/data/types";

const SOURCE_LABELS: Record<ReviewSignal["source"], string> = {
  google_places: "Google",
  eksi: "Ekşi Sözlük",
  trustpilot: "Trustpilot",
  whatclinic: "WhatClinic",
  doktortakvimi: "Doktortakvimi",
  doktorsitesi: "Doktorsitesi",
};

const SOURCE_BADGES: Record<ReviewSignal["source"], string> = {
  google_places: "🅖",
  eksi: "🅔",
  trustpilot: "🅣",
  whatclinic: "🅦",
  doktortakvimi: "🅓",
  doktorsitesi: "🅢",
};

/**
 * Liste kartında ve profil sayfasında kullanılan tek satır kaynak özeti.
 * Doktortakvimi/Doktorsitesi gibi `visible: false` olanlar hiç gösterilmez
 * (yalnız iç ranking sinyali).
 */
export function ReviewSignalRow({ signal }: { signal: ReviewSignal }) {
  if (!signal.visible) return null;

  const label = SOURCE_LABELS[signal.source];
  const icon = SOURCE_BADGES[signal.source];

  const parts: string[] = [];
  if (signal.ratingAvg !== undefined) {
    parts.push(`★ ${signal.ratingAvg.toFixed(1)}`);
  }
  if (signal.reviewCount !== undefined) {
    parts.push(`${signal.reviewCount} yorum`);
  }
  if (signal.extraCount !== undefined) {
    parts.push(`${signal.extraCount} entry`);
  }
  if (parts.length === 0) {
    parts.push("aktif profil");
  }

  return (
    <div className="flex items-center gap-2 text-xs text-zinc-600">
      <span aria-hidden className="select-none text-sm">
        {icon}
      </span>
      <span className="font-medium text-zinc-900">{label}</span>
      <span>{parts.join(" · ")}</span>
      {signal.sourceUrl ? (
        <a
          href={signal.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="ml-auto text-sky-700 hover:underline"
        >
          Görüntüle →
        </a>
      ) : null}
    </div>
  );
}
