import jwt from "jsonwebtoken"

export const generateToken = async(user : any) => {
    const {userName , password , email} = user
    const access_Token = jwt.sign({userName, password, email}, `${process.env.SECRET_KEY}`, {expiresIn : "1h"})
    return access_Token
} 
export const destructureUserWithToken = (token : any) => {
    const tokenDescrypt = jwt.decode(token);
    return tokenDescrypt;


}