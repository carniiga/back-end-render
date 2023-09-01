import { Request , Response  , NextFunction} from "express";
import { createProdDb } from "../../../logic/product-logic/createProd";
import { updateProduct } from "../../../logic/product-logic/updateProd";
import { findProductByName, findProductDbById } from "../../../logic/product-logic/findprodById";
import { deleteProd } from "../../../logic/product-logic/deleteProd";
import { findAll } from "../../../logic/product-logic/findAllProd";
//esta funcion se encarga de obtener los productos en nuestra base de datos. 
export const getAllProductCtrl = async(req : Request , res : Response ,) => {
    
    const getAll =  await findAll()
    res.send(getAll).json()
};

//esta funcion se encarga de crear  productos en nuestra base de datos.Obtiene la informacion mediante el body. . 
export const createProductCtrl = async(req : Request , res : Response) => {
    const productInput = req.body;
    //se llama a una funcion que se encarga de cargar el producto a la base de datos 
    const createProd = await createProdDb(productInput)
    res.status(200).send(createProd).json()

};

//esta funcion se encarga de buscar el producto por ID si se necesita.Los datos se obtiene por medio de params 
export const findproductByIdCtrl = async(req : Request , res : Response) => {
    const {id} = req.params;
    const findProd = await  findProductDbById(id);
    res.status(200).send(findProd).json()
};

//esta funcion se encarga de obtener el producto por medio del nombre . el nombre lo recibe por medio de params
export const findProductByNameCtrl = async(req: Request , res: Response)=> {    
    const nameProd = req.params.name
    const productName = await findProductByName(nameProd)
    res.status(200).send(productName).json()
}

//esta funcion se encarga de actualizar el producto que se desea se obtiene el productId por el parametro y la informacion que se desea actualizar mediante el body.
export const updateProductCtrl = async(req: Request , res :Response) => {
    const {id}= req.params;
    const productInput = req.body;
    const updateProd = await updateProduct(productInput, `${id}`)
        res.status(200).send(updateProd).json()

};

//esta funcion se encarga de eliminar el producto mediante el id del producto que se desea eliminar. El id se obtiene por params .

export const deleteProdCtrl = async(req : Request , res:Response) => {
    const id = req.params.id;
    
    const productToDelete = await deleteProd(id);
    if(productToDelete){
        res.status(200).send(productToDelete).json()
    }
    res.status(400).json("error")
    

}

