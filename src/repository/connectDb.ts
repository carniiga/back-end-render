import mongoose from "mongoose";




export const mongoDB = async () => {
    try {
       
        const connect = await  mongoose.connect(process.env.BASE_URL || "mongodb+srv://fernandezagustin98:Agustinredbull1234@cluster0.6cbedpy.mongodb.net/?retryWrites=true&w=majority")
        console.log("db is connected")
        return connect
    } catch (error) {
        console.log(error)
    }
   return
}