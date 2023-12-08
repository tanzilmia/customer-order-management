import { IUserInterface } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: IUserInterface) => {
  const result = await User.create(user);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find(
    {},
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  );
  return result;
};

const findSingleUser = async (id: string) => {
  const result = await User.findOne(
    { userId: id },
    {
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      isActive: 1,
      hobbies: 1,
      address: 1,
    },
  );
  return result;
};

export const userServices = {
  createUserInDB,
  getAllUsers,
  findSingleUser,
};
