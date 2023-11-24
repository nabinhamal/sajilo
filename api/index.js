import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config(); 

mongoose.connect(process.env.MONGO)
.then(() =>{
    console.log('connected to MongoDB')
})
.catch((err)=>{
    console.log(err);
})

const app = express();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running om port ${process.env.PORT}`)
})