//Create a node.js web server application with the HTTP module to find a series of Fibonacci numbers up to a given number. Accept a number from the input text field of the client page and provide the output values as a response with the click event on a button.

const http = require('http');


const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/fibonacci') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const number = parseInt(body);
            const fibonacciSeries = getFibonacciSeries(number);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(fibonacciSeries));
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

function getFibonacciSeries(number) {
    const series = [0, 1];
    for (let i = 2; i <= number; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
