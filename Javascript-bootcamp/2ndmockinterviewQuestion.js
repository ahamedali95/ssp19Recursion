// EASY
/*------------------------------------------------------------------------------
// evenEqualOdd
//
// Write a function `evenEqualOdd(arr)` that takes in an array of numbers. The function
// should return true if the sum of all even numbers of the array is equal to the sum
// of all odd numbers of the array. The function should return false otherwise.
//
// Examples:
//
// evenEqualOdd([5, 10, 3, 9, 1, 8]); // => true
// evenEqualOdd([3, 3, 4, 4, 1, 1]); // => true
// evenEqualOdd([1, 2, 3, 6]); // => false
// evenEqualOdd([10, 2, 5, 5]); // => false
------------------------------------------------------------------------------*/

//evenSum = 0;
//oddsum = 0;
//iterate through each element of the array 
//store current element in a variable
//if the current element is even then add it to evenSum
//if the current element is not even then add it to oddsum
//if evenSum = oddsum, return true and false otherwise

function evenEqualOdd(arr) {
	var evenSum = 0;
	var oddSum = 0;

	for (var i = 0; i < arr.length; i++) {
		var num = arr[i];

		if (isEven(num)) {
			evenSum += num;
		} else {
			oddSum += num;
		}
	}


	return evenSum === oddSum;
}


function isEven(n) {
	return n % 2 === 0;
}


console.log(evenEqualOdd([5, 10, 3, 9, 1, 8])); // => true
console.log(evenEqualOdd([3, 3, 4, 4, 1, 1])); // => true
console.log(evenEqualOdd([1, 2, 3, 6])); // => false
console.log(evenEqualOdd([10, 2, 5, 5])); // => false