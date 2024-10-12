import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { User } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import { createToken } from './auth.utils'
import { JwtPayload } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import config from '../../config'

const logInUserFromDB = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByEmail(payload.email)

  //   Throwing erro if no user
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not Found!')
  }

  // checking if user is deleted
  const isDeleted = user?.isDeleted

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This is user is deleted')
  }

  // checking if user is blocked

  const status = user?.status
  if (status === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'The user is blocked by the Admin')
  }

  // checking if user password is valid or not

  if (!(await User.isPasswordMatched(payload.password, user.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password mismatched')
  }

  const jwtPayload = {
    userId: user._id as string,
    role: user.role as string,
  }

  //   creating token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expiresin as string,
  )

  return {
    accessToken,
    user,
  }
}

const changePasswordIntoDB = async (
  userData: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {

  const user = await User.isUserExistsById(userData.userId);
 //   Throwing erro if no user
 if (!user) {
  throw new AppError(httpStatus.NOT_FOUND, 'User not Found!')
}

// checking if user is deleted
const isDeleted = user?.isDeleted

if (isDeleted) {
  throw new AppError(httpStatus.FORBIDDEN, 'This is user is deleted')
}

// checking if user is blocked

const status = user?.status
if (status === 'blocked') {
  throw new AppError(httpStatus.FORBIDDEN, 'The user is blocked by the Admin')
}

// checking if user password is valid or not

if (!(await User.isPasswordMatched(payload.oldPassword, user.password))) {
  throw new AppError(httpStatus.FORBIDDEN, 'Password mismatched')
}

const newHashedPassword = await bcrypt.hash(payload.newPassword, Number(config.salt_rounds));



await User.findOneAndUpdate({
  id: userData.userId,
  role: userData.role
},{
  password: newHashedPassword
})

return null;
}


export const AuthServices = {
  logInUserFromDB,
  changePasswordIntoDB
}
