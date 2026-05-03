/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/vigilix-website',
  assetPrefix: '/vigilix-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
