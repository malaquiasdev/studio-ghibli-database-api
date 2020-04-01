const winston = require("winston");
const messageTemplate = require("./message_template");

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf((options) => messageTemplate(winston, options))
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
