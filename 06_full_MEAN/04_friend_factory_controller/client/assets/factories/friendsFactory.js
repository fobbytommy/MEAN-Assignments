app.factory("friendsFactory", ['$http', function($http) {
	// constructor for our factory
	var friends = [];
	var friend = [];
	function friendsFactory() {
		var _this = this;
		// this.create = function(newFriend, callback) {
		// 	$http.post('/friends', newFriend).then(function(returned_data) {
		// 		console.log(returned_data.data);
		// 		if (typeof(callback) == 'function') {
		// 			callback(returned_data.data);
		// 		}
		// 	});
		// };
		this.create = function(newFriend, callback) {
			$http.post('/friends', newFriend).then(function(returned_data) {
				friends = returned_data.data;
				callback(friends);
			});
		};
		this.update = function(updatedFriend) { // what parameters do we need?
			$http.put("/friends/" + updatedFriend.id, updatedFriend).then(
				function(reponse) {
					// failure callback
				},
				function(response) {
					// failure callback
				}
			)
			// $http({
			// 	method: "PUT",
			// 	url: "/friends/" + updatedFriend.id,
			// 	data: {updatedFriend}}).then(function(returned_data) {
			//
			// });
			// $http.put('/friends/' + updatedFriend.id, {params: updatedFriend.id, body: updatedFriend }).then(function(returned_data){
			// 	//do nothing
			// })
		};
		this.index = function(callback) {
			//call this method if you want to update or set the friends variable
			$http.get('/friends').then(function(returned_data) {
				// console.log(returned_data.data);
				friends = returned_data.data;
				callback(friends);
			});
			// Note: above code can be shorted to $http.get('/friends').then(callback);
			// But only if you only want to run the callback from the controller.
		};
		this.delete = function(id, callback) { // what parameters do we need?
			$http.delete("/friends/" + id).then(function(returned_data) {
				friends = returned_data.data;
				callback(friends);
			})
		};
		this.show = function() { // waht parameters do we need?
			// Your code here
		};
		// Sometimes you might not want to make a DB call, and just get the information stored in the factory.
		this.getFriends = function(callback) {
			callback(friends);
		};
		this.getFriend = function($index, callback) {
			callback(friends[$index]);
		};
	}
	console.log(new friendsFactory());
	return new friendsFactory();
}]);
