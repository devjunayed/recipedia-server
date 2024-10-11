import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserServices.createUserIntoDB(req.body);

        res.status(200).send({
            success: true,
            data: result,
            message: 'User created successfully!'
        })
    } catch (error) {
       next(error)
    }
  
}

export const UserControllers = {
    createUser
}