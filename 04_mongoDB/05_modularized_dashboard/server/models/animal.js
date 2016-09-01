var mongoose = require('mongoose');

// Create a Schema for Animals
var AnimalSchema = new mongoose.Schema({
	name: {type: String},
	nickname: {type: String},
	height: {type: Number},
	weight: {type: Number}
}, {timestamps: true})
// Store the Schema under the name 'Animal'
mongoose.model('Animal', AnimalSchema);
