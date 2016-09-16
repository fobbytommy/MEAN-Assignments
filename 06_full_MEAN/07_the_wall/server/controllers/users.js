var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

function UsersController() {

	this.login = function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		User.findOne({ username: username.toLowerCase() }, function(err, user) {
			if (user == null) {
				// did not find
				res.json({errors: "Username or password is not valid!"});
			}
			else {
				if (bcrypt.compareSync(password, user.password) == false) {
					res.json({errors: "Username or password is not valid!"});
				}
				else {
					res.json( user );
				}
			}
		});
	}

	this.register = function(req, res) {
		var user = new User({
			email: req.body.email,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			username: req.body.username,
			password: req.body.password
		});

		user.save( function(err, user) {
			if (err) {
				console.log("fail");
				res.json({ errors: err.errors });
			}
			else {
				console.log("success");
				res.json( user );
			}
		})

	}

	this.show = function(req, res) {

	}

}

module.exports = new UsersController();
