import { Router } from 'express'
import { FollowersController } from './follow.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = Router()

router.post(
  '/',
  auth(USER_ROLE.user, USER_ROLE.premiumUser, USER_ROLE.admin),
  FollowersController.toggleFollowers,
)

export const FollowersRoutes = router
