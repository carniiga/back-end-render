import Product from "../../model/productModel/productSchema";


export const findProductDbById = async(id : String) => {
    const findProd = await Product.findById(id);
    return findProd;
}

export const findProductByName = async(name : String) => {
    const findProdByName = await Product.findOne({name});
    return findProdByName
}