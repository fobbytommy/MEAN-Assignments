var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 8000;

mongoose.connect('mongodb://localhost/animal_dashboard');
// Create a Schema for Animals
var AnimalSchema = new mongoose.Schema({
	name: {type: String},
	nickname: {type: String},
	height: {type: Number},
	weight: {type: Number}
}, {timestamps: true})
// Store the Schema under the name 'Animal'
mongoose.model('Animal', AnimalSchema);
// Retrieve the Schema called 'Animal' and store it to the variable Animal
var Animal = mongoose.model('Animal');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(port, function (){
	console.log('listening to port: ', port);
});

var route = require('./routes/route')(app, Animal);
