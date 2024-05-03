//Create a web server application with http module to provide the file name in the url of the client request from a browser. Include the url module in the server application and parse the url to get the file name from the client request. Access the file and display the content as a response to the client(user) request in the browser. Create a test.txt file and add personal information(name, roll no) in the server system.

const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const fileName = parsedUrl.pathname.slice(1); // Remove the leading slash

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});