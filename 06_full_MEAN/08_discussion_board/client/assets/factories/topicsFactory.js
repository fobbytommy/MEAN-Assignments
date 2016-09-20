app.factory("topicsFactory", ['$http', function($http) {

	function TopicsFactory() {

		// ajax call to the server to create a new topic
		this.create_topic = function(username, newTopic, callback) {
			newTopic.username = username;

			$http.post('/topic', newTopic).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log("[Create_topic: ERROR] could not create a new topic");
				}
			);
		}

		// ajax call to the server to retrieve all the topics for the Dashboard Page
		this.index = function(callback) {
			$http.get('/topic').then(
				function success(response) {

					callback(response.data);
				},
				function error(response) {
					console.log("[index (dashboard): ERROR] could not retrieve the topics from the DB");
				}
			);
		}

		// for retrieving a single_topic based on the given _id
		this.single_topic = function(id, callback) {
			$http.get('/topic/' + id).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log("[single_topic: ERROR] could not retrieve a topic from the DB");
				}
			);
		}

		// for creating a new post
		this.create_post = function(topic_id, username, newPost, callback) {
			newPost["username"] = username;
			$http.post('/post/' + topic_id, newPost).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log("[create_post: ERROR] could not create a new post!");
				}
			);
		}

		// for creating a new comment
		this.create_comment = function(post_id, username, newComment, callback) {
			var newComment = {
				username: username,
				comment: newComment
			};
			$http.post('/comment/' + post_id, newComment).then(
				function success(response) {
					if (typeof(response.data.errors) != 'undefined') {
						callback(false, response.data.errors);
					}
					else {
						callback(true, response.data);
					}
				},
				function error(response) {
					console.log("[create_comment: ERROR] could not create a new comment!");
				}
			);
		}

		// for getting all the posts for a specific topic's _id
		this.index_posts = function(topic_id, callback) {
			$http.get('/post/' + topic_id).then(
				function success(response) {
					callback(response.data);
				},
				function error(response) {
					console.log("[index_post: ERROR] could not retrieve the posts from the DB!");
				}
			);
		}

		// for incrementing a 'like' of the post
		this.like_post = function(post_id) {
			$http.put('post/like/' + post_id).then(
				function success(response) {
					// nothing needs to happen
				},
				function error(response) {
					console.log("[like_post: ERROR] could not update the 'like' of the post from the DB!");
				}
			);
		}

		// for incrementing a 'dislike' of the post
		this.dislike_post = function(post_id) {
			$http.put('post/dislike/' + post_id).then(
				function success(response) {
					// nothing needs to happen
				},
				function error(response) {
					console.log("[dislike_post: ERROR] could not update the 'dislike' of the post from the DB!");
				}
			);
		}

	}

	return new TopicsFactory();
}]);
