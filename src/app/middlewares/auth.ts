/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { TUserRole } from '../modules/user/user.interface'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/AppError'
import httpStatus from 'http-status'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import { User } from '../modules/user/user.model'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized')
    }
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload
    

    const { role, userId, iat } = decoded

    const user = await User.isUserExistsById(userId)

    if(!user){
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
    }

    const isDeleted = user.isDeleted

    if(isDeleted){
        throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted!');
    }

    const userStatus = user?.status;

    if(userStatus === 'blocked'){
        throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked!')
    }

    if(requiredRoles && !requiredRoles.includes(role)){
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    req.user  = decoded as JwtPayload & {role: string};
    next();
  })
}

export default auth
