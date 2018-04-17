/*1. Write a for loop to log the message “I am love making pizza pies!” 10 times to the console. */

for (var idx = 0; idx <= 9; idx++) {
	console.log("I am love making pizza pies!");
} 

/*2. Create a variable with the name counter with the value 1. Write a for loop to count from 1 to 100 by adding 
1 to the variable counter at the end of the loop. Display what the current value of the variable counter 
is within the loop.
*/

var counter = 1;

for (var i = 1; i <= 100; i++) {
	console.log(counter);
	counter++;
}


/*3. Create a variable that stores an array of 5 words. Each word should a particular type of fruit. 
(e.g [“banana”, “apple”, …] Write a for loop to display every element of the array in order.
--Challenge: Try doing some research to find a different way to loop through the array.
--Bonus Challenge: Try displaying every element of the array using a while loop.
*/

//for loop
var words = "Mangosteen,Durian,Jackfruit,Longan,Canistel fruit".split(",");

for (var j = 0; j < words.length; j++) {
	console.log(`${j+1}. ${words[j]}`);
}

//for-in loop

var fruits = {1: "Mangosteen", 2: "Durian", 3: "Jackfruit", 4: "Longan", 5: "Canistel fruit"};

for (fruit in fruits) {
	console.log(`${fruit}. ${fruits[fruit]}`);
}


//while loop

var k = 0;

while (k < words.length) {
	console.log(`${k+1}. ${words[k]}`);
	k++;
}

/*4. Write a while loop to prompt the user to guess a word and exit the while loop only if the word entered 
is “NYCDA”.
*/

while (true) {
	var word = prompt("Guess a word: ");

	if (word === "NYCDA") {
		break;
	}
}