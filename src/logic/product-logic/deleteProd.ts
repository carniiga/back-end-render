import Product from "../../model/productModel/productSchema";

// esta funcion recibe los datos para eliminar  el producto en la base de datos. 
export const deleteProd = async(id : any) => {
  console.log(id.length)
  const deleteProd = await Product.findByIdAndDelete(id)
 
  if(deleteProd){
    return "el  producto ha sido elimiando correctamente"
  }
}