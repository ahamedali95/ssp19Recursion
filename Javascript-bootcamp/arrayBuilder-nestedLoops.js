// Write a function `arrayBuilder` that takes in a count object and returns
// an array filled with the appropriate numbers of elements. The order of
// the elements in the array does not matter, but repeated elements should be
// grouped.
//
// Examples:
// arrayBuilder({'a': 3, 'b': 0, 'c': 2}); //=> [ 'a', 'a', 'a', 'c', 'c' ]
// arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
// arrayBuilder({}); //=> []

function arrayBuilder(count)
{
	var noOfElements = [];

	for(var key in count)
	{
		for(var i = 0; i <= count[key] - 1; i++)
		{
			noOfElements.push(key);
		}
	}
	return noOfElements;
	
}

console.log(arrayBuilder({'a': 10, 'b': 0, 'c': 2})); //=> [ 'a', 'a', 'a', 'c', 'c' ]
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []
