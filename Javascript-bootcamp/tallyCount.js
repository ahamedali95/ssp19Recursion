// Write a function tallyCount(array) that takes in an array of strings. 
// The function should return an object containing a tally count of the strings 
// in the array.
//
// Examples:
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
//
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }

function tallyCount(array) {
	var tally = {};

	for (var i = 0; i < array.length; i++) {
		var str = array[i];

		if (tally[str] === undefined ) {
			tally[str] = "I";
		} else {
			tally[str] += "I";
		}
	}

	return tally;
}

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel','fish', 'dog', 'squirrel'];
console.log(tallyCount(arr1)); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }

var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
console.log(tallyCount(arr2)); // => { x: 'III', y: 'II', z: 'I' }