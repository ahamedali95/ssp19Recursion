/*# Write a method that takes in a string. Return the longest word in
# the string. You may assume that the string contains only letters and
# spaces.
*/

function longestWord(str) {
	var longestWord = "";
	var longestWordCount = 0;
	var words = str.split(" ");

	for (var i = 0; i < words.length; i++) {
		var word = words[i];

		if (word.length > longestWordCount) {
			longestWordCount = word.length;
			longestWord = word;
		}
	}

	return longestWord;
}

console.log(longestWord("Ahamed is a good boy and he is very intelligent"))