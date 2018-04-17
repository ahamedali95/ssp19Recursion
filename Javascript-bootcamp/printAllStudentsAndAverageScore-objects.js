var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

// Write a function that will print the name of the student and their average test score
//
// Example
//
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333


function getAverageScore(student)
{
  var sum = 0;
  var grades = student.grades;
  for(var i = 0; i < grades.length; i++)
  {
    var grade = grades[i];
    sum += grade.score;
  }
  var avg = sum/grades.length;
  return avg;
}


function printAverageGrade(students)
{
  for(var i = 0; i < students.length; i++)
  {
    var student = students[i];
    var averageScore = getAverageScore(student);

    console.log(student.name, averageScore);
  }
}


printAverageGrade(students3)