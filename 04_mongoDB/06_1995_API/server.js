var express = require('express');
var bodyParser = require('body-parser');
var port = 8000;

var app = express();

app.use(bodyParser.json());

// require mongodb db connection and the db
require('./server/config/mongoose');

// connect with routes
var routes_setter = require('./server/config/routes');
routes_setter(app);


app.listen(port, function() {
	console.log("listening on port: ", port);
});
