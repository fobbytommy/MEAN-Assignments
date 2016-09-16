app.factory("usersFactory", ['$http', function($http) {

	function UsersFactory() {

		// Login: factory making an ajax call to the server to login a user.
		this.login = function(loginUser, callback) {
			$http.post('/users/login', loginUser).then(
				function success(response) {

					// if login was NOT successful
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else { // else login was successful
						callback(true, response.data);
					}

				},
				function error(response) {
					console.log('[Login: ERROR] login failed: ' + response);
				}
			);
		}

		// register: factory making ajax call to the server for validation / creating a new user
		this.register = function(newUser, callback) {
			$http.post('/users/register', newUser).then(
				function success(response) {

					if (typeof(response.data.errors) != 'undefined') {
						// we have an errors (invalid form)
						callback(false, response.data.errors);
					}
					else {
						// form was valid & successfully registered!
						callback(true, response.data);
					}

				},
				function error(response) {
					console.log('[Register: ERROR] registration failed: ' + response);
				}
			);
		}

		// retrieve user's info when they login or register
		this.show = function(user_id, callback) {
			$http.get('/users/' + user_id).then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log('[Show: ERROR] failed to retrieve users information: ' + response);
				}
			);
		}

	}

	return new UsersFactory();
}]);
