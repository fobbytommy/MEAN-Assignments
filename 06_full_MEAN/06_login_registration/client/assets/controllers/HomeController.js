app.controller('HomeController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies, usersFactory) {

	(function (){
		if ($cookies.get('user_id') == undefined) {
			$location.url('/login');
		}
		else {
			usersFactory.show($cookies.get('user_id'), function(response) {
				$scope.user = {
					email: response.email,
					first_name: response.first_name,
					last_name: response.last_name,
					birthday: response.birthday,
					joined_on: response.createdAt
				}
			});
		}
	})();

	// logging out user. Simply remove the cookie user_id and redirect
	$scope.logout = function () {
		$cookies.remove('user_id');
		$location.url('/login');
	}

}]);
