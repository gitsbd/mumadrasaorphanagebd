/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const isCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true';

// For GitHub Pages without custom domain we need a basePath (project URL)
// For a custom domain (e.g. https://mumobd.org) we serve from the root, so no basePath
const basePath = isProduction && !isCustomDomain ? '/mumadrasaorphanagebd' : '';

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

