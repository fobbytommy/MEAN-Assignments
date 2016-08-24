# Chatroom - DEMO

1. Have the NodeJS server render views/index.ejs that has the html content for the client whenever the client requests "/"

	routings/index.js

	app.get('/', function(req, res){
		res.render('index', {});
	});

2. In the client codes, have a javascript code that asks the user for their name. Store th user input in a variable called __name__

	<script>
		var name = prompt('What is your name?');
	</script>

3. Have the client EMIT to the server an event called "got_a_new_user" and pass __name__ to the server

	<script>
		var name = prompt('What is your name?');

		var socket = io.connect();
		socket.emit('got_a_new_user', { name: name });
	</script>

4. Have the server LISTEN for an event called "got_a_new_user" and when this event gets triggered, 	
	1. have the server BROADCAST an event called 'new_user' to the client with the __name__ of the new user attached to the event.

		var io = require('socket.io').listen(server);

		var users = {};

		io.sockets.on('connection', function (socket) {
			socket.on('got_a_new_user', function(data) {
				io.emit('new_user', { name: data.name, user_id: socket.id });
			});
		});

	2. we store the name/session_id of the new user in a variable/array/hash called users

		var io = require('socket.io').listen(server);

		var users = {};

		io.sockets.on('connection', function (socket) {
			socket.on('got_a_new_user', function(data) {
				io.emit('new_user', { name: data.name, user_id: socket.id });

				users[socket.id] = data.name;

			});
		});

	3. to the person who sent this request, we EMIT an event called 'existing_users' with all the users data.

		io.sockets.on('connection', function (socket) {
			socket.on('got_a_new_user', function(data) {
				io.emit('new_user', { name: data.name, user_id: socket.id });

				users.push([data.name, socket.id]);

				socket.emit('existing_users', users);

			});
		});

5. Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.

	socket.on('new_user', function(data){
		var html_str = "<div id='" + data.user_id + "'>" + data.name + "</div>";

		// fade in somehow
		$('#users').append(html_str).hide().fadeIn(200);
	});


6. Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, boradcast an event called 'disconnect_user' to all clients.

	$(window).bind("beforeunload", function() {
		socket.emit('disconnect');
	})

	socket.on('disconnect', function(){
		// remove user from users {}
		delete users[socket.id];
		io.emit('disconnect_user', { user_id: socket.id});
	});

7. We need to have the client LISTEN for an event called 'disconnect_user' and remove any html box associated with this user.

	socket.on('disconnect_user', function(data) {
		var user_id = "#" + data.user_id;
		$(user_id).fadeOut(300, function() {
			$(this).remove();
		})
	})


#### Now, how the client could possibly know which box to remove! It doesn't, so we ned to be kind of tricky. What we could do is
* For step 4, when the server gets the event 'got_a_new_user', store a sessionID of the user and pass this sessionID with the event "new_user". Then have the client render this thml box with the id of the seessionID of this user.
* For step 6, when the servr emits an event called 'disconnect_user', pass the sessionID of the disconnected user as well. In step 7, have the client remove the HTML box with the id of the sessionID of the disconnected user.
