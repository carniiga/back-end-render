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
exports.deleteProd = void 0;
const productSchema_1 = __importDefault(require("../../model/productModel/productSchema"));
const deleteProd = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const id2 = id.trim("");
    console.log(id2.length);
    const deleteProd = yield productSchema_1.default.findByIdAndDelete(id2);
    if (deleteProd) {
        return "el  producto ha sido elimiando correctamente";
    }
});
exports.deleteProd = deleteProd;
