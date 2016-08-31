var express = require('express');
var app = express();

var port = 8000;
var path = require('path');
var bodyParser = require('body-parser');

// establising db connection and making collections / associations
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dojo');
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: { type: String, required: [true, "Your name is empty!"], minlength: [4, "Your name must be longer than 4 characters!"]},
	message_text: { type: String, required: [true, "Message is empty!"]},
	_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamps: true });
var CommentSchema = new mongoose.Schema({
	_message: { type: Schema.Types.ObjectId, ref: 'Message'},
	name: { type: String, required: [true, "Your name is empty!"], minlength: [4, "Your name must be longer than 4 characters!"]},
	comment_text: { type: String, required: [true, "Comment is empty!"]}
}, { timestamps: true });
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var message_errors;

app.get('/', function(req, res) {
	Message.find({}, false, true).populate('_comments').exec(function(err, messages){
	      res.render('index.ejs', {messages: messages, errors: message_errors });
	});

});

// adding a message
app.post('/message', function(req, res) {
	var message = new Message(req.body);
	message.save(function(err) {
		if (err) {
			// res.render('index', { errors: message.errors } );
			message_errors = message.errors;
			res.redirect('/');
		}
		else {
			res.redirect('/');
			message_errors = undefined;
		}
	})
})

// adding a comment
app.post('/message/:id', function(req, res) {
	Message.findOne({_id: req.params.id}, function(err, message) {
		// data from form on the front end
		var comment = new Comment(req.body);
		// set the reference:
		comment._message = message._id;
		// save both to the DB
		comment.save(function(err) {
			if (err) {
				message_errors = comment.errors;
				res.redirect('/');
			}
			else {
				message._comments.push(comment);
				message.save(function(err) {
					if (err) {
						// res.render('index', { errors: message.errors } );
						message_errors = comment.errors;
						res.redirect('/');
					}
					else {
						res.redirect('/');
						message_errors = undefined;
					}
				});
			}

		});
	});
});

app.listen(port, function() {
	console.log('listening to port: ', port);
});
