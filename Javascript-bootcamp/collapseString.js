// Write a function `collapseString(str)` that takes in a string as an argument.
// The function should return the string where 'streaks' of consecutive characters
// are collapsed to a single character.
//
// Examples:
//
// collapseString('apple'); //=> 'aple'
// collapseString('AAAaalviiiiin!!!'); //=> 'Aalvin!'
// collapseString('hello   app academy'); //=> 'helo ap academy'


function collapseString(str)
{
	var string = "";
	for(var i = 0; i <= str.length - 1; i++)
	{
		var char = str[i];
		var lastChar = string[string.length - 1];

		if(char !== lastChar)
		{
			string += char;
		}
	}
	return string;
}



console.log(collapseString('apple'));
console.log(collapseString('hello   app academy')); //=> 'helo ap academy'