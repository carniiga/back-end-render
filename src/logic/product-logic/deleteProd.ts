import Product from "../../model/productModel/productSchema";

export const deleteProd = async(id : any) => {
  const id2 = id.trim("");
  console.log(id2.length)
  const deleteProd = await Product.findByIdAndDelete(id2)
 
  if(deleteProd){
    return "el  producto ha sido elimiando correctamente"
  }
}