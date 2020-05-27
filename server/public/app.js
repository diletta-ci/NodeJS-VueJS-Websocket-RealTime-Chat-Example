var socket = io();

// Vue app
var app = new Vue({
    el: '#app',
    data: {
        chatOutput: '',
        handle: '',
        message: '',
        allMessages: [],
        feedback: '',
    },
    watch: {
        message(value) {
            value ? socket.emit('typing', this.handle) : socket.emit('stopTyping');
        },
    },
    created() {
        socket.connect('http://localhost:4000');

        socket.on('chat', (data) => {
            this.message = '';

            this.allMessages.push({
                handle: data.handle,
                message: data.message
            });
        });

        socket.on('typing', (data) => {
            this.feedback = `${data} is typing...`;
        });

        socket.on('stopTyping', () => {
            this.feedback = '';
        });
    },
    methods: {
        sendMessage() {
            socket.emit('chat', {
                message: this.message,
                handle: this.handle
            });
        },
    }
});
