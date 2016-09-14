// NewController
app.controller('NewController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {
	$scope.create = function() {
		friendsFactory.create($scope.newFriend);
		$scope.newFriend = {}; // clear the new friend form
		$location.url('/'); // redirect to the home.html
	}
}]);
