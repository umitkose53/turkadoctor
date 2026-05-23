import { cn } from "@/lib/utils";

type Variant = "default" | "verified" | "outline" | "muted" | "accent";

const styles: Record<Variant, string> = {
  default: "bg-zinc-900 text-white",
  verified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  outline: "border border-zinc-200 text-zinc-700",
  muted: "bg-zinc-100 text-zinc-700",
  accent: "bg-sky-50 text-sky-700 border border-sky-200",
};

export function Badge({
  children,
  variant = "default",
  className,
  title,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
