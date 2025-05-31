const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cartRoutes = require('./routes/cartRoutes');
const cors = require('cors');
const app = express();
app.use(cors({ origin: '*', credentials: true }));
dotenv.config();
connectDB();

app.use(express.json());
app.use('/api/carts', cartRoutes);

module.exports = app;
