// Write a function `reverseHipsterfy(sentence)` that takes in a sentence and removes
// all vowels, except the last vowels of every word.
//
// Examples:
//
// reverseHipsterfy("proper"); // => 'prper'
// reverseHipsterfy("proper tonic panther"); // => 'prper tnic pnther'
// reverseHipsterfy("bootcamp prep"); // => 'btcamp prep'
// reverseHipsterfy("towel flicker banana"); // => 'twel flcker bnna'
// reverseHipsterfy("runner anaconda"); // => 'rnner ncnda'
// reverseHipsterfy("turtle cheeseburger fries"); // => 'trtle chsbrger fres'

function reverseHipsterfy(sentence) {
	var words = sentence.split(" ");
	var hipWords = [];

	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		var hipWord = removeFirstVowels(word);
		hipWords.push(hipWord);
	}

	return hipWords.join(" ");
}

function removeFirstVowels(word) {. //proper - 4th index
	var vowels = "aeiou";
	var newWord = "";
	var lastVowelIndex = indexOfLastVowel(word);

	for (var i = 0; i < word.length; i++) {
		var char = word[i];

		if (vowels.indexOf(char) === -1 || i === lastVowelIndex) {
			newWord += char;
		}
	}

	return newWord;
}

function indexOfLastVowel(word) {
	var vowels = "aeiou";

	for (var i = word.length; i >= 0; i--) {
		var char = word[i];

		if (vowels.indexOf(char) !== -1) {
			return i;
		}
	}
}

console.log(reverseHipsterfy("proper"));
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'