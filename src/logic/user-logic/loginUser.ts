import bcrypt from "bcryptjs"
import User from "../../model/userModel/userSchema"
import {  generateToken } from "./userToken"

// import { userIsAutorized } from "./findUser"


export const isLogin = async(email: String , password:String) => {
    const findUser = await User.findOne({email})
    const verifyPass = await bcrypt.compare(`${password}`, `${findUser?.password}`)
    if(verifyPass){
        const token = await generateToken(findUser)
        const infoUser = {
            token : token,
            userName  :findUser?.userName

        }
        return infoUser
    }
}

