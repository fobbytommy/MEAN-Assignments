app.controller("ProfileController", ['$scope', '$location', '$cookies', '$routeParams', 'usersFactory', function($scope, $location, $cookies, $routeParams, usersFactory) {
	// immediate function to prevent non logged-in user access
	(function() {
		// if cookie does not exist, redirect client to the login page
		if ($cookies.get('discussion_username') == undefined) {
			$location.url('/login');
		}
		else { // else retrieve user's profile data based on the $routeParams.username
			$scope.username = $routeParams.username;
			usersFactory.profileData($scope.username, function(response) {
				$scope.count = response;

			});
		}
	})();

	$scope.logout = function() {
		$cookies.remove('discussion_username');
		$location.url('/login');
	}
}]);
