const awsServerlessExpress = require('aws-serverless-express');
const server = require('../server');

const awsServerlessServer = awsServerlessExpress.createServer(server);

function handler(event, context) {
  return awsServerlessServer.proxy(server, event, context);
}

module.exports = handler;
