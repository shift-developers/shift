import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/who-we-serve',
        destination: '/who-we-are',
        permanent: true, // 301 redirect
      },
      // Add any other old URLs that might be indexed
      {
        source: '/about',
        destination: '/who-we-are',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/what-we-do',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
