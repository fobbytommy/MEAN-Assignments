var express = require('express');
var app = express();

var port = 8000;
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dojo');
var QuoteSchema = new mongoose.Schema({
	name: {type: String},
	quote: {type: String},
	likes: {type: Number}
}, {timestamps: true});
// store the Schema under the name 'Quote'
mongoose.model('Quote', QuoteSchema);
// Retrieve the Schema called 'Quote' and store it to the variable 'Quote'
var Quote = mongoose.model('Quote');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(port, function() {
	console.log('listening to port: ', port);
});

var route = require('./routes/route')(app, Quote);
