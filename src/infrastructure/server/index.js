const express = require('express');
const pino = require('express-pino-logger')();
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const config = require('../config');

const app = express();
app.use(pino);

const server = new ApolloServer({ typeDefs });
server.applyMiddleware({ app });

app.listen({ port: config.PORT }, () =>
  pino.logger.info(
    `🚀 Server ready at http://localhost:${config.PORT}${server.graphqlPath}`,
  ),
);
