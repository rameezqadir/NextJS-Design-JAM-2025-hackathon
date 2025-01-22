/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// next.config.js
module.exports = {
    webpack: (config) => {
      config.externals.push('@/data/rental-car-data.json');
      return config;
    },
  };
