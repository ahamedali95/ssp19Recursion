/*
# Write a method that takes a string in and returns true if the letter
# "z" appears within three letters **after** an "a". You may assume
# that the string contains only lowercase letters.
*/


function zAfterA(string) {
	for (var i = 0; i < string.length; i++) {
		var currentChar = string[i];

		if (currentChar === "a") {
			if (string[i+1] === "z" || string[i+2] === "z" || string[i+3] === "z") {
				return true;
			}
		}
	}

	return false;
}


console.log(zAfterA("ahamedablolzama"));