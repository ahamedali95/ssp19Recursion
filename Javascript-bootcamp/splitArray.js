// Write a function splitHalfArray(array) that takes in
// an array as an argument and returns two halves of that
// array split in the middle.
// If the array has an odd number of elements, then the middle
// element should be excluded.
//
// Example:
//
// splitHalfArray([1, 2, 3, 4, 5]); // => [ [ 1, 2 ], [ 4, 5 ] ]
// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

function splitHalfArray(array) {
	var array1 = [];
	var array2 = [];
	var half = array.length/2; 

	if (array.length === 0) {
		return [];
	} else if (isOdd(array.length)) {
		for (var i = 0; i < half - 1; i++) {
			array1.push(array[i]);
		}
		for (var i = Math.ceil(half); i < array.length; i++) {
			array2.push(array[i]);
		}
	} else {
		for (var i = 0; i < half; i++) {
			array1.push(array[i]);
		}
		for(var i = half; i < array.length; i++) {
			array2.push(array[i]);
		}
	}

	return [array1, array2];
}


function isOdd(num) {
	return num % 2 !== 0;
}


console.log(splitHalfArray([1, 2, 3, 4, 5])); // => [ [ 1, 2 ], [ 4, 5 ] ]
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
console.log(splitHalfArray([1, 2, 3, 4, 5, 33, 100, 23, 21, 0, -1]));
