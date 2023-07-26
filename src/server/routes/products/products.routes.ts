import { Router } from "express";
import * as productsCtrl from "../../controllers/productsControllers/productsController"
import { isLoginMiddleware } from "../../../logic/user-logic/middlewareUser/isLoginMiddleware";

export const productRouter = Router();
//cualquier usuario puede obtener endpoints de get.
productRouter.get("/products" , productsCtrl.getAllProductCtrl);
productRouter.get("/products/find/:id",productsCtrl.findproductByIdCtrl);
productRouter.get("/products/findByName/:name",productsCtrl.findProductByNameCtrl)

//a partir de aca, solo usuarios "admin",

productRouter.post("/products/create",isLoginMiddleware ,productsCtrl.createProductCtrl);
productRouter.put("/products/update/:id",isLoginMiddleware, productsCtrl.updateProductCtrl);
productRouter.delete("/products/delete/:id",isLoginMiddleware,productsCtrl.deleteProdCtrl);


