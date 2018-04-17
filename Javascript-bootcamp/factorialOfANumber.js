////////////////////////////////////////////////////////////////////////////////
// Write a function `factorial(n)`, that returns the factorial of the number `n`.
// For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.
//
// Examples:
//
// factorial(1); // => 1
// factorial(4); // => 24
// factorial(5); // => 120
// factorial(10); // => 3628800
////////////////////////////////////////////////////////////////////////////////


function factorial(n)
{
	var factorial = 1;

	if(n === 0)
	{
		factorial = 0;
	}
	for(var i = n; i >= 1; i--)
	{
		factorial *= i;
	}

	return factorial;
}

console.log(factorial(0)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800