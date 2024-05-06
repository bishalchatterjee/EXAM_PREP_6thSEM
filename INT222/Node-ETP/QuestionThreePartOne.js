//Implement a Node.js application to create a readable stream with an employee.txt file(add basic employee details in the file).
// Read the student details from the above stream and send the data as a response to the client request from the browser

const fs = require('fs');
const http = require('http');

// Create a readable stream with the employee.txt file
const readableStream = fs.createReadStream('/C:/Users/bisha/Desktop/ETP Prep/INT222/Node-ETP/employee.txt');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    // Pipe the readable stream to the response
    readableStream.pipe(res);
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});