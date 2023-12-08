import { z } from 'zod';

const FullNameValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: 'first name min lenght 3 character' })
    .max(20, { message: 'firstName max lenght 20 character' }),
  lastName: z
    .string()
    .min(3, { message: 'last name min lenght 3 character' })
    .max(20, { message: 'lastName max lenght 20 character' }),
});
const AddressValidation = z.object({
  street: z
    .string()
    .min(3, { message: 'street length must be 3 character' })
    .max(20, { message: 'street max lenght 20 character' }),
  city: z
    .string()
    .min(3, { message: 'city length must be 3 character' })
    .max(20, { message: 'city max lenght 20 character' }),
  country: z
    .string()
    .min(3, { message: 'country length must be 3 character' })
    .max(20, { message: 'country max lenght 20 character ' }),
});
const OrderValidation = z.object({
  productName: z
    .string()
    .min(3, { message: 'product Name length must be 3 character' })
    .max(200, { message: 'product Name max length 200 character' }),
  price: z.number().min(1, { message: 'price length must be 1 character' }),
  quantity: z
    .number()
    .min(1, { message: 'quantity length must be 1 character' }),
});

export const userValidation = z.object({
  userId: z
    .number()
    .int()
    .positive(`User id must be positive int`)
    .min(1, { message: 'User Id minimum 1 character' }),

  username: z
    .string()
    .min(3, { message: 'username min lenght 3 character' })
    .max(20, { message: 'username max lenght 20 character' }),
  password: z
    .string()
    .min(5, { message: 'Password must be at last 5 character' })
    .max(15, { message: 'Password max length 15 character' }),
  fullName: FullNameValidation.refine(
    (value) => value.firstName && value.lastName,
    {
      message: 'firstName and lastName required',
    },
  ),
  age: z.number().min(1, { message: 'age is required' }),
  email: z.string().email('Invalid email formet'),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressValidation.refine(
    (value) => value.city && value.country && value.street,
    {
      message: 'city, country, street is required',
    },
  ),
  orders: z.array(OrderValidation).optional(),
  isDeleted: z.boolean().default(false),
});
