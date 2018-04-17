/* # Write a method that will take a string as input, and return a new
# string with the same letters in reverse order.
#
# Don't use String's reverse method; that would be too simple.
#
# Difficulty: easy.
*/

function reverseString(str) {
	var newStr = "";

	for (var i = str.length - 1; i >=0 ; i--) {
		newStr += str[i];
	}

	return newStr;
}

console.log(reverseString("ahamed is a good boy"));