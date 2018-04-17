/*#### Alien Phone Number ####
# There is a nearby alien planet whose numbers are formatted as
# "xxxx xxxx" where "x" is any numerical digit (0-9). Write a function
# that determines whether a given string is a valid alien phone number.
#
# constraint: You may not use RegExp.
#
# examples:
# alien_phone_number?('1234 5678') #=> true
# alien_phone_number?('ar32 t19i) #=> false
# alien_phone_number?('123 45678') #=> false
# alien_phone_number?('12345678') #=> false
# alien_phone_number?('1234 567') #=> false
# alien_phone_number?('12345 12345') #=> false
*/

//eliminate cases (return false) if the string does not have a length of 9 or th4 4th of the string
//does not contain a space.
//iterature throught the first of the string and check whether each character is a number and if it is not, 
//then return false.
//iterature through the second half of the string and return false if a character is not a number.
//Return true only after completing the two for loops, measning that it is in the valid phone format

function alien_phone_number(str) {  //'ar32 t19i'
	var num = [];

	for (var i = 0; i < 10; i++) {
		num.push(i.toString());
	}

	if (str.length !== 9 || str[4] !== " ") {
		return false;
	}

	for (var i = 0; i < 4; i++) {      //"ar32"
		var char = str[i];  //"a"
		if (num.indexOf(char) === -1) {
			return false;
		}
	}

	for (var i = 5; i < str.length; i++) { //"5678"
		var char = str[i];  //"8"
		if (num.indexOf(char) === -1) {
			return false;
		}
	}

	return true;
}



console.log(alien_phone_number('ar32 t19i')); // #=> false
console.log(alien_phone_number('1234 5678'));  // #=> true
console.log(alien_phone_number('123 45678')); // #=> false
console.log(alien_phone_number('12345678')); // #=> false
console.log(alien_phone_number('1234 567')); //#=> false
console.log(alien_phone_number('12345 12345')); // #=> false*/

/*function alien_phone_number(num) {              //'ar32 t19i"
	var numArray = [0,1,2,3,4,5,6,7,8,9]; 
	if (num.length !== 9 || num[4] !== " ") {
		return false;
	}

	for (var i = 0; i < 4; i++) {				//ar32
		var number = Number(num[i]);			//a -> NaN
		if (numArray.indexOf(number) === -1) {	//-1
			return false;						
		}
	}

	for (var j = 5; j < num.length; j++) {  		//5678
		var number = Number(num[j]);				//8
		if (numArray.indexOf(number) === -1) {		//8
			return false;
		}
	}

	return true;
}*/










function alien_phone_number1(num) {  //alien_phone_number?('ar32 t19i')
	if (num[4] === " " && num.length === 9) {   
		for (var i = 0; i < 4; i++) {
			var num1 = parseInt(num[i]); //a - NaN
			var num2 = parseInt(num[i+5]); //t - Nan
			if (isNaN(num1) || isNaN(num2)) { 
				return false;
			}
		}

		return true;
	}

	return false;
}


function compareNum(num1, num2) {
	if ((num1 >= 0 || num1 <= 9) && (num2 >= 0 || num2 <= 9)) {
		return true;
	}
	console.log("string");
	return false;
}

/*console.log(alien_phone_number('ar32 t19i')); // #=> false
console.log(alien_phone_number('1234 5678'));  // #=> true
console.log(alien_phone_number('123 45678')); // #=> false
console.log(alien_phone_number('12345678')); // #=> false
console.log(alien_phone_number('1234 567')); //#=> false
console.log(alien_phone_number('12345 12345')); // #=> false*/

