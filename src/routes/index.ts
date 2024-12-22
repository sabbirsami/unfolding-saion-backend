import { Router } from 'express';
import { UserRoute } from '../app/modules/user/user.route';

const router = Router();

const moduleRoutes = [
  /**
   * @swagger
   * /api/users/signin:
   *   post:
   *     summary: User login
   *     tags: [User]
   *     parameters:
   *       - in: body
   *         name: user
   *         description: User credentials
   *         schema:
   *           type: object
   *           properties:
   *             username:
   *               type: string
   *             password:
   *               type: string
   *     responses:
   *       200:
   *         description: Successful login
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items: {}
   *                 message:
   *                   type: string
   */

  {
    path: '/users',
    route: UserRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
