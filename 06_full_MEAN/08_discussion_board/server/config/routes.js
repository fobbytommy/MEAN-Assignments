var users = require('./../controllers/users');

module.exports = function(app) {
	app.post('/users', users.login);

	
}
