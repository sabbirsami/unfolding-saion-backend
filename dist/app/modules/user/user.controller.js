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
exports.UserController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const user_service_1 = require("./user.service");
const config_1 = __importDefault(require("../../config"));
const createUser = (0, catchAsync_1.catchAsync)((req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.createUserIntoDB(req.body);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'User created successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: { _id: result._id, name: result.name, email: result.email },
    });
}));
const loginUser = (0, catchAsync_1.catchAsync)((req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.loginUser(req.body);
    const { refreshToken, accessToken } = result;
    res.cookie('refreshToken', refreshToken, {
        secure: config_1.default.NODE_ENV === 'production',
        httpOnly: true,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        success: true,
        message: 'User created successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: {
            accessToken,
        },
    });
}));
exports.UserController = {
    createUser,
    loginUser,
};
