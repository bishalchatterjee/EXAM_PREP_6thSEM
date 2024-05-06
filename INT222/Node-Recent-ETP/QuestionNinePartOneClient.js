const io = require('socket.io-client');

const socket = io('http://localhost:3000'); 

let intervalId;

socket.on('connect', () => {
    console.log('Connected to server');
    
    intervalId = setInterval(() => {
        socket.emit('message', 'wow server');
    }, 2000);
    
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Stopped sending messages');
        
        setTimeout(() => {
            intervalId = setInterval(() => {
                socket.emit('message', 'wow server');
            }, 2000);
            console.log('Started sending messages again');
        }, 5000);
    }, 12000);
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});
