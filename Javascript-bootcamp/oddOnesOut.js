// Write a function oddOnesOut(array) that takes in an array of
// strings and returns a new array array containing only elements
// that appeared an even number of times in the input array.
//
// Examples:
//
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); // => [ 'b', 'd' ]
//
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]

function oddOnesOut(array) {
	var obj = createTally(array);
	var newArray = [];

	for (var key in obj) {
		if (obj[key] % 2 === 0) {
			newArray.push(key);
		}
	}

	return newArray;
}


function createTally(array) {
	var tally = {};

	for (var i = 0; i < array.length; i++) {
		var str = array[i];

		if (tally[str] === undefined) {
			tally[str] = 1;
		} else {
			tally[str] += 1;
		}
	}

	return tally;
}


var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]



var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]


/*
function oddOnesOut(array) {
	var count = 0;
	var newArray = [];
	var history = []

	for (var i = 0; i < array.length; i++) {
		var str = array[i];

		if (history.indexOf(str) === -1) {
			history.push(str);
			count += 1;

		for (var j = i+1; j < array.length; j++) {
			var newStr = array[j];

			if (newStr === str) {
				count += 1;
			}
		}

		if (isEven(count)) {
			newArray.push(str);
		}
		count = 0;
	}
	}

	return newArray;
}


function isEven(num) {
	return num % 2 === 0;
}
*/
