// Write a function `moreDotLessDash(str)` that takes in a string and returns
// the true if the string contains more dots ('.') than dashes ('-'), false otherwise.
//
// Examples:
//
// moreDotLessDash('2-D arrays are fun. I think.'); // => true
// moreDotLessDash('.-.-.'); // => true
// moreDotLessDash('.-'); // => false
// moreDotLessDash('..--'); // => false


function moreDotLessDash(str) {
	var dotCount = 0;
	var dashCount = 0;

	for (var i = 0; i < str.length; i++) {
		var char = str[i];

		if (char === ".") {
			dotCount += 1;
		} 

		if (char === "-") {
			dashCount += 1;
		} 
	}

	return dotCount > dashCount;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true)
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false