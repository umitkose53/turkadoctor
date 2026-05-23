import Link from "next/link";
import { SITE_NAME } from "@/lib/seo/title";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Ana menü">
          <ul className="flex items-center gap-5 text-sm text-zinc-700">
            <li>
              <Link href="/branslar" className="hover:text-zinc-900">
                Branşlar
              </Link>
            </li>
            <li>
              <Link href="/sehirler" className="hover:text-zinc-900">
                Şehirler
              </Link>
            </li>
            <li>
              <Link href="/tedaviler" className="hover:text-zinc-900">
                Tedaviler
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-zinc-900">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
