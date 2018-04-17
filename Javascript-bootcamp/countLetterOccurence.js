// Write a function `countOfLetter(string, char)` that takes in a string and a
// character and returns the number of times that character appears in the string
//
// Examples:
//
// countOfLetter('mississippi', 's'); // => 4
// countOfLetter('MISSISSIPPI', 'p'); // => 2
// countOfLetter('BOOTCAMP', 't'); // => 1

function countOfLetter(string, char)
{
	var count = 0;
	var lowChar = char.toLowerCase();

	for(var i = 0; i <= string.length - 1; i++)
	{
		var letter = string[i].toLowerCase();

		if(letter === lowChar)
		{
			count += 1;
		}
	}
	return count;
}

console.log(countOfLetter('mississippi', 's')); // => 4
console.log(countOfLetter('MISSISSIPPI', 'p')); // => 2
console.log(countOfLetter('BOOTCAMP', 't')); // => 1