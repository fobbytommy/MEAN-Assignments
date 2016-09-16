var mongoose = require('mongoose');
var users = require('./../controllers/users');

module.exports = function(app) {
	app.post('/users/login', users.login );
	app.post('/users/register', users.register);
	app.get('/users/:id', users.show);
}
