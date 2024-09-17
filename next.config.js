/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const nextConfig = {};
const withPlugins = createVanillaExtractPlugin(nextConfig);

module.exports = withPlugins;
