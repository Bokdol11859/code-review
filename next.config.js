/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "w.namu.la",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  format: ["image/png", "images/webp", "image/jpeg"],
  reactStrictMode: true,
  plugins: {
    autoprefixer: {},
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
