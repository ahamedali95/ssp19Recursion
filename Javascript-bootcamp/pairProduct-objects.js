// Write a function `pairProduct(arr, num)` that accepts an array of numbers (arr)
// and a target number (num). It should return pairs of indices whose elements multiply
// to `num`. No pair should appear twice in the result.
// Use only `while` loops. No `for` loops.
//
// Examples:
// pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
// pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]

function pairProduct(arr, num)
{
	var multiples = [];

	for(var i = 0; i<= arr.length - 1; i++)
	{
		var outerNum = arr[i];
		for(var j = i + 1; j<= arr.length - 1; j++)
		{
			var innerNum = arr[j];
			if(outerNum * innerNum === num)
			{
				multiples.push([i,j]);
			}
		}
	}
	return multiples;
}

function pairProduct2(arr, num)
{
	var multiples = [];

	var i = 0;
	while(i < arr.length )
	{
		var outerNum = arr[i];
		var j = i + 1;
		while(j <= arr.length - 1)
		{
			var innerNum = arr[j];
			if(outerNum * innerNum === num)
			{
				multiples.push([i,j]);
			}
			j = j + 1;
		}
		i = i + 1
	}
	return multiples;
}

console.log(pairProduct2([1,2,3,4,5], 4)); //=> [ [ 0, 3 ] ]
console.log(pairProduct2([1,2,3,4,5], 8)); //=> [ [ 1, 3 ] ]
console.log(pairProduct2([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]