// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example

// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]
// (['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]


function solve(array1, array2) {
	var countArr = [];
	var count = 0;
	for (var i = 0; i < array2.length; i++) {
		var word1 = array2[i];

		for (var j = 0; j < array1.length; j++) {
			var word2 = array1[j];

			if (word1 === word2) {
				count += 1;
			} 
		}

		countArr.push(count);
		count = 0;
	}

	return countArr;
}


array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw'];
array2 = ['abc', 'cde', 'uap'];
console.log(solve(array1,array2));
console.log(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']));