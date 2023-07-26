import User from "../../model/userModel/userSchema"
import Order from "../../model/orderModel/orderSchema"
import { destructureUserWithToken } from "../user-logic/userToken"
import { findUser } from "../user-logic/findUser"

export const getOrderByUser= async(userId : String) => {
    const tokenToId = await destructureUserWithToken(`${userId}`)
    const find = await findUser(tokenToId)
    const getOrder = await  User.findOne({_id : find?._id}).populate({
        path: "order",
       
    })

    let  getOrders = await Order.find({userId: find?._id})
    const addOrdersToUser = await User.findByIdAndUpdate({_id : find?._id},{
        orders : getOrders
    })
    try {
        await addOrdersToUser?.save()

        return {"orders" : addOrdersToUser?.orders } 
    } catch (error) {
        
    }
}