import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/career',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
