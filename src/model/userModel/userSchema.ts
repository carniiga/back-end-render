import { Schema , model } from "mongoose";

const  userSchema = new Schema({
    userName : {
        type : String,
        required : true 
    },
    email : {
        type : String ,
        required : true ,
        unique : true,
    },
    password : {
        type : String ,
        required : true ,
    },
    rol :{
        type : Array,
        required : false,
        default : ["user"]
    },
    order :[{
        type : Schema.Types.ObjectId,
        ref : "Order"
    }],
    orders :[{
        type : Schema.Types.ObjectId,
        ref : "Order"
    }],
},{
    timestamps : true
})

export default model("User", userSchema)
