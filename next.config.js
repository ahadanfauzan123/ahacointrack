/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['pro.coinmarketcap.com'],
  }
}

module.exports = nextConfig
