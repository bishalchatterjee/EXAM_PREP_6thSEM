// Create a node.js web server application with the HTTP module to perform sort operations on a given set of values.
// Accept a series of values from the input text fields of the client page and provide 
// the output values as a response with the click event on a button

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    if (pathname === '/') {
        // Serve the HTML file for the client page
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (pathname === '/sort') {
        // Handle the sort operation
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const values = body.split(',').map((value) => parseInt(value.trim()));
            const sortedValues = values.sort((a, b) => a - b);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(sortedValues.join(','));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});