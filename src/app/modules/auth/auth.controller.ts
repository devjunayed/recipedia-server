import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async(req, res) => {
    const result = await AuthServices.logInUserFromDB(req.body);
    res.cookie('access-token', result.accessToken);
    sendResponse(res, {
        success: true,
        message: "User logged in successfully!",
        data: result,
        statusCode: httpStatus.OK
    })
})
const changePassword = catchAsync(async(req, res) => {
    const result = await AuthServices.changePasswordIntoDB(req?.user, req.body);
    sendResponse(res, {
        success: true,
        message: "Password changed successfully!",
        data: result,
        statusCode: httpStatus.OK
    })
})
const forgetPassword = catchAsync(async(req, res) => {
    const result = await AuthServices.forgetPassword(req.body.id);
    sendResponse(res, {
        success: true,
        message: "Email sent successfully!",
        data: result,
        statusCode: httpStatus.OK
    })
})


export const AuthController = {
    loginUser,
    changePassword,
    forgetPassword
}