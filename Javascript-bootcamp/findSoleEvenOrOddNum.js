/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
console.log(output); // --> ohs axe trelpma
*/

function findSoleEvenOrOdd(str) {
  var numsString = str.split(" ");
  var nums = numsString.map(function(numString) {
  	return parseInt(numString);
  });

  //nums.unshift("dummy");
  //console.log(nums);
  var evens = [];
  var odds = [];

  for (var i = 0; i < nums.length; i++) {
  	if (nums[i] % 2 === 0) {
  		evens.push(i);
  	} else {
  		odds.push(i);
  	}
  }

  if (evens.length === 1) {
  	return evens[0] + 1;
  }

  return odds[0] + 1;
}

console.log(findSoleEvenOrOdd("2 4 7 8 10"));

