////////////////////////////////////////////////////////////////////////////////
// Write a function `hipsterfy(sentence)` that takes takes a string containing
// several words as input. Remove the last vowel from each word. `'y'` is not a vowel.
//
// Examples:
//
// hipsterfy("proper"); // => "propr"
// hipsterfy("proper tonic panther"); // => "propr tonc panthr"
// hipsterfy("towel flicker banana"); // => "towl flickr banan"
// hipsterfy("runner anaconda"); // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
////////////////////////////////////////////////////////////////////////////////


function hipsterfy(sentence)
{
	var newWords = [];
	var words = sentence.split(" ");
	for(var i = 0; i <= words.length - 1; i++)
	{
		var word = words[i];
		var newWord = removeVowel(word);
		newWords.push(newWord);
	}
	return newWords.join(" ");
}


function removeVowel(word)
{
	var letters = word.split("");
	var vowels = ["a","e","i","o","u"];
	for(var i = word.length - 1; i >= 0; i--)
	{
		var char = word[i];
		if(vowels.indexOf(char) !== -1)
		{
			letters.splice(i,1);
			break;
		}
	}
	return letters.join("");
}

console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
// hipsterfy("runner anaconda"); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"