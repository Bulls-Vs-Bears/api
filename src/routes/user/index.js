
export async function userRoutes(server) {
  server.get('/user', getUserHandler);
  server.post('/user', postUserHandler);
}

async function getUserHandler() {
  return { hello: 'me'};
}

async function postUserHandler(req) {
  return req.body
}
