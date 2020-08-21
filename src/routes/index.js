import { userRoutes } from './user';
import { HTTP_SUCCESS, } from 'config'; 

export const routes = async function (server) {
  server.register(userRoutes, { prefix: '/api/v1' });

  server.get('/', async (_, res) => {
    //TODO: change this endpoint to display swagger.
    const result = { hello: 'world'};
    return res.code(HTTP_SUCCESS).send(result);
  });
};
