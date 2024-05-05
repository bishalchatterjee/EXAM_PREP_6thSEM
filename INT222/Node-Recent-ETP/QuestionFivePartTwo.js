//Create a node js application which demonstrates the use of GET and POST mehods using Express

const express = require('express');

const app = express();
const port = 3000;

// GET method route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST method route
app.post('/', (req, res) => {
    res.send('This is a POST request');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});