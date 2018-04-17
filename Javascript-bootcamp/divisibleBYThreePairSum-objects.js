// Write a function `divisibleByThreePairSum(array)` that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum to a
// multiple of three.
//
// Examples:
// divisibleByThreePairSum([1, 6, 3, 4, 2, 0]); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
// divisibleByThreePairSum([8, 3, 5, 9, 2]); //=> [[1, 3]]

function divisibleByThreePairSum(array)
{
	var multiples = [];

	for(var i = 0; i <  array.length ; i++)
	{
		var outerElement = array[i];
		for(var j = i + 1; j <  array.length ; j++)
		{
			var innerElement = array[j];
			if((outerElement + innerElement) % 3 === 0)
			{
				multiples.push([i,j]);
			}
		}
	}
	return multiples;
}

// Examples:
console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2])); //=> [[1, 3]]

