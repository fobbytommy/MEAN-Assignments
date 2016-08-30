module.exports = function (app, Quote) {

	app.get('/', function(req, res) {
		res.render('index');
	});


	// creating a quote
	app.post('/quotes', function(req, res) {
		var quote = new Quote({
			name: req.body.name,
			quote: req.body.quote,
			likes: 0
		});

		quote.save( function(err) {
			if (err) {
				console.log("something went wrong ", err);
			}
			else {
				console.log("successfully added a new quote!");
				res.redirect('/quotes');
			}
		});
	});

	app.get('/quotes', function(req, res) {
		Quote.find({}).sort({ likes: -1 }).exec(function(err, quotes) {
			if (err) {
				console.log("something went wrong ", err);
			}
			else {
				console.log("successfully retrieved all quotes!");
				res.render('quotes', { quotes: quotes });
			}
		});
	});

	// increment likes
	app.post('/likes/:id', function(req, res) {
		Quote.update({_id: req.params.id }, {$inc: {likes: 1}}, function(err) {
			if (err) {
				console.log('something went wrong');
			}
			else {
				console.log('successfully increased a like!');
				res.redirect('/quotes');
			}
		});

	});

};
