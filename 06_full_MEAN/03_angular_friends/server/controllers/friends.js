var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function(err, friends) {
			if (err) {
				console.log("Failed to retrieve the data: ", err);
			}
			else {
				console.log("Successfully retrieved all friends from DB!");
				res.json(friends);
			}
		})
	};
	this.create = function(req, res){
		var friend = new Friend(req.body);

		friend.save( function(err) {
			if (err) {
				console.log("Could not create a new friend", err);
				res.render('/friends/new', { errors: friend.errors });
			}
			else {
				console.log("Successfully added a new friend to the DB!");
				res.redirect('/friends');
			}
		});
	};
	this.update = function(req, res){
		Friend.update({ _id: req.params.id }, { first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday }, function(err) {
			if (err) {
				console.log("Could not update the friend", err);
				res.render('/friends/edit', { errors: friend.errors });
			}
			else {
				console.log("Successfully updated the friend in the DB!");
				res.redirect('/friends');
			}
		});
	};
	this.delete = function(req, res){
		Friend.remove({ _id: req.params.id }, function(err) {
			if (err) {
				console.log("could not delete the friend", err);
				res.redirect('/friends');
			}
			else {
				console.log("Successfully deleted the friend from the DB!");
				res.redirect('/friends');
			}
		})
	};
	this.show = function(req, res){
		Friend.findOne({ _id: req.params.id }, function(err, friend) {
			if (err) {
				console.log("Failed to retrieve the friend's data: ", err);
				res.redirect('/friends');
			}
			else {
				console.log("Successfully retrieved the friend's data from the DB!");
				res.json(friend);
			}
		})
	};
}

module.exports = new FriendsController();
