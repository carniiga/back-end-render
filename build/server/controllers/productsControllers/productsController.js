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
exports.deleteProdCtrl = exports.updateProductCtrl = exports.findProductByNameCtrl = exports.findproductByIdCtrl = exports.createProductCtrl = exports.getAllProductCtrl = void 0;
const createProd_1 = require("../../../logic/product-logic/createProd");
const updateProd_1 = require("../../../logic/product-logic/updateProd");
const findprodById_1 = require("../../../logic/product-logic/findprodById");
const deleteProd_1 = require("../../../logic/product-logic/deleteProd");
const findAllProd_1 = require("../../../logic/product-logic/findAllProd");
const getAllProductCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getAll = yield (0, findAllProd_1.findAll)();
    res.send(getAll).json();
});
exports.getAllProductCtrl = getAllProductCtrl;
const createProductCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productInput = req.body;
    const createProd = yield (0, createProd_1.createProdDb)(productInput);
    res.status(200).send(createProd).json();
});
exports.createProductCtrl = createProductCtrl;
const findproductByIdCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const findProd = yield (0, findprodById_1.findProductDbById)(id);
    res.status(200).send(findProd).json();
});
exports.findproductByIdCtrl = findproductByIdCtrl;
const findProductByNameCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nameProd = req.params.name;
    const productName = yield (0, findprodById_1.findProductByName)(nameProd);
    res.status(200).send(productName).json();
});
exports.findProductByNameCtrl = findProductByNameCtrl;
const updateProductCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productInput = req.body;
    const updateProd = yield (0, updateProd_1.updateProduct)(productInput, `${id}`);
});
exports.updateProductCtrl = updateProductCtrl;
const deleteProdCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productToDelete = yield (0, deleteProd_1.deleteProd)(id);
    res.status(200).send(productToDelete).json();
});
exports.deleteProdCtrl = deleteProdCtrl;
