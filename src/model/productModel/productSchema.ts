import { Schema , model } from "mongoose";

export type product = {
        name: string;
        description: string;
        marca: string;
        price:Number;
        imgUrl:string;
        category:string;
        totalQuantity : Number;
        quantity : Number;
     
}
const productSchema =  new Schema<product>({
    name : String,
    description : String,
    category : String ,
    marca : String,
    price : Number,
    imgUrl : [],
    totalQuantity : Number,
    quantity : {
        type : Number ,
        default : 1
    }
},{
    timestamps : true 
})

export default model("Product", productSchema)
