import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface"

const logInUserFromDB = async(payload: TLoginUser) => {
    const user = await User.isUserExistsByEmail(payload.email);

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, "User not Found!");
    }

    const isDeleted = user?.isDeleted;
    
    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN, 'This is user is deleted');
    }

}

export const AuthServices = {
    logInUserFromDB
}