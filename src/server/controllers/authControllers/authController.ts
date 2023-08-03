import { Response  , Request, NextFunction } from "express";
import { registerUser } from "../../../logic/user-logic/registerUser";
import { isLogin } from "../../../logic/user-logic/loginUser";

export const registerCtrl =  async(req : Request , res : Response) => {
       const {userName , email , password}= req.body
       const userRegister = await registerUser(userName, password , email )
       if(userRegister == "este usuario ya fue creado"){
        return res.status(400).send(userRegister).json()
       }
       res.status(200).send("usuario creado exitosamente")

       
};
export const loginCtrl = async (req : Request , res : Response) => {
        const {email , password} = req.body;
        const verifiy = await isLogin(email,password)
        if(verifiy){
        const messageResp = {
         infouser : verifiy
         }
        return res.status(200).json({message : messageResp.infouser})
        }
        else {
         return res.status(400).json({message : "contraseña y/o usuario incorrecto."})
        }
};
