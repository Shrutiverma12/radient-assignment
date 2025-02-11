import User from '../schema/user.js';
import crudRepository from './crudRepository.js';

export const userRepository = {
  ...crudRepository(User),
  signUpUser: async function (data) {
    const newUser = new User(data);
    await newUser.save();
    return newUser;
  },
  getByEmail: async function (email) {
    const user = await User.findOne({ email });
    return user;
  },
};
