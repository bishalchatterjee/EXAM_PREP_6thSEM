//Create a node.js web server application with the HTTP module for conversion between Celsius and Fahrenheit Accpet the temperature values from the input text fields of the client page and provide the output values as a response with the click event on a button.

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve the HTML file with the client page
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/convert') {
        // Handle the conversion request
        if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                const { celsius } = JSON.parse(body);
                const fahrenheit = (celsius * 9/5) + 32;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ fahrenheit }));
            });
        } else {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});