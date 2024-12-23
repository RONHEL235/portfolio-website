/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {},
    },
    webpack: (config) => {
      config.resolve.alias['@'] = __dirname; // Set '@' to point to the root directory
      return config;
    },
  };
  
  module.exports = nextConfig;
  