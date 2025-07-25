import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://mernify-alpha.vercel.app',
    // 'https://71877679a140.ngrok-free.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // include OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'],    // ensure headers are accepted             
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('DB connection successful')

    app.listen(5000,()=>{
        console.log('Server is running on port 5000')
    })
})
.catch(err=>{
    console.error( 'MongoDBconnection failed',err.message)
})





