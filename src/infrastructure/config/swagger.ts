/* eslint-disable max-lines */
import pkg from '../../../package.json';
import config from './index';

function getHost(): string {
  if (config.STAGE === 'prd') {
    return 'https://api.malaquias.dev/dev/studio-ghibli';
  }

  return `localhost:${config.STAGE}`;
}

const swaggerConfig = {
  routePrefix: `${config.STAGE}/studio-ghibli/swagger`,
  swagger: {
    info: {
      title: pkg.name,
      description: pkg.description,
      version: pkg.version,
    },
    host: getHost(),
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      {
        name: 'Config',
        description:
          'This session is related to server config and information.',
      }
    ],
  },
  exposeRoute: true,
};

export default swaggerConfig;
