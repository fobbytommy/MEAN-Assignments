app.controller("UserController", ['$scope', '$location', '$cookies','usersFactory', function($scope, $location, $cookies, usersFactory) {

	$scope.login = function() {
		usersFactory.login($scope.loginUser, function(status, response) {
			if (status == false) { // validation error,
				$scope.loginError = response;
			}
			else {
				$scope.loginError = {}; // clear errors
				$scope.loginUser = {}; // clear login form
				// save a cookie of the 'unique' username for later use.
				$cookies.put('discussion_username', response.username);
				$location.url('/dashboard');
			}
		});
	}

}]);
