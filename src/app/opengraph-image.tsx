import { ImageResponse } from "next/og";

/**
 * Anasayfa OG image (1200×630) — sosyal paylaşımda görünür.
 * Diğer sayfa tipleri için ayrı opengraph-image.tsx dosyaları eklenebilir
 * (örn. src/app/doktor/[slug]/opengraph-image.tsx — doktor ad + branş + il).
 */
export const alt = "TurkaDoctor — Türkiye'nin doğrulanmış doktor ve klinik dizini";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* TD monogram */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 28,
            background: "rgba(255,255,255,0.1)",
            border: "2px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-4px",
            marginBottom: 36,
          }}
        >
          TD
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-2px",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          TurkaDoctor
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            marginTop: 16,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Türkiye'nin doğrulanmış doktor ve klinik dizini
        </div>

        <div
          style={{
            fontSize: 22,
            marginTop: 36,
            opacity: 0.7,
            display: "flex",
            gap: 24,
          }}
        >
          <span>176.000+ hekim</span>
          <span>·</span>
          <span>TTB sicil doğrulamalı</span>
          <span>·</span>
          <span>81 il</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
