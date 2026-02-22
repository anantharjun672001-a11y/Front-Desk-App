import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import connectDB  from './Database/dbconfig.js';
import authRoute from './Routers/authRoute.js';
import serviceRoute from './Routers/serviceRoute.js';
import bookingRoute from './Routers/bookingRoute.js';


dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req,res)=>{
    res.status(200).json('Welcome to the App');
})

app.use('/api/auth',authRoute);
app.use('/api/service',serviceRoute);
app.use('/api/booking',bookingRoute);

const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log("server started");
    
})