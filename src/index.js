import fastify from 'fastify';
import helmet from 'fastify-helmet';
import rateLimit from 'fastify-rate-limit';
import jwt from 'fastify-jwt';
import cookie from 'fastify-cookie';
import middie from 'middie';
import { logger } from '../logs';
import { setRateLimit } from './config/rate-limit';
import { setDatabaseConnections } from './config/database/postgres/connection';
import { routes } from './routes';
import { TIME_WINDOW, MAX_LIMIT, JWT_SECRET } from 'config';

const server = fastify({ logger: logger });
server.register(middie);
server.register(helmet);
server.register(
  rateLimit, 
  setRateLimit(TIME_WINDOW, MAX_LIMIT)
);
server.register(cookie);
server.register(jwt, 
  { 
    secret: JWT_SECRET, 
    cookie: { cookieName: 'token'}
  }
);
setDatabaseConnections(server);
server.register(routes);

export default server;
