import Product from "../../model/productModel/productSchema";

export const deleteProd = async(id : String) => {
    const deleteProdDb = await Product.findByIdAndDelete(id)
    if(deleteProdDb){
        return "el producto ha sido eliminado correctamente";
    }
    return;
}