// Write a function `mirrorArray(array)` that takes in an array as an argument
// and returns a new array "mirrored" as shown in the examples:
//
// Examples:
//
// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

function mirrorArray(array)
{
	var mirror = [];
/*	for(var i = 0; i <= array.length-1; i++)
	{
		mirror.push(array[i]);
	}
*/
	for(var j = array.length - 1; j >= 0; j--)
	{
		mirror.push(array[j]);
	}

	return array.concat(mirror);
}

console.log(mirrorArray([1,2,3]));