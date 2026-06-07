/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
  staticPageGenerationTimeout: 180,
  transpilePackages: ['sanity', 'next-sanity'],
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false }
    return config
  },
}

module.exports = nextConfig
