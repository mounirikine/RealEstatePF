import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import realRouter from '../server/Routes/Real.route.js'
import authRouter from '../server/Routes/auth.route.js'
import carRouter from '../server/Routes/car.route.js'
import otherRouter from '../server/Routes/other.route.js'
import storeRouter from '../server/Routes/store.route.js'
import commentRouter from '../server/Routes/comment.route.js'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
dotenv.config()

const app = express();

const PORT = 4000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())


const connectWithRetry = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Retry connection after a delay
        setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    }
};

const connect = async () => {
    await connectWithRetry();
};

app.listen(PORT, ()=> {
    connect();
    console.log(`Server is running on port ${PORT}`);
});

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Your API Documentation',
        version: '1.0.0',
        description: 'API documentation for your Express app',
      },
      servers: [
        {
          url: 'http://localhost:4000', // Change this based on your server URL
          description: 'Local server',
        },
      ],
    },
    apis: ['./Routes/*.js','./Models/*.js'], // Path to your route files
  };
  
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use("/api/auth",authRouter)
app.use("/api/real",realRouter)
app.use("/api/car",carRouter)
app.use("/api/other",otherRouter)
app.use("/api/store",storeRouter)
app.use("/api/comment",commentRouter)



app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})

