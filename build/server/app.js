"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.port = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
exports.port = 3000;
exports.app = (0, express_1.default)();
exports.app.use(body_parser_1.default.json({ limit: '35mb' }));
exports.app.use(body_parser_1.default.urlencoded({
    extended: true,
    limit: '35mb',
    parameterLimit: 50000,
}));
exports.app.use((0, cors_1.default)({
    origin: "*",
}));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.json({ limit: '100mb' }));
exports.app.use(express_1.default.urlencoded({ limit: '100mb' }));
