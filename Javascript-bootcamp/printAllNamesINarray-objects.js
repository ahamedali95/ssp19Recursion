var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

// Write a function that will print the name of all the students
// Example:
//
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students)
{
	for(var i = 0; i<= students.length - 1; i++)
	{
		var student = students[i]
		var studentName = student.name;

		console.log(studentName);
	}
    
}

printNames(students1); // uncomment when ready to test

