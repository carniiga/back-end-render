import mongoose from "mongoose";
import  dotenv from "dotenv"



export const mongoDB = async () => {
    try {
        dotenv.config()
        const connect = await  mongoose.connect(process.env.BASE_URL || "")
        console.log("db is connected")
        return connect
    } catch (error) {
        console.log(error)
    }
   return
}