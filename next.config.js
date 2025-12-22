/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/mumadrasaorphanagebd' : '';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Add trailing slashes to URLs
  basePath: basePath, // GitHub Pages base path
  assetPrefix: basePath, // GitHub Pages asset prefix
  // Ensure public assets are copied correctly
  publicRuntimeConfig: {
    basePath: basePath,
  },
}

module.exports = nextConfig

