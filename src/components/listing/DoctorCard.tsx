import Link from "next/link";

import type { DoctorSummary } from "@/data/types";
import { findCity } from "@/data/cities";
import { findSpecialty } from "@/data/specialties";
import { findClinic } from "@/data/clinics";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReviewSignalRow } from "./ReviewSignalRow";

export function DoctorCard({ doctor }: { doctor: DoctorSummary }) {
  const primarySpecialty = findSpecialty(doctor.specialtySlugs[0])?.name;
  const city = findCity(doctor.citySlug)?.name;
  const clinic = doctor.clinicSlugs[0]
    ? findClinic(doctor.clinicSlugs[0])
    : undefined;

  const visibleSignals = doctor.signals.filter((s) => s.visible);

  return (
    <Card as="article" className="grid grid-cols-[64px_1fr] gap-4">
      <div
        aria-hidden
        className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 text-lg font-semibold text-zinc-500"
      >
        {doctor.fullName
          .split(" ")
          .map((p) => p[0])
          .slice(0, 2)
          .join("")}
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="truncate text-base font-semibold text-zinc-900">
            <Link
              href={`/doktor/${doctor.slug}`}
              className="hover:underline"
            >
              {doctor.titlePrefix ?? "Dr."} {doctor.fullName}
            </Link>
          </h3>
          {doctor.ttbSicilNo && doctor.ttbVerifiedAt ? (
            <Badge variant="verified" title="TTB sicil numarası doğrulanmıştır">
              ✓ TTB
            </Badge>
          ) : null}
        </div>

        <p className="mt-0.5 text-sm text-zinc-700">
          {primarySpecialty}
          {doctor.deneyimYili
            ? ` · ${doctor.deneyimYili} yıl deneyim`
            : ""}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          📍 {clinic ? `${clinic.name} · ` : ""}
          {city}
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
            href={`/doktor/${doctor.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:underline"
          >
            Profili görüntüle →
          </Link>
        </div>
      </div>
    </Card>
  );
}
