import Product ,{product} from "../../model/productModel/productSchema"

export const updateProduct = async(product : product, id : String): Promise<any> => {
    const update = await Product.findByIdAndUpdate(id , product,{
        new: true
    })

    await update?.save()
    return update
}