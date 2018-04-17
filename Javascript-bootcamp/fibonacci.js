// Write a function fibonacci(n) that takes in a number that
// represents the length of a sequence. The function should
// should return the first `n` numbers in the fibonacci sequence.
//
// The first two numbers of the fibonacci sequence are 1 and 1.
// The next number in the sequence can be found by adding the
// last two numbers in the sequence.
//
// Examples:
//
// fibonacci(0); // => []
// fibonacci(1); // => [ 1 ]
// fibonacci(2); // => [ 1, 1 ]
// fibonacci(3); // => [ 1, 1, 2 ]
// fibonacci(5); // => [ 1, 1, 2, 3, 5 ]
// fibonacci(10); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

function fibonacci(n) {
	var fib = [1,1];

	if (n === 0) {
		return [];
	} else if(n === 1) {
		return [1];
	} else {
		var i = 2;

		while (i < n) {
			var lastTwo = fib[fib.length - 1] + fib[fib.length - 2]
			fib.push(lastTwo);
			i++;
		}
	}

	return fib;
}


console.log(fibonacci(0)); // => []
console.log(fibonacci(1)); // => [ 1 ]
console.log(fibonacci(2)); // => [ 1, 1 ]
console.log(fibonacci(3)); // => [ 1, 1, 2 ]
console.log(fibonacci(5)); // => [ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ])