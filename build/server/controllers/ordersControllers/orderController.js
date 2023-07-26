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
exports.createOrderCtrl = exports.getOrderByUserCtrl = exports.getUserWithToken = void 0;
const productSchema_1 = __importDefault(require("../../../model/productModel/productSchema"));
const userToken_1 = require("../../../logic/user-logic/userToken");
const findUser_1 = require("../../../logic/user-logic/findUser");
const createOrder_1 = require("../../../logic/order-logic/createOrder");
const findOrder_1 = require("../../../logic/order-logic/findOrder");
const getUserWithToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const userToken = token === null || token === void 0 ? void 0 : token.slice(7);
    const currentToken = yield (0, userToken_1.destructureUserWithToken)(userToken);
    const find = yield (0, findUser_1.findUser)(currentToken);
    return find;
});
exports.getUserWithToken = getUserWithToken;
const getOrderByUserCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.slice(7);
    const findOr = yield (0, findOrder_1.getOrderByUser)(`${userId}`);
    console.log(findOr);
    res.send(findOr).json();
});
exports.getOrderByUserCtrl = getOrderByUserCtrl;
const createOrderCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    const currentId = yield (0, exports.getUserWithToken)(`${token}`);
    const { cart } = req.body;
    const findProd = yield productSchema_1.default.find({ _id: cart.id });
    const createO = yield (0, createOrder_1.createOrder)(currentId, findProd);
    res.send(createO);
});
exports.createOrderCtrl = createOrderCtrl;
