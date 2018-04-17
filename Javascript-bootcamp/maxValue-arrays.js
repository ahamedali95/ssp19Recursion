// Write a function `maxValue(array)` that returns the largest value in `array`.
// Assume `array` is an array of numbers.
//
// Examples:
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43


function maxValue(array)
{
	var maxValue = array[0];
	for(var i = 1; i<= array.length - 1; i++)
	{
		var newValue = array[i];
		if(newValue > maxValue)
		{
			maxValue = newValue;

		}
	}
	return maxValue;
}

console.log(maxValue([-4,-10,0.43]));