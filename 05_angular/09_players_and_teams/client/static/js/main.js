var myApp = angular.module('app', ['ngRoute']);

// playerFactory
myApp.factory("playerFactory", ['$http', function($http) {
	var factory = {};

	// initializing the list of players
	var players = [
		{ name: "Tommy", team: "Dodgers" },
		{ name: "Megan", team: "" },
		{ name: "Brittany", team: "" },
		{ name: "Olivia", team: "49ers" }
	];

	// pass the player list to a controller
	factory.index = function(callback) {
		callback(players);
	}

	// adding new player to the list
	factory.create = function(newPlayer){
		newPlayer.team = ""; // new player has no initial team
		players.push(newPlayer);
	}

	// remove the player form the list
	factory.delete = function(idx) {
		players.splice(idx, 1);
	}

	// set a player's team name
	factory.addPlayerToTeam = function(data){
		players[data.playerIdx].team = data.team;
	}

	// reset a player's team name to an empty string
	factory.removePlayerFromTeam = function(idx){
		players[idx].team = "";
	}

	return factory;
}]);

// teamFactory
myApp.factory("teamFactory", ['$http', function($http) {
	var factory = {};

	// initializing our list of teams
	var teams = [
		{ name: "Dodgers" },
		{ name: "Rangers" },
		{ name: "Cardinals" },
		{ name: "Giants" }
	];

	// Pass the team list to the TeamsController
	factory.index = function(callback) {
		callback(teams);
	}

	// adding a new team to the list
	factory.create = function(newTeam){
		teams.push(newTeam);
	}

	factory.delete = function(idx) {
		teams.splice(idx, 1);
	}

	return factory;
}]);

// PlayersController
myApp.controller("PlayersController", ['$scope', 'playerFactory', function($scope, playerFactory) {
	function getPlayers(data) {
		$scope.players = data;
	};

	$scope.players = [];

	// get the player's list from the playerFactory
	playerFactory.index(getPlayers);

	// add new player to the players' list in the playerFactory
	$scope.createPlayer = function() {
		playerFactory.create($scope.newPlayer);
		$scope.newPlayer = {}; // reset the player's form
	}

	// pass $index to playerFactory to delete the player from the list
	$scope.deletePlayer = function(idx) {
		playerFactory.delete(idx);
	}

}]);



// TeamsController
myApp.controller("TeamsController", ['$scope', 'teamFactory', function($scope, teamFactory) {
	function getTeams(data) {
		$scope.teams = data;
	}

	$scope.teams = [];

	// getting teams from the teamFactory
	teamFactory.index(getTeams);

	// Pass new team info to the TeamFactory
	$scope.createTeam = function(){
		teamFactory.create($scope.newTeam);
		$scope.newTeam = {};
	}

	// pass $index to teamFacotry to delete the team from the teams list
	$scope.deleteTeam = function(idx){
		teamFactory.delete(idx);
	}

}]);

// AssociationsController
myApp.controller("AssociationsController", ['$scope', 'playerFactory', 'teamFactory', function($scope, playerFactory, teamFactory) {
	$scope.players = [];
	$scope.teams = [];

	function getPlayers(data) {
		$scope.players = data;
	}
	function getTeams(data) {
		$scope.teams = data;
	}

	// getting players and teams lists from the each factory
	playerFactory.index(getPlayers);
	teamFactory.index(getTeams);

	// assign player to the team
	$scope.assignPlayerToTeam = function() {
		playerFactory.addPlayerToTeam($scope.newAssoc);
	}

	// pass $index to playerFactory to remove the player from the team
	$scope.deletePlayerFromTeam = function(idx) {
		playerFactory.removePlayerFromTeam(idx);
	}

}]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when('/players', {
			templateUrl: "static/partials/players.html",
			controller: "PlayersController"
		})
		.when('/teams', {
			templateUrl: "static/partials/teams.html",
			controller: "TeamsController"
		})
		.when('/associations', {
			templateUrl: "static/partials/associations.html",
			controller: "AssociationsController"
		})
		.otherwise({
			redirectTo: '/players'
		});
});
