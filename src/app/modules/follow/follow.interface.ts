import { Types } from "mongoose";

export type TFollower ={
    followerId: Types.ObjectId;
}
export interface TFollowers {
    userId: Types.ObjectId;
    followersId: TFollower[]
}