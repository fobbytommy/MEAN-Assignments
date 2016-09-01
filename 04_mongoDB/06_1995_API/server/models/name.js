var mongoose = require('mongoose');
var NameSchema = mongoose.Schema({
	name: {type: String}
})
mongoose.model('Name', NameSchema);
