app.controller("TopicController", ['$scope', '$location', '$cookies', '$routeParams', 'topicsFactory', function($scope, $location, $cookies, $routeParams, topicsFactory) {
	// immediate function to prevent non logged-in user access
	(function() {
		// if cookie does not exist, redirect client to the login page
		if ($cookies.get('discussion_username') == undefined) {
			$location.url('/login');
		}
		else { // else retrieve user's data and all the topics from the DB
			$scope.username = $cookies.get('discussion_username');
			topicsFactory.single_topic($routeParams.id , function(status, topic) {
				if (status == false) {// the topic cannot be found using the id
					// redirect the client to the dashboard
					$location.url('/dashboard');
				}
				else {
					$scope.topic = topic;
				}
			});
			// retrieve all the posts based on the topic's id
			topicsFactory.index_posts($routeParams.id, function(posts) {
				$scope.posts = posts;
			});
		}
	})();

	$scope.create_post = function(topic_id) {

		topicsFactory.create_post(topic_id, $scope.username, $scope.newPost, function(status, response) {
			if (status == false) {
				$scope.postError = response;
			}
			else {
				$scope.postError = {}; // clear post error
				$scope.newPost = {}; // clear post form
				$scope.posts.push(response);
			}
		});
	}

	$scope.create_comment = function(index) {
		var newComment = $scope.posts[$scope.posts.length - 1 - index].newComment;
		var post_id = $scope.posts[$scope.posts.length - 1 - index]._id;

		topicsFactory.create_comment(post_id, $scope.username, newComment, function(status, response) {
			if (status == false) {
				$scope.commentError = response;
			}
			else {
				$scope.commentError = {}; // clear comment error
				delete $scope.posts[$scope.posts.length - 1 - index].newComment; // delete newComment property from a specific post object
				$scope.posts[$scope.posts.length - 1 - index]._comments.push(response); // add an new comment to the post for realtime view update
			}
		});

	}

	$scope.like_post = function(index) {
		var post_owner = $scope.posts[$scope.posts.length - 1 - index].username;
		if ($scope.username == post_owner) {
			// cannot vote your own stuff...
			// display error
			console.log("you cannot like your own post!");
		}
		else {
			var post_id = $scope.posts[$scope.posts.length - 1 - index]._id;
			topicsFactory.like_post(post_id); // tell factory to update the DB, no need to callback since its just +1 to the like
			// update it on the view for realtime update
			$scope.posts[$scope.posts.length - 1 - index].like += 1;
		}
	}

	$scope.dislike_post = function(index) {
		var post_owner = $scope.posts[$scope.posts.length - 1 - index].username;
		if ($scope.username == post_owner) {
			// cannot vote your own stuff...
			// display error
			console.log("you cannot dislike your own post!");
		}
		else {
			var post_id = $scope.posts[$scope.posts.length - 1 - index]._id;
			topicsFactory.dislike_post(post_id); // tell factory to update the DB, no need to callback since its just +1 to the dislike
			// update it on the view for realtime update
			$scope.posts[$scope.posts.length - 1 - index].dislike += 1;
		}
	}

	$scope.logout = function() {
		$cookies.remove('discussion_username');
		$location.url('/login');
	}

}]);
