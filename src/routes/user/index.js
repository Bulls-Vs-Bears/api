import { HTTP_SUCCESS, HTTP_CREATED, HTTP_ERROR, } from 'config'; 

export async function userRoutes(server) {
  server.get('/user', getUserHandler);
  server.post('/user', await createUserHandler);

  async function getUserHandler(req, res) {
    // TODO: Finish this after /user POST
    try {
      res.code(HTTP_SUCCESS).send({ req });
    } catch (err) {
      server.log.error(err);
      res.code(HTTP_ERROR).send(err);
    }
  }

  async function createUserHandler(req, res) {
    //! NOTE: This is not done yet.
    try {
      // const client = await server.pg.pgWriter.connect();
      // const { username, password, email } = req.body;
      
      // await client.query(
      //   'INSERT INTO user (user_name, user_password, user_email) \
      //   VALUES ()', [username, password, email]
      // );
      res.code(HTTP_CREATED).send({ req });
    } catch (err) {
      server.log.error(err);
      res.code(HTTP_ERROR).send(err);
    }
  }
}
