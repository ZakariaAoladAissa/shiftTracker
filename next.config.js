/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
    }
    return config;
  },
  async headers() {
    return [
      {
        // Apply CORS headers to all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow all origins (be careful with this in production)
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' }, // For sending cookies or other credentials
        ],
      },
    ]
  },
}

module.exports = nextConfig;
