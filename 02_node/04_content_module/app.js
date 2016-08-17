var http = require('http');
// var fs = require('fs'); // do not need
var static_contents = require('static.js'); // getting a new module 
var port = 7000;
var server = http.createServer( function (request, respond) {
	static_contents(request, respond);
});

server.listen(port, function(){
	console.log("Listening to Port: ", port);
});
