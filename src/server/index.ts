import { mongoDB } from "../repository/connectDb";
import { port , app } from "./app";
import { authRouter } from "./routes/auth/auth.routes";
import { orderRouter } from "./routes/orders/order.routes";
import { productRouter } from "./routes/products/products.routes";


//aca iniciamos las rutas que nuestra app va  a usar . en este caso de productos , de auth y de order para un futuro e-commerce. 
app.use("/",productRouter)
app.use("/", authRouter)
app.use("/", orderRouter)
app.listen(port , () => {
    //  escuchamos en el puerto  3000 y nos conectamos a nuestra base de dato de mongoDB desde el inicio de la app.
    mongoDB()
    console.log(`listening in port ${port}`)
})
