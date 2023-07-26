import bcrypt from "bcryptjs"


export const passwordcrypted = async (password : String) => {
    const salt =  bcrypt.genSaltSync(10)
    const hashpassword = bcrypt.hash(`${password}`, salt)
    return hashpassword
}