import express from 'express';
import {
  createUser,
  getSingleUser,
  getUsers,
  updateUserInfo,
} from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', getUsers);
router.get('/api/users/:userId', getSingleUser);
router.put('/api/users/:userId', updateUserInfo);

export const UserRoutes = router;
