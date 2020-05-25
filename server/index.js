var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('Listening...');
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
    })
});
