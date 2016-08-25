module.exports = function (app, server) {

	var io = require('socket.io').listen(server);
	var users = {}; // empty hash
	var messages = [];
	var label = ['default', 'primary', 'success', 'info', 'warning', 'danger'];

	app.get('/', function(req, res) {
		res.render('index');
	});

	io.sockets.on('connection', function(socket) {

		// step 4
		socket.on('got_a_new_user', function (data) {
			var label_num = Math.floor(Math.random()*6);

			if (messages.length > 0) {
				socket.emit('existing_messages', { messages: messages });
			}

			// step 4.1
			io.emit('new_user_join', { user_id: socket.id, user_name: data.user_name, label: label[label_num] });

			// step 4.2
			socket.emit('existing_users', users );

			// step 4.3
			users[socket.id] = [data.user_name, label[label_num]];

			// adding a message that a new user is joined in to the archive
			var new_message = [socket.id, users[socket.id][1], data.user_name, "<strong>has joined the chatroom!</strong>"];
			messages.push(new_message);
		});

		// step 7
		socket.on('new_message', function(data) {
			var new_message = [socket.id, users[socket.id][1], data.user_name, data.message];
			// step 7.1
			messages.push(new_message);

			// step 7.2
			io.emit('add_a_message', { message: new_message})

		});

		// step 10
		socket.on('disconnect', function() {
			try {
				var user_info = {
					user_id: socket.id,
					user_name: users[socket.id][0],
					user_label: users[socket.id][1],
				}


				// adding a message that the user has left the chatroom in the archive
				var new_message = [user_info.user_id, user_info.user_label, user_info.user_name, "<strong>has left the chatroom!</strong>"];
				messages.push(new_message);

				io.emit('disconnect_user', user_info);



				// remove user from users {}
				delete users[socket.id];
			}
			catch(err){

			}

		});


	});

}
