import Link from "next/link";

export function PageShell({
  title,
  breadcrumbItems,
  children,
}: {
  title: string;
  breadcrumbItems?: { name: string; href?: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {breadcrumbItems && breadcrumbItems.length > 0 ? (
        <nav aria-label="Site içi konum" className="mb-3 text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbItems.map((b, i) => (
              <li key={i} className="flex items-center gap-1">
                {b.href ? (
                  <Link href={b.href} className="hover:text-zinc-700">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-zinc-900">{b.name}</span>
                )}
                {i < breadcrumbItems.length - 1 ? (
                  <span aria-hidden>›</span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      <div className="prose prose-zinc mt-6 max-w-none text-sm leading-relaxed text-zinc-700">
        {children}
      </div>
    </div>
  );
}
