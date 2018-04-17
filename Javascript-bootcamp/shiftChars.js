// Write a function shiftChars(word, num) that takes in a
// lowercase string and a number.
// The function should return a string where every character
// of the word is shifted `num` times in the alphabet.
//
// Use this alphabet array to help:
//
// var alphabet = [
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z'
// ];
//
// Examples:
//
// shiftChars('able', 1); // => 'bcmf'
// shiftChars('apple', 2); //=> 'crrng'
// shiftChars('bootcamp', 3); //=> 'errwfdps'
// shiftChars('zebra', 5); //=> 'ejgwf'


 var alphabet = [
   'a','b','c','d','e','f','g','h','i','j','k','l','m',
   'n','o','p','q','r','s','t','u','v','w','x','y','z'
 ];

function shiftChars(word, num) {
	var str = "";

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		var position = alphabet.indexOf(char);
		str += alphabet[(position + num) % alphabet.length];
	}

	return str;
}


console.log(shiftChars('able', 1)); // => 'bcmf'
console.log(shiftChars('apple', 2)); //=> 'crrng'
console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
console.log(shiftChars('zebra', 5)); //=> 'ejgwf'
