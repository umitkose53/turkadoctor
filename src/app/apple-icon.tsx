import { ImageResponse } from "next/og";

/**
 * iOS Apple touch icon 180×180 — kurumsal letter mark.
 * Lacivert gradient + büyük "td" monogram + altın accent.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #082f49 60%, #1e3a8a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "white",
          fontSize: 96,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: -6,
        }}
      >
        td
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#fcd34d",
            textTransform: "uppercase",
          }}
        >
          TurkaDoctor
        </div>
      </div>
    ),
    { ...size },
  );
}
