import { userRepository } from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../utils/jwt.js';

export const signUpService = async (data) => {
  try {
    const newUser = await userRepository.signUpUser(data);
    return newUser;
  } catch (error) {
    console.log('service error', error);
    if (error.name === 'MongoServerError' && error.code === 11000) {
      throw {
        status: 400,
        message: 'User with the same email or username already exists',
      };
    }
    throw error;
  }
};

export const signInService = async (data) => {
  try {
    //Check for valid user
    const user = await userRepository.getByEmail(data.email);
    if (!user) {
      throw {
        status: 404,
        message: 'User not found',
      };
    }
    //Compare password
    const isPasswordValid = bcrypt.compareSync(data.password, user.password);

    if (!isPasswordValid) {
      throw {
        status: 401,
        message: 'Invalid Password',
      };
    }
    return {
      email: user.email,
      _id: user._id,
      user: user.username,
      role: user.role || 'user',
      token: generateJwtToken({ id: user._id, email: user.email }),
    };
  } catch (error) {
    throw error;
  }
};
