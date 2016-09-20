app.controller("DashboardController", ['$scope', '$location', '$cookies', 'usersFactory', 'topicsFactory', function($scope, $location, $cookies, usersFactory, topicsFactory) {
	$scope.topics = [];

	// callback function for obtaining all the topics
	var getTopics = function(topics) {
		$scope.topics = topics;
	};

	// immediate function to prevent non logged-in user access
	(function() {
		// if cookie does not exist, redirect client to the login page
		if ($cookies.get('discussion_username') == undefined) {
			$location.url('/login');
		}
		else { // else retrieve user's data and all the topics from the DB
			$scope.username = $cookies.get('discussion_username');
			topicsFactory.index(getTopics);
		}
	})();

	$scope.create_topic = function() {
		topicsFactory.create_topic($scope.username, $scope.newTopic, function(status, response) {
			if (status == false) {
				$scope.topicErrors = response;
			}
			else {
				// push to the topics for realtime view update
				$scope.topics.push(response);

				$scope.topicErrors = {}; // clear topic errors
				$scope.newTopic = {}; // clear the topic form
			}
		});
	}

	$scope.logout = function() {
		$cookies.remove('discussion_username');
		$location.url('/login');
	}

}]);
