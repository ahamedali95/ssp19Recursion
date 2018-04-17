// Write a function middleElement(array) that takes in an array of elements and
// returns the element in the middle of the array if the array contains an odd
// number of elements. If the array contains an even number of elements, the
// function should return the middle two elements in an array.
//
// Examples:
//
// middleElement([1,2,3,4,5]); // => 3
// middleElement(['a', 'b', 'c', 'd', 'e', 'f']); // => [ 'c', 'd' ]


function middleElement(array)
{
	var length = array.length;
	var newArr = [];

	if(isOdd(length))
	{
		var middle = Math.floor(array.length/2);
		return array[middle];
	}
	else
	{
		var middle1 = (array.length/2);
		var middle2 = middle1 - 1;
		
		newArr.push(array[middle2]);
		newArr.push(array[middle1]);
		return newArr;
	}
}

function isOdd(num)
{
	if(num === 0)
	{
		return false;
	}
	return num % 2 !== 0;
}


//console.log(middleElement([1,2,3,4,5])); // => 3
console.log(middleElement(['a', 'b', 'c', 'd', 'e', 'f', "g", "h"])) ; // => [ 'c', 'd' ]