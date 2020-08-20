import { GENERAL_ACCESS, HTTP_SUCCESS, HTTP_CREATED, HTTP_ERROR, } from 'config';
import * as userDal from '../../data-access-layer/user';

export async function getUserHandler(req, res) {
  // TODO: Finish this after /user POST
  try {
    res.code(HTTP_SUCCESS).send({ req });
  } catch (err) {
    this.log.error(err);
    res.code(HTTP_ERROR).send(err);
  }
}

export async function createUserHandler(req, res) {
  try {
    const insertUser = userDal.insert.bind(this, req.body);
    await insertUser();
    //! NOTE: This is not done yet, we want to 
    //! fix the response objects to have some sort of standard.
    const token = await res.jwtSign({
      access: [GENERAL_ACCESS]
    });

    const response = {
      success: true, 
      message: "User registered successfully", 
      data: {},
      token
    };

    res.code(HTTP_CREATED).send(response);
  } catch (err) {
    this.log.error(err);
    res.code(HTTP_ERROR).send(err);
  }
}