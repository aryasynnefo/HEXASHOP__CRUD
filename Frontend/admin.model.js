import mongoose from "mongoose";

const admin=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"username already exist"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email already exist"]
    },
    password:{
        type:String,
        required:[true,"Passsword is required"],
        unique:[true,"Password already exist"]
    }
    
})

export default mongoose.model.admins||mongoose.model("admin",admin)