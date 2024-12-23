/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {},
    },
    webpack: (config) => {
      config.resolve.alias['@'] = "./"; // Set '@' to the root directory
      return config;
    },
  };
  
  module.exports = nextConfig;