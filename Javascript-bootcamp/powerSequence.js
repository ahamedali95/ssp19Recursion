// Write a function `powerSequence(base, length)` that takes in two numbers,
// `base` and `length`. The function should return an array containing a power sequence
// with the given `length`. Assume that the `length` is at least 1.
//
// The first number of a power sequence begins with `base`. The second number of the
// sequence is the product between the first number and the base. The third number of the
// sequence is the product between the second number and the base...
//
// Examples:
//
// powerSequence(3, 4); // => [ 3, 9, 27, 81 ]
// powerSequence(2, 6); // => [ 2, 4, 8, 16, 32, 64 ]
// powerSequence(8, 3); // => [ 8, 64, 512 ]


function powerSequence(base, length)
{
	var sequence = [];

	var push1 = sequence.push(base);
	var push2 = sequence.push(base * base);

	for(var i = 2; i <= length - 1; i++)
	{
		var num1 = sequence[i-1];

		sequence.push(num1*base);
	}

	return sequence;
}

console.log(powerSequence(3, 4)) ; // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));; // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]