const express = require('express');
const pino = require('express-pino-logger')();
const { ApolloServer } = require('apollo-server-express');
const config = require('../config');
const typeDefs = require('./schema');
const resolvers = require('../../interfaces/resolvers');
const ContentsModel = require('../../models/contents');

const app = express();
app.use(pino);

function dataSources() {
  return {
    ContentsModel,
  };
}

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.applyMiddleware({ app });

app.listen({ port: config.PORT }, () =>
  pino.logger.info(
    `🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`,
  ),
);
