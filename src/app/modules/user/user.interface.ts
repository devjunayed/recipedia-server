/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TRole = 'admin' | 'user' | 'premiumUser';
export type TStatus = 'active' | 'blocked'

export interface TUser{
    _id?: string;
    username: string;
    email: string;
    image: string;
    password: string;
    address: string;
    role: TRole;
    isDeleted: boolean,
    status: TStatus
}

export interface UserModel extends Model<TUser>{
    isUserExistsByEmail(email: string): Promise<TUser>,
    isUserExistsById(id: string): Promise<TUser>,
    isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>
}

export type TUserRole = keyof typeof USER_ROLE;