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
    const result = await userServices.getAllUsersFromDB();
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
    const result = await userServices.findSingleUserFromDB(id);

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
    const result = await userServices.updateSIngleUserFromDB(id, data);
    if (result.modifiedCount === 1) {
      const updatedData = await userServices.findSingleUserFromDB(id);
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

// delete user

export const deletedSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const result = await userServices.singleUserDeleteFromDB(id);
    if (result.modifiedCount === 1) {
      res.status(200).json({
        success: true,
        massage: 'User deleted successfully!',
        data: null,
      });
    } else {
      res.status(500).json({
        success: false,
        massage: 'User not found!',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'something want wrong',
      error: error,
    });
  }
  next();
};

// add order in user collection
export const addUserOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const result = await userServices.addOrderDataIntoDB(id, data);
    if (result.modifiedCount === 1) {
      res.status(200).json({
        success: true,
        massage: 'Order created successfully!',
        data: null,
      });
    } else {
      res.status(500).json({
        success: false,
        massage: 'User not found!',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'something want wrong',
      error: error,
    });
  }
  next();
};

export const getUserAllOrderData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const result = await userServices.getUserAllOrdersDataIntoDB(id);
    if (result) {
      res.status(200).json({
        success: true,
        massage: 'Order fetched successfully!',
        data: { orders: result?.orders },
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
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'something went wrong',
      error: error,
    });
  }
  next();
};
