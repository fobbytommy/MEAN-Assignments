var friends = require('./../controllers/friends');

module.exports = function(app) {
	app.get('/friends', friends.index);			// getting all friends' data
	app.get('/friends/:id', friends.show);		// getting a single friend's data
	app.post('/friends', friends.create); 		// creating a new friend
	app.put('/friends/:id', friends.update) 	// updating an existing friend
	app.delete('/friends/:id', friends.delete) 	// deleting a friend from the db
}
