/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
	var joinedSen = removeSpace(sentence); //I am aware of following method: String.prototype.replace();

  	for (var i = 0; i < joinedSen.length; i++) {
  		var front = joinedSen[i];
    	var back = joinedSen[joinedSen.length - 1 - i];

    	if (front !== back) {
    		return false;
    	}
  	}

  	return true;
}

function removeSpace(str) {
	var newStr = "";

	for (var i = 0; i < str.length; i++) {
		var char = str[i];

		if (char !== " ") {
			newStr += char;
		}
	}

	return newStr;
}

console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false