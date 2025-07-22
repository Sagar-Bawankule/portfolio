/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  // Disable telemetry
  telemetry: false,
  // Enable static export for Netlify
  output: 'export',
}

module.exports = nextConfig
