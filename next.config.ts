import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export (GitHub Pages)
  },
};

export default nextConfig;
