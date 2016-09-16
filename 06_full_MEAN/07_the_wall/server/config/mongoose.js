var mongoose 	= require('mongoose'),
	path 		= require('path'),
	fs			= require('fs'),
	root		= __dirname,
	models_path	= path.join(root, './../models'),
	dbURI 		= "mongodb://localhost/the_wall";

mongoose.connect(dbURI);

fs.readdirSync(models_path).forEach( function(file) {
	if (file.indexOf('.js') >= 0) {
		require( path.join(models_path, file));
	}
});
