import Link from "next/link";
import { SITE_NAME } from "@/lib/seo/title";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="font-semibold text-zinc-900">{SITE_NAME}</p>
            <p className="mt-2">
              Türkiye&apos;nin doğrulanmış doktor ve klinik dizini.
              Bilgilendirme amaçlıdır, tıbbi reklam değildir.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Kurumsal</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/hakkimizda" className="hover:text-zinc-900">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/tibbi-danisma-kurulu"
                  className="hover:text-zinc-900"
                >
                  Tıbbi Danışma Kurulu
                </Link>
              </li>
              <li>
                <Link
                  href="/editoryel-politika"
                  className="hover:text-zinc-900"
                >
                  Editöryel Politika
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-zinc-900">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Hukuki</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/kvkk" className="hover:text-zinc-900">
                  KVKK
                </Link>
              </li>
              <li>
                <Link href="/aydinlatma-metni" className="hover:text-zinc-900">
                  Aydınlatma Metni
                </Link>
              </li>
              <li>
                <Link
                  href="/cerez-politikasi"
                  className="hover:text-zinc-900"
                >
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/yorum-itiraz" className="hover:text-zinc-900">
                  Yorum İtirazı
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">Popüler Tedaviler</p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/tedaviler/yuz-germe" className="hover:text-zinc-900">
                  Yüz Germe
                </Link>
              </li>
              <li>
                <Link href="/tedaviler/meme-buyutme" className="hover:text-zinc-900">
                  Meme Büyütme
                </Link>
              </li>
              <li>
                <Link href="/tedaviler/rinoplasti" className="hover:text-zinc-900">
                  Burun Estetiği
                </Link>
              </li>
              <li>
                <Link href="/tedaviler/sac-ekimi" className="hover:text-zinc-900">
                  Saç Ekimi
                </Link>
              </li>
              <li>
                <Link href="/tedaviler" className="hover:text-zinc-900">
                  Tüm tedaviler →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              © {year} {SITE_NAME}. Tüm hakları saklıdır. Site içeriği
              bilgilendirme amaçlıdır, tıbbi tavsiye yerine geçmez.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="https://healtinturkey.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900"
              >
                healtinturkey.com ↗
              </a>
              <a
                href="https://www.dralicetinkaya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-900"
              >
                dralicetinkaya.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
