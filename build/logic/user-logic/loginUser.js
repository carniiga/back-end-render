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
exports.isLogin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const userToken_1 = require("./userToken");
// import { userIsAutorized } from "./findUser"
const isLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userSchema_1.default.findOne({ email });
    const verifyPass = yield bcryptjs_1.default.compare(`${password}`, `${findUser === null || findUser === void 0 ? void 0 : findUser.password}`);
    if (verifyPass) {
        const token = yield (0, userToken_1.generateToken)(findUser);
        const infoUser = {
            token: token,
            userName: findUser === null || findUser === void 0 ? void 0 : findUser.userName,
            rol: findUser === null || findUser === void 0 ? void 0 : findUser.rol
        };
        return infoUser;
    }
});
exports.isLogin = isLogin;
