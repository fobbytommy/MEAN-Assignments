var _ = {
	map: function(array, toDo) {
			arr_new = [];
			for (var i = 0, j = array.length; i < j; i++) {
				arr_new.push(toDo(array[i]));
			}
			return arr_new;
	},
	reduce: function(array, toDo, memo) {
	 	var reduced = 0;
		var memo = memo || 0;
		for (var i = 0, j = array.length; i < j; i++) {
			reduced += toDo(memo, array[i]);
		}
		return reduced;
	},
	find: function(array, toDo) {
		var result;
		for (var i = 0, j = array.length; i < j; i++) {
			if (toDo(array[i])) {
				result = array[i];
				break;
			}
		}
		return result;
	},
	filter: function(array, toDo) {
		var new_arr = [];
		for (var i = 0, j = array.length; i < j; i++) {
			if (toDo(array[i])) {
				new_arr.push(array[i]);
			}
		}
		return new_arr;
	},
	reject: function(array, toDo) {
		var new_arr = [];
		for (var i = 0, j = array.length; i < j; i++) {
			if (!toDo(array[i])){
				new_arr.push(array[i]);
			}
		}
		return new_arr;
	}
}
// you just created a library with 5 methods!

var map_show = _.map([1,2,3], function multiply_3(num){ return num * 3} );
console.log(map_show);

var reduce_show = _.reduce([1,2,3], function sum_all(memo, num){ return memo + num}, 2);
console.log(reduce_show);

var find_show = _.find([1,2,3,4,5,6], function find_even(num){ return num % 2 == 0; });
console.log(find_show);

var filter_show = _.filter([1,2,3,4,5,6], function get_even(num){ return num % 2 == 0; });
console.log(filter_show);

var reject_show = _.reject([1,2,3,4,5,6], function no_even(num){ return num % 2 == 0; });
console.log(reject_show);
