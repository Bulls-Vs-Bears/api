import { SALT_ROUNDS, } from 'config';
import bcrypt from 'bcrypt';

// Hashing password to store into Postgres
export const createHashedPassword = async function(password) {
  const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS, 10));
  const hashedPassword = await bcrypt.hash(password, salt);
  if (!hashedPassword) {
    throw hashedPassword;
  }
  return hashedPassword;
}

// Check and confirm if password and hash is true
// disabling eslint for now bc of checkHash not being used
/* eslint-disable */
export const doCheckHash = async function(password, hashedPassword) { 
  const result = await bcrypt.compare(password, hashedPassword)
  if (result == Error) {
    throw result;
  }
  return result;
}
/* eslint-enable */
