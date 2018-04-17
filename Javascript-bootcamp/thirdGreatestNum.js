 // Write a function countRepeats(string) that takes in a string and returns the
// number of letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of letters that
// repeat, not the number of times they repeat in the string.
//
// Examples:
//
// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4

function countRepeats(string) {
	var numsOfRepeats = 0;
	var repeatedChars = [];

	for (var i = 0; i < string.length; i++) {
		var char = string[i];

		for (var j = i + 1; j < string.length; j++) {
			var char1 = string[j];

			if (char === char1 && repeatedChars.indexOf(char1) === -1) {
				repeatedChars.push(char1);
				numsOfRepeats++;
			}
		}
	}

	console.log(numsOfRepeats);
}


countRepeats('alvin'); //=> 0
 countRepeats('aaaalvin'); //=> 1
 countRepeats('pops'); //=> 1
 countRepeats('mississippi'); //=> 3
 countRepeats('hellobootcampprep'); //=> 4