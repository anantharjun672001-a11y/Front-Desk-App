import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB  from './Database/dbconfig.js';


dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req,res)=>{
    res.status(200).json('Welcome to the App');
})


const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log("server started");
    
})