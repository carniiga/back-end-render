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
exports.forgotPasswordCtrl = exports.loginCtrl = exports.registerCtrl = void 0;
const registerUser_1 = require("../../../logic/user-logic/registerUser");
const loginUser_1 = require("../../../logic/user-logic/loginUser");
const findUser_1 = require("../../../logic/user-logic/findUser");
const nodemailer_1 = __importDefault(require("nodemailer"));
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    const userRegister = yield (0, registerUser_1.registerUser)(userName, password, email);
    if (userRegister == "este usuario ya fue creado") {
        return res.status(400).send(userRegister).json();
    }
    res.status(200).send("usuario creado exitosamente");
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const verifiy = yield (0, loginUser_1.isLogin)(email, password);
    if (verifiy) {
        const messageResp = {
            infouser: verifiy
        };
        return res.status(200).json({ message: messageResp.infouser });
    }
    else {
        return res.status(400).json({ message: "contraseña y/o usuario incorrecto." });
    }
});
exports.loginCtrl = loginCtrl;
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: "carniigafernandez@gmail.com",
        pass: "d f m u s o h m l s p z z r c s"
    }
});
const forgotPasswordCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    const find = yield (0, findUser_1.findUserWithEmail)(email);
    const info = yield transporter.sendMail({
        from: '"Fernandez Viajes" <fernandezagustin98@hotmail.com>',
        to: email,
        subject: "hola desde fernandez Viajes",
        html: `
                <p>Te Hemos enviado este correo para que restablezcas la contraseña. por favor ingresa mediante este link : <a>localhost:3001/forgot-password/${find}</a></p>
            `
    });
    res.send(info);
});
exports.forgotPasswordCtrl = forgotPasswordCtrl;
