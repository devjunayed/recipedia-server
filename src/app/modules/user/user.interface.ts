/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export type TRole = 'admin' | 'user' | 'premiumUser';

export interface TUser{
    username: string;
    email: string;
    image: string;
    password: string;
    address: string;
    role: TRole;
    isDeleted: boolean
}

export interface UserModel extends Model<TUser>{
    isUserExistsByEmail(email: string): Promise<TUser>
}