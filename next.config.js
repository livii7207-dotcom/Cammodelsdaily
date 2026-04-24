/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent webpack from trying to bundle Node.js-only modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false, tls: false, fs: false, dns: false,
        child_process: false, 'node:stream': false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
