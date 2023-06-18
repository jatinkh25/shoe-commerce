/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['imgix.cosmicjs.com'],
  },
}

module.exports = nextConfig
