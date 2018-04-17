// yellStrings(strings)
// Write a function that takes in an array of strings as an argument. The function
// should return array where every string is "yelled"

function yelled(array)
{
	var yelledArray = [];
	for(var i = 0; i <= array.length - 1; i++)
	{
		yelledArray[i] = array[i].toUpperCase() + "!";
	}

	return yelledArray;
}

console.log(yelled(["ahamed", "abbas", "is", "a", "good", "man"]));