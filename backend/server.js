// imports
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const router = require('./router/api/contacts');
const connectDB = require('./config/db');

// connection to MONGODB ATLAS
connectDB();

// initializing express application
const app = express();

// variables
const PORT = process.env.port;

// API Router
app.use('/api', router);

// middlewares
app.use(cors({ origin: "*", optionsSuccessStatus: 200}));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));