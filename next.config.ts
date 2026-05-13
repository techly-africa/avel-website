import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Sometimes helps with loading issues in certain environments
  },
};

export default nextConfig;
