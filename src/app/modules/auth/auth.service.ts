import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface"

const logInUserFromDB = async(payload: TLoginUser) => {
    const isUserExist = await User.isUserExistsByEmail(payload.email);

    if(!isUserExist){
        throw new AppError(httpStatus.NOT_FOUND, "User not Found!");
    }

    

}

export const AuthServices = {
    logInUserFromDB
}