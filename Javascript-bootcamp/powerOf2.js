/* # Write a method that takes in a number and returns true if it is a
# power of 2. Otherwise, return false.
#
# You may want to use the `%` modulo operation. `5 % 2` returns the
# remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
# of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
#
# Difficulty: medium.
*/

function powerOfTwoCheck(number) {
	var product = 1;
	var i = 0;
	while(number > product) {
		product *= 2;

		if (product === number) {
			return true;
		}

		i++;
	}

	return false;
}

console.log(powerOfTwoCheck(2));