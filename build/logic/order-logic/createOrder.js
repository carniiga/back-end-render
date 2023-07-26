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
exports.createOrder = void 0;
const orderSchema_1 = __importDefault(require("../../model/orderModel/orderSchema"));
const userSchema_1 = __importDefault(require("../../model/userModel/userSchema"));
const createOrder = (user, prods) => __awaiter(void 0, void 0, void 0, function* () {
    const createOr = yield orderSchema_1.default.create({
        userId: user.id,
        cart: prods
    });
    let findUserAndUpdateOrder = yield userSchema_1.default.findByIdAndUpdate(user._id, {
        order: createOr._id
    });
    try {
        findUserAndUpdateOrder === null || findUserAndUpdateOrder === void 0 ? void 0 : findUserAndUpdateOrder.save();
        return createOr;
    }
    catch (error) {
        console.log(error);
    }
});
exports.createOrder = createOrder;
