var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var port = 8000;

// connect to mongodb
require('./server/config/mongoose');

// use and set bodyParser, static, and views 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require and invoking the routes.js
var routes_setter = require('./server/config/routes');
routes_setter(app);

var server = app.listen(port, function (){
	console.log('listening to port: ', port);
});
