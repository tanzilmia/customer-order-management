import express from 'express';
import {
  addUserOrder,
  createUser,
  deletedSingleUser,
  getSingleUser,
  getUserAllOrderData,
  getUsers,
  updateUserInfo,
} from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', getUsers);
router.get('/api/users/:userId', getSingleUser);
router.get('/api/users/:userId/orders', getUserAllOrderData);
router.put('/api/users/:userId', updateUserInfo);
router.put('/api/users/:userId/orders', addUserOrder);
router.delete('/api/users/:userId', deletedSingleUser);

export const UserRoutes = router;
