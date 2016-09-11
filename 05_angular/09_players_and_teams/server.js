var express = require('express'),
	path 	= require('path'),
	app		= express(),
	root	= __dirname,
	port 	= 8000;

app.use(express.static(path.join(root, "client")));

app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});
