import { Router } from 'express';
import { UserRoute } from '../app/modules/user/user.route';
import { BlogRouter } from '../app/modules/blog/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoute,
  },
  {
    path: '/blogs',
    route: BlogRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
