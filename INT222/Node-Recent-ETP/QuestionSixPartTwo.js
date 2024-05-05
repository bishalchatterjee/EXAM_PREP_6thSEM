const http = require('http');

//Create a form having text boxes and a submit button. On the click of the submit button the values entered in the form should be printed on the web page use HTTP module for this 
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(`<h1>Form Data:</h1><p>${data}</p>`);
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <form method="POST">
                <input type="text" name="name" placeholder="Enter your name"><br>
                <input type="email" name="email" placeholder="Enter your email"><br>
                <input type="submit" value="Submit">
            </form>
        `);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});