const http = require('http');
const fs = require('fs');

//Create a node.js web server appllication with the HTTP Module to find a series of factorial numbers up to a given number. Accept a number from the input text field of the client page and prove the output values as a resonse with the click event on a button
// Create a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve the HTML file with the input text field and button
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/factorial') {
        if (req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                // Parse the input number from the request body
                const number = parseInt(body.split('=')[1]);

                // Calculate the factorial numbers
                const factorialNumbers = [];
                for (let i = 1; i <= number; i++) {
                    factorialNumbers.push(factorial(i));
                }

                // Send the factorial numbers as the response
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(factorialNumbers));
            });
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}