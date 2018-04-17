// Write a function commonFactors(num1, num2) that returns an array that contains
// the common factors for both numbers.
//
// Examples:
//
// commonFactors(12, 50); // => [ 1, 2 ]
// commonFactors(6, 24); // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22); // => [ 1, 11 ]
// commonFactors(45, 60); // => [ 1, 3, 5, 15 ]


function commonFactors(num1, num2) {
	var factors = [];

	for (var i = 1; i <= num1; i++) {

		if (num1 % i === 0 && num2 % i === 0) {
			factors.push(i);
		}
	}

	return factors;
}

console.log(commonFactors(12, 50)); // => [ 1, 2 ])
console.log(commonFactors(6, 20)); // => [ 1, 2, 3, 6 ])
console.log(commonFactors(11, 22)); // => [ 1, 11 ]);
console.log(commonFactors(45, 60)); // => [ 1, 3, 5, 15 ]);