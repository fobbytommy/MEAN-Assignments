// create a module and injecting angular dependecies
var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

// configuring routes and controllers for the partials
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/wall', {
			templateUrl: "static/partials/wall.html",
			controller: "WallController"
		})
		.when('/login', {
			templateUrl: "static/partials/login.html",
			controller: "UserController"
		})
		.when('/register', {
			templateUrl: "static/partials/register.html",
			controller: "UserController"
		})
		.otherwise({
			redirectTo: '/wall'
		});
}]);
