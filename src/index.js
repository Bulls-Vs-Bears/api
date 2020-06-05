import fastify from 'fastify';
import helmet from 'fastify-helmet';
import rateLimit from 'fastify-rate-limit';
import { logger } from '../logs';
import { setRateLimit } from './config/rate-limit';
import { setDatabaseConnections } from './config/database';
import { routes } from './routes';

const server = fastify({ logger: logger });
server.register(helmet);
server.register(
  rateLimit, 
  setRateLimit(process.env.TIME_WINDOW, process.env.MAX_LIMIT)
);
setDatabaseConnections(server);
server.register(routes);

export default server;
