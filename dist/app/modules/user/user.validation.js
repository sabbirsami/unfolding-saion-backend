"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .min(1, 'Name cannot be less then 1 word'),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
const loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email('Invalid email format'),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
exports.UserValidation = {
    createUserValidationSchema,
    loginUserValidationSchema,
};
