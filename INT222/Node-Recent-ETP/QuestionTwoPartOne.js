//Create a node.js application to demonstrate the use of Zlib and stream modules


const zlib = require('zlib');
const fs = require('fs');
const stream = require('stream');

// Create a readable stream from a file
const readStream = fs.createReadStream('input.txt');

// Create a writable stream to a compressed file
const writeStream = fs.createWriteStream('output.txt.gz');

// Create a transform stream to compress data using zlib
const gzip = zlib.createGzip();

// Create a transform stream to handle the data chunks
const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
        // Modify the chunk here if needed
        callback(null, chunk);
    }
});

// Pipe the data from the readable stream to the transform stream, then to the gzip transform stream, and finally to the writable stream
readStream.pipe(transformStream).pipe(gzip).pipe(writeStream);

// Handle the finish event when the compression is complete
writeStream.on('finish', () => {
    console.log('File compressed successfully.');
});