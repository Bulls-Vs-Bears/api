import fastify from 'fastify';
import {logger} from '../logs';

const server = fastify({ logger: logger });

server.get('/', async () => {
  const result = { hello: 'world'};
  return result;
});

export default server;
