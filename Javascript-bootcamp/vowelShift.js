// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is replaced
// with the next vowel in the alphabet.
//
// var vowels = ['a', 'e', 'i', 'o', 'u'];
//
// Examples:
//
// vowelShift('bootcamp'); // => 'buutcemp'
// vowelShift('hello world'); // => 'hillu wurld'
// vowelShift('on the hunt'); // => 'un thi hant'


function vowelShift(sentence) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var newSentence = "";

	for (var i = 0; i < sentence.length; i++) {
		var char = sentence[i];

		if (vowels.indexOf(char) !== -1) {
			var newChar = vowels[vowels.indexOf(char)+1];
			newSentence += newChar;
		} else {
			newSentence += char;
		}
	}

	return newSentence;
}


console.log(vowelShift('hello world')); // => 'hillu wurld'
console.log(vowelShift('on the hunt')); // => 'un thi hant'


console.log(vowelShift('bootcamp')); // => 'buutcemp'