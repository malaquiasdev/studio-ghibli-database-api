import createFastify, { FastifyInstance } from "fastify";
import config from "../config";

function factoryServer(): FastifyInstance {
  let fastify;

  if (config.STAGE === "dev") {
    fastify = createFastify({
      logger: true,
    });
  } else {
    fastify = createFastify({
      logger: {
        level: "error",
      },
    });
  }

  return fastify;
}

export default factoryServer;
