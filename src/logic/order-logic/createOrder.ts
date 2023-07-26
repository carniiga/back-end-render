import Order from "../../model/orderModel/orderSchema"
import User from "../../model/userModel/userSchema"
export const createOrder = async(user : any , prods : any) => {
    const createOr = await  Order.create({
        userId : user.id,
        cart : prods
    })
    
    let  findUserAndUpdateOrder = await User.findByIdAndUpdate(user._id,{
        order: createOr._id
    })
   
    try {
        findUserAndUpdateOrder?.save()
        return createOr

    } catch (error) {
        console.log(error)
    }
    

    
}