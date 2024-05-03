//Implement an express application to Pass 2 numbers in the url of the client request to the server and access those 2 numbers from the url using the params object and perform basic arithmetic operations(+,-,*,/) in the server node.js application. Finally add a button on the client page and provide the output values as a response with a click event

const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle the client request
app.get('/calculate/:num1/:num2', (req, res) => {
    // Extract the numbers from the URL params
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    // Perform arithmetic operations
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    // Send the output values as a response
    res.send(`
        <h1>Arithmetic Operations</h1>
        <p>Sum: ${sum}</p>
        <p>Difference: ${difference}</p>
        <p>Product: ${product}</p>
        <p>Quotient: ${quotient}</p>
        <button onclick="location.href='/';">Go Back</button>
    `);
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Arithmetic Operations</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
