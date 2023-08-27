import express from "express"
import  bodyParser  from "body-parser";



import cors from "cors"

export const port = 3000;
export const app = express()

app.use(bodyParser.json({limit: '35mb'}));
app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '35mb',
      parameterLimit: 50000,
    }),
  );
app.use(cors({
    origin : "https://fernandez-viajes.vercel.app",
}))
    
app.use(express.json())
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb'}));













