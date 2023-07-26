import Product  from "../../model/productModel/productSchema"

export const createProdDb = async (product : any) => {
    const {name , price , description , imgUrl , category, marca , totalQuantity } = product
    const createProd = await Product.create({name , price , description , imgUrl , category , marca , totalQuantity})
    return createProd;

}