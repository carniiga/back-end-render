import nodemailer from "nodemailer";
import User  from "../../model/userModel/userSchema"
import { passwordcrypted } from "./userHash";


export const transporterFunction = async() => {
    const transporter = nodemailer.createTransport({
        host : "localhost",
        port : 3000,
        secure : true,
        auth : {
            user : "fernandezagustin98@hotmail.com.ar",
            pass : "Agustinredbull1234"
        }
    })
}

//esta funcion se encarga  de modificar la contraseña y encriptarla en la base de datos.
export const restorePass = async (password : string , userId : string) => {
    console.log(password.length)
    const passwordHashed = await passwordcrypted(password)
    const findUserAndUpdate = await User.findByIdAndUpdate(userId, {password : passwordHashed})

}
 
