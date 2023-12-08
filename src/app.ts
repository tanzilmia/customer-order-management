/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

app.use('/', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'api is working..',
  });
});

export default app;
