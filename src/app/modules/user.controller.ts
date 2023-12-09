import { NextFunction, Request, Response } from 'express';
import { userValidation } from './user.validation';
import { userServices } from './user.service';

// create user

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

// get users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      code: 500,
      description: 'Internal server error',
      details: error,
    });
  }
  next();
};

// get single user

export const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const result = await userServices.findSingleUser(id);

    if (result) {
      res.status(200).json({
        success: true,
        massage: 'User fetched successfully!',
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        massage: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: unknown) {
    res.status(500).json({
      code: 500,
      description: 'Internal server error',
      details: error,
    });
  }
  next();
};

// update single user info

export const updateUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const result = await userServices.updateSIngleUser(id, data);
    if (result.modifiedCount === 1) {
      const updatedData = await userServices.findSingleUser(id);
      res.status(200).json({
        success: true,
        massage: 'User updated successfully!',
        data: updatedData,
      });
    } else {
      res.status(500).json({
        success: false,
        massage: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error: unknown) {
    res.status(500).json({
      code: 500,
      description: 'Internal server error',
      details: error,
    });
  }
  next();
};
