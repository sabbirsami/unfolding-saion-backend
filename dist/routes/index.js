"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../app/modules/user/user.route");
const blog_routes_1 = require("../app/modules/blog/blog.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: user_route_1.UserRoute,
    },
    {
        path: '/blogs',
        route: blog_routes_1.BlogRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
