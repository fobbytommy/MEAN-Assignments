/*	JS Fundamentals Part II  */

/* ========================================================================== */
// Create a simple for loop that sums all the integers between x and y (inclusive).
// Have it console log the final sum.
function sum_all(x, y) {
		if (typeof(x) == "number" && typeof(y) == "number") {
			var sum = 0;
			if (x < y) {
				while(x <= y) {
					sum += x;
					x++;
				}
			}
			else {
				while (y <= x) {
					sum += y;
					y++;
				}
			}
			console.log(sum);

		} else {
			console.log('One or both of the given argument is not a number.');
		}
	}
	// sum_all(1, 3);


/* ========================================================================== */
// Write a loop that will go through an array, find the
// minimum value, and then return it
function find_min(arr) {
	if (typeof(arr) == 'object') {
		if (typeof(arr[0]) == 'number') {
			var min = arr[0];
			for (var i = 0; i < arr.length; i++) {
				if (typeof(arr[i]) == 'number') {
					if (arr[i] < min) {
						min = arr[i];
					}
				}
				else {
					return console.log('Error: Given array contains non-number element.');
				}
			}
			return min;
		}
		else {
			return console.log('Error: Given array contains non-number element.');
		}
	}
	else {
		return console.log('Error: Given argument is not an array.');
	}
}
	// find_min(1);
	// var minimum = find_min([1,2,3,-3,5,-2,1,5,7,-2,-6]);
	// console.log(minimum);


/* ========================================================================== */
// Write a loop that will go through an array, find the average
// of all of the values, and then return it
function find_avg(arr) {
	if (typeof(arr)  == 'object') {
		var sum = 0, avg;
		for (var i = 0; i < arr.length; i++) {
			if (typeof(arr[i]) == 'number') {
				sum += arr[i];
			}
			else {
				return console.log('Error: Given array contains non-number element.');
			}
		}
		return avg = sum / arr.length;
	}
	else {
		return console.log('Error: Given argument is not an array.');
	}
}
	// var average = find_avg([1,2,3,4]);
	// console.log(average);


/* ========================================================================== */
// Rewrite these 3 as anonymous functions assigned to variables.
var sum_all_anonymous = function(x, y) {
		if (typeof(x) == "number" && typeof(y) == "number") {
			var sum = 0;
			if (x < y) {
				while(x <= y) {
					sum += x;
					x++;
				}
			}
			else {
				while (y <= x) {
					sum += y;
					y++;
				}
			}
			console.log(sum);

		} else {
			console.log('One or both of the given argument is not a number.');
		}
	}
	// sum_all_anonymous(1,6);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var find_min_anonymous = function(arr) {
	if (typeof(arr) == 'object') {
		if (typeof(arr[0]) == 'number') {
			var min = arr[0];
			for (var i = 0; i < arr.length; i++) {
				if (typeof(arr[i]) == 'number') {
					if (arr[i] < min) {
						min = arr[i];
					}
				}
				else {
					return console.log('Error: Given array contains non-number element.');
				}
			}
			return min;
		}
		else {
			return console.log('Error: Given array contains non-number element.');
		}
	}
	else {
		return console.log('Error: Given argument is not an array.');
	}
}
	// var minimum = find_min_anonymous([1,2,3,-3,5,-2,1,5,7,-2,-6]);
	// console.log(minimum);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var find_avg_anonymous = function(arr) {
	if (typeof(arr)  == 'object') {
		var sum = 0, avg;
		for (var i = 0; i < arr.length; i++) {
			if (typeof(arr[i]) == 'number') {
				sum += arr[i];
			}
			else {
				return console.log('Error: Given array contains non-number element.');
			}
		}
		return avg = sum / arr.length;
	}
	else {
		return console.log('Error: Given argument is not an array.');
	}
}
	// var average = find_avg_anonymous([1,2,3,4]);
	// console.log(average);

/* ========================================================================== */
// Rewrite these as methods of an object
var do_math = {
	sum_all_method: function(x, y) {
			if (typeof(x) == "number" && typeof(y) == "number") {
				var sum = 0;
				if (x < y) {
					while(x <= y) {
						sum += x;
						x++;
					}
				}
				else {
					while (y <= x) {
						sum += y;
						y++;
					}
				}
				console.log(sum);

			} else {
				console.log('One or both of the given argument is not a number.');
			}
		},
	find_min_method: function(arr) {
		if (typeof(arr) == 'object') {
			if (typeof(arr[0]) == 'number') {
				var min = arr[0];
				for (var i = 0; i < arr.length; i++) {
					if (typeof(arr[i]) == 'number') {
						if (arr[i] < min) {
							min = arr[i];
						}
					}
					else {
						return console.log('Error: Given array contains non-number element.');
					}
				}
				return min;
			}
			else {
				return console.log('Error: Given array contains non-number element.');
			}
		}
		else {
			return console.log('Error: Given argument is not an array.');
		}
	},
	find_avg_method: function(arr) {
		if (typeof(arr)  == 'object') {
			var sum = 0, avg;
			for (var i = 0; i < arr.length; i++) {
				if (typeof(arr[i]) == 'number') {
					sum += arr[i];
				}
				else {
					return console.log('Error: Given array contains non-number element.');
				}
			}
			return avg = sum / arr.length;
		}
		else {
			return console.log('Error: Given argument is not an array.');
		}
	}
}
	// do_math.sum_all_method(1,6);
	// var mini = do_math.find_min_method([1,2,3,-3,5,-2,1,5,7,-2,-6]);
	// console.log(mini);
	// var avg = do_math.find_avg_method([1,2,3,4]);
	// console.log(avg);

/* ========================================================================== */
// Create a JavaScript object called person with the following properties/methods
	// Properties
	// 	 name - set this as your own name
	// 	 distance_traveled - set this initially as zero
	// Methods
	//   say_name - should alert the object’s name property
	// 	 say_something - have it accept a parameter. This function should then
	//                   say for example “{{your name}} says ‘I am cool’” if you
	// 					 pass ‘I am cool’ as an argument to this method.
	// 	 walk - have it alert for example “{{your name}} is walking” and
	// 		    increase distance_traveled by 3
	// 	 run - have it alert for example “{{your name}} is running” and
	// 		   increase distance_traveled by 10
	// 	 crawl - have it alert for example “{{your name}} is crawling” and
	//		     increase distance_traveled by 1
var person = {
	name: 'Tommy',
	distance_traveled: 0,
	say_name: function() {
		alert(person.name);
		return person; // return self
	},
	say_something: function(str) {
		alert(person.name + " says '" + str + "'");
		return person; // return self
	},
	walk: function() {
		alert(person.name + " is walking..");
		person.distance_traveled += 3;
		return person; // return self
	},
	run: function() {
		alert(person.name + " is running..");
		person.distance_traveled += 10;
		return person; // return self
	},
	crawl: function() {
		alert(person.name + " is crawling..");
		person.distance_traveled += 1;
		return person; // return self
	},
}
// person.say_something('hello');
// var check = person.walk().run().crawl().say_something('yolo').walk().distance_traveled;
// console.log(check);
