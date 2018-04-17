// Write a function threeUniqueVowels(string) that takes in a string and returns true
// if the string contains at least three different vowels.
// Vowels are a, e, i, o, u
//
// Examples:
//
// threeUniqueVowels('delicious'); // => true
// threeUniqueVowels('bootcamp prep'); // => true
// threeUniqueVowels('bootcamp'); // => false
// threeUniqueVowels('dog'); // => false
// threeUniqueVowels('go home'); // => false


function threeUniqueVowels(string) {
	var vowels = "aeiou";
	var vowelsHistory = [];

	for (var i = 0; i < string.length; i++) {
		var char = string[i];

		if ((vowels.indexOf(char) !== -1) && (vowelsHistory.indexOf(char) === -1)) {
			vowelsHistory.push(char);
		}
	}

	return vowelsHistory.length >= 3;
}

console.log(threeUniqueVowels('delicious')); // => true
console.log(threeUniqueVowels('bootcamp prep')); // => true
console.log(threeUniqueVowels('bootcamp')); // => false
console.log(threeUniqueVowels('dog')); // => false
console.log(threeUniqueVowels('go home')); // => false)