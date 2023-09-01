import bcrypt from "bcryptjs"
import User from "../../model/userModel/userSchema"
import {  generateToken } from "./userToken"

// import { userIsAutorized } from "./findUser"

// esta funcion se encarga de verificar si el usuario esta logeado para enviar  la informacion del usuario y un token. 

export const isLogin = async(email: String , password:String) => {   
    console.log(password.length)
    const findUser = await User.findOne({email})
    const verifyPass = await bcrypt.compare(`${password}`, `${findUser?.password}`)
    if(verifyPass){
        const token = await generateToken(findUser)
        const infoUser = {
            token : token,
            userName  :findUser?.userName,
            rol : findUser?.rol

        }
        return infoUser
    }
   
}

