import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
   product_name:{
        type:String
    },
   brand:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    category:{
        type:String
    },
    forcategory:{
        type:String
    },
    image:{
        type:String
    }
   
})

export default mongoose.model.users || mongoose.model("User",UserSchema)