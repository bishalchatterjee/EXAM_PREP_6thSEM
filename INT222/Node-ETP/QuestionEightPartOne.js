//Implement a client server application with the express, HTTP, and socket.io modules to display the student(your) details in the erver consle after getting a request(Connection) from a client. Then Trigger events from the server to display a series of even numbers after every 2 seconds on the client web page. Finally display Thank you in the server console with termination of connect from the client

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Student details
const studentDetails = {
    name: 'Your Name',
    id: 'Your ID',
    program: 'Your Program'
};

// Handle client connection
io.on('connection', (socket) => {
    console.log('A client connected');

    // Display student details in server console
    console.log('Student Details:', studentDetails);

    // Trigger events to display even numbers on client web page
    let count = 0;
    const interval = setInterval(() => {
        if (count % 2 === 0) {
            socket.emit('evenNumber', count);
        }
        count++;
    }, 2000);

    // Handle client disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected');
        clearInterval(interval);
        console.log('Thank you');
    });
});

// Start the server
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});