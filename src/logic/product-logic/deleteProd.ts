import Product from "../../model/productModel/productSchema";

export const deleteProd = async(id : any) => {
  const id2 = id.trim("");
  const deleteProd = await Product.findOneAndDelete({id2})
  console.log(deleteProd)
  if(deleteProd){
    return "el  producto ha sido elimiando correctamente"
  }
}