import fastify from 'fastify';
import { logger } from '../logs';
import { setDatabaseConnections } from './config/database/postgres/connection';
import { registerPlugins } from './config/plugins';

const server = fastify({ logger: logger });
setDatabaseConnections(server);
registerPlugins(server);

export default server;
