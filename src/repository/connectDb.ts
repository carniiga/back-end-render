import mongoose from "mongoose";


// esta funcion se encarga de realizar la conexion a nuestra base de datos . se conecta desde el arranque  de nuestra app. . 
export const mongoDB = async () => {
    try {
      
        const connect = await  mongoose.connect("mongodb+srv://fernandezagustin98:Agustinredbull1234@cluster0.6cbedpy.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
       
        return connect
    } catch (error) {
        console.log(error)
    }
   return
}