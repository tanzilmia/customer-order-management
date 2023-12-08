interface IName {
  firstName: string;
  lastName: string;
}
interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IUser {
  userId: string;
  username: string;
  password: string;
  fullName: IName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
}
