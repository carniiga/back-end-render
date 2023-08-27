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
exports.restorePass = exports.transporterFunction = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const userHash_1 = require("./userHash");
const transporterFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: "localhost",
        port: 3000,
        secure: true,
        auth: {
            user: "fernandezagustin98@hotmail.com.ar",
            pass: "Agustinredbull1234"
        }
    });
});
exports.transporterFunction = transporterFunction;
const restorePass = (password, userId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(password.length);
    const passwordHashed = yield (0, userHash_1.passwordcrypted)(password);
    const findUserAndUpdate = yield userSchema_1.default.findByIdAndUpdate(userId, { password: passwordHashed });
});
exports.restorePass = restorePass;
