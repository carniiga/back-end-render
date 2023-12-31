import { Schema , model } from "mongoose";


//este es el esquema de nuestro producto. 
export type product = {
        provincia: string;
        description: string;
        lugar: string;
        price:Number;
        hotel : string,
        imgUrl: [],
        totalQuantity : Number;
        quantity : Number;
     
}
const productSchema =  new Schema<product>({
    provincia  : String,
    description : String,
    lugar : String,
    hotel : String,
    price : Number,
    imgUrl : Array,
    totalQuantity : Number,
    quantity : {
        type : Number ,
        default : 1
    }
},{
    timestamps : true 
})

export default model("Product", productSchema)
