import { SALT_ROUNDS, } from 'config';
import bcrypt from 'bcrypt';


// Hashing password to store into Postgres
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS, 10));
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// Check and confirm if password and hash is true
export async function checkHash(password, hashedPassword) {
  const result = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function(err, result) {
      if(err){
        reject(err);
      }
      resolve(result);
    })
  })
  return result;
}
