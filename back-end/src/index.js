import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

router(app);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port);
