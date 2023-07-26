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
exports.getOrderByUser = void 0;
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const orderSchema_1 = __importDefault(require("../../model/orderModel/orderSchema"));
const userToken_1 = require("../user-logic/userToken");
const findUser_1 = require("../user-logic/findUser");
const getOrderByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const tokenToId = yield (0, userToken_1.destructureUserWithToken)(`${userId}`);
    const find = yield (0, findUser_1.findUser)(tokenToId);
    const getOrder = yield userSchema_1.default.findOne({ _id: find === null || find === void 0 ? void 0 : find._id }).populate({
        path: "order",
    });
    let getOrders = yield orderSchema_1.default.find({ userId: find === null || find === void 0 ? void 0 : find._id });
    const addOrdersToUser = yield userSchema_1.default.findByIdAndUpdate({ _id: find === null || find === void 0 ? void 0 : find._id }, {
        orders: getOrders
    });
    try {
        yield (addOrdersToUser === null || addOrdersToUser === void 0 ? void 0 : addOrdersToUser.save());
        return { "orders": addOrdersToUser === null || addOrdersToUser === void 0 ? void 0 : addOrdersToUser.orders };
    }
    catch (error) {
    }
});
exports.getOrderByUser = getOrderByUser;
