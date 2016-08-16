var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
	// see what URL the clients are requesting:
	console.log('client request URL: ', request.url);
	// routing:
	if(request.url === '/') {
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/ninjas') {
		fs.readFile('views/ninjas.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/dojos/new') {
		fs.readFile('views/dojos.html', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/css/bootstrap.min.css') {
		fs.readFile('static/css/bootstrap.min.css', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/assets/css/ie10-viewport-bug-workaround.css') {
		fs.readFile('static/assets/css/ie10-viewport-bug-workaround.css', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/css/cover.css') {
		fs.readFile('static/css/cover.css', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/assets/js/ie-emulation-modes-warning.js') {
		fs.readFile('static/assets/js/ie-emulation-modes-warning.js', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/js/jquery.min.js') {
		fs.readFile('static/js/jquery.min.js', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/js/bootstrap.min.js') {
		fs.readFile('static/js/bootstrap.min.js', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url === '/static/assets/js/ie10-viewport-bug-workaround.js') {
		fs.readFile('static/assets/js/ie10-viewport-bug-workaround.js', 'utf8', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(contents);
			response.end();
		});
	}
	// else if (request.url === '/favicon.ico') {
	// 	fs.readFile('favicon.ico', '', function(errors,contents){
	// 		response.writeHead(200, {'Content-Type': 'image/x-icon'});
	// 		response.write(contents);
	// 		response.end();
	// 	});
	// }
	else if (request.url === '/static/img/ninja_main.png') {
		fs.readFile('static/img/ninja_main.png', '', function(errors,contents){
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(contents);
			response.end();
		});
	}
	else {
		response.writeHead(404);
		response.end('We have an error!');
	}
});

// tell your server which port to run on
server.listen(7000);
// print to terminal window
console.log("Running in localhost at port 7000");
