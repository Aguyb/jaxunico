/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com'],
  },
  staticPageGenerationTimeout: 180,
}

module.exports = nextConfig
