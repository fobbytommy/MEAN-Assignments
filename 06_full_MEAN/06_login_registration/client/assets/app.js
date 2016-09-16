var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: "static/partials/home.html",
			controller: "HomeController"
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
			redirectTo: '/home'
		});
}]);
