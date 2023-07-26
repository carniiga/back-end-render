"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectDb_1 = require("../repository/connectDb");
const app_1 = require("./app");
const auth_routes_1 = require("./routes/auth/auth.routes");
const order_routes_1 = require("./routes/orders/order.routes");
const products_routes_1 = require("./routes/products/products.routes");
app_1.app.use("/", products_routes_1.productRouter);
app_1.app.use("/", auth_routes_1.authRouter);
app_1.app.use("/", order_routes_1.orderRouter);
app_1.app.listen(app_1.port, () => {
    (0, connectDb_1.mongoDB)();
    console.log(`listening in port ${app_1.port}`);
});
