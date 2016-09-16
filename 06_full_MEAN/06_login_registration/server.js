var express 	= require('express'),
	bodyParser	= require('body-parser'),
	path 		= require('path'),
	root		= __dirname,
	port		= process.env.PORT || 8000,
	app			= express();

// set static files locations
app.use( express.static(path.join(root, "client")));
app.use( express.static(path.join(root, "bower_components")));

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require mongoose config
require('./server/config/mongoose');

// require routes and invoke it
require('./server/config/routes')(app);

app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});
