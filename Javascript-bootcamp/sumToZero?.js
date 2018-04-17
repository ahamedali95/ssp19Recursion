/* # Write a method that takes an array of numbers. If a pair of numbers
# in the array sums to zero, return the positions of those two numbers.
# If no pair of numbers sums to zero, return `nil`.
*/

function sumToZeroCheck(array) {
	for (var i = 0; i < array.length; i++) {
		var num1 = array[i];

		for (var j = i + 1; j < array.length; j++) {
			var num2 = array[j];

			if (num1 + num2 === 0) {
				return [i,j];
			}
		}
	}

	return null;
}


console.log(sumToZeroCheck([-1,0,10,1,2,1]));