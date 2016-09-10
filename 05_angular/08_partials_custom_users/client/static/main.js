var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/customizeUsers.html',
			controller: 'CustomizeUsersController'
		})
		.when('/list', {
			templateUrl: 'partials/userList.html',
			controller: 'UserListsController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.factory('userFactory', ['$http', function($http) {
	var factory = {};
	var users = [];

	factory.index = function(callback) {
		callback(users);
	};

	factory.create = function(newUser) {
		users.push(newUser);
	}

	factory.delete = function(idx) {
		users.splice(idx, 1);
	}

	return factory;
}]);

app.controller('CustomizeUsersController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
	var getUsers = function(data) {
		$scope.users = data;
	}

	$scope.users = [];

	// getting user list
	userFactory.index(getUsers);

	$scope.createUser = function(){
		userFactory.create($scope.newUser);
		$scope.newUser = {}; // Reset our form
		$location.url('/list'); // go to '/list' after creating the user
	}
	$scope.deleteUser = function(idx) {
		userFactory.delete(idx);
	}

}]);

app.controller('UserListsController', ['$scope', 'userFactory', function($scope, userFactory) {
	var getUsers = function(data) {
		$scope.users = data;
	}

	$scope.users = [];

	// get users
	userFactory.index(getUsers);

}]);
