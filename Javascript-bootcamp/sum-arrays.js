// Write a function sumArray(array) that takes in an array of numbers are returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

function sumArray(array)
{
	var sum = 0;
	for (var i = 0; i < array.length; i++)
	{
		sum = sum + array[i];
	}

	return sum;
}


console.log(sumArray([5, 6, 4]));