const getStage = require('./get-stage');

module.exports = {
  PORT: Number(process.env.PORT || 8080),
  STAGE: getStage(),
};
