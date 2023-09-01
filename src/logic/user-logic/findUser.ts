import User from "../../model/userModel/userSchema"


//esta funcion se encarga de buscar al usuario por email 
export const findUserWithEmail = async (email : any) => {
    const findUser = await User.findOne({email})
    if(findUser?.email){
       return findUser._id.toString()
    }
     else {
        return false
     }
       
}
//esta funcion se encarga de buscar al usuario por email 
export const findUser = async(user : any) => {
    const findUser = await User.findOne({email : user.email})
    if(findUser){
    return findUser
    }
    return;
}

//esta funcion se encarga  de buscar al usuario y verificar si el usuario tiene rol de admin para realizar modificaciones sobre los productos.
export const userIsAutorized = async(user : any)=> {
    try {
    const findUser = await User.findOne({email : user.email})
    const rol = findUser?.rol.toString();
    if(rol == "admin"){
        return true
    }else{
        return false
    }
    } catch {
      return false
    }
}