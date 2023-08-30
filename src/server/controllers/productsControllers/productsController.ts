import { Request , Response  , NextFunction} from "express";
import { createProdDb } from "../../../logic/product-logic/createProd";
import { updateProduct } from "../../../logic/product-logic/updateProd";
import { findProductByName, findProductDbById } from "../../../logic/product-logic/findprodById";
import { deleteProd } from "../../../logic/product-logic/deleteProd";
import { findAll } from "../../../logic/product-logic/findAllProd";

export const getAllProductCtrl = async(req : Request , res : Response ,) => {
    const getAll =  await findAll()
    res.send(getAll).json()
};

export const createProductCtrl = async(req : Request , res : Response) => {
    const productInput = req.body;
    const createProd = await createProdDb(productInput)
    res.status(200).send(createProd).json()

};
export const findproductByIdCtrl = async(req : Request , res : Response) => {
    const {id} = req.params;
    const findProd = await  findProductDbById(id);
    res.status(200).send(findProd).json()
};

export const findProductByNameCtrl = async(req: Request , res: Response)=> {    
    const nameProd = req.params.name
    const productName = await findProductByName(nameProd)
    res.status(200).send(productName).json()
}
export const updateProductCtrl = async(req: Request , res :Response) => {
    const {id}= req.params;
    const productInput = req.body;
    const updateProd = await updateProduct(productInput, `${id}`)
        res.status(200).send(updateProd).json()

};

export const deleteProdCtrl = async(req : Request , res:Response) => {
    const {id} = req.params;
    console.log(id.length)
    const productToDelete = await deleteProd(id);
    if(productToDelete){
        res.status(200).send(productToDelete).json()
    }
    res.status(400).json("error")
    

}

