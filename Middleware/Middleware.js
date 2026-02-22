import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import dotenv from "dotenv";

dotenv.config();


export const authMiddleware = async (req,res,next) => {
    //method 1

    const token = req.header("Authorization");

    //method 2

    // const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Token Missing"});
    }
    
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user = await User.findById(decoded._id).select("_password");
        console.log("req.user",req.user)
        next();

        
    } catch (error) {
        res.status(401).json ({message:error.message});
    }
}


export const adminMiddleware = async (req,res,next) =>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(403).json({message:"Token Missing"});
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;

        const user = await User.findById(req.user._id);

        if(user.role === "Admin"){
            next();
        }else{
            res.status(403).json({message:"Access Denied"});
        }
        
    } catch (error) {
        res.status(401).json({message:error.message});
    }
}