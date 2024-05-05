// Write a program to read from a JSON file synchronously

const fs = require('fs');

try {
    // Read the JSON file synchronously
    const data = fs.readFileSync('data.json', 'utf8');

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Do something with the JSON data
    console.log(jsonData);
} catch (error) {
    console.error('Error reading JSON file:', error);
}