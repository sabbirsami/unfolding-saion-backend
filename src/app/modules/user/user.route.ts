import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.post('/signin', (req, res) => {
  res.status(201).json({
    data: [],
    message: 'Authentication succeed',
  });
});

export const UserRoute = router;
