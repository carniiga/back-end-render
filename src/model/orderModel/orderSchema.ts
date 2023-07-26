import { Schema , model } from "mongoose";

const OrderSchema  = new Schema ({
    userId :{
        type : Schema.Types.ObjectId ,
        ref : "User",
    },
    cart: {
        type : Array ,
        ref : "Product"
    }
},{
    timestamps: true
})

export default model("Order" , OrderSchema)
