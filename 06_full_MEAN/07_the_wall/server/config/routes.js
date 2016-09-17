// require users controller from the controller folder,
// which is an instance of an object with many methods handling the http requests
var users = require('./../controllers/users');

var posts = require('./../controllers/posts');
var comments = require('./../controllers/comments');

module.exports = function(app) {
	app.post('/user/register', users.register);
	app.post('/user', users.login);

	app.get('/posts', posts.index);
	app.post('/posts', posts.create_post);

	app.post('/comments/:id', comments.create_comment);
}
