var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

function TopicController() {

	this.index = function(req, res) {
		Topic.find({}, function(err, topics) {
			if (err) {
				console.log("[index(topics): ERROR] could not retrieve the topics form the DB: ", err);
			}
			else {
				res.json( topics );
			}
		});
	}

	this.create_topic = function(req, res) {
		// console.log(req.body.username);
		// console.log(req.body.topic);
		// console.log(req.body.description);
		// console.log(req.body.category);

		var topic = new Topic( req.body );

		topic.save( function(err, topic) {
			if (err) { // validation errors. send back the errors
				console.log("[create_topic: ERROR] could not create a new topic: ", err);
				res.json({ errors: err.errors });
			}
			else { // new topic is successfully created and stored into the DB!
				console.log("[create_topic: SUCCESS] successfully created a new topic!");
				// set post count to 0 before send
				topic.post_count = 0;
				res.json( topic ); // return the topic object back to the calling factory
			}
		});
	}

	this.single_topic = function(req, res) {
		console.log(req.params.id);
		Topic.findOne({ _id: req.params.id }, function(err, topic) {
			if (topic == null) { // if null, there is no topic associated with the _id.
				res.json({errors: "The topic for the id was not found"});
			}
			else {
				console.log("[single_topic: SUCCESS] successfully retrieved a topic from the DB!");
				res.json(topic);
			}
		});
	}

}


module.exports = new TopicController();
