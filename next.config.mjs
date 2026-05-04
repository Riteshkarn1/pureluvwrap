/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow images from all local public paths
  images: {
    formats: ["image/webp"],
  },
  // Compress responses
  compress: true,
  // Strict mode for better error catching in development
  reactStrictMode: true,
};

export default nextConfig;
