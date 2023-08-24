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
exports.userIsAutorized = exports.findUser = exports.findUserWithEmail = void 0;
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const findUserWithEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userSchema_1.default.findOne({ email });
    if (findUser === null || findUser === void 0 ? void 0 : findUser.email) {
        return findUser._id.toString();
    }
    else {
        return false;
    }
});
exports.findUserWithEmail = findUserWithEmail;
const findUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield userSchema_1.default.findOne({ email: user.email });
    if (findUser) {
        return findUser;
    }
    return;
});
exports.findUser = findUser;
const userIsAutorized = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield userSchema_1.default.findOne({ email: user.email });
        const rol = findUser === null || findUser === void 0 ? void 0 : findUser.rol.toString();
        if (rol == "admin") {
            return true;
        }
        else {
            return false;
        }
    }
    catch (_a) {
        return false;
    }
});
exports.userIsAutorized = userIsAutorized;
