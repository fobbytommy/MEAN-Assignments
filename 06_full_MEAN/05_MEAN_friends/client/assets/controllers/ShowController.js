// ShowController
app.controller('ShowController', ['$scope', '$location', '$routeParams', 'friendsFactory', function($scope, $location, $routeParams, friendsFactory) {
	$scope.friend = {};

	var getFriend = function(data) {
		$scope.friend = data;
	}

	friendsFactory.show($routeParams.id, getFriend);

}]);
