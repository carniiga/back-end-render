"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productsCtrl = __importStar(require("../../controllers/productsControllers/productsController"));
const isLoginMiddleware_1 = require("../../../logic/user-logic/middlewareUser/isLoginMiddleware");
exports.productRouter = (0, express_1.Router)();
//cualquier usuario puede obtener endpoints de get.
exports.productRouter.get("/products", productsCtrl.getAllProductCtrl);
exports.productRouter.get("/products/find/:id", productsCtrl.findproductByIdCtrl);
exports.productRouter.get("/products/findByName/:name", productsCtrl.findProductByNameCtrl);
//a partir de aca, solo usuarios "admin",
exports.productRouter.post("/products/create", isLoginMiddleware_1.isLoginMiddleware, productsCtrl.createProductCtrl);
exports.productRouter.put("/products/update/:id", isLoginMiddleware_1.isLoginMiddleware, productsCtrl.updateProductCtrl);
exports.productRouter.delete("/products/delete/:id", isLoginMiddleware_1.isLoginMiddleware, productsCtrl.deleteProdCtrl);
