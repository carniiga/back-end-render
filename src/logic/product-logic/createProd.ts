import Product  from "../../model/productModel/productSchema"

// esta funcion recibe los datos para almacenar el producto en la base de datos. 
export const createProdDb = async (product : any) => {
    const {provincia , price , description , imgUrl , lugar, totalQuantity , hotel } = product
    const createProd = await Product.create({provincia , price , description , imgUrl  , lugar , hotel , totalQuantity})
    return createProd;

}