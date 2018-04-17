// Write a function `threeInARow(arr)` that takes in an array of numbers and returns
// true if the array contains 3 of the same number consecutively. The function should
// return false otherwise.
//
// Examples:
// 
// threeInARow([4, 3, 7, 7, 7, 13, 8]); // => true;
// threeInARow([10, 9, 20, 33, 3, 3]); // => false;


function threeInARow(arr)
{
	for(var i = 0; i <= arr.length - 2; i++)
	{
		var num = arr[i]
		if(num === arr[i+1] && num === arr[i+2])
		{
			return true;
		}
	}
	return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;