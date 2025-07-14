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
        hostname: "https://portofolio.genera.my.id", // penting!
        port: "**", 
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
