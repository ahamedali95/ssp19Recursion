/*
You will be given an array that contains two strings. Your job is to create a function 
that will take those two strings and transpose them, so that the strings go 
from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d
*/

function transpose(arr) {
  var word1 = arr[0];
  var word2 = arr[1];
  var str = "";
  var interval = null;

  if (word1.length === word2.length) {
  	interval = word1.length;
  } else if (word1.length > word2.length) {
  	interval = word1.length;
  } else {
  	interval = word2.length;
  }
  console.log(interval);

  for (var i = 0; i < interval; i++) {
  	if (word1[i] !== undefined && word2[i] !== undefined) {
  		str += word1[i] + " " + word2[i] + "\n";
  	} else if (word1[i] !== undefined && word2[i] === undefined) {
  		str += word1[i] + "  " + "\n";
  	} else {
  		str += "  " + word2[i] + "\n";
  	}
  }

  return str;
}

console.log(transpose(['Hello1dsnsdnsndjsnjnsjkdnsk','World1199']));

