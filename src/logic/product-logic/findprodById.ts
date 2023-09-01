import Product from "../../model/productModel/productSchema";

//esta funcion se encarga de buscar el producto en la base de datos por ID 
export const findProductDbById = async(id : String) => {
    const findProd = await Product.findById(id);
    return findProd;
}

//esta funcion se encarga de buscar el producto en la base de datos por nombre 

export const findProductByName = async(name : String) => {
    const findProdByName = await Product.findOne({name});
    return findProdByName
}