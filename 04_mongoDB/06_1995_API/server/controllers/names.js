var mongoose = require('mongoose');
var Name = mongoose.model('Name');

function NameController() {
	this.create_new = function(req, res) {
		var name_new = new Name(req.params);
		name_new.save( function(err) {
			if (err) {
				res.send(err);
			}
			else {
				console.log(req.params.name + " has been added to the db!");
				res.redirect('/');
			}
		});
	}

	this.read = function(req, res) {
		Name.find({}, function(err, names) {
			if (err) {
				res.send(err);
			}
			else {
				res.json(names);
			}
		});
	}

	this.remove = function(req, res) {
		Name.remove(req.params, function(err) {
			if (err) {
				res.send(err);
			}
			else {
				console.log(req.params.name + " has been removed from the db!");
				res.redirect('/');
			}
		});
	}

	this.show_one = function(req, res) {
		Name.findOne(req.params, function(err, name) {
			if (name == null) {
				res.send("Could not find " + req.params.name + " from the db!");
			}
			else {
				console.log(name.name + " has been successfully retrieved!");
				res.json(name);
			}
		});
	}
}

module.exports = new NameController();
