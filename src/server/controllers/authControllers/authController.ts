import { Response  , Request, NextFunction } from "express";
import { registerUser } from "../../../logic/user-logic/registerUser";
import { isLogin } from "../../../logic/user-logic/loginUser";
import { findUserWithEmail } from "../../../logic/user-logic/findUser";
import nodemailer from "nodemailer"
import { restorePass } from "../../../logic/user-logic/forgotPassword";
// esta funcion se encarga de registrar al usuario en la base datos . los datos se reciben mediante el body. 
export const registerCtrl =  async(req : Request , res : Response) => {
    
       const {userName , email , password}= req.body
       //los datos lo mandamos a una funcion que creamos para registra al usuario en la base de datos.
       const userRegister = await registerUser(userName, password , email )
       if(userRegister == "este usuario ya fue creado"){
        return res.status(400).send(userRegister).json()
       }
       res.status(200).send("usuario creado exitosamente")

       
};
//esta funcion se encarga de logear al usuario . recibe los datos mediante el body y si el usuario y contraseña es correcto. se le brinda un token. 
export const loginCtrl = async (req : Request , res : Response) => {
        const {email , password} = req.body;
        const verifiy = await isLogin(email,password)
        if(verifiy){
        const messageResp = {
         infouser : verifiy
         }
        return res.status(200).json({message : messageResp.infouser})
        }
        else {
         return res.status(400).json({message : "contraseña y/o usuario incorrecto."})
        }
};

//este transporter es una credencial para mandar  un email al usuario en caso de olvidar la contraseña y desee restablecerla.
const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user : "carniigafernandez@gmail.com",
            pass : "d f m u s o h m l s p z z r c s"
        }
    })

    //esta funcion se encarga de buscar el email en la base de datos, si está registrado se le manda un email con el link que lo lleva a la pagina para restablecer la contraseña. 
export const forgotPasswordCtrl = async(req : Request , res : Response) => {
        const {email} = req.body;
        const find = await findUserWithEmail(email)
        const info = await transporter.sendMail({
                from : '"Fernandez Viajes" <fernandezagustin98@hotmail.com>' ,
                to: email,
                subject : "Fernandez Viajes",
                html:`
                <p>Te Hemos enviado este correo para que restablezcas la contraseña. por favor ingresa mediante este link : <a>https://fernandez-viajes.vercel.app/restore-password/${find}</a></p>
            `
        })
        res.send(info)
}

// esta funcion se encarga de restablecer la contraseña . 
export const restorePasswordCtrl = async (req : Request , res : Response) => {
    const {userId} = req.params
    const {password} = req.body
    const restore = await restorePass(password , userId)
}
