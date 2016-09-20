var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var Topic = mongoose.model('Topic');

function PostController() {

	// controls the creation of a new post
	this.create_post = function(req, res) {

		var post = new Post({
						topic_id: req.params.topic_id,
						username: req.body.username,
						post: req.body.post
					});

		post.save( function(err, post) {
			if (err) { // if err, the new post did not meet the validation requirement.
				console.log('[create_post: ERROR] failed to create a new post: ', err);
				res.json({ errors: err.errors });
			}
			else { // else, the new post has been created.
				console.log('[create_post: SUCCESS] successfully created a new post!');

				// add and save that new post to the topic
				Topic.findOne({ _id: req.params.topic_id }, function(err, topic) {
					topic._topic_posts.push(post);
					topic.save();
				});

				res.json( post ); // return back the created new post to the factory.
			}

		});
	}

	// controls retrieving all the posts from a specific topic
	this.index_posts = function(req, res) {

		Post.find({ topic_id: req.params.topic_id }, false, true).populate('_comments').exec(function(err, posts) {
			if (posts == null) { // if posts is null, there are not posts
				console.log("[index_posts: NULL] there are no posts in DB!");
				res.json();
			}
			else {
				console.log("[index_posts: SUCCESS] successfully retrieved all the posts form the DB!");
				res.json(posts);
			}
		});

	}

	// controls the creation of a new comment
	this.create_comment = function(req, res) {
		// first, needs to find the post that the new comment belongs to.
		Post.findOne({ _id: req.params.post_id }, function(err, post) {
			var comment = new Comment(req.body);
			comment._post = post._id;
			comment.save(function(err, comment) {
				if (err) { // the comment validation did  not meet send back the error.
					console.log("[create_comment: ERROR] failed to create a new comment: ", err);
					res.json({ errors: err.errors });
				}
				else {
					console.log("[create_comment: SUCCESS] successfully created a new comment!");
					// add the comment to the post, then save.
					post._comments.push(comment);
					post.save();
					res.json( comment );
				}
			})
		});
	}

	// controls the increment of the 'like' of the post
	this.like_post = function(req, res) {

		Post.update({ _id: req.params.post_id }, {$inc: {like: 1}}, function(err) {
			if (err) {
				console.log("[like_post: ERROR] failed to udpate 'like' of the post: ", err);
			}
			else {
				console.log("[like_post: SUCCESS] successfully updated a 'like' of the post!");
			}
		});
	}

	// controls the increment of the 'dislike' of the post
	this.dislike_post = function(req, res) {

		Post.update({ _id: req.params.post_id }, {$inc: {dislike: 1}}, function(err) {
			if (err) {
				console.log("[dislike_post: ERROR] failed to udpate 'dislike' of the post: ", err);
			}
			else {
				console.log("[dislike_post: SUCCESS] successfully updated a 'dislike' of the post!");
			}
		});
	}

}

module.exports = new PostController();
