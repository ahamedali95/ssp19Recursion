// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
///
// Examples:
// range(1,4) => [1,2,3,4]
// range(4,2) => []

function range(start, end)
{
	var numArray = [];
	for(var i = start; i <= end; i++)
	{
		numArray.push(i);
	}
	return numArray;
}
console.log(range(4,200000));