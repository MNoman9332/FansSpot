// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'your_mongoDB_connection_string'; // Update with your MongoDB connection string

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the FansSpot API!');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
