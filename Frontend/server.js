import express from "express";
import dotenv from "dotenv";
import connect from "./conn.js";
import router from "./router.js";
import cors from "cors";
const app=express();
dotenv.config();
app.use(cors());
app.use(express.json({ limit: "20mb", extended: true }));
app.use('/api',router);
app.use(express.static(("./dist")))
connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(("Server Generated"));
    })
}).catch((error)=>{
    console.log(error);
})