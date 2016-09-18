var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

function CommentsController () {

	// controller which create a new comment.
	this.create_comment = function(req, res) {

		// due to the association, need to find the post that the new comment
		// is associated with first.
		Post.findOne({_id: req.params.id}, function(err, post) {
			// data from the form on the front end
			var comment = new Comment(req.body);
			// setting the reference
			comment._post = post._id;
			// now save both to the DB
			comment.save(function(err, comment) {
				if (err) { // if err, the new comment did not meet the validation requirement. Send errors.
					console.log("[create_comment: ERROR] comment validation failed: ", err);
					res.json({ errors: err.errors });
				}
				else { // else comment validation is good. new comment is stored in DB. Now, save to the associated post.
					post._comments.push(comment);
					post.save(); // should not have error since its just saving the comment
					res.json(comment);
				}
			});
		});
		
	}

}

module.exports = new CommentsController();
