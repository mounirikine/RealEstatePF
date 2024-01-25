import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import realRouter from '../server/Routes/Real.route.js'
import authRouter from '../server/Routes/auth.route.js'


dotenv.config()

const app = express();

const PORT = 4000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    connect()
    console.log(`Server is running on port ${PORT}`);
});

const connect= async ()=>{
    try {

    await mongoose.connect(process.env.MONGO);
console.log('connected');
} catch (error) {
   
    throw error  
}
} 

app.use("/api/auth",authRouter)
app.use("/api/real",realRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})