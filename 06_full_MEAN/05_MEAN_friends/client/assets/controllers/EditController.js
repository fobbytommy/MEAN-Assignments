// EditController
app.controller('EditController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory) {
	$scope.friend = {};

	var getFriend = function(data) {
		$scope.friend = data;

		$scope.updateFriend = { first_name: data.first_name,
								last_name: data.last_name,
								birthday: new Date(data.birthday)	};
	}
	friendsFactory.show($routeParams.id, getFriend);

	$scope.update = function() {
		friendsFactory.update($scope.friend._id, $scope.updateFriend);
		$location.url('/show/' + $scope.friend._id);
	}
}]);
