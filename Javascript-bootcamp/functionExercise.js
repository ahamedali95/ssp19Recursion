/*1. Create a function named multiplier that accepts 1 input parameter (variable) called number. Within the 
function, multiply number by 25 and return that result from the function.
*/

function multiplier(number) {
	var result = number * 25;

	return result;
}

/*2. Create a function named fullName that accepts 2 input parameters called firstName and lastName. Within 
the function, concatenate both of those variables together with a space in between. 
(e.g fullName(“Brad”, “Pitt”) would return “Brad Pitt”)
*/

function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}

/*3. Create a function named fullNameAndAge that accepts 3 parameters called firstName, lastName and age. 
Within fullNameAndAge, call the fullName function by passing in firstName and lastName variables as 
parameters into it and store the result of that function in a variable named result. Now return the 
full name as the age separated by a comma and a space. (e.g fullNameAndAge(“Jane”, “Doe”, 23) would 
return “Jane Doe, 23”
*/

function fullNameAndAge(firstName, lastName, age) {
	var result = fullName(firstName, lastName);

	return `${result}, ${age}`;
}
