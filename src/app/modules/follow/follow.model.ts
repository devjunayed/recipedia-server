import { Schema, model, Types } from 'mongoose'

const followerSchema = new Schema(
  {
    followerId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    _id: false,
  },
)

const followersSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    followersId: [followerSchema],
  },
  {
    timestamps: true,
  },
)
export const Followers = model('Followers', followersSchema)
