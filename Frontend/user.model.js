import mongoose from "mongoose";

const customer=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"username already exist"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exist"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        unique:[true,"password already exist"]
    },
   
    address:{
        type:String,
        required:[true,"address is required"],
        unique:[true,"address already exist"]
    },
    phno:{
        type:Number,
        required:[true,"phno is required"],
        unique:[true,"phno already exist"]
    }
})

export default mongoose.model.customers || mongoose.model("customers",customer)