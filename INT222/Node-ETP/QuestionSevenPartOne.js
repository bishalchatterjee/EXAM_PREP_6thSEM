//Create an express application to accept Student Name, Reg No., Roll No. Mobile No, Mail id form the input text fields of a client page and perfform a chain of validations on the datat in the server application check all the filds are not empty, minimum and maximum lengths of data. Add a submit button on the client web page to submit the data and display the warning messages if required.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, regNo, rollNo, mobileNo, mailId } = req.body;

    // Perform validations
    let errors = [];

    if (!name) {
        errors.push('Name is required');
    }

    if (!regNo) {
        errors.push('Reg No. is required');
    }

    if (!rollNo) {
        errors.push('Roll No. is required');
    }

    if (!mobileNo) {
        errors.push('Mobile No. is required');
    } else if (mobileNo.length < 10 || mobileNo.length > 10) {
        errors.push('Mobile No. should be 10 digits');
    }

    if (!mailId) {
        errors.push('Mail id is required');
    } else if (!validateEmail(mailId)) {
        errors.push('Invalid Mail id');
    }

    if (errors.length > 0) {
        res.status(400).json({ errors });
    } else {
        // Process the data
        // ...
        res.status(200).json({ message: 'Data submitted successfully' });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

app.listen(3000, () => {
    console.log('Server started on port 3000');
});