import { IUserInterface } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: IUserInterface) => {
  const result = await User.create(user);
  const data = {
    userId: result.userId,
    username: result.username,
    fullName: result.fullName,
    age: result.age,
    email: result.email,
    isActive: result.isActive,
    hobbies: result.hobbies,
    address: result.address,
  };
  return data;
};

export const userServices = {
  createUserInDB,
};
