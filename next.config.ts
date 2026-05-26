import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel serverless function'larında public/dt-shards/ erişimi için
  // file tracing zorunlu — fs.readFileSync(process.cwd()/public/...) çalışsın.
  outputFileTracingIncludes: {
    "/**": ["./public/dt-shards/**/*"],
  },
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
