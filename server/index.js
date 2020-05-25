var express = require('express');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('Listening...');
});

// Static file
app.use(express.static('public'));
