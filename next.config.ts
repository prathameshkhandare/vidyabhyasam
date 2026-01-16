import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow placeholder images from external sources during development
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
    // Enable image optimization
    formats: ["image/avif", "image/webp"],
    // Reduce image sizes for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
