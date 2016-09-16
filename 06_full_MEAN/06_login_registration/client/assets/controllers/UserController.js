app.controller('UserController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies, usersFactory) {

	// register: request to the factory
	$scope.register = function() {
		$scope.newUser = {
			password: "",
			confirm_password: ""
		};

		// if password does not match, display warning and do not send the form.
		if ($scope.newUser.password != $scope.newUser.confirm_password) {
			$scope.match_fail = "Your password does not match the confirmed password! Please retype your passwords to match!";
		}
		else { // else passwords match, send the form to the factory
			// empty the matching password error
			$scope.match_fail = "";

			// send request to the factory to attempt registering a user
			usersFactory.register($scope.newUser, function(status, response) {
				if (status == false) { // false: validation errors on the registration form
					// show errors to the user;
					$scope.registerErrors = response;
				}
				else {
					// registration completed, move client to the home page!
					$scope.newUser = {}; // clear registeration form
					$scope.registerErrors = {}; // clear register errors
					// set cookies of user's id for retrieving users information later on
					$cookies.put('user_id', response._id);
					$location.url('/home');
				}
			});
		}
	}

	// login: request to the factory
	$scope.login = function() {
		usersFactory.login($scope.loginUser, function(status, response) {
			if (status == false) {
				// login failed, send the error message to the client
				$scope.loginUser.password = ""; // empty the password
				$scope.loginError = response;
			}
			else {
				// login successed! direct the user to the home page
				$scope.loginUser = {}; // clear login form
				$scope.loginError = {}; // clear login error.
				// set cookies of user's id for retrieving users information later on
				$cookies.put('user_id', response._id);
				$location.url('/home');
			}
		});
	}


}]);
