import { Router } from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { loginUserValidation } from './auth.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/signin',
  validateRequest(loginUserValidation),
  AuthController.loginUser,
)

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.premiumUser),
  AuthController.changePassword,
)

router.post("/forget-password", AuthController.forgetPassword)

export const AuthRoutes = router
