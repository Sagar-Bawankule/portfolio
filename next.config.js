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
}

module.exports = nextConfig
