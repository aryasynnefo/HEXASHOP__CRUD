import pkg from "jsonwebtoken";
const {verify}=pkg;

export default async function auth(req,res,next){
        try {
            
            const key=req.headers.authorization;
            console.log("dsdsdasdasdas",key);
            
            if(!key) return res.status(403).send("unauthorized access");
            const token=key.split(" ")[1]
            if(!token)
            
            return res.status(403).send("unauthorized access");
            
             const auth=await verify(token,process.env.JWT_KEY);
            console.log("asa",auth);
        
            req.user=auth;  
            next();
        } catch (error) {
            // console.log(error);
         res.status(404).send({msg:"token expired"})
        }   
} 