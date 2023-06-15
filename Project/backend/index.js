import express from "express";
import dotenv from 'dotenv';

import userRoute from './routes/user.js';
import QuestionsRoute from './routes/Questions.js';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.set('strictQuery', true);
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const mongooseconnect = async () => {
    try {
        await mongoose.connect(process.env.mongo, () => {
            console.log("Succesfully connected to mongodb");
        });
    }
    catch (err) {
        console.log(err);
    }
}

app.use('/api/users', userRoute);
app.use('/api/Questions', QuestionsRoute);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        sucess: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})
app.listen(8800, () => {
    mongooseconnect();
    console.log("Connected to server");
});
app.get('/', (req, res) => {
    res.send("<strong>This is the API we use!!!<strong>");
});
