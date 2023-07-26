import Product  from "../../../model/productModel/productSchema"
import { Response , Request } from "express";
import { destructureUserWithToken } from "../../../logic/user-logic/userToken";
import { findUser } from "../../../logic/user-logic/findUser";
import { createOrder } from "../../../logic/order-logic/createOrder";
import { getOrderByUser } from "../../../logic/order-logic/findOrder";

export const getUserWithToken = async (token : string) => {
    const userToken = token?.slice(7)
    const currentToken = await destructureUserWithToken(userToken)
    const find = await findUser(currentToken)
    return find
}

export const getOrderByUserCtrl = async (req :Request  , res : Response) => {
    const userId = req.headers.authorization?.slice(7)
    const findOr = await getOrderByUser(`${userId}`)
    console.log(findOr)
    res.send(findOr).json()


}
export const createOrderCtrl = async(req : Request , res : Response) => {
    const token = req.headers.authorization;
    const currentId = await getUserWithToken(`${token}`)
    const {cart} = req.body;
    const findProd = await Product.find({_id : cart.id})
    const createO = await createOrder(currentId , findProd)
    res.send(createO)
  
};