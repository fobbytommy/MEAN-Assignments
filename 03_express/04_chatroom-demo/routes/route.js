module.exports = function(app, server) {
	var io = require('socket.io').listen(server);

	var users = {};

	// step 1
	app.get('/', function(req, res) {
		res.render('index');
	});

	io.sockets.on('connection', function(socket){

		// step 4
		socket.on('got_a_new_user', function(data) {
			io.emit('new_user', { name: data.name, user_id: socket.id });
			socket.emit('existing_users', users);
			users[socket.id] = data.name;
		})

		// step 6
		socket.on('disconnect', function(){
			// remove user from users {}
			delete users[socket.id];
			io.emit('disconnect_user', { user_id: socket.id} );
		});

	});
}
