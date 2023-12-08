import express from 'express';
import { createUser } from './user.controller';
const router = express.Router();

router.post('/api/users', createUser);

export const UserRoutes = router;
