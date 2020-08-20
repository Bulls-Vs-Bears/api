import * as user from '../../handlers/user';

export async function userRoutes(server) {
  server.get('/user', { preValidation: [server.authenticate] }, user.getUserHandler);
  server.post('/user', await user.createUserHandler);

}
