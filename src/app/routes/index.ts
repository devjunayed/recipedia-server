import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'

const router = Router();

const routers = [
  {
    path: '/',
    routes: UserRoutes,
  },
]

routers.forEach(route => router.use(route.path, route.routes))

export const AllRoutes = router;
