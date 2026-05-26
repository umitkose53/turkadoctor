import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
