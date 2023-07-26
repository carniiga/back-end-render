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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoginMiddleware = void 0;
const userToken_1 = require("../userToken");
const findUser_1 = require("../findUser");
const isLoginMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenBearer = req.headers.authorization;
    const tokenClean = tokenBearer === null || tokenBearer === void 0 ? void 0 : tokenBearer.slice(7);
    const userDestructure = yield (0, userToken_1.destructureUserWithToken)(tokenClean);
    const isAutorized = yield (0, findUser_1.userIsAutorized)(userDestructure);
    if (!isAutorized) {
        res.send("este usuario no es apto para realizar estas acciones");
    }
    if (isAutorized) {
        return next();
    }
    return;
});
exports.isLoginMiddleware = isLoginMiddleware;
