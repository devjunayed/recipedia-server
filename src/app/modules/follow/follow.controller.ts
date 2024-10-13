import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { FollowersServices } from './follow.service'

const toggleFollowers = catchAsync(async (req: Request, res: Response) => {

  const userId = req?.user?.userId


  const result = await FollowersServices.toggleFollowersIntoDB(
    userId as string,
    req?.query?.followingId as string,
  )


  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result,
    message: 'User created successfully!',
  })
})

export const FollowersController = {
  toggleFollowers,
}
