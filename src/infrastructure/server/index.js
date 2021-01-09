require('dotenv/config');

const express = require('express');
const pino = require('express-pino-logger')();
const { ApolloServer } = require('apollo-server-express');
const config = require('../config');
const buildTypeDefs = require('./load-schemas');
const buildResolvers = require('./load-resolvers');
const dataSources = require('../../models');

async function createServer() {
  const [typeDefs, resolvers] = await Promise.all([
    buildTypeDefs(),
    buildResolvers(),
  ]);

  const app = express();
  app.use(pino);

  const server = new ApolloServer({ typeDefs, resolvers, dataSources });
  server.applyMiddleware({ app });

  app.listen({ port: config.PORT }, () =>
    pino.logger.info(
      `🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`,
    ),
  );
}

module.exports = createServer;
