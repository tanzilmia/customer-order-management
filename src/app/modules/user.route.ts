import express from 'express';
import {
  addUserOrder,
  createUser,
  deletedSingleUser,
  getSingleUser,
  getUsers,
  updateUserInfo,
} from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', getUsers);
router.get('/api/users/:userId', getSingleUser);
router.put('/api/users/:userId', updateUserInfo);
router.delete('/api/users/:userId', deletedSingleUser);
router.put('/api/users/:userId/orders', addUserOrder);

export const UserRoutes = router;
