import { ImageResponse } from "next/og";

/**
 * Favicon — dinamik 32×32 PNG. Next.js metadata API.
 * Adaptif ikonlar için bkz. `icon.svg` (asıl 512×512 vektör).
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "#0c4a6e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        TD
      </div>
    ),
    { ...size },
  );
}
