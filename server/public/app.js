var socket = io();

// Vue app
var app = new Vue({
    el: '#app',
    data: {
        chatOutput: '',
        handle: '',
        message: '',
        allMessages: []
    },
    created() {
        socket.connect('http://localhost:4000');

        socket.on('chat', (data) => {
            this.allMessages.push({
                handle: data.handle,
                message: data.message
            });
        });
    },
    methods: {
        sendMessage() {
            socket.emit('chat', {
                message: this.message,
                handle: this.handle
            });
        }
    }
});
