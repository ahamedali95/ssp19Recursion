////////////////////////////////////////////////////////////////////////////////
// Write a function everyOtherWord(sentence) that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
////////////////////////////////////////////////////////////////////////////////

function everyOtherWord(sentence)
{
	var words = [];
	var splitWords = sentence.split(" ");
	for(var i = 0; i<= splitWords.length - 1; i = i + 2)
	{
		words.push(splitWords[i]);
	}

	return words;
}

console.log(everyOtherWord('hello how are you doing on this lovely day?'));