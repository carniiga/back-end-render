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
exports.createProdDb = void 0;
const productSchema_1 = __importDefault(require("../../model/productModel/productSchema"));
const createProdDb = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, description, imgUrl, category, marca, totalQuantity } = product;
    const createProd = yield productSchema_1.default.create({ name, price, description, imgUrl, category, marca, totalQuantity });
    return createProd;
});
exports.createProdDb = createProdDb;