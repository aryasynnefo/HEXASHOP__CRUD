import mongoose from "mongoose"

export default async function connect(){
    const URI=process.env.DB_URL+process.env.DB_NAME;
    const db=await mongoose.connect(URI);
    console.log("Database Connected");
    return db;
}