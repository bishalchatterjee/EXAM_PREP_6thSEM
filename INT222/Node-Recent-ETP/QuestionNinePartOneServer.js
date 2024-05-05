// Write a program using socket.io to send "wow server" message from client to the server after ever 2 seconds but after 12 seconds the client must stip sending this "wow server" message t the server. Ater waiting for another 5 seconds the clent again must start sending the message to the server
const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log('Received message from client:', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = 3000;
io.listen(PORT);
console.log(`Server is running on port ${PORT}`);
