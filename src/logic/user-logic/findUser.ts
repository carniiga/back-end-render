import User from "../../model/userModel/userSchema"


export const findUser = async(user : any) => {
    const findUser = await User.findOne({email : user.email})
    if(findUser){
    return findUser
    }
    return;
}
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