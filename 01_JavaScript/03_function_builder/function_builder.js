/*	Build Some Functions!	*/

/* ========================================================================= */
// Basic: Make a function that can be used anywhere in your file
// and that when invoked will console.log('I am running!');
// Give it the name runningLogger.

function runningLogger() {
	console.log('I am running!');
}
runningLogger();


/* ========================================================================= */
// Basic: Make a function that is callable, has one parameter and
// multiplies the value of the parameter by 10 before returning the result.
// Give it the name multiplyByTen. Invoke it, passing it the argument 5.

function multiplyByTen(num) {
	if (typeof(num) == "number") {
		num *= 10;
		return num;
	}
}
console.log(multiplyByTen(5));


/* ========================================================================= */
// Basic: Write two functions (stringReturnOne and stringReturnTwo)
// that each return a different hard-coded string

function stringReturnOne() {
	return "I just want a job...";
}
function stringReturnTwo() {
	return "Should I move to Seattle?";
}
console.log(stringReturnOne());
console.log(stringReturnTwo());


/* ========================================================================= */
// Medium: Write a function named caller that has one parameter.
// If the argument provided to caller is a function (typeof may be useful),
// invoke the argument. Nothing is returned.

function caller(func) {
	if (typeof(func) == "function") {
		func();
	}
}
caller(runningLogger); // runs function called "runningLogger"
caller(1); // expected to do nothing


/* ========================================================================= */
// Medium: Write a function named myDoubleConsoleLog that has two parameters,
// if the arguments passed to the function are functions,
// console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(func_1, func_2) {
	if ((typeof(func_1) == "function") && (typeof(func_2) == "function")) {
		console.log(func_1());
		console.log(func_2());
	}
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
myDoubleConsoleLog(stringReturnOne, 1); // expected to do nothing


/* ========================================================================= */
// Hard: Write a function named caller2 that has one parameter.
// It console.log's the string 'starting', waits 2 seconds, and then invokes
// the argument if the argument is a function. (setTimeout may be useful for this one.)
// The function should then console.log ‘ending?’ and return “interesting”.
// Invoke this function by passing it myDoubleConsoleLog.
function caller2(func){
	console.log('starting');
	var x = setTimeout(function(){
			if (typeof(func)=='function'){
				func(stringReturnOne, stringReturnTwo);
			}
		}, 2000);
	console.log('ending');
	return "interesting";
}
caller2(myDoubleConsoleLog);
