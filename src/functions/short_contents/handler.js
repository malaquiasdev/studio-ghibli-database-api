const response = require("../../libs/response");
const shortContentsListFlow = require("./list_all");

async function listFlow(_, context) {
  return response.send(context, shortContentsListFlow());
}

module.exports = { listFlow };
