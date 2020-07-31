//! From the debugging I have been doing, after spinning up the containers,
//! I'm unable to access the '/'. 

import bcrypt from 'bcrypt';

export async function hashPassword(password){
  // keeping salt round as local var for testing, will change to env later
  const saltRounds = 8;
  bcrypt.hash(password, saltRounds).then(function(hash) {
    return hash;
  });
}