/*#### Pair Sum ####
# Write a function that accepts an array of numbers and a target.
# Find the pairs of indices whose elements sum to the target.
# No pair should appear twice in the result.
#
# Constraints:
# * Do not use looping constructs other than while loops
# * Do not call any methods on the input array except for [], []=, and length.
#
# Example 1:
# target = 10
# ary = [2, 4, 8]
# pairs = pair_sum(ary, target)
# pairs # => [[0, 2]]
#
# Example 2:
# target = 3
# ary = [1, 3, 0, 2, 1]
# pairs = pair_sum(ary, target)
# pairs # => [[0, 3], [1, 2], [3,4]];
*/

//Initiate an empty array -> result
//First I want to iterate throught the array (i = 0; i < arr.length - 1; i++) and store each number in a variable num1
//In the inner for loop, I will iterate through other elements not inclucing the one chosen from the outer for loop
// meaning (j = i+ 1; j < arr.length; j++) and store in  a variable num2
//check to see num1 and num2 adds to target, if it is then add the indeces to an array and push to -> result
//return -> result 

function pairSum(arr, target) { //[1, 3, 0, 2, 1], 3)
	var result = []; //[[0,3],[1,2],[3,4]]

	for (var i = 0; i < arr.length; i++) {
		var num1 = arr[i]; //i = 4; num1 = 1

		for (var j = i + 1; j < arr.length; j++) {
			var num2 = arr[j]; //j = 5; 

			if (num1 + num2 === target) {
				result.push([i,j]);
			}
		}
	}

	return result;
}

console.log(pairSum([1, 3, 0, 2, 1], 3));


















//local variable to store the pairs
//iterate through array i = 0 and store each iteration which is a num in a variable num1
//iterate through array j = i + 1 and store iteration which is a num in a variable num2
//take sum(num1 & num2) and if it equals the target, then make them as pair and push it to pairs array.
//return pairs after the outer loop ends.

/*function pair_sum(array, target) {
	var pairs = [];

	for ( var i = 0; i < array.length; i++) {
		var num1 = array[i];

		for (var j = i + 1; j < array.length; j++) {
			var num2 = array[j];

			if (num1 + num2 === target) {
				pairs.push([i,j]);
			}
		}
	}

	return pairs;
}
*/
