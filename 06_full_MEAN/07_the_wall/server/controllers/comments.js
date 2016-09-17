var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

function CommentsController () {
	this.create_comment = function(req, res) {
		console.log(req.params.id);
		console.log(req.body.username);
		console.log(req.body.comment);

		Post.findOne({_id: req.params.id}, function(err, post) {
			// data from the form on the front end
			var comment = new Comment(req.body);
			// setting the reference
			comment._post = post._id;
			// now save both to the DB
			comment.save(function(err, comment) {
				if (err) {
					console.log("[create_comment: ERROR] comment validation failed: ", err);
					res.json({ errors: err.errors });
				}
				else { // else comment validation is good save to post
					post._comments.push(comment);
					post.save(); // should not have error since its just saving the comment
					res.json(comment);
				}
			});
		});


	}
}

module.exports = new CommentsController();
