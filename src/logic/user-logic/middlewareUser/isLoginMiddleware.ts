import { NextFunction , Request , Response } from "express";
import { destructureUserWithToken } from "../userToken";
import { userIsAutorized } from "../findUser";

export const isLoginMiddleware = async(req : Request , res : Response , next : NextFunction)=> {
    const tokenBearer = req.headers.authorization;
    const tokenClean = tokenBearer?.slice(7)
    const userDestructure = await destructureUserWithToken(tokenClean)
    const isAutorized = await userIsAutorized(userDestructure)
    if(!isAutorized){
        res.send("este usuario no es apto para realizar estas acciones")
    }
    if(isAutorized){
        return next()
     }
   return;
}