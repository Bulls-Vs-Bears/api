import helmet from 'fastify-helmet';
import rateLimit from 'fastify-rate-limit';
import jwt from 'fastify-jwt';
import middie from 'middie';
import plugin from 'fastify-plugin';
import path from 'path';
import { readFileSync } from 'fs';
import { setRateLimit } from '../rate-limit';
import { routes } from '../../routes';
import { decorateServer } from '../decorators';
import { 
  TIME_WINDOW, 
  MAX_LIMIT, 
  JWT_ALGORITHM, 
  JWT_PRIVATE_KEY, 
  JWT_PUBLIC_KEY 
} from 'config';

export async function registerPlugins(server) {
  server
    .register(middie)
    .register(helmet)
    .register(
      rateLimit, 
      setRateLimit(TIME_WINDOW, MAX_LIMIT)
    )
    .register(jwt, 
      { 
        secret: {
          private: readFileSync(
            `${path.join(
              __dirname, // eslint-disable-line
              '../../../config/keys')}/${JWT_PRIVATE_KEY}`
          ), 
          public: readFileSync(
            `${path.join(
              __dirname, // eslint-disable-line
              '../../../config/keys')}/${JWT_PUBLIC_KEY}`
              ) 
        },
        sign: { algorithm: JWT_ALGORITHM }
      }
    )
    .register(plugin(decorateServer))
    .register(routes);
}
