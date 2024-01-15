import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    connect()
    console.log(`Server is running on port ${PORT}`);
});

const connect= async()=>{
    try {

    await mongoose.connect(process.env.MONGO);
console.log('connected');
} catch (error) {
   
    throw error  
}
}