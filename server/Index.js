import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

const PORT =  3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=> {
    connect()
    console.log(`Server is running on port ${PORT}`);
});


const connect = async()=>{
    try {

    await mongoose.connect(process.env.MONGO);
console.log('MongoDb connected ');
} catch (error) {
   
    console.log(error) 
}
}