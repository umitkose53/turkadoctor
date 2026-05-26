import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone build — Docker image içine self-contained node server export eder.
  // .next/standalone klasörü + .next/static + public copy ile production çalışır.
  output: "standalone",
  async redirects() {
    return [
      // Dr. Ali Çetinkaya — düzeltme: saç ekimi değil, plastik cerrahi
      {
        source: "/doktor/dr-ali-cetinkaya-sac-ekimi",
        destination: "/doktor/op-dr-ali-cetinkaya",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
