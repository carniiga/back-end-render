import express from "express"
import cors from "cors"

export const port = 3000;
export const app = express()
app.use(cors({
    origin : "*",
}))
    
app.use(express.json())
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));













