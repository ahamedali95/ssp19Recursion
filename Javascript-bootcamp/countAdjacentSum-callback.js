// Write the function countAdjacentSums(arr, n) that takes an array and number.
// It should count the number of times that two adjacent numbers in an array add up
// to n.
//
// Examples:
// countAdjacentSums([1, 5, 1], 6) //=> 2
// countAdjacentSums([7, 2, 4, 6], 7) //=> 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) //=> 3

function countAdjacentSums(arr, n)
{
	var count = 0;

	for(var i = 0; i <= arr.length - 1; i++)
	{
		var num1 = arr[i];
		var num2 = arr[i+1];

		if(num1 + num2 === n)
		{
			count += 1;
		}
	}
	return count;
}

console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); //=> 3
console.log(countAdjacentSums([1, 5, 1], 6)); //=> 2