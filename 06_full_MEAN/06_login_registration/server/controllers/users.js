var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function UsersController() {

	this.login = function(req, res) {
		var email = req.body.email;
		var password = req.body.password;

		User.findOne({ email: email }, function(err, user) {
			// empty query result is not actually an error, so
			// 'err' remains null despite of not finding a result.
			// therefore, I will compare with 'user' and create my own errors
			if (user == null) {
				console.log("[Login: ERROR] failed to retrieve a user!");
				res.json({errors: "Email or password is not valid."})
			}
			else { // if 'user' isn't null, I found some data to compare the passwords
				if (bcrypt.compareSync(password, user.password) == false) {
					console.log("[Login: ERROR] Given password did not match the database password!");
					res.json({errors: "Email or password is not valid."})
				}
				else {
					console.log("[Login: SUCCESS] passwords matched! User login successful!");
					res.json( user );
				}
			}
		});
	}

	// controller which deals with the registeration request
	this.register = function(req, res) {
		var user = new User ({
						email: req.body.email,
						first_name: req.body.first_name,
						last_name: req.body.last_name,
						birthday: req.body.birthday,
						password: req.body.password
					});

		user.save( function(err, user) {
			if (err) {
				console.log("[Register: ERROR] failed to create a new user!: ", err);
				res.json({ errors: err.errors });
			}
			else {
				console.log("[Register: SUCCESS] successfully created a new user!")
				res.json( user );
			}
		});

	}

	this.show = function(req, res) {

		User.findOne({ _id: req.params.id }, function(err, user) {
			if (err) {
				console.log("[Show: ERROR] failed to retrieve user's information!")
				res.json({errors: "failed to retrieve a user!"});
			}
			else {
				console.log("[Show: SUCCESS] successfully retrieved a user's information!")
				res.json( user );
			}
		});

	}

}

module.exports = new UsersController();
