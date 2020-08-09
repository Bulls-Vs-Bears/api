import { HTTP_SUCCESS, HTTP_CREATED, HTTP_ERROR, } from 'config'; 
import { hashPassword, checkHash } from '../../config/database/postgres/hash-password';

export async function userRoutes(server) {
  server.get('/user', getUserHandler);
  server.post('/user', await createUserHandler);

  async function getUserHandler(req, res) {
    // TODO: Finish this after /user POST
    try {
      res.code(HTTP_SUCCESS).send({ });
    } catch (err) {
      server.log.error(err);
      res.code(HTTP_ERROR).send(err);
    }
  }

  async function createUserHandler(req, res) {
    try {
      const client = await server.pg.pgWriter.connect();
      const { username, password, email } = req.body;
      
      // hash password using bcrypt
      const hashedPassword = await hashPassword(password);

      await client.query(
        'INSERT INTO bvb_accounts.user (user_name, user_password, user_email) VALUES ($1, $2, $3)',
        [username, hashedPassword, email]
      );

      // query for hashed password we don't want to grab the hash because it "should"
      // be the same hash as the hash coming back from line 24. Think about it this way, 
      // Why do we want to make 2 queries to the database to check if the hash is a valid hash.
      // This takes time and resources to make a query to the database.
      // instead we should check after the bcrypt hashing to see if it is even correct and if not
      // an error/exception should be thrown right away after the hash occurs. 
      const passwordToCheck = await client.query(
        'SELECT user_password FROM bvb_accounts.user WHERE user_name = $1 ', 
        [username]
      );
      
      /* 
        NOTE: We don't need this check. If there is an error with the hash it 
        should be checked even before we try to insert it into the database on 
        line 26. Also remove the checkHash in the response. We don't want that 
        there for outsiders.
      */ 
      const isHashed = await checkHash(password, passwordToCheck.rows[0].user_password);
       //! NOTE: This is not done yet, we want to 
       //! fix the response objects to have some sort of standard.
      const response = {
        "success": true, 
        "message": "User registered successfully", 
        "checkHash": isHashed,
        "data": {}, 
        "token": {},
      };

      res.code(HTTP_CREATED).send(response);
    } catch (err) {
      server.log.error(err);
      res.code(HTTP_ERROR).send(err);
    }
  }
}
