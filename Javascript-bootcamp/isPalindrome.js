/* # Write a method that takes a string and returns true if it is a
# palindrome. A palindrome is a string that is the same whether written
# backward or forward. Assume that there are no spaces; only lowercase
# letters will be given.
#
*/

function isPalindrome(string) {
	for (var i = 0; i < string.length; i++) {
		var firstChar = string[i];
		var lastChar = string[string.length - 1 - i];

		if (firstChar !== lastChar) {
			return false;
		}
	}

	return true;
}

console.log(isPalindrome("ooballaboo"));