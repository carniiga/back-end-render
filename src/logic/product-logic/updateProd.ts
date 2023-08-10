import Product  from "../../model/productModel/productSchema"

export const updateProduct = async(product : any ,id : any): Promise<any> => {
    const id2 = id.trim("")
    const update = await Product.findByIdAndUpdate(id2 , product,{
        new: true
    })

    await update?.save()
    return update
}