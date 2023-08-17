const path = require('path');
const express = require('express');
const router = require('./src/routes/api');


const app = new express();
const bodyParser = require('body-parser');


//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');

// Security middleware

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


// app
app.use(express.json());
app.use(bodyParser.json());

//RateLimit middleware
const limiter = rateLimit({ windows: 16 * 60 * 100, max: 3000 });

// Database Connection


let url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASSWORD}@cluster0.rxisjfd.mongodb.net/BLOG`;

mongoose.connect(url).then(() => console.log("Blog Connected")).catch(error => console.log("Blog not connected => ", error))


// undefined Router
app.use('/api/v1', router);
app.use('*', (req, res) => {
    res.status(400).json({ status: "Failed to connect", message: "404 Not Found" });
})


// Managing Backend API Routing
app.use(express.static('./client-blog/dist'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-blog', 'dist', 'index.html'));
})

module.exports = app;