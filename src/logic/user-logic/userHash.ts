import bcrypt from "bcryptjs"

//esta funcion se encarga de hashear la contraseña . es decir genera una contraseña muy dificil de decifrar. 
export const passwordcrypted = async (password : String) => {
    const salt =  bcrypt.genSaltSync(10)
    const hashpassword = bcrypt.hash(`${password}`, salt)
    return hashpassword
}