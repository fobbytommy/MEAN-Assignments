var	express		= require('express'),
	bodyParser	= require('body-parser'),
	path 		= require('path'),
	root		= __dirname,
	port		= process.env.PORT || 8000,
	app			= express();

// set the locations of the static files
app.use( express.static( path.join( root, "client" )));
app.use( express.static( path.join( root, "bower_components" )));
// set to use body-parser
app.use( bodyParser.urlencoded({ extended: true}));
app.use( bodyParser.json());

// require mongoose configurations, connections, and models
require('./server/config/mongoose');
// require routes and invoke it using 'app'
require('./server/config/routes')(app);

// listen to the port
app.listen( port, function() {
	console.log(`listening on port ${ port }`);
});
