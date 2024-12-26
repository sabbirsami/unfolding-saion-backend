"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const blog_service_1 = require("./blog.service");
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../error/AppError"));
const createBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = req.user;
    if (!user) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'User not authenticated');
    }
    const data = Object.assign(Object.assign({}, req.body), { author: user.userId });
    const result = yield blog_service_1.BlogService.createBlogIntoDB(data);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blog updated successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
const updateBlog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield blog_service_1.BlogService.updateBlogFromDB(id, req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'Blog updated successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
exports.BlogController = {
    createBlog,
    updateBlog,
};
