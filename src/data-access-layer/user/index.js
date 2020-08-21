export const insert = async function (user) {
  const client = await this.pg.pgWriter.connect();
  const { username, password, email, access } = user;
  
  await client.query(
    `INSERT INTO bvb_accounts.user 
      (user_name, user_password, user_email, user_access) 
    VALUES 
      ($1, $2, $3, $4)`,
    [username, password, email, access]
  );
};
