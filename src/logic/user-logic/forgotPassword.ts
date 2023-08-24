import nodemailer from "nodemailer";


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
 
