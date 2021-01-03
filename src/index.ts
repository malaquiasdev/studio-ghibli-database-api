import factoryServer from './infrastructure/server';
import config from './infrastructure/config';

const server = factoryServer();

server.get('/ping', {}, async (request, reply) => {
  return { pong: 'it worked!' }
})

async function start(): Promise<void> {
    try {
        await server.listen(config.PORT as number, '0.0.0.0');
    } catch (err) {
        server.log.error({ err });
        process.exit(1);
    }
}

start();
