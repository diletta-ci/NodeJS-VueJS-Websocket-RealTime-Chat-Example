var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('Listening on port 4000');
});

// Static file
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket) {
    console.log('Socket connected. Connection id:', socket.id);
    // Receiving the data from client
    socket.on('chat', function(data) {
        // Emit data to client
        io.sockets.emit('chat', data);
    });

    // Broadcast event to show feedback tp other users connected
    socket.on('typing', function(data) {
        socket.broadcast.emit('typing', data);
    });

    socket.on('stopTyping', function() {
        socket.broadcast.emit('stopTyping');
    });
});
