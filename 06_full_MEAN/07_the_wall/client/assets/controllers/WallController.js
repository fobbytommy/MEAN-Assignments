app.controller("WallController", ['$scope', '$location', '$cookies', 'wallsFactory', function($scope, $location, $cookies, wallsFactory) {
	$scope.posts = [];

	// callback function for populating the posts
	var getPosts = function (posts) {
		$scope.posts = posts;
	};

	// immediate function to prevent non logged-in user access
	(function() {
		// if cookie does not exist, redirect client to the login page
		if ($cookies.get('wall_username') == undefined) {
			$location.url('/login');
		}
		// else store the cookie to the $scope.username for later use
		// and retrieve all the posts by calling the factory
		else {
			$scope.username = $cookies.get('wall_username');
			// get all the posts!
			wallsFactory.index(getPosts);
		}
	})(); // end of the immediate function

	// logout user, simply remove cookie and redirect to login page
	$scope.logout = function() {
		$cookies.remove("wall_username");
		$location.url('/login');
	}

	// sending request to the factory to create a new post
	$scope.create_post = function() {
		wallsFactory.create_post($scope.username, $scope.newPost, function(status, response) {
			if (status == false) { // if returned 'false', validation has failed.
				$scope.postError = response;
			}
			else {	// else the new post has been added
				$scope.newPost = {}; // clear the new post form
				$scope.postError = {};  // clear the post error
				$scope.posts.push(response); // add to list of posts
			}
		});
	}

	// sending request to the factory to create a new comment
	$scope.create_comment = function(index) {
		// PER CURRENT FORMAT, it is ordered by descending CreatedAt.
		// therefore 'index' needs to be reversed before sending the request to the factory.
		var id = $scope.posts[$scope.posts.length - 1 - index]._id;
		var newComment = $scope.posts[$scope.posts.length - 1 - index].newComment;

		wallsFactory.create_comment(id, $scope.username, newComment, function(status, response){
			if (status == false) { // validation error, send back the error to display
				$scope.commentError = response;
			}
			else { // else the comment has been created successfully
				$scope.commentError = {}; // clear comment error
				// clear comment form
				delete $scope.posts[$scope.posts.length - 1 - index].newComment;
				// added to the popluated comments of the post
				$scope.posts[$scope.posts.length - 1 - index]._comments.push(response);
			}
		});

	}

}]);
