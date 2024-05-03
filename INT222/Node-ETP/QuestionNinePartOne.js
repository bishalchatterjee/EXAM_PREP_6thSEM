//Implement an express application to accept a number from the input text field of a user web page and perform the basic arithmetic operations, increment(++), decrement(--), square, on the number inside a middleware function of server node.js application. Finally display the output values in the user web page as a response to the click event from the button


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware function to perform arithmetic operations
app.post('/calculate', (req, res) => {
    const number = parseInt(req.body.number);

    // Perform arithmetic operations
    const addition = number + 10;
    const subtraction = number - 5;
    const multiplication = number * 2;
    const division = number / 3;
    const increment = number + 1;
    const decrement = number - 1;
    const square = number * number;

    // Send the response back to the user web page
    res.send(`
        <h1>Arithmetic Operations</h1>
        <p>Addition: ${addition}</p>
        <p>Subtraction: ${subtraction}</p>
        <p>Multiplication: ${multiplication}</p>
        <p>Division: ${division}</p>
        <p>Increment: ${increment}</p>
        <p>Decrement: ${decrement}</p>
        <p>Square: ${square}</p>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});