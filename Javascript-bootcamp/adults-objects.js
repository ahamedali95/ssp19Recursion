// Write a function `adults(people)` that takes in an array of person objects.
// The function should return an array containing the names of those who have
// an age of 18 or higher.
//
// Example:
//
// var ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];
//
// adults(ppl); // => [ 'John', 'Jane' ]

function adults(people)
{
	var majors = [];

	for(var i = 0; i <= people.length - 1; i++)
	{
		var person = people[i];
		var name = person.name;
		var age = person.age;
		if(age >= 18)
		{
			majors.push(name);
		}
	}
	return majors;
}



var ppl = [
{name: 'John', age: 20},
   {name: 'Jim', age: 13},
   {name: 'Jane', age: 18},
   {name: 'Bob', age: 7}
 ];
//
console.log(adults(ppl)); // => [ 'John', 'Jane' ]