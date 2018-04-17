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

// Write a function that will print the name of the student and their highest test score
// Example:
//
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function printBestGrade(students) 
{
  for(var i = 0; i<= students.length - 1; i++)
  {
    var student = students[i];
    var highestScore = getHighestScore(student);

    console.log(student.name, highestScore);
  }
}

function getHighestScore(student)
{
  var highestScore = 0;
  var grades = student.grades
  for(var j = 0; j<= student.grades.length - 1; j++)
  {
     var grade = grades[j];
     if(grade.score > highestScore)
     {
        highestScore = grade.score;
     } 
  }
  return highestScore;
}

 printBestGrade(students3); // uncomment when ready to test