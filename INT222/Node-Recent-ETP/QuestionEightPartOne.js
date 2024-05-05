//Write a program using Express which demonstrates the use of middleware

const express = require('express');

const app = express();

// Middleware function
const logger = (req, res, next) => {
    console.log('Logging...');
    next();
};

// Middleware registration
app.use(logger);

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});