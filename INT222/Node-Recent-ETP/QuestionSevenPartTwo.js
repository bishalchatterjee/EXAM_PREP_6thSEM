//Using express write a program that downloads a file if routed to Downloads endpoint

const express = require('express');
const path = require('path');

const app = express();

app.get('/downloads', (req, res) => {
    const filePath = path.join(__dirname, './input.txt');
    res.download(filePath);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});