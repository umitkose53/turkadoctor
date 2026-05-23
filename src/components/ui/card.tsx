import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return (
    <As
      className={cn(
        "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-zinc-300",
        className,
      )}
    >
      {children}
    </As>
  );
}
