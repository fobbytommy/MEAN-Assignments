var mongoose	= require('mongoose'),
	path		= require('path'),
	fs			= require('fs'),
	dbURI		= "mongodb://localhost/discussion_board",
	models_path	= path.join(__dirname, './../models');

mongoose.connect( dbURI );

fs.readdirSync(models_path).forEach( function(file) {
	if(file.indexOf('.js') >= 0) {
		require(path.join(models_path, file));
	}
});
