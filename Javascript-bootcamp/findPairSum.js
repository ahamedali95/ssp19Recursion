/*Given a list of non-negative integers and a target sum, find a pair of 
numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(arr, target) {
  var pair = [];

  for (var i = 0; i < arr.length; i++) {
  	var num1 = arr[i];

  	for (var j = i + 1; j < arr.length; j++) {
  	  var num2 = arr[j];

  	  if (num1 + num2 === target) {
  	  	pair.push(num1, num2);
  	  	return pair;
  	  }
  	}
  }

  return -1;
}

console.log(findPairForSum([3, 34, 40, 12, 5, 3], 9));