// Write a function `pairsToString(arr)` that takes in an array of pairs. The function
// should return a string corresponding to the pairs. See the examples.
//
// Examples:
//
// var array1 = [
//   ['a', 3],
//   ['b', 1],
//   ['c', 2]
// ];
//
// pairToString(array1); // => 'aaabcc'
//
// var array2 = [
//   ['f', 1],
//   ['o', 2],
//   ['d', 1],
//   ['!', 1]
// ];
//
// pairToString(array2); // => 'food!'

function pairToString(arr)
{
	var string = "";

	for(var i = 0; i <= arr.length - 1; i++)
	{
		var pair = arr[i];
		var char = pair[0];
		var value = pair[1];
		for(var j = 0; j <= value - 1; j++)
		{
			string += char;
		}
	}
	return string;
}


 var array2 = [
 ['f', 1],
  ['o', 2],
   ['d', 1],
   ['!', 1]
 ];
//
console.log(pairToString(array2)); // => 'food!'


var array1 = [
   ['a', 10],
   ['b', 1],
   ['c', 2]
 ];
//
console.log(pairToString(array1)); // => 'aaabcc'
