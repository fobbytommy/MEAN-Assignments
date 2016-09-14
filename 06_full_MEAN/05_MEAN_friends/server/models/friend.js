var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: [true, "Please put your friend's first name!"]},
	last_name: {type: String, required: [true, "Please put your friend's last name!"]},
	birthday: {type: Date, required: [true, "Please put your friend's birthday!"]}
}, { timestamps: true });

mongoose.model('Friend', FriendSchema);
