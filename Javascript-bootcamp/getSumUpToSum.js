/* # Write a method that takes in an integer `num` and returns the sum of
# all integers between zero and num, up to and including `num`.
#
# Difficulty: easy.
*/

function findSum(num) {
	return (num*(num+1)/2);
}

console.log(findSum(100));