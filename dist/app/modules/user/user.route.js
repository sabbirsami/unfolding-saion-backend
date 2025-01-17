"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = require("../../middlewares/validateRequest");
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.validateRequest)(user_validation_1.UserValidation.createUserValidationSchema), user_controller_1.UserController.createUser);
router.post('/login', (0, validateRequest_1.validateRequest)(user_validation_1.UserValidation.loginUserValidationSchema), user_controller_1.UserController.loginUser);
exports.UserRoute = router;
