import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const routers = [
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: "/auth",
    routes: AuthRoutes
  }
]

routers.forEach(route => router.use(route.path, route.routes))

export const AllRoutes = router;
