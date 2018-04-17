/*Flip every chunk of n characters in a string, where n is any positive integer 
greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example'; 
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'. a sho  0-> 4, 1 ->3, 2->2, 3->1, 4->0   
'rt ex' -> 'xe tr'
'ample' -> 'elpma'
*/

function flipNchars(input, num) {
  var chars = input.split("");
  var j = 0;
  var str = "";

  for (var i = 0; i < chars.length; i = i + num) {
  	j++;
  	var arr = chars.slice(i, num * j).reverse();
  	
  	for (var k = 0; k < arr.length; k++) {
  		str += arr[k];
  	}
  }

  return str;
} 

var input = 'a short example'; 

console.log(flipNchars(input, 5));
