import jwt from "jsonwebtoken"

// esta funcion se encarga de generar el token con la informacion del  usuario. 
export const generateToken = async(user : any) => {
    const {userName , password , email} = user
    const access_Token = jwt.sign({userName, password, email}, `${"MYSECRET_KEY1357Z$ZD"}`, {expiresIn : "1h"})
    return access_Token
} 

//esta funcion se encarga de decodificar el token para obtener  informacion del usuario. 
export const destructureUserWithToken = (token : any) => {
    const tokenDescrypt = jwt.decode(token);
    return tokenDescrypt;


}