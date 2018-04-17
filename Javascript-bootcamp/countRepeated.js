////////////////////////////////////////////////////////////////////////////////
// Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4
////////////////////////////////////////////////////////////////////////////////

function charCount(string)
{
	var count = {};

	for(var i = 0; i<= string.length - 1; i++)
	{
		var char = string[i];

		if(count[char] === undefined)
		{
			count[char] = 1
		}
		else
		{
			count[char] += count[char];
		}
	}
	return count;
}


function countRepeats(string)
{
	var count = charCount(string); //var count = {a: 4, l: 1, v:1, i:1, n: 1}
	var noOfRepeats = 0;
	for(var char in count)
	{
		if(count[char] > 1)
		{	
			noOfRepeats = noOfRepeats + 1;
		}
	}
	return noOfRepeats;
}

console.log(countRepeats('alvin')); //=> 0
console.log(countRepeats('aaaalvin')); //=> 1)
console.log(countRepeats('pops')); //=> 1
// countRepeats('pops'); //=> 1
console.log(countRepeats('mississippi')); //=> 3
console.log(countRepeats('hellobootcampprep')); //=> 4