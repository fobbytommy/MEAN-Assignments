var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

function TopicController() {

	// controls retrieving all the topics for the dashboard page
	this.index = function(req, res) {
		Topic.find({}, function(err, topics) {
			if (err) {
				console.log("[index(topics): ERROR] could not retrieve the topics form the DB: ", err);
			}
			else { // even if the topics is null (empty), send it. shouldn't matter.
				res.json( topics );
			}
		});
	}

	// controls the creation of a new topic
	this.create_topic = function(req, res) {
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

	// controls the retrieval of a single topic based on given _id
	this.single_topic = function(req, res) {

		Topic.findOne({ _id: req.params.id }, function(err, topic) {
			if (topic == null) { // if null, there is no topic associated with the _id.
				console.log("[single_topic: ERROR] failed to retrieve a topic from the DB!");
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
