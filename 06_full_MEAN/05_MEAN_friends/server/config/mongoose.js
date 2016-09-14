var mongoose	= require('mongoose'),
	path 		= require('path'),
	fs			= require('fs'),
	models_path = path.join(__dirname, "./../models"),
	dbURI		= "mongodb://localhost/review";

mongoose.connect(dbURI);

fs.readdirSync(models_path).forEach( function(file) {
	if (file.indexOf('.js') >= 0) {
		require( path.join(models_path, file) );
	}
});
