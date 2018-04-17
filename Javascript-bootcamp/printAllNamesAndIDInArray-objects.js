var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winnie",
    id : 1
  }, {
    name : "Pawandeep",
    id : 2
  }
];

// Write a function that will print the name and id of all the students
// Example:
//
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students)
{
    for(var i = 0; i<= students.length - 1; i++)
    {
      var student = students[i];

      console.log(student.name + " is student #" + student.id);
    }
}

printStudents(students2)