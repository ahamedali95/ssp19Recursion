// Write a function `twoDimensionalTotal(array)` that takes in a 2D array of numbers
// and returns the total sum of all elements.
//
// var arr1 = [
//   [5, 2, 5, 3],
//   [12, 13],
// ];  
//
// twoDimensionalTotal(arr1); // => 40
//
// var arr2 = [
//   [2],
//   [1, 9],
//   [1, 1, 1]
// ]
//
// twoDimensionalTotal(arr2); // => 15

function twoDimensionalTotal(array)
{
	var total = 0;

	for(var i = 0; i <= array.length - 1; i++)
	{ 
		var subArray = array[i];
		var subArraylength = subArray.length;
		for(var j = 0; j <= subArraylength - 1; j++)
		{
			total += subArray[j];
		}
	}
	return total;
}


var arr2 = [
   [2],
  [1, 9],
   [1, 1, 1]
 ]
//
console.log(twoDimensionalTotal(arr2)); // => 15
