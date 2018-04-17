/*# Number Counting Sequence
# ------------------------------------------------------------------------------
# The number counting sequence is a sequence of number strings that begins with:
# ["", "1", "11", "21", "1211", "111221", "312211", "13112221", "1113213211" ...]
#
# "1" is counted as "one 1" or "11", followed by
# "11" which is counted as "two 1s" or "21", followed by
# "21" which is counted as "one 2 and one 1" or "1211", and so on.
#
# It helps to "say it out loud" to describe the item in the sequence.
#
# Given an integer n, generate the n-th element in the number counting sequence.
# puts "-------Number Counting Sequence-------"
# puts number_counting_seq(0) == ""
# puts number_counting_seq(1) == "1"
# puts number_counting_seq(2) == "11" # one 1 above
# puts number_counting_seq(3) == "21" # two 1s above
# puts number_counting_seq(5) == "111221" #the last sequence was one 1, one 2, and two 1s: "1211"
# puts number_counting_seq(8) == "1113213211"           // "211113121113121111" "12212113111221111311122121"
# puts number_counting_seq(10) == "13211311123113112211"
*/

function number_counting_seq(n) { //5
	var sequence = ["", "1", "11"];
	var count = 1; //2
	var str = ""

	if (n === 0) {
		return "";
	}

	if (n === 1) {
		return "1";
	}

	if (n === 2) {
		return "11";
	}

	for (var i = 2; i < n; i++) { 
		var str = sequence[i]; //"21"
		console.log(str);

		for (var j = 0; j < str.length; j++) {     
			var num1 = str[j];      //"1"
			var num2 = str[j+1];    //"undefined"
		

			if (num1 === num2) {
				count += 1;
			} else {
				str += String(count)  + num1;
				count = 1;
			}
		}

		sequence.push(str);
		str = "";
	}

	return sequence;
}


console.log(number_counting_seq(3));