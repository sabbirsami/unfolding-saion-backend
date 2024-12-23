"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/signin', (req, res) => {
    res.status(201).json({
        data: [],
        message: 'Authentication succeed',
    });
});
exports.UserRoute = router;
