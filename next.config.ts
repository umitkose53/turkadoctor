import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eski URL'lerden yeni URL'lere yönlendirmeler.
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
