//Create a redable stream using fs module and demonstrate its working

const fs = require('fs');

const readableStream = fs.createReadStream('./input.txt');

readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

readableStream.on('end', () => {
    console.log('Stream ended');
});