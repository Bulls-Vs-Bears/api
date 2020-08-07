import { HTTP_SUCCESS, HTTP_CREATED, HTTP_ERROR, } from 'config'; 
import { createSuccessfulResponse, createFailedResponse } from '../../util/response';

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
    try {
      const client = await server.pg.pgWriter.connect();
      const { username, password, email } = req.body;
      
      await client.query(
        'INSERT INTO bvb_accounts.user (user_name, user_password, user_email) VALUES ($1, $2, $3)',
        [username, password, email]
      );
      const token = null;
      const response = createSuccessfulResponse("post", req.body, token);
      res.code(HTTP_CREATED).send(response);
    } catch (err) {
      const message = "Invalid Username or Email";
      let error = "101";      

      const response = createFailedResponse(message, error);
      server.log.error(err);
      res.code(HTTP_ERROR).send(response);
    }
  }
}
