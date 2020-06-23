const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png", "webp", "gif"],

  publicRuntimeConfig: {
    // Will be available on both server and client
    hostname: 'https://animalrebellion.cz',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
});
