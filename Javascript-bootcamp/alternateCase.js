// Write a function alternateCase(str) that takes in a word and
// returns the word where the characters alternate between
// uppercase and lowercase.
//
// Examples:
//
// alternateCase('BOOTCAMPPREP'); // => 'BoOtCaMpPrEp'
// alternateCase('bOotCamPpREP'); // => 'BoOtCaMpPrEp'
// alternateCase('hello'); // => 'HeLlO'

function alternateCase(str) {
	var lowCased = str.toLowerCase().split("");

	for (var i = 0; i < lowCased.length; i += 2) {
		lowCased.splice(i, 1, lowCased[i].toUpperCase());
	}

	return lowCased.join("");
}

console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'