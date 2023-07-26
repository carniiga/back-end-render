import express from "express"
import cors from "cors"

export const port = 3000;
export const app = express()
app.use(express.json())

app.use(cors())













