import express from "express"
import cors from "cors"

export const port = 3000;
export const app = express()
app.use(cors({
    origin : "http://http://localhost:3000",
}))
    
app.use(express.json())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));













