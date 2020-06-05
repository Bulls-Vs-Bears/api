import { userRoutes } from './user';

const { HTTP_SUCCESS, } = process.env; 

export async function routes(server) {
  server.register(userRoutes, { prefix: '/api/v1' });

  server.get('/', async (_, res) => {
    //TODO: change this endpoint to display swagger.
    const result = { hello: 'world'};
    return res.code(HTTP_SUCCESS).send(result);
  });
}
