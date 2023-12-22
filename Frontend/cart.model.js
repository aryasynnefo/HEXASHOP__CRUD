import mongoose from "mongoose";

const prodcart=new mongoose.Schema({
    product_id:{
        type:String
    },
   username:{
        type:String
    },
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

export default mongoose.model.Carts || mongoose.model("Cart",prodcart) 