// require users, posts, and comments controllers from the 'controllers' folder,
// which are instances of the objects with many methods handling specific http requests
var users = require('./../controllers/users');
var posts = require('./../controllers/posts');
var comments = require('./../controllers/comments');

// these routes which are to be exported to our 'home', server.js
module.exports = function(app) {
	app.post('/user/register', users.register); // deals with registeration form
	app.post('/user', users.login);	// deals with the login process

	app.get('/posts', posts.index);	// gets all posts (populated with all comments)
	app.post('/posts', posts.create_post); // deals with the new post form

	app.post('/comments/:id', comments.create_comment); // deals with the new comment form
}
