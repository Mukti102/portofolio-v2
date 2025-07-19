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
        protocol: "https", // tambahkan ini
        hostname: "portofolio.genera.my.id", // penting!
        port: "**", 
        pathname: "**",
      },
      {
        protocol: "http", // tambahkan ini
        hostname: "127.0.0.1", // penting!
        port: "8000", 
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
