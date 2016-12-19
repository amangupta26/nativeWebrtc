var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.use('/static', express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen('443', function(err){
	console.log("Server running on 4444");
});

