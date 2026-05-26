import { ImageResponse } from "next/og";

/**
 * Favicon 32×32 — TD monogram, kurumsal medical brand.
 * Mayo Clinic / NHS / WebMD tarzı letter mark estetiği.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #0c4a6e 0%, #082f49 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 18,
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: -1,
        }}
      >
        td
      </div>
    ),
    { ...size },
  );
}
