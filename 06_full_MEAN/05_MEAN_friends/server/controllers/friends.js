var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController() {

	// retrieve all friends from teh database
	this.index = function(req, res) {
		Friend.find({}, function(err, friends) {
			if (err) {
				console.log("[index: ERROR] something went wrong: ", err);
				res.json({errors: "could not retrieve the friends"});
			}
			else {
				console.log("[index] Successfully retrieved all friends from the DB!");
				res.json(friends); // send back all friends from the DB
			}
		});
	}

	// retrieve one specific friend from the DB for show.html
	this.show = function(req, res) {
		console.log(req.params);
		Friend.findOne({_id: req.params.id }, function (err, friend) {
			if (err) {
				console.log("[show: ERROR] something went wrong: ", err);
				res.json({errors: "could not retrieve a friend using the id"});
			}
			else {
				console.log("[show] Successfully retrieved the friend from the DB!");
				res.json(friend); // send back all friends from the DB
			}
		})
	}

	// create new friend in the DB from the obtained form data
	this.create = function(req, res) {
		var friend = new Friend(req.body);

		friend.save( function(err) {
			if (err) {
				console.log("[create: ERROR] something went wrong: ", err);
				res.json({errors: friend.errors});
			}
			else {
				console.log("[create] successfully created a new friend!");
				Friend.find({}, function(err, friends) {
					res.json(friends); // send back all friends in the db
				});
			}
		});
	}
	this.update = function(req, res) {
		console.log(req.params);
		console.log(req.body.first_name);
		Friend.update({_id: req.params.id }, req.body, function(err) {
			if (err) {
				console.log("[update: ERROR] something went wrong: ", err);
				res.json({errors: "failed to update a friend."});
			}
			else {
				console.log("[update] successfully updated a friend from the DB!");
				res.json({success: "updated a friend successfully!"});
			}
		});
	}
	this.delete = function(req, res) {
		// console.log(req.params);
		Friend.remove({_id: req.params.id}, function(err) {
			if (err) {
				console.log("[delete: ERROR] something went wrong: ", err);
				res.json({errors: friend.errors});
			}
			else {
				console.log("[delete] successfully deleted a friend from the DB!");
				Friend.find({}, function(err, friends) {
					res.json(friends); // send back all friends in the db
				});
			}
		});
	}
}

module.exports = new FriendsController();
