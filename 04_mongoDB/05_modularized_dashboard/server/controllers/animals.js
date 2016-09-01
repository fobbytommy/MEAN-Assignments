var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
	find_all: function(req, res) {
		Animal.find({}, function(err, animals_list) {
			if (err) {
				console.log('something went wrong: ', err);
			}
			else {
				var animals = animals_list;
				res.render('main', { animals: animals});
			}
		});
	},
	create_new: function(req, res) {
		var new_animal = new Animal({
			name: req.body.name,
			nickname: req.body.nickname,
			height: req.body.height,
			weight: req.body.weight
		});
		new_animal.save(function(err) {
			if (err) {
				console.log('something went wrong: ', err);
			}
			else {
				console.log('successfully added an animal!');
				res.redirect('/');
			}
		});
	},
	read_one: function(req, res) {
		Animal.find({_id: req.params.id }, function(err, animal) {
			if (err) {
				console.log('something went wrong: ', err);
			}
			else {
				console.log('succefully retrieve one animals info');
				res.render('show_animal', {animal: animal});
			}
		});
	},
	edit: function(req, res) {
		Animal.find({_id: req.params.id}, function(err, animal) {
			if (err){
				console.log('something went wrong: ', err);
			}
			else{
				console.log('successfully retrieve the data');
				res.render('edit_animal', { animal: animal });
			}
		});
	},
	update: function(req, res) {
		Animal.findOne({_id: req.params.id}, function(err, animal) {
			animal.name = req.body.name;
			animal.nickname = req.body.nickname;
			animal.height = req.body.height;
			animal.weight = req.body.weight;
			animal.save(function(err){
				if (err) {
					console.log('something went wrong ', err);
				}
				else {
					var url = "/animals/" + req.params.id;
					res.redirect(url);
				}
			});

		})
	},
	remove: function(req, res) {
		Animal.remove({_id: req.params.id }, function(err) {
			if (err) {
				console.log('something went wrong: ', err);
			}
			else {
				console.log('succesfully deleted the selection');
			}
		});
		res.redirect('/');
	}
}
