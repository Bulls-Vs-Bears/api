import { userRoutes } from './user';

export async function routes(server) {
  server.register(userRoutes, {prefix: '/api/v1'})
}
