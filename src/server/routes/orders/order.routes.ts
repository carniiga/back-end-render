import {Router} from "express";
import * as orderCtrl from "../../controllers/ordersControllers/orderController";

export const orderRouter = Router();

//configuramos las rutas y llamamos a los controlers que se encarga de recibir las peticiones 

orderRouter.get("/user/orders",orderCtrl.getOrderByUserCtrl)
orderRouter.post("/products/order/create" ,orderCtrl.createOrderCtrl )