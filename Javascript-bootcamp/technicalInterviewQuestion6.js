/*#### Decode ####
# You are given an encoded string. The code is defined as follows:
# * Each character in the encoded string is followed by a single-digit number.
# * The number represents how many times the character appears in a row.
#
# Write a function that takes in an encoded string and returns the original.
#
# Example:
# encoded_string = "m1i1s2i1s2i1p2i1"
# decoded_string = decode(encoded_string)
# decoded_string # => "mississippi"
*/


function decode(str) {
	var decodedString = "";

	for (var i = 0 ; i < str.length; i += 2) {
		var char = str[i];
		var number = str[i+1];
		decodedString += getChars(char,number);
	}

	return decodedString;
}

function getChars(char, num) {
	var str = "";

	for (var i = 0; i < num; i++) {
		str += char;
	}

	return str;
}


console.log(decode("m1i1s2i1s2i1p2i1"));
