// Write a function elementCount(array) that returns a object. Each key
// corresponds to an element in the array and the value corresponds to how many
// times that element appears in the array.
//
// Example:
// elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }


function elementCount(array)
{
	var count = {};

	for(var i = 0; i <= array.length - 1; i++)
	{
		var key = array[i];

		if(count[key] === undefined)
		{
			count[key] = 1;
			console.log(key,count[key]);
		}
		else
		{
			count[key] += count[key];
			console.log("Already exisits: "+ key, count[key]);
		}
	}
	return count;
}

console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }