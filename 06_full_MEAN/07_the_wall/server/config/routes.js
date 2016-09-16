var users = require('./../controllers/users');

module.exports = function(app) {
	app.post('/user/register', users.register);
	app.post('/user', users.login);

}
