var express = require('express'),
	path 	= require('path'),
	root	= __dirname,
	port 	= process.env.PORT || 8000,
	app		= express();

app.use( express.static( path.join( root, 'client')));

app.listen( port, function() {
	console.log(`listening on port ${ port }`);
});
