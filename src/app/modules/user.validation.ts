import { z } from 'zod';

const FullNameValidation = z.object({
  firstName: z.string().min(3).max(20, { message: 'firstName is required' }),
  lastName: z.string().min(3).max(20, { message: 'lastName is required' }),
});
const AddressValidation = z.object({
  street: z.string().min(3).max(20, { message: 'street is required' }),
  city: z.string().min(3).max(20, { message: 'city is required' }),
  country: z.string().min(3).max(20, { message: 'country is required' }),
});
const OrderValidation = z.object({
  productName: z
    .string()
    .min(3)
    .max(200, { message: 'productName is required' }),
  price: z.number().min(1, { message: 'price is required' }),
  quantity: z.number().min(1, { message: 'quantity is required' }),
});

export const userValidation = z.object({
  userId: z
    .number()
    .int()
    .positive('User Id Must Be possitive number')
    .min(6, { message: 'Use Id required' }),
  username: z.string().min(3).max(20, { message: 'street is required' }),
  password: z.string().min(1).max(20, { message: 'Password is required' }),
  fullName: FullNameValidation.refine(
    (value) => !!value.firstName || !!value.lastName,
    {
      message: 'firstName and lastName required',
    },
  ),
  age: z.number().min(1, { message: 'age is required' }),
  email: z.string().min(3).max(20, { message: 'email is required' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressValidation.refine(
    (value) => value.city || value.country || value.street,
    {
      message: 'city, country, street is required',
    },
  ),
  orders: OrderValidation.optional(),
  isDeleted: z.boolean(),
});
