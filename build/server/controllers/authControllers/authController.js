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
exports.loginCtrl = exports.registerCtrl = void 0;
const registerUser_1 = require("../../../logic/user-logic/registerUser");
const loginUser_1 = require("../../../logic/user-logic/loginUser");
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
    const messageResp = {
        infouser: verifiy
    };
    res.status(200).json({ message: messageResp.infouser });
});
exports.loginCtrl = loginCtrl;
