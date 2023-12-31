import { Schema, model } from 'mongoose';
import { IAddress, IName, IOrders, IUserInterface } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../config';

export const nameSchema = new Schema<IName>({
  firstName: {
    required: true,
    type: String,
    trim: true,
  },
  lastName: {
    required: true,
    type: String,
    trim: true,
  },
});
export const addressSchema = new Schema<IAddress>({
  street: {
    required: true,
    type: String,
    trim: true,
  },
  city: {
    required: true,
    type: String,
    trim: true,
  },
  country: {
    required: true,
    type: String,
    trim: true,
  },
});

export const orderSchema = new Schema<IOrders>({
  productName: {
    required: true,
    type: String,
    trim: true,
  },
  price: {
    required: true,
    type: Number,
    trim: true,
  },
  quantity: {
    required: true,
    type: Number,
    trim: true,
  },
});

export const userSchema = new Schema<IUserInterface>({
  userId: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  fullName: {
    type: nameSchema,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  hobbies: [{ type: String, required: true }],
  address: {
    type: addressSchema,
    required: true,
  },
  orders: {
    type: orderSchema || undefined,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<IUserInterface>('User', userSchema);
