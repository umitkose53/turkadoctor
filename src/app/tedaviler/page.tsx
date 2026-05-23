import Link from "next/link";
import type { Metadata } from "next";

import { procedures, doctors, clinics } from "@/data";
import { Card } from "@/components/ui/card";
import { Disclaimer } from "@/components/ui/disclaimer";
import { buildMetadata } from "@/lib/seo/metadata";
import { ALPHABETICAL_DISCLAIMER, SITE_NAME } from "@/lib/seo/title";
import { breadcrumb, jsonLdScript } from "@/lib/seo/jsonld";

export const metadata: Metadata = buildMetadata({
  title: `Tedaviler ve Tıbbi Rehberler — ${SITE_NAME}`,
  description:
    "Saç ekimi, diş implantı, LASIK, rinoplasti ve daha fazla tedavi için tıbbi inceleyici onaylı bilgilendirme rehberleri.",
  path: "/tedaviler",
});

export default function TedavilerPage() {
  const bc = breadcrumb([
    { name: "Anasayfa", url: "/" },
    { name: "Tedaviler", url: "/tedaviler" },
  ]);

  const stats = procedures
    .map((p) => ({
      ...p,
      count:
        doctors.filter((d) => d.procedureSlugs.includes(p.slug)).length +
        clinics.filter((c) => c.procedures.includes(p.slug)).length,
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
          <li className="text-zinc-900">Tedaviler</li>
        </ol>
      </nav>

      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        Tedavi Rehberleri
      </h1>
      <p className="mt-1 text-sm text-zinc-600">
        {procedures.length} tedavi · tıbbi inceleyici onaylı bilgilendirme
      </p>

      <div className="mt-4">
        <Disclaimer variant="muted">{ALPHABETICAL_DISCLAIMER}</Disclaimer>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((p) => (
          <Card key={p.slug} as="article">
            <h2 className="text-base font-semibold text-zinc-900">
              <Link href={`/tedaviler/${p.slug}`} className="hover:underline">
                {p.name}
              </Link>
            </h2>
            {p.description ? (
              <p className="mt-2 line-clamp-3 text-sm text-zinc-600">
                {p.description}
              </p>
            ) : null}
            {p.count > 0 ? (
              <p className="mt-3 text-xs text-zinc-500">
                {p.count} listing
              </p>
            ) : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
