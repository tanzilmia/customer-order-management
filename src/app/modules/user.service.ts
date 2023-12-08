import { IUserInterface } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: IUserInterface) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find({}).select('-password');
  return result;
};

export const userServices = {
  createUserInDB,
  getAllUsers,
};
