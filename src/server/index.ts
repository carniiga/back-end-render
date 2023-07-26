import { mongoDB } from "../repository/connectDb";
import { port , app } from "./app";
import { authRouter } from "./routes/auth/auth.routes";
import { orderRouter } from "./routes/orders/order.routes";
import { productRouter } from "./routes/products/products.routes";



app.use("/",productRouter)
app.use("/", authRouter)
app.use("/", orderRouter)
app.listen(port , () => {
    mongoDB()
    console.log(`listening in port ${port}`)
})
