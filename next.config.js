/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export for GitHub Pages
  trailingSlash: true, // Add trailing slashes to URLs
  basePath: process.env.NODE_ENV === 'production' ? '/mumadrasaorphanagebd' : '', // GitHub Pages base path
  assetPrefix: process.env.NODE_ENV === 'production' ? '/mumadrasaorphanagebd' : '', // GitHub Pages asset prefix
}

module.exports = nextConfig

