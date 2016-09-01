var name = require('./../controllers/names');

module.exports = function (app) {

	// root route - show all names in db
	app.get('/', name.read );


	// create a new name
	app.get('/new/:name/', name.create_new)


	// remove a name from the db
	app.get('/remove/:name/', name.remove)


	// find and show a name from the db
	app.get('/:name', name.show_one);

}
