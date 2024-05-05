//Create a node js application to parse a JSON fie and print the contents of file on console

const fs = require('fs');


// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        console.log(jsonData);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});