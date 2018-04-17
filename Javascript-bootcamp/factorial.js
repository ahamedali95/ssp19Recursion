/* # Write a method that takes an integer `n` in; it should return
# n*(n-1)*(n-2)*...*2*1. Assume n >= 0.
#
# As a special case, `factorial(0) == 1`.
#
# Difficulty: easy.
*/

function factorial(num) {
	if (num === 0) {
		return 1;
	}

	var factorial = num;

	for (var i = num - 1; i >= 1; i--) {
		factorial *= i;
	}

	return factorial;
}

console.log(factorial(10));