import Product from "../../model/productModel/productSchema"


export const findAll = async()=> {
    const findProductAll = await Product.find()
    return findProductAll
}