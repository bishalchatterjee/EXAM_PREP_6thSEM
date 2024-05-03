const http = require('http');

//Create a node.js web server application with the HTTP module to produce a series of Armstrong numbers up to a given number. Accpet a number from the input text field of the client page and provide the output values as a response with the click event on a button


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Armstrong Numbers</title>
                </head>
                <body>
                    <h1>Armstrong Numbers</h1>
                    <form action="/" method="POST">
                        <label for="number">Enter a number:</label>
                        <input type="number" id="number" name="number" required>
                        <button type="submit">Generate Armstrong Numbers</button>
                    </form>
                </body>
            </html>
        `);
        res.end();
    } else if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const number = parseInt(body.split('=')[1]);
            const armstrongNumbers = getArmstrongNumbers(number);
            res.setHeader('Content-Type', 'text/html');
            res.write(`
                <html>
                    <head>
                        <title>Armstrong Numbers</title>
                    </head>
                    <body>
                        <h1>Armstrong Numbers</h1>
                        <p>Armstrong numbers up to ${number}:</p>
                        <ul>
                            ${armstrongNumbers.map((num) => `<li>${num}</li>`).join('')}
                        </ul>
                    </body>
                </html>
            `);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

function getArmstrongNumbers(limit) {
    const armstrongNumbers = [];
    for (let i = 1; i <= limit; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

function isArmstrongNumber(number) {
    const digits = number.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === number;
}

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});