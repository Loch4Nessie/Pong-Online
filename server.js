
var express = require('express');
var app = express();
var server = app.listen(4000); //Zorgt er voor dat de server op port 4000 gaat runnen als hij aan staat

app.use(express.static('public')); //runt elke file die in de public directory staan

console.log("Server is running");

var socket = require('socket.io');
var io = socket(server);

io.on('connection', function(socket){
	console.log('new connection: ' + socket.id);

	socket.on('p1yPos', function(p1yData){
		
		socket.broadcast.emit('p1yPos', p1yData);
	});
});
