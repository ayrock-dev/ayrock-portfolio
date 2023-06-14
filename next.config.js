/** @type {import('next').NextConfig} */
const package = require('./package.json');

const isProduction = 'production' === process.env.NODE_ENV;
const basePath = isProduction ? `/${package.name}` : '';

const nextConfig = {
  reactStrictMode: true,
  basePath,
  output: 'export',
  env: {
    PUBLIC_PATH: basePath,
  },
};

module.exports = nextConfig;
