// Write a function called capVowels(string) that takes in a string and returns
// the string where every vowel is capitalized. All other letters should be lowercased.
// Hint: Don't forget that strings are immutable!
//
// Examples:
//
// capVowels('hello world'); // => 'hEllO wOrld'
// capVowels('HELLO WORLD'); // => 'hEllO wOrld'
// capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'


function capVowels(string)
{
	var vowels = ["a","e","i","o","u"];
	var lowercased = string.toLowerCase();
	var words = lowercased.split(" ");

	var newString = "";

	for(var i = 0; i <= words.length - 1; i++)
	{
		var word = words[i].split("");                //["h","E","l","l","O"]
		for(var j = 0; j <= word.length - 1; j++)
		{
			var char = word[j];
			if(vowels.indexOf(char) !== -1)
			{
				word.splice(j, 1, char.toUpperCase());
			}
		}
		newString += word.join("") + " ";
	}
	return newString;
}

console.log(capVowels('hello world')); // => 'hEllO wOrld'
console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'
console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'