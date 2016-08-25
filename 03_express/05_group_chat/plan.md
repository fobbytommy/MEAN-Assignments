# Group Chat | socket.io

### Planning
#### pseudo code

1. Create a nodeJS server that renders views/index.ejs that has the html content for the client whenever the client requests "/"

2. In the client code, have a javascript prompt code that asks the user for his/her name. Store the user input in a variable called __name__

3. Have the client EMIT to the server an event called "got_a_new_user" and pass __name__ to the server

4. Have the server LISTEN for an event called "got_a_new_user". When this event gets triggered,
	1. have the server BROADCAST an event called "new_user_join" to the client with the __name__ of the new user attached to the event.

	2. to the client who sent the request, we EMIT an event called "existing_users" / "existing_messages" with all the users data.
		1. Have client LISTEN for "existing_users" which updates the list of users in the chat group list and all old messages when "existing_messages" is listened.

	3. store the name/session_id of the new user in a hash called users

5. Have the client LISTEN for an event called 'new_user_join' and when this event gets triggered,
	1. jQuery to render a new name on the list of the users in the group chat list

	2. and have a message "... has joined the chat!" on the chat board.

6. When the client enter a message, have the client EMIT called "new_message" and send the message to the server.

7. Server to LISTEN for "new_message"
	1. store the new message received from the client.
	2. BROADCAST to ALL "add_a_message" to the client that contains this new message and user data.

8. Client to LISTEN for "add_a_message" and updates the chat room.

9. When the client leaves the page or closes the browser, have the client EMIT "disconnect" to the server.

10. Have the server LISTEN for "disconnect" and BROADCAST to ALL client "disconnect_user"

11. Have the client listen for "disconnect_user" and have the message "... has left the chat room!" and remove that using from the list of users in the chatroom.
