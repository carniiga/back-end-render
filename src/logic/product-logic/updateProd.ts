import Product  from "../../model/productModel/productSchema"
//esta funcion se encarga de actualizar el producto en la base de datos.

export const updateProduct = async(product : any ,id : any): Promise<any> => {
    const id2 = id.trim("")
    const update = await Product.findByIdAndUpdate(id2 , product,{
        new: true
    })

    await update?.save()
    return update
}