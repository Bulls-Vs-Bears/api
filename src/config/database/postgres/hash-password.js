// import { SALT_ROUNDS, } from 'config';
import bcrypt from 'bcrypt';


// Hashing password to store into Postgres
export async function hashPassword(password){
  const saltRounds = 8;
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if(err){
        reject(err);
      }
      resolve(hash);
    })
  })

  //----------------------------------------------------------------
  // !! Currently having a problem with setting salt rounds as ENV 
  // !! it will error with saying data and salt arguments required
  // const hashedPassword = await new Promise((resolve, reject) => {
  //   bcrypt.genSalt(SALT_ROUNDS, function(err, salt) {
  //     bcrypt.hash(password, salt, function(err, hash) {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(hash);
  //     });
  //   });
  // });
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
