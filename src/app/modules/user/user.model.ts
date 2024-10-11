import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'


const userSchema = new Schema<TUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: 0
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'premiumUser'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
    timestamps: true
})


// userSchema.pre('save', async function(next) {
//     const result = await User.findOne({email: this.email})
//     if(result){
//         throw AppError(httpStatus.NOT_)
//     }
// })

export const User = model<TUser>("user", userSchema);
