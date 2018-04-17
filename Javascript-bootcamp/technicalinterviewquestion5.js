
/*#### Math Eval ####
# Eval is a function that takes a string and executes it as code. This
# can be very complicated to implement, so you will only need to
# implement a small subset.
#
# Write a function math_eval that takes a string and evaluates single-digit
# numbers as well as the 4 basic arithmetic functions ( + - * / ). Do not worry about
# parentheses or order of operations. Just evaluate everything from left
# to right. You may also assume that you will be given syntactically
# correct statements with no spaces or extra characters.
#
# Constraint: You may not call eval or any similar function.
#
# Examples:
# math_eval('5') => 5
# math_eval('5+5') => 10
# math_eval('1+2*3') => 9
#
# Bonus: If you have extra time, support double-digit numbers.
# math_eval('10*2/5+16') => 20
*/

//Handle easy case - if length === 1, then return the string itself.
//Iterate through each character of the string and check to see whether each character is a number or 
//an arithmetic operator.
//If it is a number, then I will add it to an array -> numArr
//If it is an operator, then I will get the last number -> num1 from -> numArr and get the next character -> num2 and 
//operate on num1 and num2 according to the operator.
//Store result in a variable => result

function mathEval(str) {    //'1+2*3'
	var numArr = []; //[1,2,3]
	var result = 0; //3 + 6 = 9

	if (str.length === 1) {
		return Number(str);
	}

	for (var i = 0; i < str.length; i++) {
		var char = str[i]; //"3"
		if (char === "+" || char === "-" || char === "*" || char === "/") {
			var num1 = numArray[numArray.length - 1]; //2
			var num2 = Number(str[i+1]); //3

			result += calculate(char, num1, num2);
		} else {
			numArr.push(Number(char));
		}
	}

	return result; => //9
}


function calculate(char, num1, num2) {
	if (char === "+") {
		return num1 + num2;
	} else if (char === "-") {
		return num1 - num2;
	} else if (char === "*") {
		return num1 * num2;
	} else {
		return num1 / num2;
	}
}











function eval(str) {
	var result = 0;
	var numArray = [];

	if (str.length === 1) {
		return Number(str);
	}

	for (var i = 0; i < str.length - 1; i++) {
		var char = str[i];
		if (char === "+" || char === "-" || char === "*" || char === "/") {
			var num1 = numArray[numArray.length - 1];
			var num2 = Number(str[i+1]);	
			console.log(num1, num2);
			result += operation(char, num1, num2);
		} else {
			numArray.push(Number(char));
		}
	}

	return result;
}

function operation(char, num1, num2) {
	if (char === "+") {
		return num1 + num2;
	} else if (char === "*") {
		return num1 * num2;
	}
}

console.log(eval('5*5+8+2')); // => 10)