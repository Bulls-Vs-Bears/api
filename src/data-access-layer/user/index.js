import { createHashedPassword } from '../../utils/hash-password';

export const insert = async function (user) {
  const { username, password, email, access } = user;
  try {
    const client = await this.pg.pgWriter.connect();
    const hashedPassword = await createHashedPassword(password);
    await client.query(
      `INSERT INTO bvb_accounts.user 
        (user_name, user_password, user_email, user_access) 
      VALUES 
        ($1, $2, $3, $4)`,
      [username, hashedPassword, email, access]
    );
  } catch (err) {
    console.log("here", err);
  }

};
