var express = require('express');
var path = require('path');

var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(port, function(){
	console.log('listening to port: ', port);
});

var route = require('./routes/route')(app, server);
