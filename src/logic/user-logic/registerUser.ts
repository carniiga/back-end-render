import User  from "../../model/userModel/userSchema"
import { passwordcrypted } from "./userHash"


//esta funcion se encarga de crear un usuario en la base de datos y ponerle un rol . por defecto todos los usuarios tienen rol "user" . y el email del admin tiene rol "ADMIN "
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