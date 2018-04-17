// Write a function `maxAdjacentSum(array)` that takes in an array of numbers
// and returns the maximum sum of adjacent numbers in the array.
//
// HINT: First think how we can find adjacent elements in an array!
//
// Examples:
//
// var arr1 = [5, 6, 11, 3];
// maxAdjacentSum(arr1); // => 17
//
// var arr2 = [3, 2, 13, 5, 4, 7];
// maxAdjacentSum(arr2); // => 18


function maxAdjacentSum(array) {
	var sum = 0;

	for (var i = 0; i < array.length - 1; i++) {
		var currentSum = array[i] + array[i+1];

		if (sum < currentSum) {
			sum = currentSum;
		}
	}

	return sum;
}

var arr1 = [5, 6, 11, 3];
console.log(maxAdjacentSum(arr1)); // => 17


var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr2)); // => 18