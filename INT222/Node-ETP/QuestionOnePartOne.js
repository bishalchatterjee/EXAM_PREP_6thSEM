//Include http module to create a server application and use the fs module to dupliate 
//the original.txt file as the duplicate.txt file in the server with the client(user) request from the browser. 
//Create a source.txt file and add personal information(name, city, state) in the server system for duplication.

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/duplicate') {
        // Read the original.txt file
        fs.readFile('./original.txt', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading original.txt');
            } else {
                // Write the data to duplicate.txt
                fs.writeFile('./duplicate.txt', data, 'utf8', (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end('Error writing to duplicate.txt');
                    } else {
                        res.statusCode = 200;
                        res.end('File duplicated successfully');
                    }
                });
            }
        });
    } else if (req.url === '/add-info') {
        // Create a source.txt file and add personal information
        const info = 'Name: Bishal Chatterjee\nCity: Kolkata\nState: West Bengal';
        fs.writeFile('./source.txt', info, 'utf8', (err) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error creating source.txt');
            } else {
                res.statusCode = 200;
                res.end('Personal information added successfully');
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});