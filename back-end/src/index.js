import express from 'express';
import 'dotenv/config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import { errorHandlingMiddleware } from './middleware/errorHandlingMiddleware.js';

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

router(app);
app.use(errorHandlingMiddleware)

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Kết nối thành công');
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });

app.listen(port);
