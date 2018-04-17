// Write a function oddWordsOut(sentence) that takes in a sentence string and returns
// the sentence where words with an odd number of characters are removed.
//
// Examples:
//
// oddWordsOut('go to the store and buy milk'); // => 'go to milk'
// oddWordsOut('what is the answer'); // => 'what is answer'


function oddWordsOut(sentence) {
	var words = sentence.split(" ");
	var newSentence = ""

	for (var i = 0; i < words.length; i++) {
		var word = words[i];

		if (isOdd(word.length)) {
			newSentence += "";
		} else {
			newSentence += word + " ";
		}
	}

	return newSentence;
}

function isOdd(num) {
	return num % 2 !== 0;
}

console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk')
console.log(oddWordsOut('what is the answer')); // => 'what is answer')