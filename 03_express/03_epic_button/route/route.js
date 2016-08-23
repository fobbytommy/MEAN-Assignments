module.exports = function(app, server) {
	var io = require('socket.io').listen(server);

	app.get('/', function(req, res) {
		res.render('index');
	});

	var count = 0;

	io.sockets.on('connection', function(socket){
		// console.log('this is my socket connection!');

		// listening on when the client emits 'epic_button_clicked'
		socket.on('epic_button_clicked', function(){
			count++;
			// send back a incremented count to ALL USERS
			io.emit('counting_time', { response: count });
		});


		// listening on when the client emits 'reset_button_clicked'
		socket.on('reset_button_clicked', function(){
			count = 0;
			// send back a count that is 0 to ALL USERS
			io.emit('reset_count', { response: count });
		})


		// listening on when the client emits 'check_count'.
		// this is triggering every time the client reloads or visits the page
		socket.on('check_count', function(){
			// send back the current count.
			socket.emit('updated_count', { response: count });
		})

	});
}
