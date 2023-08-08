"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    provincia: String,
    description: String,
    lugar: String,
    hotel: String,
    price: Number,
    imgUrl: Array,
    totalQuantity: Number,
    quantity: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Product", productSchema);
