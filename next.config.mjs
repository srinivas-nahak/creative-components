/** @type {import('next').NextConfig} */

//import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  //transpilePackages: ["@plaiceholder/ui"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
