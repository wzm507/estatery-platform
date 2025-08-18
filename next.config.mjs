/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    level: 'verbose',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  staticPageGenerationTimeout: 120,
}

export default nextConfig