var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// post model
var postSchema = new mongoose.Schema({

	// topic_id will be used to know which topic the posts are belong to.
	topic_id: 	{
					type: String
				},
	// username will be used to tell which user has wrote the post.
	username: 	{
					type: String
				},
	post: 	{
				type: String,
				required: [true, "Please write something before you add a post!"],
				minlength: [21, "Your post is too short! Please write more than 20 characters!"],
				maxlength: [999, "Your post is too long! Please write less than 1000 characters!"],
			},
	like: 	{
				type: Number,
				default: 0
			},
	dislike: 	{
					type: Number,
					default: 0
				},
	// post can have many comments. (one-to-many relationship)
	_comments: [{
					type: Schema.Types.ObjectId,
					ref: "Comment"
				}]

}, { timestamps: true });

// comment model
var commentSchema = new mongoose.Schema({
	// a comment can only belong to a one specific post
	_post: 	{
				type: Schema.Types.ObjectId,
				ref: "Post"
			},
	// username will be used to tell which user has wrote the comment.
	username: 	{
					type: String
				},
	comment: 	{
					type: String,
					required: [true, "Please write something before you add a comment!"],
					minlength: [9, "Your comment is too short! Please write more than 8 characters!"],
					maxlength: [499, "Your comment is too long! Please write less than 500 characters!"]
				}

}, { timestamps: true });

mongoose.model('Post', postSchema);
mongoose.model('Comment', commentSchema);
