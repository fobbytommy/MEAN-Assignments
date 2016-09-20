app.factory("usersFactory", ['$http', function($http) {

	function UsersFactory() {

		// ajax call to the server for login / creation of a new username
		this.login = function(loginUser, callback) {
			$http.post('/user', loginUser).then(
				function success(response) {
					if (typeof(response.data.errors) != "undefined") {
						// send back the validation error
						callback(false, response.data.errors);
					}
					else {
						// login / creation of a new username is successful!
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log("[Login: ERROR] could not login a user");
				}
			);
		}

		// ajax call to the server to retrieve username profile data.
		this.profileData = function(username, callback) {
			$http.get('/user/' + username).then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log("[profileData: ERROR] could not get user's profile data.");
				}
			);
		}

	}

	return new UsersFactory();
}]);
