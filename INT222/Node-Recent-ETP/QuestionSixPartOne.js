// Create a new directory using path module in node.js

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'newDirectory');

fs.mkdir(directoryPath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory created successfully!');
    }
});