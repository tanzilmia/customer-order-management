import { NextFunction, Request, Response } from 'express';
import { userValidation } from './user.validation';
import { userServices } from './user.service';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.body;
    const validateData = userValidation.parse(user);
    const result = await userServices.createUserInDB(validateData);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    if (error) {
      res.status(500).json({
        success: false,
        message: error || 'Something went wrong',
        error: error,
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error,
      });
    }
  }
  next();
};
