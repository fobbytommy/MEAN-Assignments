var express		= require('express'),
	bodyParser	= require('body-parser'),
	path 		= require('path'),
	port		= process.env.PORT || 8000,
	root		= __dirname,
	app 		= express();

app.use( express.static(path.join(root, "./bower_components")));
app.use( express.static(path.join(root, "./client")));

app.set(bodyParser.urlencoded({ extended: true }));
app.set(bodyParser.json());

require("./server/config/mongoose");

var route_setter = require("./server/config/routes");
route_setter(app);

app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});
