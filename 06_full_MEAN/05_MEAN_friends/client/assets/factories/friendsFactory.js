// friendsFactory
app.factory("friendsFactory", ['$http', function($http) {
	var friends = [];
	var friend = {};

	function FriendsFactory() {
		var _this = this;

		this.index = function(callback) {
			$http.get('/friends').then(
				function successCallback(response) {
					friends = response.data;
					callback(friends);
				},
				function errorCallback(response) {
					console.log(response.data);
				}
			);
		}

		this.create = function(newFriend) {
			$http.post('/friends', newFriend).then(
				function successCallback(response) {
					friends = response.data;
				},
				function errorCallback(response) {
					// when there is an error.
				}
			);
		}

		this.delete = function(id, callback) {
			$http.delete('/friends/' + id).then(
				function successCallback(response) {
					friends = response.data;
					callback(friends);
				},
				function errorCallback(response) {
					// when there is an error.
				}
			);
		}

		this.show = function(id, callback) {
			$http.get('/friends/' + id).then(
				function successCallback(response) {
					friend = response.data;
					callback(friend);
				},
				function errorCallback(response) {
					// when there is an error.
				}
			);
		}

		this.update = function(id, updateFriend) {
			// console.log(id, updateFriend);
			$http.put('/friends/' + id, updateFriend).then(
				function successCallback(response) {
					// probably need to do nothing
				},
				function errorCallback(response) {
					// when there is an error.
				}
			);
		}

	}

	return new FriendsFactory();
}]);
