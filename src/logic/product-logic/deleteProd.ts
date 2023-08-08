import Product from "../../model/productModel/productSchema";

export const deleteProd = async(id : any) => {
  const deleteProd = await Product.findOneAndDelete({id})
  if(deleteProd){
    return "el  producto ha sido elimiando correctamente"
  }
}