import { ImageResponse } from "next/og";

/**
 * Anasayfa OG image 1200×630 — sosyal paylaşımda profesyonel kurumsal kart.
 * Shield + medical cross + verification check + brand mesajı.
 */
export const alt =
  "TurkaDoctor — Türkiye'nin doğrulanmış doktor ve klinik dizini";
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
            "linear-gradient(135deg, #0c4a6e 0%, #082f49 50%, #1e3a8a 100%)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0 80px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent 0%, #f59e0b 50%, transparent 100%)",
          }}
        />

        {/* Sol taraf — logo */}
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 32,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            border: "2px solid rgba(245, 158, 11, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* Medical cross */}
          <div
            style={{
              position: "relative",
              width: 130,
              height: 130,
              display: "flex",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 50,
                top: 0,
                width: 30,
                height: 130,
                background: "white",
                borderRadius: 6,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 50,
                width: 130,
                height: 30,
                background: "white",
                borderRadius: 6,
              }}
            />
          </div>

          {/* Gold check */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 54,
              height: 54,
              borderRadius: 27,
              background:
                "linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 900,
              color: "#082f49",
            }}
          >
            ✓
          </div>
        </div>

        {/* Sağ taraf — başlık */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 60,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              color: "#fcd34d",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Doğrulanmış Sağlık Dizini
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1,
              marginBottom: 20,
            }}
          >
            TurkaDoctor
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.3,
              opacity: 0.85,
              maxWidth: 700,
              marginBottom: 30,
            }}
          >
            Türkiye'nin en kapsamlı doktor ve klinik rehberi
          </div>

          {/* Stat badges */}
          <div style={{ display: "flex", gap: 12 }}>
            <div
              style={{
                padding: "10px 18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              176.000+ hekim
            </div>
            <div
              style={{
                padding: "10px 18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              TTB sicil doğrulamalı
            </div>
            <div
              style={{
                padding: "10px 18px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 8,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              81 il
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
