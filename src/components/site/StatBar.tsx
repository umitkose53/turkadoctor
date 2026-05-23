/**
 * Basit, görsel olarak güçlü istatistik bar bileşeni — bar chart yerine.
 * "İstanbul: 28 doktor [▓▓▓▓▓▓▓░░░]" gibi yatay görsel.
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

type Row = {
  label: string;
  count: number;
  href?: string;
};

export function StatBar({
  rows,
  max,
  className,
  showCount = true,
}: {
  rows: Row[];
  max?: number;
  className?: string;
  showCount?: boolean;
}) {
  if (rows.length === 0) return null;
  const top = max ?? Math.max(...rows.map((r) => r.count), 1);

  return (
    <ul className={cn("space-y-2", className)}>
      {rows.map((r) => {
        const pct = Math.round((r.count / top) * 100);
        const content = (
          <div className="grid grid-cols-[100px_1fr_40px] items-center gap-3 text-sm">
            <span className="truncate font-medium text-zinc-800">
              {r.label}
            </span>
            <span
              className="h-2 overflow-hidden rounded-full bg-zinc-100"
              aria-hidden
            >
              <span
                className="block h-full rounded-full bg-sky-600"
                style={{ width: `${pct}%` }}
              />
            </span>
            {showCount ? (
              <span className="text-right text-xs tabular-nums text-zinc-600">
                {r.count}
              </span>
            ) : null}
          </div>
        );
        return (
          <li key={r.label}>
            {r.href ? (
              <Link href={r.href} className="block hover:opacity-80">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
