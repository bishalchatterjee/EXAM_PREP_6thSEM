//Create an express application for the following scenario to accept a file name from the input text field of a user web page and transfer the requested file using download() function from the server as a response to the button click event from the user web page. Create a text file and add student information(Reg no, name , grade) in the server system


const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/download', (req, res) => {
    const fileName = req.body.fileName;

    // Create a text file and add student information
    const studentInfo = 'Reg no, name, grade\n123, John Doe, A\n456, Jane Smith, B';
    fs.writeFileSync(fileName, studentInfo);

    // Send the file as a response
    res.download(fileName, (err) => {
        if (err) {
            console.error('Error downloading file:', err);
        } else {
            console.log('File downloaded successfully');
        }

        // Delete the file after sending
        fs.unlinkSync(fileName);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});