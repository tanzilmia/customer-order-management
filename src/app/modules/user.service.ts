import { IUserInterface } from './user.interface';
import { User } from './user.model';

const createUserInDB = async (user: IUserInterface) => {
  const result = await User.create(user);
  return result;
};
//
const getAllUsersFromDB = async () => {
  const result = await User.find(
    { isDeleted: false },
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

const findSingleUserFromDB = async (id: string) => {
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
// update single user data
const updateSIngleUserFromDB = async (id: string, data: IUserInterface) => {
  const {
    userId,
    username,
    password,
    fullName,
    age,
    email,
    isActive,
    hobbies,
    address,
  } = data;

  const result = await User.updateOne(
    { userId: id },
    {
      $set: {
        userId,
        username,
        password,
        fullName,
        age,
        email,
        isActive,
        hobbies,
        address,
      },
    },
  );
  return result;
};

// delete single user

const singleUserDeleteFromDB = async (id: string) => {
  const result = await User.updateOne(
    { userId: id },
    { $set: { isDeleted: true } },
  );
  return result;
};

export const userServices = {
  createUserInDB,
  getAllUsersFromDB,
  findSingleUserFromDB,
  updateSIngleUserFromDB,
  singleUserDeleteFromDB,
};
