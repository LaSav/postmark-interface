const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/subscribers', require('./routes/subscribersRoutes'));
app.use('/api/broadcast', require('./routes/broadcastRoutes'));

app.use(errorHandler);

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, console.log(`Server started on ${port}`));
