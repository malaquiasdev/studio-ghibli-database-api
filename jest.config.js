module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/**/handler.js",
    "!src/**/config/index.js",
  ],
};
