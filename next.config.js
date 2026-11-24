/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pas de pastille de dev dans les captures de fidélité (dev uniquement,
  // absent de la production Vercel).
  devIndicators: false,
}

module.exports = nextConfig
