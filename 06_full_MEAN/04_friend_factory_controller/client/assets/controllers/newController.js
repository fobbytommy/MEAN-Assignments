app.controller("newController", ['$scope', '$location' ,'friendsFactory', function($scope, $location, friendsFactory) {
/*
	THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
	WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
	var getFriends = function(data) {
		$scope.friends = data;
	}
	// var index = function() {
	// 	friendsFactory.index(function(returnedData) {
	// 		$scope.friends = returnedData;
	// 		// console.log($scope.friends);
	// 	});
	// };
	$scope.friends = [];

	friendsFactory.index(getFriends);

	$scope.delete = function(id) {
		friendsFactory.delete(id, function(returnedData) {
			$scope.friends = returnedData;
		});
	}
	$scope.create = function() {
		console.log($scope.newFriend);
		friendsFactory.create($scope.newFriend, function(returnedData) {
			$scope.friends = returnedData;
		});
		$scope.newFriend = {};

	}

	/*
		OUR $scope.create function goes here <-- $scope because we need to access this method
		with ng-submit or ng-click (from the form in the previous assignment).
		Want to all of the friends when we get back? We can re-run index.
	*/
}]);
