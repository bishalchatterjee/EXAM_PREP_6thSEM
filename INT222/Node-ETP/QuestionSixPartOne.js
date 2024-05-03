// Implement a client server application with the express, HTTP and socket.io modules to display the studnet(your) detais in the server console after getting a request(connection) from a client. Then Broadcast the only odd visitor cout from the server to all clients with the new client connections.

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Define your student details
const studentDetails = {
    name: 'Your Name',
    age: 20,
    university: 'Your University',
};

// Handle client connections
io.on('connection', (socket) => {
    // Display student details in the server console
    console.log('Student Details:', studentDetails);

    // Broadcast the odd visitor count to all clients
    const oddVisitorCount = io.engine.clientsCount % 2 === 1 ? io.engine.clientsCount : io.engine.clientsCount - 1;
    io.emit('oddVisitorCount', oddVisitorCount);

    // Handle client disconnections
    socket.on('disconnect', () => {
        // Recalculate and broadcast the odd visitor count
        const newOddVisitorCount = io.engine.clientsCount % 2 === 1 ? io.engine.clientsCount : io.engine.clientsCount - 1;
        io.emit('oddVisitorCount', newOddVisitorCount);
    });
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});