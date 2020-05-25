var socket = io.connect('http://localhost:4000');

// Vue app
var app = new Vue({
    el: '#app',
    data: {
        hello: 'Hello hello!'
    }
});
