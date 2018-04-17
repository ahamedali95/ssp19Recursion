////////////////////////////////////////////////////////////////////////////////
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA'
////////////////////////////////////////////////////////////////////////////////

function reverseStr(str)
{
	var splitStr = str.split("");
	console.log(splitStr);
	var reverseString = [];
	for(var i = 0, j = splitStr.length - 1; i <= splitStr.length -1 ; i++, j--)
	{
		
			reverseString[i] = splitStr[j];

	}

	return reverseString.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
}

console.log(reverseStr("bootcamp"));