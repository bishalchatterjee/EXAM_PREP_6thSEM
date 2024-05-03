const http = require('http');

//Create a node.js web server application with the HTTP module for computing the sum of digits of a given number Accept a number from an input text field of the client page and provide the output value as a response with the click event on a button.

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/compute-sum') {
        let body = '';
        
        req.on('data', (chunk) => {
            body += chunk;
        });
        
        req.on('end', () => {
            const number = parseInt(body);
            const sum = computeSumOfDigits(number);
            
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(sum.toString());
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

function computeSumOfDigits(number) {
    let sum = 0;
    
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    
    return sum;
}

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});