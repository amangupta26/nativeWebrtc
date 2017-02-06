var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var signalling = require('./signalling');

var io = require('socket.io')(http);
signalling(io);

app.use('/static', express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/session', function(req, res){
	res.sendFile(path.join(__dirname + '/public/views/session.html'));
});

http.listen('4444', function(err){
	console.log("Server running on 4444");
});

