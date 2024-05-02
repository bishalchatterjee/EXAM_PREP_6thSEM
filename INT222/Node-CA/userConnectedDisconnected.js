const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the public directory
app.use(express.static('public'));

// Route to serve the client-facing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to serve the user page
app.get('/user', (req, res) => {
  res.sendFile(__dirname + '/user.html');
});

// Socket.io connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  // Notify all clients when a user connects
  io.emit('user connected');

  // Listen for disconnection event
  socket.on('disconnect', () => {
    console.log('User disconnected');
    
    // Notify all clients when a user disconnects
    io.emit('user disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
