// Flip every pair of characters in a string.


// Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipChars(str) {
  var chars = str.split("");
  

  for (var i = 0; i < chars.length; i = i + 2) { //i = 2
  	var temp = chars[i]; //c
  	var temp2 = chars[i+1]; //c
  	chars[i+1] = temp; //c
  	chars[i] = temp2; //c
  }

  return chars.join("");
}

function assertEqual(actual, expected, testName) {
	if (actual === expected) {
		console.log("passed");
	} else {
		console.log("FAILED " + "[" + testName + "]" + " expected " + expected + " but got " + actual);
	}
}

var actual = flipChars(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEqual(actual, expected, "It should flip every pair of characters in the string");



//check
//hceck
//hccek
//hecck
//heckc

