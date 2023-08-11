"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.port = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.port = 3000;
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    origin: "http://http://localhost:3000",
    methods: ["POST", "DELETE", "PUT", "GET"]
}));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.json({ limit: '50mb' }));
exports.app.use(express_1.default.urlencoded({ limit: '50mb' }));
