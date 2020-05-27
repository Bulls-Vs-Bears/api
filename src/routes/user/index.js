import {writerConnection} from '../../config/database/database-connections.js';

export async function userRoutes(server) {
  server.get('/user', getUserHandler);
  server.post('/user', await postUserHandler);

  async function postUserHandler() {
    console.log("we are hereeeee");
    writerConnection(server);
  }
}

async function getUserHandler() {
  return { hello: 'me'};
}


