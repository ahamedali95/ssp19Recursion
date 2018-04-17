/*#### Cruise Control ####
# We're writing an algorithm for cruise control, where a car's driver can select
# a speed, and the car will try its best to drive at that speed.
#
# Our prototype keeps track of the desired speed and the actual speed of the car
# every second and produces an array of the speed errors that looks like this:
# speed_errors = [3, 2, 1, 0, 0, -2, -4, -3, -1, 1, 0]
#
# Positive speed_errors mean our car is going too fast, negative errors mean
# it's too slow. If the car is too slow or too fast for three seconds in a row,
# we want to make it more responsive.
#
# Write a function increase_responsiveness? that takes a speed_errors array and
# returns true if three consecutive errors are greater than zero or
# three consecutive errors are less than zero.
#
# test_drive_1 = [-1, -1, 2, 0, 1]
# increase_responsiveness?(test_drive_1) #=> false
#
# test_drive_2 = [0, 1, 2, 1, 0, -1]
# increase_responsiveness?(test_drive_2) #=> true


# test_drive_3 = [-1, 1, 2, 2] => true
*/

//initialize count = 1
//iterate through the array and store each number in a variable -> speedError1 and the next number -> speedError2
//check to see speedError1 and speedError2 are both positive or both negative, if so increment count,
//else, then count = 1,
//if count is 3, then return true
//at the end of the for loop, return false meaning the car does not need responsiveness.

function increaseResponsiveness(speedErrors) {
	var count = 1;

	for (var i = 0; i < speedErrors.length - 1; i++) {
		var speedError1 = speedErrors[i];
		var speedError2 = speedErrors[i+1];

		if ((isPositive(speedError1) && isPositive(speedError2)) || (isNegative(speedError1) && isNegative(speedError2))) {
			count += 1
		} else {
			count = 1
		}

		if (count === 3) {
			return true;
		}
	}

	return false;
}


console.log(increaseResponsiveness([-1, -1, 2, 0, 1]));
console.log(increaseResponsiveness([0, 1, 2, 1, 0, -1]));



function isNegative(num) {
	return num < 0;
}

function isPositive(num) {
	return num > 0;
}







function increase_responsiveness(speed_errors) {                 //[0, 1, 2, 1, 0, -1]
	var count = 0; //2

	for (var i = 0; i < speed_errors.length - 1; i++) {
		var num1 = speed_errors[i]; //2
		var num2 = speed_errors[i+1]; //1

		if (  (isNegative(num1) && isNegative(num2)) || (isPositive(num1) && (isPositive(num2))) ) {
			count += 1
		} else {
			count = 0;
		}

		if (count === 2) {
			return true;
		}
	}

	return false;
}

function isNegative(num) {
	return num < 0;
}

function isPositive(num) {
	return num > 0;
}


console.log(increase_responsiveness([-1, -1, 2, 0, 1]));
console.log(increase_responsiveness([0, 1, 2, 1, 0, -1]));