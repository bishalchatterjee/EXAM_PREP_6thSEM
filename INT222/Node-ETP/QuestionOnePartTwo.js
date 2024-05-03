//Create a node.js web server application with the http module to perform the search operation on a given set of values. 
//Accept a series of values from the input text fields of the clizent page and provide the output values as a response with 
//the click event on a button

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            // Process the input values here
            const inputValues = JSON.parse(data);
            // Perform the search operation using the input values

            // Provide the output values as a response
            const outputValues = /* Your search operation result */
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(outputValues));
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});