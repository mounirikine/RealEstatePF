import jwt from 'jsonwebtoken';
import express from 'express';
import cookieParser from 'cookie-parser'
import { errorHandler } from './error.js';
const app = express();
app.use(cookieParser());
export const verifyToken = (req,res,next)=>{


       const token = req.body.access_token;

    if(!token) return next(errorHandler(401,"Unauthorized"));  
  


    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,"Forbidden"));

        req.user = user;
        next();
    })
}