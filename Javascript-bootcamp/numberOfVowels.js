/* # Write a method that takes a string and returns the number of vowels
# in the string. You may assume that all the letters are lower cased.
# You can treat "y" as a consonant.
#
# Difficulty: easy.
*/

function numberOfVowels(str) {
	var vowels = "aeiou";
	var count = 0;

	for (var i = 0; i < str.length; i++) {
		var char = str[i];

		if (vowels.indexOf(char) !== -1) {
			count++;
		}
	}

	return count;
}

console.log(numberOfVowels('ahamed is a good boy and i am bad boy'));