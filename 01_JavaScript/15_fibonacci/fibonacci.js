function fib(){
	// inital variables
	var previous = 0;
	var current = 1;

	function nacci(){
		var temp = current; 	// store "old" current value
		current += previous; 	// old current + previous
		previous = temp;		// old current becomes previous
		console.log(current);	// logs "new" current value
	}
	// closure
	return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
