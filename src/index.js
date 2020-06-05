import fastify from 'fastify';
import helmet from 'fastify-helmet';
import rateLimit from 'fastify-rate-limit';
import { logger } from '../logs';
import { setRateLimit } from './config/rate-limit';
import { setDatabaseConnections } from './config/database/postgres/connection';
import { routes } from './routes';
import { TIME_WINDOW, MAX_LIMIT } from 'config';

const server = fastify({ logger: logger });
server.register(helmet);
server.register(
  rateLimit, 
  setRateLimit(TIME_WINDOW, MAX_LIMIT)
);
setDatabaseConnections(server);
server.register(routes);

export default server;
