import Link from "next/link";
import type { Metadata } from "next";

import { specialties, doctors, clinics } from "@/data";
import { Disclaimer } from "@/components/ui/disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER } from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Tüm Branşlar",
  description:
    "Türkiye genelindeki tıbbi branşlar dizini. Her branş için şehir ve klinik dağılımı bilgilendirme amaçlıdır.",
  path: "/branslar",
});

export default function BranslarPage() {
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Branşlar", url: "/branslar" },
  ]);

  const stats = specialties
    .map((sp) => ({
      ...sp,
      doctorCount: doctors.filter((d) => d.specialtySlugs.includes(sp.slug))
        .length,
      clinicCount: clinics.filter((c) => c.specialties.includes(sp.slug))
        .length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "tr-TR"));

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(bc) }}
      />

      <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-zinc-700">
              Anasayfa
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-zinc-900">Branşlar</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        Tıbbi Branşlar
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {specialties.length} branş · alfabetik dizin
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {stats.map((s) => {
          const total = s.doctorCount + s.clinicCount;
          return (
            <li key={s.slug}>
              <Link
                href={`/branslar/${s.slug}`}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-3 hover:border-zinc-300 hover:bg-zinc-50"
              >
                <span className="font-medium text-zinc-900">{s.name}</span>
                {total > 0 ? (
                  <span className="text-xs text-zinc-500">{total}</span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
