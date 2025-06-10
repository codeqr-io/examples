/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.google.com",
      },
      {
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
