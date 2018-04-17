/* Write a function fib(n) that takes in a number and returns the nth number of
the fibonacci sequence.
In the fibonacci sequence, the 1st number is 1 and the 2nd number is 1. To generate the
next number in the sequence, we take the sum of the previous two fibonacci numbers.
For example the first 5 numbers of the fibonacci sequence are `1, 1, 2, 3, 5`
*/


function fib(n) {
	var fibSequence = [1,1];

	if (n === 1 || n === 2) {
		return 1;
	} 

	for (var i = 0; i < n - 1; i++) {
		fibSequence.push(fibSequence[i]+fibSequence[i+1]);
	}

	return fibSequence[n-1];

}

console.log(fib(7));


function fib2(n) {
	if (n === 1 || n === 2) {
		return 1;
	}

	return fib2(n - 2) + fib2(n - 1);
}

console.log(fib2(7));
