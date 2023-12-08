import express from 'express';
import { createUser, getUsers } from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users', getUsers);

export const UserRoutes = router;
