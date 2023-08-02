import User  from "../../model/userModel/userSchema"
import { passwordcrypted } from "./userHash"


export const registerUser = async (userName : String , password : String , email : String) => {
    const passwordHashed= await passwordcrypted(`${password}`)
    const userFind = await  User.findOne({email})
    if(userFind){
        return "este usuario ya fue creado"
        }
   if(email == "fernandezagustin98@hotmail.com"){
    const registerAdmin = new User({
        userName , password : passwordHashed  , email , rol :"admin"
    })
     await User.create(registerAdmin)
     return
}else{
    const registerNormal = await User.create({userName , password : passwordHashed,email})
    return registerNormal
}
}