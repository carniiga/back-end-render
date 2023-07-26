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
exports.registerUser = void 0;
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const userHash_1 = require("./userHash");
const registerUser = (userName, password, email) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordHashed = yield (0, userHash_1.passwordcrypted)(`${password}`);
    const userFind = yield userSchema_1.default.findOne({ email });
    if (userFind) {
        return "usuario ya creado";
    }
    if (email == "fernandezagustin98@hotmail.com") {
        const registerAdmin = new userSchema_1.default({
            userName, password: passwordHashed, email, rol: "admin"
        });
        yield userSchema_1.default.create(registerAdmin);
        return;
    }
    else {
        const registerNormal = yield userSchema_1.default.create({ userName, password: passwordHashed, email });
        return registerNormal;
    }
});
exports.registerUser = registerUser;
