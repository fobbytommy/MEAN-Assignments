app.factory("wallsFactory", ['$http', function($http) {

	function WallsFactory() {

		// call to the backend-server to obtain all the posts populated with the comments
		this.index = function(callback) {
			$http.get('/posts').then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log('[Index: ERROR] failed to retrieve the posts from DB: ' + response);
				}
			);
		}

		// call to the server to create a new post
		this.create_post = function(username, newPost, callback) {
			newPost.username = username;
			$http.post('/posts', newPost).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Create_post: ERROR] Creating a new post failed: ' + response);
				}
			);
		}

		// call to the server to create a new comment
		this.create_comment = function(id, username, newComment, callback) {

			var newComment = {
								username: username,
								comment: newComment
							};

			// id is the '_id' of the 'post' that the new 'comment' will be added to.
			$http.post('/comments/' + id, newComment).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log('[Create_comment: ERROR] Creating a new comment failed: ' + response);
				}
			);
		}

	}

	return new WallsFactory();
}]);
