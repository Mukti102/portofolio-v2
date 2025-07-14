/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t2.genius.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http", // tambahkan ini
        hostname: "localhost", // penting!
        port: "8000", // opsional, jika server Laravel berjalan di port 8000
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
