import Link from "next/link";
import type { Metadata } from "next";

import { cities, doctors, clinics } from "@/data";
import { dtDoctorsByCity } from "@/data/dt-doctors";
import { buildMetadata } from "@/lib/seo/metadata";
import { Disclaimer } from "@/components/ui/disclaimer";
import { ALPHABETICAL_DISCLAIMER } from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Şehirler",
  description: "Türkiye geneli doktor ve klinik dizini şehirlere göre.",
  path: "/sehirler",
});

export default function SehirlerPage() {
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Şehirler", url: "/sehirler" },
  ]);

  const stats = cities
    .map((c) => ({
      ...c,
      count:
        doctors.filter((d) => d.citySlug === c.slug).length +
        dtDoctorsByCity(c.slug).length +
        clinics.filter((cl) => cl.citySlug === c.slug).length,
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
          <li className="text-zinc-900">Şehirler</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        Türkiye Şehirleri
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {cities.length} şehir · alfabetik dizin
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {stats.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-3 hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span className="font-medium text-zinc-900">{c.name}</span>
              {c.count > 0 ? (
                <span className="text-xs text-zinc-500">{c.count}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
