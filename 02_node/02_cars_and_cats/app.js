var http = require('http');
var fs = require('fs');
var port = 7000;
var server = http.createServer( function(req, res){
	var request = req.url;
	// console.log("8th: ", request[8]);
	var file;
	console.log("Client's requested URL: ", request);
	switch (request) {
		case "/":
			file = "views/index.html";
			break;
		case "/cars":
			file = "views/cars.html";
			break;
		case "/cats":
			file = "views/cats.html";
			break;
		case "/cars/new":
			file = "views/new_cars.html";
			break;
		case "/static/css/bootstrap.min.css":
			file = "./static/css/bootstrap.min.css";
			break;
		default:
			switch (request[8]) {
				case "i":
					file = "." + request;
					break;
				default:
					file = "null";
			}
	}

	if (file !== "null") {
		if (file[file.length-2] === "m") { // ht'm'l
			fs.readFile(file, 'utf8', function(errors, contents){
				if (errors) { console.log(errors) }
				res.writeHead(200, {'Content-Type': 'text/html'} );
				res.write(contents);
				res.end();
			});
		}
		else if (file[file.length-2] === "s") { // c's's
			fs.readFile(file, 'utf8', function(errors, contents){
				if (errors) { console.log(errors) }
				res.writeHead(200, {'Content-Type': 'text/css'} );
				res.write(contents);
				res.end();
			});
		}
		else if (file[file.length-2] === "j") { // 'j's
			fs.readFile(file, 'utf8', function(errors, contents){
				if (errors) { console.log(errors) }
				res.writeHead(200, {'Content-Type': 'text/javascript'} );
				res.write(contents);
				res.end();
			});
		}
		else { // image
			fs.readFile(file, function(errors, contents){
				if (errors) { console.log(errors) }
				res.writeHead(200, {'Content-Type': 'image/jpg'} );
				res.write(contents);
				res.end();
			});
		}
	}
	else {
		res.writeHead(404);
		res.end('Error: File cannot be displayed!');
	}

	
});

server.listen(port, function(){
	console.log("Listening to Port: ", port);
});
