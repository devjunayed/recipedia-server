import { Router } from 'express'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'
import { createUserValidation } from './user.vaildation'

const router = Router()

router.post(
  '/signup',
  validateRequest(createUserValidation),
  UserControllers.createUser,
)

export const UserRoutes = router
