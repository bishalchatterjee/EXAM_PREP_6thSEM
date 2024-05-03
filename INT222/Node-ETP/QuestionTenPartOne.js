//Create an express appliation to accept a file name from the input text field of a user web page and transfer the requested file using sendFile() function from the server as a response to the button click event from the user web page. Create a text file and add student infromation (Reg. No, Name, Grade) in the server system.

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests to '/file'
app.post('/file', (req, res) => {
    // Get the file name from the request body
    const fileName = req.body.fileName;

    // Construct the file path
    const filePath = path.join(__dirname, fileName);

    // Send the file as a response
    res.sendFile(filePath);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});