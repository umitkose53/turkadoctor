import Link from "next/link";

import type { ClinicSummary } from "@/data/types";
import { findCity } from "@/data/cities";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReviewSignalRow } from "./ReviewSignalRow";

const TYPE_LABELS: Record<ClinicSummary["type"], string> = {
  muayenehane: "Muayenehane",
  poliklinik: "Poliklinik",
  ozel_hastane: "Özel Hastane",
  devlet_hastanesi: "Devlet Hastanesi",
  universite_hastanesi: "Üniversite Hastanesi",
  tip_merkezi: "Tıp Merkezi",
  agdc: "Ağız ve Diş Sağlığı Merkezi",
};

export function ClinicCard({ clinic }: { clinic: ClinicSummary }) {
  const city = findCity(clinic.citySlug)?.name;
  const visibleSignals = clinic.signals.filter((s) => s.visible);

  return (
    <Card as="article" className="grid grid-cols-[64px_1fr] gap-4">
      <div
        aria-hidden
        className="flex h-16 w-16 items-center justify-center rounded-lg bg-zinc-100 text-base font-semibold text-zinc-500"
      >
        {clinic.name.slice(0, 2).toLocaleUpperCase("tr-TR")}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate text-base font-semibold text-zinc-900">
            <Link
              href={`/klinik/${clinic.slug}`}
              className="hover:underline"
            >
              {clinic.name}
            </Link>
          </h3>
          {clinic.jciCert ? (
            <Badge variant="verified" title="JCI akreditasyonludur">
              ✓ JCI
            </Badge>
          ) : null}
          {clinic.sbRuhsatNo && clinic.ruhsatVerifiedAt ? (
            <Badge variant="outline" title="Sağlık Bakanlığı ruhsatı doğrulandı">
              SB Ruhsat
            </Badge>
          ) : null}
        </div>

        <p className="mt-0.5 text-sm text-zinc-700">
          {TYPE_LABELS[clinic.type]}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          📍 {clinic.address ? `${clinic.address}` : city}
        </p>

        {visibleSignals.length > 0 ? (
          <div className="mt-3 space-y-1">
            {visibleSignals.slice(0, 2).map((s) => (
              <ReviewSignalRow key={s.source} signal={s} />
            ))}
          </div>
        ) : null}

        <div className="mt-3">
          <Link
            href={`/klinik/${clinic.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:underline"
          >
            Profili görüntüle →
          </Link>
        </div>
      </div>
    </Card>
  );
}
