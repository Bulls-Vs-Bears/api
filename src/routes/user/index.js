import { getUserHandler, createUserHandler } from '../../handlers/user';

export const userRoutes = async function(server) {
  server.get('/user', { preValidation: [server.authenticate] }, getUserHandler);
  server.post('/user', createUserHandler);
};
