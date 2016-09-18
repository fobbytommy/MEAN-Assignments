var mongoose = require('mongoose');
var Post = mongoose.model('Post');

function PostsCommentsController() {

	// controller which gets all posts with populated comments
	this.index = function(req, res) {

		Post.find({}, false, true).populate('_comments').exec(function(err, posts) {
			if (posts == null) {
				console.log("[Index: NULL] there are no posts in DB!");
				res.json();
			}
			else {
				console.log("[Index: SUCCESS] successfully retrieved all the posts form the DB!");
				res.json(posts);
			}
		});

	}

	// controller which creates a new post
	this.create_post = function(req, res) {

		var post = new Post({
						username: req.body.username,
						post: req.body.post
					});

		post.save( function(err, post) {
			if (err) { // if err, the post did not meet the validations. Send back errors.
				console.log("[Create_post: ERROR] failed to create a new post! ", err);
				res.json({ errors: err.errors });
			}
			else { // else the new post is successfully created and stored in the DB.
				console.log("[Create_post: SUCCESS] successfully created a new post!");
				res.json(post);
			}
		});

	}

}

module.exports = new PostsCommentsController();
