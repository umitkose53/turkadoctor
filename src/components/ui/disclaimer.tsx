import { cn } from "@/lib/utils";

type Variant = "info" | "warning" | "muted";

const styles: Record<Variant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-900",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
  muted: "bg-zinc-50 border-zinc-200 text-zinc-700",
};

export function Disclaimer({
  children,
  variant = "muted",
  className,
  icon = "ⓘ",
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm leading-relaxed",
        styles[variant],
        className,
      )}
      role="note"
    >
      <span className="mr-2 select-none font-semibold" aria-hidden>
        {icon}
      </span>
      {children}
    </div>
  );
}
