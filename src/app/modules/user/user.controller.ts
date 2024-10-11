import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async(req: Request, res: Response) => {
    const result = await UserServices.createUserIntoDB(req.body);

    res.status(200).send({
        success: true,
        data: result,
        message: 'User created successfully!'
    })
}

export const UserControllers = {
    createUser
}