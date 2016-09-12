// newController for new.html partial
app.controller('newController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory) {
	$scope.addUser = function(){
		userFactory.create($scope.user);
		$location.url("/index");
	}
}]);
