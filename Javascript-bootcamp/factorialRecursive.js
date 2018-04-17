/*Write a function `factorial(n)` which takes a number and returns the factorial of n.
A factorial is the product of all whole numbers between 1 and n, inclusive.
For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.

*/


function factorial(n) {
	var result = n;

	for(var i = n - 1; i >= 1; i--) {
		result *= i;
	}

	return result;
}

console.log(factorial(5));


function factorial2(n) {
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}


console.log(factorial2(5));