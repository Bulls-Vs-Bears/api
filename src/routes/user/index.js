export async function userRoutes(server) {
  server.get('/user', getUserHandler);
  server.post('/user', await createUserHandler);

  async function createUserHandler(req) {
    console.log("we are hereeeee");
    console.log(req.body); 
    const client = await server.pg.pgWriter.connect();
    await client.query(
      'INSERT INTO user (user_name, user_password, user_email) \
      VALUES ()'
    );
  }
}

async function getUserHandler() {
  return { hello: 'me'};
}


