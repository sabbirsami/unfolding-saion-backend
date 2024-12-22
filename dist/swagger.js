"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        version: 'v0.1.0',
        title: 'Unfolding Saion Backend',
        description: 'Implementation of Swagger with TypeScript',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: '',
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            },
        },
    },
};
const outputFile = './swagger_output.json';
const routes = ['./routes/index.ts'];
(0, swagger_autogen_1.default)()(outputFile, routes, doc);
