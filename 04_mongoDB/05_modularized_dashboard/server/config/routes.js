var animal = require('./../controllers/animals');

module.exports = function (app) {

	// get all animals in the db
	app.get('/', function(req, res) {
		animal.find_all(req, res);
	});


	// create a new Animal
	app.get('/animals/new', function(req, res) {
		res.render('add_new');
	});
	app.post('/animals', function(req, res) {
		animal.create_new(req, res);
	});


	// show one Animal
	app.get('/animals/:id', function(req, res) {
		animal.read_one(req, res);
	});


	// update an Animal
	app.get('/animals/:id/edit', function(req, res) {
		animal.edit(req, res);
	});
	app.post('/animals/:id', function(req, res) {
		animal.update(req, res);
	});


	// delete an Animal
	app.post('/animals/:id/destroy', function(req, res) {
		animal.remove(req, res);
	});


}
