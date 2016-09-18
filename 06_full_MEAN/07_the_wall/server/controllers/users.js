var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); // require bcrypt to compare login password
var User = mongoose.model('User');

function UsersController() {

	// controller which deals with the login request
	this.login = function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		User.findOne({ username_lowercase: username.toLowerCase() }, function(err, user) {
			// empty query result is not actually an error, so
			// 'err' remains null despite of not finding a result.
			// therefore, I will compare with 'user' and create my own errors
			if (user == null) {
				console.log("[Login: ERROR] failed to retrieve a user!");
				res.json({errors: "Username or password is not valid!"});
			}
			// else 'user' isn't null, I found some data to compare the passwords
			else {
				// if password did not match the database pasword,
				if (bcrypt.compareSync(password, user.password) == false) {
					console.log("[Login: ERROR] Given password did not match the database password!");
					res.json({errors: "Username or password is not valid!"});
				}
				// else passwords did match, the login is successful!
				else {
					console.log("[Login: SUCCESS] passwords matched! User login successful!");
					res.json( user );
				}
			}
		});
	}

	// controller which deals with the registeration request
	this.register = function(req, res) {
		var user = new User({
						email: req.body.email,
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						username: req.body.username, // literal username with Caps (just how client typed)
						username_lowercase: req.body.username, // for finding username for login and verification purposes
						password: req.body.password
					});

		user.save( function(err, user) {
			if (err) { // if err, the validations failed. return the validation errors
				console.log("[Register: ERROR] failed to create a new user: ", err);
				res.json({ errors: err.errors });
			}
			else { // else the registration is completed
				console.log("[Register: SUCCESS] successfully created a new user!");
				res.json( user );
			}
		});
	}

}

module.exports = new UsersController();
