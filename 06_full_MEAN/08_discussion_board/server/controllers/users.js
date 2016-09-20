var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');

function UserController(){

	// controls the login and/or creation of a new username
	this.login = function(req, res) {
		// store username from the form
		var username = req.body.username;
		var username_lowercase = username.toLowerCase();

		User.findOne({ username_lowercase: username_lowercase }, function(err, user) {
			if (user == null) { // if username was not found, attempt to create a new user
				var user = new User({
										username: username,
										username_lowercase: username_lowercase
									});

				user.save( function(err, user) {
					if (err) { // username has failed the validation. Send errors back to the factory.
						console.log("[Login: ERROR] failed to create a new user user.");
						res.json({ errors: err.errors });
					}
					else { // username is valid. Creating a new user and login are successful.
						console.log("[Login: SUCCESS] successfully logged in a NEW user.");
						res.json( user ); // send back user info
					}
				});

			}
			else { // found the user from the DB, login is successful!
				console.log("[Login: SUCCESS] successfully logged in an EXISTING user.");
				res.json( user ); // send back user info
			}
		});
	}

	// controls getting the total numbers of the topic, post, and comment
	// made by a single username
	this.profileData = function(req, res) {
		var username = req.params.username;
		var count_data = {
			topic: 0,
			post: 0,
			comment: 0
		};

		Topic.count({ username: username }, function(err, count) {
			count_data.topic = count; // update the topic's count
			// console.log(count_data);
		});
		Post.count({ username: username }, function(err, count) {
			count_data.post = count; // update the post's count
			// console.log(count_data);
		});
		Comment.count({ username: username }, function(err, count) {
			count_data.comment = count; // update the comment's count
			// console.log(count_data);
			res.json(count_data); // send the information back to the factory.
		});
	}

}

module.exports = new UserController();
