import express from 'express';
import { createUser, getSingleUser, getUsers } from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', getUsers);
router.get('/api/users/:userId', getSingleUser);

export const UserRoutes = router;
