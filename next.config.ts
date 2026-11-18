import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Maquettes clients partagées par lien : jamais indexées (pages, images comprises)
  async headers() {
    return [
      {
        source: "/apercu/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
