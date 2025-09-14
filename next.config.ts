import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Replit environment with proper origin pattern
  allowedDevOrigins: ['https://*.replit.dev'],
  // Disable strict mode for better compatibility
  reactStrictMode: false,
};

export default nextConfig;
