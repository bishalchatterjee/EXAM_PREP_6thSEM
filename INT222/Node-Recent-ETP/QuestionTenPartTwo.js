//Using Event Emitter write into file as well as rename the file

const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Write to file
fs.writeFile('./test.txt', 'Hello, World!', (err) => {
    if (err) {
        emitter.emit('error', err);
    } else {
        emitter.emit('writeComplete');
    }
});

// Rename file
emitter.on('writeComplete', () => {
    fs.rename('./test.txt', './RenamedTest.txt', (err) => {
        if (err) {
            emitter.emit('error', err);
        } else {
            emitter.emit('renameComplete');
        }
    });
});

// Handle errors
emitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

// Listen for rename completion
emitter.on('renameComplete', () => {
    console.log('File renamed successfully!');
});