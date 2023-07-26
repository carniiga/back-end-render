"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
    cart: {
        type: Array,
        ref: "Product"
    }
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("Order", OrderSchema);
