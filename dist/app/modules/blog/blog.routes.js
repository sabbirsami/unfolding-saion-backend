"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = require("../../middlewares/validateRequest");
const blog_validation_1 = require("./blog.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const blog_controller_1 = require("./blog.controller");
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.validateRequest)(blog_validation_1.BlogValidation.createBlogValidationSchema), (0, auth_1.default)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), blog_controller_1.BlogController.createBlog);
router.patch('/:id', (0, validateRequest_1.validateRequest)(blog_validation_1.BlogValidation.updateBlogValidationSchema), (0, auth_1.default)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), blog_controller_1.BlogController.updateBlog);
exports.BlogRouter = router;
