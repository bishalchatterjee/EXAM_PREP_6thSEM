//Create two routes one for /node which sends a message to the client "This is ETP for 222" and /Angular for which it sends a message to the client "This is ETP for INT219" using express


const express = require('express');

const app = express();

app.get('/node', (req, res) => {
    res.send('This is ETP for 222');
});

app.get('/Angular', (req, res) => {
    res.send('This is ETP for INT219');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});