/**
 * Markdown blockquote'larını "callout" olarak render eder.
 * İlk satırın başındaki emoji'ye göre renk varyantı seçer.
 */
import type { ReactNode } from "react";

const VARIANT_MAP: Record<string, "info" | "warning" | "danger" | "success" | "tip"> = {
  "💡": "tip",
  "📌": "info",
  "ℹ️": "info",
  "⚠️": "warning",
  "❗": "warning",
  "🚨": "danger",
  "✅": "success",
  "👉": "tip",
  "💬": "info",
  "📋": "info",
};

function detectVariant(children: ReactNode): keyof typeof VARIANT_MAP | "info" {
  // İlk child'ın text içeriğini bul
  function firstText(node: ReactNode): string {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) {
      for (const c of node) {
        const t = firstText(c);
        if (t) return t;
      }
    }
    if (node && typeof node === "object" && "props" in node) {
      // @ts-expect-error — generic ReactNode
      return firstText(node.props.children);
    }
    return "";
  }
  const text = firstText(children).trim();
  for (const emoji of Object.keys(VARIANT_MAP)) {
    if (text.startsWith(emoji)) return emoji as keyof typeof VARIANT_MAP;
  }
  return "info";
}

export function Callout({ children }: { children: ReactNode }) {
  const v = detectVariant(children);
  const variant = VARIANT_MAP[v as keyof typeof VARIANT_MAP] ?? "info";
  return (
    <blockquote data-callout={variant}>
      {children}
    </blockquote>
  );
}
