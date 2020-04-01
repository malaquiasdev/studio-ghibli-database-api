const getDateTime = require("./get_date_time");

function messageTemplate(winston, options) {
  const level = `${winston.config.addColors(options.level)}`;
  const { message = "", stack = "" } = options;
  return `[${level} ${getDateTime()}]: ${message}
  ${stack}`;
}

export default messageTemplate;
