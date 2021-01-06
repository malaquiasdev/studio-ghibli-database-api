require('dotenv/config');

const express = require('express');
const pino = require('express-pino-logger')();
const { ApolloServer } = require('apollo-server-express');
const config = require('../config');
const typeDefs = require('../../interfaces/schemas');
const resolvers = require('../../interfaces/resolvers');
const dataSources = require('../../models');

const app = express();
app.use(pino);

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.applyMiddleware({ app });

app.listen({ port: config.PORT }, () =>
  pino.logger.info(
    `🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`,
  ),
);
