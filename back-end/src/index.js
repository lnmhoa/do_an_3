const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(bodyParser.json());

router(app);

mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port);
