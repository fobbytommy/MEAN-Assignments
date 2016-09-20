var app = angular.module("app", ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/dashboard', {
			templateUrl: "static/partials/dashboard.html",
			controller: "DashboardController"
		})
		.when('/login', {
			templateUrl: "static/partials/login.html",
			controller: "UserController"
		})
		.when('/topic/:id', {
			templateUrl: "static/partials/topic.html",
			controller: "TopicController"
		})
		.when('/user/:username', {
			templateUrl: "static/partials/user_profile.html",
			controller: "ProfileController"
		})
		.otherwise({
			redirectTo: '/dashboard'
		});
}]);
