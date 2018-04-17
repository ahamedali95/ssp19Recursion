/*1. Prompt the user for their name then store this is a variable. Write an if statement that checks to see 
if this variable is equal to Abraham Lincoln. If it does, then alert the text “Four score and seven years
ago!” to the screen.
*/
var person = prompt("Your name: ");

if (person === "Abraham Lincoln") {
   	 alert("Four score and seven years ago!");
   	}

/*2. Prompt the user for a number that is greater than 22 and store this as a variable. Write an if statement 
that checks to see if this variable is greater than 22. If it is then it should alert “This number is 
greater than 22” to the screen.
*/
var num = prompt("A number greater than 22: ");

if (num > 22) {
	alert("This number is greater than 22");
}

/*3. Prompt the user for a number that is greater than 100 but less than 2000 and store this as a variable. 
Write an if statement that checks to see if this variable is greater than 100 and less than 2000. 
If it is then it should alert “You are amazingly correct!” to the screen. If it is not then it should 
alert “Awww, it looks that number is not correct…. Try again!” to the screen.
*/

var num2 = prompt("A number greater than 100 and less than 2000: ");

if (num2 > 100 && num2 < 2000) {
	alert("You are amazingly correct!");
} else {
	alert("Awww, it looks that number is not correct…. Try again!");
}

/*4. Prompt the user to choose a number between 1 and 5 and store this in a variable. Write an if statement 
that checks to see if the variable is either 1 or 2 and if so it should alert “You have just won a car!”. 
Write another if statement that checks to see if the variable is between 3 and 4 and if so it should alert 
“You have just won a gallon of milk!”. Lastly, write another if statement to check if the variable is equal 
to 5 and if so it should alert “Awww, sorry… it seems like you didn’t choose the right number… No worries! 
Try again!”.
*/

var num3 = prompt("A number between 1 and 5: ");

if (num3 === 1 || num3 === 2) {
	alert("You have just won a car!");
} else if (num3 > 3 && num3 < 4) {
	alert("You have just won a gallon of milk!");
} else if (num3 === 5) {
	alert("Awww, sorry… it seems like you didn’t choose the right number… No worries! Try again!");
}

