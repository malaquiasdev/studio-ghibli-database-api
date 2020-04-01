const pkg = require("../../package.json");

function loadConfig() {
  return {
    PORT: Number(process.env.PORT) || 8080,
    API_VERSION: pkg.version,
    API_NAME: pkg.name,
    API_DOMAIN: "studio-ghibli",
    STAGE: process.env.AMBIENTE || "dev",
    IMDB: {
      BASE_URL: "https://www.imdb.com/",
      BASE_KEYWORD: "studio-ghibli",
    },
  };
}

module.exports = loadConfig;
