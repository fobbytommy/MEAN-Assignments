var express = require('express');
var path = require('path');
var app = express();
var port = 7000;

// to use static contents
app.use(express.static(path.join(__dirname, './static')));
// to set templating engine to render html contents
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(port, function() {
	console.log('listening to port: ', port);
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {

	socket.on("posting_form", function(data) {
		socket.emit('updated_message', data);
		socket.emit('random_number', { number: Math.floor(Math.random()*1000)+1 });
	})

});
