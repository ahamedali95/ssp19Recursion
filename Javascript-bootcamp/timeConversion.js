/*# Write a method that will take in a number of minutes, and returns a
# string that formats the number into `hours:minutes`.
#
# Difficulty: easy.

def time_conversion(minutes)
*/

function timeConversion(min) {
	var minutes = min % 60;
	var hours = Math.floor(min / 60);

	return minutes + ":" + hours;
}

console.log(timeConversion(300));