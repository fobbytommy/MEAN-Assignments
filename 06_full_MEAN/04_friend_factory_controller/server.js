var express		= require('express'),
	bodyParser	= require('body-parser'),
	path 		= require('path'),
	port		= process.env.PORT || 8000,
	root		= __dirname,
	app 		= express();

app.use( express.static(path.join(root, "./bower_components")));
app.use( express.static(path.join(root, "./client")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./server/config/mongoose");

require("./server/config/routes")(app);

app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});
