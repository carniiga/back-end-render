import {Router} from "express";
import * as orderCtrl from "../../controllers/ordersControllers/orderController";

export const orderRouter = Router();

orderRouter.get("/user/orders",orderCtrl.getOrderByUserCtrl)
orderRouter.post("/products/order/create" ,orderCtrl.createOrderCtrl )