/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Completely disable development indicators and messages
  devIndicators: false,
  // Additional dev tools hiding options
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Enable static export for Netlify
  output: 'export',
  // Optional: Set trailing slash for better static hosting
  trailingSlash: true,
}

module.exports = nextConfig
