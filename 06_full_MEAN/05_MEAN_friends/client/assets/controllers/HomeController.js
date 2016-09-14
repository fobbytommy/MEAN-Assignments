// HomeController (MAIN)
app.controller('HomeController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
	$scope.friends = [];

	// callback for getting all the friends from the data
	var getFriends = function(data) {
		$scope.friends = data;
	};
	// contacting the factory to get friends data
	friendsFactory.index(getFriends);

	// making a call to factory to delete a friend from the list
	$scope.delete = function(id) {
		friendsFactory.delete(id, getFriends);
	}

}]);
