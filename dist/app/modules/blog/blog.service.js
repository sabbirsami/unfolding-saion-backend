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
exports.BlogService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../error/AppError"));
const blog_model_1 = require("./blog.model");
const createBlogIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.BlogModel.create(payload);
    const result = yield blog_model_1.BlogModel.findById(blog._id)
        .populate('author', 'name email')
        .select('-isPublished -updatedAt -createdAt');
    return result;
});
const updateBlogFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExists = yield blog_model_1.BlogModel.findById(id);
    if (!isBlogExists) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog not found');
    }
    if (payload.isPublished) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, 'Blog not found');
    }
    const blog = yield blog_model_1.BlogModel.findByIdAndUpdate(id, payload, {
        new: true,
    })
        .populate('author', 'name email')
        .select('-isPublished -updatedAt -createdAt');
    return blog;
});
exports.BlogService = {
    createBlogIntoDB,
    updateBlogFromDB,
};
