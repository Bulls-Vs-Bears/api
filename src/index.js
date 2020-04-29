import fastify from 'fastify';
import helmet from 'fastify-helmet';
import {logger} from '../logs';

const server = fastify({ logger: logger });
server.register(helmet);

server.get('/', async () => {
  const result = { hello: 'world'};
  return result;
});

export default server;
