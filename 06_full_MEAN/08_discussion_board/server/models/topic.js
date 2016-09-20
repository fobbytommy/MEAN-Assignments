var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new mongoose.Schema({

	username: 	{
					type: String
				},
	topic: 	{
				type: String,
				required: [true, "Topic is required."],
				minlength: [10, "Topic seems too short. Please write your topic in detail."],
				maxlength: [150, "Topic seems too long. Maximum length of the topic is 150."]
			},
	description: 	{
						type: String,
						required: [true, "Description is required."],
						minlength: [50, "Description seems too short. Please write more than 50 characters"],
						maxlength: [1001, "Description seems too long. Keep it under 1000."]
					},
	category: 	{
					type: String
				},
	// one way assocation to just store the post's '_id' 
	_topic_posts: [{
				type: Schema.Types.ObjectId,
				ref: "Post"
			}]

}, { timestamps: true });

mongoose.model('Topic', topicSchema);
