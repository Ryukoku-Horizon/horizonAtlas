import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  images: {
    domains: ["cdn.discordapp.com",'prod-files-secure.s3.us-west-2.amazonaws.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: "/horizonAtlas", 
  assetPrefix: "/horizonAtlas",
};

export default nextConfig;
