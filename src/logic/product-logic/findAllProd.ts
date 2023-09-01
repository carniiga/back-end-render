import Product from "../../model/productModel/productSchema"

//esta funcion se encarga de obtener todos los productos de la base de datos. 
export const findAll = async()=> {
    const findProductAll = await Product.find()
    return findProductAll
}