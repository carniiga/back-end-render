"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: Array,
        required: false,
        default: ["user"]
    },
    order: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Order"
        }],
    orders: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Order"
        }],
}, {
    timestamps: true
});
exports.default = (0, mongoose_1.model)("User", userSchema);
