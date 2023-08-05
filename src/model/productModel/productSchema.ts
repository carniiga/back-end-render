import { Schema , model } from "mongoose";

export type product = {
        provincia: string;
        description: string;
        lugar: string;
        price:Number;
        hotel : string,
        imgUrl: File;
        totalQuantity : Number;
        quantity : Number;
     
}
const productSchema =  new Schema<product>({
    provincia  : String,
    description : String,
    lugar : String,
    hotel : String,
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
