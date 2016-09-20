var users = require('./../controllers/users');
var topics = require('./../controllers/topics');
var posts = require('./../controllers/posts');

// routes.js is required by the 'server.js'
module.exports = function(app) {
	// for Login page
	app.post('/user', users.login); // login route

	// for Dashboard page
	app.get('/topic', topics.index); // getting ALL the topics for the Dashboard
	app.post('/topic', topics.create_topic); // creating a new topic

	// for single Topic's page
	app.get('/topic/:id', topics.single_topic); // getting a single topic
	app.post('/post/:topic_id', posts.create_post); // creating a new post
	app.get('/post/:topic_id', posts.index_posts); // get all posts (with comments) for a specific topic
	app.put('/post/like/:post_id', posts.like_post); // updating a 'like' key
	app.put('/post/dislike/:post_id', posts.dislike_post); // updating a 'dislike' key
	app.post('/comment/:post_id', posts.create_comment); // creating a new comment

	// for User Profile Page
	app.get('/user/:username', users.profileData); // get user's profile data
}
