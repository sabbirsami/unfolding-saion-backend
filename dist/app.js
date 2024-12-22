"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./swagger_output.json"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
console.log(swagger_output_json_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
// application routes
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.send('Working');
});
// app.use(globalErrorHandler);
// Not Found
app.all('*', (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} route on the server`);
    error.status = 404;
    next(error);
});
exports.default = app;
