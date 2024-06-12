/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.scdn.co" },
      { hostname: "cdn.discordapp.com" },
      { hostname: "cdn.wondexz.com" },
      { hostname: "wondexz.com" },
      { hostname: "wondexz.xyz" },
      { hostname: "avatars.githubusercontent.com" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
