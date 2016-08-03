/*	JS Fundamentals PART I	*/


// Go through each value in array x,
// where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value.
	var x = [3, 5, 'Dojo', 'rocks', 'Micahel', 'Sensei']

	function log_value(arr) {
		for (var i = 0; i < x.length; i++) {
			console.log(x[i]);
		}
	}
		log_value(x);


// Add a new value (100) in the array x using a push method.
	x.push(100);


// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.
// Log x in the console and analyze how x looks now.
	x.push(["hello", "world", "JavaScript is Fun"]);
	log_value(x);


// Create a simple for loop that sums all the numbers between 1 to 500.
// Have console log the final sum.
	function sum_1to500() {
		var sum = 0;
		for (var i = 1; i <= 500; i++) {
			sum += i;
		}
		return sum;
	}
	console.log(sum_1to500());


// Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
// find the minimum value, and then print it
	var arr = [1, 5, 90, 25, -3, 0];

	function find_min(arr) {
		var min = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
		return min;
	}
	console.log(find_min(arr));


// Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
// find the average of all of the values, and then print it
	function find_avg(arr) {
		var sum = 0, avg;
		for (var i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		avg = sum / arr.length;
		return avg;
	}
	console.log(find_avg(arr));


// Write a for in loop that will navigate through the object below:
	var new_ninja = {
		name: 'Jessica',
		profession: 'coder',
		favorite_language: 'JavaScript',
		dojo: 'Dallas'
	}
	function print_key_value(dict) {
		for (var key in dict) {
			console.log(key + ": " + dict[key]);
		}
	}
	print_key_value(new_ninja);
