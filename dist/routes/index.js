"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../app/modules/user/user.route");
const router = (0, express_1.Router)();
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
        route: user_route_1.UserRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
